import { Category } from '../types';

export const eurasiaTravelCategory: Category = {
  id: 'eurasia_travel',
  title: {
    ko: '유라시아 여행',
    en: 'Eurasia Travel',
  },
  description: {
    ko: '러시아 너머, 경계에서 만난 풍경들',
    en: 'Landscapes Found Beyond Russia, Along the Borders',
  },
  isSinglePost: false,
  isActive: true,
  posts: [
    {
      id: 'eurasia-travel-1',
      title: {
        ko: '러시아인 듯 아닌 듯 - 벨라루스, 칼리닌그라드',
        en: 'Not Quite Russia, Yet Somehow Russia: Belarus and Kaliningrad',
      },
      subtitle: {
        ko: '서늘한 국경의 실수와 유럽 한복판의 러시아',
        en: 'A Chilling Border Mistake and a Piece of Russia in the Heart of Europe',
      },
      imageUrl:
        'https://metro.co.uk/wp-content/uploads/2022/06/SEI_110669880.jpg?quality=90&strip=all&w=646?q=80&w=1200&auto=format&fit=crop',
      isActive: true,
      comments: [],
      content: {
        ko: `
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          모스크바에서 유학하며 제일 좋은 점 중 하나를 꼽으라면 단연코 긴 방학이 있다는 점이다. 서구권이나 한국의 대학원 과정은 보통 1년이 32주 과정으로 돌아가는 경우가 많지만, 러시아는 무려 38주 과정이라 방학이 짧게 느껴질 수도 있다. 하지만 연구실 지박령이 되어야 하는 여타 국가들과 달리 석사과정까지는 철저히 수업 위주로 굴러가는 시스템 덕분에, 일단 방학이 시작되면 온전히 학교 밖에서 시간을 보낼 수 있었다. 물론 방학 때 평소에 못했던 연구를 집중해서 하는 친구들도 있었지만, 나는 ‘진짜 공부란 꼭 학교 우물 안에서만 하는 것이 아니다’라는 확고한 주의였다. 뭐 놀기 위한 좋은 핑계로 이만한 게 없다. 
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          이 황금 같은 자유를 틈타 우리는 국경을 넘나드는 여행을 자주 기획했는데, 이번 이야기에서는 지리적으로도 역사적으로도 참 얄궂은 두 곳의 이야기를 풀어보려 한다. 하나는 러시아 바로 옆에 딱 붙어 있지만 엄연한 남의 나라인 벨라루스, 그리고 다른 하나는 러시아 본토와 뚝 떨어져 유럽 한복판에 덩그러니 남겨진 칼리닌그라드다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🤍 이름부터 러시아 같은 나라, 벨라루스</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          벨라루스(Belarus)는 이름부터가 하얀(Bel) 러시아(Rus)라는 뜻이다. 소련 붕괴 후 독립한 엄연한 주권 국가지만, 정치나 경제, 문화적으로 러시아와 떼려야 뗄 수 없는 끈끈한 관계를 유지하고 있다. 실제로 언어 역시 러시아어가 널리 쓰여서, 이미 영어보다 러시아어가 더 편했던 나에게는 의사소통에 전혀 무리가 없었다. 화폐도 벨라루스 루블을 쓴다. 이름표만 루블로 같을 뿐, 러시아 루블과는 가치가 완전히 다른 독자적인 돈이다. 당시 구권 화폐 기준으로 벨라루스 루블은 러시아 루블보다 가치가 아득하게 낮아 지폐에 동그라미가 쉴 새 없이 붙어 있었기에, 벨라루스에 방문한다면 계산할 때마다 각별히 주의를 해야 했다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚆 민스크행 기차와 치명적인 착각</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          모스크바에서 벨라루스의 수도 민스크로 가는 방법은 비행기, 버스 등 다양하지만, 우리는 언제나 그렇듯 가장 선호하는 교통수단인 기차에 몸을 실었다. 그리고 우리는 여기서 치명적인 실수를 저지르고 말았다. 두 나라가 국가 연합 성격을 띠고 있어 국경 통제가 헐겁다는 카더라 통신만 맹신한 채, 외국인인 우리에게 별도의 비자가 필요한지 제대로 알아보지도 않고 무작정 떠난 것이다. 심지어 기차를 타고 국경을 넘어갈 때 여권 검사조차 쿨하게 생략되었기에, 우리는 역시나 별 문제가 없는지 착각했다. 민스크에 도착한 우리는 어둑한 겨울밤의 정취를 만끽하며 웅장하고 깨끗한 시내를 구경했다. ‘하얀 러시아’라는 이름에 걸맞게 눈 내린 풍경과 잘 어울리는 도시였다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚨 돌아오는 길, 불법 입국자가 되다</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          진짜 문제는 민스크에서 여행을 마치고 다시 기차를 타고 러시아로 돌아가려 할 때 터졌다. 기차가 국경을 통과할 즈음, 제복을 입은 국경수비대가 열차에 올라타 깐깐하게 여권 검사를 시작했다. 우리의 여권을 이리저리 살피던 군인의 표정이 굳어지더니 고개를 저었다. 우리가 가진 러시아 비자로는 벨라루스에 입국하면 안 되는 것이었다. 올 때 검사가 없었던 건 그저 운이 좋았던(혹은 시스템이 허술했던) 것뿐이었다. 결국 우리는 졸지에 불법 입국자 신세가 되어 국경 한복판에서 강제로 기차에서 끌려 내려왔다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🪖 국경 초소에서 쓰는 반성문</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          우리는 우리처럼 허술하게 국경을 넘다 적발된 사람들을 임시로 구류해 놓는 초소로 인계되었다. 다음 기차가 올 때까지는 꽤 오랜 시간이 남았는데, 그 긴 시간 동안 우리는 테이블과 의자 4개가 있는 좁은 방에 앉아 러시아어로 경위서(사실상 반성문)를 작성하고 몇몇 서류에 서명을 했다. 유학 생활 중 별의별 일을 다 겪었지만, 국경 수비대에게 잡혀 반성문을 쓸 줄이야. 서류 작업을 마치고도 다음 기차가 올 때까지 시간이 많이 남아 핸드폰을 보며 시간을 때우고 있었는데, 시간이 지나자 긴장이 풀리며 슬슬 배가 출출해졌다. 조심스레 배가 고프다고 말했더니, 여군 한 명이 우리 부부를 호송하듯 데리고 나가 초소 내 군부대 PX 같은 작은 마트로 안내해 주었다. 우리 뒤에 바짝 붙은 군인의 따가운 감시를 받으며 주섬주섬 빵과 물을 사 먹는 그 기묘한 경험은, 무섭다기보단 헛웃음이 나올 만큼 어이가 없어서 지금도 생생하게 떠오른다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🗺️ 유럽 한복판의 기묘한 러시아, 칼리닌그라드</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          벨라루스가 러시아인 줄 알았는데 아니어서 피를 본 곳이라면, 러시아의 섬이라고 불리는 칼리닌그라드는 러시아가 아닌 줄 알았는데 완전 찐 러시아였던 곳이다. 지도를 펴놓고 보면 칼리닌그라드는 러시아 본토와 육로로 전혀 연결되어 있지 않고, 폴란드와 리투아니아 사이에 덩그러니 끼어 있는 기형적인 월경지다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏰 쾨니히스베르크에서 칼리닌그라드까지</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          왜 이런 황당한 영토가 생겼을까? 원래 이곳은 독일 기사단이 세운 도시 쾨니히스베르크로, 오랜 시간 튜튼 기사단과 프로이센의 중심지였다. 그러나 제2차 세계대전에서 독일이 패망한 후 소련이 전리품으로 이곳을 꿀꺽 삼켜버렸고, 이름도 칼리닌그라드로 바꾸었다. 문제는 1991년 소련이 붕괴하면서 주변의 발트 3국과 벨라루스 등이 줄줄이 독립해 버렸다는 것이다. 졸지에 칼리닌그라드만 주변이 모두 외국으로 둘러싸인 채 유럽 한복판에 외딴섬처럼 고립되어 버린 것이다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🧠 칸트의 도시, 그러나 철학은 어려웠다</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          독일의 옛 영토였던 만큼, 이곳에서 가장 유명한 인물은 쾨니히스베르크를 평생 한 번도 벗어나지 않았다는 위대한 철학자 이마누엘 칸트다. 우리도 관광객들의 필수 코스인 칸트의 묘비와 칸트 섬을 방문했다. 가이드북에서는 칸트가 매일 같은 시간에 산책하며 사색에 잠겼던 길이라며 분위기를 잡았지만, 안타깝게도 철학에 무지몽매했던 우리 부부에게 그 길은 별 감흥을 주지 못했다. 인류의 위대한 문화유산인 '순수이성비판'이라는 책을 쓴 칸트에게는 그저 한없이 미안할 따름이었다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">📱 화폐도 유심도 그대로, 뼛속까지 러시아</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          철학적 영감은 얻지 못했지만, 칼리닌그라드 여행이 편하고 즐거웠던 이유는 이곳이 100% 러시아 본토와 똑같이 굴러간다는 점이었다. 어찌 보면 당연한 일이었다. 비행기를 타고 바다를 건너가도 제주도가 한국이듯, 이곳도 엄연한 러시아 영토니까! 벨라루스 여행 때처럼 환전을 고민할 필요 없이 모스크바 지갑에 있던 러시아 루블을 그대로 꺼내 썼고, 핸드폰 역시 유심을 새로 살 필요 없이 러시아 통신사가 빵빵하게 터졌다. 붉은 벽돌의 독일풍 건축물들이 묘하게 섞여 있긴 했지만, 거리를 걷는 무뚝뚝한 사람들도, 투박한 식당의 음식 맛도, 심지어 살을 에는 매서운 추위마저도 우리에겐 너무나 친숙한 모스크바의 그것이었다. 아무리 동떨어져 있어도, 러시아는 뼛속까지 러시아였다.
        </p>

        <hr class="border-slate-200 my-8 w-1/3 mx-auto" />

        <p class="leading-relaxed mb-6 text-slate-700">
          유라시아라는 거대한 퍼즐 조각 위에서 만난 벨라루스와 칼리닌그라드는 참으로 얄궂은 대조를 이루었다. 언어와 화폐의 이름까지 같아서 이웃 동네 마실 가듯 만만하게 넘나들다, 결국 국경 수비대에게 덜미를 잡혀 반성문까지 쓰게 만든 서늘한 외국 벨라루스. 그리고 낯선 유럽 연합 국가들에 빙 둘러싸여 있어 비행기로 가야 하지만, 일말의 여지 없는 100퍼센트 러시아 칼리닌그라드. 얄팍한 지식만 믿고 덤비기엔 아직 나는 많이 부족했고, 그렇지만 한 발 한 발 착실하게 배워나가고 있었다.
        </p>
      `,
        en: `
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          If I had to name one of the best things about studying abroad in Moscow, it would undoubtedly be the long vacations. In graduate programs in the West or in Korea, the academic year often runs on a 32-week schedule, but Russia runs on a full 38-week schedule, so in theory the vacations might seem shorter. But unlike in other countries, where one is expected to become a permanent fixture in the lab, even the master's program in Russia was thoroughly class-centered. So once vacation began, I could spend my time entirely outside the university. Of course, some friends used their vacations to focus on research they had not been able to do during the semester, but I firmly believed that “real learning does not happen only inside the well of the school.” Well, there was hardly a better excuse to go out and enjoy myself. 
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          Taking advantage of this golden freedom, we often planned trips across national borders. In this story, I want to talk about two places that were both geographically and historically rather mischievous in their own way. One was Belarus, a country pressed right up against Russia yet unquestionably a foreign nation; the other was Kaliningrad, severed from mainland Russia and left dangling in the middle of Europe.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🤍 Belarus, a Country That Sounds Russian from the Name Alone</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Belarus literally means White (Bel) Russia (Rus). Although it is a fully sovereign state that became independent after the collapse of the Soviet Union, it has maintained ties with Russia that are inseparable in politics, economics, and culture. In practice, Russian was widely spoken there as well, so for me, who had already become more comfortable with Russian than with English, communication posed no difficulty at all. They also use the Belarusian ruble. The name may be the same as the Russian ruble, but it is an entirely separate currency with a completely different value. At the time, under the old banknote system, the Belarusian ruble was worth so much less than the Russian ruble that zeros seemed to pile endlessly onto the bills, so anyone visiting Belarus had to be especially careful every time they paid for something. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚆 The Train to Minsk and a Fatal Assumption</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          There are many ways to travel from Moscow to Minsk, the capital of Belarus, including plane and bus, but as always, we chose our favorite means of transportation: the train. And there, we made a fatal mistake. We blindly trusted the hearsay that border control between the two countries was loose because of their union-like political relationship, and we set off without properly checking whether we, as foreigners, needed a separate visa. To make matters worse, even when the train crossed the border, passport inspection was casually skipped, so we convinced ourselves that there really was no problem. When we arrived in Minsk, we enjoyed the atmosphere of the dark winter night and wandered through the grand and clean city center. It was a city that suited its snowy scenery well, fitting the name “White Russia.”
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚨 On the Way Back, We Became Illegal Entrants</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The real problem erupted when we finished our trip in Minsk and boarded the train back to Russia. As the train approached the border, uniformed border guards came aboard and began a strict passport inspection. One soldier examined our passports from every angle, then his expression hardened and he shook his head. The Russian visa we held did not permit us to enter Belarus. The reason we had faced no inspection on the way in was simply that we had been lucky, or that the system had been sloppy. In the end, we suddenly found ourselves treated as illegal entrants and were forcibly dragged off the train in the middle of the border zone.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🪖 Writing a Statement of Reflection at a Border Post</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          We were taken to a small outpost where people like us, who had crossed the border carelessly and been caught, were temporarily held. There was still quite a long wait until the next train arrived, and during that time we sat in a cramped room with one table and four chairs, writing an explanation in Russian, essentially a statement of reflection, and signing several documents. I had gone through all kinds of strange things during my years abroad, but I never imagined I would one day be caught by border guards and made to write a written apology. Even after the paperwork was done, we still had plenty of time to kill before the next train, so we sat there looking at our phones. As time passed and our tension wore off, we gradually grew hungry. When I cautiously said that we were hungry, a female soldier escorted my wife and me outside and led us to a tiny store inside the military compound, something like a PX. The bizarre experience of buying bread and water under the close and watchful supervision of a soldier sticking right behind us was not frightening so much as absurd enough to make us laugh helplessly. Even now, I remember it vividly.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🗺️ Kaliningrad, a Strange Piece of Russia in the Middle of Europe</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          If Belarus was a place that looked Russian but was not, and made us pay dearly for that misunderstanding, then Kaliningrad, often called Russia’s island, was the opposite: a place we might have expected not to feel Russian, yet turned out to be intensely, unmistakably Russian. Looking at a map, Kaliningrad is not connected to mainland Russia by land at all, but sits awkwardly wedged between Poland and Lithuania as a bizarre exclave. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏰 From Konigsberg to Kaliningrad</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          How did such an absurd territory come into being? Originally, this place was Konigsberg, a city founded by the Teutonic Knights, and for a long time it was a major center of both the Teutonic Order and Prussia. But after Germany was defeated in World War II, the Soviet Union swallowed the place as war booty and changed its name to Kaliningrad. The real problem came in 1991, when the Soviet Union collapsed and the surrounding Baltic states and Belarus all became independent one after another. Kaliningrad alone was suddenly left isolated in the middle of Europe, surrounded on all sides by foreign countries like a stranded island.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🧠 Kant’s City, Though Philosophy Was Beyond Us</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Since it had once been German territory, the most famous figure associated with the place was the great philosopher Immanuel Kant, who is said never to have left Konigsberg even once in his life. We too visited Kant’s tomb and Kant Island, both essential stops for tourists. The guidebooks tried to set the mood by describing it as the path where Kant took his daily walks and immersed himself in thought, but sadly, for my wife and me, who were utterly ignorant of philosophy, the walk stirred no particular emotion. We could only feel endlessly sorry toward Kant, the man who wrote Critique of Pure Reason, one of humanity’s great cultural inheritances. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">📱 Same Currency, Same SIM Card, Russian to the Bone</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Although we gained no philosophical inspiration, Kaliningrad was comfortable and enjoyable for one simple reason: it operated exactly like mainland Russia, one hundred percent. In one sense, that was only natural. Just as Jeju Island is still Korea even if one flies over the sea to reach it, this too was undeniably Russian territory. Unlike our trip to Belarus, there was no need to worry about exchanging money; we simply pulled Russian rubles out of the same wallet we used in Moscow. Our phones worked the same way too, with no need to buy a new SIM card, because our Russian carrier had perfectly good service there. There were curious traces of German-style red-brick architecture mixed in here and there, but the blunt people on the streets, the rough taste of the food in the restaurants, and even the bitter cold that cut into the flesh all felt intimately familiar to us, just like Moscow. No matter how far detached it was, Russia was Russia to the marrow.
        </p>

        <hr class="border-slate-200 my-8 w-1/3 mx-auto" />

        <p class="leading-relaxed mb-6 text-slate-700">
          Belarus and Kaliningrad, encountered on the vast puzzle board of Eurasia, formed an oddly fitting contrast. Belarus was the chillingly foreign country that felt casual enough to cross into as if going to a neighboring district, because even the language and the name of the currency seemed the same, only to end with us being caught by border guards and forced to write statements of reflection. Kaliningrad, by contrast, was surrounded by unfamiliar European Union countries and had to be reached by plane, yet it was one hundred percent Russia without the slightest ambiguity. I was still far too inexperienced to charge in armed only with shallow knowledge, but step by step, I was learning.
        </p>
      `,
      },
    },
  ],
};
