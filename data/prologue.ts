import { Category } from '../types';

export const prologueCategory: Category = {
  id: 'prologue',
  title: {
    ko: '프롤로그',
    en: 'Prologue',
  },
  description: {
    ko: '여정의 시작',
    en: 'The Beginning of the Journey',
  },
  isSinglePost: true,
  isActive: true,
  posts: [
    {
      id: 'prologue-1',
      title: {
        ko: '프롤로그',
        en: 'Prologue',
      },
      subtitle: {
        ko: '할 수 있다.',
        en: 'I Can Do It.',
      },
      imageUrl:
        'https://images.unsplash.com/photo-1520106212299-d99c443e4568?q=80&w=1200&auto=format&fit=crop',
      isActive: true,
      content: {
        ko: `
          <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
            군에는 현역 군인이 직무 전문성을 높이기 위해 군 외부 기관(국내외 대학원, 연구소, 군/민간 기관 등)에서 교육을 받는 ‘위탁교육’이라는 제도가 있다. 이 중 국내외 대학원에 진학하여 석박사를 취득할 수 있는 전문학위 위탁교육은 1년에 한 번 공고를 내고 선발한다. 국내 전문학위 과정에 선발되면 내로라하는 국내 여러 유수 대학의 대학원에 진학할 기회가 주어지고, 국외 전문학위 과정에 선발되면 공고에 따라 미국, 캐나다, 영국 같은 영어권 국가는 물론 러시아, 인도, 중국, 일본 등 다양한 국가로 진학할 기회가 주어진다.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">위탁교육이라는 기회</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            2013년 여름, 당시 소대장이었던 나는 여느 때와 다름없이 부대에서 업무를 보고 있었다. 그러던 중, 군내 인트라넷에서 국내외 위탁교육 공고를 확인을 했다. 나의 병과는 주력 전투 병과가 아닌 화생방이었고, 병과의 특수성 때문에 내가 지원할 수 있는 자리는 손에 꼽을 정도로 한정적이었다. 많은 분야에서 전문가를 키우기 위해 다양한 사람을 선발하겠다는 공고였지만 내게 가능성이 보이는 건 오직 두 자리뿐이었다. 장차 군 교수가 될 수 있는 국내 위탁 자리와 군 연구원이 될 수 있는 러시아의 핵공학 자리가 눈에 띄었다. 하지만 대학(생도)시절 공부를 열심히 하지 않았던 나에게 교수자리는 그림의 떡이었다. 대학성적이 상위 30퍼센트 안에 들어야 한다는 잔혹한 커트라인이 있었기 때문이다.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">러시아로 향하는 시선</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            후회해 봐야 이미 늦었다. 과거는 바꿀 수 없다. 설령 내가 교수 요원에 지원한다 한들 육군사관학교 교수님들에게 추천서나 제대로 받을 수 있을지 의문이었다. 생도 시절, 사관학교에 입학한 지 얼마 되지 않았을 때, 한 선배는 내게 생도생활을 그나마 편하게 하고 싶다면 어디에서든 딱 3분의 2 위치에만 있으면 된다고 했는데 내 성적이 아주 딱 그랬다. 그랬다고 내 생도생활이 마냥 순탄했던 것은 아니지만 말이다. 아무리 머리를 굴려봐도 그런 나를 눈여겨본 교수님은 없을 게 뻔했다. 그러니 자연스레 내 시선은 러시아로 가는 핵공학 석사 과정으로 고정될 수밖에 없었다.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">"나는 할 수 있다"는 주문</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            내가 러시아어를 아냐고? 핵공학을 공부해 봤냐고? 천만의 말씀이다. 나는 학창시절 내내 배운 영어조차 제대로 할 줄 몰랐고, 학부 전공은 화학이었다. 사실 사관학교에서의 전공은 민간 대학의 전공 수준과 비교하면 전문성이 다소 부족한 감이 있었다. 무엇보다 생소한 러시아어로 낯선 핵공학을 공부한다니, 주위 사람들도 과연 해낼 수 있겠냐며 회의적인 반응을 보였다. 그때, 나는 아버지와의 어릴 적 일화를 떠올렸다. 아버지는 우리가 등교하려고 집을 나서기 전 “나는 할 수 있다”를 세 번 외치고 가라고 하셨다. 물론 몇 번하다가 흐지부지되긴 했지만, 그 기억은 여전히 선명하게 가슴에 새겨져 힘든 시기마다 나를 버티게 해 주었다. 이번에도 그 주문이 내게 무모한 용기를 주었다. 그래 까짓것, 해보자!
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">언어 심사와 미스터리</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            결심이 선 이후 바로 지원서를 작성했다. 서류에는 공인 러시아어 성적이 있으면 제출하라고 되어 있었지만, 내게 그런 게 있을 리 만무했다. 그게 없다면 영어 성적이라도 제출하라고 하니, 그나마 틈틈이 공부하며 시험을 치러둔 토익 성적을 제출했다. 서류 심사는 어떻게 통과했는지는 여전히 미스터리지만, 어쨌든 러시아어를 테스트 하는 언어심사를 보러 오라는 통보를 받았다. 러시아어를 하나도 모르기에 내가 하고 싶은 말을 반페이지 가량 한국어로 적어본 다음, 러시아어를 전공한 친구에게 번역을 부탁했다. 그리고 그 밑에 한국어 발음을 달아 달달 외웠다. 자기소개와 함께 “나는 무조건 할 수 있다”는 포부를 담은 내용이었다.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
            언어 심사장에 가자마자 내가 어떻게 서류심사를 통과했는지 그 미스터리가 단번에 풀렸다. 지원자가 나 하나 뿐이었던 것이다. 아, 역시 러시아어도 할 줄 알고 핵공학도 공부했던 괴짜는 역시 없었구나. 내심 안도한 것도 잠시, 2차 심사가 면접이 아닌 시험문제를 푸는 방식이라는 말에 잔뜩 긴장하고 말았다. 차라리 면접이었다면 인간 앵무새처럼 외운 내용이라도 쏟내며 패기라도 어필했을 텐데 말이다. 듣기와 읽기 평가였지만 러시아어 까막눈인 나에게는 까만 건 글씨고 하얀 건 종이일 뿐이었다. 그렇게 겨우 러시아 알파벳만 뗐던 나는 거의 찍다시피 문제를 풀었고 영혼이 가출한 채 시험장을 빠져나왔다.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">마지막 관문, 면접</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            그 후 얼마 뒤에 개별 및 단체면접이 이어졌다. 심사위원들은 다른 자리에 지원한 사람들에게는 각종 전문지식을 묻는 까다로운 질문을 던진 반면, 나에게는 정말 가서 석사 과정을 해낼 수 있겠냐는 물음만 거듭 던졌다. 선발된 사람이 학위를 취득하지 못하고 돌아오면 당사자에게도 큰 불이익이 따르지만 중장기 계획으로 필요한 분야의 전문 인력을 양성해야 하는 기관 입장에서도 나야말로 리스크 그 자체였을 것이다. 아는 건 별로 없고, 대학시절 성적도 변변찮은 내게 그들도 과연 나를 보내도 될지 깊이 고민이 많이 되었을 거라 조심히 추측해 본다. 하지만 나 스스로를 믿지 못하면 어느 누가 나를 믿어 주겠는가. 나는 근거는 없지만 누가 무엇을 묻든 눈빛 하나 흔들리지 않고 당당히 할 수 있다고 우겼다.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">모스크바를 향해</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            하늘이 높고 말이 살찌는 2013년 가을 어느 날, 나는 기다리던 합격 통지를 받았다. 이어서 러시아어 예비학부 등록을 마쳤고, 우여곡절 끝에 비자도 발급받고 2014년 여름 드디어 러시아의 심장, 모스크바로 향하는 비행기에 몸을 실었다.
          </p>
        `,
        en: `
          <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
            In the military, there is a system called 'consignment education' where active-duty soldiers receive education at external institutions—such as domestic and international graduate schools, research institutes, and military or private organizations—to enhance their professional expertise. Among these, the professional degree program allows soldiers to obtain master's or doctoral degrees. Candidates are selected through an annual announcement. Those selected for domestic programs can attend prestigious universities in Korea, while those selected for international programs may go to English-speaking countries like the U.S., Canada, or the U.K., or other nations like Russia, India, China, or Japan.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">The Opportunity of Consignment Education</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            In the summer of 2013, while serving as a platoon leader, I was attending to my duties at the unit as usual. It was then that I came across the announcement for domestic and international consignment education on the military intranet. My branch was CBR (Chemical, Biological, Radiological), not a primary combat branch. Due to the specialized nature of my field, the available positions were extremely limited. While the announcement aimed to cultivate experts across many fields, only two spots seemed within my reach: a domestic position that could lead to becoming a military professor, and a nuclear engineering position in Russia for future researchers. However, for someone who hadn't studied hard during my cadet days, the professorship was a "pie in the sky," as it required grades in the top 30 percent.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Setting Sights on Russia</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            Regrets were too late; the past cannot be changed. Even if I had applied for the professorship track, I doubted I could secure proper recommendation letters from my professors at the Military Academy. During my early days as a cadet, a senior once told me that if I wanted an easy life, I just needed to stay exactly at the two-thirds mark in everything—and that was exactly where my grades were. Not that my cadet life was particularly smooth because of it. I was certain no professor would have taken notice of me. Naturally, my gaze fixed on the master's program in nuclear engineering in Russia.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">The Mantra: "I Can Do It"</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            Did I know Russian? Had I studied nuclear engineering? Not at all. I couldn't even speak English properly despite learning it all through school, and my undergraduate major was chemistry. To be honest, the major at the Military Academy felt a bit less specialized compared to civilian universities. Most of all, studying unfamiliar nuclear engineering in the even more unfamiliar Russian language made those around me skeptical. That's when I recalled a childhood memory of my father. Before we left for school, he would make us shout "I can do it!" three times. Though we often trailed off after a few tries, that memory remained vivid, supporting me through every difficult time. Once again, that spell gave me reckless courage. "Alright, let's do this!"
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">The Language Test Mystery</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            Once I made up my mind, I filled out the application immediately. The documents asked for a certified Russian score if available, which I obviously didn't have. Since it suggested submitting an English score as an alternative, I turned in my TOEIC score, which I had managed to keep up with. How I passed the initial screening remains a mystery, but I received notice to attend a language screening to test my Russian. Knowing zero Russian, I wrote what I wanted to say in Korean—about half a page—and asked a friend majoring in Russian to translate it. I then wrote the Korean phonetic pronunciations underneath and memorized it word for word. It was a self-introduction filled with the ambition that "I can definitely do this."
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
            As soon as I arrived at the testing site, the mystery of how I passed the first round was solved: I was the only applicant. Ah, so there truly weren't any other eccentrics who knew Russian and wanted to study nuclear engineering. My relief was short-lived when I learned the second round was a written test, not an interview. If it had been an interview, I could have at least poured out my memorized speech like a parrot to show my spirit. It was a listening and reading evaluation, but to my illiterate eyes, the black was just ink and the white was just paper. Having barely learned the Russian alphabet, I practically guessed every answer and left the room feeling completely drained.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">The Final Hurdle: The Interview</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            Sometime later, individual and group interviews followed. While the interviewers threw difficult, specialized questions at candidates for other positions, they repeatedly asked me just one thing: "Can you really pull off a master's program there?" If a selected candidate fails to get a degree and returns, it's a huge disadvantage for the individual, but for the institution nurturing experts for a long-term plan, I was a massive risk. I suspect they deliberated deeply on whether they could really send someone with so little knowledge and mediocre grades. But if I didn't believe in myself, who would? Without any real basis, I stood my ground and insisted with a steady gaze that I could do it, no matter what they asked.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Heading to Moscow</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            On a fine autumn day in 2013, I received the long-awaited acceptance notice. I then registered for the Russian preparatory program, secured my visa after some twists and turns, and in the summer of 2014, I finally boarded a plane to Moscow, the heart of Russia.
          </p>
        `,
      },
      comments: [],
    },
  ],
};
