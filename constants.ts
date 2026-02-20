import { Category } from './types';
import {
  homeCategory,
  prologueCategory,
  year1Category,
  year2Category,
  year3Category,
  russiaTravelCategory,
  eurasiaTravelCategory,
  feelingsCategory,
  appendixCategory,
  epilogueCategory,
} from './data';

export const BOOK_DATA: Category[] = [
  homeCategory,
  prologueCategory,
  year1Category,
  year2Category,
  year3Category,
  russiaTravelCategory,
  eurasiaTravelCategory,
  feelingsCategory,
  appendixCategory,
  epilogueCategory,
];

export const AUTHOR_NOTE = {
  title: '작가의 말',
  content: `안녕하세요, 저의 웹사이트에 오신 것을 환영합니다.\n\n이곳은 제가 러시아에서 3년 동안 석사 과정을 밟으며 겪었던 경험과 감정, 그리고 유라시아 대륙 곳곳을 누볐던 여행의 기록을 담은 공간입니다.\n\n현재 이 기록들의 제목을 <strong>'유라시아 견문록'</strong>이라 붙여두었지만, 개인적으로는 아직 딱 맞는 옷을 입히지 못한 기분이 들어 글을 써 내려가며 계속 고민할 예정입니다. 혹시 글을 읽으시다가 이 공간에 어울리는 더 좋은 제목이 떠오른다면 언제든 추천 부탁드립니다.\n\n제가 이 기록들을 공유하는 이유는 거창한 성과를 자랑하기 위함이 아닙니다. 낯선 땅에서의 도전이 두렵기도 했지만, 결국 <strong>'누구든 할 수 있다'</strong>는 응원의 메시지를 전하고 싶었습니다. 한 개인의 소소하고도 치열했던 날들이 누군가에게는 작은 용기가 되기를 바랍니다.\n\n프롤로그부터 에필로그까지, 차근차근 저의 발자취를 따라와 주신다면 더할 나위 없이 기쁠 것입니다. 여러분과의 소통은 언제든 환영합니다. 궁금한 점이 있거나 이야기를 나누고 싶다면 댓글을 남겨주시거나, 아래 메일로 편하게 연락해 주세요.\n\nEmail: onestark1204@naver.com\n\n감사합니다.`,
  author: 'JNP',
};
