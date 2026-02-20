import { Category, Post } from './types';
import Picture1 from './images/Picture1.png';
import Picture2 from './images/Picture2.png';
import Picture3 from './images/Picture3.png';

// Removed generatePosts helper as we are defining posts manually or explicitly for Year 1 now to handle specific content/locking

export const BOOK_DATA: Category[] = [
  {
    id: 'home',
    title: '홈',
    isSinglePost: false,
    isActive: true,
    posts: []
  },
  {
    id: 'prologue',
    title: '프롤로그',
    description: '여정의 시작',
    isSinglePost: true,
    isActive: true,
    posts: [
      {
        id: 'prologue-1',
        title: '프롤로그',
        subtitle: '할 수 있다.',
        imageUrl: 'https://images.unsplash.com/photo-1520106212299-d99c443e4568?q=80&w=1200&auto=format&fit=crop', // St. Basil's Cathedral
        isActive: true,
        content: `
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
            면접이었다면 외운거라도 이야기 하고 반드시 할 수 있다고 어필을 할 수 있었는데 말이다. 듣기와 읽기 평가였지만 러시아 까막눈인 나에게는 <strong>까만 건 글씨고 하얀 건 종이</strong>였다. 😵‍💫 그렇게 겨우 러시아 알파벳만 떼었던 나는 거의 찍다시피 문제를 풀었고 시험장을 나왔다.
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
        comments: []
      }
    ]
  },
  {
    id: 'year1',
    title: '1년차, 예비학부',
    description: '낯선 땅, 첫 번째 겨울',
    isSinglePost: false,
    isActive: true,
    posts: [
      {
        id: 'post-100',
        title: '새출발',
        subtitle: '러시아로 향하는 비행기, 그리고 혹독한 신고식',
        imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop', // Airplane wing or airport
        isActive: true,
        comments: [],
        content: `
          <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
            개인적인 사정으로 아내보다 이틀 먼저 출국을 하게 되었다. 인천국제공항에는 어머니와 동생이 나와주었고 작별을 한 뒤 비행기에 몸을 실었다.
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            군인정신이 몸에 밴 나는 예비학부를 포함한 3년간의 석사과정을 마쳐야 하는 <span class="font-bold text-russia-blue">임무(?)</span>를 완수해야 했기에 비장한 마음으로 좌석에 앉았다. 하지만 부모형제, 친구들을 못 본다는 생각이 나서 그런지, 낯선 땅에 대한 막연한 두려움 때문인지 눈물이 났다. 😭
          </p>

          <p class="leading-relaxed mb-8 text-slate-700">
            비행기 출발 전 기내방송이 나왔을 때가 드디어 정말 떠나는구나 하는 마음에 제일 많이 울었다.
          </p>

          <div class="bg-slate-50 p-6 rounded-xl border-l-4 border-russia-blue mb-8">
            <p class="leading-relaxed text-slate-700 italic">
              "기분이 조금 안정되나 싶을 때, 비행기 내에는 기내식이 나왔다. 승무원의 식사와 함께 어떤 음료를 마시겠냐는 질문에 나는 뭔가에 이끌린듯 <span class="font-bold text-wine-600">와인 🍷</span>을 달라고 했다. 왠지 알콜이 조금 도움이 되지 않을까 하는 마음에서였다."
            </p>
          </div>

          <p class="leading-relaxed mb-6 text-slate-700">
             하지만 결과는 정반대였다. 와인을 마시고 나니 한 번 더 이유 모를 슬픔과 두려움이 울컥했다. 가까스로 스스로를 다독이고 나니 잠이 몰려왔다. 한참을 푹 잔 것 같다. 기내식을 주고 있을 때 다시 깨어났고, 비슷한 일이 반복되었다. 또 와인을 주문했고 와인과 식사를 마치고는 또다시 한 번 울컥하고는 또 잠에 들었다. 😴
             <br/><br/>
             그렇게 14시간의 비행이 짧게 느껴졌고 어느새 <strong>모스크바 세례메티예보 국제공항</strong>에 도착해 있었다. 🇷🇺
          </p>

          <hr class="border-slate-200 my-8 w-1/3 mx-auto" />

          <p class="leading-relaxed mb-6 text-slate-700">
            한국에서 잠시 공부했던 러시아어로는 모스크바 현지인의 말을 거의 알아듣지 못했다. 그래도 공항에서 엄청나게 많은 사람들이 택시 호객행위를 한다는 건 알 수 있었다. 🚕
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            나는 미리 모스크바 국립대 학생회의 입학안내 서비스를 신청했기에 마중 나온 사람이 있었고, 안전하게 모스크바 시내 근처에 있는 기숙사까지 일행과 이동할 수 있었다. 공항에서 기숙사까지는 약 한 시간 조금 넘게 걸렸는데 택시 안에서 본 모스크바의 풍경은 모든 게 다 신기할 따름이었다.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏠 낯선 기숙사, 첫 번째 밤</h3>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            도착한 기숙사는 지하철이 바로 옆에 있는 역세권 중의 역세권이었다. 말이 기숙사지 사실상 방이 두 개인 아파트였다. 각 방에는 두 명씩 들어갈 수 있었으니 한 호수에는 학생 네 명까지 살 수 있었다. 방 하나에는 나와 나보다는 대여섯 살 어린 룸메가 들어갔고, 다른 방에는 운 좋은 한국인이 혼자 방을 쓰게 되었다.
          </p>

          <p class="leading-relaxed mb-6 text-slate-700">
            방은 온통 오래된 목재로 되어 있었다. 그래도 다행인 건 해당 기숙사는 그나마 깨끗하게 관리가 된 편이라 바퀴벌레는 나오지 않는다고 했다. 나무로 된 침대에는 침대보와 담요가 있었는데 모두 정말 너무 오래되어서 사용할 수가 없었다. 특히 담요는 엄청 두껍고 까끌해서 바로 옷장 구석에 보관해 두었다.
          </p>

          <p class="leading-relaxed mb-6 text-slate-700">
            방을 조금 둘러보고는 당장 급한 물부터 해결을 해야 했다. 대부분의 유럽처럼 수도꼭지를 틀면 나오는 물은 모두 <strong>석회</strong>이기에 요로결석의 이유로 함부로 마시지 말라고 했다. 끓이더라도 석회가 둥둥 떠다니는 게 보이기에 별로 마시고 싶은 생각도 들지 않았다. 🚰
          </p>
          
          <p class="leading-relaxed mb-8 text-slate-700">
            필요한 물과 간식을 샀고, 잠시 혼자 밖에 나가보니 이제 진짜 러시아 생활을 시작한다는 생각이 들었다. <span class="bg-yellow-100 px-1">과연 어떤 모험이 기다리고 있을까, 설레는 마음과 미지의 불안함이 교대로 나를 어지럽히던 밤이었다.</span> 별로 아늑하지 못한 기숙사에서의 첫날밤이었지만 하루 종일 새로운 곳에서의 생활에 잔뜩 긴장했다가 마음이 놓여서인지 잠은 잘 잤다.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">📝 관료주의와 마주하다</h3>

          <p class="leading-relaxed mb-6 text-slate-700">
            러시아의 대학/대학원에 진학하기 위해선 예비학부를 거치는 것이 일반적이기에 함께 온 사람들과 함께 예비학부를 등록하러 갔다. 예비학부를 등록하려면 러시아어 공증을 받고 여권 복사본을 러시아어로 번역하여 제출해야 했다. 
            <br/><br/>
            다른 나라의 공증과 번역은 인정해 주지 않기에, 아무리 대한민국 국방부가 보증하고 국제여권이 증명해도, 구소련의 잔재가 가득한 러시아의 낡은 책상 앞에서는 무용지물이었다. 다음으로는 대형마트에 가서 필요한 물품들을 구입했다. 특히 이불과 베개는 최대한 포근하고 푹신한 것으로 신중히 골랐다. 🛌
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚕 선배(?)의 굴욕: 택시 사기</h3>

          <p class="leading-relaxed mb-6 text-slate-700">
            아내는 예정대로 내가 러시아에 오고 이틀 뒤에 왔다. 그래도 이틀 먼저 러시아에서 산 ‘선배’로서 어깨에 힘을 잔뜩 주고 의기양양하게 공항으로 향했다. 😤 겨우 이틀 만에 보는 거였지만 심적으로 의지할 사람이 생겨서 그런지 아내가 매우 반가웠다.
          </p>

          <p class="leading-relaxed mb-6 text-slate-700">
            내가 오는 날 도와준 사람의 얘기로는 3만 원 이상 절대 주지 말라고 해서 호객행위 하는 사람들이 금액을 부를 때마다 거절했다. 하지만 어떤 호객꾼이 곧잘 3만 원에 해주겠다고 하여 그 택시를 탔다. 그 때만 해도 모든 게 잘 풀리나 싶었다. 
          </p>
          
          <div class="bg-red-50 border border-red-200 rounded-lg p-6 my-6">
            <p class="leading-relaxed text-red-900 font-medium mb-2">💸 기숙사에 도착하니 기사가 택시비를 요구했다.</p>
            <p class="leading-relaxed text-red-800">
              택시비를 이미 냈다고 하니, 그건 중계료이고 택시비가 <strong>18만 원</strong>이 나왔으니 내라고 한다. 아는 한국 사람에게 전화해서 도움을 요청했으나 역시 쉽지 않았다. 이런 택시기사를 하는 사람들이 러시아 마피아와도 연결되어 있는 경우도 있다고 하기도 하고, 이제 막 도착했는데 문제를 일으키고 싶지 않아 눈물을 머금고 비용을 지불했다.
            </p>
          </div>

          <p class="leading-relaxed mb-6 text-slate-700">
            흐린 하늘과 추운 날씨, 불친절한 사람들, 나의 멍청함으로 인한 사기... 이 모든 것들이 러시아의 첫인상을 망치기에 충분했다. 이제 시작이라고 생각하니 앞으로 남은 3년이 막막하기도 했다. 
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-800 font-bold text-lg text-center my-10">
            "정신을 바짝 차려야만 이 낯선 곳, 낯선 사람들 사이에서<br/>무사히 원하는 목표를 달성할 수 있을 듯했다. 👊"
          </p>

          <p class="leading-relaxed mb-6 text-slate-700">
            그래도 한편으로는 ‘다 사람 사는 곳인데’ 하는 스스로의 위안을 했다. 그렇게 러시아에서의 첫 며칠은 분노와 다짐으로 순식간에 지나갔다.
          </p>
        `
      },
      {
        id: 'post-101',
        title: '모스크바가 모스크바 했다',
        subtitle: '기숙사 생활과 러시아의 이면',
        imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop', // Moscow Hotel/Building looking like dorm or city vibe
        isActive: true,
        comments: [],
        content: `
          <p class="leading-relaxed mb-6 text-slate-700">
            예비학부 등록은 이미 한 번 해봤기 때문에 이젠 아내의 예비학부에 등록을 도와줬다. 예비학부에서는 여러 기숙사를 배정해주시는데 등록과정에서 우리가 <strong>부부 💑</strong>임을 밝혔더니 같은 기숙사에 배정을 해주었다.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
            부부가 같은 방에서 지낼 수 있는 가족 전용 기숙사는 아니었지만 가족기숙사보다 오히려 더 깨끗하다는 말과 저렴하다는 말에 예비학부 1년 간은 해당 기숙사에 머물기로 했다. 아내는 나와는 다른 층에 2인실 방을 배정받았는데 다행히 오기로 했던 룸메가 오지 않는 덕에 아내는 넓은 방을 혼자 쓰게 되었다. 🍀 공부해야 하는 시간이 많아 서로 바빴지만 아내 방에 놀러가는 것이 최고의 힐링이었다.
          </p>

          <div class="bg-slate-50 p-6 rounded-xl border border-slate-200 my-8">
            <h4 class="font-serif font-bold text-slate-800 mb-2">🏠 옆 방의 미스터리</h4>
            <p class="leading-relaxed text-slate-700">
              이전 글에서 이야기 했듯 우리가 머물었던 기숙사는 한 호수에 두 개의 방이 있었는데, 아내와 같은 호수 하지만 옆 방에는 일본인 여학생이 살고 있었다. 그 학생은 은둔형 외톨이, 속칭 <strong>'히키코모리'</strong>로 보였다. 방은 다르지만 주방과 화장실을 아내와 같이 쓰는데 마주치는 일이 거의 없고 계단에서 마주쳤더니 '스미마셍'하면서 도망쳤다. 🏃‍♀️💨<br/>
              주방을 쓰지도 않았고 사회 생활을 전혀 하는 것 같지 않는 듯 방에서 잘 나오지도 않았다. 덕분에 아내는 기숙사를 편하게 사용할 수 있었다. 어쩌다가 먼 러시아까지 와서 공부를 하는지는 모르겠지만 잘 마치고 가길 바랐다. 🙏
            </p>
          </div>

          <p class="leading-relaxed mb-6 text-slate-700">
            나의 룸메는 나보다 몇 살 어린 친구였는데 (P군이라 칭하겠다), 키도 훤칠하고 인물도 좋았다. 영어도 무척이나 잘했고 사교성도 좋아서 나는 그 친구가 무척이나 마음에 들었다. 👍 그 외에도 공항에서 같이 만났던 일본어를 잘하는 S양이 있었는데, 자세한 이야기는 이후에 기술하겠지만 아내와 함께 그 친구들과 좋은 추억들을 많이 쌓을 수 있었다.
          </p>

          <p class="leading-relaxed mb-6 text-slate-700">
            그렇게 한국 친구들도 사귀었고 (늦은 나이에 오느라 대부분 동생들이었지만), 한국어를 배우는 러시아 친구들도 사귈 수 있었다. 러시아에서는 구글 대신 <strong>얀덱스(Yandex)</strong>라는 사이트가 우리의 네이버와 같은 역할을 하고, <strong>VK(Vkontakte)</strong>가 우리의 카카오톡과 비슷한 역할을 한다. 그 외에도 얀덱스에서 제공하는 각종 서비스들(얀덱스 택시 🚖, 얀덱스 지도 🗺️)을 설치함으로써 러시아 현지 패치를 서서히 해 나가고 있었다.
          </p>

          <hr class="border-slate-200 my-8 w-1/3 mx-auto" />

          <p class="leading-relaxed mb-6 text-slate-700">
            러시아에서는 <span class="text-russia-blue font-bold">학생이라는 신분</span>은 조금 무시받는 분위기가 있다. 학생이라는 이유 하나 만으로 어른으로 대접받지 못하고 가벼운 훈계 혹은 꾸지람부터 욕설까지 부당하게 당하기도 했다. 😤
          </p>

          <p class="leading-relaxed mb-6 text-slate-700">
            물론 학생이기에 누릴 수 있는 혜택도 굉장히 많이 편이긴 하다. 대부분의 관광지에서 할인을 받을 수 있는 것은 물론 한 달에 만원도 안 되는 금액으로 모스크바 시내의 거의 대부분의 대중교통을 이용할 수도 있다. 🚇 이러한 할인은 정말 어처구니가 없는 곳에서도 적용이 되었다.
          </p>

          <div class="bg-yellow-50 p-4 border-l-4 border-yellow-400 my-6 italic text-slate-700">
            "한 번은 경찰에게 차선 위반으로 걸렸는데도 학생증을 보여주니 벌금을 할인해 주었다. 물론 공식적인 벌금은 아니고 뇌물이었지만 말이다. 💸👮‍♂️"
          </div>

          <p class="leading-relaxed mb-6 text-slate-700">
            한 번은 정말 기분 나쁜 경험이 있었다. 실수로 열쇠를 방에 두고 나왔고 룸메가 방을 잠그고 나가 사감에게 방을 열어달라고 부탁을 한 적이 있었다. 벌금을 내야 한다거나 경고를 준다거나 하면 받아들일 수 있었지만 장장 <strong>10분 동안 훈계</strong>를 들어야만 했다. 🗣️💢
          </p>

          <p class="leading-relaxed mb-6 text-slate-700">
            또 한 번은 별거 아닌 일로 또 훈계를 하려는 사감에게 대든 적도 있었는데 오히려 그 후의 삶이 더 편해졌다. 이런 러시아인들의 <strong>약강강약</strong>(약자한테 강하고 강자에게 약한) 태도는 러시아에 머무는 동안 나의 심기를 자주 건드렸다.
          </p>

          <p class="leading-relaxed mb-6 text-slate-700">
            러시아에서는 심지어 러시아인들 조차 이런 말을 사람들이 자주 한다고 한다.
          </p>

          <blockquote class="text-center font-serif text-2xl font-bold text-russia-blue my-10 border-y-2 border-slate-100 py-6">
            "Это Москва"<br/>
            <span class="text-lg font-normal text-slate-500 mt-2 block">(This is Moscow)</span>
          </blockquote>

          <p class="leading-relaxed mb-6 text-slate-700">
            이 말인즉, 좋은 뜻이든 나쁜 뜻이든 <span class="bg-russia-blue/10 px-1">모스크바는 원래 그렇다. 그러려니 해라.</span> 그만큼 다르다는 의미이자, 다름을 인정해야 한다는 뜻으로 말하는 거겠지만, 막상 살다 보면 나쁜 상황에 더 자주 쓰게 된다.
          </p>

          <p class="leading-relaxed text-xl font-bold text-slate-800 text-center mt-8">
            요즘 말로 바꾸면 "모스크바가 모스크바 했네." 정도라고 할까. 🤷‍♂️🇷🇺
          </p>
        `
      },
      {
        id: 'post-102',
        title: '다름을 이해하기',
        subtitle: '러시아어와 사람들, 그 속에서 배운 것들',
        imageUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop', // Group of friends/People talking
        isActive: true,
        comments: [],
        content: `
          <p class="leading-relaxed mb-6 text-slate-700">
            여러모로 러시아에서의 생활은 <span class="font-bold text-russia-blue">‘다름’</span>이라는 가치에 대해 일깨워준 소중한 경험이었다. 막연히 다르다기 보다 어떻게 다른지, 러시아어와 러시아인들의 다름에 대해 일부를 소개하고자 한다.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🤔 질문하는 방법</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            우리에게 제일 친숙한 영어는 말할 것도 없고 어순이 비슷한 일본어랑 비교해서도 러시아어는 아주 다른 언어라고 할 수 있다. 일단 의문문의 강세가 마지막에 있지 않고 묻고자 하는 단어에 있다. 예를 들어 한국어로 "너 학교에 다녀왔니?"를 묻는다면 마지막인 "니?" 부분에서 어조 올려 질문을 하겠지만 러시아어로 말하면 같은 문장을 어조만 바꿔서 세 가지 의미로 물어볼 수 있다.
          </p>
          <ul class="list-none space-y-2 mb-6 bg-slate-50 p-6 rounded-lg border border-slate-100">
            <li class="flex gap-3">
              <span class="font-bold text-russia-blue">1.</span>
              <span>"너 학교에 다녀왔니?" (다른 사람이 아닌 <strong class="text-slate-900">네가</strong> 갔는지 확인)</span>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-russia-blue">2.</span>
              <span>"너 학교에 다녀왔니?" (간 곳이 <strong class="text-slate-900">학교</strong>인지 확인)</span>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-russia-blue">3.</span>
              <span>"너 학교에 다녀왔니?" (행위 <strong class="text-slate-900">자체</strong>를 확인)</span>
            </li>
          </ul>
          <p class="leading-relaxed mb-6 text-slate-700">
             언뜻 보면 뭐가 다른지 차이를 느끼기 힘든데 보통은 행위 자체를 묻는 경우가 많고 러시아어를 배우다 보면 생각보단 금방 익숙해진다. 오히려 이렇게 안 쓰고도 대화가 가능한 다른 언어가 신기할 때도 종종 있었다. 
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🔀 없는 듯 있는 어순</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            러시아인들에게 어순이 있냐고 물어보면 없다고들 말한다. 실제로 문법적으로는 틀린 말이 아니기도 하고 맞는 말이기도 하다. 예를 들어 <strong>"난 너를 사랑해"</strong>의 문장의 경우, 특별한 (혹은 생략된) 경우가 아니고는 어순이 바뀌는 경우는 없지만 러시아어로는 거의 모든 어순이 가능하다.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
            단어 3개를 나열하는 방법은 6가지가 되지만 실제로 자주 쓰는 어순은 두 가지 정도로 한국어와 같은 어순인 "난 너를 사랑해"와 "난 사랑해 너를" 정도가 된다. 러시아어는 동사에 주어의 정보(나, 너, 제삼자, 우리, 너를 포함한 복수, 복수의 제삼자)가 일부 포함되어 있기에 생략의 자유도가 한국어보다 높다고 볼 수 있지만, 그렇다고 아무렇게나 생략하거나 배열하면 러시아인들이 말을 왜 그렇게 하냐고 핀잔을 주기에 자연스러운 어순을 익히는 데는 노력이 필요하다.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🙇‍♂️ 러시아어의 반말/존댓말</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            으레 가지는 선입견으로 거친 러시아의 불곰 형누님들은 예의라곤 전혀 없는 사람들 같으나 놀랍게도 러시아어에는 존댓말이 있다. 물론 영어도 좀 더 정중한 단어가 있지만 러시아어에는 단어 선택이 아닌 동사에 존대를 표현할 수 있는 말이 한국어처럼 따로 있다.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
            하지만 한국어와 다른 점은 존댓말을 사용하는 기준이 <span class="bg-yellow-100 px-1">친근함</span>이 되기에 몇몇 예외를 제외하곤 할머니 할아버지라도 가족끼린 절대로 존댓말을 쓰지 않는다. 처음에 이들의 문화를 잘 몰랐을 땐 러시아 친구가 자기 부모를 이름으로 부르거나 ‘너’라고 했을 때 <em>'요런 예절머리라곤 전혀 없는 사람들 같으니라고'</em> 생각했다. 😅
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
            이성으로 만난 남녀 사이에 있어서도 처음 만났을 때를 제외하곤 거의 존댓말을 쓰지 않는다. 당연히 공적으로 만난 상대(학교 또는 회사 등)에게는 존칭을 사용한다. 식당이나 카페 직원이 ‘너’라고 하더라도 친근함이라는 표시니 아주 기분 나빠할 필요는 없지만 난 내내 기분이 좋지 않았다.
          </p>
          <div class="bg-slate-50 p-6 rounded-lg border-l-4 border-russia-blue mb-6">
            <p class="leading-relaxed text-slate-700 text-sm">
              <span class="font-bold">💡 Tip: 이름 부르기</span><br/>
              참고로 러시아 사람을 부를 때는 짧은 이름을 쓴다. 내가 아는 한 모든 이름은 짧은 이름을 가지고 있다. 예를 들자면 아나스타샤는 <strong>나스쨔</strong>, 알렉산드르는 <strong>사샤</strong>, 예카테리나는 <strong>카쨔</strong>로 부르는 식이다. 다만 공식 석상이나 존대를 하기 위해서는 이름과 부칭(아버지의 이름)을 같이 부른다. 영어로는 미스터, 미스, 닥터, 주니어 등을 붙일 테지만 러시아에서는 <span class="italic">이반 세르게예비치 (세르게이의 아들 이반)</span>, <span class="italic">이리나 미하일로브나(미하일의 딸 이리나)</span>로 부른다.
            </p>
          </div>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">😶 모르는 이를 대함</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            처음 모스크바 세레메치예보 공항에 내려서 입학 수속을 밟으면서 러시아인들의 불친절은 과장이 전혀 없음을 알았다. 하지만 이런 인식은 시간이 지나며 좀 변하긴 했는데 그 이유인즉 러시아인들은 대체로 모르는 이방인에게 친절히 대할 필요가 없다고 생각한다는 것이다. 하지만 조금이라도 일면식이 있는 사람이라면 (하물며 기차의 동승객) 굉장히 예의가 바르게 되고 체면을 차리기 시작한다.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
             같은 사람들이 맞나 싶을 때도 많았다. 거리에서는 거의 막말을 아무렇게나 일삼는 사람들이 러시아에서 만난 친구들도 너무나도 착했고 기차나 버스 등 몇 시간만 같이 앉아있게 되면 먹을 것도 나눠주고 꽤나 놀랄 정도로 친절했다. 그들도 이렇게 낯선 사람과 아는 사람을 다르게 대하는 그들만의 이유가 있었다.
          </p>
          <ul class="list-disc list-inside space-y-2 mb-6 text-slate-700 bg-slate-50 p-6 rounded-lg">
             <li>전부터 순진하고 숭고한 슬라브 민족이 외세에 수탈을 당하여 낯선 이에게 경계심을 가지게 되었다. 🛡️</li>
             <li>푸쉬킨이란 러시아의 대문호가 <strong>‘모르는 사람에게 미소 짓는 건 바보나 하는 짓이다’</strong>라고 했다. 😐</li>
          </ul>
          <p class="leading-relaxed mb-6 text-slate-700">
             원인이 뭐가 됐든 나를 납득시키는 건 불가능했다.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🤣 러시아어 농담</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            러시아에 도착하고 나서 러시아어를 조금 재밌게 배워보려 서점에서 러시아어 농담집을 구입한 적이 있다. 초보자를 위한 책이어서 그런지 모르는 단어도 그다지 많지 않아서 읽는 것 자체에는 큰 무리가 없었다. 처음 몇 개를 읽었을 땐 내가 잘 이해를 못하고 있나 싶었는데 근데 몇 개를 읽어도 도통 어디서 웃어야 할지 몰랐다. 
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
             러시아 친구를 불러서 같이 좀 봐달라 했더니 첫 농담부터 빵 터지면서 어디서 샀냐고 물었다. 어이가 아주 없었지만 정중히 어느 부분이 웃기냐고 물어봤고 친구가 아주 친절히 웃음 포인트와 설명을 해주었지만 그 후로 러시아의 농담에 익숙해지는 데는 시간이 좀 걸렸다. 이러한 유머 코드의 차이는 단지 거리에서만 비롯되는 건 아니라고 생각이 들었다.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌨️ 그 외</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            러시아인들이 추위에 강하다는 건 반은 맞고 반은 틀린 말인 것 같다. 한국에서 러시아어 학원을 다닐 때 원어민 강사가 있었는데 날이 조금만 추우면 머리부터 발끝까지를 꽁꽁 옷과, 모자, 장갑 등으로 덮고 왔다. 분명 러시아는 엄청 추울 텐데라는 생각이 항상 머릿속을 맴돌았다. 러시아에 도착하니 러시아어 선생님 같은 사람들을 많이 봤다. 그런 면에서 모든 러시아인들이 육체적으로 추위에 강하다는 말은 틀린 말인 듯하다. 게다가 러시아에선 실내에 들어가면 대부분의 건물에서 히터가 무료로 너무 따뜻하게 나오기 때문에 더더욱이 추운 날씨 때문에 추위에 익숙한 신체적 특성이 있다고 생각하는 건 조금 무리가 있을 듯싶다. 러시아인들이 추위에 강할 수 있는 이유는 그들이 가진 방한용품 덕분이 아닐까 싶다. 🧣🧤
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
             그리고 러시아에서는 여자를 부를 때 단어 선택을 신중히 해야 한다. 전체가 아주 하얀 백발의 여성이라고 하더라도 <strong>‘할머니’</strong>라고 부르는 건 대단히 실례다. 👵❌ 한번은 수업 시간에 러시아어 선생님이 자신에 대해서 묘사해 보라 해서 ‘살짝 고약하게 생겼지만 마음씨는 착한 할머니’라고 했다가 한두 시간 정도 핀잔을 들었다.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
             마찬가지로 아줌마처럼 보이는 사람에게도 <strong>아줌마</strong>라고 하는 것도 실례라 하고 아줌마라는 단어는 공항에서 들었는데 순한 맛 욕설처럼 쓰이더라. 그러면 모르는 러시아 여성을 부를 땐 어떻게 해야 하는지 물었더니, 러시아 여성들은 다 <strong>‘제부시카(아가씨)’</strong>라고 부르면 된단다. 러시아에서 생활하며 아줌마와 할머니한테 혼이 쏙 빠질 만큼 혼나고 나면 그들을 아가씨라고 부를 맘에 손톱만큼도 남지 않을 것이다.
          </p>

          <hr class="border-slate-200 my-8 w-1/3 mx-auto" />

          <p class="leading-relaxed mb-6 text-slate-700">
             그들은 매우 달랐다. 그렇다고 못 살 정도는 아니었지만 그렇다고 선뜻 친근하다고 느끼기에도 무리가 있는 사람들이다. 하지만 그들이 무조건 잘못된 것은 아닐 것이다. 
          </p>
          <p class="leading-relaxed text-xl font-bold text-slate-800 text-center mt-8">
            아직 내가 그들의 다름을 순순히 인정하기에 부족한 사람이기에<br/>내 그릇을 더 키워야 한다고 다짐했다. 🌱
          </p>
        `
      },
      {
        id: 'post-103',
        title: '예비학부에서의 공부',
        subtitle: '쯔모, 빠라, 그리고 러시아식 수학',
        imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop', // Library/Study (Updated)
        isActive: true,
        comments: [],
        content: `
           <p class="leading-relaxed mb-6 text-slate-700">
             모스크바 국립대학교 예비학부는 유학생들 사이에서 오래전부터 <strong>‘쯔모(ЦМО, 국제교육센터)’</strong>라는 별칭으로 더 유명했다. 2013년에 공식 명칭이 <strong>이랴익(ИРЯиК, 러시아어 및 러시아 문화 연구소)</strong>으로 변경되었지만, 2014년에 러시아에 처음 발을 들인 나를 포함해 많은 사람들은 여전히 예비학부를 ‘쯔모’라고 불렀다. 아마도 발음하기 쉽고 짧아서였을 것이라 짐작한다.
           </p>

           <p class="leading-relaxed mb-6 text-slate-700">
             모스크바 대학의 예비학부는 우리가 흔히 떠올리는 독립된 건물이 아니라, 기존의 대형 건물 일부를 사용하는 형태였다. 이과와 문과 학생들은 도보로 약 3분 정도 떨어진 서로 다른 건물에서 수업을 들었다. 나는 이과였고 아내는 문과였기 때문에, 가끔 점심을 함께 먹거나 하교를 같이할 때면 먼저 끝난 사람이 다른 건물로 가서 기다려주곤 했다.
           </p>
           
           <div class="bg-slate-50 border border-slate-200 p-6 rounded-lg my-6">
             <p class="leading-relaxed text-slate-700 italic">
               "예비학부 주변을 보면 한 건물의 한 층에만 ‘○○대학 ○○학과’라고 쓰여 있는 경우도 종종 있었다. 대학교조차 건물 일부만 사용하는 모습을 보며, 한국의 학원 시스템과 비슷하다는 점에서 적잖은 충격을 받았다. 🏢"
             </p>
           </div>

           <p class="leading-relaxed mb-6 text-slate-700">
             예비학부는 단순한 어학연수 기관이 아니라, 대부분의 학생이 학부나 대학원 진학을 목표로 등록하는 과정이다. 따라서 입학 시 진학 예정 학과를 묻는다. 특정 전공 과목을 정하는 것은 아니지만, 역사·언어·공학·자연과학 등 큰 계열을 선택하게 되며, 이에 따라 1년간 수강 과목이 달라진다. 나는 <strong>자연과학 계열</strong>을 선택해 러시아어와 함께 수학과 물리를 수강했고, 아내는 <strong>언어(러시아어-한국어 통번역)</strong>를 선택해 러시아 역사와 문화를 배웠다.
           </p>

           <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⏱️ 러시아의 수업 시간, 빠라(Пара)</h3>
           <p class="leading-relaxed mb-6 text-slate-700">
             러시아 대학에는 우리가 말하는 50분짜리 ‘한 시간 수업’ 대신 <strong>‘빠라(пара)’</strong>라는 1시간 30~35분 단위의 수업이 있다. 보통 45분 수업 후 5~10분 휴식을 포함하는 구조라 생각보다 버틸 만했다. 예비학부는 매일 수업이 있었고 하루 평균 네 빠라를 들었으니, 학생 입장에서는 꽤 빡빡한 일정이었다.
           </p>

           <p class="leading-relaxed mb-6 text-slate-700">
             2014년 당시 1년 학비는 약 5,080달러였다. 일반적인 32주가 아닌 38주 과정이었고, 매일 수업이 진행되며 한 반 인원이 최대 6~7명(내 반은 4명)에 불과했으니 비용 대비 교육 밀도는 나쁘지 않았다. 다만 예비학부의 목적이 ‘대학 진학을 위한 기초 러시아어 교육’이기에 고급 수준까지 기대하기는 어렵다. 대부분의 학생에게 최종 목표는 <strong>TORFL 1단계(ТРКИ-1)</strong> 합격이다.
           </p>
           
           <div class="mb-8">
             <span class="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">Info</span>
             <p class="text-sm text-slate-600 bg-slate-100 p-4 rounded">
               <strong>TORFL</strong>은 러시아 교육부에서 주관하는 러시아어 능력시험으로, 기초(A1), 기본(A2), 1단계(B1), 2단계(B2), 3단계(C1), 4단계(C2)로 구분된다. 1단계는 약 12~18개월 학습 후 도달 가능한 수준으로, 일상적인 의사소통과 전공 기초 학습이 가능한 단계로 평가된다.
             </p>
           </div>

           <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⚒️ CCCP의 비밀</h3>
           <p class="leading-relaxed mb-6 text-slate-700">
             예비학부에는 재미있는 일화도 있다. 대부분의 학생은 러시아가 처음이기에, 모스크바 곳곳에서 보이는 <strong>‘CCCP’</strong>라는 문구를 보고 수업 시간마다 그 의미를 묻곤 한다. 선생님들은 웃으며 그것이 과거 소련을 뜻하는 약자라고 설명해 주신다. 겉보기엔 영어 알파벳과 같지만, 러시아어에서는 C를 ‘에스’, P를 ‘알’로 읽기 때문에 생긴 해프닝이다.
           </p>

           <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">📐 러시아어로 배우는 수학</h3>
           <p class="leading-relaxed mb-6 text-slate-700">
             다시 수업 이야기로 돌아가 보자. 나는 핵물리학 전공을 희망한다고 밝혔기에 러시아어 외에도 일주일에 수학 두 빠라, 물리 두 빠라를 들었다. 러시아어는 인쇄체와 필기체가 상당히 달라 초반부터 쉽지 않았다. 게다가 현지인들의 필기체는 매우 흘려 쓰는 경우가 많아, 외국인 입장에서는 해독 자체가 도전이었다. ✍️
           </p>
           <p class="leading-relaxed mb-6 text-slate-700">
             문법도 만만치 않았다. 동사는 시제와 인칭에 따라 변화하고, 명사는 격·수·성에 따라 형태가 달라진다. 어떤 언어든 어렵지만, 러시아어는 문법적 변형이 특히 풍부한 언어라고 할 수 있다.
           </p>

           <p class="leading-relaxed mb-6 text-slate-700">
             수학 수업은 ‘더하기’부터 시작했다. 연산을 배우는 것이 아니라, <strong>“1 더하기 1은 2”를 러시아어로 읽는 법</strong>을 배우는 것이었다. 1학기에는 로그와 지수 정도까지라 비교적 수월했다. 그러나 2학기에는 미분과 적분, 고급 미적분이 등장했다. 문제는 난이도가 아니라 속도였다. 수학 선생님은 기본 산수처럼 고급 미적분 마저 우리가 다 안다고 생각하는 모양이었다. 😵
           </p>

           <blockquote class="border-l-4 border-russia-blue pl-4 py-2 my-6 italic text-slate-700 bg-slate-50">
             ‘자, 정적분은 이런 식으로 읽고 이런 식으로 하면 됩니다.<br/>
             (중략) 숙제는 ○○까지 풀어오세요’
           </blockquote>

           <p class="leading-relaxed mb-6 text-slate-700">
             이런 식으로 숙제를 내곤 했는데, 속으로는 <em>‘아니 무슨 이게 덧셈 뺄셈도 아니고 오늘 배웠는데 어떻게 푸냐고...’</em> 생각한 적이 있었다. 설명은 빠르게 지나갔고, 수학을 배우기보다는 ‘수학을 러시아어로 이해하는 법’을 배우는 느낌이었다. 졸업 후 돌이켜보면 편미분이나 복잡한 적분 기법까지 다루지는 않았지만, 언어 장벽 때문에 수학이 가장 힘들었던 과목 중 하나였다.
           </p>
           
           <p class="leading-relaxed mb-6 text-slate-700">
             또한 러시아에서는 소수점과 천 단위 표기법이 한국과 반대다. 예를 들어 <span class="bg-slate-100 px-1 font-mono text-sm">12,345.6</span>은 러시아에서 <span class="bg-slate-100 px-1 font-mono text-sm">12.345,6</span>으로 표기한다. 익숙해지면 괜찮지만 처음에는 자주 헷갈렸다. 숫자 필기체도 우리와 모양이 달라 또 하나의 적응 과정이었다.
           </p>

           <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⚛️ 물리, 그리고 깨달음</h3>
           <p class="leading-relaxed mb-6 text-slate-700">
             물리 수업은 수학보다 조금 늦게 시작했다. 초반에는 뉴턴 역학을 배웠다. 엘리베이터, 도르래, 경사면, 마찰 등을 이용한 문제들이었는데, 문제 설정이 꽤 복잡했다. 도르래에 엘리베이터를 매달거나, 여러 개의 용수철을 연결해 힘을 계산하는 식이었다. 단순 계산보다 문제 상황을 이해하는 데 시간이 더 걸렸다. 이후 전자기학도 다루었고, 핵물리학에 대해서도 기초적인 내용을 배웠다.
           </p>

           <hr class="border-slate-200 my-8 w-1/3 mx-auto" />

           <p class="leading-relaxed mb-6 text-slate-700">
             언어가 완전히 익숙하지 않은 상태에서 전공 과목을 배우는 일은 생각보다 힘들었다. 단어를 이해하는 것뿐 아니라, 그들의 문제 접근 방식과 사고 구조를 받아들이는 과정이 필요했다. 1년 차 당시 나는 이해되지 않는 부분을 받아들이기보다 쉽게 ‘이상하다’고 단정 짓곤 했다.
           </p>
           
           <p class="leading-relaxed text-lg font-bold text-slate-800 text-center mt-8">
             지금 돌이켜보면, 그것은 문화와 사고방식의 차이를 인정하지 못했던<br/>내 스스로의 미숙함을 드러낸 것이라고 할 수 있다. 😌
           </p>
        `
      },
      {
        id: 'post-104',
        title: '그럭저럭 먹고살기',
        subtitle: '샤슬릭부터 보르쉬, 그리고 패스트푸드까지',
        imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop', // Generic Food Spread
        isActive: true,
        comments: [],
        content: `
           <p class="leading-relaxed mb-6 text-slate-700">
             러시아의 먹거리에 대한 영상이나 정보를 찾기 어려우리라 짐작한다. 설령 있다 하더라도 러시아의 ‘전통음식’에 대한 정보는 거의 없을 터인데, 그도 그럴 것이 러시아인들이 먹는 음식들 대부분이 외국에서 유래했기 때문이다. 여담으로 한국인들이 ‘전통음식’이라고 믿고 즐겨 먹는 음식들 중에도 ‘전통’이라고 부르기 민망할 정도로 역사가 짧은 음식이 많긴 하다. 예를 들어 감자탕이라던지 설렁탕도 역사가 100년 내로 생각보다 매우 짧다. 각설하고 러시아인들의 식탁에는 무엇이 올라가는지 살펴보도록 하자. 🍽️
           </p>
           
           <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌍 이웃 나라의 맛</h3>
           <p class="leading-relaxed mb-6 text-slate-700">
             러시아에서 쉽게 볼 수 있는 <strong>‘플로프’</strong>라는 볶음밥은 우즈베키스탄 음식이고, 내가 러시아에서 제일 좋아했던 음식 중 하나인 <strong>‘샤슬릭’</strong>이라는 꼬치 고기구이 또한 아르메니아에서 유래했다고 한다. 🥩
           </p>
           <p class="leading-relaxed mb-6 text-slate-700">
             그리고 우리에게 익숙하지 않지만 <strong>조지아</strong>(미국의 주 이름이 아니고 나라 이름, 러시아식으로는 그루지야) 음식이 맛국으로 통한다. 조지아식 만두인 <strong>힌칼리</strong>나 빵 안에 계란을 넣어서 만든 <strong>하차푸리</strong> 등은 러시아에서 쉽게 접할 수 있는 음식이자 러시아인 뿐만 아니라 러시아에 사는 외국인, 주변국 사람들에게도 사랑받는 메뉴다.
           </p>
           
           <figure class="my-8">
             <img src="${Picture1}" alt="이웃 나라의 맛" class="w-full rounded-lg shadow-lg" />
             <figcaption class="text-center text-sm text-slate-500 mt-2 font-serif italic">이웃 나라의 맛 (플로프, 샤슬릭, 힌칼리, 하차푸리)</figcaption>
           </figure>
           
           <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🥣 러시아 고유의 맛</h3>
           <p class="leading-relaxed mb-6 text-slate-700">
             그렇다면 러시아 고유의 음식은 무엇일까? 러시아는 85개의 연방관구로 구성되어 있고, 그 중 22개는 자치공화국이다. 세계 1위의 광활한 영토에 여러 민족, 게다가 여러 공화국이 섞여 있으니 딱 잘라 ‘러시아 고유음식’이라고 하기는 쉽지 않다. 하지만 주류인 슬라브인들을 대상으로 모스크바와 러시아의 주요 도시에서 접할 수 있는 대표적인 음식을 이야기 하자면 <strong>보르쉬</strong>와 <strong>블린</strong> 정도가 있겠다.
           </p>
           
           <p class="leading-relaxed mb-6 text-slate-700">
             <strong>보르쉬</strong>는 한국으로 치면 된장국 정도의 위상을 가지고 있다. 요즘은 한국 사람에게도 조금 익숙해진 비트라는 자줏빛 무로 색을 낸 고깃국이다. 러시아인들은 보르쉬 위에 <strong>스메타나</strong>라는 사워크림을 올린 후 스프와 섞어서 먹는데, 이 스메타나라는 게 한국인에게 익숙치 않을 뿐더러 살짝은 상한 듯한 시큼함이 있어서 나는 러시아를 떠날 때까지 결코 스메타나를 즐기지 못했다. 😅
           </p>
           
           <p class="leading-relaxed mb-6 text-slate-700">
             그래도 스메타나만 뺀다면 그렇게 큰 장벽 없이 누구나 즐길 수 있는 따뜻한 스프다. 처음엔 강렬한 자주색에 거부감이 들 수 있지만, 추운 날씨에 한 숟가락 떠먹으면 그런 마음은 언제 그랬냐는 듯 눈 녹듯 사라진다. 러시아에 살며 입맛이 현지에 동화되면 붉은 빛이 주는 생소함은 온데간데 없고, 우리네 소고기뭇국처럼 깊고 구수한 감칠맛을 느낄 수 있다.
           </p>

           <p class="leading-relaxed mb-6 text-slate-700">
             <strong>블린</strong>은 러시아식 팬케이크인데 우리가 흔히 아는 두툼한 팬케이크와 달리 아주 얇은 것이 특징이다. 두 세번 접거나 말아서 꿀 등의 달달한 소스를 찍어 먹기도 하고, 속에 햄이나 계란, 훈제 연어 등을 넣어서 간식으로도 좋고 식사 대용으로 먹기도 한다. 집에서도 쉽게 할 수 있고 거리에 나가면 많은 음식점에서 저렴하게 사 먹을 수 있다. 블린은 러시아 전통음식 중에 난이도가 가장 낮다고도 볼 수 있지만 안타깝게도 러시아와 그 인근 국가 외에는 블린을 찾기가 쉽지 않다.
           </p>

           <figure class="my-8">
             <img src="${Picture2}" alt="러시아 고유의 맛" class="w-full rounded-lg shadow-lg" />
             <figcaption class="text-center text-sm text-slate-500 mt-2 font-serif italic">러시아 고유의 맛 (보르쉬, 블린, 흑빵, 뻴메니)</figcaption>
           </figure>

           <p class="leading-relaxed mb-6 text-slate-700">
             그 외에도 시큼한 맛의 흑빵이라던가 만두와 비슷하지만 크기는 훨씬 작은 <strong>뻴메니</strong>도 러시아의 음식이다. 뻴메니 속에는 여러가지 속이 들어갈 수 있는데, 한 번은 실수로 고기가 들어있다고 산 뻴메니에 체리가 들어가 있었다. 🍒 이 뻴메니를 라면 끓일 때 넣었는데 그 중 몇 개가 익으며 터졌고 속이 라면 국물로 흘러나왔다.
           </p>

           <div class="bg-red-50 border border-red-200 p-6 rounded-lg my-6">
             <p class="leading-relaxed text-red-900 italic">
               "라면 국물이 빨개서 체리 과즙이 듬뿍 들어간 줄도 모르고 한 숟갈 떠먹었다. <strong>아비규환</strong>이라는 단어가 머리에서 절로 떠올랐다. 아까운 라면을 통째로 버릴 수 밖에 없었다. 지옥의 악마도 울고 갈 맛이었다. 👿 자신 있으면 시도해 보길."
             </p>
           </div>
           
           <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍔 생존을 위한 선택, 패스트푸드</h3>
           <p class="leading-relaxed mb-6 text-slate-700">
             러시아의 고유음식보다도 밖에서 제일 흔하게 볼 수 있는 음식은 사실 패스트푸드다. 버거킹, KFC, 맥도날드 등 글로벌 패스트푸드 체인점이 널려있는데, <span class="bg-yellow-100 px-1">빅맥지수가 세계 최저가인 러시아</span>에서 결코 이 체인점들을 피할 방법이 없다. 나와 친구들은 KFC에서 파는 바스킷 윙을 주로 먹었는데 만원 정도 되는 가격에 윙이 25개가 줬기에 치킨이 그리울 때마다 찾곤 했다. 🍗
           </p>
           <p class="leading-relaxed mb-6 text-slate-700">
             러시아에 여행 중 특이한 음식을 찾아 헤매다 결국엔 패스트푸드점으로 발길을 돌리는 여행객들을 심심찮게 볼 수 있다. 나도 그랬고, 나를 보러 러시아에 왔던 모든 사람이 그랬다.
           </p>
           
           <figure class="my-8">
             <img src="${Picture3}" alt="패스트푸드" class="w-full rounded-lg shadow-lg" />
             <figcaption class="text-center text-sm text-slate-500 mt-2 font-serif italic">생존을 위한 선택, 패스트푸드 (KFC, 맥도날드, 전기통닭, 샤오르마)</figcaption>
           </figure>

           <p class="leading-relaxed mb-6 text-slate-700">
             <strong>전기구이 통닭</strong>과 <strong>샤오르마</strong>는 길거리에 있는 노점상에서 아주 흔하게 볼 수 있는 음식이다. 값이 매우 저렴하고 맛도 훌륭하다. 전기구이 통닭은 어렸을 때 아버지가 사오던 통닭과 맛이 정말 비슷했다. 샤오르마를 주문하면 그 위에 스메타나를 얹을 건지 물어보는데 이것만 <strong>‘아니오’</strong>라고 대답하면 벌써 성공이다. 의심스러운 재료 없이 얇은 또띠아 빵에 채소와 고기를 듬뿍 넣어 돌돌 말아놓았기에 거의 실패가 없다.
           </p>
           <p class="leading-relaxed mb-6 text-slate-700">
             예비학부에서 공부하는 동안 러시아어 선생님은 우리더러 함부로 거리에서 뭔가를 사 먹지 말라고 그랬다. 왜 그렇게 맛있는 음식이 그렇게 싸겠냐며 말이다. 닭이 아닌 비둘기라는 소문이 있을 정도였다. 🐦 그래도 돈도 없고 춥고 배고픈 유학생에게는 이보다 더 싸고 든든한 먹거리는 찾기 힘들었다.
           </p>

           <hr class="border-slate-200 my-8 w-1/3 mx-auto" />

           <p class="leading-relaxed mb-6 text-slate-700">
             러시아에서 살며 표면적으로 받은 느낌은 러시아 사람들은 대체로 맛에 큰 의미를 부여하지 않는 듯했다. 날이 추워서 그런지 아니면 우리나라의 옛날처럼 아직은 먹고 살기가 팍팍해서 그런지 말이다. 아마 그들의 눈에는 맛집을 불을 켜고 찾아다니는 한국인들을 결코 이해하지 못하리라.
           </p>
           <p class="leading-relaxed mb-6 text-slate-700">
             그리고 대부분의 러시아인들이 이야기 하기로는 <strong>집에서 먹는 음식</strong>이 제일 맛있고, 어쩔 수 없을 때만 나가서 외식을 한다고 한다. 생각해 보면 한국은 조금 달랐다. 집에서 하기 힘든 맛있는 음식을 먹고 싶을 때 주로 나가서 사 먹기 때문이다. 내 인식도 마찬가지였다. <em>'왜 맛도 별로 없는데 굳이 나가서 사 먹지'</em>라는 생각이 머릿속을 항상 떠돌았다.
           </p>
           <p class="leading-relaxed text-lg font-bold text-slate-800 text-center mt-8">
             음식도 다르지만 음식을 대하는 태도, 외식에 대한 인식 등<br/>여전히 달라도 많이 다르다는 것을 다시금 느꼈다. 🥢
           </p>
        `
      },
      {
        id: 'post-105',
        title: '모스크바에서 한국 찾기',
        subtitle: '그리움, 대사관, 그리고 북한 식당',
        imageUrl: 'https://images.unsplash.com/photo-1580651315530-69c8e0026377?q=80&w=1200&auto=format&fit=crop', // Replaced with Korean Food (Bibimbap) image
        isActive: true,
        comments: [],
        content: `
           <p class="leading-relaxed mb-6 text-slate-700">
             그리운 고국 땅과는 직선거리로 약 <strong>6,600 km</strong>, 비행기로도 장장 14시간을 날아야 닿을 수 있는 모스크바에서, 문득문득 한국이 그리워지는 것은 어쩔 수 없다. 🇰🇷 하지만 대부분의 날이 흐리고 춥고, 사람들마저 쌀쌀맞은 이 낯선 도시 곳곳에서도 경험할 수 있는 한국의 조각들이 있다.
           </p>

           <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏛️ 모스크바의 작은 한국, 대사관</h3>
           <p class="leading-relaxed mb-6 text-slate-700">
             먼저 이야기 해 볼 것은 실제 법적으로는 한국 영토인 <strong>주러 한국대사관</strong>이다. 사실 유학생이 특별히 대사관을 방문할 일은 없지만 나는 몇 번 가볼 기회가 있었다. 모스크바에 도착한 그 해 12월 나는 대위로 진급이 예정되어 있었다. 진급하기 전 회식 자리에서 무관보좌관님은 진급식을 챙겨주신다며 아내 한복까지 준비 놓으라고 하셨다. 그 때까지 군기가 아직 덜 빠졌던 나는 그 말을 철썩같이 믿고 아내의 한복도 한국에서 보내서 준비를 마쳤다.
           </p>
           <p class="leading-relaxed mb-6 text-slate-700">
             내가 아내의 한복을 준비했다고 말씀드리니 반은 농담이었다고 하셨지만 그래도 무관님께 말씀드려서 대위 진급식을 대사관에서 할 수 있었다. 보통은 소령 진급식 정도는 되어야 가족도 초청해서 어깨에 새로운 견장도 달아주고 하는데 운이 좋게도 아주 먼 낯선 땅에서 영광스러운 진급식을 가질 수 있었다. ✨
           </p>
           
           <div class="bg-slate-50 border-l-4 border-russia-blue p-6 rounded-r-lg my-6">
             <p class="leading-relaxed text-slate-700">
               "대사관 건물은 직사각형으로 생겼는데 가운데는 작은 직사각형의 빈 공간이 있었다. 거기에는 한국식으로 꾸며놓은 <strong>정자와 작은 연못</strong>이 있어 매우 인상적이었다. 대사관에서 근무하면 한국의 휴일과 현지 나라의 휴일을 모두 쉴 수 있다고 들었다는 말을 듣고 다음 생에는 꼭 대사관 직원이 되어야 겠다는 유쾌한 상상도 해보았다."
             </p>
           </div>

           <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🥘 그리운 맛, 한국 식당</h3>
           <p class="leading-relaxed mb-6 text-slate-700">
             한국이 그리운 이유에는 음식을 빼놓을 수 없다. 모스크바에는 한국 식당이 여러 곳 있었다. 하지만 한국 식당이라고 해서 모두 우리가 아는 대한민국의 식당은 아니니 조심할 필요가 있다. 일례로 북한 사람이 운영하는 식당이 있고, 또 러시아에 몇 세대 전에 넘어온 고려인이 운영하는 식당도 있다.
           </p>
           <p class="leading-relaxed mb-6 text-slate-700">
             보통 한국 음식이 그리울 때면 <strong>인공위성</strong>이라는 이름의 호텔 내에 위치한 한국 식당을 찾았다. 이 호텔 내에는 여러 한국 식당이 있어서 선택지도 다양했고, 작은 한국식품점이 있어서 식사를 하고 한국 식재료를 사오기도 좋았다.
           </p>
           <p class="leading-relaxed mb-6 text-slate-700">
             그 외에도 다른 한국 식당들도 있었는데 그 중에 ‘자스민’이라는 이름의 식당에서는 메뉴에도 없는 보신탕을 알음알음 알고 찾아온 손님한테 팔기도 했다. 다른 식당에서는 토요일 점심에 600루블, 당시 한화로는 약 12,000원 정도에 한식 뷔페를 먹을 수 있었다. 김밥, 떡볶이와 같은 분식부터 불고기, 잡채 등 집에서 다 만들어 먹기는 번거로운 많은 음식이 있어서 자주 다녔다. 😋
           </p>

           <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍜 고려인 식당과 북한 식당</h3>
           <p class="leading-relaxed mb-6 text-slate-700">
             그리고 한 번은 러시아 친구들과 <strong>고려인 식당</strong>에 가본 적도 있다. 대한민국의 음식과는 차이가 많이 났다. 메뉴판에는 조금 익숙한 발음의 음식이 있기도 했고 전혀 무슨 음식인지 유추할 수 조차 없는 음식도 많았다. 또한 한국 음식보다 식초를 많이 쓰는지 시큼한 맛이 나는 음식이 꽤나 있었다. 그래도 <strong>‘쿡시’</strong>라고 불리는 국수는 맛이 괜찮았다. 같이 갔던 러시아 친구들에게 이런 음식은 한국에서 결코 볼 수 없을 거라고 이야기했다.
           </p>

           <div class="bg-red-50 p-6 rounded-lg border border-red-200 my-6">
             <h4 class="font-bold text-red-900 mb-2">🚫 평양스키 고려 (북한 식당)</h4>
             <p class="leading-relaxed text-red-800">
               우리가 자주 가던 ‘아샨’이라는 대형 마트에 가는 길에는 <strong>평양스키 고려</strong>라는 음식점이 있었다. 직역하자면 ‘평양의 고려’인데 이 곳은 북한 사람이 운영하는 진짜 북한 식당이었다. 감히 들어갈 볼 엄두는 못 내고 정문을 통해 지하로 내려가는 복도만 볼 수 있었는데 요정들과 신선들이 산과 호수를 배경으로 한 아주 특이한 그림들이 걸려 있었다. 현역 군인 신분이었던 나는 괜히 꺼려지는 마음에 러시아에 있는 동안 북한 식당을 가본 적이 없지만 지금 돌이켜보면 한 번쯤은 괜찮지 않았을까 하는 생각이 든다.
             </p>
           </div>

           <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎤 학생 생활과 조언</h3>
           <p class="leading-relaxed mb-6 text-slate-700">
             모스크바에 공부하러 온 학생들도 꽤나 많은데 한국식 노래방이 있어서 스트레스를 해소하러 간다고 했다. 모스크바 국립대 한인학생회는 여러 행사를 계획하는데 몇몇 행사에 참가해서 여러 학생들 각자가 느끼고 경험하는 모스크바에 대해서도 들을 수 있었다.
           </p>
           
           <hr class="border-slate-200 my-8 w-1/3 mx-auto" />

           <p class="leading-relaxed mb-6 text-slate-700">
             해외에 살면 현지 적응과 향수 사이에서 적절한 밸런스를 잡아야 하지만 내 짧은 경험에서 비추어 보았을 때, 오히려 <strong>밸런스보다는 저공비행</strong>을 해야 한다고 말하고 싶다. ✈️ 한국이 그립다고 해서 한인 사회나 커뮤니티에만 매몰되는 것은 그리 바람직하지 않다.
           </p>

           <p class="leading-relaxed mb-6 text-slate-700">
             만약 정해진 기간을 두고 떠나온 유학길이라면, 한국은 딱 필요한 만큼만 찾고 최대한 낯선 곳에 익숙해지고 낯선 이들의 삶 속으로 깊숙이 파고드는 노력이 필요하다. 내가 만났던 한국 학생 일부는 학생회 활동에 지나치게 몰두한 나머지 학업을 뒷전으로 한 이들도 있었다. 믿고 외국에 보내준 부모님의 간섭이 없는 타국에서 밤 늦게까지 흥청망청 다니는 모습은 안타까울 따름이었다.
           </p>
        `
      },
      {
        id: 'post-106',
        title: '모스크바의 봄여름가을겨울',
        subtitle: '회색빛 우울감과 민들레 홀씨 사이',
        isActive: true,
        imageUrl: 'https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?q=80&w=1200&auto=format&fit=crop', // Moscow Winter
        content: `
          <p class="leading-relaxed mb-6 text-slate-700">
             8월에 도착한 모스크바의 날씨는 매우 좋았다. ☀️ 한국이었다면 엄청 습하고 더웠을 테지만, 모스크바는 덥지도 않았고 습하지도 않았다. 정말로 많은 사람들이 다시 오지 않을 좋은 날씨를 즐기려는 듯, 모스크바 도심 공원마다 산책 나온 사람들로 가득 차 있었다. 첫 학기는 아무래도 새로운 세상에 적응하느라 정신이 없었고 주말이라 할지라도 생각보다 해야 할 숙제들이 많아서 바빴지만 틈나는 대로 밖에 나가서 시간을 보내려고 노력했다.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
             그땐 몰랐다. 모스크바의 찬란한 시절이 얼마 남지 않았음을. ⏳
          </p>
          
          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">☁️ 회색빛 하늘과 모스크바 블루스</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
             얼마 지나지 않아 모스크바는 우리가 듣던 ☁️ <strong>회색빛 하늘</strong>을 드러내기 시작했다. 통계적으로도 모스크바는 일조량이 매우 적은 도시 중에 하나인데, 특히 겨울철에는 거의 한 달 내내 해를 구경하지 못할 수 있다. 만약 유럽이 친숙한 사람들에게는 런던의 날씨와 비슷하다고 하면 조금 더 이해가 쉬울 듯하다. 해가 떠있는 듯 아닌 듯하고 아주 소량의 비가 간간이 왔다가 갔다가 하기에 우산을 쓰기도 안 쓰기도 애매한 날씨가 일상이었다.
            </p>
            <p class="leading-relaxed text-slate-700">
               러시아인들은 웬만한 이슬비에는 우산을 펼치지 않고 묵묵히 걷는데, 그 무심한 뒷모습을 보고 있노라면 이 우중충한 하늘이 그들에겐 얼마나 익숙한 배경인지 새삼 느끼게 된다. 모스크바의 하늘이 유독 낮고 흐린 이유는 지형적인 영향이 크다. 대서양에서 불어오는 습한 공기가 거대한 러시아 평원을 가로질러 오다 보면 지형에 막히지 않고 그대로 모스크바 머리 위에 머물며 두터운 구름층을 형성하기 때문이다. 나 역시 처음에는 이 우중충한 날씨가 적응이 되지 않아 <span class="text-russia-blue font-bold">‘모스크바 블루스’</span>라 불리는 우울감에 빠지기도 했다. 하지만 시간이 가며, 이러한 모스크바 특유의 분위기를 받아들이게 되었다.
            </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">❄️ 겨울 생존 전략, 샤프카</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
             하늘이 점점 흐려지는 걸 깨달을 때면 러시아의 추위가 찾아온다. 약 11월부터 영하로 내려가고 눈이 오며 약 6개월가량이 겨울이다. 그 길고 긴 겨울을 버티기 위한 방한용품은 단순히 추위를 막는 도구를 넘어 생존 전략이다. 
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
             <strong>‘샤프카’</strong>는 러시아 하면 가장 먼저 떠오르는 털모자다. 러시아 군인 모자라고 검색하면 쉽게 찾아볼 수 있고 한국에서는 군밤 장수 모자라고 떠올리면 쉽다. 나는 겨울이 본격적으로 찾아오기 전에 <strong>이즈마일롭스키</strong>라는 시장에 가서 구매를 하여 쓰고 다녔다. 하나하나 러시아 패치를 해나가고 있었다.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🔥 밖은 춥지만 안은 따뜻해</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
             그렇다고 모스크바의 추위가 아주 못견딜 만한 것은 아니었다. 역설적이게도 밖은 매우 춥지만 실내만큼은 세상 어디보다 따뜻하기 때문이다. 내가 아는 한 모스크바의 거의 모든 건물에는 <strong>중앙식 난방 시스템</strong>이 갖춰져 있다. 국가 차원에서 관리하기에 개별 건물의 난방비가 무료이다. 그렇기에 밖에 나가면 꽁꽁 싸매고 다니는 사람들도 건물에 들어가면 훌러덩 벗고 반팔 차림으로 다니는 모습도 자주 볼 수 있다. 
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
             그리고 한국에서는 옷을 항상 가지고 다녀야 해서 불편했지만, 모스크바에서는 조금 큰 건물마다 겉옷을 보관하는 곳(가르데롭)이 있기에 건물 내에서 다닐 때는 아주 편하게 다닐 수 있다. 🧥
          </p>

          <div class="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-200 my-8">
             <h4 class="font-bold text-orange-900 mb-2">🤝 거지와 선행</h4>
             <p class="leading-relaxed text-orange-800 text-sm">
                참고로 모스크바에는 거지가 꽤 많은 편인데, 이렇게 실내 난방이 잘 갖추어져 있기에 아이러니하게도 모스크바에 얼어 죽는 거지는 거의 없다. 여담으로 러시아 사람들은 선행을 많이 베풀면 천국에 간다고 믿는다. 정교회의 문화 영향인지, 남을 돕는 행위가 자신의 영혼을 구하는 길이라 믿는 듯하다. 그렇기에 러시아 사람들은 거지를 마주칠 때 그냥 지나치지 않고 주머니의 잔돈을 선뜻 건네는 모습을 자주 보았다. 해외에 있는 거지들도 러시아 사람을 제일 좋아한다는 이야기를 들은 적이 있는데 차가워 보이는 겉모습과 달리 따뜻한 그들의 모습도 엿볼 수 있다.
             </p>
          </div>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚜 눈과의 전쟁, 그리고 진흙탕</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
             모스크바에는 제설 시스템이 잘 갖추어져 있다. 밤새 눈이 내려도 다음 날이면 언제 그랬냐는 듯 도로를 깨끗이 치워놓는다. 운이 좋다면 거대한 제설차 군단이 눈을 치우는 모습도 볼 수 있다. 하지만 진짜 문제는 그다음이다. 제설차에 의해 도로변으로 밀려난 눈더미와 차들이 밟고 지나간 눈은 순식간에 질척이는 진흙탕 더미 혹은 진흙탕으로 변한다. 💩
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
             외출을 하고 오면 더러워진 신발은 어쩔 수가 없고 바지까지도 지저분해진다. 그리고 이미 치울 수 없이 얼어버린 인도는 정말로 위험하다. ⚠️ 겨울에 외출하면 여기저기 넘어지는 사람들을 볼 수 있는데 추위로 경직된 몸이 딱딱한 바닥에 부딪히는 건 누구도 원치 않는 상황일 것이다. 게다가 넘어져서 진흙탕에 옷까지 더러워진다면 생각만 해도 끔찍하다.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌼 민들레 홀씨 흩날리는 봄</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
             모스크바에는 4월까지 눈이 온다. 더러 5월까지 오는 경우도 있지만 흔치는 않다. 봄이 오고 눈과 얼음이 녹으면 마냥 반가울 것 같지만 실상은 그리 낭만적이지 않다. 하얀 눈과 얼음에 덮여있던 도시의 지저분한 민낯이 서서히 드러나기 시작하기 때문이다. 러시아인들은 애완동물을 많이 기르고 길거리 담배에도 관대한 편인데, 겨울 내내 눈 속에 파묻혀 보이지 않던 수많은 담배꽁초와 배설물들이 녹은 눈 사이로 일제히 고개를 내민다. 🚬🐕
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
             그래도 5월이 되면 모스크바는 언제 그랬냐는 듯 푸른 빛으로 옷을 갈아입는다. 도시 곳곳에서 새싹과 꽃들이 피는데, 그중에서도 특히 <span class="text-yellow-600 font-bold">노란 민들레</span>가 정말 많았던 기억이 난다. 길가나 아파트 단지 사이사이, 심지어 보도블록 틈새까지 피어난 민들레는 모스크바의 봄을 상징한다. 
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
             5월 말이 되면 이 민들레 꽃은 하얀 홀씨로 변해 온 도시를 떠다니는데 과장을 조금 보태면 <strong>봄에 내리는 눈</strong> 같기도 했다. 꽃가루 알레르기가 있던 나는 이 기간 내내 재채기와 콧물을 달고 살았지만 그래도 이들의 생명의 기운에 기분만큼은 좋았다. 또한 도심 공원에는 형형색색의 꽃들이 만개하여 겨우내 회색빛이었던 도시를 화려하게 바꿔준다. 모스크바는 긴 겨울이 있었기에 더욱 따뜻한 봄을 맞이하는 듯했다. 🌸
          </p>

          <blockquote class="text-center font-serif text-xl text-russia-blue my-10 border-y-2 border-slate-100 py-8 leading-relaxed">
            "모스크바에서 지낸지도 어느덧 1년이 되었다.<br/>
            처음에는 차갑고 무뚝뚝하게만 느껴졌던 모스크바와 그 안의 사람들도,<br/>
            이제 겉으로 보이는 모습뿐만이 아니라 그 이면의 온기까지<br/>
            있는 그대로 받아들이기 시작했다. "
          </blockquote>
        `,
        comments: []
      },
      {
        id: 'post-107',
        title: '예비학부 마무리, 그리고',
        subtitle: '맥주 한 캔의 용기와 빌렛(Ticket)의 운명',
        isActive: true,
        imageUrl: 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1200&auto=format&fit=crop', // Exams/Study/Writing
        content: `
          <p class="leading-relaxed mb-6 text-slate-700">
            전체적인 교육과정으로 보았을 때, 모스크바 국립대의 예비학부는 노력은 조금 필요하지만 통과하기 대단히 힘든 과정은 아니었다. 물론 난이도는 주관적일 수 있지만 주변을 둘러보면 대략적인 수준을 가늠할 수 있다. 일례를 들자면, 수업을 절반 정도 빼먹거나 스스로 포기하지 않는 한 대부분 무사히 졸업할 수 있다. 
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
            예비학부의 커리큘럼 자체가 많은 수업과 상당한 양의 숙제를 포함하고 있어, <span class="bg-yellow-100 px-1">학생들의 멱살을 잡고서라도 끌고 간다</span>라는 느낌이 강하다. 그도 그럴 것이 예비학부는 외국인 학생들의 학비로 운영되는 기관이기에, 과정이 너무 어려워 낙오자가 발생하면 입학생 감소로 이어져 재정에 직접적인 타격이 오기 때문일 것이라 짐작한다. 매 학기마다 중간고사는 없이 기말고사만 있고 70점만 넘으면 합격이었다. 💯
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍻 맥주 한 캔의 용기</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            나는 러시아어, 수학, 물리 이렇게 세 과목을 수강했다. 러시아어는 말하기와 쓰기를 비롯해, 러시아 어학능력 평가 시험인 <strong>토르플(TORFL)</strong> 형식의 사지선다의 문법 문제를 풀었다. 
          </p>
          
          <div class="bg-blue-50 border border-blue-100 p-6 rounded-lg my-6">
            <p class="leading-relaxed text-slate-700">
               러시아어 말하기 시험이 있던 날에는 같은 반이었던 지인과 긴장을 좀 풀자는 의미에서 시험을 보기 전에 학교 근처 마트에 가서 <strong>맥주 한 캔</strong>을 사서 나눠먹었다. 🍺 지금 생각하면 제정신이 아니었던 것 같지만, 당시에는 그 맥주 덕분에 말이 더 술술 나와서 시험을 더 잘 본 것 같다며 지인과 함께 이야기했던 기억이 난다. 현지 적응은 아주 잘 되어가고 있다는 생각과 함께, 이제는 시험조차도 <strong>불곰 스타일</strong>로 임하는 내 자신이 점점 자랑스러워졌다. 🐻
            </p>
          </div>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">📐 수학과 물리, 그리고 디펜스</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            수학 시험에는 주관식 문제들이 나왔었고 풀이과정과 정답을 모두 맞춰야 했다. 답만 맞으면 풀이과정은 어떻든 상관이 없던 한국 대학수학능력 시험 평가에 길들여진 나에게는 시험조차 추가적인 정성을 요구하였다. 다행히 후반부에 배웠던 이중적분 같은 고급 과정은 출제되지 않아 나름 수월하게 풀 수 있었다. 나름 한국이 수학 강국이라고 생각하고 있었는데 러시아도 만만치 않음을 느낄 수 있었다. 
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
            물리 시험은 두 종류가 있었는데 첫 번째는 수학시험과 비슷하게 문제를 풀고 풀이과정과 답을 적는 것이었고, 다른 하나는 일종의 <strong>‘구술시험(디펜스)’</strong>였다. 수준이 높지는 않았으나 다른 연구자들의 연구들을 읽고 짧은 리포트를 준비해 발표해야 했다. 그게 끝이 아니라 발표 중에 시험 감독의 질문에 잘 답변하여야 합격을 받을 수 있었다. 🗣️
          </p>

          <p class="leading-relaxed mb-6 text-slate-700">
            대학 시절 화학을 전공했고 핵물리학이라는 전혀 생소한 분야에 대해 아직 대학원도 진학하지 않은 나에게 작은 리뷰 리포트를 쓰는 것조차도 매우 버거웠다. 당연히도 여전히 익숙지 않은 러시아어도 큰 걸림돌이었다. 주제는 <strong>드브로이의 입자-파동 이중성</strong>으로 정했다. 그 당시 나에게 모든 물질은 입자도 파동도 될 수 있다는 아주 충격적인 내용이어서 이를 리뷰하는 리포트를 썼지만 지금에 와서 돌이켜 보면 고등학교 물리 후반부의 한 부분을 요약한 것에 지나지 않나 싶다. 
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
             스스로도 부족한 리포트라고 생각했던 것인지 발표와 질의응답 과정에서 무척 긴장을 했다. <em>'러시아어 시험 볼 때처럼 맥주를 한 잔 마시고 왔어야 했다'</em>는 생각이 머리를 스쳐 지나갔다. 그래도 어찌저찌 시험은 잘 마칠 수 있었다. 
          </p>

          <hr class="border-slate-200 my-8 w-1/3 mx-auto" />

          <p class="leading-relaxed mb-6 text-slate-700">
            여튼 생각보다 점수는 고르게 잘 나와서 선생님들에게 칭찬도 받고 작은 성취감도 느낄 수 있었다. 지금 돌이켜보면 선생님들께도 더욱 진심으로 감사의 인사를 전했어야 했다고 생각한다. 
          </p>
          <blockquote class="border-l-4 border-russia-blue pl-4 py-2 italic text-slate-700 bg-slate-50 mb-8">
            "전 세계 각지에서 온 아주 다른 학생들을 끈기 있게 지도해 준 그들에게 이 글을 빌어서라도 잠시 감사하다는 말을 전하고 싶다. 🙏"
          </blockquote>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎓 본게임을 향하여</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            예비학부는 이 졸업시험으로 마무리되겠지만 예비학부 일뿐, <strong>‘본게임’</strong>이 아직 시작도 되지 않았다는 것을 잘 알고 있었다. 이 다음은 대학교 진학할 학과 사무실에 연락을 하여 입학시험에 대한 안내를 받고 시험을 준비하는 것이었다. 내 경우, 예비학부의 졸업시험은 5월 중순에 있었고 그 후 7월 즈음에 본학부의 입학시험이 예정되어 있었기에 약 두 달간의 시험을 준비할 시간이 있었다. 
          </p>

          <p class="leading-relaxed mb-6 text-slate-700">
            약 두 달이라는 시간이 있었기에 차분히 준비하면 되었지만 인터넷으로 다운로드 받은 기출문제는 영 사람이 풀 수 있는 것처럼 생기지 않았다. 😵 당시 내 실력으로는 문제를 읽고 이해하는 것조차 힘들었다. 다행히 모터쇼 티켓을 주었던 지인분께서 그 학과 박사과정으로 먼저 다니고 계셨기에 고맙게도 과외 형식으로 이것저것 알려주셨다. 
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
            무언가 어려운 것을 설명할 때 그분의 <strong>반짝반짝 빛나던 눈</strong>과 <em>“아직 우리는 많은 걸 알지 못한다”</em>는 그분의 말이 아직도 선명하게 기억에 난다. 진정한 학자란 이런 걸까 나도 언젠간 학자다움을 조금이나마 갖출 수 있을까 하는 생각을 했지만 당장은 시험에 집중해야 했다. 
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🇷🇺 러시아의 독특한 시험 방식: 빌렛 (Билет)</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            입학시험은 예비학부에서 치렀던 시험과는 다르게 실제 러시아인들이 시험을 보는 방식으로 진행이 되었다. 러시아의 시험은 <strong>“빌렛(영어로는 Ticket)”</strong>이라는 독특한 시스템을 가지고 있다. 🎫
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            입학시험은 예비학부에서 치렀던 시험과는 다르게 실제 러시아인들이 시험을 보는 방식으로 진행이 되었다. 러시아의 시험은 <strong>“빌렛(영어로는 Ticket)”</strong>이라는 독특한 시스템을 가지고 있다. 🎫
          </p>
          <ol class="list-decimal list-inside space-y-3 text-slate-700">
              <li>교수님이 시험 전에 예상 문제 리스트를 학생 수의 3-4배, 많게는 10배 넘게 미리 나눠준다. (30~100문제)</li>
              <li>시험 당일 학생은 교수가 보는 앞에서 임의로 문제지를 한 장 선택한다. (뽑기 🎲)</li>
              <li>이 과정에서 학생은 어떤 문제를 고르게 될지 알 수가 없다. </li>
          </ol>
          
          <br>
          <p class="leading-relaxed mb-6 text-slate-700">
               다행히 모든 문제에 대해서 공부를 했다면 상관없지만, 그렇지 않고 일부만 공부했다면 운 좋게 아는 문제를 뽑으냐 아니냐에 따라 희비가 엇갈리는 구조다. 러시아인들 사이에서는 100문제 중 99문제를 공부하면 꼭 나머지 한 문제를 뽑게 된다고 하여 공부를 안 하는 학생들도 있다는 우스갯소리가 있다. 😂
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            그렇게 문제를 뽑고 나면 학생들 스스로 준비할 시간이 주어진다. 이 시간에 학생들은 종이와 펜을 쓸 수 있고 종이에 자신이 발표할 내용은 정리하여 작성하고 호명이 되면 교수와 1대 1로 앉아서 발표를 하고 교수가 관련 질문을 하고 학생의 발표와 답변을 종합하여 점수를 결정한다. 
          </p>

          <div class="mb-8">
            <h4 class="font-bold text-slate-800 mb-2">📊 러시아의 학점 스케일 (5점 만점)</h4>
            <ul class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
              <li class="bg-red-50 text-red-800 p-2 rounded border border-red-100">
                <strong>2점</strong><br/>미흡 (Fail)
              </li>
              <li class="bg-yellow-50 text-yellow-800 p-2 rounded border border-yellow-100">
                <strong>3점</strong><br/>양호 (Pass)
              </li>
              <li class="bg-blue-50 text-blue-800 p-2 rounded border border-blue-100">
                <strong>4점</strong><br/>우수 (Good)
              </li>
              <li class="bg-green-50 text-green-800 p-2 rounded border border-green-100">
                <strong>5점</strong><br/>탁월 (Excellent)
              </li>
            </ul>
            <p class="mt-2 text-xs text-slate-400 text-center">
              * 1점은 '몽둥이'나 '말뚝'을 연상시킨다 하여 실제로는 주지 않습니다.
            </p>
            <br>
            <p class="leading-relaxed mb-6 text-slate-700">
             점수는 5단계 스케일을 적용하고 있는데 실제로는 1점은 주지 않고 2점부터 5점까지가 부여된다. 1점을 주지 않는 이유는 숫자 1이 몽둥이나 말뚝을 연상할 수 있다고는 해서 그렇다 한다. 2점은 미흡, 3점은 양호, 4점은 우수, 5점은 탁월이라고 러시아어로 불리지만 사실 2점은 낙제라 주는 경우가 거의 없고 3점만 맞아도 양호가 아닌 요구 수준에 못 미친다고 볼 수 있다. 
            </p>
          </div>

          <p class="leading-relaxed text-xl font-bold text-slate-800 text-center mt-12 mb-8">
            지인분의 노력 덕분일까 다행히 입학시험도 통과하였고,<br/> 
            이제 정말 ‘예비’게임이 아닌 <span class="text-russia-blue">‘본게임’</span>을 시작할 시간이 되었다. 🚀
          </p>
        `,
        comments: []
      }
    ]
  },
  {
    id: 'year2',
    title: '2년차, 대학원 입학',
    description: '작성 중...',
    isSinglePost: false,
    isActive: false,
    posts: []
  },
  {
    id: 'year3',
    title: '3년차, 석사 과정을 마치며',
    description: '작성 중...',
    isSinglePost: false,
    isActive: false,
    posts: []
  },
  {
    id: 'russia_travel',
    title: '러시아 여행',
    description: '작성 중...',
    isSinglePost: false,
    isActive: false,
    posts: []
  },
  {
    id: 'eurasia_travel',
    title: '유라시아 여행',
    description: '작성 중...',
    isSinglePost: false,
    isActive: false,
    posts: []
  },
  {
    id: 'feelings',
    title: '내가 느낀 러시아',
    description: '작성 중...',
    isSinglePost: false,
    isActive: false,
    posts: []
  },
  {
    id: 'appendix',
    title: '부록',
    description: '작성 중...',
    isSinglePost: false,
    isActive: false,
    posts: []
  },
  {
    id: 'epilogue',
    title: '에필로그',
    description: '작성 중...',
    isSinglePost: true,
    isActive: false,
    posts: []
  }
];

export const AUTHOR_NOTE = {
  title: "작가의 말",
  content: `안녕하세요, 저의 웹사이트에 오신 것을 환영합니다.\n\n이곳은 제가 러시아에서 3년 동안 석사 과정을 밟으며 겪었던 경험과 감정, 그리고 유라시아 대륙 곳곳을 누볐던 여행의 기록을 담은 공간입니다.\n\n현재 이 기록들의 제목을 <strong>'유라시아 견문록'</strong>이라 붙여두었지만, 개인적으로는 아직 딱 맞는 옷을 입히지 못한 기분이 들어 글을 써 내려가며 계속 고민할 예정입니다. 혹시 글을 읽으시다가 이 공간에 어울리는 더 좋은 제목이 떠오른다면 언제든 추천 부탁드립니다.\n\n제가 이 기록들을 공유하는 이유는 거창한 성과를 자랑하기 위함이 아닙니다. 낯선 땅에서의 도전이 두렵기도 했지만, 결국 <strong>'누구든 할 수 있다'</strong>는 응원의 메시지를 전하고 싶었습니다. 한 개인의 소소하고도 치열했던 날들이 누군가에게는 작은 용기가 되기를 바랍니다.\n\n프롤로그부터 에필로그까지, 차근차근 저의 발자취를 따라와 주신다면 더할 나위 없이 기쁠 것입니다. 여러분과의 소통은 언제든 환영합니다. 궁금한 점이 있거나 이야기를 나누고 싶다면 댓글을 남겨주시거나, 아래 메일로 편하게 연락해 주세요.\n\nEmail: onestark1204@naver.com\n\n감사합니다.`,
  author: "JNP"
};