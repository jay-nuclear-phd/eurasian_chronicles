import { Category } from '../types';
import Picture1 from '../images/Picture1.png';
import Picture2 from '../images/Picture2.png';
import Picture3 from '../images/Picture3.png';

export const year1Category: Category = {
  id: 'year1',
  title: {
    ko: '1년차, 예비학부',
    en: 'Year 1, Preparatory Program',
  },
  shortTitle: {
    ko: '1년차',
    en: 'Year 1',
  },
  description: {
    ko: '낯선 땅, 첫 번째 겨울',
    en: 'A Strange Land, The First Winter',
  },
  isSinglePost: false,
  isActive: true,
  posts: [
    {
      id: 'post-100',
      title: {
        ko: '새출발',
        en: 'A New Beginning',
      },
      subtitle: {
        ko: '러시아로 향하는 비행기, 그리고 혹독한 신고식',
        en: 'The Flight to Russia, and a Harsh Initiation',
      },
      imageUrl:
        'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop',
      isActive: true,
      comments: [],
      content: {
        ko: `
          <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
            개인적인 사정으로 아내보다 이틀 먼저 출국하게 되었다. 인천국제공항에는 어머니와 동생이 나와주었고 작별을 한 뒤 비행기에 몸을 실었다. 군인정신이 몸에 밴 나는 예비학부를 포함한 3년간의 석사과정을 마쳐야 하는 임무(?)를 완수해야 했기에 비장한 마음으로 비행기 좌석에 앉았다. 하지만 부모형제, 친구들을 못 본다는 생각이 나서 그런지 낯선 땅에 대한 막연한 두려움 때문인지 눈물이 났다. 비행기 출발 전 기내방송이 나왔을 때가 ‘드디어 정말 떠나는구나’ 하는 마음에 제일 많이 울었다.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">비행기 안에서의 눈물과 와인</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            기분이 조금 안정되나 싶을 때, 비행기 내에는 기내식이 나왔다. 승무원의 식사와 함께 어떤 음료를 마시겠냐는 질문에 나는 뭔가에 이끌린 듯 와인을 달라고 했다. 왠지 알콜이 조금 도움이 되지 않을까 하는 마음에서였다. 하지만 결과는 정반대였다. 와인을 마시고 나니 한 번 더 이유 모를 슬픔과 두려움이 울컥했다. 가까스로 스스로를 다독이고 나니 잠이 몰려왔다. 14시간의 비행 동안 기내식은 두 번 나온다. 비행기가 이륙하고 안정된 고도에 접어들었을 때와 목적지 도착 전이다. 첫 기내식을 먹고 다음 기내식이 나올 때까지 잤으니 꽤나 잘 잔 셈이다. 두 번째 기내식이 나왔을 때도 비슷한 일이 반복되었다. 또 와인을 주문했고 와인과 식사를 마치고는 또다시 한 번 울컥하고는 착륙할 때까지 잠을 잤다. 먹고 울고 자는 걸 반복하니 14시간의 비행이 짧게 느껴졌고 어느새 모스크바 셰레메티예보 국제공항에 도착해 있었다.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">모스크바 도착과 기숙사 생활</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            한국에서 몇 개월 공부했던 러시아어로는 모스크바 현지인의 말을 거의 알아듣지 못했다. 그래도 공항에서 엄청나게 많은 사람들이 택시 호객행위를 한다는 건 알 수 있었다. 나는 미리 모스크바 국립대 학생회의 입학안내 서비스를 신청했기에 마중 나온 사람이 있었고 안전하게 모스크바 시내 근처에 있는 기숙사까지 일행과 이동할 수 있었다. 공항에서 기숙사까지는 약 한 시간 조금 넘게 걸렸는데 택시 안에서 본 모스크바의 풍경은 모든 게 다 신기할 따름이었다.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
            도착한 기숙사는 지하철이 바로 옆에 있는 역세권 중의 역세권이었다. 말이 기숙사지 사실상 방이 두 개인 아파트였다. 각 방에는 두 명씩 들어갈 수 있었으니 한 호수에는 학생 네 명까지 살 수 있었다. 방 하나에는 나와 나보다는 대여섯 살 어린 룸메가 들어갔고, 다른 방에는 운 좋은 한국인이 혼자 방을 쓰게 되었다. 방은 온통 오래된 목재로 되어 있었다. 나무로 된 침대에는 침대보와 담요가 있었는데 모두 정말 너무 오래되어서 사용할 수가 없었다. 특히 담요는 엄청 두껍고 까끌해서 바로 옷장 구석에 보관해 두었다.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
            한국인의 눈에는 턱없이 추레하고 더러워 보여도 해당 기숙사는 그나마 깨끗하게 관리가 잘 된 편이라고 들었다. 다른 기숙사에는 화장실 변기에 엉덩이를 대고 앉는 물건이 없는 경우도 많았고 바퀴벌레도 나오는 경우도 많다고 한다. 그리고 한 방에 6명까지도 들어가야 하는 경우도 있다고 하는데 책상은 4개 밖에 없어서 두 명은 방에서 공부를 할 수 조차 없었다. 상대적으로 깨끗한 방과 2인실의 기숙사에서 살게 된 우리는 정말 운이 좋은 편이었다.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">석회수와 낯선 첫날밤</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            방을 조금 둘러보고는 당장 급한 물부터 해결을 해야 했다. 대부분의 유럽처럼 수도꼭지를 틀면 나오는 물은 모두 석회질이기에 요로결석의 이유로 함부로 마시지 말라고 했다. 수돗물을 유리컵에 받으면 둥둥 떠다니는 흰색의 부유물이 보였고, 물을 끓이거나 증발시키면 테두리 부분이 허옇게 남았다. 누군가는 그래도 우리 몸에는 괜찮다고 하는 사람들도 있었지만 정말 마시고 싶지 않았다. 필요한 물과 간식을 샀고, 잠시 혼자 밖에 나가 모스크바의 밤하늘 아래 잠시 생각에 잠겼다. ‘이제 진짜 러시아 생활을 시작하는구나. 과연 어떤 모험이 기다리고 있을까’, 설레는 마음과 미지의 불안함이 교대로 나를 어지럽히던 밤이었다. 별로 아늑하지 못한 기숙사에서의 첫날밤이었지만 하루 종일 새로운 곳에서의 생활에 잔뜩 긴장했다가 마음이 놓여서인지 잠은 잘 잤다.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">관료주의와 행정 절차</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            러시아의 대학/대학원에 진학하기 위해선 예비학부를 거치는 것이 일반적이었다. 예비학부를 등록하려면 러시아어 공증을 받고 여권 복사본을 러시아어로 번역하여 제출해야 했다. 다른 나라의 공증과 번역은 인정해 주지 않기에, 아무리 대한민국 국방부가 보증하고 국제여권이 증명하더라도 구소련의 잔재가 가득한 러시아의 낡은 행정 시스템 앞에서는 무용지물이었다. 다음으로는 대형마트에 가서 필요한 물품들을 구입했다. 특히 이불과 베개는, 러시아 생활이 아무리 험난하더라도 최소한 잠자리만큼은 나를 배신하지 않기를 바라는 마음으로, 최대한 포근하고 푹신한 것으로 신중히 골랐다.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">선배의 굴욕과 택시 사기</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            아내는 예정대로 내가 러시아에 오고 이틀 뒤에 왔다. 그래도 이틀 먼저 러시아에 온 ‘선배’로서 어깨에 힘을 잔뜩 주고 의기양양하게 공항으로 향했다. 겨우 이틀 만에 보는 거였지만 심적으로 의지할 사람이 생겨서 그런지 아내가 매우 반가웠다. 내가 오는 날 도와준 사람의 말로는 3만원 이상 절대 주지 말라고 해서 호객행위 하는 사람들이 금액을 부를 때마다 거절했다. 하지만 어떤 호객꾼이 곧잘 3만원에 해주겠다고 하여 이 호객꾼에게 가격을 지불하고 그 택시를 탔다. 그때만 해도 모든 게 잘 풀리나 싶었다. 하지만 이건 러시아를 만만하게 본 크디큰 오산이었다.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
            일절 말이 없던 택시기사는 기숙사에 도착하니 돌연 택시비를 요구했다. 택시비를 이미 냈다고 하니, 그건 중계료이고 택시비가 18만원이 나왔으니 내라고 한다. 아는 한국 사람에게 전화해서 도움을 요청했으나 역시 쉽지 않았다. 이런 택시기사들이 러시아 마피아와도 연결되어 있는 경우도 있다고 하기도 하고, 이제 막 도착했는데 문제를 일으키고 싶지 않아 비용을 지불할 수밖에 없었다. 흐린 하늘과 추운 날씨, 불친절한 사람들, 나의 멍청함으로 인한 사기, 이 모든 것들이 러시아의 첫인상을 망치기에 충분했다. 이제 시작이라고 생각하니 앞으로 남은 3년이 막막하기도 했다.
          </p>
        `,
        en: `
          <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
            Due to personal reasons, I left for Russia two days before my wife. My mother and younger brother saw me off at Incheon International Airport. As a soldier at heart, I sat in my seat with grim determination to complete my three-year mission, including the preparatory program. However, tears fell, perhaps from the thought of leaving my family and friends or a vague fear of this unfamiliar land. I cried the most when the cabin announcement played before departure, realizing I was finally leaving.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Tears and Wine on the Plane</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            Just as I started to calm down, the in-flight meal was served. When asked for a drink, I instinctively asked for wine, hoping alcohol might help. It had the opposite effect. After drinking, another wave of inexplicable sadness and fear hit me. After barely composing myself, I fell asleep. During the 14-hour flight, two meals are served. I slept from the first meal until the second, which means I slept quite well. The same thing happened with the second meal. I ordered wine again, felt emotional again, and slept until landing. Eating, crying, and sleeping made the 14-hour flight feel short, and soon I arrived at Moscow Sheremetyevo International Airport.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Arrival in Moscow and Dormitory Life</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            With the little Russian I had studied for a few months, I could barely understand the locals. However, I could tell there were many taxi touts at the airport. Having pre-arranged a pickup service from the MSU student council, I safely reached a dormitory near downtown. The hour-long drive from the airport to the dorm was filled with fascinating new sights.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
            The dormitory was in a prime location right next to a subway station. It was essentially a two-room apartment unit. Each room housed two people, meaning up to four students per unit. I shared a room with a roommate six years younger than me. The room was filled with old wood furniture. The wooden beds had linens and blankets so old they were unusable. The blankets were thick and scratchy, so I tucked them away in the closet.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
            Though it looked humble to Korean eyes, this dorm was considered well-maintained. In others, you had to bring your own toilet seats or deal with cockroaches and six roommates sharing a room with only four desks. We were quite lucky to have a relatively clean room for two.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Hard Water and the First Night</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            The first urgent matter was the water. Like most of Europe, the tap water was hard, and I was warned not to drink it due to kidney stones. White particles floated in a glass of water, and boiling it left a white ring. I really didn't want to drink it. After buying water and snacks, I stood under the Moscow night sky. "So, life in Russia truly begins. What adventures await?" It was a night of alternating excitement and anxiety. Despite the not-so-cozy dorm, I slept well after a long day of tension.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Bureaucracy and Administrative Procedures</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            Registering for the preparatory program required notarized translations of my passport into Russian. Documents from other countries, no matter how official, were useless against the old Russian administrative system—a remnant of the Soviet era. I went to a supermarket to buy necessities, choosing the softest blankets and pillows, hoping at least my bed wouldn't betray me during this tough journey.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">A Senior's Humiliation and the Taxi Scam</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            My wife arrived two days later. I headed to the airport with the pride of a "senior" who had arrived earlier. I was so happy to see her. However, a taxi scam ruined the mood. A tout offered a ride for 30 dollars, but upon arrival, he demanded 180 dollars, claiming the first 30 was just a brokerage fee. Fearing possible mafia connections, I had to pay. Gloomy skies, cold weather, unfriendly people, and a scam—the first impression of Russia was marked by anger and new resolve.
          </p>
        `,
      },
    },
    {
      id: 'post-101',
      title: {
        ko: '모스크바가 모스크바 했다',
        en: 'Moscow will be Moscow',
      },
      subtitle: {
        ko: '기숙사 생활과 러시아의 이면',
        en: 'Dorm Life and the Other Side of Russia',
      },
      imageUrl:
        'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop',
      isActive: true,
      comments: [],
      content: {
        ko: `
          <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
            내 예비학부 등록은 모스크바 국립대 학생회에서 도와줘서 잘 처리가 되었다. 이제 그때의 경험을 되살려서, 그래 봐야 고작 이틀 전이지만, 아내의 예비학부 등록도 도와줬다. 예비학부에서는 여러 기숙사를 배정해 주는데 등록과정에서 우리가 부부임을 밝혔더니 다행히도 같은 기숙사에 배정을 해주었다. 아내가 등록할 당시 그들이 제안한 기숙사는 부부가 같은 방에서 지낼 수 있는 가족 전용은 아니었지만, 가족기숙사보다 오히려 더 깨끗하다는 말과 저렴하다는 말에 솔깃해진 우리는 예비학부 1년 간은 해당 기숙사에 머물기로 했다.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">부부 기숙사와 애틋한 힐링</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            우리 기숙사는 지하철역에서 걸어서 1-2분이면 도착하는 초역세권이었다. 아내는 나와는 다른 층에 2인실 방을 배정받았는데 다행히 오기로 했던 룸메가 오지 않는 덕에 아내는 넓은 방을 혼자 쓰게 되었다. 공부해야 하는 시간이 많아 서로 바빴지만, 틈이 날 때마다 아내 방에 놀러가는 것이 최고의 힐링이었다. 지금 생각하면 애틋하기까지 하다.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">옆 방의 미스터리: 히키코모리 친구</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            우리가 머물었던 기숙사는 한 호수에 두 개의 방이 있었는데, 아내의 옆 방에는 일본인 여학생이 살고 있었다. 그 학생은 은둔형 외톨이, 속칭 '히키코모리'로 보였다. 주방과 화장실을 아내와 같이 쓰는데 마주치는 일이 거의 없고 계단에서 마주쳤더니 '스미마셍'하며 도망쳤다. 주방을 쓰지도 않았고 방에서 조차 잘 나오지도 않았다. 덕분에(?) 아내는 기숙사를 거의 단독주택처럼 편하게 사용할 수 있었다. 이 일본인 친구는 무슨 사연으로 먼 러시아까지 왔는지는 모르겠지만 잘 마치고 갔길 바랐다.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">새로운 인연과 현지인 패치</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            나의 룸메이트 P군은 키도 훤칠하고 인물도 좋았다. 영어도 무척이나 잘했고 사교성도 좋아 무척 마음에 들었다. 그 외에도 공항에서 만났던 S양 등과 함께 좋은 추억을 많이 쌓을 수 있었다. 한국 친구들뿐만 아니라 한국어를 배우는 러시아 친구들도 사귀게 되었다. 러시아에서는 구글 대신 얀덱스(Yandex)가 네이버 같은 역할을 하고, VK가 카카오톡과 비슷하다. 얀덱스 택시, 얀덱스 지도 등의 앱을 설치하면서 나도 서서히 러시아 현지인 패치를 해 나가고 있었다.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">학생 신분의 양면성</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            러시아에서는 학생이라는 신분이 조금 무시받는 분위기가 있다. 어른으로 대접받지 못하고 부당한 훈계나 욕설을 당하기도 한다. 물론 혜택도 많다. 관광지 할인은 물론, 한 달에 만원도 안 되는 금액으로 대중교통을 무제한 이용할 수 있다. 이런 할인은 정말 어처구니가 없는 곳에서도 적용되었다. 한번은 경찰에게 차선 위반으로 걸렸는데도 학생증을 보여주니 벌금(혹은 뇌물)을 할인해주기도 했다.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">사감의 훈계와 "에또 모스크바"</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            한번은 실수로 열쇠를 방에 두고 나왔다가 사감에게 10분 동안 훈계를 들어야 했다. 이런 러시아인들의 '약강강약' 태도는 러시아에 머무는 동안 나의 심기를 자주 건드렸다. 러시아인들은 이런 상황에서 "Это Москва (This is Moscow)"라는 말을 자주 한다. 좋은 뜻이든 나쁜 뜻이든 "모스크바는 원래 그러니 그러려니 해라"라는 의미다. 요즘 말로 바꾸면 "모스크바가 모스크바 했네" 정도일 것이다.
          </p>
        `,
        en: `
          <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
            My registration for the preparatory program went smoothly with the help of the MSU student council. Using that experience, I helped my wife register just two days later. We revealed we were a couple, and fortunately, we were assigned to the same dormitory. Though it wasn't a family dorm where we could share a room, we chose it because it was cleaner and cheaper than the designated family units.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Married Dorm Life and Healing Moments</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            Our dormitory was in a prime location, a 1-2 minute walk from the subway. My wife was assigned a double room on a different floor, but since her roommate never showed up, she had the spacious room to herself. Despite our busy study schedules, visiting her room was the best form of healing. Looking back, it feels quite poignant.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">The Mystery of the Next Room</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            Our unit had two rooms; my wife's neighbor was a Japanese student who seemed to be a 'hikikomori' or a recluse. They shared a kitchen and bathroom, but they rarely met. If they crossed paths on the stairs, she would say 'Sumimasen' and run away. She never used the kitchen and was so quiet it was hard to tell if she was in. Consequently, my wife enjoyed the unit almost like a private house. I hope she finished her studies well.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">New Connections and Local Patching</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            My roommate, P, was tall, handsome, and sociable. I liked him a lot. Along with other friends like S, we made many great memories. I made Korean friends and even Russian friends who were learning Korean. In Russia, Yandex acts like Naver, and VK is like KakaoTalk. By installing Yandex Taxi and Yandex Maps, I was gradually "patching" myself into the local Russian environment.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">The Double-Edged Sword of Student Status</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            Students in Russia can sometimes be looked down upon, receiving unfair lectures or even insults. However, the benefits are great. Beyond tourist discounts, unlimited public transport costs less than 10 dollars a month. This discount even applied in absurd places; once, I got a "discount" on a bribe for a traffic violation just by showing my student ID.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Supervisor Lectures and "Eto Moskva"</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            Once, I left my keys in the room and had to endure a 10-minute lecture from the supervisor. This "strong against the weak, weak against the strong" attitude often annoyed me. In such situations, Russians say "Это Москва" (This is Moscow). It means "That's just how it is here, so accept it." It's essentially saying, "Moscow being Moscow."
          </p>
        `,
      },
    },
    {
      id: 'post-102',
      title: {
        ko: '다름을 이해하기',
        en: 'Understanding Differences',
      },
      subtitle: {
        ko: '러시아어와 사람들, 그 속에서 배운 것들',
        en: 'The Russian Language, Its People, and What I Learned Among Them',
      },
      imageUrl:
        'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop',
      isActive: true,
      comments: [],
      content: {
        ko: `
          <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
            여러모로 러시아에서의 생활은 ‘다름’이라는 가치에 대해 일깨워준 소중한 경험이었다. 막연히 다르다기보다 어떻게 다른지, 러시아어와 러시아인들의 다름에 대해 일부를 소개하고자 한다.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">질문하는 방법과 강세</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            러시아어는 영어라기보다 일본어와 비교해도 아주 다른 언어다. 일단 의문문의 강세가 마지막에 있지 않고 묻고자 하는 단어에 있다. 예를 들어 "너 학교에 다녀왔니?"를 묻는다면 어조만 바꿔서 세 가지 의미로 물어볼 수 있다. 다른 사람이 아닌 '네가' 갔는지, 간 곳이 '학교'인지, 아니면 '행위' 자체를 확인하는지에 따라 강세가 달라진다. 배우다 보면 금방 익숙해지지만, 이렇게 안 쓰고도 대화가 가능한 다른 언어들이 더 신기하게 느껴질 때도 있었다.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">없는 듯 있는 어순</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            러시아인들에게 어순이 있냐고 물어보면 없다고들 말한다. 실제로 문법적으로는 거의 모든 어순이 가능하다. 예를 들어 "난 너를 사랑해"라는 문장은 러시아어로는 모든 단어 배열이 가능하다. 단어 3개를 나열하는 방법은 6가지가 되지만 실제로는 한국어와 같은 어순을 주로 쓴다. 동사에 주어 정보가 포함되어 있어 생략의 자유도가 높지만, 아무렇게나 나열하면 러시아인들이 핀잔을 주기에 자연스러운 어순을 익히는 노력이 필요하다.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">러시아어의 반말과 존댓말</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            거친 불곰 형누님들 같으나 러시아어에도 존댓말이 있다. 다만 한국어와 다른 점은 기준이 '친근함'이라는 것이다. 가족끼리는 할머니 할아버지라도 절대로 존댓말을 쓰지 않는다. 처음에 이 문화를 몰랐을 때는 예의 없다고 생각하기도 했다. 이성 사이나 공적으로 만난 상대에게는 존칭을 쓰지만, 식당 직원이 나에게 '너'라고 하는 것은 친근함의 표시니 기분 나빠할 필요는 없다. 하지만 나는 러시아를 떠날 때까지 심기가 불편했다.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">이름과 부칭 부르기</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            러시아 사람을 부를 때는 짧은 이름을 쓴다. 아나스타샤는 나스쨔, 알렉산드르는 사샤로 부르는 식이다. 다만 공식 석상이나 존대를 하기 위해서는 이름과 부칭(아버지의 이름)을 같이 부른다. 영어의 미스터나 미스 대신 '이반 세르게예비치(세르게이의 아들 이반)'와 같이 부르는 것이 예의다.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">이방인을 대하는 태도</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            모스크바 공항에 내려서부터 러시아인들의 불친절은 과장이 아님을 알았다. 그들은 모르는 이방인에게 친절할 필요가 없다고 생각한다. 하지만 일면식이라도 생기면 굉장히 예의 바르고 친절해진다. 거리의 막말꾼들이 기차에서 만나면 먹을 것도 나눠주는 친절한 사람이 된다. 그들은 외세 수탈의 역사 때문에 경계심이 강하고, "모르는 사람에게 미소 짓는 건 바보다"라는 대문호 푸쉬킨의 말도 이들의 태도에 영향을 주었다고 한다.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">웃음에도 번역이 필요한 러시아 유머</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            재밌게 공부해보려 러시아 농담집을 샀지만 어디서 웃어야 할지 몰랐다. 친구는 빵 터지는데 나는 설명을 듣고서야 겨우 이해했다. 웃음 코드의 차이는 단지 언어뿐만 아니라 문화 전반에서 비롯되는 것임을 깨달았다. 웃음에도 번역이 필요하다는 사실을 말이다.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">추위와 장비빨</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            러시아인들이 추위에 강하다는 건 반은 틀린 말이다. 실내 난방이 워낙 잘 되어 있고, 밖에서는 완벽한 방한 용품을 갖추기 때문에 버티는 것이다. 러시아인들이 추위에 강한 이유는 체질이 아니라 '장비빨'일지도 모른다. 또한 여자를 부를 때 '할머니'나 '아줌마'라고 부르는 건 큰 실례다. 무조건 '제부시카(아가씨)'라고 불러야 한다.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">다름을 인정하는 그릇</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            그들은 매우 달랐다. 그렇다고 못 살 정도는 아니었지만 친근하다고 느끼기에도 무리가 있었다. 하지만 그들이 무조건 잘못된 것은 아닐 것이다. 아직 내가 그들의 다름을 순순히 인정하기에 부족한 사람이기에 내 그릇을 더 키워야 한다고 다짐했다.
          </p>
        `,
        en: `
          <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
            Life in Russia was a valuable experience that taught me the value of "difference." I'd like to introduce how the Russian language and its people are different from what we know.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Asking Questions and Intonation</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            Russian is very different even when compared to Japanese. The stress in a question isn't at the end but on the word being asked about. For example, "Did you go to school?" can have three meanings depending on which word you stress: verifying 'you,' the 'school,' or the 'action.' It takes time to get used to, and it made me appreciate the simplicity of other languages.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Seemingly Non-existent Word Order</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            Russians often say there's no fixed word order because almost any arrangement is grammatically possible. However, there are preferred patterns, and you'll be corrected if you arrange them randomly. Since verbs contain subject information, there's high freedom, but learning the natural flow requires effort.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Formal and Informal Speech</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            Despite their rough exterior, Russians have formal speech. Unlike Korean, the criterion is 'familiarity.' Family members use informal speech even with grandparents. I initially mistook this for a lack of manners. Formal speech is used for public encounters, but hearing a restaurant employee call me 'you'—meant to be friendly—remained uncomfortable until the end.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Names and Patronymics</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            Russians use short nicknames: Nastya for Anastasia, Sasha for Alexander. In formal settings, you use the first name and patronymic (father's name). Addressing someone as 'Ivan Sergeyevich' (Ivan, son of Sergey) is the polite and respectful way.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Attitude Toward Strangers</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            The unfriendliness toward strangers is real. They believe there's no need to be kind to people they don't know. But once you're acquainted, they become surprisingly kind. They have a historical wariness of outsiders and believe "smiling at a stranger is for fools," a sentiment often attributed to Pushkin.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Laughter Requires Translation</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            I bought a Russian joke book but couldn't find where to laugh. My friend burst into laughter at the first joke, while I only understood after a long explanation. I realized that humor, like language, requires cultural translation.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">The Cold and the Gear</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            The idea that Russians are biologically immune to the cold is half-wrong. They survive because indoor heating is excellent and they use perfect winter gear outdoors. Also, calling a woman 'grandmother' or 'auntie' is very rude; you must call everyone 'Devushka' (young lady).
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Growing My Capacity</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            They were very different. Not unbearable, but hard to feel close to initially. However, they aren't necessarily wrong. I realized I needed to grow my own capacity to accept these differences as they are.
          </p>
        `,
      },
    },
    {
      id: 'post-103',
      title: {
        ko: '예비학부에서의 공부',
        en: 'Studying at the Preparatory Program',
      },
      subtitle: {
        ko: '쯔모, 빠라, 그리고 러시아식 수학',
        en: 'TsMO, Para, and Russian-Style Math',
      },
      imageUrl:
        'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop',
      isActive: true,
      comments: [],
      content: {
        ko: `
           <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
             모스크바 국립대학교 예비학부는 유학생들 사이에서 오래전부터 쯔모(ЦМО)라는 별칭으로 더 유명했다. 2013년에 공식 명칭이 이랴익(ИРЯиК)으로 변경되었지만, 많은 사람들은 여전히 예비학부를 쯔모라고 불렀다. 발음하기 쉽고 짧아서였을 것이라 짐작한다.
           </p>

           <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">대학과 학원 사이</h3>
           <p class="leading-relaxed mb-6 text-slate-700">
             모스크바 대학의 예비학부는 독립된 건물이 아니라 기존 대형 건물의 일부를 사용한다. 대학교조차 건물 한 층만 사용하는 모습을 보며, 한국의 학원 건물과 비슷하다는 점에서 적잖은 충격을 받았다. 이곳은 단순한 어학연수가 아니라 학부나 대학원 진학을 목표로 하는 과정이라, 선택한 계열에 따라 수학, 물리 등을 함께 배운다.
           </p>

           <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">러시아의 수업 단위: 빠라</h3>
           <p class="leading-relaxed mb-6 text-slate-700">
             러시아 대학에는 50분 수업 대신 ‘빠라(пара)’라는 90분 단위 수업이 있다. 45분 수업 후 짧은 휴식을 포함하는 구조라 생각보다 버틸 만했다. 하루 평균 네 빠라를 들었으니, 학생 입장에서는 꽤 빡빡한 일정이었다. 대부분의 학생에게 최종 목표는 TORFL 1단계 합격이다.
           </p>

           <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">CCCP의 비밀</h3>
           <p class="leading-relaxed mb-6 text-slate-700">
             모스크바 곳곳의 ‘CCCP’ 문구를 보고 ‘씨씨씨피’가 뭐냐고 묻는 학생들이 많다. 선생님들은 웃으며 그것이 과거 소련을 뜻하는 약자라고 설명해 주신다. 러시아어에서는 C를 ‘에스’, P를 ‘알’로 읽기 때문에 사실 '에스에스에스알(소련)'을 뜻한다. 영어 알파벳과 모양이 같아 생기는 재미있는 해프닝이다.
           </p>

           <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">러시아어로 배우는 수학과 물리</h3>
           <p class="leading-relaxed mb-6 text-slate-700">
             진짜 문제는 러시아어였다. 인쇄체와 필기체가 상당히 달라 초반부터 쉽지 않았다. 게다가 현지인들의 필기체는 해독 자체가 도전이었다. 수학 수업은 "1 더하기 1은 2"를 러시아어로 읽는 법부터 시작했다. 2학기에는 미적분이 등장하는데, 선생님은 우리가 다 안다고 생각하는지 엄청난 속도로 진도를 나갔다. 수학을 배우기보다 '수학을 러시아어로 이해하는 법'을 배우는 느낌이었다.
           </p>
           <p class="leading-relaxed mb-6 text-slate-700">
             참고로 러시아는 소수점과 천 단위 표기법이 한국과 반대다. 12,345.6을 12.345,6으로 표기하는데, 처음에는 자주 헷갈렸다. 숫자 필기체도 우리와 모양이 달라 또 하나의 적응 과정이었다. 물리 수업은 뉴턴 역학부터 시작했는데, 문제 설정이 꽤나 복잡했다. 단순 계산보다 문제 상황을 이해하는 데 더 많은 시간이 걸렸다. 이후 전자기학과 핵물리학 기초도 배웠다.
           </p>

           <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">사고방식의 차이를 배우다</h3>
           <p class="leading-relaxed mb-6 text-slate-700">
             언어가 완전히 익숙하지 않은 상태에서 전공을 배우는 일은 힘들었다. 단어를 이해하는 것뿐 아니라 그들의 사고 구조를 받아들이는 과정이 필요했다. 당시에는 이해되지 않는 부분을 받아들이기보다 쉽게 ‘이상하다’고 단정 지었지만, 지금 돌이켜보면 그것은 문화와 사고방식의 차이를 인정하지 못했던 나 스스로의 미숙함이었음을 깨닫는다.
           </p>
        `,
        en: `
           <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
             MSU's preparatory program was widely known among international students as TsMO. Although its official name changed to IRYaK in 2013, many still called it TsMO because it was easy to pronounce and short.
           </p>

           <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Between a University and an Academy</h3>
           <p class="leading-relaxed mb-6 text-slate-700">
             The program doesn't have an independent building but shares space in larger ones. Seeing a university department take up just one floor reminded me of Korean private academies. It's not just language training; it's a preparatory course for degree programs, so you take subjects like Math and Physics along with Russian.
           </p>

           <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Russian Class Units: Para</h3>
           <p class="leading-relaxed mb-6 text-slate-700">
             Instead of 50-minute classes, Russian universities use a 90-minute unit called 'Para.' It's usually two 45-minute sessions with a short break. Taking four Paras a day made for a tight schedule. The ultimate goal for most is passing the TORFL Level 1.
           </p>

           <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">The Secret of CCCP</h3>
           <p class="leading-relaxed mb-6 text-slate-700">
             Many ask what 'CCCP' means, pronouncing it like English 'C'. In Russian, C is 'S' and P is 'R,' so it spells SSSR (USSR). It's a common confusion because the letters look identical to English ones but sound very different.
           </p>

           <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Math and Physics in Russian</h3>
           <p class="leading-relaxed mb-6 text-slate-700">
             The real challenge was the language. Cursive is very different from printed text, and deciphering native handwriting was a challenge. Math started with learning how to say "1+1=2" in Russian. By the second semester, we hit calculus. The teacher flew through the material, assuming we already knew it. It felt more like learning 'how to understand math in Russian.'
           </p>
           <p class="leading-relaxed mb-6 text-slate-700">
             Notably, Russia flips the use of commas and periods in numbers (12.345,6). Physics started with Newtonian mechanics, but the problem setups were complex, requiring more time to grasp the scenario than to do the math.
           </p>

           <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Learning Different Ways of Thinking</h3>
           <p class="leading-relaxed mb-6 text-slate-700">
             Studying specialized subjects while still learning the language was tough. It required accepting their cognitive structures, not just knowing words. Back then, I dismissed things I didn't understand as "strange," but now I realize that was just my own immaturity in failing to recognize cultural differences.
           </p>
        `,
      },
    },
    {
      id: 'side-1',
      title: {
        ko: '✨ 외전 (1) - 러시아의 산책',
        en: '✨ Side Story (1) - The Russian Walk',
      },
      subtitle: {
        ko: '걷기 그 이상의 의미, 그리고 강인한 체력의 필요성',
        en: 'More Than Just a Walk, and the Need for Strong Stamina',
      },
      imageUrl:
        'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?q=80&w=1200&auto=format&fit=crop',
      isActive: true,
      comments: [],
      content: {
        ko: `
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          러시아에서의 일상을 논할 때 결코 빼놓을 수 없는 단어가 바로 ‘산책(Прогулка, 프라굴까)’이다. 러시아인들의 산책은 단순히 두 다리를 번갈아 움직이는 행위 그 이상을 의미한다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">✨ ‘산책’이라는 단어의 마법</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          문자 그대로의 순수한 산책뿐만 아니라, 집에서 뒹굴거리며 편히 쉬는 것, 심지어 지루한 수업을 째고(?) 놀러 가는 짜릿한 일탈도 이 마법의 단어인 ‘산책’에 포함된다. 게다가 한국에 “라면 먹고 갈래?”나 “넷플릭스 보고 갈래?”가 있다면, 러시아에서는 마음에 드는 이성에게 “같이 산책 갈래?”라고 묻는 것이 일종의 데이트 신청이자 달콤한 작업 멘트로 쓰이기도 한다. 🥰 
          <br/><br/>
          그러니 러시아에서 누군가에게 가볍게 ‘산책 갈래?’라는 말을 들었다면, 이게 진짜 걷자는 건지, 데이트하자는 건지, 아니면 다 집어치우고 놀자는 건지 문맥과 상황을 눈치껏 잘 파악해야 한다. 🤔
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💪 필요한 것은 ‘강인한 체력’</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          보통은 문자 그대로의 산책을 의미하지만, 진짜 러시아인과 산책을 나가기로 합의했다면 반드시 단단히 챙겨야 할 필수품이 있다. 그건 바로 <strong>‘강인한 체력’</strong>이다. 그들의 산책은 한국인의 상상을 초월할 정도로 끝이 없기 때문이다. 🏃‍♂️ 
          <br/><br/>
          나는 나름 대한민국에서 군 생활도 버텨낸 건장한 성인 남성이고, 체력 하나는 남들에게 뒤지지 않는다고 자부했지만, 러시아인들의 압도적인 ‘산책력’ 앞에서는 추풍낙엽에 불과했다. 🍂 평지를 걷는 별거 아닌 산책에도 내 다리만 후들거리는 걸 보니, 세상에는 ‘일반 헬스용 근육’과 ‘러시아 산책용 근육’이 따로 존재하는 게 분명하다. 이 깨달음을 얻게 된 나의 눈물겨운 에피소드를 하나 소개할까 한다. 🥲
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🤝 러시아 친구와의 첫 산책</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          모스크바에는 한국어를 배우고자 하는 열정 넘치는 현지인들이 생각보다 아주 많다. 그들이 자주 모이는 아지트 중 하나가 바로 원불교 재단에서 운영하는 ‘원광학교’였다. 러시아의 국민 SNS인 ‘프콘탁테(VK)’에는 이 원광학교 관련 그룹이 있는데, 여기에 “한국에서 왔는데 러시아 친구를 사귀고 싶다”고 글을 올리면 종종 연락이 오곤 했다. 🇰🇷🇷🇺 
          <br/><br/>
          내게도 연락을 준 러시아 친구가 한 명 있었는데, 다짜고짜 날씨가 좋으니 가까운 공원으로 산책을 나가자고 제안했다. “뭐, 공원 한 바퀴 쓱 돌고 오면 되겠지” 하는 세상 안일한 생각에 흔쾌히 약속을 잡고 가벼운 발걸음으로 승리공원으로 향했다. 아, 가기 전에 스마트폰 지도로 승리공원의 스케일을 단 한 번이라도 검색해 보았더라면, 적어도 마음의 준비라도 단단히 했을 텐데 말이다. 🗺️💦
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏛️ 승리공원에서의 시련</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          전승기념공원이라고도 불리는 이 승리공원은 나치 독일과의 조국전쟁에서 승리한 것을 기념하여 대륙의 기상으로 어마어마하게 크게 만들어진 곳이다. 공원 바로 옆 지하철역에서 처음 보는 친구와 어색한 미소로 인사를 나눈 뒤 본격적인 ‘산책’이 시작되었다. 
          <br/><br/>
          내가 “우리 이제 어느 방향으로 갈까?”라고 묻자, 친구은 세상 해맑은 표정으로 “그냥 아무 데나 발길 닿는 대로, 가고 싶은 곳으로 가면 돼”라고 답했다. 순간 등골을 타고 서늘하고 싸한 느낌이 스쳐 지나갔지만, 일단 호기롭게 걷기 시작했다. 다행히 이 러시아 친구는 한국어를 배운 지 꽤 되어서 실력이 출중했고, 내가 더듬더듬 러시아어를 내뱉을 때마다 찰떡같이 알아듣고 많이 도와주었다. 🗣️✨
        </p>

        <p class="leading-relaxed mb-6 text-slate-700">
          하지만 언어 교환의 즐거움도 잠시, 넓어도 너무 넓은 공원 이곳저곳을 기웃거리며 장장 한 시간가량을 걸었을 무렵, 우리는 마침내 공원의 중심부에 있는 전승박물관에 도착할 수 있었다. 내 두 다리는 이미 집에 가고 싶다고 아우성을 치는 상태였지만, 친구에게 애써 태연한 척하며 “자, 이제 어느 쪽으로 가볼까?”라고 점잖게 물어보았다. 
          <br/><br/>
          그러나 돌아온 대답은, 처음 만났을 때 들었던 그 절망적인 멘트의 무한 반복이었다. <strong>“응? 아무 방향이나 가고 싶은 곳으로 계속 가면 돼!”</strong> 😱
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚑 생존을 위한 귀가</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          그 순간, 나는 무언가 대단히 잘못되었다는 강렬한 직감을 받았다. 이대로 걷다가는 모스크바를 벗어날지도 모른다는 위기감에, 재빨리 “이제 슬슬 집에 들어가 봐야 하지 않을까?” 하고 최대한 불쌍하고 정중하게 말한 뒤에야 간신히 귀가라는 생존을 이뤄낼 수 있었다. 🏠💨 
          <br/><br/>
          그 친구에게 개인적인 악감정은 전혀 없었지만, 며칠 뒤 또 한 번 산책을 가자는 해맑은 연락에 조건반사적으로 몸이 아프다며 병약한 척을 했더니 금세 연락이 뜸해지고 말았다. 미안한 마음도 크긴 했지만, 그 첫 러시아식 산책의 충격이 얼마나 컸던지, 이후에도 다른 러시아인들이 산책을 제안할 때면 (도저히 거절할 수 없는 상황이 아닌 이상) “나는 산책을 별로 안 좋아해”라는, 러시아인으로서는 절대 이해할 수 없는 핑계를 대며 정중히 사양하곤 했다. 🙅‍♂️
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚇 나만의 산책 노하우</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          만약 정말 어쩔 수 없이 산책에 끌려가야 할 경우에는, 무조건 약속 장소를 모스크바 최중심부 쪽으로 우겨서 잡았다. 모스크바 중심부는 도보로 10분 남짓한 거리마다 지하철역이 촘촘히 깔려 있어서, 체력 게이지가 바닥을 드러낼 때 언제든 지하로 도망칠 수 있는 ‘생존 탈출’에 굉장히 용이했기 때문이다. 🚇✅ 
          <br/><br/>
          게다가 지하철역 근처에는 허허벌판 공원과 달리 눈요기할 곳도 많고, 카페나 디저트 가게들이 즐비해 있어서 “우리 저기 가서 커피나 마실까?”라며 아주 자연스럽게 상대방을 자리에 주저앉히고 대화를 이어갈 수 있었다. ☕🍰
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">☀️ 산책에 진심인 이유</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          그렇다면 도대체 러시아인들은 왜 이렇게 산책에 진심이다 못해 환장하는 것일까? 유학 생활 내내 고민해 본 결과, 나는 나름의 결론을 도출해 냈다. 가장 큰 이유는 역설적이게도 <strong>‘우울한 날씨’</strong> 때문이다. ☁️ 
          <br/><br/>
          러시아은 1년 중 날씨가 맑은 날보다 우중충한 날이 훨씬 많다. 영국의 악명 높은 날씨도 알아주지만, 모스크바의 겨울과 흐린 날씨도 그에 못지않다. 그래서인지 어쩌다 한 번 해가 쨍하게 비치는 귀한 날이면, 사람들은 마치 광합성을 하려는 식물들처럼 약속이나 한 듯 우르르 쏟아져 나와 공원을 가득 채운다. ☀️🌱
        </p>

        <p class="leading-relaxed mb-6 text-slate-700">
          게다가 모스크바의 대형 공원들은 크기만 무식하게 큰 것이 아니라, 조경과 시설이 기가 막히게 잘 정비되어 있다. 공원 안에 들어서면 즐길 거리도 많고 볼거리도 풍성하며, 그중 몇몇 공원들은 아름다운 모스크바 강을 끼고 있어 한가로운 여유를 즐기기에 더할 나위 없이 안성맞춤이다. 🌳⛲ 이러니 집 안에만 박혀 있던 러시아 사람들을 야외로 자석처럼 끌어당기기에 충분한 것이다. 물론, 그들의 무시무시한 기초 체력만 감당할 수 있다면 말이다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌹 낭만적인 제안, 산책</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          결국 러시아에서의 ‘산책’은 단순히 걷는 행위를 넘어, 상대의 시간을 통째로 점유하고 삶의 여유를 공유하자는 낭만적인 제안이었던 셈이다. 🌹 다른 언어에서는 단어 하나가 문맥과 상황에 따라 이토록 다채로운 의미를 품을 수 있다는 사실에 새삼 감탄하게 된다. 실전 러시아 산책의 매운맛을 통해, 오늘도 겸허히 한 수 배운다. 🙏✨
        </p>
      `,
        en: `
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          When discussing daily life in Russia, one word that can never be omitted is 'walk' (Прогулка, pragulka). For Russians, a walk means more than just the act of moving one's legs alternately.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">✨ The Magic of the Word 'Walk'</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Not only does it refer to a pure, literal walk, but also lounging around at home, and even the thrilling escape of skipping a boring class to go play is included in this magic word 'walk.' Furthermore, if in Korea you have "Want to come over for ramen?" or "Want to watch Netflix?", in Russia, asking someone you're interested in "Want to go for a walk together?" is a kind of date proposal and a sweet pick-up line. 🥰 
          <br/><br/>
          So, if someone in Russia casually asks you, "Want to go for a walk?", you need to quickly figure out from the context and situation whether they really mean to walk, to go on a date, or to just ditch everything and have fun. 🤔
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💪 What You Need is 'Strong Stamina'</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Usually, it means a literal walk, but if you've agreed to go for a real walk with a Russian, there's one essential item you must pack. And that is <strong>'strong stamina'</strong>. This is because their walks are endlessly long, beyond the imagination of a Korean. 🏃‍♂️ 
          <br/><br/>
          I was a healthy adult male who had endured military service in the Republic of Korea and prided myself on not lagging behind others in terms of stamina, but in front of the overwhelming 'walking power' of the Russians, I was nothing more than a leaf in the wind. 🍂 Seeing only my legs tremble on a simple walk on flat ground, it's clear that there are separate 'muscles for general fitness' and 'muscles for Russian walks' in the world. Shall I introduce a tearful episode of mine that led to this realization? 🥲
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🤝 First Walk with a Russian Friend</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Moscow has surprisingly many passionate locals who want to learn Korean. One of their frequent hangouts was the 'Wonkwang School' run by the Won-Buddhism foundation. On the Russian national social media 'VKontakte (VK),' there is a group related to this Wonkwang School, and if you post something like "I'm from Korea and I want to make Russian friends," you'll often get replies. 🇰🇷🇷🇺 
          <br/><br/>
          A Russian friend contacted me, and out of the blue, suggested we go for a walk in a nearby park since the weather was nice. With the incredibly naive thought of "Well, it'll just be a quick stroll around the park," I readily agreed and headed to Victory Park with a light heart. Ah, if only I had searched for the scale of Victory Park on my smartphone map just once before going, I would have at least been mentally prepared. 🗺️💦
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏛️ The Ordeal at Victory Park</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Victory Park, also called the Memorial Park of Victory, was built on a massive continental scale to commemorate the victory in the Patriotic War against Nazi Germany. After exchanging awkward smiles with a friend I was meeting for the first time at the subway station right next to the park, the 'walk' officially began. 
          <br/><br/>
          When I asked, "So, which way should we go now?", my friend replied with a world-bright smile, "Just go wherever our feet take us, wherever we want to go." For a moment, a cold, chilling sensation ran down my spine, but I started walking with bravado. Fortunately, this Russian friend had been learning Korean for quite some time and was very proficient, so he understood me perfectly whenever I stammered in Russian and helped me a lot. 🗣️✨
        </p>

        <p class="leading-relaxed mb-6 text-slate-700">
          But the joy of language exchange was short-lived. After wandering around the vast, vast park for about an hour, we finally arrived at the Victory Museum in the center of the park. My legs were already screaming that they wanted to go home, but I pretended to be calm to my friend and politely asked, "So, which way should we go now?" 
          <br/><br/>
          However, the answer that came back was an infinite repetition of the desperate phrase I had heard when we first met. <strong>“Huh? Just keep going in any direction you want!”</strong> 😱
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚑 The Escape for Survival</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          At that moment, I had a strong intuition that something was very wrong. In a crisis, feeling that I might walk right out of Moscow, I quickly said, "Shouldn't we be heading home soon?" as pitifully and politely as possible, and only then was I able to achieve the survival of returning home. 🏠💨 
          <br/><br/>
          I had no personal grudge against that friend, but a few days later, when he cheerfully contacted me to go for another walk, my body reflexively pretended to be sick, and he soon stopped contacting me. I felt very sorry, but the shock of that first Russian-style walk was so great that even afterwards, whenever other Russians suggested a walk, (unless it was a situation I absolutely couldn't refuse) I would politely decline with the excuse, "I don't really like walking," which is completely incomprehensible to a Russian. 🙅‍♂️
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚇 My Own Walking Know-How</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          If I absolutely had to be dragged on a walk, I would insist on setting the meeting place in the very center of Moscow. The center of Moscow is densely packed with subway stations every 10 minutes or so on foot, making it very convenient for a 'survival escape' underground whenever my stamina gauge hit bottom. 🚇✅ 
          <br/><br/>
          Besides, near the subway stations, unlike the empty parks, there are many things to see, and cafes and dessert shops are lined up, so I could very naturally make the other person sit down and continue the conversation by saying, "Shall we go get some coffee over there?" ☕🍰
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">☀️ The Reason They Are So Serious About Walking</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          So why on earth are Russians so serious, no, so crazy about walking? After pondering this throughout my study abroad, I came to my own conclusion. The biggest reason, paradoxically, is the <strong>'gloomy weather'</strong>. ☁️ 
          <br/><br/>
          Russia has far more gloomy days than sunny days in a year. The notorious weather of the UK is well-known, but Moscow's winter and cloudy weather are no less so. That's why on the rare day when the sun shines brightly, people pour out as if they are plants trying to photosynthesize and fill the parks, as if by appointment. ☀️🌱
        </p>

        <p class="leading-relaxed mb-6 text-slate-700">
          Moreover, Moscow's large parks are not just stupidly large, but the landscaping and facilities are fantastically well-maintained. Once you enter a park, there are many things to enjoy and see, and some of them are located along the beautiful Moscow River, making them perfect for enjoying a leisurely time. 🌳⛲ This is enough to attract the Russian people who have been cooped up in their houses to the outdoors like a magnet. Of course, that's only if you can handle their terrifying basic stamina.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌹 A Romantic Proposal, the Walk</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          In the end, a 'walk' in Russia was a romantic proposal to occupy the other person's time entirely and share the leisure of life, going beyond the mere act of walking. 🌹 It makes me admire anew the fact that in other languages, a single word can contain such a variety of meanings depending on the context and situation. Through the spiciness of a real Russian walk, I humbly learn a lesson again today. 🙏✨
        </p>
      `,
      },
    },
    {
      id: 'post-104',
      title: {
        ko: '그럭저럭 먹고살기',
        en: 'Getting By with Food',
      },
      subtitle: {
        ko: '샤슬릭부터 보르쉬, 그리고 패스트푸드까지',
        en: 'From Shashlik to Borsch, and Fast Food',
      },
      imageUrl:
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop',
      isActive: true,
      comments: [],
      content: {
        ko: `
           <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
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
             그리고 대부분의 러시아인들이 이야기 하기로는 <strong>집에서 먹는 음식</strong>이 제일 맛있고, 어쩔 수 없을 때만 나가서 외식을 한다고 한다. 생각해 보면 한국은 조금 달랐다. 집에서 하기 힘든 맛있는 음식을 먹고 싶을 때 주로 나가서 사 먹기 때문이다. 내 인식도 마찬가지였다. <em>'왜 맛도 별로 없는데 굳이 나가서 사 먹지'</em>라는 생각이 머릿속을 항상 떠돌았다. </p> <p class="leading-relaxed text-xl font-bold text-slate-800 text-center mt-8"> 음식도 다르지만 음식을 대하는 태도, 외식에 대한 인식 등<br/>여전히 달라도 많이 다르다는 것을 다시금 느꼈다. 🥢 </p>`,
        en: `<p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3"> I guess it's hard to find videos or information about Russian food. Even if there is, there's probably little about 'traditional Russian food', because most of the food Russians eat originated from foreign countries. As an aside, among the foods Koreans believe to be 'traditional' and enjoy, many have a surprisingly short history that makes them awkward to call 'traditional'. For example, Gamjatang and Seolleongtang are relatively short, within 100 years. Anyway, let's look at what's on Russian tables. 🍽️ </p> <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌍 Flavors of Neighboring Countries</h3> <p class="leading-relaxed mb-6 text-slate-700"> The fried rice called <strong>'Plov'</strong>, commonly seen in Russia, is Uzbek food, and <strong>'Shashlik'</strong>, a grilled skewer dish, one of my favorite foods in Russia, is also said to have originated from Armenia. 🥩 </p> <p class="leading-relaxed mb-6 text-slate-700"> And though unfamiliar to us, <strong>Georgian</strong> (the country, not the US state; in Russian, Gruziya) food is considered delicious. Georgian dumplings like <strong>Khinkali</strong> or <strong>Khachapuri</strong>, a bread with egg inside, are easily accessible in Russia and are loved not only by Russians but also by foreigners living in Russia and people from neighboring countries. </p> <figure class="my-8"> <img src="${Picture1}" alt="Flavors of Neighboring Countries" class="w-full rounded-lg shadow-lg" /> <figcaption class="text-center text-sm text-slate-500 mt-2 font-serif italic">Flavors of Neighboring Countries (Plov, Shashlik, Khinkali, Khachapuri)</figcaption> </figure> <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🥣 Unique Russian Flavors</h3> <p class="leading-relaxed mb-6 text-slate-700"> So what are Russia's unique dishes? Russia consists of 85 federal subjects, 22 of which are autonomous republics. It's not easy to pinpoint 'unique Russian food'. However, for the Slavic majority in major cities like Moscow, representative dishes include <strong>Borsch</strong> and <strong>Blin</strong>. </p> <p class="leading-relaxed mb-6 text-slate-700"> <strong>Borsch</strong> is a beet-based meat soup, having a status similar to soybean paste soup in Korea. Russians top it with <strong>Smetana</strong> (sour cream). Smetana's sourness was hard for me to get used to until I left Russia. 😅 </p> <p class="leading-relaxed mb-6 text-slate-700"> Except for Smetana, it's a warm soup anyone can enjoy. The intense purple color might be off-putting at first, but a spoonful in cold weather makes that hesitation melt away like snow. </p> <p class="leading-relaxed mb-6 text-slate-700"> <strong>Blin</strong> is a Russian pancake, characterized by being very thin. It's eaten with sweet sauces like honey, or filled with ham, eggs, or smoked salmon as a meal or snack. </p> <figure class="my-8"> <img src="${Picture2}" alt="Unique Russian Flavors" class="w-full rounded-lg shadow-lg" /> <figcaption class="text-center text-sm text-slate-500 mt-2 font-serif italic">Unique Russian Flavors (Borsch, Blin, Black Bread, Pelmeni)</figcaption> </figure> <p class="leading-relaxed mb-6 text-slate-700"> Other Russian foods include sour <strong>Black Bread</strong> and <strong>Pelmeni</strong>, which are small dumplings. Once I accidentally bought Pelmeni filled with cherries instead of meat. 🍒 I put them in Ramen, and they burst. The taste was something even the devil would cry over. 👿 </p> <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍔 Survival Choice, Fast Food</h3> <p class="leading-relaxed mb-6 text-slate-700"> Actually, the most common food outside is fast food. With global chains like Burger King, KFC, and McDonald's everywhere and the Big Mac Index being the lowest in the world, you can't avoid them. My friends and I often ate KFC wings—25 wings for about 10 dollars. 🍗 </p> <p class="leading-relaxed mb-6 text-slate-700"> <strong>Grilled Chicken</strong> and <strong>Shawarma</strong> are common at street stalls. They're cheap and delicious. Shawarma is nearly fail-proof as long as you say 'no' to Smetana. </p> <figure class="my-8"> <img src="${Picture3}" alt="Fast Food" class="w-full rounded-lg shadow-lg" /> <figcaption class="text-center text-sm text-slate-500 mt-2 font-serif italic">Survival Choice, Fast Food (KFC, McDonald's, Grilled Chicken, Shawarma)</figcaption> </figure> <hr class="border-slate-200 my-8 w-1/3 mx-auto" /> <p class="leading-relaxed mb-6 text-slate-700"> My surface-level impression was that Russians don't put much meaning into taste, perhaps due to the cold or hardships. Most Russians say <strong>home-cooked food</strong> is best and only eat out when they have to. This was different from Korea, where we go out specifically for food that's hard to make at home. </p> <p class="leading-relaxed text-xl font-bold text-slate-800 text-center mt-8"> Different food, different attitudes toward eating out—<br/>I felt once again how different we were. 🥢 </p>`,
      },
    },
    {
      id: 'post-105',
      title: { ko: '모스크바에서 한국 찾기', en: 'Finding Korea in Moscow' },
      subtitle: {
        ko: '그리움, 대사관, 그리고 북한 식당',
        en: 'Longing, the Embassy, and a North Korean Restaurant',
      },
      imageUrl:
        'https://images.unsplash.com/photo-1580651315530-69c8e0026377?q=80&w=1200&auto=format&fit=crop',
      isActive: true,
      comments: [],
      content: {
        ko: `<p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3"> 그리운 고국 땅과는 직선거리로 약 <strong>6,600 km</strong>, 비행기로도 장장 14시간을 날아야 닿을 수 있는 모스크바에서, 문득문득 한국이 그리워지는 것은 어쩔 수 없다. 🇰🇷 하지만 대부분의 날이 흐리고 춥고, 사람들마저 쌀쌀맞은 이 낯선 도시 곳곳에서도 경험할 수 있는 한국의 조각들이 있다. </p>
          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏛️ 모스크바의 작은 한국, 대사관</h3>
          <p class="leading-relaxed mb-6 text-slate-700"> 먼저 이야기 해 볼 것은 실제 법적으로는 한국 영토인 <strong>주러 한국대사관</strong>이다. 사실 유학생이 특별히 대사관을 방문할 일은 없지만 나는 몇 번 가볼 기회가 있었다. 모스크바에 도착한 그 해 12월 나는 대위로 진급이 예정되어 있었다. 진급하기 전 회식 자리에서 무관보좌관님은 진급식을 챙겨주신다며 아내 한복까지 준비 놓으라고 하셨다. 그 때까지 군기가 아직 덜 빠졌던 나는 그 말을 철썩같이 믿고 아내의 한복도 한국에서 보내서 준비를 마쳤다. </p>
          <p class="leading-relaxed mb-6 text-slate-700"> 내가 아내의 한복을 준비했다고 말씀드리니 반은 농담이었다고 하셨지만 그래도 무관님께 말씀드려서 대위 진급식을 대사관에서 할 수 있었다. 보통은 소령 진급식 정도는 되어야 가족도 초청해서 어깨에 새로운 견장도 달아주고 하는데 운이 좋게도 아주 먼 낯선 땅에서 영광스러운 진급식을 가질 수 있었다. ✨ </p>
          <div class="bg-slate-50 border-l-4 border-russia-blue p-6 rounded-r-lg my-6">
          <p class="leading-relaxed mb-6 text-slate-700"> "대사관 건물은 직사각형으로 생겼는데 가운데는 작은 직사각형의 빈 공간이 있었다. 거기에는 한국식으로 꾸며놓은 <strong>정자와 작은 연못</strong>이 있어 매우 인상적이었다. 대사관에서 근무하면 한국의 휴일과 현지 나라의 휴일을 모두 쉴 수 있다고 들었다는 말을 듣고 다음 생에는 꼭 대사관 직원이 되어야 겠다는 유쾌한 상상도 해보았다." </p>
          </div>
          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🥘 그리운 맛, 한국 식당</h3>
          <p class="leading-relaxed mb-6 text-slate-700"> 한국이 그리운 이유에는 음식을 빼놓을 수 없다. 모스크바에는 한국 식당이 여러 곳 있었다. 하지만 한국 식당이라고 해서 모두 우리가 아는 대한민국의 식당은 아니니 조심할 필요가 있다. 일례로 북한 사람이 운영하는 식당이 있고, 또 러시아에 몇 세대 전에 넘어온 고려인이 운영하는 식당도 있다. </p>
          <p class="leading-relaxed mb-6 text-slate-700"> 보통 한국 음식이 그리울 때면 <strong>인공위성</strong>이라는 이름의 호텔 내에 위치한 한국 식당을 찾았다. 이 호텔 내에는 여러 한국 식당이 있어서 선택지도 다양했고, 작은 한국식품점이 있어서 식사를 하고 한국 식재료를 사오기도 좋았다. </p>
          <p class="leading-relaxed mb-6 text-slate-700"> 그 외에도 다른 한국 식당들도 있었는데 그 중에 ‘자스민’이라는 이름의 식당에서는 메뉴에도 없는 보신탕을 알음알음 알고 찾아온 손님한테 팔기도 했다. 다른 식당에서는 토요일 점심에 600루블, 당시 한화로는 약 12,000원 정도에 한식 뷔페를 먹을 수 있었다. 김밥, 떡볶이와 같은 분식부터 불고기, 잡채 등 집에서 다 만들어 먹기는 번거로운 많은 음식이 있어서 자주 다녔다. 😋 </p>
          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍜 고려인 식당과 북한 식당</h3>
          <p class="leading-relaxed mb-6 text-slate-700"> 한 번은 러시아 친구들과 <strong>고려인 식당</strong>에 가본 적도 있다. 대한민국의 음식과는 차이가 많이 났다. 메뉴판에는 조금 익숙한 발음의 음식이 있기도 했고 전혀 무슨 음식인지 유추할 수 조차 없는 음식도 많았다. 또한 한국 음식보다 식초를 많이 쓰는지 시큼한 맛이 나는 음식이 꽤나 있었다. 그래도 <strong>‘쿡시’</strong>라고 불리는 국수는 맛이 괜찮았다. 같이 갔던 러시아 친구들에게 이런 음식은 한국에서 결코 볼 수 없을 거라고 이야기했다. </p>
          <div class="bg-red-50 p-6 rounded-lg border border-red-200 my-6">
          <h4 class="font-bold text-red-900 mb-2">🚫 평양스키 고려 (북한 식당)</h4>
          <p class="leading-relaxed mb-6 text-slate-700"> 우리가 자주 가던 ‘아샨’이라는 대형 마트에 가는 길에는 <strong>평양스키 고려</strong>라는 음식점이 있었다. 직역하자면 ‘평양의 고려’인데 이 곳은 북한 사람이 운영하는 진짜 북한 식당이었다. 감히 들어갈 볼 엄두는 못 내고 정문을 통해 지하로 내려가는 복도만 볼 수 있었는데 요정들과 신선들이 산과 호수를 배경으로 한 아주 특이한 그림들이 걸려 있었다. 현역 군인 신분이었던 나는 괜히 꺼려지는 마음에 러시아에 있는 동안 북한 식당을 가본 적이 없지만 지금 돌이켜보면 한 번쯤은 괜찮지 않았을까 하는 생각이 든다. </p>
          </div>
          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎤 학생 생활과 조언</h3>
          <p class="leading-relaxed mb-6 text-slate-700"> 모스크바에 공부하러 온 학생들도 꽤나 많은데 한국식 노래방이 있어서 스트레스를 해소하러 간다고 했다. 모스크바 국립대 한인학생회는 여러 행사를 계획하는데 몇몇 행사에 참가해서 여러 학생들 각자가 느끼고 경험하는 모스크바에 대해서도 들을 수 있었다. </p>
          <hr class="border-slate-200 my-8 w-1/3 mx-auto" />
          <p class="leading-relaxed mb-6 text-slate-700"> 해외에 살면 현지 적응과 향수 사이에서 적절한 밸런스를 잡아야 하지만 내 짧은 경험에서 비추어 보았을 때, 오히려 <strong>밸런스보다는 저공비행</strong>을 해야 한다고 말하고 싶다. ✈️ 한국이 그립다고 해서 한인 사회나 커뮤니티에만 매몰되는 것은 그리 바람직하지 않다. </p>
          <p class="leading-relaxed mb-6 text-slate-700"> 만약 정해진 기간을 두고 떠나온 유학길이라면, 한국은 딱 필요한 만큼만 찾고 최대한 낯선 곳에 익숙해지고 낯선 이들의 삶 속으로 깊숙이 파고드는 노력이 필요하다. 내가 만났던 한국 학생 일부는 학생회 활동에 지나치게 몰두한 나머지 학업을 뒷전으로 한 이들도 있었다. 믿고 외국에 보내준 부모님의 간섭이 없는 타국에서 밤 늦게까지 흥청망청 다니는 모습은 안타까울 따름이었다. </p>`,
        en: `<p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3"> In Moscow, approximately <strong>6,600 km</strong> in a straight line from my beloved homeland, a 14-hour flight away, it's inevitable to occasionally miss Korea. 🇰🇷 However, even in this unfamiliar city, where most days are cloudy and cold, and the people are even colder, there are fragments of Korea that can be experienced everywhere. </p>
          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏛️ A Small Korea in Moscow, the Embassy</h3>
          <p class="leading-relaxed mb-6 text-slate-700"> First, let's talk about the <strong>Korean Embassy in Russia</strong>, which is legally Korean territory. In fact, international students don't usually have much reason to visit the embassy, but I had a few opportunities. In December of the year I arrived in Moscow, I was scheduled to be promoted to captain. At a dinner before the promotion, the Military Attaché's assistant told me to prepare my wife's hanbok for the promotion ceremony. At that time, I was still so ingrained in military discipline that I believed him implicitly and had my wife's hanbok sent from Korea and prepared. </p>
          <p class="leading-relaxed mb-6 text-slate-700"> When I told him I had prepared my wife's hanbok, he said it was half a joke, but he still spoke to the Military Attaché so that I could have my captain promotion ceremony at the embassy. Usually, you only invite family and get new shoulder epaulets for a major's promotion ceremony, but I was lucky enough to have a glorious promotion ceremony in a distant, unfamiliar land. ✨ </p>
          <div class="bg-slate-50 border-l-4 border-russia-blue p-6 rounded-r-lg my-6">
          <p class="leading-relaxed mb-6 text-slate-700"> "The embassy building was rectangular, and in the middle, there was a small, empty rectangular space. There was a <strong>pavilion and a small pond</strong> decorated in Korean style, which was very impressive. I heard that working at the embassy allows you to rest on both Korean holidays and local holidays, so I playfully imagined becoming an embassy staff member in my next life." </p>
          </div>
          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🥘 The Taste of Longing, Korean Restaurants</h3>
          <p class="leading-relaxed mb-6 text-slate-700"> Food is indispensable when talking about why I miss Korea. There were several Korean restaurants in Moscow. However, it's important to be careful, as not all Korean restaurants are the Korean restaurants we know from South Korea. For example, there are restaurants run by North Koreans, and also restaurants run by Koryo-saram (ethnic Koreans in the former Soviet Union) who moved to Russia several generations ago. </p>
          <p class="leading-relaxed mb-6 text-slate-700"> When I missed Korean food, I usually went to a Korean restaurant inside a hotel called <strong>'Sputnik' (Satellite)</strong>. This hotel had several Korean restaurants, offering a variety of choices, and there was also a small Korean grocery store, making it convenient to eat and buy Korean ingredients. </p>
          <p class="leading-relaxed mb-6 text-slate-700"> There were also other Korean restaurants, and among them, a restaurant named 'Jasmine' would secretly sell Boshintang (dog meat stew), which wasn't even on the menu, to customers who knew about it and came looking for it. At another restaurant, you could eat a Korean buffet for 600 rubles, about 12 dollars at the time, on Saturday lunch. It had many dishes, from snack foods like gimbap and tteokbokki to bulgogi and japchae, which were cumbersome to make at home, so I went there often. 😋 </p>
          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍜 Koryo-saram Restaurants and North Korean Restaurants</h3>
          <p class="leading-relaxed mb-6 text-slate-700"> And once, I also went to a <strong>Koryo-saram restaurant</strong> with my Russian friends. The food was very different from Korean food. Some dishes on the menu had slightly familiar pronunciations, while others were completely unidentifiable. Also, it seemed that they used more vinegar than in Korean food, so there were quite a few sour dishes. Still, the noodles called <strong>'Kuksi'</strong> tasted good. I told my Russian friends that such food could never be seen in Korea. </p>
          <div class="bg-red-50 p-6 rounded-lg border border-red-200 my-6">
          <h4 class="font-bold text-red-900 mb-2">🚫 Pyongyangski Koryo (North Korean Restaurant)</h4>
          <p class="leading-relaxed mb-6 text-slate-700"> On the way to 'Ashan', a large supermarket we often visited, there was a restaurant called <strong>Pyongyangski Koryo</strong>. Literally translated as 'Goryeo of Pyongyang', this was a real North Korean restaurant run by North Koreans. I didn't dare to go inside, but I could only see the corridor leading down to the basement through the main entrance. There were very unique paintings of fairies and immortals with mountains and lakes in the background. As an active military officer, I never went to a North Korean restaurant during my stay in Russia because I was worried about potential trouble, but looking back now, I wonder if it would have been okay to go just once. </p>
          </div>
          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎤 Student Life and Advice</h3>
          <p class="leading-relaxed mb-6 text-slate-700"> Many students who came to Moscow to study said they went to Korean-style karaoke to relieve stress. The Korean student association of Moscow State University planned various events, and I participated in some of them and heard about Moscow from the perspective of various students. </p>
          <hr class="border-slate-200 my-8 w-1/3 mx-auto" />
          <p class="leading-relaxed mb-6 text-slate-700"> Living abroad requires striking a balance between adapting to the local environment and homesickness, but based on my short experience, I want to say that it is better to <strong>fly low rather than balance</strong>. ✈️ It is not desirable to be buried only in the Korean community or society just because you miss Korea. </p>
          <p class="leading-relaxed mb-6 text-slate-700"> If you are studying abroad for a fixed period, you need to find Korea just enough, get used to the unfamiliar place as much as possible, and make an effort to delve deep into the lives of unfamiliar people. Some Korean students I met were so engrossed in student council activities that they neglected their studies. It was regrettable to see them out late at night, having fun, in a foreign country without the interference of their parents who believed in them and sent them abroad. </p>`
        ,
      },
    },
    {
      id: 'post-106',
      title: {
        ko: '모스크바의 봄여름가을겨울',
        en: 'Spring, Summer, Autumn, and Winter in Moscow',
      },
      subtitle: {
        ko: '회색빛 우울감과 민들레 홀씨 사이',
        en: 'Between Gray Melancholy and Dandelion Seeds',
      },
      isActive: true,
      imageUrl:
        'https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?q=80&w=1200&auto=format&fit=crop',
      comments: [],
      content: {
        ko: `
          <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
             8월에 도착한 모스크바의 날씨는 매우 좋았다. ☀️ 한국이었다면 엄청 습하고 더웠을 테지만, 모스크바은 덥지도 않았고 습하지도 않았다. 정말로 많은 사람들이 다시 오지 않을 좋은 날씨를 즐기려는 듯, 모스크바 도심 공원마다 산책 나온 사람들로 가득 차 있었다. 첫 학기는 아무래도 새로운 세상에 적응하느라 정신이 없었고 주말이라 할지라도 생각보다 해야 할 숙제들이 많아서 바빴지만 틈나는 대로 밖에 나가서 시간을 보내려고 노력했다.
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
             그렇라고 모스크바의 추위가 아주 못견딜 만한 것은 아니었다. 역설적이게도 밖은 매우 춥지만 실내만큼은 세상 어디보다 따뜻하기 때문이다. 내가 아는 한 모스크바의 거의 모든 건물에는 <strong>중앙식 난방 시스템</strong>이 갖춰져 있다. 국가 차원에서 관리하기에 개별 건물의 난방비가 무료이다. 그렇기에 밖에 나가면 꽁꽁 싸매고 다니는 사람들도 건물에 들어가면 훌러덩 벗고 반팔 차림으로 다니는 모습도 자주 볼 수 있다. 
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
             5월 말이 되면 이 민들레 꽃은 하얀 홀씨로 변해 온 도시를 떠다니는데 과장을 조금 보태면 <strong>봄에 내리는 눈</strong> 같기도 했다. 꽃가루 알레르기가 있던 나는 이 기간 내내 재채기와 콧물을 달고 살았지만 그래도 이들의 생명의 기운에 기분만큼은 좋았다. 또한 도심 공원에는 형형색색의 꽃들이 만개하여 겨우내 회색빛이었던 도시를 화려하게 바꿔준다. 모스크바은 긴 겨울이 있었기에 더욱 따뜻한 봄을 맞이하는 듯했다. 🌸
          </p>

          <blockquote class="text-center font-serif text-xl text-russia-blue my-10 border-y-2 border-slate-100 py-8 leading-relaxed">
            "모스크바에서 지낸지도 어느덧 1년이 되었다.<br/>
            처음에는 차갑고 무뚝뚝하게만 느껴졌던 모스크바와 그 안의 사람들도,<br/>
            이제 겉으로 보이는 모습뿐만이 아니라 그 이면의 온기까지<br/>
            있는 그대로 받아들이기 시작했다. "
          </blockquote>
        `,
        en: `
          <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
             The weather in Moscow was very good when I arrived in August. ☀️ If it had been Korea, it would have been incredibly humid and hot, but Moscow was neither hot nor humid. It seemed as if many people were enjoying the good weather that would not come again, and every park in downtown Moscow was filled with people out for a walk. The first semester was undoubtedly chaotic as I adjusted to a new world, and even on weekends, there was more homework than I expected, so I was busy. Still, I tried to go out and spend time whenever I had a chance.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
             I didn't know then that Moscow's brilliant days were numbered. ⏳
          </p>
          
          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">☁️ Gray Skies and the Moscow Blues</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
             Before long, Moscow began to reveal the ☁️ <strong>gray skies</strong> we had heard about. Statistically, Moscow is one of the cities with very little sunshine, especially in winter, where you might not see the sun for almost a month. If you are familiar with Europe, it might be easier to understand if I say it's similar to London's weather. It was common to have ambiguous weather where the sun was half-present, half-not, and a very small amount of rain would come and go intermittently, making it hard to decide whether to use an umbrella or not.
            </p>
            <p class="leading-relaxed text-slate-700">
               Russians walk silently without opening their umbrellas for a light drizzle, and looking at their indifferent backs, you realize how familiar these gloomy skies are to them. The reason why Moscow's sky is particularly low and cloudy is largely due to geographical influences. Humid air blowing from the Atlantic crosses the vast Russian plain and settles directly over Moscow without being blocked by terrain, forming a thick layer of clouds. I, too, initially found it difficult to adjust to this gloomy weather and fell into a depression called the <span class="text-russia-blue font-bold">'Moscow Blues'</span>. But over time, I came to accept this unique atmosphere of Moscow.
            </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">❄️ Winter Survival Strategy, Shapka</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
             When the sky gradually gets cloudy, the cold of Russia arrives. From about November, temperatures drop below freezing, and snow falls, making winter last for about six months. Winter clothing for enduring this long winter is not just a tool to keep warm but a survival strategy.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
             <strong>'Shapka'</strong> is the fur hat that first comes to mind when you think of Russia. You can easily find it by searching for 'Russian military hat', and in Korea, it's easy to think of it as a 'roasted chestnut seller's hat'. I bought one at a market called <strong>Izmailovsky</strong> before winter officially arrived and wore it around. I was gradually patching myself into Russian life.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🔥 Cold Outside, Warm Inside</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
             However, Moscow's cold was not entirely unbearable. Paradoxically, although it's very cold outside, the indoors are warmer than anywhere else in the world. As far as I know, almost all buildings in Moscow are equipped with a <strong>central heating system</strong>. Because it is managed at the national level, heating costs for individual buildings are free. So, you often see people who are bundled up outside take off their outer clothes and walk around in short sleeves indoors.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
             And in Korea, it was inconvenient because I always had to carry my clothes, but in Moscow, every slightly large building has a place to store outer clothes (garderob), so I could move around very comfortably inside buildings. 🧥
          </p>

          <div class="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-200 my-8">
             <h4 class="font-bold text-orange-900 mb-2">🤝 Beggars and Good Deeds</h4>
             <p class="leading-relaxed text-orange-800 text-sm">
                For reference, there are quite a few beggars in Moscow, but ironically, almost no beggars freeze to death in Moscow because the indoor heating is so good. As an anecdote, Russians believe that if they do many good deeds, they will go to heaven. Perhaps due to the influence of Orthodox culture, they seem to believe that helping others is a way to save their own souls. Therefore, I often saw Russians readily give loose change from their pockets to beggars they encountered, instead of just passing by. I once heard that beggars abroad also like Russians the most, and you can see their warm side despite their seemingly cold exterior.
             </p>
          </div>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚜 War with Snow, and Mud</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
             Moscow has a well-equipped snow removal system. Even if it snows all night, the roads are cleaned as if nothing happened the next day. If you are lucky, you can even see a giant fleet of snowplows clearing the snow. But the real problem comes after that. The snowdrifts pushed to the roadside by the snowplows and the snow trampled by cars quickly turn into slushy mud piles or mud. 💩
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
             When you go out, your shoes inevitably get dirty, and even your pants get messy. And the sidewalks that have already frozen beyond clearing are really dangerous. ⚠️ In winter, you can see people falling here and there, and no one wants to hit their stiff body on the hard ground due to the cold. Moreover, if you fall and get your clothes dirty in the mud, it's just horrible to think about.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌼 Spring with Dandelion Seeds Scattering</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
             It snows in Moscow until April. Sometimes it snows until May, but it's rare. When spring comes and the snow and ice melt, you might think it would be entirely welcome, but the reality is not so romantic. This is because the dirty true face of the city, which was covered in white snow and ice, gradually begins to reveal itself. Russians keep many pets and are tolerant of street smoking, and countless cigarette butts and excrement that were buried in the snow all winter long collectively emerge from the melting snow. 🚬🐕
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
             Nevertheless, in May, Moscow transforms into a blue landscape as if nothing happened. Sprouts and flowers bloom all over the city, and among them, I especially remember seeing many <span class="text-yellow-600 font-bold">yellow dandelions</span>. Dandelions blooming on the roadside, between apartment complexes, and even in the cracks of sidewalks symbolize Moscow's spring.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
             By the end of May, these dandelion flowers turn into white fluff and float all over the city, and to exaggerate a bit, it was like <strong>snow falling in spring</strong>. I, who had pollen allergies, suffered from sneezing and runny nose throughout this period, but still, the vitality of these plants made me feel good. Also, colorful flowers bloom in urban parks, transforming the city, which was gray all winter, into a vibrant one. It seemed that Moscow welcomed a warmer spring because of its long winter. 🌸
          </p>

          <blockquote class="text-center font-serif text-xl text-russia-blue my-10 border-y-2 border-slate-100 py-8 leading-relaxed">
            "It had already been a year since I started living in Moscow.<br/>
            Moscow and its people, who initially felt cold and blunt,<br/>
            Now, I began to accept not only their outward appearance but also the warmth beneath,<br/>
            Just as they are."
          </blockquote>
        `,
      },
    },
    {
      id: 'post-107',
      title: {
        ko: '예비학부 마무리, 그리고',
        en: 'Finishing the Preparatory Program, and...',
      },
      subtitle: {
        ko: '맥주 한 캔의 용기와 빌렛(Ticket)의 운명',
        en: 'The Courage of a Can of Beer and the Fate of a Bilet (Ticket)',
      },
      imageUrl:
        'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1200&auto=format&fit=crop',
      isActive: true,
      comments: [],
      content: {
        ko: `
          <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
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
          <ul class="list-decimal list-inside space-y-3 text-slate-700">
              <li>교수님이 시험 전에 예상 문제 리스트를 학생 수의 3-4배, 많게는 10배 넘게 미리 나눠준다. (30~100문제)</li>
              <li>시험 당일 학생은 교수가 보는 앞에서 임의로 문제지를 한 장 선택한다. (뽑기 🎲)</li>
              <li>이 과정에서 학생은 어떤 문제를 고르게 될지 알 수가 없다. </li>
          </ul>
          
          <br/>
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
            <br/>
            <p class="leading-relaxed mb-6 text-slate-700">
             점수는 5단계 스케일을 적용하고 있는데 실제로는 1점은 주지 않고 2점부터 5점까지가 부여된다. 1점을 주지 않는 이유는 숫자 1이 몽둥이나 말뚝을 연상할 수 있다고는 해서 그렇다 한다. 2점은 미흡, 3점은 양호, 4점은 우수, 5점은 탁월이라고 러시아어로 불리지만 사실 2점은 낙제라 주는 경우가 거의 없고 3점만 맞아도 양호가 아닌 요구 수준에 못 미친다고 볼 수 있다. 
            </p>
          </div>

          <p class="leading-relaxed text-xl font-bold text-slate-800 text-center mt-12 mb-8">
            지인분의 노력 덕분일까 다행히 입학시험도 통과하였고,<br/> 
            이제 정말 ‘예비’게임이 아닌 <span class="text-russia-blue">‘본게임’</span>을 시작할 시간이 되었다. 🚀
          </p>
        `,
        en: `
          <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
            From the perspective of the overall curriculum, the preparatory program of Moscow State University was not an extremely difficult process to pass, although it required some effort. Of course, the difficulty level can be subjective, but you can gauge the approximate level by looking around. For example, most students can graduate safely as long as they don't skip half the classes or give up on their own.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
            The curriculum of the preparatory program itself includes many classes and a considerable amount of homework, so it strongly feels like they <span class="bg-yellow-100 px-1">drag students along by the scruff of their necks</span>. This is probably because the preparatory program is an institution operated with tuition fees from foreign students, so if the process is too difficult and dropouts occur, it directly impacts their finances by reducing the number of new students. There were no midterms each semester, only a final exam, and 70 points were enough to pass. 💯
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍻 The Courage of a Can of Beer</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            I took three subjects: Russian, mathematics, and physics. For Russian, I solved multiple-choice grammar problems in the format of <strong>TORFL (Test of Russian as a Foreign Language)</strong>, including speaking and writing.
          </p>
          
          <div class="bg-blue-50 border border-blue-100 p-6 rounded-lg my-6">
            <p class="leading-relaxed text-slate-700">
               On the day of the Russian speaking exam, an acquaintance from the same class and I went to a supermarket near the school and bought a <strong>can of beer</strong> to share before the exam, to relax a bit. 🍺 Looking back now, it seems like we were out of our minds, but I remember telling my acquaintance that thanks to that beer, my words flowed more smoothly, and I felt like I did better on the exam. With the thought that I was adapting very well to the local culture, I became increasingly proud of myself for even approaching exams in a <strong>bear-like Russian style</strong>. 🐻
            </p>
          </div>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">📐 Math, Physics, and Defense</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            The math exam had subjective questions, and I had to get both the solution process and the correct answer right. For me, who was accustomed to the Korean College Scholastic Ability Test where only the answer mattered regardless of the solution process, even the exam demanded additional effort. Fortunately, advanced topics like double integrals, which we learned in the latter half, were not included, so I was able to solve it relatively easily. I had thought Korea was a strong country in mathematics, but I realized that Russia was not to be underestimated.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
            There were two types of physics exams: the first was similar to the math exam, where I had to solve problems and write down the solution process and answers, and the other was a kind of <strong>'oral exam (defense)'</strong>. The level was not high, but I had to read other researchers' studies and prepare a short report to present. That wasn't the end of it; I had to answer the examiner's questions well during the presentation to pass. 🗣️
          </p>

          <p class="leading-relaxed mb-6 text-slate-700">
            As a chemistry major in college, and not yet having started graduate school in the completely unfamiliar field of nuclear physics, even writing a small review report was very challenging for me. Of course, the still unfamiliar Russian language was a big obstacle. I chose <strong>de Broglie's wave-particle duality</strong> as my topic. At the time, the idea that all matter could be both a particle and a wave was very shocking to me, so I wrote a report reviewing it. But looking back now, I think it was just a summary of a part of high school physics.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
             Perhaps because I felt my report was inadequate, I was very nervous during the presentation and Q&A session. The thought, <em>'I should have had a drink like when I took the Russian exam'</em>, crossed my mind. Still, somehow, I managed to finish the exam well.
          </p>

          <hr class="border-slate-200 my-8 w-1/3 mx-auto" />

          <p class="leading-relaxed mb-6 text-slate-700">
            Anyway, my grades were surprisingly consistent and good, so I received praise from the teachers and felt a small sense of accomplishment. Looking back now, I think I should have expressed my gratitude to the teachers more sincerely.
          </p>
          <blockquote class="border-l-4 border-russia-blue pl-4 py-2 italic text-slate-700 bg-slate-50 mb-8">
            "I want to take this opportunity to briefly express my gratitude to those who patiently guided students from all over the world, who were all so different. 🙏"
          </blockquote>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎓 Towards the Main Game</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            The preparatory program would conclude with this graduation exam, but I knew very well that the <strong>'main game'</strong> hadn't even started yet. The next step was to contact the department office of the university I was going to enter, get information about the entrance exam, and prepare for it. In my case, the preparatory program's graduation exam was in mid-May, and the main department's entrance exam was scheduled for around July, so I had about two months to prepare for the exam.
          </p>

          <p class="leading-relaxed mb-6 text-slate-700">
            Since I had about two months, I could have prepared calmly, but the past exam questions I downloaded from the internet didn't look like something a person could solve. 😵 At that time, even reading and understanding the problems was difficult with my skills. Fortunately, an acquaintance who had given me motor show tickets was already studying for a doctorate in that department, and thankfully taught me various things in a tutoring format.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
            When he explained something difficult, his <strong>sparkling eyes</strong> and his words, <em>"We still don't know much,"</em> are still vivid in my memory. I wondered if this was what a true scholar was like, and if I too could one day possess even a little bit of scholarship, but for now, I had to focus on the exam.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🇷🇺 Russia's Unique Exam System: Bilet (Билет)</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            The entrance exam was conducted differently from the exams taken at the preparatory program, in the way actual Russians take exams. The Russian exam has a unique system called <strong>"Bilet (Билет, English: Ticket)"</strong>. 🎫
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            The entrance exam was conducted differently from the exams taken at the preparatory program, in the way actual Russians take exams. The Russian exam has a unique system called <strong>"Bilet (Билет, English: Ticket)"</strong>. 🎫
          </p>
          <ul class="list-decimal list-inside space-y-3 text-slate-700">
              <li>The professor distributes a list of expected problems 3-4 times, sometimes even more than 10 times, the number of students, before the exam. (30-100 problems)</li>
              <li>On the day of the exam, the student arbitrarily selects one problem sheet in front of the professor. (Drawing lots 🎲)</li>
              <li>During this process, the student has no way of knowing which problem they will choose. </li>
          </ul>
          
          <br/>
          <p class="leading-relaxed mb-6 text-slate-700">
               Fortunately, if you have studied all the problems, it doesn't matter, but if you have only studied some, the outcome depends on whether you are lucky enough to pick a problem you know. Among Russians, there is a joke that if you study 99 out of 100 problems, you will inevitably pick the remaining one problem you didn't study, so some students don't study. 😂
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            After picking the problem, students are given time to prepare themselves. During this time, students can use paper and pens to organize and write down what they will present. When called, they sit one-on-one with the professor, make their presentation, and the professor asks related questions and determines the score based on the student's presentation and answers.
          </p>

          <div class="mb-8">
            <h4 class="font-bold text-slate-800 mb-2">📊 Russian Grading Scale (out of 5 points)</h4>
            <ul class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
              <li class="bg-red-50 text-red-800 p-2 rounded border border-red-100">
                <strong>2 points</strong><br/>Fail
              </li>
              <li class="bg-yellow-50 text-yellow-800 p-2 rounded border border-yellow-100">
                <strong>3 points</strong><br/>Pass
              </li>
              <li class="bg-blue-50 text-blue-800 p-2 rounded border border-blue-100">
                <strong>4 points</strong><br/>Good
              </li>
              <li class="bg-green-50 text-green-800 p-2 rounded border border-green-100">
                <strong>5 points</strong><br/>Excellent
              </li>
            </ul>
            <p class="mt-2 text-xs text-slate-400 text-center">
              * 1 point is not actually given, as it resembles a 'club' or 'stake'.
            </p>
            <br/>
            <p class="leading-relaxed mb-6 text-slate-700">
             The grading is based on a 5-point scale, but in practice, 1 point is not given, and scores are from 2 to 5. The reason 1 point is not given is said to be because the number 1 resembles a club or stake. 2 points is Unsatisfactory, 3 points is Satisfactory, 4 points is Good, and 5 points is Excellent in Russian. However, 2 points is practically a failing grade and rarely given, and even 3 points can be considered not meeting the required level.
            </p>
          </div>

          <p class="leading-relaxed text-xl font-bold text-slate-800 text-center mt-12 mb-8">
            Perhaps thanks to the efforts of my acquaintance, I fortunately passed the entrance exam,<br/>
            And now it was time to start the <span class="text-russia-blue">'main game'</span>, not the 'preliminary' game. 🚀
          </p>
        `,
      },
    },
    {
      id: 'side-2',
      title: {
        ko: '✨ 외전 (2) - 러시아의 뇌물',
        en: '✨ Side Story (2) - Bribery in Russia',
      },
      subtitle: {
        ko: '공기처럼 자연스러운 유혹, 그리고 생존을 위한 선택',
        en: 'A Temptation as Natural as Air, and a Choice for Survival',
      },
      imageUrl:
        'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=1200&auto=format&fit=crop',
      isActive: true,
      comments: [],
      content: {
        ko: `
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          ‘뇌물’ 하면 한국에서는 정치인들이나 고위 공무원들이 은밀하게 주고받는 검은돈이나 사과 상자(?)가 먼저 생각날 것이다. 📦 물론 한국도 예전에는 공공연히 뇌물이 있었지만 김영란법이 시행되고 사회가 투명해진 지금에 이르러서는, 공직자들의 노골적인 뇌물 수수가 그리 흔한 일은 아니다(적어도 나는 그렇게 믿고 싶다). 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💨 공기처럼 자연스러운 ‘뇌물’</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          하지만 러시아는 달랐다. 이 거대한 대륙에서는 공직 사회는 물론 서민들의 소박한 일상생활 속에서도 뇌물이 마치 공기처럼 자연스럽고 공공연하게 요구된다. 🇷🇺💨 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚨 경찰과의 황당한 첫 대면</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          내가 첫 번째 뇌물 수수 사건을 직관한 것은 수즈달이라는 작은 도시에 방문했을 때였다. 당시에 수즈달 크렘린을 보기 위해 다른 차들도 다 주차를 해 둔 공터에 잠시 차를 세워두었었다. (시골이라 주차 구역 표시가 코에 걸면 코걸이, 귀에 걸면 귀걸이 수준으로 잘 안 되어 있다.) 
          <br/><br/>
          그런데 구경을 마치고 차를 빼려고 보니, 경찰이 다가와 주차하면 안 되는 곳에 차를 댔다며 다짜고짜 벌금을 내라고 했다. 👮‍♂️ 버젓이 다른 러시아인들은 우리 양옆에 주차를 하고 유유히 차에서 빠져나오고 있는데, 유독 눈에 띄는 외국인이었던 우리 일행에게만 돈을 요구하는 것이다. 
          <br/><br/>
          처음엔 우리가 표지판을 잘못 본 게 아닌가 싶었지만, 나중에 알고 보니 러시아 경찰들은 뇌물을 뜯어낼 때 지갑 얇은 자국민보다는 돈도 많아 보이고 말도 안 통하는 데다 법적 지식도 부족해 트집 잡기 쉬운 외국인을 주요 고객(?)으로 삼는다고 했다. 💸
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⚖️ 정의보다는 ‘생존’</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          나와 같이 간 일행 A는 이를 명백한 외국인 차별이라며 따지려고 했지만, 러시아 짬바(?)가 좀 있던 다른 일행 B가 기겁하며 나서서 말렸다. 법정까지 갈 경우 재판관들도 다 경찰과 한통속이라 법정 싸움에서 이길 확률은 제로에 가깝고, 재수 없으면 벌금 폭탄은 물론 강제 추방까지 당할 수도 있다는 것이다. 😱 
          <br/><br/>
          기분 좋을 리 없는 상황에 어리둥절하고 있을 때, B가 능숙하게 “죄송하게 됐습니다”라며 경찰의 손에 슬쩍 뇌물을 쥐여주는 것을 보았다. 사소한 교통법규 위반도 법정에 가서 소명할 건 소명하고 정당하게 벌금을 내는 게 상식이지만, 그렇게 해봐야 경찰 주머니에 떨어지는 콩고물은 없으니 경찰도 대충 주위를 슬쩍 살피더니 이제 가봐도 된다는 눈치를 주었다. 러시아에 온 지 고작 한 달이나 되었을까, 내 상식을 산산조각 낸 아주 충격적인 경험이었다. 💥
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎫 여권을 지키는 평화로운 길</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          일행이 해준 말에 따르면, 예전에 다른 한국인이 비슷한 일로 뇌물을 주지 않으려고 끝까지 버티다 진짜로 법정까지 갔고, 결국에는 패소해서 엄청난 벌금은 물론이고 실제로 한국으로 강제 추방까지 당했다고 한다. 🛫🇰🇷 
          <br/><br/>
          그러니 혹시 이 책을 읽고 러시아에 가서 경찰이나 공무원과 시비가 붙었다면, 정의감은 잠시 내려놓고 그냥 돈 몇 푼 쥐여주는 것이 몸과 마음, 그리고 당신의 여권을 지키는 가장 평화로운 길이다. 🎫🕊️ 뇌물계에도 나름의 인플레이션이 존재하지만, 사소한 일로는 대략 5만 원에서 10만 원 선에서 아주 깔끔하게 정리가 되니 문제를 더 키우는 것보단 차라리 가성비가 좋다고 볼 수도 있다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍫 초콜릿 상자 속의 비밀</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          러시아에서 한 학기를 보내고 두 번째 학기가 시작되려 하던 1월의 한겨울이었다. 아내는 2인실 기숙사 방을 운 좋게 혼자 쓰고 있었는데, 새 학기에 룸메이트가 배정될지도 모른다는 청천벽력 같은 소식이 들려왔다. ⚡ 아내의 방을 우리 부부의 아지트로 요긴하게 쓰고 있었기에, 우리는 이 소중한 아지트가 날아갈까 봐 굉장히 긴장했다. 
          <br/><br/>
          하지만 나는 이미 한 학기 동안 러시아에서 뇌물이 어떤 메커니즘으로 작동하는지 어느 정도 많이 익숙해진 상태였다. 그저 방구석에서 벌발 떨고 있기보다는, 이 상호 호혜로운(?) 시스템을 적극적으로 활용해 먼저 행동에 나서는 것이 현명하다고 판단했다. 😎
        </p>

        <p class="leading-relaxed mb-6 text-slate-700">
          러시아인들은 보통 단 음식(특히 초콜릿)에 환장한다는 고급 정보를 입수 우리는, 방 배정의 전권을 쥔 사감을 매수하기 위해 마트로 달려갔다. 🍫 꽤 그럴싸하고 고급스러운 초콜릿을 고른 뒤, 박스를 조심스럽게 뜯어 그 안에 아주 잘 보이도록 2천 루블(약 3~4만 원)짜리 지폐와 애교 섞인 작은 편지를 살포시 찔러 넣었다. 💌 
          <br/><br/>
          사감을 찾아가 “새해 인사를 드리러 왔습니다”라는 가식적인 멘트와 함께 초콜릿 상자를 건넸다. 그리고 “아내가 지금 쓰는 방을 아주 마음에 들어 하는데, 혹시 이번 학기에 룸메이트가 새로 올까요?”라며 슬쩍 운을 띄웠다. 
          <br/><br/>
          그 사감은 역시나 이 바닥의 산전수전을 다 겪은 아주 눈치가 빠른 사람이었다. 그녀는 우리의 말을 듣자마자 자애로운 미소를 지으며 “별로 걱정할 일 없을 거야”라고 우리를 안심시켜 주었고, 결과적으로 그렇게 우리는 단돈 4만 원에 쾌적한 아지트를 사수할 수 있었다. 사람은 정말이지 무서운 적응의 동물이다. 🐾
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚇 지하철역의 불심검문</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          모스크바 경찰들이 곳곳에 배치되어 있다. 특히 지하철역이나 관광객이 밀집한 곳에는 무장한 경찰들을 심심치 않게 볼 수 있는데, 물론 치안을 지키는 업무가 있지만 이들은 보통 할 일 없이 자기들끼리 수다나 떨며 시간을 때운다. 🗣️ 그러다 심심해지면 지나가는 외국인들을 콕 집어 불심검문을 한다. 여권과 거주 등록증 등 필수 서류가 완벽한지 트집을 잡고, 행선지가 어딘지 꼬치꼬치 캐물으며 가방 안의 소지품까지 탈탈 턴다. 하나라도 꼬투리가 잡힌다면 뇌물없이 빠져나오기가 쉽지 않다. 👜🛑
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🥩 고기 불판과 끈질긴 대치</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          한 번은 친구들과 모스크바 외곽 공원에서 고기를 구워 먹기위해 지하철을 타러 이동 중이었다. 아니나 다를까, 한 경찰이 내 앞을 가로막더니 검사할 게 있다며 나를 지하철역 구석의 으슥한 사무실로 끌고 갔다. 🏚️ 여권과 서류를 완벽하게 보여주니 딱히 잡을 꼬투리가 없었던 모양이다. 
          <br/><br/>
          그때부터 “어디 가냐”, “왜 가냐”, “친구는 몇 명이냐” 등 시시껄렁한 호구조사가 시작되었다. 소지품도 샅샅이 뒤졌지만, 나는 고기 굽기 불판 담당이라 가방 안에는 무식하게 큰 철망 말고는 특별한 게 없었다. 🕸️ 그러자 경찰은 대놓고 본색을 드러내기 시작했다. “술은 먹냐?”, “술은 누가 갖고 있냐?”, “네가 술 담당 이었으면 참 좋을 텐데” 하며 질척거리는 이상한 말들만 늘어놓았다. 내가 일부러 러시아어를 못 알아듣는 척하며 끝까지 지갑을 열 생각을 안 하자, 결국 지친 경찰은 트집 잡기를 포기하고 나를 풀어주었다. 🙌
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💬 “안 되는 것도 된다”</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          이런 식으로 지나가는 애먼 행인을 잡아다 오랜 시간 놔주지 않으며 알아서 돈을 바치기를 기다리는 악질 경찰들이 모스크바에는 널려 있다. 정 뜯어먹을 외국인이 없으면 만만한 자국민이라도 잡아서 이런 식으로 귀찮게 군다고 하니, 러시아 내에서 경찰에 대한 이미지가 바닥을 기는 것은 너무나 당연한 일이다. 📉
          <br/><br/>
          길거리의 말단 경찰부터 기숙사 사감까지, 돈 몇 푼이면 법과 원칙이 마법처럼 구부러지는 이 기상천외한 뇌물 에피소드들을 겪을 때마다 내 머릿속을 강렬하게 맴도는 문장이 하나 있다. <strong>"러시아에선 되는 것도 안 되고, 안 되는 것도 된다."</strong> ✨
        </p>

        <p class="leading-relaxed mb-6 text-slate-700">
          이 말은 합법적인 일도 불합리하게 거절당하는 러시아식 관료주의와, 뒷돈 몇 푼이면 안 될 일도 기적처럼 통과되는 러시아의 모순을 가장 완벽하게 관통하는 철학이다. 만약 누군가 이 매력적이고도 골치 아픈 동토의 땅으로 떠날 준비를 하고 있다면, 두꺼운 외투도 중요하지만 이 씁쓸한 명언을 가슴 깊이 가장 먼저 새겨두길 바란다. 🙏❄️
        </p>
      `,
        en: `
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          When you hear 'bribe' in Korea, you probably first think of black money secretly exchanged by politicians or high-ranking public officials, or perhaps an apple box(?). 📦 Of course, bribes were openly common in Korea in the past, but now that the Kim Young-ran Act has been implemented and society has become more transparent, blatant bribery by public officials is not so common (at least, I want to believe that).
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💨 Bribery as Natural as Air</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          But Russia was different. On this vast continent, bribes were demanded as naturally and openly as air, not only in public office but also in the humble daily lives of ordinary people. 🇷🇺💨
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚨 My Absurd First Encounter with the Police</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The first time I witnessed a bribery incident was when I visited a small city called Suzdal. At that time, I had briefly parked my car in an empty lot where other cars were also parked to see the Suzdal Kremlin. (In the countryside, parking signs are so poorly marked that they are almost non-existent.)
          <br/><br/>
          But when I finished sightseeing and tried to move my car, a police officer approached me and demanded a fine, saying I had parked in a no-parking zone. 👮‍♂️ While other Russians were openly parking on both sides of us and leisurely getting out of their cars, he was demanding money only from our group, who were conspicuously foreigners.
          <br/><br/>
          At first, I wondered if we had misread the sign, but I later found out that Russian police often target foreigners, who appear to have more money, don't speak the language well, and lack legal knowledge, as their main 'customers' when extorting bribes, rather than their own thin-walleted citizens. 💸
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⚖️ Survival Over Justice</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          My companion A, who was with me, tried to argue that this was clear discrimination against foreigners, but my other companion B, who had some 'Russian experience,' freaked out and stopped him. He said that if we went to court, the judges would all be in cahoots with the police, so the chances of winning a court battle were close to zero, and if we were unlucky, we could face not only a huge fine but also forced deportation. 😱
          <br/><br/>
          While I was bewildered by the unpleasant situation, B skillfully said, "I'm sorry," and subtly slipped a bribe into the police officer's hand. It is common sense to explain even a minor traffic violation in court and pay the fine fairly, but there would be no crumbs for the police to pick up if we did that, so the police also casually glanced around and gave us a nod to go. I had been in Russia for only about a month, and it was a shocking experience that shattered my common sense. 💥
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎫 The Peaceful Way to Protect Your Passport</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          According to what my companions told me, another Korean once refused to give a bribe for a similar matter and ended up going to court. In the end, he lost the case and was not only fined a huge amount but also actually deported to Korea. 🛫🇰🇷
          <br/><br/>
          So, if you ever get into an argument with the police or a public official in Russia after reading this book, put aside your sense of justice for a moment and just give them a few pennies. It is the most peaceful way to protect your body, mind, and your passport. 🎫🕊️ Although there is a certain inflation in the bribery system, minor matters are usually settled cleanly for about 50 to 100 dollars, so it can even be seen as cost-effective rather than escalating the problem.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍫 The Secret in the Chocolate Box</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          It was the middle of winter in January, after I had spent one semester in Russia and was about to start my second. My wife was lucky enough to be using a double room in the dormitory by herself, but then came the shocking news that a new roommate might be assigned to her for the new semester. ⚡ Since we had been conveniently using my wife's room as our couple's hideout, we were very nervous that this precious hideout might be taken away.
          <br/><br/>
          However, I had already become quite familiar with how bribery works in Russia during my first semester. Rather than just trembling in my room, I judged it wise to actively utilize this mutually beneficial(?) system and take action first. 😎
        </p>

        <p class="leading-relaxed mb-6 text-slate-700">
          We received insider information that Russians are usually crazy about sweet foods (especially chocolate), so we rushed to the supermarket to bribe the dorm supervisor, who had the full authority to assign rooms. 🍫 After choosing a fairly plausible and luxurious chocolate, we carefully opened the box and discreetly slipped in a 2,000 ruble (about 30-40 dollars) banknote and a small, charming letter so that it was clearly visible. 💌
          <br/><br/>
          We found the supervisor and, with a hypocritical comment of "We've come to wish you a Happy New Year," handed her the chocolate box. And then we subtly hinted, "My wife really likes the room she's using now, so will a new roommate be coming this semester?"
          <br/><br/>
          The supervisor, having seen it all in this business, was a very quick-witted person. As soon as she heard our words, she smiled benevolently and reassured us, "You don't have to worry too much." As a result, we were able to secure our comfortable hideout for just 40 dollars. Humans are truly animals of terrible adaptation. 🐾
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚇 Subway Station Stop-and-Frisk</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Moscow police officers are deployed everywhere. Especially in subway stations and areas crowded with tourists, you can often see armed police officers. Of course, they have duties to maintain public order, but they usually just pass the time chatting among themselves. 🗣️ Then, when they get bored, they pick out passing foreigners and conduct stop-and-frisks. They pick faults with passports, residence permits, and other essential documents, ask detailed questions about destinations, and thoroughly search bags. If even one flaw is found, it is not easy to get out without a bribe. 👜🛑
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🥩 Meat Griddle and Persistent Standoff</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Once, my friends and I were on our way to the subway to grill meat at a park on the outskirts of Moscow. As expected, a police officer blocked my way and said he had something to inspect, then dragged me into a gloomy office in a corner of the subway station. 🏚️ I showed him my passport and documents perfectly, so it seemed he had no excuse to find fault.
          <br/><br/>
          From then on, trivial interrogations began: "Where are you going?", "Why are you going?", "How many friends do you have?" They searched my belongings thoroughly, but since I was in charge of the meat grilling griddle, there was nothing special in my bag except a ridiculously large wire mesh. 🕸️ Then the police officer began to reveal his true colors. He kept making strange remarks, like "Do you drink?", "Who has the alcohol?", "It would be great if you were in charge of the alcohol." When I deliberately pretended not to understand Russian and stubbornly refused to open my wallet, the exhausted police officer eventually gave up trying to find fault and let me go. 🙌
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💬 "What's Impossible is Possible"</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          There are countless malicious police officers in Moscow who, in this way, apprehend innocent passersby and detain them for a long time, waiting for them to offer money. If there are no foreigners to extort, they even bother their own vulnerable citizens in this manner, so it is only natural that the image of the police in Russia is at rock bottom. 📉
          <br/><br/>
          From street-level police officers to dorm supervisors, there is one sentence that strongly resonates in my mind every time I experience these bizarre bribery episodes where laws and principles are magically bent with a few pennies: <strong>"In Russia, what's possible is not possible, and what's not possible is possible."</strong> ✨
        </p>

        <p class="leading-relaxed mb-6 text-slate-700">
          This statement is a philosophy that perfectly penetrates the contradiction of Russia, where legal matters are unreasonably rejected due to Russian-style bureaucracy, and impossible matters are miraculously passed with a few bribes. If anyone is preparing to leave for this charming yet troublesome frozen land, a thick coat is important, but I hope they engrave this bitter saying deep in their heart first. 🙏❄️
        </p>
      `,
      },
    },
  ],
};
