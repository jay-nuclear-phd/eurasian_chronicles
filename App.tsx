import React, { useState } from 'react';
import { Category, CategoryId, Post, ViewState } from './types';
import { BOOK_DATA, AUTHOR_NOTE } from './constants';
import PostView from './components/PostView';
import { Menu, X, BookOpen, ChevronRight, ChevronDown, ChevronUp, PenTool, Lock, List } from 'lucide-react';

function App() {
  const [viewState, setViewState] = useState<ViewState>({
    currentCategory: 'home',
    currentPostId: null
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<CategoryId[]>([]);

  const handleCategoryClick = (categoryId: CategoryId) => {
    const category = BOOK_DATA.find(c => c.id === categoryId);
    
    // If deactivated, do nothing
    if (category && category.isActive === false) return;

    if (category) {
      if (category.isSinglePost && category.posts.length > 0) {
        // For Prologue/Epilogue, go straight to post
        setViewState({
          currentCategory: categoryId,
          currentPostId: category.posts[0].id
        });
      } else {
        // For list categories
        setViewState({
          currentCategory: categoryId,
          currentPostId: null
        });
      }
    } else {
      // Home
      setViewState({
        currentCategory: 'home',
        currentPostId: null
      });
    }
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const toggleCategory = (id: CategoryId) => {
    setExpandedCategories(prev =>
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const handlePostClick = (postId: string) => {
    setViewState(prev => ({ ...prev, currentPostId: postId }));
    window.scrollTo(0, 0);
  };

  const handleBackToList = () => {
    setViewState(prev => ({ ...prev, currentPostId: null }));
  };

  const getCurrentCategory = () => BOOK_DATA.find(c => c.id === viewState.currentCategory);
  
  const getCurrentPost = () => {
    const category = getCurrentCategory();
    return category?.posts.find(p => p.id === viewState.currentPostId);
  };

  const renderContent = () => {
    const category = getCurrentCategory();
    const currentPost = getCurrentPost();

    // 1. Home View
    if (viewState.currentCategory === 'home') {
      return (
        <div className="animate-fadeIn">
          {/* Hero Section */}
          <div className="relative h-96 bg-slate-900 rounded-2xl overflow-hidden mb-12 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop" 
              alt="Books and Writing" 
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
              <span className="text-gold-accent font-serif italic mb-4 text-lg animate-pulse">JNP's Memoir</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight">
                유라시아 견문록
              </h2>
            </div>
          </div>

          {/* Author Note */}
          <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center justify-center mb-8">
              <PenTool className="text-russia-blue" size={32} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-center text-slate-800 mb-8">{AUTHOR_NOTE.title}</h3>
            <div 
              className="prose prose-slate mx-auto text-slate-600 whitespace-pre-wrap leading-loose"
              dangerouslySetInnerHTML={{ __html: AUTHOR_NOTE.content }}
            />
            <div className="mt-10 text-right font-serif italic text-slate-500">
              - {AUTHOR_NOTE.author}
            </div>
          </div>
          
          {/* Table of Contents (Mokcha) */}
          <div className="max-w-2xl mx-auto mt-16 px-4">
            <h3 className="text-2xl font-serif font-bold text-slate-800 mb-8 text-center flex items-center justify-center gap-2">
              <List size={24} /> 목차
            </h3>
            <div className="flex flex-col bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden divide-y divide-slate-100">
              {BOOK_DATA.slice(1).map((cat) => {
                  const isExpanded = expandedCategories.includes(cat.id);
                  const isActive = cat.isActive !== false;
                  
                  if (cat.isSinglePost) {
                      return (
                          <button
                              key={cat.id}
                              disabled={!isActive}
                              onClick={() => handleCategoryClick(cat.id as CategoryId)}
                              className={`w-full px-6 py-5 flex items-center justify-between text-left transition-colors group
                                  ${isActive ? 'hover:bg-slate-50 text-slate-800' : 'text-slate-300 cursor-not-allowed bg-slate-50/50'}
                              `}
                          >
                              <span className="font-serif font-bold text-lg group-hover:text-russia-blue transition-colors">{cat.title}</span>
                              {isActive ? <ChevronRight size={18} className="text-slate-400 group-hover:text-russia-blue" /> : <Lock size={16} />}
                          </button>
                      )
                  }
                  
                  // Multi-post category (Accordion)
                  return (
                      <div key={cat.id} className="flex flex-col">
                          <button
                              disabled={!isActive}
                              onClick={() => toggleCategory(cat.id as CategoryId)}
                              className={`w-full px-6 py-5 flex items-center justify-between text-left transition-colors group
                                  ${isActive ? 'hover:bg-slate-50 text-slate-800' : 'text-slate-300 cursor-not-allowed bg-slate-50/50'}
                              `}
                          >
                              <span className="font-serif font-bold text-lg group-hover:text-russia-blue transition-colors">{cat.title}</span>
                              <div className="flex items-center gap-2 text-slate-400 group-hover:text-russia-blue">
                                   {!isActive ? <Lock size={16} /> : (isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />)}
                              </div>
                          </button>
                          
                          {/* Expanded Content */}
                          {isActive && isExpanded && (
                              <div className="bg-slate-50 border-t border-slate-100 animate-fadeIn shadow-inner">
                                  {cat.posts.length > 0 ? (
                                    cat.posts.map(post => (
                                      <button
                                          key={post.id}
                                          disabled={post.isActive === false}
                                          onClick={() => post.isActive !== false && handlePostClick(post.id)}
                                          className={`w-full px-8 py-4 text-left text-sm transition-colors border-b last:border-0 border-slate-100 flex items-center gap-3
                                            ${post.isActive === false 
                                              ? 'text-slate-300 cursor-not-allowed hover:bg-transparent' 
                                              : 'text-slate-600 hover:text-russia-blue hover:bg-blue-50/50'
                                            }
                                          `}
                                      >
                                          <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${post.isActive === false ? 'bg-slate-200' : 'bg-slate-300'}`} />
                                          <span className="truncate font-medium">{post.title}</span>
                                          {post.isActive === false && <Lock size={12} className="ml-auto text-slate-300" />}
                                      </button>
                                    ))
                                  ) : (
                                    <div className="px-8 py-4 text-sm text-slate-400 italic">게시글이 없습니다.</div>
                                  )}
                              </div>
                          )}
                      </div>
                  )
              })}
            </div>
          </div>
        </div>
      );
    }

    // 2. Post View (Single Post)
    if (currentPost && category) {
      return (
        <PostView 
          post={currentPost} 
          categoryTitle={category.title}
          onBack={category.isSinglePost ? undefined : handleBackToList}
        />
      );
    }

    // 3. Category List View
    if (category) {
      return (
        <div className="animate-fadeIn">
          <header className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-3">{category.title}</h2>
            <p className="text-slate-500 font-light">{category.description}</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {category.posts.map((post) => (
              <div 
                key={post.id}
                onClick={() => post.isActive !== false && handlePostClick(post.id)}
                className={`group rounded-xl overflow-hidden shadow-sm border border-slate-100 flex flex-col h-full
                  ${post.isActive === false 
                    ? 'opacity-60 cursor-not-allowed bg-slate-50' 
                    : 'cursor-pointer hover:shadow-xl bg-white transition-all duration-300'
                  }
                `}
              >
                {post.imageUrl && (
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title}
                      className={`w-full h-full object-cover transform duration-700 ${post.isActive === false ? 'grayscale' : 'group-hover:scale-110'}`}
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                    {post.isActive === false && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <Lock className="text-white/80" size={32} />
                      </div>
                    )}
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-auto">
                    <span className="text-xs font-bold text-russia-blue uppercase tracking-wider mb-2 block">
                      {category.title}
                    </span>
                    <h3 className={`text-xl font-serif font-bold mb-2 transition-colors ${post.isActive === false ? 'text-slate-400' : 'text-slate-800 group-hover:text-russia-blue'}`}>
                      {post.title}
                    </h3>
                    <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">
                      {post.subtitle || "러시아에서의 기록..."}
                    </p>
                  </div>
                  {post.isActive !== false && (
                    <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end items-center">
                      <span className="flex items-center text-xs font-semibold text-slate-600 group-hover:translate-x-1 transition-transform">
                        읽기 <ChevronRight size={14} />
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-russia-blue selection:text-white">
      {/* Top Banner */}
      <div className="bg-russia-dark text-white py-2 px-4 text-center text-xs font-bold tracking-[0.2em] uppercase">
        JNP Presents
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => handleCategoryClick('home')}
            className="font-serif font-bold text-xl md:text-2xl text-russia-blue cursor-pointer flex items-center gap-2"
          >
            <BookOpen size={24} />
            <span>유라시아 견문록</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            {BOOK_DATA.slice(1).map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id as CategoryId)}
                disabled={cat.isActive === false}
                className={`relative py-2 group transition-colors 
                  ${cat.isActive === false ? 'text-slate-300 cursor-not-allowed' : 'hover:text-russia-blue'}
                  ${viewState.currentCategory === cat.id ? 'text-russia-blue' : ''}
                `}
              >
                <div className="flex items-center gap-1">
                  {cat.title}
                  {cat.isActive === false && <Lock size={10} />}
                </div>
                {cat.isActive !== false && (
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-russia-blue transform scale-x-0 group-hover:scale-x-100 transition-transform ${viewState.currentCategory === cat.id ? 'scale-x-100' : ''}`} />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white pt-24 px-6 overflow-y-auto animate-fadeIn">
          <div className="flex flex-col gap-6">
             <button
                onClick={() => handleCategoryClick('home')}
                className="text-lg font-serif font-bold text-slate-800 text-left"
              >
                홈으로
              </button>
            {BOOK_DATA.slice(1).map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id as CategoryId)}
                disabled={cat.isActive === false}
                className={`text-lg font-serif font-bold text-left flex items-center gap-2 
                  ${cat.isActive === false ? 'text-slate-300' : 'text-slate-500'} 
                  ${viewState.currentCategory === cat.id ? 'text-russia-blue' : ''}
                `}
              >
                {cat.title}
                {cat.isActive === false && <span className="text-xs bg-slate-100 px-2 py-1 rounded-full text-slate-400 font-normal">작성 중</span>}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="container mx-auto px-4 md:px-6 py-12 min-h-[calc(100vh-200px)]">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 mt-12 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <h4 className="font-serif text-white text-lg mb-4">유라시아 견문록</h4>
          <p className="text-sm mb-8 max-w-md mx-auto">
            러시아에서의 3년, 그리고 그 너머의 이야기. <br/>
            JNP의 석사 생활과 여행의 기록을 담은 디지털 아카이브입니다.
          </p>
          <div className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} JNP. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;