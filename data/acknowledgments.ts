import { Category } from '../types';

export const acknowledgmentsCategory: Category = {
  id: 'acknowledgments',
  title: {
    ko: '감사의 글',
    en: 'Acknowledgments',
  },
  description: {
    ko: '함께한 이들에게 전하는 마음',
    en: 'A note of gratitude to those who shared the journey',
  },
  isSinglePost: true,
  isActive: true,
  posts: [
    {
      id: 'acknowledgments-1',
      title: {
        ko: '감사의 글',
        en: 'Acknowledgments',
      },
      imageUrl:
        'https://images.unsplash.com/photo-1516589091380-5d8e87df6999?q=80&w=1200&auto=format&fit=crop',
      isActive: true,
      comments: [],
      content: {
        ko: `
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          가장 먼저, 무대포 같은 남편을 믿고 기꺼이 험난한 여정에 동참해 준 사랑하는 아내에게 깊은 고마움을 전한다. 돌이켜보면 나는 우리 부부의 미래를 위한다는 명목 아래 참으로 고집불통인 남편이었다. 나의 그 일방적인 결정들 이면에는 낯선 타국에서 묵묵히 견뎌낸 아내의 크나큰 헌신과 희생이 자리하고 있음을 이제는 너무나도 잘 안다. 말로 다 표현할 수 없는 미안함과 애정을 담아, 나의 가장 든든한 동반자인 아내에게 이 글의 첫 페이지를 바치고 싶다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💌 함께 버텨 준 사람들</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          낡고 비좁은 러시아 기숙사에서 동고동락하며 이 책의 곳곳을 장식해 준 P군과 S양의 이름도 빼놓을 수 없다. 나보다 어린 동생들이었지만, 타지에서 서로의 온기를 나누며 버텨준 그들의 존재 자체가 내게는 크나큰 위안이자 버팀목이었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🪖 전우와 동료들에게</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          보이지 않는 곳에서 물심양면으로 나를 지지해 준 군 선후배 동료들에게도 진심 어린 인사를 남긴다. 특히 망망대해로 배를 타고 나가 연락조차 쉽지 않은 해군 선배들에게, 이 활자들을 빌려 깊은 연대의 마음을 띄워 보낸다. 핵물리학의 길을 먼저 걸어가며 이끌어준 DY 선배, 3년의 험난한 유학 생활을 처음부터 끝까지 함께 버텨낸 전우 JH 선배, 군에서는 선배지만 대학원에서는 후배로 묘한 인연을 맺었던 JC 선배, 그리고 학부 시절 나의 매서운 호통을 견뎌내고 타국에서 반갑게 재회한 CH까지. 여러분과 나눈 끈끈한 전우애가 아니었다면 이 긴 여정은 결코 쉽지 않았을 것이다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌍 국경을 넘어 이어진 인연</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          나를 기꺼이 자신의 고향으로 초대해 러시아의 진짜 매력을 보여준 현지인 친구에게도 각별한 인사를 건넨다. 재미있는 후일담을 하나 덧붙이자면, 이 책에 등장했던 나의 대학 친구들 중 한 명과 이 러시아 친구가 눈이 맞아 결혼에 골인했다는 사실이다. 국경을 뛰어넘어 알콩달콩 가정을 꾸린 두 사람의 완벽한 해피엔딩을 축복하며, 다시 한번 우정의 마음을 전한다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏡 가족이라는 버팀목</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          무조건적인 가족의 지지는 이 무모한 도전을 가능케 한 가장 강력한 원동력이었다. 군 위탁교육을 떠나기 위해서는 주택을 보유한 두 명의 재정 보증인이 필수적이다. 만약 내가 학위 취득에 실패하면 그 막대한 채무를 고스란히 떠안아야 하는 무거운 자리다. 러시아어 알파벳조차 모르고 핵물리학의 근처에도 가본 적 없던 아들과 사위를 위해, 한 치의 망설임 없이 선뜻 인감도장을 내어주신 어머니와 장모님. 두 분의 맹목적인 믿음과 지원이 없었다면 오늘의 나는 결코 존재하지 못했을 것이다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          자신의 연애마저 뒷전으로 미루고 먼 타국까지 형을 보러 달려와 준 든든한 내 동생, 이역만리로 떠나는 막내 여동생을 위해 멀리서도 아낌없는 응원을 보내주신 두 분의 처형에게도 깊은 감사를 표한다. 더불어 3년이라는 긴 시간 동안 잊지 않고 이모부를 반갑게 맞아준 듬직한 첫째 조카, 그리고 돌잡이 때 떠났음에도 귀국 후 나를 또렷이 기억해 주어 뭉클함을 안겨준 사랑스러운 둘째 조카까지 모두가 내게는 살아가는 힘이었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">📖 독자와 아버지께</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          마침내 내 인생의 첫 책이 세상에 나오게 되었다. 서툴고 투박했을 나의 유라시아 유랑기를 끝까지 흥미롭게 읽고 따라와 주신 독자 여러분께 고개 숙여 깊은 감사를 드린다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          마지막으로, 지금도 하늘에서 이 모든 여정을 대견하게 지켜보고 계실 사랑하는 아버지. 아버지가 제게 남겨주신 가장 위대한 유산, ‘할 수 있다’는 그 단단한 믿음을 가슴에 새기고 기어이 해냈다고, 당신의 아들이 자랑스럽게 보고드립니다.
        </p>
      `,
        en: `
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          First and foremost, I want to offer my deepest gratitude to my beloved wife, who trusted her reckless husband and willingly joined me on this arduous journey. Looking back, I was an unbelievably stubborn husband, always claiming that it was all for the future of our family. Behind those one-sided decisions of mine stood my wife's immense devotion and sacrifice, as she quietly endured life in a strange foreign land. With an affection and apology that words can never fully contain, I want to dedicate the first page of this writing to my wife, my strongest and most steadfast companion.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💌 Those Who Endured Beside Me</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          I also cannot leave out P and S, whose names appear throughout this book as companions who shared thick and thin with me in that old and cramped Russian dormitory. They were younger than I was, but their very presence, sharing warmth and endurance with me in a foreign land, became a tremendous comfort and support.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🪖 To My Comrades and Colleagues</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          I also want to leave my heartfelt thanks to the senior and junior military colleagues who supported me in countless visible and invisible ways. In particular, to my naval seniors who were often out on the vast open sea and difficult even to contact, I send through these printed words my deep sense of solidarity. To Senior DY, who walked the road of nuclear physics before me and guided the way; to Senior JH, my comrade who endured those three grueling years of study abroad with me from beginning to end; to Senior JC, who was my senior in the military but my junior in graduate school, creating a curious kind of bond; and to CH, who had once endured my fierce scolding in undergraduate days and whom I was delighted to meet again in a foreign country. Without the tight comradeship I shared with all of you, this long journey would never have been easy.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌍 Bonds Beyond Borders</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          I also send special thanks to the local Russian friend who gladly invited me to his hometown and showed me the true charm of Russia. As one delightful postscript, one of my university friends who appears in this book ended up falling in love with that Russian friend and marrying her. I celebrate the perfect happy ending of those two, who built a warm little family across borders, and I offer my friendship once more with all my heart.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏡 Family as My Foundation</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The unconditional support of my family was the strongest force that made this reckless challenge possible. In order to leave for military consignment education, two financial guarantors who owned housing were absolutely required. If I had failed to earn my degree, they would have had to shoulder that enormous debt in full, a burden by no means light. Yet for a son and son-in-law who did not even know the Russian alphabet and had never come close to nuclear physics, my mother and my mother-in-law gave me their seals without a moment of hesitation. Without their blind faith and support, the person I am today could never have existed.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          I also offer deep thanks to my dependable younger brother, who even put his own love life aside and came all the way to a distant foreign country just to see his older brother, and to my two sisters-in-law, who sent unstinting support from afar for their youngest sister setting off to the far ends of the earth. Along with them, my sturdy eldest nephew, who never forgot me and always welcomed his uncle warmly through those three long years, and my lovely second nephew, who had only been a baby when I left yet still remembered me clearly when I returned, all of them gave me strength to keep going.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">📖 To My Readers and My Father</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          At last, the first book of my life has come into the world. I bow my head in deep gratitude to all the readers who followed my clumsy and rough-edged wandering across Eurasia all the way to the end with interest and generosity.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          Finally, to my beloved father, who I believe is still watching all of this journey proudly from the sky above: I report with pride that your son has finally done it, engraving in his heart the greatest inheritance you left me, that firm belief that “it can be done.”
        </p>
      `,
      },
    },
  ],
};
