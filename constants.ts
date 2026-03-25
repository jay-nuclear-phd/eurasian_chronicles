import { Category } from './types';
import {
  homeCategory,
  prologueCategory,
  year1Category,
  year2Category,
  year3Category,
  russiaTravelCategory,
  eurasiaTravelCategory,
  epilogueCategory,
  acknowledgmentsCategory,
} from './data';

export const BOOK_DATA: Category[] = [
  homeCategory,
  prologueCategory,
  year1Category,
  russiaTravelCategory,
  year2Category,
  eurasiaTravelCategory,
  year3Category,
  epilogueCategory,
  acknowledgmentsCategory,
];

export const AUTHOR_NOTE = {
  title: {
    ko: '작가의 말',
    en: "Author's Note",
  },
  content: {
    ko: `안녕하세요, 저의 웹사이트에 오신 것을 환영합니다.

이곳은 제가 러시아에서 3년 동안 석사 과정을 밟으며 겪었던 경험과 감정, 그리고 유라시아 대륙 곳곳을 누볐던 여행의 기록을 담은 공간입니다.

이 책의 제목은 <strong>'유라시아 견문록'</strong>입니다. 제가 이 기록들을 공유하는 이유는 거창한 성과를 자랑하기 위함이 아닙니다. 낯선 땅에서의 도전이 두렵기도 했지만, 결국 <strong>'누구든 할 수 있다'</strong>는 응원의 메시지를 전하고 싶었습니다. 한 개인의 소소하고도 치열했던 날들이 누군가에게는 작은 용기가 되기를 바랍니다.

프롤로그부터 에필로그까지, 차근차근 저의 발자취를 따라와 주신다면 더할 나위 없이 기쁠 것입니다. 여러분과의 소통은 언제든 환영합니다. 궁금한 점이 있거나 이야기를 나누고 싶다면 댓글을 남겨주시거나, 아래 메일로 편하게 연락해 주세요.

Email: onestark1204@naver.com

감사합니다.`,
    en: `Hello, and welcome to my website.

This is a space that contains the records of my experiences, emotions, and travels across the Eurasian continent during my three-year master's program in Russia.

The title of this book is <strong>'Eurasian Chronicles'</strong>. I am not sharing these records to boast of any great achievements. The challenges in a foreign land were daunting, but ultimately, I wanted to convey a message of encouragement that <strong>'anyone can do it.'</strong> I hope that one individual's small yet fierce days can become a small courage for someone.

From the prologue to the epilogue, I would be more than happy if you would follow my footsteps step by step. Communication with you is always welcome. If you have any questions or want to talk, please leave a comment or feel free to contact me at the email below.

Email: onestark1204@naver.com

Thank you.`,
  },
  author: 'Jeongwon Seo',
};

export const UI_STRINGS = {
  commentSection: {
    title: { ko: '독자 한마디', en: 'Reader Comments' },
    empty: { ko: '첫 번째 독자가 되어주세요.', en: 'Be the first to leave a comment.' },
    formTitle: { ko: '메시지 남기기', en: 'Leave a Message' },
    namePlaceholder: { ko: '이름 (닉네임)', en: 'Name (Nickname)' },
    passwordPlaceholder: { ko: '비밀번호', en: 'Password' },
    contentPlaceholder: { ko: '이 글에 대한 생각이나 응원의 메시지를 남겨주세요.', en: 'Please leave your thoughts or a message of support.' },
    submit: { ko: '등록하기', en: 'Post' },
    update: { ko: '수정하기', en: 'Update' },
    cancel: { ko: '취소', en: 'Cancel' },
    edit: { ko: '수정', en: 'Edit' },
    delete: { ko: '삭제', en: 'Delete' },
    passwordPrompt: { ko: '비밀번호를 입력하세요:', en: 'Please enter your password:' },
    wrongPassword: { ko: '비밀번호가 일치하지 않습니다.', en: 'Incorrect password.' },
  },
  visitorCounter: {
    count: { ko: (n: string) => `당신은 ${n}번째 방문자입니다.`, en: (n: string) => `You are the ${n}th visitor.` },
    loading: { ko: '방문자 수를 불러오는 중입니다...', en: 'Loading visitor count...' },
    congrats: { ko: (n: string) => `🎉 ${n}번째 방문을 축하합니다! 🎉`, en: (n: string) => `🎉 Congratulations on being the ${n}th visitor! 🎉` },
  },
  postView: {
    backToList: { ko: '목록으로 돌아가기', en: 'Back to List' },
    prevPost: { ko: '이전 글', en: 'Previous Post' },
    nextPost: { ko: '다음 글', en: 'Next Post' },
  },
};
