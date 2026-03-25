
export type LocalizedString = {
  ko: string;
  en: string;
};

export interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
  password?: string;
}

export interface Post {
  id: string;
  title: LocalizedString;
  subtitle?: LocalizedString;
  content: LocalizedString; // HTML or Markdown string
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
  | 'epilogue'
  | 'acknowledgments';

export interface Category {
  id: CategoryId;
  title: LocalizedString;
  shortTitle?: LocalizedString; // For navigation header
  description?: LocalizedString;
  isSinglePost: boolean; // true for Prologue/Epilogue
  posts: Post[];
  isActive?: boolean; // New field to control visibility/access
}

export interface ViewState {
  currentCategory: CategoryId;
  currentPostId: string | null; // null if viewing the category list
}
