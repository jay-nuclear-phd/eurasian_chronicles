import { Category } from '../types';

export const epilogueCategory: Category = {
  id: 'epilogue',
  title: {
    ko: '에필로그',
    en: 'Epilogue',
  },
  description: {
    ko: '여정을 마치며 남기는 마지막 이야기',
    en: 'The final reflection at the end of the journey',
  },
  isSinglePost: true,
  isActive: true,
  posts: [
    {
      id: 'epilogue-1',
      title: {
        ko: '에필로그',
        en: 'Epilogue',
      },
      subtitle: {
        ko: '당신도 할 수 있다',
        en: 'You Can Do It Too',
      },
      imageUrl:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
      isActive: true,
      comments: [],
      content: {
        ko: `
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          2017년 여름, 드디어 그립고 그립던 고국 땅을 밟았다. 2014년 여름에 홀연히 떠났으니 꼬박 3년 만의 귀환이었다. 내가 이방인으로 떠돌던 그 시간 동안, 한국은 여러모로 참 많이도 변해 있었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏙️ 돌아와 보니 달라진 풍경</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          내가 러시아에 있는 3년 동안 한국에서는 헌정 사상 초유의 대통령 탄핵 사태가 벌어졌고, 이세돌 9단과 알파고의 대국으로 인공지능이 인간을 이긴 충격적인 사건도 일어났다. 게다가 신선한 공기를 들이마시는 게 당연했던 예전과 달리, 불과 3년 사이에 매일 아침 미세먼지 수치를 확인하고 마스크를 챙겨야 할 정도로 미세먼지가 심각한 수준으로 변해버렸다. 동네에는 못 보던 건물이 생겼고, 자주 가던 가게들이 없어지고 그 자리에 새로운 가게들이 들어섰다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          무엇보다 귀국 후 발령을 받은 국군화생방방호사령부 창밖으로 서울 하늘을 찌를 듯 솟아오른 롯데월드타워가 눈에 들어왔을 때의 묘한 기분이란. 내가 한국을 뜰 때만 해도 뼈대만 앙상하게 올라가고 있던 그 건물이 어느새 번쩍이는 위용을 자랑하며 스카이라인을 완전히 바꿔놓은 모습을 보니, 비로소 내가 생각보다 긴 시간을 떠나 있었다는 사실이 실감 났다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⛵ 테세우스의 배가 된 나</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          하지만 3년이라는 세월 동안 훌쩍 변해 버린 건 비단 건물, 풍경, 나라 사정뿐만이 아니었다. 익숙한 고국의 풍경 속에 다시 던져진 나 스스로를 가만히 들여다보니, 나 역시 바뀌어 있었다. 테세우스의 배를 아는가. 배의 모든 낡은 부품과 널빤지를 새것으로 교체한다면, 과연 그 배는 처음 출항했던 그 배와 같은 배라고 부를 수 있을까 묻는 오래된 역설 말이다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          러시아의 매서운 눈보라를 견디고, 유라시아 대륙의 낯선 국경들을 넘나드는 3년 동안 내 안의 낡은 조각들도 하나둘 뜯겨 나갔다. 우물 안 개구리 같던 좁은 시야는 세상의 거대함과 다양성으로 대체되었고, 나와 다른 것을 배척하던 옹졸함은 낯선 이들의 따뜻한 환대를 받으며 다름을 기꺼이 포용하는 여유로 바뀌어 있었다. 무엇보다 ‘내가 과연 할 수 있을까’라며 주저하던 두려움의 널빤지들은, ‘일단 마음먹고 무식하게라도 들이받으면 어떻게든 된다’는 아주 단단하고 뻔뻔한 배짱으로 완벽하게 교체되어 있었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚀 당신도 할 수 있다</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          한국을 떠나던 2014년의 나와 2017년에 돌아온 나는 겉보기엔 주민등록번호가 같은 동일 인물일지 몰라도, 내면을 이루는 조각들은 유라시아 대륙을 누비며 얻은 새로운 경험과 깨달음으로 모조리 갈아 끼워져 있었다. 나는 완전히 새로운 질감을 가진 테세우스의 배가 되어 고국의 항구로 돌아온 셈이었다. 나는 이제 확실히 안다. 할 수 있다고 마음먹고 일단 시작하면, 비록 처음 계획했던 완벽한 모습은 아닐지라도 대부분의 일들은 기어코 이루어진다는 것을.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          그러니 무언가를 새롭게 시작하기를 망설이고 있는 당신에게 감히 외치고 싶다. 낡은 널빤지를 뜯어내는 걸 두려워하지 말라고. 일단 부딪혀 보라고. 당신도 할 수 있다고.
        </p>
      `,
        en: `
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          In the summer of 2017, I finally set foot again on the homeland I had missed so deeply. I had disappeared into the distance in the summer of 2014, so it was truly my return after a full three years. During all that time when I had wandered as a foreigner, Korea had changed in remarkably many ways.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏙️ A Changed Landscape</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          During the three years I spent in Russia, Korea went through the first presidential impeachment in its constitutional history, and the shocking event in which artificial intelligence defeated a human player unfolded in the match between Lee Sedol and AlphaGo. On top of that, unlike the days when breathing fresh air had once been taken for granted, in just those three years fine dust had worsened so severely that checking the air pollution level every morning and carrying a mask became necessary. New buildings had appeared in the neighborhood, familiar shops had disappeared, and new stores had taken their place.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          Above all, I still remember the strange feeling I had after returning home and being assigned to the CBR Defense Command, when I looked out the window and saw the Lotte World Tower piercing the sky of Seoul. When I had left Korea, that building had been little more than a bare skeleton under construction, but now it stood there in dazzling splendor, completely transforming the skyline. Only then did it truly hit me that I had been away for much longer than I had imagined.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⛵ Becoming the Ship of Theseus</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          But it was not only the buildings, the scenery, or the circumstances of the country that had changed over those three years. When I looked quietly at myself, thrown back once more into the familiar landscape of my homeland, I realized that I too had changed. Do you know the Ship of Theseus? It is the old paradox that asks whether a ship can still be called the same ship if every worn-out part and every plank is replaced with a new one.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          During those three years of enduring Russia's bitter snowstorms and crossing the unfamiliar borders of the Eurasian continent, the old pieces inside me had also been stripped away one by one. The narrow perspective of a frog in a well had been replaced by an awareness of the vastness and diversity of the world. The pettiness that once rejected what was different from me had changed, through the warm hospitality of strangers, into a spaciousness that could willingly embrace difference. Most of all, the fearful planks that had once hesitated, asking, “Can I really do this?” had been completely replaced by a much tougher and shameless courage that believed, “If I just make up my mind and charge in, even clumsily, somehow it will work out.”
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚀 You Can Do It Too</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The person who left Korea in 2014 and the person who returned in 2017 may have looked like the same individual on the outside, with the same registration number and the same face, but the inner pieces that made me who I was had all been replaced by new experiences and realizations gathered while traversing the Eurasian continent. I had returned to the harbor of my homeland as the Ship of Theseus, but now with an entirely new texture. I know this for certain now: if you decide that you can do something and simply begin, then even if it does not turn out in the exact perfect form you first imagined, most things somehow do get accomplished in the end.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          So to you, who may be hesitating before starting something new, I want to say this boldly. Do not be afraid to tear away the old planks. Just throw yourself against it and begin. You can do it too.
        </p>
      `,
      },
    },
  ],
};
