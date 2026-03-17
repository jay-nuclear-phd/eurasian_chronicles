import { Category } from '../types';

export const appendixCategory: Category = {
  id: 'appendix',
  title: {
    ko: '부록',
    en: 'Appendix',
  },
  description: {
    ko: '작성 중...',
    en: 'In progress...',
  },
  isSinglePost: false,
  isActive: false,
  posts: [],
};
