const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = process.cwd();
const DATA_DIR = path.join(ROOT, 'data');
const OUTPUT_FILE = path.join(ROOT, 'eurasian_chronicles_complete.md');

const CATEGORY_FILES = [
  'prologue.ts',
  'year1.ts',
  'year2.ts',
  'year3.ts',
  'russia_travel.ts',
  'eurasia_travel.ts',
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

function htmlToMarkdown(html) {
  let text = html;

  text = text.replace(/<h3[^>]*>[\s\S]*?<\/h3>/gi, '\n');
  text = text.replace(/<hr[^>]*\/?>/gi, '\n');
  text = text.replace(/<br\s*\/?>/gi, '\n');

  text = text.replace(/<blockquote[^>]*>/gi, '\n> ');
  text = text.replace(/<\/blockquote>/gi, '\n');

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

  text = stripEmoji(text);
  text = cleanInlineWhitespace(text);

  return text;
}

function formatPost(post) {
  const lines = [];
  const titleKo = stripEmoji(post.title?.ko || '');
  const titleEn = stripEmoji(post.title?.en || '');
  const subtitleKo = stripEmoji(post.subtitle?.ko || '');
  const subtitleEn = stripEmoji(post.subtitle?.en || '');

  lines.push(`### ${titleKo}`);
  if (titleEn && titleEn !== titleKo) {
    lines.push('');
    lines.push(`English title: ${titleEn}`);
  }
  if (subtitleKo) {
    lines.push('');
    lines.push(`Subtitle: ${subtitleKo}`);
  }
  if (subtitleEn) {
    lines.push('');
    lines.push(`English subtitle: ${subtitleEn}`);
  }
  if (post.imageUrl) {
    lines.push('');
    lines.push(`Image: ${post.imageUrl}`);
  }

  lines.push('');
  lines.push('#### Korean');
  lines.push('');
  lines.push(htmlToMarkdown(post.content?.ko || ''));

  lines.push('');
  lines.push('#### English');
  lines.push('');
  lines.push(htmlToMarkdown(post.content?.en || ''));

  return lines.join('\n');
}

function formatCategory(category) {
  const lines = [];
  const titleKo = stripEmoji(category.title?.ko || category.id);
  const titleEn = stripEmoji(category.title?.en || '');

  lines.push(`## ${titleKo}`);
  if (titleEn && titleEn !== titleKo) {
    lines.push('');
    lines.push(`English title: ${titleEn}`);
  }

  if (!category.posts || category.posts.length === 0) {
    const descKo = stripEmoji(category.description?.ko || '작성 중');
    const descEn = stripEmoji(category.description?.en || 'In progress');
    lines.push('');
    lines.push(`Korean: ${descKo}`);
    lines.push('');
    lines.push(`English: ${descEn}`);
    return lines.join('\n');
  }

  for (const post of category.posts) {
    lines.push('');
    lines.push(formatPost(post));
  }

  return lines.join('\n');
}

function main() {
  const lines = ['# Eurasian Chronicles Complete Markdown'];

  for (const fileName of CATEGORY_FILES) {
    const category = loadCategory(path.join(DATA_DIR, fileName));
    lines.push('');
    lines.push(formatCategory(category));
  }

  fs.writeFileSync(OUTPUT_FILE, `${lines.join('\n')}\n`, 'utf8');
  console.log(`Wrote ${OUTPUT_FILE}`);
}

main();
