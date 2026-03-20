import { Category } from '../types';

export const year3Category: Category = {
  id: 'year3',
  title: { ko: '3년차, 석사 과정을 마치며', en: 'Year 3, Finishing the Master’s Program' },
  shortTitle: { ko: '3년차', en: 'Year 3' },
  description: {
    ko: '러시아에서의 대학원 생활을 마무리하며',
    en: 'Concluding graduate school life in Russia',
  },
  isSinglePost: false,
  isActive: true,
  posts: [
    {
      id: 'post-300',
      title: { ko: '러시아 문학 경연대회', en: 'Russian Literature Competition' },
      subtitle: {
        ko: '윤케르의 기도와 21세기 한국 훈련병의 PTSD',
        en: "Junker's Prayer and the PTSD of a 21st Century Korean Trainee",
      },
      imageUrl: 'https://aws.cricketmedia.com/media/20220429174414/girl-reading-poetry.jpg?q=80&w=1200&auto=format&fit=crop', // A stage, microphone, or literature-related image
      isActive: true,
      comments: [],
      content: {
        ko: `
        <p class="leading-relaxed mb-6 text-slate-700">
          여름 방학이 한창이던 무렵, 아직은 새로운 학기가 시작하기 전 러시아어 선생님으로부터 러시아 문학 경연대회에 참여해 달라는 부탁을 받았다. 외국인을 대상으로 하는 이 경연대회는 모스크바 국립대뿐만 아니라 타 대학 유학생들도 참여하는 나름 규모 있는 행사였다. 하지만 실상을 들여다보니 모스크바 국립대에 할당된 상장은 넘쳐나는데, 정작 방학의 늪에서 빠져나오지 못한 참가 희망자가 턱없이 부족한 상태였다. 즉, 참여만 하면 상장 하나는 무조건 챙길 수 있는 <span class="font-bold text-russia-blue">‘참가상 대잔치’</span>나 다름없었다. 🏆
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎬 대회 방식: 문학의 재해석</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          대회 방식은 자신이 선택한 러시아 문학을 다양한 방식으로 재해석하여 동영상으로 제출하는 것이었다. 여러 명이 팀을 꾸려 정통 연극을 준비하거나 러시아 특유의 유머를 선보이는 등 외국인의 시각에서 재탄생한 다채로운 작품들을 볼 수 있었다. 그중 나는 대한민국 남자라면 누구나 악몽에서조차 마주하고 싶지 않은 <span class="font-bold text-wine-600">'훈련소 생활'</span>을 주제로 택했다. 19세기 시인 미하일 율리에비치 레르몬토프가 훈련병 시절에 쓴 <span class="italic">'윤케르의 기도'</span>를 낭송하기로 한 것이다. 🎤
        </p>

        <blockquote class="text-center font-serif text-xl font-bold text-russia-blue my-10 border-y-2 border-slate-100 py-6">
          "윤케르의 기도" <br/><br/>
          하늘의 왕이시여! 구원하소서, <br/>
          이 답답한 제복에서, 마치 불에서 꺼내주듯 <br/><br/>
          행군에서 저를 해방시켜 주시고 <br/>
          의장대 훈련에서 저를 제외시켜 주소서 <br/><br/>
          훈련장의 교관의 목소리가 <br/>
          우리에게 덜 들리게 하소서 <br/><br/>
          또 하나의 기도를 들어주소서 <br/>
          이번 일요일에 지각을 허락하소서 <br/><br/>
          전능하신 왕이시여, 저는 이제 만족합니다 <br/>
          더 이상 불필요한 부탁으로 귀찮게 하지 않겠나이다
        </blockquote>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🤯 시의 의미와 PTSD</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          시의 구절구절은 19세기 러시아든 21세기 한국이든 군대의 본질은 변하지 않는다는 사실을 뼈저리게 증명했다. <span class="italic">“하늘의 왕이시여, 이 답답한 제복에서 구원하소서”</span>, <span class="italic">“행군과 의장대 훈련에서 저를 제외해 주소서”</span>라는 절규는 논산 훈련소 연병장에서 울려 퍼져도 전혀 이질감이 없었다. 🥲
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          특히 <span class="font-bold text-red-600">“이번 일요일에 지각을 허락하소서”</span>라는 대목에 이르자, 억눌려 있던 PTSD(외상 후 스트레스 장애)가 목구멍까지 치밀어 올랐다. 육군사관학교 생도 시절, 매주 일요일 저녁마다 엄수해야 했던 <span class="font-bold text-red-600">‘귀영 점호’</span>의 압박이 생생히 되살아난 탓이다. 정해진 시각까지 복귀하지 못하면 감당하기 힘든 불이익이 기다리고 있었기에, 당시 우리에게 일요일 저녁은 휴식의 끝이 아닌 삼엄한 긴장의 연속이었다. 19세기 윤케르의 기도는 단순한 문학적 표현을 넘어, 시공간을 초월해 대한민국 남자들의 트라우마를 건드리는 강렬한 호소력을 지니고 있었다. 😥
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💰 러시아의 징병제와 '현금술'</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          여담으로, 러시아 역시 한국과 같이 징병제를 유지하고 있다. 2008년 전까지는 2년을 복무했고 그 이후로는 1년을 복무한다. 하지만 병역 의무를 대하는 방식만큼은 한국과 확연히 달랐다. 한국에서는 흔히 말하는 ‘신의 아들’만 병역을 빠져나올 수 있었던 반면, 당시 들려온 풍문에 따르면, 약 700만 원 정도의 예산만 확보되면 의사로부터 합법과 불법의 경계를 아슬아슬하게 넘나드는 <span class="font-bold text-yellow-600">‘면제 소견서’</span>를 발급받을 수 있다고 했다. 이른바 <span class="font-bold text-yellow-600">'현금술'</span>이라는 치트키가 통용되는 현장이었다. 국가에 대한 충성심을 증명하는 대신 자본력을 증명하면 군복무를 유유히 빠져나갈 수 있다는 사실이 꽤나 충격적이었다. 💸
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎖️ 대회 당일: 제복의 힘</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          대회 당일, 러시아어 선생님과 강당에 앉아 다른 학생들의 작품을 감상하며 평가를 기다렸다. 이미 아들을 군대에 보낸 경험이 있던 선생님은 멋지게 대한민국 장교정복을 차려입고 19세기 군인의 고뇌를 읊는 나의 모습에 깊이 만족해하셨다. 러시아인들은 제복을 참 좋아한다. 러시아에 있는 3년 동안 나는 위기가 있을 때마다 옷장에 고이 모셔두었던 장교정복을 만지작거렸다. 그리고 정복을 입고 나가면 그 어떤 것도 두렵지 않았다. 🫡
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          결과적으로 모스크바 대학교 총장 명의의 <span class="font-bold text-green-600">‘최우수 상장’</span>을 거머쥐었으니 매우 만족스러운 해피엔딩이었다. 비록 소중한 방학 3일은 ‘윤케르의 기도’와 함께 산화했으나, 19세기 러시아 훈련병의 기도가 21세기 한국 유학생에게 영광의 상장을 안겨준 셈이 되었다. 🥳
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎸 또 다른 문학 경연대회: '이모가 없다면'</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          참, 학기 중에도 작은 문학 경연대회가 있었는데 그 때는, <span class="italic">‘만약 당신에게 이모가 없다면’</span>이라는 노래를 기타를 치며 불렀다. 🎸 가사 내용은 아주 단순하면서 엉뚱하다. 원래 뭔가가 없었더면 잃을 일도 없다는 내용으로 마찬가지로 장교정복을 입고 노래를 불렀다. 나의 러시아어 선생님은 진지한 장교정복에 어울리지 않는 리듬의 노래에 너무 웃긴 나머지 감격의 눈물을 쏟으셨다. 🤣 19세기 군인의 고뇌를 읊던 진지한 유학생이, 이번에는 “아내가 없으면 도망갈 일도 없다”며 해맑게 기타를 튕기는 모습이 선생님께는 꽤나 신선하고도 기특한 충격이었던 모양이다.
        </p>

        <hr class="border-slate-200 my-8 w-1/3 mx-auto" />

        <p class="leading-relaxed mb-6 text-slate-700">
          대회를 치르며 새삼 느낀 점은 러시아 사람들이 자신들의 문학을 여전히, 그리고 지독할 정도로 사랑한다는 사실이었다. 이런 모습에서 러시아 사람들의 마음속에는 여전히 순수한 면이 남아 있다는 것을 느낄 수 있었다. ❤️
        </p>
      `,
        en: `
        <p class="leading-relaxed mb-6 text-slate-700">
          During the summer vacation, before the new semester had even begun, my Russian teacher asked me to participate in a Russian literature competition. This competition, for foreigners, was a fairly large event in which not only students from Moscow State University but also from other universities participated. However, looking at the reality, there were plenty of awards allocated to Moscow State University, but there was a severe shortage of applicants who had not yet emerged from the swamp of vacation. In other words, it was no different from a <span class="font-bold text-russia-blue">'participation award festival'</span> where you were guaranteed to get an award just for participating. 🏆
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎬 Competition Format: Reinterpretation of Literature</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The competition format was to reinterpret a Russian literary work of one's choice in various ways and submit it as a video. You could see a variety of works reborn from a foreigner's perspective, such as teams preparing a traditional play or showcasing a unique Russian humor. Among them, I chose the theme of <span class="font-bold text-wine-600">'boot camp life'</span>, which no Korean man would want to face even in his nightmares. I decided to recite <span class="italic">'Junker's Prayer'</span>, written by the 19th-century poet Mikhail Yuryevich Lermontov during his time as a trainee. 🎤
        </p>

        <blockquote class="text-center font-serif text-xl font-bold text-russia-blue my-10 border-y-2 border-slate-100 py-6">
          "Junker's Prayer" <br/><br/>
          King of Heaven! Save me, <br/>
          From this stuffy uniform, as if from a fire <br/><br/>
          Free me from the march <br/>
          Exclude me from the honor guard training <br/><br/>
          Let the instructor's voice in the training ground <br/>
          Be heard less by us <br/><br/>
          Hear another prayer <br/>
          Allow me to be late this Sunday <br/><br/>
          Almighty King, I am now satisfied <br/>
          I will no longer bother you with unnecessary requests
        </blockquote>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🤯 The Meaning of the Poem and PTSD</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The verses of the poem painfully proved that the nature of the military does not change, whether it is 19th-century Russia or 21st-century Korea. The cries of <span class="italic">"King of Heaven, save me from this stuffy uniform"</span> and <span class="italic">"Exclude me from the march and honor guard training"</span> would not have felt out of place echoing on the parade ground of the Nonsan Training Center. 🥲
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          In particular, when I reached the line <span class="font-bold text-red-600">"Allow me to be late this Sunday"</span>, the suppressed PTSD (post-traumatic stress disorder) rose to my throat. This was because the pressure of the <span class="font-bold text-red-600">'return roll call'</span> that we had to observe every Sunday evening during my time as a cadet at the Korea Military Academy came back to life. If we failed to return by the set time, we would face unbearable disadvantages, so for us at that time, Sunday evening was not the end of rest, but a continuation of strict tension. The 19th-century Junker's prayer was more than just a literary expression; it had a powerful appeal that transcended time and space and touched the trauma of Korean men. 😥
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💰 Russia's Conscription System and 'Cash-chemy'</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          As an aside, Russia, like Korea, also maintains a conscription system. Before 2008, they served for 2 years, and after that, for 1 year. However, the way they treated military service was markedly different from Korea. In Korea, only the so-called 'sons of God' could evade military service, but according to the rumors at the time, if you had a budget of about 7 million won, you could get a <span class="font-bold text-yellow-600">'certificate of exemption'</span> from a doctor that precariously crossed the line between legal and illegal. It was a scene where the cheat key of <span class="font-bold text-yellow-600">'cash-chemy'</span> was used. It was quite shocking that you could get out of military service by proving your financial power instead of your loyalty to the country. 💸
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎖️ The Day of the Competition: The Power of the Uniform</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          On the day of the competition, my Russian teacher and I sat in the auditorium, watching the works of other students and waiting for the evaluation. My teacher, who had already had the experience of sending her son to the military, was deeply satisfied with my appearance, dressed in a handsome Republic of Korea officer's uniform and reciting the anguish of a 19th-century soldier. Russians love uniforms. For the 3 years I was in Russia, whenever I was in a crisis, I would fiddle with the officer's uniform that I had carefully kept in my closet. And when I went out in my uniform, I was not afraid of anything. 🫡
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          In the end, it was a very satisfying happy ending as I won the <span class="font-bold text-green-600">'Grand Prize'</span> in the name of the president of Moscow State University. Although the precious 3 days of my vacation were sacrificed with 'Junker's Prayer,' the prayer of a 19th-century Russian trainee brought an award of honor to a 21st-century Korean international student. 🥳
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎸 Another Literature Competition: 'If You Don't Have an Aunt'</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Oh, there was also a small literature competition during the semester, and at that time, I sang a song called <span class="italic">'If You Don't Have an Aunt'</span> while playing the guitar. 🎸 The lyrics are very simple and quirky. It's about how if you never had something, you would never lose it. I also wore my officer's uniform and sang the song. My Russian teacher was so amused by the song's rhythm, which did not match the serious officer's uniform, that she shed tears of emotion. 🤣 The sight of the serious international student who had recited the anguish of a 19th-century soldier, now cheerfully strumming the guitar and singing, "If I don't have a wife, I have no reason to run away," must have been a very fresh and commendable shock to the teacher.
        </p>

        <hr class="border-slate-200 my-8 w-1/3 mx-auto" />

        <p class="leading-relaxed mb-6 text-slate-700">
          What I felt anew while participating in the competition was that Russians still love their literature, and to an extreme degree. From this, I could feel that there was still a pure side left in the hearts of the Russian people. ❤️
        </p>
      `,
      },
    },
    {
      id: 'post-301',
      title: { ko: '예기치 않은 문제', en: 'An Unexpected Problem' },
      subtitle: {
        ko: "비자 뺑뺑이, 그 끝에서 만난 뜻밖의 우크라이나 유람기",
        en: 'The Visa Run, and an Unexpected Trip to Ukraine at the End of It',
      },
      imageUrl: 'https://cdn.shopify.com/s/files/1/0179/4388/7926/articles/ukraine-flag-history-cultural-significance-interesting-facts-6846979.png?v=1768959647&width=1200&height=675&crop=center&format=webp&quality=85?q=80&w=1200&auto=format&fit=crop', // Passport with stamps
      isActive: true,
      comments: [],
      content: {
        ko: `
        <p class="leading-relaxed mb-6 text-slate-700">
          흔히 한국 사람들이 많이 아는 미국 비자 시스템은 비자가 만료되어도 유효한 체류 서류만 있으면 합법적 체류가 가능한 ‘입국권과 체류권의 분리’ 구조를 띠고 있다. 하지만 러시아는 비자 자체가 곧 체류 허가증이기 때문에, 비자의 만료는 곧 체류 자격의 상실을 의미한다. 이러한 시스템의 차이를 명확히 인지하지 못하면 러시아 생활에서 예기치 못한 행정적 낭패를 보기 십상이다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">꼬여버린 비자 갱신 😫</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          방학이 시작하기전 비자 갱신에 대해 학과 사무실에 문의를 했었다. 학과 사무실에서는 “비자가 끝나기 전에만 연장  신청하면 돼요.”라는 안내를 들었다. 그래서 마음 놓고 방학 동안 신나게 놀고 돌아왔더니, “미안해요, 비자 만료 한 달 전에 미리 연장을 했어야 해요.”라는 손바닥 뒤짚는 듯 한 설명을 들었다. 개인적으로 꼼꼼히 알아보지 않은 내 잘못도 있지만 학과에서는 이런 일은 종종 있고 크게 걱정할 일은 아니라고 했다. 이런 일이 있었으면서도 한 달 전에 비자 연장 신청을 해야 한다는 건 왜 알려주지 않은지 궁금했다. 어쨌든, 당장 체류가 문제가 될 수 있으니 직원의 말을 들어보았다. 요약하자면 다음과 같다.
        </p>

        <div class="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400 mb-8">
          <p class="leading-relaxed text-slate-700 italic">
            한국인은 무비자로 최대 연속 60일간 체류가 가능하다. 그리고 러시아를 떠야나만 거주 목적 변경이 된다. 따라서 비자가 만료되기 전에 러시아를 떠났다가 학업비자가 아닌 무비자로 들어와서 학업을 계속한다. 그리고 60일 내에 러시아가 아닌 다른 나라 러시아 대사관에서 비자를 다시 받아서 학업비자로 러시아에 들어온다는 계획이다. 이른바 ‘비자 뺑뺑이’ 처방이었다. 직원은 여기에 많은 학생들이 노르웨이 등의 나라를 방문한다고 했는데 나는 현실적으로 가까운 우크라이나 키예프로 행선지를 정했다. 당시만해도 전쟁 전이라 지리적으로도 문화적으로도 가까운 러시아와 우크라이나는 많은 사람들이 왕래했다.
          </p>
        </div>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">국경에서의 갈취 🚌</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          우선 불법체류가 되지 않으려면 비자 만료 전에 러시아 영토를 빠져나가는 것이 급선무였다. 따라서 최대한 빨리 비자 만료일에 맞춰 우크라이나로 가는 버스를 예약했다. 기차가 좀 더 편하지만 가격이 더 저렴하한 버스를 선택했는데, 이로써 닥칠 미래를 전혀 알지 못했다. 아침에 출발한 버스는 밖이 어둑어둑해 질 때 쯤 러시아-우크라이나 국경에 도착하자, 국경 수비대원 두 명이 버스에 올라타서는 우리 버스로 와서는 외국인이 타고 있냐고 물었다. 내가 탄 버스에 외국인은 단 한 명, 바로 내가 있었다. 아마 외국인이 있으면 검문을 더 철저히 하라는 상부의 명령이 있었던 것 같다. 나 때문에 다른 사람들까지 가지고 온 짐 검사를 더욱 철저히 받아야 했다.
        </p>

        <div class="bg-red-50 border border-red-200 rounded-lg p-6 my-6">
          <p class="leading-relaxed text-red-900 font-medium mb-2">💸 부당한 뇌물 요구</p>
          <p class="leading-relaxed text-red-800">
            그때 수비대원 하나가 내게 다가와 말을 걸었다. “너 때문에 이 모든 사람이 기다리는데 10만원 정도 주면 그냥 버스를 검사 없이 보내줄게”. 말도 안되는 부당한 뇌물 요구에 내가 버티자, 결국 그는 버스 기사와 협상을 벌였다. 모든 승객이 급행료 5천원씩을 부담하면 버스를 검사없이 보내준다고 했다. 사람들이 다 불만을 토로하며 돈을 내기로 합의하였기에 나도 그 돈을 냈다. 나는 분명 죄가 없다고 생각하지만 내 뒤통수로 러시아/우크라이나인들의 원망 섞인 따가운 눈초리가 느껴졌다. 남은 여정동안 어떤 일이 생길지도 모른다는 생각에 가지고 온 배낭을 꼭 끌어안은 채 목적지인 키예프에 무사히 도착할 때까지 잠들 수 없었다.
          </p>
        </div>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">키예프에서의 하룻밤 🍺</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          버스는 16시간의 이동 끝에 늦은 밤 키예프에 도착했다. 미리 예약을 해둔 호스텔에 가서 짐을 풀고는 저녁 식사를 위해 바깥으로 나왔다. 숙소 주인이 추천해준 식당에 들어가 자리를 잡고 샤슬릭이라는 꼬치 고기와 맥주를 시켰다. 따뜻한 고기와 맥주를 먹으니 이제서야 긴장의 끈이 풀리는 듯 했다. 이젠 숙소에 돌아가 한숨자고 아침 먹고 바로 다시 모스크바에만 돌아가면 되었다. 다행히 모스크바로 가는 버스에서는 이전과 같은 불쾌한 일은 없었지만 차가 많이 밀려서 버스에서 장장 스무 시간이 넘는 긴 시간을 보내야 했다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">두 번째 키예프행, 이번엔 기차로 🚂</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          그로부터 약 한 달 뒤, 아내와 함께 정식 비자를 발급 받기 위해 키예프로 향했다. 불미스러운 일이 생기지 않도록 이번에는 버스가 아닌 기차 이동을 결정했다. 러시아-우크라이나 국경에서 가장 가까운 러시아쪽 기차역에서 국경 수비대가 기차에 탑승하여 여권과 짐을 대강 검사하고는 도장을 찍어주었다. 짐 검사와 심사는 빠른 시간 안에 끝났고 다행히 뇌물을 요구하거나 하는 불쾌한 일 또한 없었다. 그 후 어느 정도 기차가 더 이동하고는 우크라이나 쪽 기차역에서 국경수비대가 탑승하여 입국 수속과 간단한 짐 검사를 했다. 기차 이동이 가격은 20퍼센트 정도 더 비쌌지만 누워서 갈 수 있고, 화장실 출입도 자유로우며, 무엇보다 국경 통과가 버스와 달리 신속하고 깔끔해서 마음에 들었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">꼬인 비자, 그리고 여행의 시작 🗺️</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          이른 아침 키예프에 도착한 바로 주 우크라이나 러시아 대사관을 찾아갔다. 대사관에 가보니 예약을 하지 않으면 비자발급 진행을 해줄 수 없다는 말을 들었다. 게다가 당시에는 담당자가 출장을 가서 없고 대리인도 없다고 했다. 숙소에 돌아와 숙소 주인 컴퓨터를 빌려서 비자를 온라인 등록 했고 비자 인터뷰 예약을 잡았다. 허탈했지만 기왕 이렇게 된거 ‘허탕’을 ‘여행’으로 세탁하기로 했다. 결심 후 행동은 신속했다. 바로 우크라이나 여행 정보를 수집했고, 리비우와 오데사라는 도시로 가는 기차표를 예매했다.
        </p>

        <h4 class="text-lg font-serif font-bold text-slate-800 mt-8 mb-3">환상적인 도시, 리비우 🍷</h4>
        <p class="leading-relaxed mb-6 text-slate-700">
          리비우의 첫인상은 환상적이었다. 시가지로 진입하자 유럽풍의 멋진 집들과 상점들 그리고 활기 넘치는 도시 분위기가 우리를 반겼다. 도시 자체가 거대한 박물관 같다는 생각마저 들었다. 시가지 중심가를 둘러보며 체리 와인을 시식하고 여러 관광지를 구경했다. 그리고 저녁에는 그리스 식당에 가서 근사한 식사를 즐겼다. 물가가 저렴해서 한국돈 만오천원이면 제대로 된 식사에 맥주를 곁들여 먹을 수 있었다.
        </p>

        <h4 class="text-lg font-serif font-bold text-slate-800 mt-8 mb-3">항구 도시 오데사 ⚓</h4>
        <p class="leading-relaxed mb-6 text-slate-700">
          이어 방문한 오데사는 한국으로 치면 부산과 같은 항구 도시인데 별로 인상깊은 도시는 아니었다. 다행히 어느 식당이든 물가는 저렴했고 음식이 맛있었다. 메뉴는 러시아와 크게 다를 건 없어 보였는데 확연히 맛이 좋다고 느껴졌다. 더불어 여수 밤바다가 생각나는 부둣가의 야경도 꽤나 멋들어졌다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">다시 키예프로, 끝나지 않은 여정 💉</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          키예프에 다시 돌아와서는 비자 발급을 위한 예약에 필요하다는 에이즈 검사를 하러 갔다. 정확히 왜 에이즈 검사가 필요한지는 모르겠지만 아마 전에는 러시아로 가는 사람 중에 에이즈 환자가 있어서 문제가 되었던 것이 아닌지 조심히 추측해 보았다. 에이즈 검사는 일주일 후에 받아볼 수 있고 비자 예약은 2-3주 뒤로 잡았기에 결과는 다음 방문에 받기로 하고 일단 모스크바로 다시 돌아왔다.
        </p>

        <hr class="border-slate-200 my-8 w-1/3 mx-auto" />

        <p class="leading-relaxed mb-6 text-slate-700">
          돌이켜보면 이 탈 많은 ‘비자 런’은, 결과적으로 예기치 않은 선물 같은 우크라이나 유람기가 되어버렸다. 다만 마음 한켠에 무거운 아쉬움이 남는다. 당시 우리가 발걸음을 옮기며 즐거운 추억을 쌓았던 그 정겨운 장소들 중 상당수가, 안타깝게도 지금은 전쟁 속에 구글 맵에 표시되지 않는다. 하루빨리 이 비극적인 전쟁이 멈추고 우크라이나에 다시금 평화가 찾아오기를 진심으로 바란다. 그래서 언젠가 다시 그 땅을 밟았을 때, 지도에 잠시 사라졌던 그 거리들이 다시 활기를 되찾고 우리를 반겨주기를, 그리고 그때는 비자 걱정 없는 가벼운 마음으로 리비우 시가지의 깊은 체리 와인을 다시 한 번 맛볼 수 있기를 간절히 기원해 본다.
        </p>
      `,
        en: `
        <p class="leading-relaxed mb-6 text-slate-700">
          The US visa system, which many Koreans are familiar with, has a 'separation of entry and residence rights' structure where you can legally stay as long as you have valid residence documents, even if your visa has expired. However, in Russia, the visa itself is the residence permit, so the expiration of the visa means the loss of residence status. If you do not clearly recognize this difference in systems, you are likely to face unexpected administrative difficulties in your life in Russia. 🛂
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">A Tangled Visa Renewal 😫</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Before the vacation began, I inquired about visa renewal at the department office. The department office told me, "You just need to apply for an extension before your visa expires." So I went on vacation with a carefree mind, and when I came back, I was told, "Sorry, you should have applied for an extension a month before your visa expired." Although it was my fault for not checking carefully, the department said that such things happen often and that it was not a big deal. I wondered why they didn't tell me that I had to apply for a visa extension a month in advance, even though such things had happened before.
        </p>
        
        <div class="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400 mb-8">
          <p class="leading-relaxed text-slate-700 italic">
            "Anyway, since my stay could be a problem right away, I listened to the staff. To summarize: Koreans can stay for a maximum of 60 consecutive days without a visa. And you have to leave Russia to change your purpose of residence. Therefore, the plan was to leave Russia before my visa expired, enter without a visa, not a student visa, and continue my studies. And then, within 60 days, I would get a visa again at a Russian embassy in another country, not Russia, and enter Russia with a student visa. This was the so-called <span class='font-bold text-yellow-700'>'visa run'</span> prescription."
          </p>
        </div>

        <p class="leading-relaxed mb-6 text-slate-700">
            The staff said that many students visit countries like Norway, but I realistically chose Kyiv, Ukraine as my destination. At that time, before the war, many people traveled between Russia and Ukraine, which were geographically and culturally close.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Extortion at the Border 🚌</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          First of all, to avoid being an illegal immigrant, it was urgent to leave Russian territory before my visa expired. Therefore, I booked a bus to Ukraine as quickly as possible to match my visa expiration date. I chose a bus, which was cheaper than a train, although a train would have been more comfortable, and I had no idea what future this would bring. The bus, which left in the morning, arrived at the Russia-Ukraine border when it was getting dark outside. Two border guards got on the bus and asked if there were any foreigners on board. There was only one foreigner on my bus, and that was me. I think there was an order from above to be more thorough in checking if there were any foreigners. Because of me, everyone else had to have their luggage checked more thoroughly.
        </p>

        <div class="bg-red-50 border border-red-200 rounded-lg p-6 my-6">
          <p class="leading-relaxed text-red-900 font-medium mb-2">💸 Unfair Bribe Demand</p>
          <p class="leading-relaxed text-red-800">
            At that time, one of the guards approached me and spoke to me. "Because of you, all these people are waiting. If you give me about 100,000 won, I'll let the bus go without inspection." When I resisted the absurd and unfair demand for a bribe, he eventually negotiated with the bus driver. He said that if all the passengers paid an express fee of 5,000 won each, he would let the bus go without inspection. Since everyone complained and agreed to pay the money, I also paid it. I was sure I was innocent, but I could feel the resentful and stinging glares of the Russians/Ukrainians on the back of my head. I couldn't fall asleep until I arrived safely in Kyiv, my destination, clutching my backpack tightly, thinking about what might happen during the rest of the journey.
          </p>
        </div>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">One Night in Kyiv 🍺</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          After a 16-hour journey, the bus arrived in Kyiv late at night. I went to the hostel I had booked in advance, unpacked my luggage, and went out for dinner. I went into a restaurant recommended by the hostel owner, took a seat, and ordered shashlik, a skewered meat, and beer. After eating the warm meat and drinking the beer, I felt the tension finally release. Now I just had to go back to the hostel, get some sleep, have breakfast, and go back to Moscow. Fortunately, there were no unpleasant incidents like before on the bus to Moscow, but the traffic was heavy, so I had to spend a long time of over twenty hours on the bus.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Second Trip to Kyiv: This Time by Train 🚂</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          About a month later, I headed to Kyiv with my wife to get a formal visa. To avoid any unpleasant incidents, we decided to travel by train this time, not by bus. At the Russian train station closest to the Russia-Ukraine border, border guards boarded the train, roughly checked our passports and luggage, and stamped them. The luggage check and inspection were over in a short time, and fortunately, there were no unpleasant incidents such as demanding bribes. After the train had traveled a little further, border guards boarded at the Ukrainian train station and conducted entry procedures and a simple luggage check. The train journey was about 20 percent more expensive, but I liked it because I could lie down, go to the bathroom freely, and most importantly, the border crossing was quick and clean, unlike the bus. ✨
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">A Tangled Visa, and the Beginning of a Journey 🗺️</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          As soon as we arrived in Kyiv early in the morning, we went to the Russian Embassy in Ukraine. When we went to the embassy, we were told that we could not proceed with the visa application without an appointment. In addition, at that time, the person in charge was on a business trip and there was no deputy. I went back to my accommodation, borrowed the owner's computer, registered for the visa online, and made an appointment for a visa interview. I was disappointed, but since it had already happened, I decided to <span class="bg-yellow-100 px-1">'launder' the 'wasted trip' into a 'trip'.</span> After making the decision, my actions were swift. I immediately gathered information about traveling in Ukraine and booked train tickets to the cities of Lviv and Odesa.
        </p>

        <h4 class="text-lg font-serif font-bold text-slate-800 mt-8 mb-3">Lviv, a Fantasy City 🍷</h4>
        <p class="leading-relaxed mb-6 text-slate-700">
          The first impression of Lviv was fantastic. As we entered the city, we were greeted by wonderful European-style houses and shops, and a vibrant city atmosphere. I even thought that the city itself was like a huge museum. We looked around the city center, tasted cherry wine, and visited several tourist attractions. And in the evening, we went to a Greek restaurant and enjoyed a wonderful meal. The prices were so cheap that we could have a proper meal with beer for about 15,000 Korean won.
        </p>
        
        <h4 class="text-lg font-serif font-bold text-slate-800 mt-8 mb-3">Odesa, a Port City ⚓</h4>
        <p class="leading-relaxed mb-6 text-slate-700">
          Odesa, which we visited next, is a port city like Busan in Korea, but it was not a very impressive city. Fortunately, the prices were cheap at any restaurant, and the food was delicious. The menu didn't seem much different from Russia, but I felt that the taste was clearly better. In addition, the night view of the pier, which reminded me of the night sea of Yeosu, was also quite wonderful. 🌃
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Back to Kyiv: An Unfinished Journey 💉</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          After returning to Kyiv, I went to get an AIDS test, which was required for the visa application. I didn't know exactly why an AIDS test was needed, but I carefully guessed that perhaps there had been a problem with an AIDS patient going to Russia in the past. The results of the AIDS test would be available in a week, and the visa appointment was scheduled for 2-3 weeks later, so we decided to get the results on our next visit and returned to Moscow for the time being.
        </p>

        <hr class="border-slate-200 my-8 w-1/3 mx-auto" />

        <p class="leading-relaxed mb-6 text-slate-700">
          Looking back, this troublesome 'visa run' turned out to be an unexpected gift of a trip to Ukraine. However, a heavy regret remains in a corner of my heart. Many of the friendly places where we walked and made happy memories at that time are unfortunately not marked on Google Maps now due to the war.
        </p>
        
        <blockquote class="border-l-4 border-russia-blue pl-4 py-2 my-6 italic text-slate-700 bg-slate-50">
          "I sincerely hope that this tragic war will stop as soon as possible and that peace will return to Ukraine. So that when I set foot on that land again someday, the streets that had temporarily disappeared from the map will regain their vitality and welcome us, and that at that time, I will be able to taste the deep cherry wine of Lviv's city streets again with a light heart, free from visa worries. 🙏"
        </blockquote>
      `,
      },
    },
    {
      id: 'post-302',
      title: { ko: '비자 재발급', en: 'Visa Re-issuance' },
      subtitle: {
        ko: '세 번의 국경 횡단, 그리고 마침내 얻은 한 장의 종이',
        en: 'Three Border Crossings, and a Single Piece of Paper Finally Obtained',
      },
      imageUrl: 'https://c8.alamy.com/comp/2BHT8N9/border-crossing-stamps-in-the-passport-2BHT8N9.jpg?q=80&w=1200&auto=format&fit=crop', // St. Andrew's Church in Kyiv
      isActive: true,
      comments: [],
      content: {
        ko: `
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">다시, 운명의 땅 키예프로 🚂</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          3주 뒤, 비자 인터뷰가 있는 운명의 날을 맞아 열차를 타고 다시 우크라이나 키예프로 향했다. 이젠 벌써 몇번 와봤다고 기차 이동도 능숙하고 키예프도 익숙하다. 일단 키예프에 온 목적인 비자부터 처리해야 했다. 제일 먼저 향한 곳은 지난 번에 에이즈 검사를 하러 갔던 병원이었다. 아내가 농담으로 “여보, 에이즈 양성 나오면 우린 어떻게 되는 거야?”라고 물었다. 맹세코 그럴 일은 없기에 생각도 해본 적 없지만, 아주 만약에 아주 혹시라도 그렇다면 비자가 문제가 아니라 내 인생이 심각하게 난처해질 것 같았다. 병원에서 ‘이상 없음’이라는 당연한 결과를 받았는데도 이상하리만큼 큰 안도감과 행복이 몰려왔다. 행복은 바로 당신 발밑에 있음을 잊지 말자. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">순조로운 시작과 성급한 자축 🍷</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          지난 번에는 대사관에 갈 때 길을 조금 해멨지만 이제는 길을 잘 알기에 느긋하게 약속시간에 맞춰 갈 수 있었다. 대사관에서 직원이 비자 관련 서류를 살펴보는 동안 조금 긴강이 되었지만 서류가 잘 작성되고 준비되었다는 말에 한시름 놓았다. 다만 비자 발급에 영업일 기준으로 3일 정도가 더 걸린다고 하여 키예프에서 여행을 하며 기다리기로 하였다. 지난 번에는 바로 다른 도시로 떠나서 정작 우크라이나의 심장이자 수도인 키예프를 제대로 보지 못했었다. 계획했던 일이 잘 처리가 되었기에 자축하는 마음으로 대낮부터 근사한 식당에 가서 스테이크와 와인을 시켰다. 둘이서 배불리 먹고도 3만원 남짓한 청구서를 보며, 우크라이나의 물가에 다시 한 번 감탄했다. 
        </p>

        <div class="bg-slate-50 p-6 rounded-lg border-l-4 border-russia-blue my-6">
          <p class="leading-relaxed text-slate-700">
            여담으로, 2016년 당시 우크라이나의 물가는 상상을 초월할 정도로 저렴했다. 어느 정도냐면, 지하철 요금은 200원도 안했고, 보통 한 끼 식사는 4-5천원 이내, 맥주 500mL 한 잔을 식당에서 사면 천 원 정도였다. 하지만 이 비현실적인 물가 뒤에는 우크라이나의 아픈 역사가 숨어 있었다. 2014년 러시아가 우크라이나의 핵심 지역인 돈바스와 크림반도를 무력으로 병합한 뒤, 우크라이나의 경제는 직격탄을 맞았다. 우크라이나의 화폐 가치가 폭락하면서, 외화를 가진 사람들은 상관없었지만 그 땅을 일구며 살아가는 현지인들에게는 힘든 나날이었음이 분명했다. 지금도 전쟁 중인 우크라이나의 현실이 어떨지 상상도 하기 힘들다. 
          </p>
        </div>

        <p class="leading-relaxed mb-6 text-slate-700">
          어쨌든 무거운 이야기는 뒤로 하고, 키예프에 3번 방문하는 동안 항상 같은 속소에 머물렀다. 그 덕에 숙소 주인과도 꽤나 친해졌고 이번 방문에는 작은 선물도 챙겨서 주었다. 숙소 주인에게 키예프를 조금 더 천천히 둘러보고 싶다고 말하며 여행지를 추천해 줄 수 있는지 물어보았다. 많은 것 중에 나의 이목을 제일 끌었던 것은 바로 키예프에서 출발하는 당일치기 체르노빌 여행이었다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">체르노빌 투어의 유혹 ☢️</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          체르노빌 투어는 과거에 매우 인기 있는 여행 프로그램 중 하나였다. (물론 현재는 안타까운 러·우 전쟁으로 인해 체르노빌 지역 일부가 파괴되었고 안전 문제가 불거져, 언제 다시 이 투어가 재개될지 미지수다.) 당시에는 폐허가 된 도시 프리피야트를 걷는 코스나, 심지어 체르노빌 원자력 발전소 내부를 탐방하는 간 큰 투어 옵션도 있었다. 키예프에서 출발해 하루 종일 진행되었는데, 그 성능을 100% 신뢰할 수는 없지만 나름대로 방사능 측정기 같은 안전 장비도 제공되었다고 한다. 
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          당시 나는 자연에서 아주 조금 나오는 방사선에 대해 연구를 하고 있었다. 웬지 체르노빌 투어가 가서 괜찮은 표본(?)을 좀 챙겨올 수 있지 않을까하는 엉뚱한 학구열에 당장이라도 가고 싶었다. 하지만 방사선 분야의 전문가이신 지도 교수님조차 그곳엔 본인이라면 가지 않겠다고 했던 말이 뇌리를 스쳤다. 게다가 우리 부부는 아직 아이도 없었기에, 혹시 모를 불확실성의 씨앗을 심고 싶지 않았다. 만일 찰나의 호기심 때문에 훗날 태어날 우리 아이가 조금이라도 건강에 불편함을 겪는다면, 평생 돌이킬 수 없는 죄책감을 안고 살아야 할 것 같았다. 결국 학구열보다 가족의 평화를 지키기로 결정했다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">뜻밖의 발견, 키예프 국립 식물원 🌸</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          숙소 주인이 추천해 준 또 다른 곳은 키예프 국립 식물원(Kyiv National Botanical Garden)이었다. 처음엔 대단할 것 없어 보였지만, 산책하다 우연히 발견한 작은 돔 형태의 온실이 하이라이트였다. 입장료를 내고 들어가 보니 우크라이나의 척박한 기후에서는 상상도 할 수 없는 열대, 사막 지역의 신기한 식물과 동물들이 가득했다. 구경을 마치고 야외로 나와 걷다 보니 뜻밖에도 ‘한국 정원’이 나타났다. 이역만리 우크라이나 땅에 이토록 정교한 한국 정원이 있다니! 안내문을 보니 양국 교류를 기념하여 한국에서 직접 장인과 재료를 공수해 지었다고 한다. 단아한 정자도 예뻤지만, 그 옆에 한반도 지도 모양으로 심어진 꽃들을 보며 묘한 애국심마저 차올랐다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">다시, 매력적인 도시 리비우 🍒</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          비자 발급까지 아직 시간이 남았기에 우리는 다시 한번 매력적인 도시 리비우(Lviv)로 향했다. 리비우는 여전히 유럽의 낭만이 물씬 풍기는 곳이었다. 골목마다 자리 잡은 로스터리 카페에서 풍기는 진한 커피 향이 도시의 운치를 더했다. 하지만 리비우 최고의 아웃풋은 단연 ‘체리 와인’이다. 지난번 방문 때 그 달콤함에 반했던 우리는 아예 작정을 하고 가게에 들러 지인들에게 선물할 와인을 여러 병 쟁여두었다. 리비우는 도시 자체가 아담해서 굳이 목적지를 정하지 않고 발길 닿는 대로 걸어도 훌륭한 여행이 되는 마법 같은 곳이었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">해피엔딩: 지긋지긋했던 비자 런의 끝 🎉</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          리비우의 낭만을 뒤로하고 다시 키예프로 돌아와 대망의 비자를 수령했다. 무려 세 번이나 국경을 넘나들며 우크라이나에 출석 도장을 찍은 끝에, 마침내 내 여권 한 페이지를 당당히 장식하고 있는 빳빳한 새 비자를 마주하니 십 년 묵은 체증이 싹 가시는 기분이었다. 러시아는 딱 ‘학비를 낸 기간’만큼만 학생 비자를 내어준다. 나는 이미 남은 1년 치 학비를 완납했기에, 한국으로 돌아가기 전까지 이 지긋지긋한 비자 런을 다시 뛸 일은 없었다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          돌이켜보면 한낱 종이 쪼가리 하나를 얻기 위해 버스와 기차에서 뜬눈으로 밤을 새우고, 뇌물을 뜯기고, 피까지 뽑아야 했던 이 긴 여정은 그야말로 슬라브식 하드코어 어드벤처였다. 무엇보다 이 핑계 저 핑계 대며 수업을 합법적으로(?) 빼먹고, 아내와 함께 우크라이나의 낭만적인 골목길을 거닐며 잊지 못할 추억을 잔뜩 쌓았으니 이 어찌 완벽한 해피엔딩이 아니겠는가. 비자 런이라는 이름으로 시작된 우크라이나 유람기는 이렇게 내 여권 속 선명한 도장 하나와 달콤한 체리 와인 향기만을 남긴 채 아름답게 막을 내렸다.
        </p>
      `,
        en: `
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Again, to the Fateful Land of Kyiv 🚂</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Three weeks later, on the fateful day of the visa interview, I took a train to Kyiv, Ukraine again. I had been here a few times now, so I was skilled at train travel and familiar with Kyiv. First, I had to take care of the visa, which was the purpose of my visit to Kyiv. The first place I went to was the hospital where I had gone for an AIDS test last time. My wife jokingly asked, "Honey, what happens to us if you test positive for AIDS?" I swear there was no way that would happen, so I had never even thought about it, but if by some very slim chance it did, it would not be a visa problem, but my life would be in serious trouble. Even though I received the obvious result of 'no abnormalities' from the hospital, I felt an unusually great sense of relief and happiness. Let's not forget that happiness is right under your feet. ✨
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">A Smooth Start and a Premature Celebration 🍷</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Last time, I got a little lost on my way to the embassy, but now I knew the way well, so I was able to go at a leisurely pace and arrive on time for my appointment. I was a little nervous while the embassy staff looked over my visa documents, but I was relieved to hear that the documents were well-written and prepared. However, since it would take about 3 more business days to issue the visa, we decided to wait while traveling in Kyiv. Last time, we left for another city right away, so we didn't get to see Kyiv, the heart and capital of Ukraine, properly. Since the planned work was handled well, we went to a nice restaurant in the middle of the day and ordered steak and wine to celebrate. We were amazed once again at the prices in Ukraine when we saw the bill for just over 30,000 won, even though the two of us had eaten our fill.
        </p>

        <div class="bg-slate-50 p-6 rounded-lg border-l-4 border-russia-blue my-6">
          <p class="leading-relaxed text-slate-700">
            <span class="font-bold">As an aside,</span> the prices in Ukraine in 2016 were unimaginably cheap. To give you an idea, the subway fare was less than 200 won, a typical meal was within 4-5,000 won, and a 500mL glass of beer at a restaurant was about 1,000 won. 🍻 However, behind these unrealistic prices was the painful history of Ukraine. After Russia's armed annexation of Ukraine's key regions of Donbas and Crimea in 2014, Ukraine's economy was hit hard. As the value of Ukraine's currency plummeted, it didn't matter to people with foreign currency, but it must have been difficult days for the locals who were cultivating the land. It's hard to even imagine what the reality of Ukraine, which is still at war, is like now.
          </p>
        </div>

        <p class="leading-relaxed mb-6 text-slate-700">
          Anyway, putting the heavy stories aside, we always stayed at the same accommodation during our 3 visits to Kyiv. Thanks to that, we became quite close with the owner of the accommodation, and on this visit, we even brought a small gift. I told the owner that I wanted to take a slower look around Kyiv and asked if he could recommend any travel destinations. Among many things, what caught my eye the most was a day trip to Chernobyl departing from Kyiv.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">The Temptation of a Chernobyl Tour ☢️</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The Chernobyl tour was one of the most popular travel programs in the past. (Of course, now, unfortunately, parts of the Chernobyl area have been destroyed due to the Russian-Ukrainian war, and safety issues have arisen, so it is uncertain when this tour will resume.) At that time, there were tour options such as a course walking through the ruined city of Pripyat, and even a bold tour option to explore the inside of the Chernobyl nuclear power plant. The tour departed from Kyiv and lasted all day, and although its performance could not be 100% trusted, it was said that safety equipment such as a radiation detector was also provided.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          At that time, I was researching the very small amount of radiation that comes from nature. For some reason, I wanted to go on the Chernobyl tour right away, with the quirky academic passion that I might be able to get some good samples(?). However, the words of my advisor, who was an expert in the field of radiation, that he would not go there himself, crossed my mind. In addition, my wife and I did not have children yet, so we did not want to plant a seed of uncertainty. If our future child were to suffer even a little from health problems because of a moment of curiosity, I felt that I would have to live with a sense of guilt that I could never undo for the rest of my life. In the end, I decided to protect the peace of my family rather than my academic passion. 👨‍👩‍👧
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">An Unexpected Discovery, the Kyiv National Botanical Garden 🌸</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Another place the accommodation owner recommended was the Kyiv National Botanical Garden. At first, it didn't seem like much, but the highlight was a small dome-shaped greenhouse that we accidentally discovered while walking. After paying the entrance fee and going inside, we found that it was full of strange plants and animals from tropical and desert regions that would be unimaginable in the barren climate of Ukraine. 🌵 After finishing our tour and walking outside, we unexpectedly came across a 'Korean Garden.' To think that there was such an elaborate Korean garden in the distant land of Ukraine! According to the information sign, it was built by bringing craftsmen and materials directly from Korea to commemorate the exchange between the two countries. The elegant pavilion was also beautiful, but seeing the flowers planted in the shape of the Korean peninsula map next to it, I felt a strange sense of patriotism welling up. 🇰🇷
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Again, to the Charming City of Lviv 🍒</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Since we still had time before our visa was issued, we headed to the charming city of Lviv once again. Lviv was still a place full of European romance. The rich aroma of coffee wafting from the roastery cafes in every alley added to the city's charm. But the best output of Lviv is definitely 'cherry wine'. We, who had fallen in love with its sweetness on our last visit, made a point of stopping by a shop and stocking up on several bottles of wine to give as gifts to our acquaintances. Lviv is such a small city that it was a magical place where you could have a great trip just by walking wherever your feet took you, without having to set a destination.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">A Happy Ending: The End of the Tedious Visa Run 🎉</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Leaving the romance of Lviv behind, we returned to Kyiv and received our long-awaited visa. After crossing the border as many as three times and getting our attendance stamped in Ukraine, the feeling of finally seeing the crisp new visa adorning a page of my passport was like having a ten-year-old indigestion completely relieved. Russia only issues student visas for the exact period for which tuition has been paid. Since I had already paid the remaining year's tuition in full, I didn't have to run this tedious visa run again before returning to Korea.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          Looking back, this long journey of having to stay up all night on buses and trains, being extorted for bribes, and even having my blood drawn just to get a single piece of paper was truly a Slavic-style hardcore adventure. Most of all, what a perfect happy ending it was to have been able to legally(?) skip classes with this and that excuse, and to have built up a lot of unforgettable memories while strolling through the romantic alleys of Ukraine with my wife. The Ukrainian cruise that began under the name of a visa run thus came to a beautiful end, leaving behind only a clear stamp in my passport and the sweet scent of cherry wine.
        </p>
      `,
      },
    },
    {
      id: 'post-303',
      title: { ko: '친구들의 방문', en: 'A Visit from Friends' },
      subtitle: {
        ko: '지갑은 잃었지만, 찐한 러시아의 추억을 얻다',
        en: 'I Lost My Wallet, but Gained Rich Memories of Russia',
      },
      imageUrl: 'https://mf.b37mrtl.ru/rbthmedia/images/2020.06/article/5ed7920a85600a12c8203c47.jpg?q=80&w=1200&auto=format&fit=crop', // Winter in Suzdal, Russia
      isActive: true,
      comments: [],
      content: {
        ko: `
        <p class="leading-relaxed mb-6 text-slate-700">
          나에게는 학부 시절 함께 튀르키예 여행을 함께 했던 두 명의 친구가 있다. 두 친구는 내가 러시아에 있을 때 각각 한국외국어대와 중앙대에서 학업을 하고 있었다. 겨울 방학 기간을 이용해서 모스크바에 방문하고 싶다고 했을 때 오랜만에 친구를 만난다는 사실에 기분이 들떴다. 추운 겨울에 모스크바에 오는 친구들에게 무엇을 보여줘야 할지 고민이 이만저만이 아니었다. 가족들이 방문했을 때 처럼 유명한 관광 명소들을 선별해서 보여줄 수 있지만 조금 더 날것의 ‘진짜 러시아 향’을 물씬 느끼게 해주고 싶었다. 
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          마침 그때, 이전에 (2년차 6화에 등장했던) 카브로프라는 작은 도시가 고향인 러시아인 친구가 떠올랐다. 그 친구는 한국 문화에 관심이 많았기에, 나처럼 이미 러시아에 오염(?)된 한국인보다 때 묻지 않은 ‘찐’ 한국 사람을 만나보고 싶어했다. 그래서 친구 두 명이 온다는 소식을 전하며 어디를 데려가면 좋을지 조언을 구했다. 러시아인 친구는 흔쾌히 자신의 고향을 소개해 주고 싶다고 나섰다. 모스크바보다 훨씬 더 진짜 러시아스러운 체험을 할 수 있을뿐더러, 자기 아버지가 특별한 체험까지 도와주겠다고 호언장담하여 우리는 카브로프로 떠나는 여행을 계획했다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">모스크바에서의 재회: 캄차카 펍에서 회포 풀기 🍻</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          며칠 뒤, 모스크바 셰레메치예보 국제공항에 도착한 친구들을 마중 나가 미리 예약해 둔 시내 숙소로 안내했다. 사실 셰레메치예보 공항에 올 때면, 모스크바에 처음 오자마자 당했던 택시 사기의 쓰라린 추억이 떠오르곤 했다. 하지만 가족들에 이어 친구들까지 이 공항으로 나를 찾아와 주니 그 안 좋았던 기억도 꽤 많이 희석된 상태였다. 2016년 당시 러시아는 수도인 모스크바조차 영어가 안 통하는 곳이 태반이었다. 그렇기에 친구들이 내 도움 없이 자력으로 할 수 있는 일은 극히 제한적이었다. 물론 내가 없었어도 구글 번역기를 쥐고 어떻게든 눈물겨운 생존기를 찍었겠지만 말이다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          오후에 도착한 친구들의 체크인을 돕고 짐을 풀고 나니 어느새 시간이 늦어졌다. 유럽의 여느 도시들처럼 모스크바 역시 대부분의 식당이 일찍 문을 닫는다. 다행히 시내로 나가면 밤늦게까지 영업하는 술집들이 있어, 오랜만에 회포도 풀 겸 내가 개인적으로 좋아하던 ‘캄차카’라는 펍(Pub)으로 안내했다. 참고로, 캄차카는 러시아 최동단에 위치한 반도의 이름이다. 안주와 맥주를 시켜놓고 밀린 이야기꽃을 피우다 보니, 친구들도 비행의 여독을 잊은 채 늦은 밤이 되어서야 술집을 나설 수 있었다. 그 후 며칠간은 삼총사처럼 셋이서 뭉쳐 다니며 모스크바 시내를 부지런히 둘러보았다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">불미스러운 사건: 내 지갑이 어디 갔지! 😠</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          그러다 모스크바 시내의 한 식당에서 식사할 때 불미스러운 일이 터졌다. 식당에 들어선 우리는 각자 벗은 외투를 자신이 앉은 의자에 툭 걸어놓았다. 밥을 먹는 도중 내 등 뒤로 누군가 앉았다가 일어나는 낌새를 느꼈지만 크게 신경 쓰지는 않았다. 하지만 밥값을 계산하려던 순간, 등골이 서늘해지며 무언가 단단히 잘못되었다는 것을 깨달았다. 아무리 뒤져도 내 지갑이 보이지 않았다. 내 등 뒤에 앉아 있던 사람의 실루엣이 뇌리를 스쳤다. 즉시 경찰에 신고하자 식당으로 출동한 경찰이 CCTV를 확인했다. 곧 연락을 주겠다는 말에, 우리는 찜찜한 마음을 안고 어쩔 수 없이 경찰을 믿으며 발걸음을 돌려야 했다.
        </p>
        <div class="bg-red-50 border border-red-200 rounded-lg p-6 my-6">
          <p class="leading-relaxed text-red-800">
            나중에 경찰서에서 연락이 와 가보니, 경찰관이 CCTV를 살짝 보여주며 내 지갑을 가져간 사람을 특정했다고 말해주었다. 그런데 정작 경찰관은 "이렇게 찍혀서는 범인을 찾을 수 없다"며 아주 귀찮다는 듯 심드렁하게 말했다. 게다가 내가 CCTV에 찍힌 얼굴을 제대로 보여달라고 요구하자 이마저도 거부했다. 도둑을 잡으려는 건지, 가해자의 초상권을 피해자로부터 보호하려는 건지 알 수 없는 환장할 노릇이었다. 이런 국가 기관의 태도를 겪고 나니, ‘러시아가 군사 강대국일 수는 있어도 선진국이 되려면 아직 한참 멀었구나’라는 생각이 다시금 들었다. 
          </p>
        </div>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">카브로프로 가는 길: 보석 같은 도시들 🚗</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          이런 씁쓸한 사건을 뒤로하고, 우리는 며칠간의 모스크바 구경을 마친 뒤 러시아인 친구의 고향 카브로프로 향하기 위해 차를 렌트했다. 아내와 나, 그리고 친구 둘까지 성인 넷이 모이니 렌터카 한 대를 꽉 채워 떠나기에 아주 훌륭한 인원수였다. 모스크바에서 카브로프까지는 직진만 하면 4시간 만에 닿을 거리였지만, 그 길목에 놓인 보석 같은 도시들을 그냥 지나칠 수는 없었다. 첫 번째 경유지였던 제법 큰 도시 '블라디미르'는 도시를 관통하는 긴 도로를 따라 끝없이 이어지는 화려한 조명이 인상적이었다. 하룻밤을 머물렀던 ‘수즈달’에서는, 오랜 역사를 품은 고즈넉한 러시아 겨울 마을의 풍경과 활기 넘치는 장마당의 소란스러움을 만끽할 수 있었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">카브로프 탐험: 토박이 친구 덕분에 👑</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          카브로프에 도착하니 러시아인 친구가 두 팔 벌려 우리를 기다리고 있었다. 숙소에 짐을 풀자마자 밖으로 나와 시가지 구경에 나섰다. 대학에 가기 전까지 이 도시에서 쭉 자란 러시아인 친구는 동네를 속속들이 알고 있었고, 거리를 걸을 때마다 곳곳에서 동네 지인들과 마주치며 인사를 나눴다. 공연이 없는 어느 극장 앞을 지날 때도 친구가 아는 사람이 있어, 덕분에 극장 내부와 무대 뒤, 심지어 의상실과 대기실까지 구석구석 구경하는 특권을 누렸다. 걷고 또 걷느라 다리도 아프고 허기가 지자, 꽁꽁 언 몸과 마음을 녹일 겸 식당으로 향했다. 시원한 맥주에 곁들인 현지 음식은 아주 훌륭했고, 우리 중에 흡연자는 없었지만 호기심에 ‘칼리얀’이라는 물담배도 하나 시켜서 뻐끔거리며 이국적인 분위기를 내보았다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">우솔리예 마을: 따뜻한 인심과 눈싸움 ❄️</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          이튿날 아침에는 우솔리예라는 근처의 작은 시골 마을로 향했다. 그곳에서 마을 아이들을 가르치는, 우리나라로 치면 ‘서당(?)’ 같은 문화원을 구경했다. 지역 고유의 전통 의상을 엿볼 수 있어 퍽 인상 깊었다. 이어서 성당에 들르니 신부님으로 보이는 분이 직접 나오셔서 성당 곳곳을 다정하게 소개해 주셨다. 구경을 마치고 나오자 이번엔 마을 반장님이 우리를 본인 집으로 초대해 따뜻한 차와 다과를 듬뿍 내어 주셨다. 모스크바의 차가운 도시 분위기에서는 좀처럼 느끼기 힘들었던 뭉클한 인심과 정이 아직 러시아 시골에는 고스란히 남아있었다. 오후에는 시골 마을에 수북이 쌓인 눈밭을 뒹굴며 동심으로 돌아가 눈싸움을 했고, 근처 썰매장에서 정말로 오랫만에 신나게 튜브 썰매도 탔다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">그랜드 피날레: 러시아식 사우나, 반야(Баня) 🔥</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          저녁 식사 후에는 대망의 러시아식 사우나인 ‘반야’를 체험하기 위해 러시아 친구 아버지의 지인 댁을 방문했다. 친구분의 자녀들까지 다 함께 모여 왁자지껄하게 사우나를 즐겼다. 집과 분리된 별채로 지어진 통나무 구조물이 바로 반야였다. 기본 원리는 한국의 사우나와 비슷했다. 장작불을 지피고 그 위에 돌을 뜨겁게 달군 뒤, 달궈진 돌 위로 물을 촤악 끼얹으면 순식간에 뜨거운 증기가 뿜어져 나오는 습식 사우나가 되어 온도가 급격히 올라갔다. 숨이 턱 막힐 정도로 뜨거움을 참다 한계에 다다르면, 나체 상태로 바로 통나무 밖 눈밭으로 뛰쳐나갔다. 사방이 칠흑같이 어두운 한겨울 눈밭 한가운데 욕조가 하나 덩그러니 놓여 있었다. 꽝꽝 얼어붙은 표면의 얼음을 깨부수고 차가운 물속에 푹 들어갔다 나와야 진짜 반야의 완성이라고 했다. 얼음물에서 튀어나와 눈밭을 한바탕 뒹굴고는 다시 반야로 뛰어 들어가는 이 극단적인(?) 냉온탕 과정을 세 번이나 반복하고 나서야 러시아인들은 흡족한 미소를 지었다. 극한의 사우나를 무사히 마친 우리는 집 안으로 초대받아, 숯불에 구운 고기와 독한 보드카를 쉴 새 없이 들이켰다. 뜨거운 사우나 직후에 독주까지 들어가니, 알딸딸한 기운에 젖어 그날 밤 어떻게 잠이 들었는지조차 기억나지 않았다.
        </p>

        <p class="leading-relaxed mb-6 text-slate-700">
          그렇게 러시아의 작은 도시 카브로프에서의, 달궈진 반야 돌멩이처럼 뜨겁고 강렬했던 여행이 마무리되었다. 비록 모스크바에서 지갑을 잃어버리는 작은 헤프닝도 있었지만, 이역만리 먼 타국까지 나를 보러 날아와 준 그리운 친구들 덕분에 그마저도 웃어넘길 수 있는 유쾌한 안줏거리가 되었다. 무엇보다 나 또한 한러 친구들 덕에 ‘찐한 러시아’를 경험해 볼 수 있었다. 
        </p>
      `,
        en: `
        <p class="leading-relaxed mb-6 text-slate-700">
          I have two friends with whom I traveled to Turkey together during my undergraduate years. When I was in Russia, both of them were studying at Hankuk University of Foreign Studies and Chung-Ang University, respectively. When they said they wanted to visit Moscow during the winter vacation, I was excited to see my friends after a long time. I was at a loss as to what to show my friends who were coming to Moscow in the cold winter. I could show them famous tourist attractions, just as I did when my family visited, but I wanted to give them a more raw, 'real Russian scent'. 🤠
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          Just then, I remembered a Russian friend from a small town called Kavrov (who appeared in Year 2, Episode 6). That friend was very interested in Korean culture, so he wanted to meet a 'real' Korean person who was not yet contaminated(?) by Russia like me. So, I told him that two of my friends were coming and asked for his advice on where to take them. My Russian friend readily offered to introduce his hometown. He boasted that we would be able to experience a much more authentic Russia than in Moscow, and that his father would even help us with a special experience, so we planned a trip to Kavrov.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Reunion in Moscow: Catching Up at the Kamchatka Pub 🍻</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          A few days later, I went to pick up my friends who had arrived at Moscow Sheremetyevo International Airport and guided them to their pre-booked accommodation in the city. In fact, whenever I came to Sheremetyevo Airport, I would be reminded of the bitter memory of the taxi scam I had fallen for as soon as I arrived in Moscow. However, since my family and now my friends had come to see me at this airport, that bad memory had been diluted quite a bit. At that time in 2016, even in the capital city of Moscow, there were many places where English was not spoken. Therefore, there were very few things my friends could do on their own without my help. Of course, even without me, they would have somehow managed to survive with Google Translate, albeit with a tearful struggle.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          After helping my friends, who had arrived in the afternoon, check in and unpack, it was already late. Like in any other European city, most restaurants in Moscow close early. Fortunately, there were pubs in the city center that were open late, so I guided them to my favorite pub, 'Kamchatka', to catch up after a long time. For reference, Kamchatka is the name of a peninsula located in the far east of Russia. We ordered some snacks and beer and caught up on each other's stories, and my friends were able to leave the pub late at night, having forgotten their travel fatigue. For the next few days, the three of us stuck together like the three musketeers and diligently explored the city of Moscow.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">An Unfortunate Incident: Where's My Wallet! 😠</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Then, an unfortunate incident occurred while we were eating at a restaurant in downtown Moscow. When we entered the restaurant, we each hung our coats on the chairs we were sitting on. While we were eating, I felt someone sit down and get up behind me, but I didn't pay much attention. However, when I was about to pay for the meal, a chill ran down my spine and I realized that something was seriously wrong. No matter how much I searched, I couldn't find my wallet. The silhouette of the person who had been sitting behind me flashed through my mind. When I immediately reported it to the police, the police who came to the restaurant checked the CCTV. They said they would contact me soon, so we had no choice but to trust the police and leave with a heavy heart.
        </p>
        <div class="bg-red-50 border border-red-200 rounded-lg p-6 my-6">
          <p class="leading-relaxed text-red-800">
            Later, when I went to the police station after receiving a call, a police officer briefly showed me the CCTV and told me that they had identified the person who had taken my wallet. However, the police officer said indifferently, "We can't find the culprit with this footage," as if he was very annoyed. In addition, when I asked him to show me the face on the CCTV properly, he refused even that. It was a frustrating situation where I couldn't tell if they were trying to catch the thief or protect the perpetrator's portrait rights from the victim. After experiencing the attitude of this state agency, I once again thought, 'Russia may be a military superpower, but it still has a long way to go to become a developed country.'
          </p>
        </div>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">On the Way to Kavrov: Gem-like Cities 🚗</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          After this bitter incident, we finished our few days of sightseeing in Moscow and rented a car to head to our Russian friend's hometown of Kavrov. With my wife, me, and two friends, we were four adults, which was a great number to fill a rental car. It was a straight 4-hour drive from Moscow to Kavrov, but we couldn't just pass by the gem-like cities along the way. The first stop, a fairly large city called 'Vladimir', was impressive with its endless colorful lights along the long road that ran through the city. In 'Suzdal', where we stayed overnight, we were able to enjoy the scenery of a quiet Russian winter village with a long history and the noisy bustle of a lively market.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Exploring Kavrov: Thanks to My Insider Friend 👑</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          When we arrived in Kavrov, our Russian friend was waiting for us with open arms. As soon as we unpacked our luggage at the accommodation, we went out to explore the city. My Russian friend, who had grown up in this city until he went to university, knew the neighborhood inside out, and as we walked down the street, he would greet local acquaintances everywhere. Even when we passed by a theater where there was no performance, a friend of his was there, and thanks to him, we had the privilege of seeing the inside of the theater, behind the stage, and even the dressing rooms and waiting rooms. After walking and walking until our legs ached and we were hungry, we headed to a restaurant to warm our frozen bodies and minds. The local food, accompanied by cold beer, was excellent, and although none of us were smokers, we ordered a hookah called 'kalyan' out of curiosity and puffed on it to create an exotic atmosphere.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">The Village of Usolye: Warm Hospitality and a Snowball Fight ❄️</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The next morning, we headed to a small nearby village called Usolye. There, we visited a cultural center, which is like a 'seodang(?)' in our country, that teaches the village children. It was very impressive to see the unique traditional costumes of the region. Next, when we stopped by a cathedral, a person who seemed to be a priest came out and kindly introduced us to the various parts of the cathedral. After finishing our tour, the village headman invited us to his house and served us plenty of warm tea and refreshments. The heartwarming hospitality and affection that were hard to feel in the cold urban atmosphere of Moscow were still intact in the Russian countryside. In the afternoon, we rolled around in the snow-covered fields of the village and had a snowball fight, returning to our childhood innocence, and we also had a great time riding a tube sled at a nearby sledding hill for the first time in a long time.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">The Grand Finale: The Russian Sauna, Banya (Баня) 🔥</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          After dinner, we visited the home of a friend of my Russian friend's father to experience the long-awaited Russian sauna, the 'banya'. All of the friend's children also gathered together and enjoyed the sauna in a boisterous atmosphere. The log structure built as a separate building from the house was the banya. The basic principle was similar to a Korean sauna. After lighting a wood fire and heating stones on top of it, when water was poured over the heated stones, hot steam was instantly released, turning it into a steam sauna and rapidly raising the temperature. After enduring the suffocating heat to the limit, we ran out into the snowfield outside the log cabin naked. In the middle of the pitch-black snowy field in the middle of winter, there was a bathtub. They said that the real banya was complete only after breaking the ice on the frozen surface and taking a dip in the cold water. After jumping out of the ice water and rolling around in the snowfield, we ran back into the banya. Only after repeating this extreme(?) hot and cold bath process three times did the Russians smile with satisfaction. After safely finishing the extreme sauna, we were invited into the house and drank strong vodka and ate charcoal-grilled meat without a break. After the hot sauna, the strong liquor went down, and I was so dazed that I don't even remember how I fell asleep that night.
        </p>

        <p class="leading-relaxed mb-6 text-slate-700">
          And so, our hot and intense trip to the small Russian city of Kavrov, like a heated banya stone, came to an end. Although there was a small incident of losing my wallet in Moscow, thanks to my dear friends who flew all the way to a foreign country to see me, even that became a pleasant anecdote to laugh about. Most of all, I also had the opportunity to experience 'real Russia' thanks to my Korean and Russian friends.
        </p>
      `,
      },
    },
    {
      id: 'post-304',
      title: { ko: '러시아의 결혼식', en: 'A Russian Wedding' },
      subtitle: {
        ko: '이틀간의 축제, 체력이 관건!',
        en: 'A Two-Day Festival, Stamina is Key!',
      },
      imageUrl: 'https://www.boyarovweddings.ru/wp-content/uploads/2024/02/3-4.jpg',
      isActive: true,
      comments: [],
      content: {
        ko: `
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💌 뜻밖의 초대</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
우리 부부는 러시아의 국민 SNS인 프콘탁테(VKontakte, 보통 VK라고 부른다)를 통해 한국어를 공부하고 싶어하던 또 다른 친구를 알게 되었다. 한국에 대한 관심과 한국어를 향한 열정이 대단했던 그 친구는 처음 알게 되었을 당시부터 만삭의 임신 중이었다. 언어 교환을 핑계로 만난 지 불과 몇 차례 되지 않았는데, 어느 날 친구는 우리 부부를 자신의 결혼식에 초대하고 싶다고 했다. 얼굴 몇 번 본 게 전부인 외국인을 덜컥 인생의 중대사에 초대하다니, 너무 빠른 친화력에 깜짝 놀랐다. 그래도 러시아의 결혼식에 직접 가서 현지 문화도 배우고 새로 사귄 친구도 축하해 주면 뜻깊을 것 같아 흔쾌히 초대에 응했다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🤯 하객의 고민: 옷차림, 축의금, 문화 차이</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
그나저나, 무려 이틀 동안이나 진행된다는 러시아 결혼식에는 도대체 무슨 옷을 입고 가야 하며, 또 축의금이나 선물은 어떻게 준비해야 할지가 큰일이었다. 한국을 그토록 좋아하는 친구인데, 정작 우리가 러시아의 결혼식 문화를 잘 몰라 민폐 하객이 될까 봐 며칠을 전전긍긍했다. 다행히 주변에 물어보니 일반적인 서구식 결혼식처럼 다들 정장을 입고 간다고 하여, 결혼식 당일 옷장 구석에 있던 정장을 꺼내 입고 식장이 있는 ‘이즈마일롭스키’로 향했다. 이곳은 우리가 종종 러시아 전통 인형인 마트료시카 같은 기념품을 사거나 샤슬릭을 먹으러 가던 단골 시장이 있는 곳으로, 시장 한가운데에는 동화 속에나 나올 법한 이즈마일롭스키 크렘린(Kremlin, 성채)이 자리하고 있다. 그리고 이 크렘린 안에 러시아인들이 결혼식을 올리는 ‘작스(ЗАГС)’라는 민사 등록소가 있다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏛️ 원스톱 결혼식: 작스(ЗАГС)에서의 예식</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
러시아에서 결혼식은 한국으로 치면 동사무소 혹은 구청 정도라고 할 수 있는 이 작스에서 이루어진다. 말 그대로 예식과 혼인신고를 관공서 한 방에서 ‘원스톱’으로 처리하는 셈이다. 한국에서는 성대하게 결혼식만 올리고 혼인신고는 미루는 부부도 있고, 반대로 식은 생략한 채 혼인신고만 하는 부부도 있는데, 러시아에서는 모든 법적·의례적 절차가 한 큐에 이루어지니 나로서는 꽤나 낯설고 신기한 광경이었다. 예식장처럼 화려하게 꾸며놓은 작스 내부로 들어가자, 사회자와 주례 선생님 대신 공무원들이 식을 주관했다. 순백의 웨딩드레스를 입은 신부와 턱시도를 차려입은 신랑은 진지하게 결혼 맹세를 하고, 혼인 서약서에 서명한 뒤 그 자리에서 빳빳한 결혼 증명서를 품에 안았다. 신랑 신부가 고용한 소규모 오케스트라가 관공서 한편에서 식 내내 로맨틱한 클래식 음악을 라이브로 연주해 주었던 것도 무척 인상 깊었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌳 산책은 필수! 결혼식 날의 여유</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
예식과 행정 절차를 작스에서 무사히 마친 부부는 하객들의 축하 세례를 받으며 건물을 배경으로 기념사진을 찍었다. 그리고 어김없이, 어쩌면 러시아인들의 DNA에 각인된 듯한 ‘산책 시간’이 찾아왔다. 러시아인의 산책 사랑은 정말 유별난데, 인생에서 가장 바쁜 날인 결혼식 일정에조차 기어이 산책을 끼워 넣을 줄은 꿈에도 몰랐다. 하객들은 작스에서 얼마 떨어지지 않은 근사한 공원으로 이동해 삼삼오오 짝을 지어 여유롭게 숲길을 걸었다. 마치 소풍이라도 온 듯 약속된 시간에 공원 한가운데 다시 모여 단체 사진을 찍고 나서야 이 성스러운(?) 산책 의식도 마무리되었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎉 피로연의 시작: 샴페인 잔 깨뜨리기</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
산책 후에는 본격적인 체력전인 피로연이 기다리고 있었다. 신랑 신부 측은 레스토랑 하나를 통째로 대관한 듯 보였다. 피로연장 입구에서는 아주 재미난 전통 행사가 열렸다. 러시아에서는 신랑과 신부가 샴페인 잔을 등 뒤로 휙 던져서 바닥에 깨뜨리는 풍습이 있다. 이는 두 사람의 앞날에 낄 액운을 요란한 소리로 쫓아내고 밝은 미래를 연다는 의미가 담겨 있다고 한다. 바닥에 흩뿌려진 유리 조각이 많고 잘게 부서질수록 결혼 생활이 더 길고 행복하게 지속된다고 믿는다니, 신랑 신부는 있는 등 뒤로 있는 힘껏 잔을 던졌다. 경쾌하게 잔을 깨고 박수 치고 사진 찍는 일련의 의식을 마치고 피로연장으로 입장했다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💃🕺 끝없는 춤, 음식, 그리고 건배사 릴레이</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
러시아 결혼식의 피로연은 그 규모와 지속력 면에서 압도적이었다. 우선 피로연이 상당히 길게 이어졌고, 쉴 새 없이 흥겨운 노래가 흘러나왔으며 하객들은 누가 먼저랄 것도 없이 홀로 나가 춤을 췄다. 음식은 입장할 때부터 이미 테이블이 휘어질 정도로 세팅되어 있었고, 각자 앞접시에 먹고 싶은 만큼 덜어 먹는 뷔페식이 가미된 형태였다. 접시나 술잔이 비기 무섭게 직원이 다가와 채워주었다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
무엇보다 놀라운 것은 러시아식 ‘건배사’ 릴레이였다. 양가 부모님이 먼저 커플의 앞날을 축복하며 잔을 들었는데, 이게 보통의 짧은 건배사가 아니라 거의 한국의 교장 선생님 훈화나 장편 주례사 수준으로 길었다. 부모님의 연설이 끝나면 다른 가족과 친구들에게도 마이크가 넘어갔다. 누군가는 신랑 신부의 어린 시절 추억을 눈물겹게 회상했고, 또 다른 누군가는 그들의 비밀스러운 연애 에피소드를 폭로하며 식장을 웃음바다로 만들었다. 분위기가 무르익을수록 나침반 잃은 마이크가 언제 우리 쪽으로 향할지 몰라 몹시 불안해졌다. 초대해 준 신부와 이제 막 안면을 튼 수준이었던 우리 부부는, “혹시라도 우리에게 마이크를 넘기며 러시아어로 축사를 시키면 어쩌지?” 하며 식은땀을 흘려야 했다. 다행히도 우리의 간절한 눈빛이 통했는지 그런 대참사는 일어나지 않았다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💪 체력전의 진실</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
알려진 바와 같이 러시아의 결혼식은 보통 1박 2일로 거창하게 진행된다. 하지만 1일 차의 끝없는 산책과 장장 몇 시간에 걸친 피로연으로 인해 우리의 저질 체력은 이미 바닥을 드러내고 말았다. 결국 우리는 2일 차 행사에는 차마 참석하지 못하고 백기를 들었다. 직접 보진 못했지만, 보통 2일 차에는 캐주얼한 복장으로 모여 야외에서 가볍게 바비큐를 구워 먹거나 게임을 하며 여흥을 즐긴다고 한다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
두어 시간이면 일사천리로 끝나는 한국의 결혼식과 달리, 러시아의 결혼식은 1박 2일이라는 장대한 일정 속에 온 동네 사람들이 모여 먹고 마시며 축하하는 기묘하고도 매력적인 축제 그 자체였다. 다만 한 가지 확실하게 배운 점이 있다면, 앞으로 러시아에서 누군가의 결혼식에 참석할 때는 두둑한 축의금 봉투를 챙기는 것보다 ‘밑바탕 체력을 단단히 다져놓는 것’이 백 배는 더 중요하다는 뼈저린 진리였다.
        </p>
      `,
        en: `
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💌 An Unexpected Invitation</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          My wife and I met another friend who wanted to study Korean through the Russian national social media platform, VKontakte (usually called VK). This friend, who had a great interest in Korea and a passion for the Korean language, was heavily pregnant from the time we first met. We had only met a few times under the pretext of language exchange, but one day, she said she wanted to invite us to her wedding. I was surprised by her fast friendliness, inviting a foreigner whom she had only seen a few times to a major event in her life. Still, I thought it would be meaningful to go to a Russian wedding in person, learn about the local culture, and congratulate our new friend, so I readily accepted the invitation.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🤯 The Guest's Dilemma: Clothes, Gifts, and Cultural Differences</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          By the way, it was a big deal what to wear to a Russian wedding that was said to last for two days, and what to prepare for a wedding gift or gift money. My friend loved Korea so much, but I was worried for a few days that we would be a nuisance guest because we didn't know the Russian wedding culture well. Fortunately, when I asked around, I was told that everyone wears a suit, just like at a typical Western wedding, so on the day of the wedding, I took out the suit from the corner of my closet and headed to 'Izmailovsky', where the wedding hall was located. This is a place where we often went to buy souvenirs like the Russian traditional doll, Matryoshka, or to eat shashlik, and in the middle of the market, there is the Izmailovsky Kremlin (fortress), which looks like it came out of a fairy tale. And inside this Kremlin, there is a civil registry office called 'ZAGS (ЗАГС)' where Russians get married.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏛️ One-Stop Wedding: The Ceremony at ZAGS (ЗАГС)</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          In Russia, weddings take place at this ZAGS, which can be compared to a community service center or a district office in Korea. Literally, the ceremony and marriage registration are handled 'one-stop' in one government office. In Korea, there are couples who have a grand wedding but postpone their marriage registration, and conversely, there are couples who only register their marriage without a ceremony, so it was a very unfamiliar and strange sight for me that all legal and ceremonial procedures were carried out in one go in Russia. When I entered the ZAGS, which was decorated as splendidly as a wedding hall, civil servants, not a host or an officiant, presided over the ceremony. The bride in a pure white wedding dress and the groom in a tuxedo seriously exchanged their wedding vows, signed the marriage contract, and received a crisp marriage certificate on the spot. It was also very impressive that a small orchestra hired by the bride and groom played romantic classical music live in a corner of the government office throughout the ceremony. 🎻
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌳 A Walk is a Must! Leisure on the Wedding Day</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          After successfully completing the ceremony and administrative procedures at the ZAGS, the couple took commemorative photos against the backdrop of the building, receiving a barrage of congratulations from the guests. And then, inevitably, it was time for a 'walk,' which seems to be ingrained in the DNA of Russians. The love of Russians for walking is truly peculiar, and I never dreamed that they would even squeeze a walk into the schedule of their busiest day, their wedding day. The guests moved to a nice park not far from the ZAGS and walked leisurely through the forest paths in groups of two and three. As if on a picnic, they gathered in the middle of the park at a set time, took a group photo, and only then did this sacred(?) walking ritual come to an end.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎉 The Start of the Reception: Breaking the Champagne Glasses</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          After the walk, a reception that was a real test of stamina awaited. The bride and groom seemed to have rented out an entire restaurant. A very interesting traditional event was held at the entrance of the reception hall. In Russia, there is a custom where the bride and groom throw champagne glasses over their shoulders and break them on the floor. This is said to ward off bad luck in their future and open a bright future with a loud noise. It is believed that the more and the smaller the glass shards scattered on the floor, the longer and happier the marriage will last, so the bride and groom threw the glasses with all their might behind their backs. After the series of rituals of cheerfully breaking the glasses, clapping, and taking pictures, we entered the reception hall. 🥂
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💃🕺 Endless Dancing, Food, and a Relay of Toasts</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The wedding reception in Russia was overwhelming in its scale and duration. First of all, the reception went on for a very long time, cheerful music was played without a break, and the guests danced in the hall without anyone having to go first. The food was already set on the tables to the point of bending them when we entered, and it was a buffet-style where you could take as much as you wanted on your own plate. As soon as our plates or glasses were empty, a staff member would come and refill them.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          What was most surprising was the Russian-style 'toast' relay. The parents of both sides first raised their glasses to bless the couple's future, but this was not a normal short toast, but a long one, almost at the level of a Korean principal's speech or a long wedding sermon. After the parents' speeches, the microphone was passed on to other family members and friends. Someone tearfully recalled the bride and groom's childhood memories, while another made the hall roar with laughter by revealing their secret dating episodes. As the atmosphere ripened, I became very anxious that the microphone, which had lost its compass, might be heading our way at any moment. My wife and I, who had only just gotten to know the bride who had invited us, had to break out in a cold sweat, wondering, "What if they pass the microphone to us and ask us to give a congratulatory speech in Russian?" 😅 Fortunately, our desperate gazes got through, and no such disaster happened.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🥵 Exhausted, and a Bitter Lesson Learned</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          As is well known, Russian weddings are usually held on a grand scale for two days and one night. However, due to the endless walks and the hours-long reception on the first day, our poor stamina had already hit rock bottom. In the end, we couldn't even attend the second-day event and raised the white flag. Although I didn't see it myself, I heard that on the second day, they usually gather in casual clothes and enjoy a barbecue outdoors or play games.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          Unlike a Korean wedding, which ends in a couple of hours in a flash, a Russian wedding was a bizarre and charming festival in itself, where all the people in the neighborhood gathered to eat, drink, and celebrate over a grand two-day schedule. However, if there was one thing I learned for sure, it was the bitter truth that when attending someone's wedding in Russia in the future, it is a hundred times more important to 'build up a solid foundation of stamina' than to prepare a thick envelope of congratulatory money. 💪
        </p>
      `,
      },
    },
    {
      id: 'post-305',
      title: { ko: '졸업논문 완성하기', en: 'Completing the Thesis' },
      subtitle: {
        ko: '러시아어, 분량, 그리고 깜빡이는 커서와의 사투',
        en: 'The Struggle with Russian, Page Count, and the Blinking Cursor',
      },
      imageUrl: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      isActive: true,
      comments: [],
      content: {
        ko: `
        <p class="leading-relaxed mb-6 text-slate-700">
학부 시절에는 논문을 써 본 적이 없기 때문에 그럴싸한 논문을 써야 한다는 것 자체가 엄청난 부담이었다. 무엇보다 러시아어라는 거대한 언어의 장벽이 앞을 가로막고 있었는데, 한국어로 쓰라고 해도 막막할 판에 러시아어로 학술적인 글을 써야 한다니 한숨부터 절로 나왔다. 게다가 언어의 압박을 차치하고서라도, 석사 논문은 대략 80에서 120페이지까지 채워야 한다는 절대적인 분량 자체도 공포스러웠다. 전혀 다른 과목을 공부하던 사람이 도대체 어떻게 겨우 1-2년 공부한 학문의 그럴 싸한 논문을 쓸 수 있겠나. 하물며 러시아어로! 하지만 졸업이 코앞이라 하염없이 걱정만 하며 논문 작성을 더 이상 미룰 수는 없었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎯 뜻밖의 희망: 예상외로 순조로운 주제 선정</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
군에서 위탁교육을 보낼 때는 어느 정도 큰 틀에서 주제를 정해준다. 더 정확히 말하자면 위탁교육 공고를 띄울 때부터 자신이 선발된다면 어떤 주제의 연구를 해야 할지 대략 알 수 있다. 대신 세부적인 특정 주제는 스스로 정해야 한다. 위탁교육에 선발되고 한국에서부터 어느 정도 생각해 놓은 논문 주제가 있어서 이를 지도교수님께 말씀드렸다. 다행히도 교수님은 괜찮은 주제라며 졸업 논문으로 쓰자고 흔쾌히 동의해 주셨다. 다른 지인들에게 물어보면 논문 주제를 정하는 데에만도 수개월의 시간이 걸린다는데, 나의 경우에는 나의 설레발(?) 덕분에 많은 시간을 절약할 수 있었다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">📚 첫 번째 산: 선행연구 리뷰</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
논문을 준비하면서 가장 먼저 맞닥뜨린 거대한 산은 관련 분야 논문 리뷰였다. 논문을 작성하기에 앞서 내가 쓸 논문이 가치를 갖기 위해서는 선배 학자들이 쓴 것들을 먼저 파악해야 하기 때문이다. 관련 분야 논문을 리뷰하며 기본 지식을 더 쌓을 수 있고, 매끄러운 문장들을 가져다가 쓸 수 있으며, 무엇보다 다른 사람이 이미 고생해서 연구한 내용을 헛고생하며 반복할 필요가 없기 때문이다. 하지만 러시아어로 된 논문과 자료들은 까만 건 글씨요 하얀 건 종이인지라, 언어 때문에 단순히 읽기만 해도 세월아 네월아 시간이 오래 걸렸다. 또한 내 수준에서는 이해가 전혀 되지 않는 내용들도 많아서 검은 눈동자만 굴렸을 뿐, 읽었다고 말할 수 없는 지경인 논문들도 수두룩했다. 그래도 어찌어찌 내 논문 주제와 비슷한 논문 몇 개는 지도교수님의 심폐 소생술 같은 도움을 받아 겨우 읽고 참고할 수 있었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💻 빈 문서와의 전쟁</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
그다음 큰 문제는 진짜로 논문을 작성하는 것이었다. 논리적으로 글을 전개하고 가설을 세워서 검증하고 결론까지 이끌어 내야 하는데 이게 말처럼 쉬운 것은 아니었다. 논문을 작성하는 과정은 매우 복잡한 일련의 작업의 결과물이라고 할 수 있는데, 아무도 이를 자세히 알려주지 않았고 “그냥 일단 작성해 오라”고만 하여 막막함이 이를 데 없었다. 일단 빈 워드 파일을 열었다. 한두 문장 끄적끄적 적다가 지우고 또 쓰고 지웠다. 결국 논문을 쓰기로 마음먹고 1~2주 동안 내가 한 거라고는 깜빡이는 커서와 눈싸움을 하며 뭔가를 썼다가 지운 것밖에 없었다. 야심 차게 저장했던 내 논문 워드 파일은 새로 만든 빈 파일과 용량 면에서 전혀 다르지 않았다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💡 빛과 소금 같았던 꿀팁</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
논문에 도움이 될 만한 이런저런 참고 자료들을 찾다가, 많은 사람들이 논문을 처음, 그러니까 초록이나 서론부터 쓰지 않고 결과부터 쓴다는 꿀팁을 발견했다. 사실 이 조언은 어떤 전공 서적보다도 내게 빛과 소금이 됐다. 논문 작성하는 방법을 몰라서 헤맸을 뿐, 이미 어느 정도 실험한 결과물은 내 손안에 나와 있었기 때문이다. 일단 실험의 결과물을 나타내는 그래프들을 하나하나 복사해서 붙여넣었고 거기에 설명을 덧붙였다. 이 작업은 마치 진도가 팍팍 나가는 게임처럼 순조롭게 진행되었고, 시간을 투자한 만큼 논문 페이지가 쭉쭉 늘어가서 짜릿한 보람과 성취감도 느낄 수 있었다. 다만 나의 비루한 러시아어로 복잡한 그래프를 유창하게 서술하기엔 역부족이었기에, 천사 같은 러시아인 친구들이 문장 심폐 소생술에 많은 도움을 주었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🧱 배경지식, 결론, 그리고 가장 어려운 서론</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
실험 및 결과 섹션을 어느 정도 마무리하고는 배경지식 섹션으로 넘어왔다. 이 섹션은 실험 결과를 이해하는 데 필요한 것들을 교과서나 다른 사람의 논문 등을 참고하여 작성하면 된다. 문장만 조금씩 교묘하게(?) 변경하여 쓰면 되는 거라 아주 어렵진 않았으나, 내가 창조해 낸 문장이 러시아어로 말이 되는 소리인지는 나조차도 잘 몰랐기에 여전히 러시아인 친구들의 첨삭 지도가 절실히 필요했다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
이제 결론과 서론만 남았다. 결론을 쓰는 것도 어려웠지만 서론에 비하면 그래도 결론은 아주 양반이었다. 결론에는 나의 연구가 어떠한 방향으로 진행되었고, 그 과정에서 드러난 발견들이 학문적, 실질적으로 어떤 가치를 지니는지 서술해야 했다. 보통 연구는 단지 하나의 결과로 끝나지 않고, 새로운 문제 제기와 함께 다른 연구로 이어질 가능성을 품고 있기에 차후 연구가 될 만한 주제에 대해서도 짧게 기술했다. 반면 서론에는 이 연구가 어떻게 시작하게 되었는지, 왜 필요한지, 그리고 현재의 문제점은 무엇인지 논리적으로 밑밥을 깔아야 했다. 나에게 가장 큰 걸림돌은 역시나 러시아어였기에 화려한 언변이 필요한 서론이 가장 나를 괴롭혔다. 교수님께서 내 초안을 살펴보더니, 본문에도 대대적인 공사가 필요하다고 진단하셨다. 교수님의 매의 눈을 거친 꼼꼼한 검토 덕에 문장 하나하나의 표현이 더 깔끔해지고, 논리의 흐름도 매끄러워졌다. 그중 가장 놀라운 점은 단순한 빨간펜 교정에 그친 게 아니라, 글 전체의 구조에 대한 새로운 관점을 보여주셨다는 것이다. 가끔은 문장의 순서를 살짝 바꾸는 마법을 부리셨고, 몇몇 부분에서는 문단 전체의 순서를 완전히 재배치하는 대수술을 감행하셨다. 채워 넣기에 급급해 허겁지겁 쓰기에 전념하느라 논리적인 구조는 내다 버렸다는 생각이 들었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🙏 많은 사람들의 피, 땀, 눈물(?)</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
우여곡절 끝에 논문은 대략 완성되었다. 이 글을 쓰면서 다시 논문을 열어보니, 그 안에 얼마나 많은 사람들의 피, 땀, 눈물(?)이 닿아 있는지 새삼 느껴졌다. 문법을 바로잡고 내용에 조언을 아끼지 않았던 친구들, 때로는 새로운 아이디어를 함께 고민해 준 동료들, 그리고 나의 어색한 문장과 부족한 표현 하나하나를 세심하게 다듬어주신 지도교수님까지. 그들의 도움은 논문의 구석구석에 살아 숨 쉬고 있었다. 이 글을 빌어 다시금 그들에게 감사의 인사를 전하는 바이다.
        </p>
      `,
        en: `
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🤯 The Triple Threat of Despair: Language, Length, and Lack of Experience</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Since I had never written a thesis during my undergraduate years, the very idea of having to write a decent one was a huge burden. Above all, the huge language barrier of Russian stood in my way, and I sighed just thinking about having to write an academic paper in Russian when it would have been daunting even in Korean. In addition, even apart from the pressure of the language, the sheer volume of a master's thesis, which had to be roughly 80 to 120 pages long, was also terrifying. How on earth could a person who had studied a completely different subject write a decent thesis in a field they had only studied for 1-2 years? Let alone in Russian! However, with graduation just around the corner, I couldn't postpone writing my thesis any longer while just worrying endlessly.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💡 A Glimmer of Hope: An Unexpectedly Smooth Topic Selection</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          When the military sends you for consignment education, they give you a topic in a broad sense. To be more precise, from the time the consignment education announcement is made, you can roughly know what topic you should research if you are selected. Instead, you have to decide on a specific topic yourself. After being selected for the consignment education, I had a thesis topic that I had been thinking about since I was in Korea, so I told my advisor about it. Fortunately, my advisor said it was a good topic and readily agreed to let me write it as my graduation thesis. When I asked other acquaintances, they said it took several months just to decide on a thesis topic, but in my case, I was able to save a lot of time thanks to my premature excitement(?).
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">📚 The Great Mountain: Reviewing Previous Research and the Language Barrier</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The first great mountain I encountered while preparing my thesis was reviewing papers in a related field. Before writing a thesis, you have to first understand what senior scholars have written in order for your thesis to have value. By reviewing papers in a related field, you can build more basic knowledge, you can use smooth sentences, and most importantly, you don't have to waste your time repeating the research that someone else has already worked hard on. However, since the Russian papers and materials were just black letters on white paper to me, it took a long time just to read them because of the language. In addition, there were many contents that I could not understand at all at my level, so there were a lot of papers that I could not say I had read, but only rolled my black eyeballs. Still, I was barely able to read and refer to a few papers similar to my thesis topic with the help of my advisor, which was like CPR.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">✍️ The Battle with the Blank Page: A Staring Contest with the Blinking Cursor</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The next big problem was actually writing the thesis. I had to develop the text logically, set up and test a hypothesis, and lead to a conclusion, which was not as easy as it sounds. The process of writing a thesis can be said to be the result of a very complex series of tasks, but no one told me in detail, and I was at a loss because they just told me to "just write it and bring it." I first opened a blank Word file. I scribbled a sentence or two, erased it, wrote it again, and erased it again. In the end, for the 1-2 weeks after I decided to write my thesis, all I did was have a staring contest with the blinking cursor and write something and then erase it. My ambitious thesis Word file was no different in size from a newly created blank file.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">✨ The Savior's Tip: The Magic of Filling in from the Results</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          While looking for various reference materials that would be helpful for my thesis, I discovered a great tip that many people don't write their thesis from the beginning, that is, from the abstract or introduction, but from the results. In fact, this advice was a light and salt to me more than any textbook on the subject. It wasn't that I didn't know how to write a thesis, it was that I had already had some experimental results in my hands. I first copied and pasted the graphs showing the results of the experiment one by one and added explanations to them. This work proceeded smoothly like a game that was making great progress, and I was able to feel a thrilling sense of reward and accomplishment as the thesis pages grew as much as I invested my time. However, since my poor Russian was not enough to describe the complex graphs fluently, my angelic Russian friends gave me a lot of help with sentence CPR.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🧑‍🏫 Filling in the Background Knowledge: The Help of Textbooks and Papers</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          After finishing the experiment and results section to some extent, I moved on to the background knowledge section. This section can be written by referring to textbooks or other people's papers for things necessary to understand the experimental results. It wasn't very difficult because I just had to change the sentences a little bit slyly(?), but I still desperately needed the proofreading guidance of my Russian friends because I myself didn't know if the sentences I created made sense in Russian.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🦸‍♂️ The Final Gateway and the Relief Pitcher: Introduction, Conclusion, and My Advisor</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Now only the conclusion and introduction were left. Writing the conclusion was also difficult, but compared to the introduction, the conclusion was a gentleman. In the conclusion, I had to describe the direction of my research, and the academic and practical value of the discoveries revealed in the process. Usually, research does not end with a single result, but has the potential to lead to other research with new problem-posing, so I also briefly described topics that could be future research. On the other hand, in the introduction, I had to logically lay the groundwork for how this research began, why it was necessary, and what the current problems were. The biggest obstacle for me was, of course, the Russian language, so the introduction, which required brilliant eloquence, was the most tormenting. When my advisor looked at my draft, he diagnosed that the body also needed major construction. Thanks to the professor's meticulous review with a hawk's eye, the expression of each sentence became cleaner, and the flow of logic also became smoother. The most surprising thing was that it was not just a simple red pen correction, but he showed me a new perspective on the structure of the entire text. Sometimes he worked his magic by slightly changing the order of the sentences, and in some parts, he performed a major surgery by completely rearranging the order of the entire paragraph. I felt that I had thrown away the logical structure because I was so preoccupied with filling in the blanks.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🙏 Gratitude and Retrospection: Everyone's Blood, Sweat, and Tears</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          After many twists and turns, the thesis was roughly completed. As I write this, I open the thesis again and feel anew how much of everyone's blood, sweat, and tears(?) it contains. My friends who corrected my grammar and did not spare their advice on the content, my colleagues who sometimes 고민 with me on new ideas, and my advisor who carefully refined every one of my awkward sentences and poor expressions. Their help was alive in every corner of the thesis. I would like to take this opportunity to thank them again.
        </p>
      `,
      },
    },
    {
      id: 'post-306',
      title: { ko: '졸업시험 및 학위방어', en: 'Graduation Exam and Thesis Defense' },
      subtitle: {
        ko: '교수님의 절대 쉴드 속에서 치러낸, 눈물과 땀의 학위 방어전',
        en: 'A Thesis Defense of Tears and Sweat, Fought Under the Absolute Shield of a Professor',
      },
      imageUrl: 'https://images.pexels.com/photos/8459030/pexels-photo-8459030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      isActive: true,
      comments: [],
      content: {
        ko: `
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎓 러시아의 국가 졸업시험, '고스(ГОС)'</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
러시아에서는 논문방어 외에도 반드시 넘어야 할 또 다른 거대한 산이 있다. 바로 ‘고스(ГОС)’라고 불리는 국가  졸업시험이다. 각 과마다 시험문제와 난이도가 천차만별이라고 들었는데, 보통은 학위 기간 동안 들었던 수업 중에 서너 과목을 지정해 집중적으로 출제된다. 고스라고 해서 러시아의 다른 시험과 별로 다를 건 없었다. 고스에 출제될만한 문제들을 문제은행 식으로 시험보기 한 달 전에 나누어 주고, 시험 당일 교수님들 앞에서 그 중 임의의 한 문제를 뽑아 구술로 발표하는 제비뽑기 형식이었다. 문제는, 연구보다는 수업의 비중이 더 높은 러시아의 석사 과정 특성 상, 2년 동안 정말 많은 수업을 들었기에 수업 범위가 말도 안되게 넓었다는 점이다. 
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
그나마 천만다행인 것은 '외국인 특별 할인(?)'이 적용되었다는 점이다. 러시아 현지인 친구들은 무려 100개의 문제를 준비해야 했던 반면, 외국인이었던 우리는 그들의 5분의 1인 20문제만 할당받았다. 하지만 학부 때 핵물리학을 공부했던 것도 아니었고, 아직 러시아어라는 거대한 언어 장벽이 떡하니 버티고 있었기에 이 20문제조차 결코 호락호락하지 않았다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">😬 운명의 제비뽑기</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
대망의 졸업시험 당일, 평소의 시험 날과 다른 점이 있다면 친구들 모두 한껏 멋을 내고 정장을 차려입고 왔다는 것뿐이었다. 시험을 주관하는 교수가 들어왔고, 우리는 차례대로 교탁으로 나가 운명의 문제를 뽑았다. 앞서 몇 차례 얘기했듯 러시아에서는 시험 문제를 무작위로 뒤집어서 선택한다. 그래서 종이를 뒤집는 순간 교실 곳곳에서 안도의 한숨과 절망의 탄식이 교차했다. 고스 당일에도 문제를 확인한 친구들의 입에서 새어 나오는 소리만으로 그들의 운수를 단번에 점칠 수 있었다. 심장이 터질 것 같았던 두근거림 속에서 내 차례가 왔을 때, 다행히도 엄청 어렵지 않은 문제가 내 손에 쥐어졌다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
외국인인 나는 준비해야 할 문제의 양이 적었기에 거의 모든 문제를 충분히 숙지하고 갈 수 있었다. 러시아 친구들도 투덜거리긴 했지만 결국 무난히 다 통과한 듯 보였다. 애초에 우리나라로 치면 서울대나 카이스트를 갈 만한 두뇌를 가진 영재들이었으니, 그들의 안위까지 내가 걱정할 필요는 없었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🥊 최종 보스, 학위 방어전</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
이제 진짜 최종 보스인 학위 방어(Defense)만 남았다. 지금까지의 수업이나 고스가 다른 사람이 전달해 준 지식을 이해하고 정해진 답을 뱉어내는 과정이었다면, 학위 방어는 확연히 결이 달랐다. 연구라는 것은 누군가 했던 것을 앵무새처럼 반복한다고 나의 성과로 인정되지 않는다. 선행 연구들을 논문을 통해 습득하고, 내가 새로운 이론이나 적용 방안을 발견하여 다른 학자들 앞에서 당당히 발표를 해야 한다. 만약 연구 과정이나 결과에 논리적, 기술적인 심각한 결함이 있다면 날카로운 심사위원들의 공격을 피하지 못할 것이다. 그렇기에 내가 한 연구를 말 그대로 ‘방어(Defense)’한다고 부르는 것이다. 쏟아지는 날 선 질문들을 무사히 방어해 낸다면, 적어도 심사위원들이 보기에 해당 학생이 학위를 취득할 자격이 있다고 인정받는 셈이다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">📖 아날로그식 논문 제본</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
내가 공부하던 당시에는 논문을 완성하면 직접 인쇄를 하고 제본을 떠서 심사위원들에게 일일이 나눠주어야 했다. 지금 생각하면 헛웃음이 나올 정도로 지독한 아날로그 방식이었는데, 가장 큰 문제는 이 링바인더 제본을 내 손으로 직접 뚫고 조립해야 한다는 사실을 학위 방어 전날에야 알았다는 것이다. 나의 얄팍한 지식 탓에 논문의 페이지 수가 그리 많지 않아 출력 자체는 부랴부랴 마칠 수 있었지만, 링바인더 기계를 다루는 법을 몰라 패닉에 빠졌다. 다행히 친구들이 자기 일처럼 두 팔 걷어붙이고 나서준 덕분에, 잘 차려입은 정장 셔츠가 땀으로 흥건해지긴 했지만 방어전 직전까지 무사히 제본을 완료할 수 있었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">👨‍🏫 지도교수님의 절대적인 쉴드</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
드디어 내 논문을 발표할 시간이 되었다. 심사위원 외에도 다른 교수님들이 매의 눈을 하고 들어와 있었다. 발표에 앞서, 나의 지도교수님은 내가 지난 2년간 어떤 연구를 했고 얼마나 성실한 학생이었는지 브리핑을 해주셨다. 그리고 마지막으로 “이 논문의 수준으로 판단하건대 충분히 훌륭한 방어를 해낼 것이며, 당연히 최고점인 5점(Отлично)을 받을 자격이 있다”고 선언해 버리셨다. 나중에 알게 된 사실이지만, 발표 전 지도교수가 이렇게 대놓고 ‘쉴드’를 쳐주는 것이 심사 결과에 절대적인 영향을 미친다고 들었다. 역시 어느 나라를 가든 대학원생에게 지도교수의 입김은 절대 권력이자 가장 든든한 동아줄인 듯하다. 
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
어쨌든 지도교수님의 소개 후에 발표를 시작했다. 충분히 준비했다고 생각했지만, 발표 내용을 거의 외워서 했기 때문에 온몸이 경직되어 있었고 중간중간 할 말을 잊고 버퍼링이 걸리기도 했다. 발표가 끝나자 예상대로 심사위원들의 송곳처럼 날카로운 질문이 쏟아졌다. 당황스러운 질문도 있었지만, 부끄럽게도 내가 말문이 막힐 때마다 지도교수님이 짠 하고 나타나 대신 방어를 해주시는 은혜를 베풀어 주셨다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏅 무엇과도 바꿀 수 없는 소중한 훈장</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
졸업 논문을 완성하고 모든 방어전을 무사히 마치며 느꼈던 감정은, 태산 같은 성취감과 동시에 영원히 끝나지 않을 것만 같았던 지독한 여정의 마침표였다. 많은 이들의 헌신적인 도움을 받았지만, 처음에는 불가능해 보였던 러시아어 논문을 기어코 완성해 냈고, 익숙하지 않은 언어로 날 선 교수들 앞에서 학위 방어까지 치러낸 이 성장의 경험은 내 인생에서 무엇과도 바꿀 수 없는 소중한 훈장이다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🙏 깊은 겸손을 배우다</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
러시아에서 치열하게 부딪혔던 3년 간의 학위과정은 나 자신을 양적으로보다 질적으로 훨씬 성숙하게 만들었다. 핵물리에 대한 전공 지식이나 번듯한 석사 학위증보다도, 나와 완전히 다른 타인을 이해하는 넓은 시야, 그리고 ‘나 혼자의 힘으로는 결코 아무것도 이룰 수 없다’는 깊은 겸손. 그것이야말로 겉은 춥고지만 안은 따뜻했던 (겉추안따) 땅에서 내가 얻어가는 가장 귀중한 전리품일 것이다. 
        </p>
      `,
        en: `
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎓 Russia's State Graduation Exam, 'GOS (ГОС)'</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          In Russia, in addition to the thesis defense, there is another huge mountain that must be climbed. It is the state graduation exam called 'GOS (ГОС)'. I heard that the exam questions and difficulty level vary greatly from department to department, but usually, three or four subjects from the courses taken during the degree program are designated and tested intensively. The GOS was not much different from other exams in Russia. A month before the exam, a list of problems that were likely to be on the GOS was distributed in a question bank format, and on the day of the exam, it was a lottery format where you would randomly draw one of the problems in front of the professors and present it orally. The problem was that, due to the nature of the Russian master's program where the proportion of classes is higher than research, the scope of the classes was ridiculously wide because we had taken so many classes for two years.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          Fortunately, there was a 'special discount for foreigners(?)'. While my Russian local friends had to prepare a whopping 100 problems, we foreigners were only assigned 20 problems, which was one-fifth of theirs. However, since I had not studied nuclear physics in my undergraduate years and the huge language barrier of Russian was still there, even these 20 problems were by no means easy.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">😬 The Fateful Lottery</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          On the day of the long-awaited graduation exam, the only thing different from a normal exam day was that all my friends were dressed up in suits. The professor in charge of the exam came in, and we took turns going to the lectern to draw our fateful problem. As I have mentioned a few times before, in Russia, you randomly choose an exam problem by flipping it over. So, the moment the paper was flipped, sighs of relief and groans of despair crossed the classroom. Even on the day of the GOS, I could immediately tell the fortune of my friends just by the sounds that came out of their mouths after they checked their problems. When my turn came amidst the heart-pounding excitement, fortunately, a not-so-difficult problem was in my hand.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          Since I was a foreigner, I had to prepare fewer problems, so I was able to go into the exam with almost all the problems fully memorized. My Russian friends grumbled, but in the end, it seemed that they all passed without any problems. In the first place, they were geniuses with the brains to go to Seoul National University or KAIST in our country, so I didn't need to worry about their well-being.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🥊 The Final Boss, the Thesis Defense</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Now, only the real final boss, the thesis defense, remained. If the classes and the GOS so far had been a process of understanding the knowledge passed down by others and spitting out the correct answers, the thesis defense was clearly different. In research, you are not recognized for your achievements by repeating what someone else has done like a parrot. You have to acquire previous research through papers, discover a new theory or application, and present it proudly in front of other scholars. If there is a serious logical or technical flaw in the research process or results, you will not be able to avoid the sharp attacks of the examiners. That is why it is literally called 'defending' the research you have done. If you successfully defend against the barrage of sharp questions, it means that at least the examiners have recognized that the student is qualified to receive the degree.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">📖 Analog-style Thesis Binding</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          At the time I was studying, when you finished your thesis, you had to print it out yourself, bind it, and distribute it to the examiners one by one. It was a terribly analog method that makes me laugh when I think about it now, but the biggest problem was that I only found out the day before my thesis defense that I had to punch and assemble this ring binder with my own hands. Due to my shallow knowledge, the number of pages in my thesis was not that large, so I was able to finish printing it in a hurry, but I panicked because I didn't know how to operate the ring binder machine. Fortunately, thanks to my friends who rolled up their sleeves and helped me as if it were their own work, I was able to finish binding it safely just before the defense, although my well-dressed suit shirt was drenched in sweat.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">👨‍🏫 My Advisor's Absolute Shield</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Finally, it was time to present my thesis. In addition to the examiners, other professors were also in the room with a hawk's eye. Before the presentation, my advisor briefed me on what research I had done over the past two years and how diligent a student I had been. And finally, he declared, "Judging by the level of this thesis, he will be able to give a great defense, and he certainly deserves the highest score of 5 (Отлично)." I later learned that when an advisor gives a blatant 'shield' like this before a presentation, it has an absolute effect on the examination results. It seems that no matter what country you go to, the advisor's influence is the absolute power and the most reliable lifeline for a graduate student.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          Anyway, after my advisor's introduction, I started my presentation. I thought I had prepared enough, but since I had almost memorized the presentation content, my whole body was stiff, and I would forget what to say and buffer in the middle. After the presentation, as expected, a barrage of sharp questions from the examiners poured in. There were some embarrassing questions, but embarrassingly, whenever I was at a loss for words, my advisor would appear like a charm and defend me, which was a great grace.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏅 A Precious Medal That Cannot Be Exchanged for Anything</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The feeling I had after completing my graduation thesis and safely finishing all the defense battles was a sense of accomplishment as high as a mountain, and at the same time, the end of a terrible journey that seemed like it would never end. Although I received the dedicated help of many people, the experience of growth of finally completing the Russian thesis that seemed impossible at first, and even going through the thesis defense in front of sharp professors in an unfamiliar language, is a precious medal in my life that cannot be exchanged for anything.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🙏 Learning Deep Humility</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The three-year degree program that I struggled through in Russia made me much more mature, not quantitatively but qualitatively. More than the specialized knowledge of nuclear physics or a decent master's degree certificate, the broad perspective to understand others who are completely different from me, and the deep humility that 'I can never achieve anything on my own'. That is probably the most precious spoils of war that I am taking away from the land that was cold on the outside but warm on the inside.
        </p>
      `,
      },
    },
    {
      id: 'post-307',
      title: { ko: '마무리, 졸업식', en: 'The End, Graduation Ceremony' },
      subtitle: {
        ko: '3년간의 여정을 마치며, 뜨거운 감사와 아쉬움 속 졸업',
        en: 'Ending a 3-Year Journey, Graduation with Heartfelt Gratitude and a Touch of Sadness',
      },
      imageUrl: 'https://mf.b37mrtl.ru/rbthmedia/images/web/kr-rbth/images/2016-07/top/13590507_548372432017683_470267383888957111_n.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      isActive: true,
      comments: [],
      content: {
        ko: `
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎉 길고 길었던 여정의 끝, 새로운 시작</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
5월 중순, 드디어 석사 학위를 쟁취하기 위한 모든 통과의례가 막을 내렸다. 공식적인 졸업식은 6월 말이었고 한국으로 돌아가는 비행기는 7월 중순이었으니, 내게는 무려 두 달이라는 금쪽같은 잉여 시간이 주어졌다. 물론 틈틈이 학교에 불려 가 러시아 특유의 그 끝도 없는 관료주의적 행정 서류들을 떼고 도장을 받아야 했지만, 고스(ГОС)와 논문 방어를 끝낸 마당에 그깟 서류 작업쯤이야 콧노래를 부르며 해치울 수 있었다. 이제 한국으로 돌아가면 언제 다시 밟아볼지 모르는 이 애증의 도시 모스크바. 나는 그간의 치열했던 유학 생활을 천천히 갈무리하며, 마지막으로 감사한 이들에게 인사를 전하고 정든이들에게 작별을 고해야 할 시간이 왔다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🤝 핏줄보다 진한 전우애, K 선배와의 마지막 건배</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
이 마무리의 첫 번째 순서는 단연 예비 학부 때부터 석사 과정까지 3년간 함께 공부해 온 K 선배와 진하게 축하를 나누는 것이었다. K 선배는 러시아어 까막눈 시절부터 피 말리는 대학원 생활까지 동고동락한 핏줄보다 진한 전우였다. 학위 논문 주제 때문에 막판 연구 방향만 조금 달랐을 뿐, 3년 내내 거의 모든 과목을 나란히 앉아 들으며 러시아 교수님들의 융단 폭격을 함께 막아냈으니 그간의 전우애가 얼마나 끈끈했겠는가.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
나는 귀국하면 서울에서 근무하기로 되어 있었고, K 선배는 진해에 가서 근무를 한다고 했다. 예전 같았으면 “서울에서 진해라니, 명절 아니면 얼굴 보기 힘들겠습니다!”라며 아쉬워했겠지만, 러시아의 광활한 대륙에서 3년을 지내다 보니 우리의 공간 지각 능력은 이미 완벽하게 ‘러시아 패치’가 되어 있었다. “에이, 서울에서 차로 서너 시간 거리면 그냥 옆 동네 마실 수준이지 말입니다!” 러시아가 만들어준 이 어질어질한 거리 감각 덕분에 우리는 이별의 아쉬움 대신 쿨한 웃음을 나눌 수 있었다. 서울과 진해의 물리적 거리를 단숨에 동네 편의점 가듯 압축해 버린 우리는, 정든 전우의 건승을 기원하며 시원하게 잔을 부딪쳤다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">👋 아쉬운 작별, P군과 S양에게 보내는 인사</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
우리의 ‘굿바이 투어’에서 절대 빠질 수 없는 인물들이 있었다. 바로 멀고 낯선 땅, 예비학부 시절부터 동고동락하며 친하게 지내온 P군과 S양(1년 차, 2화에 잠시 등장)과의 작별 인사였다. 넘치는 에너지를 주체하지 못하던 P군은 어느새 모스크바 국립대 학생회의 차기 회장 후보로 거론될 만큼 거물급 ‘인싸’로 성장해 있었다. 놀라운 건 사람 만나는 걸 그렇게 좋아하면서도 학구열까지 대단했다는 것이다. 일본어에 능통한 S양 역시 특유의 싹싹함으로 무장한 우리들의 ‘인간 정보통’이었다. 모스크바 생활의 알짜배기 꿀팁은 모두 그녀를 통한다고 해도 과언이 아니었다. 두 친구 모두 이제 막 학부로 입학했기에, 학위를 털고 떠나는 우리와 달리 앞으로도 이 춥고 험난한 모스크바에서 계속 학업을 이어갈 예정이다. 비록 예비학부 1년간 기숙사에서 만난 사이임에도 타국에서 가족처럼 지냈던 동생들을 동토에 남기고 먼저 떠나려니 발길이 쉽게 떨어지지 않았다. 하지만 둘 다 취직은 한국에서 할 계획이라고 했으니, “우리가 먼저 한국에 가서 기다리마!”라며 아쉬운 작별을 고했다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🙏 나의 은인들, 지도교수님과 러시아어 선생님</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
발길을 돌려 대학교로 향했다. 빈 깡통이었던 나를 무사히 ‘석사’로 빚어내 주신 두 명의 은인, 지도교수님과 러시아어 선생님에게 감사의 마음을 담은 작은 선물을 전해드리기 위해서였다. 먼저 나의 엉망진창이었던 논문 초안에 인공호흡기를 달아주시고, 살벌했던 학위 방어전에서 온몸으로 방패막이가 되어주셨던 지도교수님을 찾아가서 감사의 인사를 전했다. 러시아어 선생님은 이제 내게 친할머니와 다름없다. 학기가 지남에 따라 점점 러시아어 수업이 줄어 섭섭해 하셨던 내가 떠난다는 말에 선생님은 기어이 울음을 떠뜨리셨다. 이런 정을 여기서 느끼다니! 역시 사람사는 곳은 어디나 매한가지인가 싶었다.  
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">👩‍👧‍👦 3년 만에 오신 어머니, 그리고 '모스크바 현지인'이 된 나</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
그리고 졸업식에 앞서 어머니가 모스크바를 방문하셨다. 무려 3년 만에 마주한 어머니의 얼굴에는 이전보다 세월의 흔적이 짙게 배어 있었다. 비행기 푯값이 부담된다는 핑계로 한 번도 한국을 찾지 않은 불효자 탓에 주름이 더 깊어지신 건 아닌가 싶어 가슴 한구석이 쿡쿡 쑤셔왔다. 하지만 밀려오는 죄송스러운 마음은 잠시 가슴 깊은 곳에 묻어두고, 벅찬 반가움만으로 어머니를 맞았다. 모스크바에 갓 도착해 어설프게 택시 사기나 당하던 그 어리바리한 시절과는 달랐다. 이제는 스마트폰 앱으로 간단하게 공항에 택시를 불러 편안하게 모실 수 있는 ‘모스크바 현지인’ 패치가 완벽하게 되어 있었다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏠 작고 소박했던 우리의 보금자리</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
어머니는 우리의 단출한 신혼집을 둘러보시곤 내심 실망하신 기색이 역력했다. 그도 그럴 것이, 달랑 하나뿐인 방 한가운데 큼지막한 침대가 떡하니 자리 잡고 있었고, 남는 자투리 공간을 어찌어찌 쥐어짜 내어 각자의 책상을 하나씩 구겨 넣고 공부까지 했으니 어머니 눈에는 얼마나 짠해 보였을까. 그래도 개인적으로 나는 이 작고 소박한 집에서의 러시아 유학 시절이 꽤나 만족스러웠다. 방이 좁은 덕분에 아내와 물리적으로나 심리적으로나 많은 시간을 보낼 수 있었고, 겉보기엔 오래된 건물이었어도 내부 인테리어를 새로 한 지 얼마 안 되어 곰팡이나 쥐, 바퀴벌레 등은 구경조차 해본 적이 없기 때문이다. 아마 어머니가 러시아의 진정한 ‘야생’ 같은 다른 아파트들을 먼저 둘러보고 오셨다면, 우리의 이 작고 소중한 보금자리에 결코 실망하지 않으셨을지도 모른다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎓 뭉클했던 졸업식, 하늘의 아버지께</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
며칠 뒤, 드디어 고대하던 졸업식 당일이 밝았다. 빳빳하게 다려진 학위복을 입고 낯선 러시아어 문구가 빼곡히 적힌 졸업장을 받아 드는 순간, 그간의 마음고생이 눈 녹듯 씻겨 내려가는 기분이었다. 어머니는 연신 붉어진 눈시울을 훔치시며 내 머리 위에 자랑스럽게 학사모를 씌워주셨고, 우리는 캠퍼스 곳곳을 누비며 카메라 셔터가 닳도록 기념사진을 남겼다. 카메라 렌즈 너머로 활짝 웃으시는 어머니의 얼굴을 마주하니, 문득 하늘에 계신 아버지 생각이 가슴을 먹먹하게 때렸다. ‘아버지가 살아계셔서 이 자리에 함께하셨더라면, 더 좋았을텐데….’ 비록 육신은 곁에 안 계시지만, 먼 이국땅에서 치열하게 버텨낸 3년의 땀방울이 고스란히 녹아 있는 이 값진 졸업장을 하늘에 계신 아버지께 바친다. 
        </p>
      `,
        en: `
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎉 The End of a Long, Long Journey, a New Beginning</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          In mid-May, all the rites of passage to earn a master's degree finally came to an end. The official graduation ceremony was at the end of June, and my flight back to Korea was in mid-July, so I was given a precious surplus of two months. Of course, I had to be called to school from time to time to get endless bureaucratic administrative documents and stamps, which are characteristic of Russia, but after finishing the GOS and thesis defense, I could handle such paperwork while humming. Now, Moscow, this city of love and hate that I don't know when I'll be able to set foot on again once I return to Korea. As I slowly wrapped up my intense study abroad life, the time came to say goodbye to those I was grateful for and to bid farewell to those I had grown fond of.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🤝 A Comradeship Thicker Than Blood, a Final Toast with Senior K</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The first order of this conclusion was, of course, to celebrate heartily with Senior K, with whom I had studied together for three years from the preparatory faculty to the master's program. Senior K was a comrade in arms, thicker than blood, with whom I had shared the joys and sorrows of my life, from the days when I was illiterate in Russian to my grueling graduate school life. Although our research directions were slightly different at the end due to our thesis topics, we had taken almost all of our classes side by side for three years and had withstood the carpet bombing of the Russian professors together, so how strong could our comradeship have been?
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          I was scheduled to work in Seoul after returning to Korea, and Senior K was going to work in Jinhae. In the past, I would have been disappointed, saying, "From Seoul to Jinhae, it will be hard to see you except on holidays!" But after spending three years on the vast continent of Russia, our spatial perception was already completely 'patched' to Russia. "Hey, a three or four-hour drive from Seoul is just like going to the next neighborhood!" Thanks to this dizzying sense of distance that Russia had given us, we were able to share a cool laugh instead of the sadness of parting. We, who had instantly compressed the physical distance between Seoul and Jinhae as if we were going to a neighborhood convenience store, clinked our glasses to wish our dear comrade well.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">👋 A Sad Farewell, a Greeting to P and S</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          There were people who could never be left out of our 'goodbye tour'. It was a farewell to P and S (who briefly appeared in Year 1, Episode 2), with whom we had been close friends since our preparatory faculty days in a distant and unfamiliar land. P, who could not control his overflowing energy, had grown into a big shot 'insider', to the point where he was being mentioned as a candidate for the next president of the Moscow State University student council. What was surprising was that he had a great passion for studying, even though he loved meeting people so much. S, who was fluent in Japanese, was our 'human information source' armed with her unique friendliness. It was no exaggeration to say that all the best tips for living in Moscow came through her. Both of them had just entered their undergraduate programs, so unlike us who were leaving with our degrees, they were scheduled to continue their studies in this cold and rugged Moscow. Although we had only met in the dormitory for one year of the preparatory faculty, it was not easy to leave our younger siblings, who had been like family in a foreign country, behind in the tundra. But since they both planned to get jobs in Korea, we said our sad farewells, saying, "We'll go to Korea first and wait for you!"
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🙏 My Benefactors, My Advisor and My Russian Teacher</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          I turned my feet and headed to the university. It was to give a small gift with my heartfelt gratitude to my two benefactors who had turned me, an empty can, into a 'master's graduate': my advisor and my Russian teacher. First, I went to my advisor, who had given my messy thesis draft a lifeline and had been a shield for me during the brutal thesis defense, and expressed my gratitude. My Russian teacher was now no different from my own grandmother. As the semester went on, my Russian classes gradually decreased, and when I told her that I was leaving, she burst into tears. To feel such affection here! I thought that people are the same everywhere.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">👩‍👧‍👦 My Mother, After 3 Years, and Me, a 'Moscow Local'</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          And before the graduation ceremony, my mother visited Moscow. The traces of time were deeply ingrained on my mother's face, which I saw for the first time in three years. I felt a pang in my heart, wondering if the wrinkles had deepened because of her unfilial son who had never once visited Korea, making the excuse that the plane ticket was too expensive. But I put aside the overwhelming sense of guilt for a moment and greeted my mother with only overflowing joy. It was different from the clumsy days when I had just arrived in Moscow and was scammed by a taxi. Now, I was completely patched as a 'Moscow local' who could easily call a taxi to the airport with a smartphone app and comfortably escort her.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏠 Our Small and Humble Home</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          My mother looked around our simple newlywed home and was clearly disappointed. And for good reason. A large bed was placed in the middle of the only room, and we had somehow squeezed in our own desks in the remaining space to study, so how pitiful it must have looked to my mother. Still, I was quite satisfied with my life as a student in Russia in this small and simple house. Thanks to the small room, my wife and I were able to spend a lot of time together, both physically and psychologically, and although the building looked old on the outside, the interior had been newly renovated not long ago, so I had never even seen mold, mice, or cockroaches. Perhaps if my mother had first looked around other apartments in Russia that were like a real 'wilderness', she would not have been disappointed with our small and precious home.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎓 A Moving Graduation Ceremony, to My Father in Heaven</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          A few days later, the day of the long-awaited graduation ceremony finally dawned. The moment I received my diploma, which was filled with unfamiliar Russian words, while wearing my starched graduation gown, I felt as if all my past worries were being washed away like melting snow. My mother kept wiping her reddened eyes and proudly placed the graduation cap on my head, and we went around the campus and took commemorative photos until the camera shutter wore out. When I saw my mother's smiling face through the camera lens, the thought of my father in heaven suddenly filled my heart with emotion. 'If only my father were alive and here with me...' Although his body is not with me, I dedicate this valuable diploma, which is imbued with the sweat of three years of intense struggle in a foreign land, to my father in heaven.
        </p>
      `,
      },
    },
  ],
};
