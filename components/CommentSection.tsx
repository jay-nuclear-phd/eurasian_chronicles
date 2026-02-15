import React, { useState } from 'react';
import { Send, User } from 'lucide-react';
import { Comment } from '../types';

interface CommentSectionProps {
  comments: Comment[];
  onAddComment: (content: string, author: string) => void;
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments, onAddComment }) => {
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim() && authorName.trim()) {
      onAddComment(newComment, authorName);
      setNewComment('');
      setAuthorName('');
    }
  };

  return (
    <div className="mt-12 pt-8 border-t border-slate-200">
      <h3 className="text-2xl font-serif text-slate-800 mb-6 flex items-center gap-2">
        독자 한마디 <span className="text-sm font-sans text-slate-500 font-normal">({comments.length})</span>
      </h3>

      {/* Comment List */}
      <div className="space-y-6 mb-10">
        {comments.length === 0 ? (
          <div className="text-slate-400 italic text-center py-4 bg-slate-50 rounded-lg">
            첫 번째 독자가 되어주세요.
          </div>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-500">
                  <User size={16} />
                </div>
                <span className="font-semibold text-slate-700">{comment.author}</span>
                <span className="text-xs text-slate-400">| {comment.date}</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed pl-10">{comment.content}</p>
            </div>
          ))
        )}
      </div>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="bg-slate-50 p-6 rounded-xl border border-slate-200">
        <h4 className="text-sm font-bold text-slate-600 mb-4 uppercase tracking-wider">메시지 남기기</h4>
        <div className="grid gap-4">
          <input
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            placeholder="이름 (닉네임)"
            className="w-full md:w-1/3 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-russia-blue/50 text-sm"
            required
          />
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="이 글에 대한 생각이나 응원의 메시지를 남겨주세요."
            className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-russia-blue/50 text-sm h-24 resize-none"
            required
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-russia-blue hover:bg-slate-800 text-white px-6 py-2 rounded-md text-sm font-semibold transition-colors flex items-center gap-2"
            >
              <Send size={14} />
              등록하기
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CommentSection;