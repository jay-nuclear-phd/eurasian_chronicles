import React, { useState } from 'react';
import { Send, User, Edit2, Trash2, X, Check } from 'lucide-react';
import { Comment } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { UI_STRINGS } from '../constants';

interface CommentSectionProps {
  comments: Comment[];
  onAddComment: (content: string, author: string, password?: string) => void;
  onUpdateComment: (id: string, content: string) => void;
  onDeleteComment: (id: string) => void;
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments, onAddComment, onUpdateComment, onDeleteComment }) => {
  const { language } = useLanguage();
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [password, setPassword] = useState('');
  
  // State for editing
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState('');

  const t = UI_STRINGS.commentSection;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim() && authorName.trim()) {
      onAddComment(newComment, authorName, password);
      setNewComment('');
      setAuthorName('');
      setPassword('');
    }
  };

  const handleEditClick = (comment: Comment) => {
    const inputPassword = prompt(t.passwordPrompt[language]);
    if (inputPassword === comment.password) {
      setEditingId(comment.id);
      setEditContent(comment.content);
    } else if (inputPassword !== null) {
      alert(t.wrongPassword[language]);
    }
  };

  const handleDeleteClick = (comment: Comment) => {
    const inputPassword = prompt(t.passwordPrompt[language]);
    if (inputPassword === comment.password) {
      if (window.confirm(language === 'ko' ? '정말 삭제하시겠습니까?' : 'Are you sure you want to delete this?')) {
        onDeleteComment(comment.id);
      }
    } else if (inputPassword !== null) {
      alert(t.wrongPassword[language]);
    }
  };

  const handleUpdate = () => {
    if (editingId && editContent.trim()) {
      onUpdateComment(editingId, editContent);
      setEditingId(null);
      setEditContent('');
    }
  };

  return (
    <div className="mt-12 pt-8 border-t border-slate-200">
      <h3 className="text-2xl font-serif text-slate-800 mb-6 flex items-center gap-2">
        {t.title[language]} <span className="text-sm font-sans text-slate-500 font-normal">({comments.length})</span>
      </h3>

      {/* Comment List */}
      <div className="space-y-6 mb-10">
        {comments.length === 0 ? (
          <div className="text-slate-400 italic text-center py-4 bg-slate-50 rounded-lg">
            {t.empty[language]}
          </div>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-500">
                    <User size={16} />
                  </div>
                  <span className="font-semibold text-slate-700">{comment.author}</span>
                  <span className="text-xs text-slate-400">| {comment.date}</span>
                </div>
                
                {/* Action Buttons (only show if password exists) */}
                {comment.password && (
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleEditClick(comment)}
                      className="p-1 text-slate-400 hover:text-russia-blue transition-colors"
                      title={t.edit[language]}
                    >
                      <Edit2 size={14} />
                    </button>
                    <button 
                      onClick={() => handleDeleteClick(comment)}
                      className="p-1 text-slate-400 hover:text-red-500 transition-colors"
                      title={t.delete[language]}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                )}
              </div>
              
              {editingId === comment.id ? (
                <div className="pl-10 space-y-3">
                  <textarea
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    className="w-full px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-russia-blue/50 text-sm h-20 resize-none"
                  />
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => setEditingId(null)}
                      className="px-3 py-1 border border-slate-300 text-slate-600 rounded text-xs flex items-center gap-1 hover:bg-slate-50"
                    >
                      <X size={12} /> {t.cancel[language]}
                    </button>
                    <button
                      onClick={handleUpdate}
                      className="px-3 py-1 bg-russia-blue text-white rounded text-xs flex items-center gap-1 hover:bg-slate-800"
                    >
                      <Check size={12} /> {t.update[language]}
                    </button>
                  </div>
                </div>
              ) : (
                <p className="text-slate-600 text-sm leading-relaxed pl-10">{comment.content}</p>
              )}
            </div>
          ))
        )}
      </div>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="bg-slate-50 p-6 rounded-xl border border-slate-200">
        <h4 className="text-sm font-bold text-slate-600 mb-4 uppercase tracking-wider">{t.formTitle[language]}</h4>
        <div className="grid gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              placeholder={t.namePlaceholder[language]}
              className="w-full md:w-1/3 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-russia-blue/50 text-sm"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t.passwordPlaceholder[language]}
              className="w-full md:w-1/3 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-russia-blue/50 text-sm"
            />
          </div>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder={t.contentPlaceholder[language]}
            className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-russia-blue/50 text-sm h-24 resize-none"
            required
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-russia-blue hover:bg-slate-800 text-white px-6 py-2 rounded-md text-sm font-semibold transition-colors flex items-center gap-2"
            >
              <Send size={14} />
              {t.submit[language]}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CommentSection;
