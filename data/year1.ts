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
        'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop', // Airplane wing or airport
      isActive: true,
      comments: [],
      content: {
        ko: `
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
        `,
        en: `
          <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
            For personal reasons, I had to leave for Russia two days before my wife. My mother and younger sibling came to see me off at Incheon International Airport, and after saying our goodbyes, I boarded the plane.
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            With a soldier's spirit ingrained in me, I sat down with a grim determination to complete the <span class="font-bold text-russia-blue">mission(?)</span> of finishing my three-year master's program, including the preparatory program. However, tears welled up, perhaps because I thought about not being able to see my parents, siblings, and friends, or perhaps because of a vague fear of the unfamiliar land. 😭
          </p>

          <p class="leading-relaxed mb-8 text-slate-700">
            I cried the most when the in-flight announcement was made before departure, as it finally hit me that I was really leaving.
          </p>

          <div class="bg-slate-50 p-6 rounded-xl border-l-4 border-russia-blue mb-8">
            <p class="leading-relaxed text-slate-700 italic">
              "Just as I was starting to feel a little calmer, the in-flight meal was served. When the flight attendant asked what I would like to drink with my meal, I found myself asking for <span class="font-bold text-wine-600">wine 🍷</span>, as if drawn by something. I thought maybe a little alcohol would help."
            </p>
          </div>

          <p class="leading-relaxed mb-6 text-slate-700">
             However, the result was the complete opposite. After drinking the wine, another wave of inexplicable sadness and fear washed over me. After barely managing to compose myself, I felt sleepy. I think I slept soundly for a while. I woke up when they were serving another meal, and the same thing repeated. I ordered wine again, and after finishing my meal and wine, I felt another surge of emotion and fell asleep again. 😴
             <br/><br/>
             The 14-hour flight felt short, and before I knew it, I had arrived at <strong>Moscow Sheremetyevo International Airport</strong>. 🇷🇺
          </p>

          <hr class="border-slate-200 my-8 w-1/3 mx-auto" />

          <p class="leading-relaxed mb-6 text-slate-700">
            With the little Russian I had studied in Korea, I could barely understand the locals in Moscow. Still, I could tell that a huge number of people were soliciting for taxis at the airport. 🚕
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            I had pre-arranged for an admission guidance service from the Moscow State University student council, so there was someone to meet me, and I was able to travel safely with my group to a dormitory near the city center. It took a little over an hour from the airport to the dormitory, and the scenery of Moscow from the taxi was all so new and fascinating.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏠 A Strange Dorm, The First Night</h3>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            The dormitory I arrived at was in a prime location, right next to a subway station. It was called a dormitory, but it was actually an apartment with two rooms. Each room could accommodate two people, so up to four students could live in one unit. I shared a room with a roommate who was five or six years younger than me, and in the other room, a lucky Korean got to have the room all to himself.
          </p>

          <p class="leading-relaxed mb-6 text-slate-700">
            The room was entirely made of old wood. Fortunately, this dormitory was relatively well-maintained, so they said there were no cockroaches. The wooden bed had a bedsheet and a blanket, but they were all so old that I couldn't use them. The blanket, in particular, was incredibly thick and scratchy, so I immediately stored it in a corner of the closet.
          </p>

          <p class="leading-relaxed mb-6 text-slate-700">
            After looking around the room for a bit, I had to deal with the urgent matter of water. Like in most of Europe, the tap water contained a lot of <strong>lime</strong>, and I was warned not to drink it carelessly as it could cause kidney stones. Even when boiled, I could see lime floating around, so I didn't feel like drinking it. 🚰
          </p>
          
          <p class="leading-relaxed mb-8 text-slate-700">
            I bought some necessary water and snacks, and when I went outside alone for a moment, it hit me that my life in Russia was truly beginning. <span class="bg-yellow-100 px-1">What kind of adventures awaited me, a mix of excitement and an unknown anxiety that took turns dizzying me that night.</span> It was my first night in a not-so-cozy dormitory, but perhaps because I had been so tense all day in a new environment, I slept well once I relaxed.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">📝 Encountering Bureaucracy</h3>

          <p class="leading-relaxed mb-6 text-slate-700">
            To enter a Russian university or graduate school, it is common to go through a preparatory program. So I went with the others who had come with me to register for the preparatory program. To register, we had to get our Russian documents notarized and submit Russian translations of our passport copies.
            <br/><br/>
            Notarizations and translations from other countries were not accepted. So no matter how much the Republic of Korea's Ministry of National Defense guaranteed it and my international passport proved it, it was useless in front of an old desk in Russia, full of the remnants of the former Soviet Union. Next, we went to a large supermarket to buy necessary items. I was especially careful to choose the softest and fluffiest blanket and pillow. 🛌
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚕 A Senior's(?) Humiliation: The Taxi Scam</h3>

          <p class="leading-relaxed mb-6 text-slate-700">
            My wife arrived two days after me, as scheduled. As a 'senior' who had lived in Russia for two days, I puffed out my chest and headed to the airport with great confidence. 😤 It had only been two days, but I was so happy to see her, perhaps because I now had someone to rely on emotionally.
          </p>

          <p class="leading-relaxed mb-6 text-slate-700">
            The person who helped me on the day I arrived told me not to pay more than 30,000 won, so I refused every time the taxi touts quoted a price. But one tout readily agreed to 30,000 won, so I took his taxi. At that moment, I thought everything was going well.
          </p>
          
          <div class="bg-red-50 border border-red-200 rounded-lg p-6 my-6">
            <p class="leading-relaxed text-red-900 font-medium mb-2">💸 When we arrived at the dormitory, the driver demanded the taxi fare.</p>
            <p class="leading-relaxed text-red-800">
              When I said I had already paid the fare, he said that was a brokerage fee and the taxi fare came out to be <strong>180,000 won</strong>. I called a Korean acquaintance for help, but it wasn't easy. They said that these taxi drivers are sometimes connected to the Russian mafia, and I didn't want to cause any trouble right after arriving, so I paid the fee with tears in my eyes.
            </p>
          </div>

          <p class="leading-relaxed mb-6 text-slate-700">
            The gloomy sky, the cold weather, the unfriendly people, and the scam due to my foolishness... all of these things were enough to ruin my first impression of Russia. Thinking that this was just the beginning, the next three years seemed daunting.
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-800 font-bold text-lg text-center my-10">
            "It seemed I had to keep my wits about me to safely achieve my goals<br/>in this unfamiliar place, among these unfamiliar people. 👊"
          </p>

          <p class="leading-relaxed mb-6 text-slate-700">
            Still, on the other hand, I comforted myself by thinking, 'people live here too.' And so, my first few days in Russia passed in a flash of anger and resolve.
          </p>
        `,
      },
    },
    {
      id: 'post-101',
      title: {
        ko: '모스크바가 모스크바 했다',
        en: 'Moscow Being Moscow',
      },
      subtitle: {
        ko: '기숙사 생활과 러시아의 이면',
        en: 'Dorm Life and the Other Side of Russia',
      },
      imageUrl:
        'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop', // Moscow Hotel/Building looking like dorm or city vibe
      isActive: true,
      comments: [],
      content: {
        ko: `
          <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
            예비학부 등록은 이미 한 번 해봤기 때문에 이젠 아내의 예비학부에 등록을 도와줬다. 예비학부에서는 여러 기숙사를 배정해주시는데 등록과정에서 우리가 <strong>부부 💑</strong>임을 밝혔더니 같은 기숙사에 배정을 해주었다.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
            부부가 같은 방에서 지낼 수 있는 가족 전용 기숙사는 아니었지만 가족기숙사보다 오히려 더 깨끗하다는 말과 저렴하다는 말에 예비학부 1년 간은 해당 기숙사에 머물기로 했다. 아내는 나와는 다른 층에 2인실 방을 배정받았는데 다행히 오기로 했던 룸메가 오지 않는 덕에 아내는 넓은 방을 혼자 쓰게 되었다. 🍀 공부해야 하는 시간이 많아 서로 바빴지만 아내 방에 놀러가는 것이 최고의 힐링이었다.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">👫 부부 기숙사와 새로운 인연</h3>

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

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎓 학생이라는 신분의 양면</h3>

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
        `,
        en: `
          <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
            I had already registered for the preparatory program once, so this time I helped my wife register for hers. The preparatory program assigned several dormitories, and when we revealed that we were a <strong>married couple 💑</strong> during the registration process, they assigned us to the same dormitory.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
            It wasn't a family dormitory where a married couple could live in the same room, but we decided to stay there for the first year of the preparatory program because we heard it was cleaner and cheaper than the family dormitory. My wife was assigned a double room on a different floor from me, and fortunately, the roommate who was supposed to come didn't show up, so my wife got to use the spacious room by herself. 🍀 We were both busy with our studies, but visiting my wife's room was the best way to relax.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">👫 Married Dorm Life and New Connections</h3>

          <div class="bg-slate-50 p-6 rounded-xl border border-slate-200 my-8">
            <h4 class="font-serif font-bold text-slate-800 mb-2">🏠 The Mystery of the Next Room</h4>
            <p class="leading-relaxed text-slate-700">
              As I mentioned in the previous post, the dormitory we stayed in had two rooms in one unit. A Japanese female student lived in the room next to my wife's. She seemed to be a reclusive loner, a so-called <strong>'hikikomori'</strong>. Although the rooms were different, she shared the kitchen and bathroom with my wife, but they rarely ran into each other. When they did cross paths on the stairs, she would say 'sumimasen' and run away. 🏃‍♀️💨<br/>
              She didn't use the kitchen and didn't seem to have any social life, rarely leaving her room. Thanks to this, my wife was able to use the dormitory comfortably. I don't know how she ended up studying so far away in Russia, but I hoped she would finish her studies well. 🙏
            </p>
          </div>

          <p class="leading-relaxed mb-6 text-slate-700">
            My roommate was a few years younger than me (I'll call him P), and he was tall and handsome. He was also very good at English and had a great personality, so I liked him very much. 👍 In addition, there was S, a girl who was good at Japanese, whom I met at the airport. I'll write more about her later, but my wife and I were able to make many good memories with them.
          </p>

          <p class="leading-relaxed mb-6 text-slate-700">
            And so I made Korean friends (most of them were younger than me as I came at a late age), and I was also able to make Russian friends who were learning Korean. In Russia, a site called <strong>Yandex</strong> serves the same role as our Naver, and <strong>VK (Vkontakte)</strong> is similar to our KakaoTalk. In addition, by installing various services provided by Yandex (Yandex Taxi 🚖, Yandex Maps 🗺️), I was gradually patching myself to the local Russian environment.
          </p>

          <hr class="border-slate-200 my-8 w-1/3 mx-auto" />

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎓 The Double-Edged Status of a Student</h3>

          <p class="leading-relaxed mb-6 text-slate-700">
            In Russia, there is a tendency to look down on the <span class="text-russia-blue font-bold">status of a student</span>. Just for being a student, I was not treated as an adult and was sometimes subjected to unfair treatment, from light scolding or reprimands to insults. 😤
          </p>

          <p class="leading-relaxed mb-6 text-slate-700">
            Of course, there are also many benefits to being a student. Not only can you get discounts at most tourist attractions, but you can also use most of the public transportation in Moscow for less than 10,000 won a month. 🚇 These discounts were applied in the most absurd places.
          </p>

          <div class="bg-yellow-50 p-4 border-l-4 border-yellow-400 my-6 italic text-slate-700">
            "Once, I was caught by the police for a lane violation, but when I showed them my student ID, they gave me a discount on the fine. Of course, it wasn't an official fine, but a bribe. 💸👮‍♂️"
          </div>

          <p class="leading-relaxed mb-6 text-slate-700">
            There was one particularly unpleasant experience. I accidentally left my key in my room, and my roommate locked the door and left. I had to ask the dorm supervisor to open the door for me. I could have accepted a fine or a warning, but I had to listen to a <strong>10-minute lecture</strong>. 🗣️💢
          </p>

          <p class="leading-relaxed mb-6 text-slate-700">
            Another time, I stood up to a supervisor who was about to lecture me over something trivial, and my life became much more comfortable after that. This Russian attitude of being <strong>strong against the weak and weak against the strong</strong> often got on my nerves during my stay in Russia.
          </p>

          <p class="leading-relaxed mb-6 text-slate-700">
            In Russia, even Russians themselves are said to often say this.
          </p>

          <blockquote class="text-center font-serif text-2xl font-bold text-russia-blue my-10 border-y-2 border-slate-100 py-6">
            "Это Москва"<br/>
            <span class="text-lg font-normal text-slate-500 mt-2 block">(This is Moscow)</span>
          </blockquote>

          <p class="leading-relaxed mb-6 text-slate-700">
            This means, for better or worse, <span class="bg-russia-blue/10 px-1">that's just how Moscow is, so you have to accept it.</span> It implies that it's different, and that you have to accept the difference, but in reality, you end up using it more often in bad situations.
          </p>

          <p class="leading-relaxed text-xl font-bold text-slate-800 text-center mt-8">
            To put it in modern terms, it's like saying, "Moscow being Moscow." 🤷‍♂️🇷🇺
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
        'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop', // Group of friends/People talking
      isActive: true,
      comments: [],
      content: {
        ko: `
          <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
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
        `,
        en: `
          <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
            In many ways, life in Russia was a valuable experience that awakened me to the value of <span class="font-bold text-russia-blue">'difference'</span>. Rather than being vaguely different, I would like to introduce some of the differences in the Russian language and its people.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🤔 How to Ask Questions</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            Compared not only with English, which is most familiar to us, but even with Japanese, which has a similar word order, Russian feels like a very different language. One striking difference is that in a question, the stress does not fall at the end of the sentence, but on the word you want to ask about. For example, in Korean, if you ask "Did you go to school?", you would usually raise your intonation at the very end. In Russian, however, you can ask what is essentially the same sentence in three different ways simply by shifting the intonation.
          </p>
          <ul class="list-none space-y-2 mb-6 bg-slate-50 p-6 rounded-lg border border-slate-100">
            <li class="flex gap-3">
              <span class="font-bold text-russia-blue">1.</span>
              <span>"<strong class="text-slate-900">Did you</strong> go to school?" (Confirming that <strong class="text-slate-900">you</strong> went, not someone else)</span>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-russia-blue">2.</span>
              <span>"Did you go to <strong class="text-slate-900">school</strong>?" (Confirming that the place you went was <strong class="text-slate-900">school</strong>)</span>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-russia-blue">3.</span>
              <span>"Did you <strong class="text-slate-900">go</strong> to school?" (Confirming the action <strong class="text-slate-900">itself</strong>)</span>
            </li>
          </ul>
          <p class="leading-relaxed mb-6 text-slate-700">
             At first glance, it's hard to feel the difference, but usually, people ask about the action itself, and you get used to it surprisingly quickly as you learn Russian. In fact, there were often times when I found it strange that other languages could have conversations without this. 
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🔀 Seemingly Non-existent Word Order</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            If you ask a Russian if there is a word order, they will say no. In fact, grammatically, this is both true and false. For example, in the sentence <strong>"I love you,"</strong> the word order rarely changes except in special (or omitted) cases, but in Russian, almost any word order is possible.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
            There are 6 ways to arrange 3 words, but the most frequently used word orders are about two, the same as in Korean: "I you love" and "I love you." Since Russian verbs contain some information about the subject (I, you, third person, we, plural you, plural third person), the freedom of omission is higher than in Korean. However, if you omit or arrange words randomly, Russians will scold you for speaking that way, so it takes effort to learn the natural word order.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🙇‍♂️ Formal and Informal Speech in Russian</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            Contrary to the stereotype of rough Russian "bear" brothers and sisters being completely impolite, surprisingly, Russian has a formal form of address. Of course, English also has more polite words, but in Russian, there are separate words to express politeness in verbs, not just word choice, just like in Korean.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
            However, the difference from Korean is that the criterion for using formal language is <span class="bg-yellow-100 px-1">familiarity</span>, so with a few exceptions, family members never use formal language, even to their grandparents. When I first didn't know their culture, I thought, <em>'These people have no manners at all,'</em> when a Russian friend called their parents by their first name or 'you.' 😅
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
            Even between men and women who meet as a potential couple, they rarely use formal language except when they first meet. Of course, you use honorifics for people you meet in a public capacity (school or company, etc.). Even if a restaurant or cafe employee calls you 'you,' it's a sign of friendliness, so you don't need to be too upset, but I was not happy about it the whole time.
          </p>
          <div class="bg-slate-50 p-6 rounded-lg border-l-4 border-russia-blue mb-6">
            <p class="leading-relaxed text-slate-700 text-sm">
              <span class="font-bold">💡 Tip: Calling Names</span><br/>
              For reference, when calling a Russian person, you use a short name. As far as I know, all names have a short name. For example, Anastasia is called <strong>Nastya</strong>, Alexander is called <strong>Sasha</strong>, and Yekaterina is called <strong>Katya</strong>. But in official settings or to be polite, you use both the first name and patronymic (father's name). In English, you would use Mr., Miss, Doctor, Junior, etc., but in Russian, you would say <span class="italic">Ivan Sergeyevich (Ivan, son of Sergey)</span>, <span class="italic">Irina Mikhailovna (Irina, daughter of Mikhail)</span>.
            </p>
          </div>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">😶 Dealing with Strangers</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            When I first landed at Moscow Sheremetyevo Airport and went through the admission process, I realized that the unfriendliness of Russians was not an exaggeration at all. However, this perception changed a bit over time, and the reason is that Russians generally don't think they need to be kind to strangers. But if you have even a slight acquaintance with someone (even a fellow passenger on a train), they become very polite and start to save face.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
             There were many times when I wondered if they were the same people. People who would casually use abusive language on the street were so nice when they were my friends in Russia, and if we sat together for just a few hours on a train or bus, they would share their food and be surprisingly kind. They had their own reasons for treating strangers and acquaintances so differently.
          </p>
          <ul class="list-disc list-inside space-y-2 mb-6 text-slate-700 bg-slate-50 p-6 rounded-lg">
             <li>The naive and noble Slavic people have been exploited by foreign powers since long ago, so they have become wary of strangers. 🛡️</li>
             <li>A great Russian writer named Pushkin said, <strong>‘Smiling at a stranger is something only a fool does.’</strong> 😐</li>
          </ul>
          <p class="leading-relaxed mb-6 text-slate-700">
             Whatever the reason, it was impossible to convince me.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🤣 Russian Jokes</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            After arriving in Russia, I once bought a Russian joke book from a bookstore to learn Russian in a fun way. Since it was a book for beginners, there weren't many words I didn't know, so there was no major difficulty in reading it. When I first read a few, I wondered if I was not understanding them correctly, but after reading a few more, I just couldn't figure out where to laugh. 
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
             I called a Russian friend and asked him to take a look with me. He burst out laughing from the first joke and asked where I bought it. I was completely dumbfounded, but I politely asked which part was funny. My friend kindly explained the punchline and the explanation, but it took me some time to get used to Russian jokes after that. This difference in humor code was not just due to distance.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌨️ Etc.</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            The idea that Russians are strong against the cold seems to be half right and half wrong. When I was attending a Russian language academy in Korea, there was a native speaker instructor who would bundle up from head to toe with clothes, a hat, and gloves whenever it got a little cold. The thought that Russia must be very cold always lingered in my mind. When I arrived in Russia, I saw many people like my Russian teacher. In that sense, the statement that all Russians are physically strong against the cold seems to be wrong. Besides, when you go inside in Russia, most buildings have free heaters that are so warm, so it's a bit of a stretch to think that they have a physical trait of being used to the cold because of the cold weather. I think the reason why Russians can be strong against the cold is because of the winter gear they have. 🧣🧤
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
             Also, in Russia, you have to be careful with your choice of words when addressing a woman. Even if a woman has completely white hair, it is very rude to call her <strong>'grandmother'</strong>. 👵❌ Once in class, the Russian teacher asked me to describe her, and I said 'a slightly cranky-looking but kind-hearted grandmother,' and I was scolded for an hour or two.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
             Likewise, it is also rude to call someone who looks like a middle-aged woman an <strong>'auntie,'</strong> and I heard the word 'auntie' used at the airport as a mild curse word. So when I asked how to address an unknown Russian woman, they told me to call all Russian women <strong>'devushka (young lady)'</strong>. After being thoroughly scolded by aunties and grandmothers in Russia, you won't have the slightest desire to call them young ladies.
          </p>

          <hr class="border-slate-200 my-8 w-1/3 mx-auto" />

          <p class="leading-relaxed mb-6 text-slate-700">
             They were very different. It wasn't to the point where I couldn't live, but they were also people who I couldn't readily feel close to. However, they are not necessarily wrong. 
          </p>
          <p class="leading-relaxed text-xl font-bold text-slate-800 text-center mt-8">
            I resolved to grow my own capacity, as I was still a person who was not yet ready to readily accept their differences. 🌱
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
        'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop', // Library/Study (Updated)
      isActive: true,
      comments: [],
      content: {
        ko: `
           <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
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
        `,
        en: `
           <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
             The preparatory program of Moscow State University has long been more famous among international students by its nickname <strong>‘TsMO (ЦМО, Center for International Education)’</strong>. Although the official name was changed to <strong>'IRYaK (ИРЯиК, Institute of Russian Language and Culture)'</strong> in 2013, many people, including myself who first set foot in Russia in 2014, still called the preparatory program 'TsMO'. I assume it was because it was easy to pronounce and short.
           </p>

           <p class="leading-relaxed mb-6 text-slate-700">
             The preparatory program of Moscow University was not an independent building as one might commonly imagine, but rather used a part of an existing large building. Science and humanities students took classes in different buildings, about a 3-minute walk apart. Since I was a science student and my wife was a humanities student, sometimes when we had lunch together or went home together, the person who finished first would go to the other building and wait.
           </p>
           
           <div class="bg-slate-50 border border-slate-200 p-6 rounded-lg my-6">
             <p class="leading-relaxed text-slate-700 italic">
               "Around the preparatory program, you could often see signs like '○○ University ○○ Department' on just one floor of a building. Seeing even universities using only a part of a building, I was quite shocked by its similarity to the Korean hagwon (private academy) system. 🏢"
             </p>
           </div>

           <p class="leading-relaxed mb-6 text-slate-700">
             The preparatory program is not just a language training institution, but a course where most students enroll with the goal of entering an undergraduate or graduate program. Therefore, upon admission, they ask for your intended major. You don't decide on a specific major, but you choose a broad field such as history, language, engineering, or natural sciences, and your courses for the year will vary accordingly. I chose the <strong>natural sciences track</strong> and took mathematics and physics along with Russian, while my wife chose the <strong>language (Russian-Korean translation and interpretation) track</strong> and learned Russian history and culture.
           </p>

           <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⏱️ Russian Class Time, Para (Пара)</h3>
           <p class="leading-relaxed mb-6 text-slate-700">
             In Russian universities, instead of the 50-minute 'one-hour class' we are used to, there is a 1-hour 30-35 minute class unit called <strong>'para (пара)'</strong>. It usually includes a 5-10 minute break after a 45-minute class, so it was more manageable than I thought. The preparatory program had classes every day, and I took an average of four paras a day, which was a pretty tight schedule for a student.
           </p>

           <p class="leading-relaxed mb-6 text-slate-700">
             In 2014, the annual tuition was about $5,080. It was a 38-week course instead of the usual 32 weeks, with classes held every day and a class size of at most 6-7 students (my class had 4), so the educational density for the cost was not bad. However, since the purpose of the preparatory program is 'basic Russian language education for university admission,' it is difficult to expect an advanced level. The ultimate goal for most students is to pass the <strong>TORFL 1st level (ТРКИ-1)</strong>.
           </p>
           
           <div class="mb-8">
             <span class="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">Info</span>
             <p class="text-sm text-slate-600 bg-slate-100 p-4 rounded">
               <strong>TORFL</strong> is a Russian language proficiency test administered by the Russian Ministry of Education, divided into Basic (A1), Elementary (A2), 1st Level (B1), 2nd Level (B2), 3rd Level (C1), and 4th Level (C2). The 1st level is a level that can be reached after about 12-18 months of study, and is evaluated as a stage where everyday communication and basic major studies are possible.
             </p>
           </div>

           <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⚒️ The Secret of CCCP</h3>
           <p class="leading-relaxed mb-6 text-slate-700">
             The preparatory program also has some interesting anecdotes. Since most students are new to Russia, they often see the letters <strong>‘CCCP’</strong> all over Moscow and ask what it means in class. The teachers smile and explain that it is an abbreviation for the former Soviet Union. It looks like the English alphabet, but in Russian, C is read as ‘es’, and P as ‘er’, which is why this happens.
           </p>

           <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">📐 Learning Math in Russian</h3>
           <p class="leading-relaxed mb-6 text-slate-700">
             Let's get back to the classes. Since I said I wanted to major in nuclear physics, I took two paras of math and two paras of physics a week in addition to Russian. Russian was not easy from the beginning because the printed and cursive scripts are quite different. Moreover, the cursive of native speakers is often very sloppy, so it was a challenge for foreigners to decipher it. ✍️
           </p>
           <p class="leading-relaxed mb-6 text-slate-700">
             The grammar was not easy either. Verbs change according to tense and person, and nouns change according to case, number, and gender. Every language is difficult, but Russian is a language with particularly rich grammatical variations.
           </p>

           <p class="leading-relaxed mb-6 text-slate-700">
             The math class started with ‘addition’. It wasn’t about learning the operation, but about learning how to read <strong>“1 plus 1 is 2” in Russian</strong>. In the first semester, it was relatively easy as it only went up to logarithms and exponents. However, in the second semester, differentiation, integration, and advanced calculus appeared. The problem was not the difficulty, but the speed. The math teacher seemed to think that we knew everything, even advanced calculus, as if it were basic arithmetic. 😵
           </p>

           <blockquote class="border-l-4 border-russia-blue pl-4 py-2 my-6 italic text-slate-700 bg-slate-50">
             ‘Okay, this is how you read and do definite integrals.<br/>
             (Omitted) Do your homework up to ○○’
           </blockquote>

           <p class="leading-relaxed mb-6 text-slate-700">
             He used to give homework like this, and I used to think to myself, <em>‘This isn’t addition and subtraction, how can I solve it when I just learned it today...’</em> The explanation went by quickly, and it felt more like learning ‘how to understand math in Russian’ than learning math. Looking back after graduation, although we didn’t cover partial differentiation or complex integration techniques, math was one of the hardest subjects due to the language barrier.
           </p>
           
           <p class="leading-relaxed mb-6 text-slate-700">
             Also, in Russia, the decimal point and thousands separator notation is the opposite of that in Korea. For example, <span class="bg-slate-100 px-1 font-mono text-sm">12,345.6</span> is written as <span class="bg-slate-100 px-1 font-mono text-sm">12.345,6</span> in Russia. It’s fine once you get used to it, but it was often confusing at first. The cursive for numbers was also different from ours, which was another adjustment process.
           </p>

           <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⚛️ Physics, and Realization</h3>
           <p class="leading-relaxed mb-6 text-slate-700">
             Physics class started a little later than math. In the beginning, we learned Newtonian mechanics. The problems involved elevators, pulleys, inclined planes, and friction, and the problem settings were quite complex. It was about hanging an elevator on a pulley or calculating the force by connecting several springs. It took more time to understand the problem situation than to do simple calculations. Later, we also covered electromagnetism and learned the basics of nuclear physics.
           </p>

           <hr class="border-slate-200 my-8 w-1/3 mx-auto" />

           <p class="leading-relaxed mb-6 text-slate-700">
             Learning a major subject when you are not completely familiar with the language was harder than I thought. It required not only understanding the words, but also accepting their problem-solving approach and thought structure. At the time, in my first year, instead of accepting the parts I didn’t understand, I would easily dismiss them as ‘strange.’
           </p>
           
           <p class="leading-relaxed text-lg font-bold text-slate-800 text-center mt-8">
             Looking back now, I can say that it revealed my own immaturity<br/>in not being able to accept the differences in culture and ways of thinking. 😌
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
          내가 “우리 이제 어느 방향으로 갈까?”라고 묻자, 친구는 세상 해맑은 표정으로 “그냥 아무 데나 발길 닿는 대로, 가고 싶은 곳으로 가면 돼”라고 답했다. 순간 등골을 타고 서늘하고 싸한 느낌이 스쳐 지나갔지만, 일단 호기롭게 걷기 시작했다. 다행히 이 러시아 친구는 한국어를 배운 지 꽤 되어서 실력이 출중했고, 내가 더듬더듬 러시아어를 내뱉을 때마다 찰떡같이 알아듣고 많이 도와주었다. 🗣️✨
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
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop', // Generic Food Spread
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
        en: `<p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3"> I guess it's hard to find videos or information about Russian food. Even if there is, there's probably little about 'traditional Russian food', because most of the food Russians eat originated from foreign countries. As an aside, among the foods Koreans believe to be 'traditional' and enjoy, many have a surprisingly short history that makes them awkward to call 'traditional'. For example, Gamjatang and Seolleongtang are relatively short, within 100 years. Anyway, let's look at what's on Russian tables. 🍽️ </p> <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌍 Flavors of Neighboring Countries</h3> <p class="leading-relaxed mb-6 text-slate-700"> The fried rice called <strong>'Plov'</strong>, commonly seen in Russia, is Uzbek food, and <strong>'Shashlik'</strong>, a grilled skewer dish, one of my favorite foods in Russia, is also said to have originated from Armenia. 🥩 </p> <p class="leading-relaxed mb-6 text-slate-700"> And though unfamiliar to us, <strong>Georgian</strong> (the country, not the US state; in Russian, Gruziya) food is considered delicious. Georgian dumplings like <strong>Khinkali</strong> or <strong>Khachapuri</strong>, a bread with egg inside, are easily accessible in Russia and are loved not only by Russians but also by foreigners living in Russia and people from neighboring countries. </p> <figure class="my-8"> <img src="${Picture1}" alt="Flavors of Neighboring Countries" class="w-full rounded-lg shadow-lg" /> <figcaption class="text-center text-sm text-slate-500 mt-2 font-serif italic">Flavors of Neighboring Countries (Plov, Shashlik, Khinkali, Khachapuri)</figcaption> </figure> <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🥣 Unique Russian Flavors</h3> <p class="leading-relaxed mb-6 text-slate-700"> So what are Russia's unique dishes? Russia is composed of 85 federal subjects, 22 of which are autonomous republics. With the world's largest territory, various ethnic groups, and many republics mixed together, it's not easy to pinpoint 'unique Russian food'. However, speaking of typical dishes found in Moscow and major Russian cities for the mainstream Slavic population, there are <strong>Borsch</strong> and <strong>Blini</strong>. </p> <p class="leading-relaxed mb-6 text-slate-700"> <strong>Borsch</strong> has a status in Russia comparable to doenjang-guk (soybean paste stew) in Korea. It's a meat soup colored with purple beets, which has become somewhat familiar to Koreans these days. Russians typically put <strong>Smetana</strong>, a sour cream, on top of borsch and mix it in. This smetana was unfamiliar to Koreans and had a slightly sour taste, like it had gone bad, so I never really enjoyed it until I left Russia. 😅 </p> <p class="leading-relaxed mb-6 text-slate-700"> Nevertheless, if you exclude smetana, it's a warm soup that anyone can enjoy without much of a barrier. At first, the intense purple color might be off-putting, but one spoonful on a cold day will make those feelings melt away. Once your palate adapts to the local tastes while living in Russia, the unfamiliarity of the red color disappears, and you can taste a deep, savory umami like our beef radish soup. </p> <p class="leading-relaxed mb-6 text-slate-700"> <strong>Blini</strong> are Russian pancakes, but unlike the thick pancakes we usually know, they are characterized by being very thin. They can be folded or rolled two or three times and dipped in sweet sauces like honey, or filled with ham, eggs, smoked salmon, etc., making them great as snacks or meal replacements. They are easy to make at home, and many restaurants sell them cheaply. Blini can be considered the easiest among Russian traditional foods, but unfortunately, it's hard to find them outside of Russia and its neighboring countries. </p> <figure class="my-8"> <img src="${Picture2}" alt="Unique Russian Flavors" class="w-full rounded-lg shadow-lg" /> <figcaption class="text-center text-sm text-slate-500 mt-2 font-serif italic">Unique Russian Flavors (Borsch, Blini, Black Bread, Pelmeni)</figcaption> </figure> <p class="leading-relaxed mb-6 text-slate-700"> In addition, sour black bread and <strong>Pelmeni</strong>, which are similar to dumplings but much smaller, are also Russian foods. Pelmeni can have various fillings. Once, I mistakenly bought pelmeni that was supposed to have meat but had cherries inside. 🍒 I put these pelmeni in ramen when cooking it, and some of them burst when cooked, and the filling flowed into the ramen broth. </p> <div class="bg-red-50 border border-red-200 p-6 rounded-lg my-6"> <p class="leading-relaxed text-red-900 italic"> "The ramen broth was red, so I didn't even know it had plenty of cherry juice and took a spoonful. <strong>Pandemonium</strong> naturally came to mind. I had no choice but to throw away the precious ramen. It tasted like something even the devil of hell would cry over. 👿 Try it if you dare." </p> </div> <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍔 Fast Food, a Choice for Survival</h3> <p class="leading-relaxed mb-6 text-slate-700"> More commonly seen outside than unique Russian dishes is actually fast food. Global fast-food chains like Burger King, KFC, and McDonald's are ubiquitous, and in <span class="bg-yellow-100 px-1">Russia, where the Big Mac Index is the lowest in the world</span>, there's no avoiding these chains. My friends and I primarily ate Basket Wings from KFC. For about 10,000 won, you'd get 25 wings, so we'd go there whenever we missed chicken. 🍗 </p> <p class="leading-relaxed mb-6 text-slate-700"> Travelers wandering around Russia looking for unique foods often end up at fast-food restaurants. I did, and so did everyone who came to visit me in Russia. </p> <figure class="my-8"> <img src="${Picture3}" alt="Fast Food" class="w-full rounded-lg shadow-lg" /> <figcaption class="text-center text-sm text-slate-500 mt-2 font-serif italic">A Choice for Survival, Fast Food (KFC, McDonald's, Rotisserie Chicken, Shawarma)</figcaption> </figure> <p class="leading-relaxed mb-6 text-slate-700"> <strong>Rotisserie chicken</strong> and <strong>Shawarma</strong> are very common foods found at street stalls. They are very cheap and taste excellent. The rotisserie chicken tasted very similar to the chicken my father used to buy when I was young. When ordering shawarma, they ask if you want smetana on top, and just saying <strong>‘No’</strong> is already a success. With no suspicious ingredients, they are rolled up with plenty of vegetables and meat in a thin tortilla, so they rarely fail. </p> <p class="leading-relaxed mb-6 text-slate-700"> While studying at the preparatory program, my Russian teacher told us not to buy anything to eat carelessly on the street. Why would such delicious food be so cheap? There were even rumors that it was pigeon, not chicken. 🐦 Still, for a poor, cold, and hungry international student, it was hard to find a cheaper and more satisfying meal than this. </p> <hr class="border-slate-200 my-8 w-1/3 mx-auto" /> <p class="leading-relaxed mb-6 text-slate-700"> My superficial feeling after living in Russia was that Russians generally don't attach much importance to taste. Perhaps it's because of the cold weather, or because life is still tough, like in Korea in the old days. They probably wouldn't understand Koreans who eagerly search for good restaurants. </p> <p class="leading-relaxed mb-6 text-slate-700"> And most Russians say that <strong>home-cooked food</strong> is the most delicious, and they only eat out when they have no other choice. Looking back, Korea was a little different. We usually eat out when we want to eat delicious food that is difficult to make at home. My perception was also the same. The thought, <em>'Why do they eat out when the food isn't even that good?'</em> always lingered in my mind. </p> <p class="leading-relaxed text-xl font-bold text-slate-800 text-center mt-8"> Although the food is different, the attitude towards food, and the perception of eating out<br/>I still felt that there are many differences. 🥢 </p>`,
      },
    },
    {
      id: 'post-105',
      title: { ko: '모스크바에서 한국 찾기', en: 'Finding Korea in Moscow' },
      subtitle: { ko: '그리움, 대사관, 그리고 북한 식당', en: 'Longing, the Embassy, and a North Korean Restaurant' },
      imageUrl: 'https://images.unsplash.com/photo-1580651315530-69c8e0026377?q=80&w=1200&auto=format&fit=crop', // Replaced with Korean Food (Bibimbap) image
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
          <p class="leading-relaxed mb-6 text-slate-700"> 그리고 한 번은 러시아 친구들과 <strong>고려인 식당</strong>에 가본 적도 있다. 대한민국의 음식과는 차이가 많이 났다. 메뉴판에는 조금 익숙한 발음의 음식이 있기도 했고 전혀 무슨 음식인지 유추할 수 조차 없는 음식도 많았다. 또한 한국 음식보다 식초를 많이 쓰는지 시큼한 맛이 나는 음식이 꽤나 있었다. 그래도 <strong>‘쿡시’</strong>라고 불리는 국수는 맛이 괜찮았다. 같이 갔던 러시아 친구들에게 이런 음식은 한국에서 결코 볼 수 없을 거라고 이야기했다. </p>
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
          <p class="leading-relaxed mb-6 text-slate-700"> There were also other Korean restaurants, and among them, a restaurant named 'Jasmine' would secretly sell Boshintang (dog meat stew), which wasn't even on the menu, to customers who knew about it and came looking for it. At another restaurant, you could eat a Korean buffet for 600 rubles, about 12,000 won at the time, on Saturday lunch. It had many dishes, from snack foods like gimbap and tteokbokki to bulgogi and japchae, which were cumbersome to make at home, so I went there often. 😋 </p>
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
      title: { ko: '모스크바의 봄여름가을겨울', en: 'Spring, Summer, Autumn, and Winter in Moscow' },
      subtitle: { ko: '회색빛 우울감과 민들레 홀씨 사이', en: 'Between Gray Melancholy and Dandelion Seeds' },
      isActive: true,
      imageUrl:
        'https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?q=80&w=1200&auto=format&fit=crop', // Moscow Winter
      comments: [],
      content: {
        ko: `
          <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
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
      title: { ko: '예비학부 마무리, 그리고', en: 'Finishing the Preparatory Program, and...' },
      subtitle: {
        ko: '맥주 한 캔의 용기와 빌렛(Ticket)의 운명',
        en: 'The Courage of a Can of Beer and the Fate of a Bilet (Ticket)',
      },
      imageUrl:
        'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1200&auto=format&fit=crop', // Exams/Study/Writing
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
          <ol class="list-decimal list-inside space-y-3 text-slate-700">
              <li>The professor distributes a list of 예상 문제 (expected problems) 3-4 times, sometimes even more than 10 times, the number of students, before the exam. (30-100 problems)</li>
              <li>On the day of the exam, the student arbitrarily selects one problem sheet in front of the professor. (Drawing lots 🎲)</li>
              <li>During this process, the student has no way of knowing which problem they will choose. </li>
          </ol>
          
          <br>
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
                <strong>2 points</strong><br/>미흡 (Fail)
              </li>
              <li class="bg-yellow-50 text-yellow-800 p-2 rounded border border-yellow-100">
                <strong>3 points</strong><br/>양호 (Pass)
              </li>
              <li class="bg-blue-50 text-blue-800 p-2 rounded border border-blue-100">
                <strong>4 points</strong><br/>우수 (Good)
              </li>
              <li class="bg-green-50 text-green-800 p-2 rounded border border-green-100">
                <strong>5 points</strong><br/>탁월 (Excellent)
              </li>
            </ul>
            <p class="mt-2 text-xs text-slate-400 text-center">
              * 1 point is not actually given, as it resembles a 'club' or 'stake'.
            </p>
            <br>
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
      imageUrl: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=1200&auto=format&fit=crop',
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
          하지만 나는 이미 한 학기 동안 러시아에서 뇌물이 어떤 메커니즘으로 작동하는지 어느 정도 많이 익숙해진 상태였다. 그저 방구석에서 벌벌 떨고 있기보다는, 이 상호 호혜로운(?) 시스템을 적극적으로 활용해 먼저 행동에 나서는 것이 현명하다고 판단했다. 😎
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
          So, if you ever get into an argument with the police or a public official in Russia after reading this book, put aside your sense of justice for a moment and just give them a few pennies. It is the most peaceful way to protect your body, mind, and your passport. 🎫🕊️ Although there is a certain inflation in the bribery system, minor matters are usually settled cleanly for about 50,000 to 100,000 won, so it can even be seen as cost-effective rather than escalating the problem.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍫 The Secret in the Chocolate Box</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          It was the middle of winter in January, after I had spent one semester in Russia and was about to start my second. My wife was lucky enough to be using a double room in the dormitory by herself, but then came the shocking news that a new roommate might be assigned to her for the new semester. ⚡ Since we had been conveniently using my wife's room as our couple's hideout, we were very nervous that this precious hideout might be taken away.
          <br/><br/>
          However, I had already become quite familiar with how bribery works in Russia during my first semester. Rather than just trembling in my room, I judged it wise to actively utilize this mutually beneficial(?) system and take action first. 😎
        </p>

        <p class="leading-relaxed mb-6 text-slate-700">
          We received insider information that Russians are usually crazy about sweet foods (especially chocolate), so we rushed to the supermarket to bribe the dorm supervisor, who had the full authority to assign rooms. 🍫 After choosing a fairly plausible and luxurious chocolate, we carefully opened the box and discreetly slipped in a 2,000 ruble (about 30,000-40,000 won) banknote and a small, charming letter so that it was clearly visible. 💌
          <br/><br/>
          We found the supervisor and, with a hypocritical comment of "We've come to wish you a Happy New Year," handed her the chocolate box. And then we subtly hinted, "My wife really likes the room she's using now, so will a new roommate be coming this semester?"
          <br/><br/>
          The supervisor, having seen it all in this business, was a very quick-witted person. As soon as she heard our words, she smiled benevolently and reassured us, "You don't have to worry too much." As a result, we were able to secure our comfortable hideout for just 40,000 won. Humans are truly animals of terrible adaptation. 🐾
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
