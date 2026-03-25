const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = process.cwd();
const DATA_DIR = path.join(ROOT, 'data');
const OUTPUT_FILE = path.join(ROOT, 'eurasian_chronicles_english_only.md');

const CATEGORY_FILES = [
  'prologue.ts',
  'year1.ts',
  'russia_travel.ts',
  'year2.ts',
  'eurasia_travel.ts',
  'year3.ts',
  'epilogue.ts',
  'acknowledgments.ts',
];

function loadCategory(filePath) {
  let source = fs.readFileSync(filePath, 'utf8');
  source = source.replace(/import\s+\{\s*Category\s*\}\s+from\s+['"][^'"]+['"];\s*/g, '');
  source = source.replace(
    /import\s+([A-Za-z0-9_$]+)\s+from\s+['"]([^'"]+)['"];\s*/g,
    (_, name, importPath) => `const ${name} = '${importPath}';\n`
  );
  source = source.replace(/export const \w+\s*:\s*Category\s*=\s*/, 'module.exports = ');

  const context = {
    module: { exports: {} },
    exports: {},
  };

  vm.runInNewContext(source, context, { filename: filePath });
  return context.module.exports;
}

function stripEmoji(text) {
  return text
    .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{1F1E6}-\u{1F1FF}\uFE0F\u200D]/gu, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

function cleanInlineWhitespace(text) {
  return text
    .replace(/\r/g, '')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function splitLongParagraphs(text) {
  const paragraphs = text.split(/\n\s*\n/);

  const rewritten = paragraphs.flatMap((paragraph) => {
    const trimmed = paragraph.trim();
    if (!trimmed) return [];
    if (trimmed.startsWith('>')) return [trimmed];
    if (trimmed.length < 900) return [trimmed];

    const sentences = trimmed.match(/[^.!?]+[.!?]+(?:["')\]]+)?|[^.!?]+$/g);
    if (!sentences || sentences.length < 4) return [trimmed];

    const chunks = [];
    let current = [];
    let currentLength = 0;

    for (const sentence of sentences) {
      const cleanSentence = sentence.trim();
      if (!cleanSentence) continue;

      if (currentLength >= 550 && current.length >= 2) {
        chunks.push(current.join(' ').trim());
        current = [];
        currentLength = 0;
      }

      current.push(cleanSentence);
      currentLength += cleanSentence.length + 1;
    }

    if (current.length) {
      chunks.push(current.join(' ').trim());
    }

    return chunks;
  });

  return rewritten.join('\n\n');
}

function htmlToMarkdown(html) {
  let text = html;

  text = text.replace(/<h3[^>]*>[\s\S]*?<\/h3>/gi, '\n');
  text = text.replace(/<hr[^>]*\/?>/gi, '\n');
  text = text.replace(/<br\s*\/?>/gi, '\n');

  text = text.replace(/<blockquote[^>]*>/gi, '\n> ');
  text = text.replace(/<\/blockquote>/gi, '\n');

  text = text.replace(/<figure[^>]*>[\s\S]*?<\/figure>/gi, '\n');

  text = text.replace(/<p[^>]*>/gi, '');
  text = text.replace(/<\/p>/gi, '\n\n');
  text = text.replace(/<div[^>]*>/gi, '\n');
  text = text.replace(/<\/div>/gi, '\n');

  text = text.replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, '**$1**');
  text = text.replace(/<span[^>]*>([\s\S]*?)<\/span>/gi, '$1');
  text = text.replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, '*$1*');
  text = text.replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, '*$1*');

  text = text.replace(/<[^>]+>/g, '');

  text = text
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"');

  return splitLongParagraphs(cleanInlineWhitespace(stripEmoji(text)));
}

function formatPost(post) {
  const lines = [];
  const title = stripEmoji(post.title?.en || post.title?.ko || '');
  const body = htmlToMarkdown(post.content?.en || '');

  lines.push(`### ${title}`);
  lines.push('');
  lines.push(body);

  return lines.join('\n');
}

function formatCategory(category) {
  const lines = [];
  const title = stripEmoji(category.title?.en || category.title?.ko || category.id);

  lines.push(`## ${title}`);

  for (const post of category.posts || []) {
    lines.push('');
    lines.push(formatPost(post));
  }

  return lines.join('\n');
}

function main() {
  const lines = ['# Eurasian Chronicles', '', 'English Translation Collection'];

  for (const fileName of CATEGORY_FILES) {
    const category = loadCategory(path.join(DATA_DIR, fileName));
    lines.push('');
    lines.push(formatCategory(category));
  }

  fs.writeFileSync(OUTPUT_FILE, `${lines.join('\n')}\n`, 'utf8');
  console.log(`Wrote ${OUTPUT_FILE}`);
}

main();
