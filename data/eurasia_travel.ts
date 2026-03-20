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
    {
      id: 'eurasia-travel-2',
      title: {
        ko: '사이가 좋지 못한 지중해의 두 나라 - 튀르키예, 그리스',
        en: 'Two Mediterranean Neighbors on Bad Terms: Turkiye and Greece',
      },
      subtitle: {
        ko: '음식으로 겨루고 역사로 충돌한 두 지중해 이웃',
        en: 'Two Mediterranean Neighbors Who Clash in History and Compete in Cuisine',
      },
      imageUrl:
        'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200&auto=format&fit=crop',
      isActive: true,
      comments: [],
      content: {
        ko: `
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          이제 눈부신 태양과 에메랄드빛 바다가 일렁이는 지중해로 무대를 옮겨볼 차례다. 이번 이야기의 주인공은 지중해를 사이에 두고 마주 본 두 나라, 튀르키예(구 터키)와 그리스다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">😵 징글징글한 이웃, 튀르키예와 그리스</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          세계 어느 곳에나 이웃 나라끼리는 사이가 안 좋다는 암묵적인 룰(?)이 있지만, 튀르키예와 그리스의 관계는 그중에서도 가히 스펙터클한 수준을 자랑한다. 이들의 앙숙 역사는 수백 년 전으로 거슬러 올라간다. 과거 그리스는 오스만 제국(현 튀르키예)의 지배를 약 400년 가까이 받았다. 19세기 초 그리스가 피 터지는 독립 전쟁을 치르며 갈라선 이후에도, 두 나라는 에게해의 영토 문제와 영공 침범, 그리고 뒤에 소개할 분단 섬 문제 등으로 끊임없이 으르렁거려 왔다. 오죽하면 축구 국가대표팀 경기라도 열리는 날엔 총성 없는 전쟁이 벌어지고, 양국 국민들 사이에서는 상대방을 깎아내리는 농담이 일상처럼 쓰일 정도다. 우리의 한일 관계보다 더하면 더했지 결코 덜하지 않은, 그야말로 징글징글한 애증의 이웃이다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍽️ 앙숙이지만 닮은 식탁</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          하지만 참으로 아이러니하게도, 이렇게 서로를 앙숙이라 부르며 잡아먹지 못해 안달인 두 나라가 가장 치열하게 자존심 대결을 펼치는 분야가 있으니, 바로 음식이다. 서로 자기네 음식이 훨씬 더 맛있고 훌륭하다며 한 치의 양보도 없이 으르렁대지만, 지중해성 기후라는 같은 지붕 아래서 수백 년간 부대끼며 살아서인지 이들의 식문화는 소름 돋을 정도로 닮아 있다. 신선한 올리브오일과 토마토, 향긋한 허브와 요거트를 듬뿍 사용한 지중해식 요리는 두 나라 모두 예술의 경지에 올라 있다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          가장 대표적인 예가 바로 그리스의 자이로(Gyro)와 튀르키예의 되네르 케밥(Döner Kebab)이다. 커다란 고기 덩어리를 쇠꼬챙이에 수직으로 꽂아 빙글빙글 돌려가며 불에 구운 뒤, 겉면의 바삭하게 익은 고기를 얇게 썰어내어 빵에 채소와 함께 싸 먹는 그 환상적인 맛! 이름만 다를 뿐 조리 방식부터 생김새, 심지어 입안 가득 퍼지는 황홀한 육즙까지 형제처럼 똑 닮아 있다. 서로 "우리가 원조고 저들이 베낀 것!"이라며 핏대를 세우지만, 관광객인 우리 입장에서는 이 자존심 건 미식 경쟁이 그저 반가울 따름이다. 마치 앙숙인 두 일류 기업이 앞다투어 품질 경쟁을 벌일 때 소비자가 최고의 혜택을 누리듯, 여행자는 그저 이 두 경쟁사 사이에서 가장 맛있는 결과물만 쏙쏙 골라 먹으며 궁극의 이득을 챙기면 그만이다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">✈️ 나를 튀르키예로 이끈 대학 동기</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          내가 튀르키예라는 나라를 처음 방문한 것은 학부 시절이었다. 사실 그때까지만 해도 나는 튀르키예가 정확히 지도 상 어디 붙어 있는지도 모르는, 여행에 무지한 학생이었다. 그런 나를 이 매력적인 나라로 이끈 건 다름 아닌 대학 동기였다. 그 친구의 아버지는 당시 튀르키예 주재 한국 대사관에서 국방무관으로 근무하고 계셨다. 덕분에 튀르키예를 제집 드나들듯 여러 번 가봤던 그 친구는, 현지인 뺨치는 알짜배기 여행 조언과 꿀팁을 아낌없이 전수해 주었다. 동기의 강력한 추천과 완벽한 브리핑 덕분에 떠났던 첫 튀르키예 여행은 내 인생의 여행 지도를 완전히 바꿔놓았다. 그때의 기억이 어찌나 강렬하고 좋았던지, 훗날 아내의 손을 잡고 다시 한번 찾아갔고, 어머니가 러시아로 나를 보러 오셨을 때도 주저 없이 비행기 표를 끊어 모시고 갔을 정도다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🕌 미식과 유적의 성지, 튀르키예</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          튀르키예는 프랑스, 중국과 함께 세계 3대 미식 국가로 불릴 만큼 먹거리가 풍성하지만, 볼거리와 즐길 거리도 그에 못지않다. 동양과 서양, 이슬람과 기독교의 문화가 한데 뒤섞여 신비로운 오라를 뿜어내는 이스탄불, 수만 년의 시간이 빚어낸 기암괴석들 사이로 수백 개의 열기구가 떠오르는 카파도키아, 새하얀 석회 붕 위로 에메랄드빛 온천수가 흘러내리는 파묵칼레, 그리고 지중해의 눈부신 햇살 아래 패러글라이딩과 휴양을 즐길 수 있는 레저의 천국 페티예까지. 게다가 역사가 어찌나 깊은지, 길을 걷다 발에 무언가 툭 걸려 내려다보면 그게 몇천 년 전 로마 시대의 유물 기둥인 나라가 바로 튀르키예다. 발길 닿는 모든 곳이 야외 박물관이자 미식의 성지였다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏛️ 신화와 바다의 나라, 그리스</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          튀르키예가 웅장하고 다채로운 매력으로 압도한다면, 바다 건너 그리스 역시 이에 결코 뒤지지 않는 찬란함을 뽐낸다. 그리스 음식의 특징을 꼽으라면 단연 신선함과 직관적인 맛이다. 질 좋은 올리브유가 듬뿍 들어간 그릭 샐러드, 바비큐를 기반으로 숯불 향을 가득 머금은 고기 꼬치구이 수블라키, 그리고 입맛을 돋우는 다채로운 향신료의 조화는 완벽 그 자체였다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          그리스는 우리가 미디어를 통해 접했던 환상적인 풍경들이 실존하는 곳이기도 하다. 당시 러시아인들 사이에서도 선풍적인 인기를 끌었던 드라마 ‘태양의 후예’를 기억하는가? 극 중 유시진 대위(송중기 분)와 강모연(송혜교 분)이 사랑을 속삭이던, 깎아지른 절벽 아래 녹슬고 버려진 난파선이 있던 그 비현실적인 해변은 바로 그리스의 자킨토스(Zakynthos) 섬에 있다. 또한, "라라라 라라라라~" 하는 청량한 배경음악과 함께 배우 손예진이 뛰놀던 포카리스웨트 광고 속 하얀 골목과 파란 지붕의 성당은 수많은 허니무너들의 로망인 산토리니다. 여기에 유럽 문화의 탯줄이자 고대 신화가 살아 숨 쉬는 아테네, 미노아 문명의 신비로운 흔적을 간직한 크레타 섬까지. 그리스는 발을 들이는 순간 여행자를 신화 속 주인공으로 만들어버리는 마법 같은 힘을 지녔다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚧 둘의 갈등이 새겨진 섬, 키프로스</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          이 두 나라의 징글징글한 관계를 이야기할 때 절대 빼놓을 수 없는 아주 흥미롭고도 슬픈 섬이 하나 있다. 지중해 동쪽에 떠 있는 키프로스(혹은 사이프러스)라는 섬이다. 제주도의 약 5배 크기인 이 아름다운 섬은 현재 튀르키예와 그리스계 주민들의 갈등으로 인해 나라가 남북으로 완전히 쪼개져 있다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          과거 영국의 식민 지배에서 독립한 후, 섬 안에서 다수를 차지하던 그리스계 주민들과 소수의 튀르키예계 주민들 사이의 피비린내 나는 유혈 충돌이 벌어졌다. 결국 1974년, 튀르키예 군대가 자국민 보호를 명분으로 섬의 북쪽을 점령해 버렸고, 그 결과 남쪽은 그리스계의 키프로스 공화국으로, 북쪽은 튀르키예계의 북키프로스 튀르키예 공화국으로 나뉘어 버렸다. 섬의 수도인 니코시아의 한가운데로는 유엔 통제하에 철조망과 장벽이 처진 그린 라인이 지나간다. 전 세계에서 유일하게 남은 분단 수도인 셈이다. 이 쪼개진 섬은 두 나라의 지독한 역사적 앙금과 영토 분쟁의 현주소를 가장 적나라하게 보여주는 살아있는 박물관이다. 다행히도 관광객은 여권만 가지고 있다면 쉽게 이 국경을 넘나 들 수 있다. 
        </p>

        <hr class="border-slate-200 my-8 w-1/3 mx-auto" />

        <p class="leading-relaxed mb-6 text-slate-700">
          춥고 칙칙했던 러시아 대륙의 길고 긴 겨울을 벗어나, 튀르키예와 그리스가 뿜어내는 지중해의 찬란한 햇살과 다채로운 미식을 온몸으로 즐길 수 있었던 것은 그야말로 완벽한 해방감이었다. 단순히 입과 눈만 즐거웠던 것이 아니라, 두 나라가 치열하게 얽히며 빚어낸 흥미로운 역사적 스토리까지 깊이 있게 배울 수 있어 더욱 뜻깊은 여정이었다. 특히 교과서 속 활자로만 무미건조하게 읽던 영토 분쟁의 역사를, 키프로스처럼 실제로 철조망이 처진 채 갈라져 있는 분단 수도의 검문소를 두 발로 직접 넘나들며 마주하니 그 묵직한 현실이 훨씬 더 생생하게 피부로 와닿았다.
        </p>
      `,
        en: `
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          Now it is time to move the stage to the Mediterranean, where dazzling sunlight and emerald seas shimmer in every direction. The protagonists of this story are two countries facing each other across that sea: Turkiye, formerly Turkey, and Greece.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">😵 Turkiye and Greece, Two Exhaustingly Hostile Neighbors</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          There seems to be an unspoken rule almost everywhere in the world that neighboring countries do not get along, but the relationship between Turkiye and Greece is spectacular even by that standard. Their long history as bitter rivals goes back hundreds of years. In the past, Greece lived under the rule of the Ottoman Empire, present-day Turkiye, for nearly four hundred years. Even after Greece broke away through a bloody war of independence in the early nineteenth century, the two countries continued to growl at each other over territorial disputes in the Aegean Sea, violations of airspace, and the divided-island problem that I will mention later. Their hostility is so notorious that when the national football teams play, it feels like a war without gunfire, and jokes mocking the other side are used almost casually among ordinary people. If anything, their relationship is even more exhausting than that between Korea and Japan, a truly tangled mix of resentment and attachment.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍽️ Rival Nations, Nearly Identical Tables</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Yet ironically, the field in which these two countries, forever eager to call each other enemies, seem to compete most fiercely is food. Each insists that its own cuisine is far better and nobler than the other's, refusing to yield even an inch, but because they have lived side by side for centuries under the same Mediterranean climate, their food cultures resemble each other to an almost uncanny degree. Mediterranean cooking enriched with fresh olive oil, tomatoes, fragrant herbs, and generous amounts of yogurt reaches an artistic level in both countries.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          The clearest example is Greece's gyro and Turkiye's doner kebab. A huge mass of meat is skewered vertically, rotated slowly over heat, and then shaved into thin slices of crisp outer meat to be wrapped in bread with vegetables. That glorious taste. The names differ, but the cooking method, the appearance, and even the rich juices that burst across the mouth are so similar they feel like siblings. Both sides passionately insist, “We are the original, and they copied us!” But from the perspective of a traveler, this proud culinary rivalry is nothing but welcome news. Just as consumers benefit when two top-tier companies compete fiercely in quality, travelers can simply enjoy the most delicious results from both sides and walk away with the ultimate advantage.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">✈️ The College Friend Who Led Me to Turkiye</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The first time I visited Turkiye was during my undergraduate years. To be honest, at that point I was a hopelessly travel-ignorant student who did not even know exactly where Turkiye sat on the map. The one who led me to this fascinating country was a university friend. His father was then serving as the defense attache at the Korean embassy in Turkiye. Because of that, my friend had visited Turkiye so many times that he moved through it almost as if it were his own home, and he generously passed on practical travel advice and local tips that rivaled those of any resident. Thanks to his strong recommendation and flawless briefing, that first trip to Turkiye completely redrew the map of travel in my life. The memory was so powerful and so good that later I returned with my wife, and when my mother came to Russia to visit me, I did not hesitate to buy her a plane ticket and take her there as well.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🕌 Turkiye, a Sanctuary of Food and Ruins</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Turkiye is often mentioned alongside France and China as one of the world's three great culinary nations, and its food is indeed abundant, but its sights and experiences are no less remarkable. There is Istanbul, radiating a mysterious aura from the intermingling of East and West, Islam and Christianity; Cappadocia, where hundreds of hot-air balloons rise among rock formations shaped over tens of thousands of years; Pamukkale, where emerald-colored thermal waters flow over brilliant white travertine terraces; and Fethiye, a paradise of leisure where one can enjoy paragliding and rest under the dazzling Mediterranean sun. Its history is so deep that you can be walking along, feel something strike your foot, glance down, and discover that it is a Roman column from thousands of years ago. Everywhere the feet could reach felt at once like an open-air museum and a sacred site of gastronomy.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏛️ Greece, Land of Myth and Sea</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          If Turkiye overwhelms through grandeur and variety, Greece across the sea shines with a brilliance that is every bit its equal. The defining feature of Greek food, if I had to choose one, would be its freshness and directness of flavor. Greek salad drenched in good olive oil, souvlaki skewers filled with the aroma of charcoal from the grill, and the perfect harmony of vivid spices that awaken the appetite all felt nearly flawless.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          Greece is also a place where the dreamlike scenery we know from the media truly exists. Do you remember the drama Descendants of the Sun, which was wildly popular among Russians at the time as well? The unreal beach with the rusted shipwreck lying beneath sheer cliffs, where Captain Yoo Si-jin and Kang Mo-yeon whispered their love, is on the Greek island of Zakynthos. And those white alleys and blue-domed churches from the Pocari Sweat commercial, where Son Ye-jin ran beneath the bright refrain of “la la la la la la,” are in Santorini, long cherished as a honeymoon fantasy. Add to that Athens, the cradle of European civilization where ancient myths still seem alive, and Crete, which preserves the mysterious traces of the Minoan civilization. The moment one sets foot in Greece, it has the magical power to turn a traveler into the protagonist of a myth.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚧 Cyprus, the Island Marked by Their Conflict</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          There is one island that is both fascinating and deeply sad, and it can never be left out when speaking of the exhausting relationship between these two nations. That island is Cyprus, floating in the eastern Mediterranean. Roughly five times the size of Jeju Island, this beautiful place is now completely split north and south because of conflict between Turkish and Greek Cypriot communities.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          After gaining independence from British colonial rule, Cyprus descended into bloody clashes between the Greek Cypriot majority and the Turkish Cypriot minority. In the end, in 1974, the Turkish military occupied the northern part of the island under the pretext of protecting its own ethnic community. As a result, the south became the Greek Cypriot Republic of Cyprus, and the north became the Turkish Republic of Northern Cyprus. Through the middle of Nicosia, the island's capital, runs the Green Line, fenced with barbed wire and barriers under United Nations control. It is the only divided capital left in the world. This split island is a living museum that lays bare the bitter historical sediment and territorial conflict between the two countries more vividly than anywhere else. Fortunately, tourists can cross that border quite easily as long as they carry a passport.
        </p>

        <hr class="border-slate-200 my-8 w-1/3 mx-auto" />

        <p class="leading-relaxed mb-6 text-slate-700">
          Escaping the long and bleak winters of the cold Russian continent and immersing myself in the radiant Mediterranean sunlight and diverse cuisine of Turkiye and Greece was nothing short of a perfect sense of liberation. It was not simply a matter of pleasing the eyes and the palate. The journey felt even more meaningful because it also allowed me to learn, in a vivid and layered way, the historical stories created by the fierce entanglement of these two countries. In particular, the history of territorial disputes, which I had previously encountered only as dry textbook print, felt far more tangible and weighty when I crossed in person through checkpoints in a divided capital like Cyprus, where barbed wire still cuts through the city.
        </p>
      `,
      },
    },
  ],
};
