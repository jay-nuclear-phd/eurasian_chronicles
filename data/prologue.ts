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
        'https://images.unsplash.com/photo-1520106212299-d99c443e4568?q=80&w=1200&auto=format&fit=crop', // St. Basil's Cathedral
      isActive: true,
      content: {
        ko: `
          <p class="leading-relaxed mb-6 text-slate-700">
            군에서는 현역 군인이 직무 전문성을 높이기 위해 군 외부 기관(국내외 대학원, 연구소, 군/민간 기관 등)에서 교육을 받는 <span class="font-bold text-russia-blue">‘위탁교육’</span>이라는 제도가 있다. 이 중 국내외 대학원에 진학하여 석박사를 취득할 수 있는 전문학위 위탁교육은 1년에 한 번 공고를 내고 선발을 한다. 
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
            국내 전문학위로 선발이 된다면 내로라하는 국내 여러 유수 대학의 대학원을 진학할 기회가 주어지고, 국외 전문학위에 선발이 되면 공고에 따라 다르지만 국외로 갈 수 있는 나라는 영어권인 미국 🇺🇸, 캐나다 🇨🇦, 영국 🇬🇧 뿐만 아니라 러시아 🇷🇺, 인도 🇮🇳, 중국 🇨🇳, 일본 🇯🇵 등 여러 나라에 진학할 기회가 주어진다.
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            2013년 여름 ☀️, 당시 소대장이었던 당시 나는 여느때와 다름없이 부대에서 업무를 보고 있었다. 그러던 중, 국내외 위탁교육 공고를 군내 인트라넷에서 확인을 했다. 나의 병과는 <strong>화생방</strong>으로 주력인 전투병과가 아니었고 특성화되어 있는 화생방 병과의 성격상 아무래도 내가 나갈 수 있는 자리는 한정적이었다. 
          </p>
          
          <div class="bg-slate-50 border-l-4 border-russia-blue p-4 my-6 rounded-r-lg">
            <p class="leading-relaxed text-slate-700">
               많은 분야에서 전문가를 키우기 위해 다양한 사람을 선발하겠다는 공고였지만 내게 눈에 띄는 것은 두 자리 뿐이었다. 장차 군 교수가 될 수 있는 <strong>국내 위탁 자리</strong>와 군 연구원이 될 수 있는 <strong>러시아의 핵공학 자리</strong> ☢️가 눈에 띄었다.
            </p>
          </div>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            하지만 대학(생도)시절 공부를 열심히 하지 않았던 나에게 교수자리는 <span class="text-slate-500 line-through decoration-slate-400">그림의 떡</span>이었다. 🍡 대학성적이 <strong>상위 30퍼센트</strong> 안에 들어야 한다는 제한이 있었기 때문이다.
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            후회해도 늦었다. 과거는 바꿀 수 없다. 내가 교수가 된다고 한들 추천서나 제대로 받을 수 있을지 의문이었다. 대학시절 입학한지 얼마되지 않았을 때, 한 선배는 내게 생도생활을 그나마 편하게 하고 싶다면 어디에서든 딱 3분의 2에만 있으면 된다고 했는데 내 성적이 아주 딱 그랬다. 그랬다고 내 생도생활이 아주 스무스했던 것은 아니지만 말이다. 😅 그런 나를 눈여겨 본 교수님은 없을거라 생각한다. 그러니 자연스레 나는 <strong>러시아로 가는 핵공학 석사</strong>로 시선을 고정할 수 밖에 없었다.
          </p>
          
          <hr class="border-slate-200 my-8 w-1/2 mx-auto" />

          <p class="leading-relaxed mb-6 text-slate-700">
            <span class="font-bold text-russia-blue">"내가 러시아어를 아냐고? 핵공학을 공부해 봤냐고?"</span> 설마. 나는 학창시절 내내 배운 영어조차 제대로 할 줄 몰랐고 전공은 화학이었다. 게다가 육군사관학교에서의 전공은 다른 민간대학의 전공이라고 부르기에 부족한 감이 있다. 게다가 생소한 러시아어로 생소한 핵공학을 공부한다니, 주위 사람들도 <strong>"되겠냐"</strong>는 반응이었다. 🤷
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            그 때, 나는 아버지와의 어릴 적을 일을 떠올렸다. 아버지는 우리가 등교하려고 집을 나서기 전 <span class="font-bold text-russia-blue">“나는 할 수 있다”</span>를 세 번 외치고 가라고 하셨다. 물론 몇 번하다가 말기를 반복했지만 그래도 그 기억은 여전히 선명했고, 힘든 시기에 나를 버티게 해준 내 가슴에 새겨진 말이었다. 이번에도 그 주문이 내게 용기를 주었다. 
          </p>
          
          <blockquote class="text-center font-serif text-2xl font-bold text-russia-blue my-8 animate-pulse">
            "그래 할 수 있다. 👊"
          </blockquote>

          <p class="leading-relaxed mb-6 text-slate-700">
            결심이 선 이후 바로 지원서를 작성했다. 서류에는 공인 러시아어 성적이 있으면 제출하라고 했지만, 그런 게 있을리 만무했다. 그게 없다면 영어성적도 제출하라고 했으니, 그래도 틈틈이 공부하고 시험도 보고 있던 토익 성적을 제출했다. 서류심사는 어떻게 통과했는지 모르겠지만 <strong>러시아어를 테스트 하는 언어심사</strong>를 보러 오라는 통보를 받았다. 📨
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            러시아어를 하나도 모르기에 내가 하고 싶은 말을 반페이지 가량 적어본 다음, 러시아어를 전공한 친구에게 부탁하여 번역을 했고 해당하는 한국어 발음을 적어서 달달 외웠다. <strong>자기소개랑 할 수 있다는 간단한 포부</strong>를 적었다.
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            언어심사에 가자마자 왜 서류심사를 통과했는지 바로 알 수 있었다. <strong>지원자가 나 하나 뿐이었던 것이다.</strong> 😲 아, 역시나 러시아어도 할 줄 알고 핵공학도 공부했던 사람은 없었구나. 그러면서 살짝 안도한 것도 잠시, 면접이 아닌 시험문제를 푼다는 말에 잔뜩 긴장하고 말았다. 
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            면접이었다면 외운 내용이라도 이야기 하고 반드시 할 수 있다고 어필을 할 수 있었는데 말이다. 듣기와 읽기 평가였지만 러시아 까막눈인 나에게는 <strong>까만 건 글씨고 하얀 건 종이</strong>였다. 😵‍💫 그렇게 겨우 러시아 알파벳만 떼었던 나는 거의 찍다시피 문제를 풀었고 시험장을 나왔다.
          </p>
          
          <div class="bg-orange-50 p-6 rounded-xl border border-orange-100 my-8">
             <p class="leading-relaxed text-slate-800">
                그 후 얼마 뒤에 개별 및 단체면접이 있었고 심사위원들은 다른 자리에 지원한 지원자들에게는 각종 전문지식을 묻는 어려운 질문을 하는 반면 나에게는 <span class="font-bold text-orange-800">"할 수 있겠냐"</span>는 물음만 던졌다.
             </p>
          </div>
          
          <p class="leading-relaxed mb-6 text-slate-700">
             선발된 사람이 학위를 취득하지 못하고 돌아오는 것은 선발자에게도 많은 불이익이 따르지만 선발하는 기관 입장에서도 중장기 계획으로 필요한 분야의 전문인을 양성해야 하는데 나야 말로 리스크 그 자체였을거라 생각한다. 아는 건 별로 없고, 대학시절 성적도 변변찮은 내게 그들도 나를 보내도 될지 고민이 많이 되었을거라 조심히 추측해 본다. 
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-700">
             나 스스로를 믿지 못하면 어느 누가 나를 믿어 주겠는가. 나는 누가 물어보든 <strong>당당히 할 수 있다고 말했다.</strong>
          </p>
          
          <p class="leading-relaxed text-slate-800 font-serif text-xl border-l-4 border-gold-accent pl-4 py-2 bg-gradient-to-r from-orange-50 to-transparent">
             하늘이 높고 말이 살찌는 2013년 가을 어느 날 🍂, 나는 기다리던 <strong>합격 통지</strong>를 받았다. 🎉 이어서 러시아어 예비학부 등록을 위해 지원했고 어찌저찌 비자도 발급받고 2014년 여름 드디어 러시아의 심장, <strong>모스크바</strong>로 향하는 비행기에 몸을 실었다. ✈️🇷🇺
          </p>
        `,
        en: `
          <p class="leading-relaxed mb-6 text-slate-700">
            In the military, there is a system called <span class="font-bold text-russia-blue">'consignment education'</span> where active-duty soldiers receive education at external institutions (domestic and international graduate schools, research institutes, military/private institutions, etc.) to enhance their job expertise. Among these, the professional degree consignment education, which allows soldiers to enter domestic or international graduate schools to obtain master's or doctoral degrees, announces and selects candidates once a year.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
            If selected for a domestic professional degree, one is given the opportunity to enter various prestigious graduate schools in Korea. If selected for a foreign professional degree, depending on the announcement, opportunities are given to study in various countries, not only English-speaking ones like the United States 🇺🇸, Canada 🇨🇦, and the United Kingdom 🇬🇧, but also Russia 🇷🇺, India 🇮🇳, China 🇨🇳, and Japan 🇯🇵.
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            In the summer of 2013 ☀️, I was a platoon leader, working at my unit as usual. Then, I saw an announcement for domestic and international consignment education on the military intranet. My branch was <strong>CBR (Chemical, Biological, Radiological)</strong>, which was not a main combat branch, and due to the specialized nature of the CBR branch, the positions available to me were limited.
          </p>
          
          <div class="bg-slate-50 border-l-4 border-russia-blue p-4 my-6 rounded-r-lg">
            <p class="leading-relaxed text-slate-700">
               Although the announcement stated that they were selecting various people to nurture experts in many fields, only two positions caught my eye: a <strong>domestic consignment position</strong> that could lead to becoming a military professor in the future, and a <strong>nuclear engineering position in Russia</strong> ☢️ that could lead to becoming a military researcher.
            </p>
          </div>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            However, for me, who had not studied hard during my university (cadet) days, the professorship was <span class="text-slate-500 line-through decoration-slate-400">a pie in the sky</span>. 🍡 This was because there was a restriction that one's university grades had to be in the <strong>top 30 percent</strong>.
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            It was too late for regrets. The past cannot be changed. I wondered if I could even get a proper recommendation letter if I were to become a professor. When I had just entered university, a senior told me that if I wanted to have a relatively comfortable cadet life, I just needed to be in the top two-thirds in everything, and my grades were exactly like that. Not that my cadet life was very smooth, though. 😅 I don't think any professor would have taken notice of me. So, naturally, I had no choice but to fix my gaze on the <strong>master's in nuclear engineering in Russia</strong>.
          </p>
          
          <hr class="border-slate-200 my-8 w-1/2 mx-auto" />

          <p class="leading-relaxed mb-6 text-slate-700">
            <span class="font-bold text-russia-blue">"Do I know Russian? Have I ever studied nuclear engineering?"</span> Of course not. I couldn't even speak the English I had learned throughout my school years properly, and my major was chemistry. Besides, the major at the Korea Military Academy is somewhat lacking to be called a major at another civilian university. Moreover, studying unfamiliar nuclear engineering in an unfamiliar Russian language, even the people around me reacted with <strong>"Can you do it?"</strong> 🤷
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            At that time, I remembered something from my childhood with my father. Before we left for school, my father would make us shout <span class="font-bold text-russia-blue">"I can do it"</span> three times. Of course, I did it a few times and then stopped, but the memory was still vivid, and it was a phrase engraved in my heart that helped me get through tough times. This time, too, that spell gave me courage.
          </p>
          
          <blockquote class="text-center font-serif text-2xl font-bold text-russia-blue my-8 animate-pulse">
            "Yes, I can do it. 👊"
          </blockquote>

          <p class="leading-relaxed mb-6 text-slate-700">
            After making up my mind, I immediately filled out the application form. The documents said to submit a certified Russian language score if I had one, but there was no way I had one. If not, it said to submit an English score, so I submitted my TOEIC score, which I had been studying for and taking tests for from time to time. I don't know how I passed the document screening, but I received a notification to come for a <strong>language screening to test my Russian</strong>. 📨
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            Since I didn't know any Russian, I wrote down what I wanted to say on half a page, asked a friend who majored in Russian to translate it, and wrote down the corresponding Korean pronunciation to memorize it. I wrote a <strong>simple self-introduction and my aspirations that I can do it</strong>.
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            As soon as I went to the language screening, I immediately knew why I had passed the document screening. <strong>I was the only applicant.</strong> 😲 Ah, so there was no one who knew Russian and had studied nuclear engineering. I was relieved for a moment, but then I got nervous when they said it was a test, not an interview.
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            If it had been an interview, I could have at least said what I had memorized and appealed that I could definitely do it. It was a listening and reading test, but to me, who was illiterate in Russian, <strong>the black was the letters and the white was the paper</strong>. 😵‍💫 So, having barely learned the Russian alphabet, I practically guessed my way through the questions and left the test center.
          </p>
          
          <div class="bg-orange-50 p-6 rounded-xl border border-orange-100 my-8">
             <p class="leading-relaxed text-slate-800">
                Sometime later, there were individual and group interviews, and while the interviewers asked the other applicants difficult questions about various professional knowledge, they only asked me <span class="font-bold text-orange-800">"Can you do it?"</span>.
             </p>
          </div>
          
          <p class="leading-relaxed mb-6 text-slate-700">
             If a selected person fails to obtain a degree and returns, it has many disadvantages for the selected person, but from the perspective of the selecting institution, they need to cultivate experts in necessary fields as a mid- to long-term plan, and I think I was a risk in myself. I don't know much, and my university grades were not great, so I can carefully guess that they were also very worried about whether to send me.
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-700">
             If I don't believe in myself, who will believe in me? No matter who asked, I <strong>confidently said I could do it.</strong>
          </p>
          
          <p class="leading-relaxed text-slate-800 font-serif text-xl border-l-4 border-gold-accent pl-4 py-2 bg-gradient-to-r from-orange-50 to-transparent">
             One day in the autumn of 2013, when the sky was high and the horses were fat 🍂, I received the long-awaited <strong>acceptance notice</strong>. 🎉 I then applied to register for the Russian preparatory faculty, somehow got my visa issued, and in the summer of 2014, I finally boarded a plane to the heart of Russia, <strong>Moscow</strong>. ✈️🇷🇺
          </p>
        `,
      },
      comments: [],
    },
  ],
};
