
export interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
}

export interface Post {
  id: string;
  title: string;
  subtitle?: string;
  content: string; // HTML or Markdown string
  imageUrl?: string;
  date?: string; // Made optional
  comments: Comment[];
  isActive?: boolean; // New field to lock specific posts
}

export type CategoryId = 
  | 'home' 
  | 'prologue' 
  | 'year1' 
  | 'year2' 
  | 'year3' 
  | 'russia_travel' 
  | 'eurasia_travel' 
  | 'feelings' 
  | 'appendix' 
  | 'epilogue';

export interface Category {
  id: CategoryId;
  title: string;
  description?: string;
  isSinglePost: boolean; // true for Prologue/Epilogue
  posts: Post[];
  isActive?: boolean; // New field to control visibility/access
}

export interface ViewState {
  currentCategory: CategoryId;
  currentPostId: string | null; // null if viewing the category list
}
