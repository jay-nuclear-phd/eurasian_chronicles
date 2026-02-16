import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types';
import CommentSection from './CommentSection';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type NavPost = {
  id: string;
  title: string;
  categoryId: string;
}

interface PostViewProps {
  post: Post;
  categoryTitle: string;
  onBack?: () => void;
  prevPost?: NavPost | null;
  nextPost?: NavPost | null;
}

const PostView: React.FC<PostViewProps> = ({ post, categoryTitle, onBack, prevPost, nextPost }) => {
  const [localComments, setLocalComments] = useState(post.comments);

  useEffect(() => {
    // Reset comments when post changes
    setLocalComments(post.comments);
  }, [post]);


  const handleAddComment = (content: string, author: string) => {
    const newComment = {
      id: Date.now().toString(),
      content,
      author,
      date: new Date().toLocaleDateString(),
    };
    setLocalComments([...localComments, newComment]);
  };

  const renderPostNavLink = (navPost: NavPost, type: 'prev' | 'next') => {
    if (!navPost) {
      return <div className="w-1/2" />;
    }
    const isPrev = type === 'prev';
    return (
      <Link 
        to={`/${navPost.categoryId}/${navPost.id}`}
        className={`w-1/2 p-4 border rounded-lg flex items-center gap-4 hover:bg-slate-50 hover:border-slate-300 transition-colors group ${isPrev ? 'justify-start' : 'justify-end'}`}
      >
        {isPrev && <ChevronLeft className="text-slate-400 group-hover:text-russia-blue" />}
        <div className={isPrev ? 'text-left' : 'text-right'}>
          <div className="text-xs text-slate-500">{isPrev ? '이전 글' : '다음 글'}</div>
          <div className="font-serif font-bold text-slate-700 group-hover:text-russia-blue truncate">{navPost.title}</div>
        </div>
        {!isPrev && <ChevronRight className="text-slate-400 group-hover:text-russia-blue" />}
      </Link>
    );
  }

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
        className="prose prose-lg prose-slate mx-auto font-serif text-slate-700 leading-loose"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      
      {/* Prev/Next Navigation */}
      <div className="mt-16 pt-8 border-t border-slate-200 flex justify-between items-center gap-4">
        {renderPostNavLink(prevPost, 'prev')}
        {renderPostNavLink(nextPost, 'next')}
      </div>


      {/* Comments */}
      <div className="mt-16">
        <CommentSection comments={localComments} onAddComment={handleAddComment} />
      </div>
    </article>
  );
};

export default PostView;