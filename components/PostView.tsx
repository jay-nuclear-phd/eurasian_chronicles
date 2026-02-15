import React, { useState } from 'react';
import { Post } from '../types';
import CommentSection from './CommentSection';

interface PostViewProps {
  post: Post;
  categoryTitle: string;
  onBack?: () => void;
}

const PostView: React.FC<PostViewProps> = ({ post, categoryTitle, onBack }) => {
  const [localComments, setLocalComments] = useState(post.comments);

  const handleAddComment = (content: string, author: string) => {
    const newComment = {
      id: Date.now().toString(),
      content,
      author,
      date: new Date().toLocaleDateString(),
    };
    setLocalComments([...localComments, newComment]);
  };

  return (
    <article className="max-w-3xl mx-auto animate-fadeIn pb-20">
      {onBack && (
        <button 
          onClick={onBack}
          className="mb-8 text-sm text-slate-500 hover:text-russia-blue flex items-center gap-1 transition-colors"
        >
          ← 목록으로 돌아가기
        </button>
      )}

      {/* Header */}
      <header className="mb-10 text-center">
        <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold mb-4 tracking-wide">
          {categoryTitle}
        </span>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4 leading-tight">
          {post.title}
        </h1>
        {post.subtitle && (
          <h2 className="text-lg md:text-xl text-slate-600 font-light italic mb-6">
            {post.subtitle}
          </h2>
        )}
      </header>

      {/* Featured Image */}
      {post.imageUrl && (
        <div className="mb-10 rounded-xl overflow-hidden shadow-lg aspect-video relative group">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent pointer-events-none" />
        </div>
      )}

      {/* Content */}
      <div 
        className="prose prose-lg prose-slate mx-auto mb-12 font-serif text-slate-700 leading-loose first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Comments */}
      <CommentSection comments={localComments} onAddComment={handleAddComment} />
    </article>
  );
};

export default PostView;