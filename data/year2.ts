import { Category } from '../types';

export const year2Category: Category = {
  id: 'year2',
  title: { ko: '2년차, 대학원 입학', en: 'Year 2, Graduate School Admission' },
  shortTitle: { ko: '2년차', en: 'Year 2' },
  description: {
    ko: '본격적인 대학원 생활의 시작',
    en: 'The beginning of full-fledged graduate school life',
  },
  isSinglePost: false,
  isActive: true,
  posts: [
    {
      id: 'post-200',
      title: { ko: '새 보금자리를 찾아', en: 'Finding a New Home' },
      subtitle: {
        ko: '기숙사 탈출, 모스크바 아파트 구하기 대작전',
        en: 'Escape from the Dormitory, The Great Moscow Apartment Hunt',
      },
      imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop', // Cozy apartment interior
      isActive: true,
      comments: [],
      content: {
        ko: `
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          예비학부 동안 정들었던 기숙사는 대학원에 진학하면서 더 이상 지낼 수 없다고 했다. 우리가 살던 기숙사는 아파트 형식으로 층은 달랐지만 아내가 방을 혼자 쓰고 있었을 뿐만 아니라, 무엇보다 모스크바 내 기숙사 중에는 아주 깔끔한 축에 속했기 때문에 아쉬움이 더욱 컸다. 😥 기숙사를 벗어나면 그동안 혜택을 누렸던 전기세나 온수 등 추가적인 비용도 발생한다는 점도 큰 고민거리였다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          하지만 본학부로 진학하며 새로 받게 될 기숙사들은 <span class="text-red-600 font-bold">바퀴벌레와 공존해야 하는 🪳</span> 끔찍한 곳 뿐이었다. 앞으로 남은 2년간 생존을 위한 최소한의 삶을 보장하고 무사히 학업을 마치려면 어떻게든 ‘사람이 살 만한’ 보금자리로 이동을 해야 했다. 우물쭈물 하다가는 괜찮은 매물이 나와도 놓칠 수 있었기에 서둘러 집을 알아보러 다녔다.
        </p>

        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
          <p class="leading-relaxed text-slate-800">
            예비학부에서 같이 공부하던 친구들도 너나 할 것 없이 집구하기 전쟁에 뛰어들었다. ⚔️ 어제의 동료들은 하루 아침에 더 싸고 좋은 집을 찾으려는 우리의 경쟁자들이 되어 있었다.
          </p>
        </div>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏠 모스크바에서 집 구하기란</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          어느 대도시나 마찬가지겠지만, 모스크바 역시 약 천만 명, 유동 인구까지 합치면 그보다 훨씬 많은 인구가 이 도시의 한정된 공간을 나누어 쓰고 있다. 그렇기에 지하철과 가깝고 치안이 안전한 곳은 가격이 매우 비쌌다. 이미 아파트에서 살고 있던 몇몇 지인들은 한달에 150만원도 넘는 월세를 내며 살고 있었는데, 우리에게 <span class="text-slate-500 line-through">그림의 떡</span>이었다. 💸 설사 낼 수 있다 하더라도 군에서 아주 저렴히 제공하는 숙소에 비하면 매월 아무것도 안해도 고정으로 나가는 큰 돈은 낭비가 아닐 수 없었다. 러시아에서 차를 구입하지 않았기에 우리가 구할 수 있는 집은 대중교통으로 접근이 가능해야 했다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          한시라도 낭비할 수 없는 그 시간, 나는 모스크바에서 집을 찾는 데에 가장 큰 걸림돌 중 하나는 러시아 사람들의 폐쇄성과 배타성임을 알게 되었다. 부동산 사이트에서 마음에 드는 집을 발견해 전화를 걸어도, 수화기 너머로 들려오는 대답은 차가웠다.
        </p>

        <div class="bg-red-50 border border-red-200 rounded-lg p-6 my-6">
          <p class="leading-relaxed text-red-900">
            <strong>"슬라브인이 아니면 세를 내줄 수 없다"</strong>는 집주인이 부지기수였다. 😤 아마 그들은 스스로가 세상에서 제일 정결한 민족이라도 되는 양, 이방인에게 집을 내주는 것을 극도로 꺼렸다. 아마도 다른 문화권 사람들의 음식 향신료 냄새가 벽지에 배거나, 생활 습관의 차이로 집이 망가질 것을 우려했는지도 모르겠다. 혹은 막연한 거부감일 수도 있겠다. 당하는 입장에서는 가슴이 답답하고 기가 막힐 노릇이었지만, 한편으로는 그들의 경계심이 아예 이해가 안 가는 것도 아니었다.
          </p>
        </div>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">😱 충격의 연속, 러시아식 인테리어</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          외국인도 세입자로 받을 수 있다는 몇몇의 저렴한 매물을 둘러보았지만, 문을 열고 들어설 때마다 마주한 풍경은 충격의 연속이었다. 거대한 아파트 단지라는 외관이 무색하게도 집 내부가 전부 나무로 마감되어 있었다. 러시아 인테리어의 정점은 단연 곳곳에 깔린 카펫(러그)였다. 바닥은 물론이고, 추위를 막으려는 방편인지 아니면 전통적인 취향인지 벽면까지 카펫이 점령하고 있었다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          문제는 이들의 관리 상태였다. 수십 년의 세월을 머금은 듯한 카펫은 확인하지 않아도 먼지를 가득 품고 있음을 알 수 있었고, 정체 모를 쿰쿰한 냄새가 배어 나왔다. 🤢
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          여기에 더해 러시아인들은 화장실뿐만 아니라 집 안 모든 곳에 백열등 대신 주황빛 전구를 선호했다. 가뜩이나 흐린 날씨 때문에 침침한 실내는 주황색 조명 아래서 더욱 어둡고 가라앉은 분위기를 자아냈다. 안 그래도 삐걱거리는 낡은 나무로 가득한 아파트에, 지저분한 카펫, 침침한 주황 불빛까지, 집 안은 마치 과거 박물관을 연상시켰다.
        </p>
        <blockquote class="text-center font-serif text-xl font-bold text-russia-blue my-8 animate-pulse">
          "아무리 ‘하면 된다’는 정신으로 러시아어 까막눈인채로 석사과정을 한다고 덤볐던 나도 도저히 이런 곳에서 남은 2년을 버틸 자신이 생기지 않았다."
        </blockquote>
        <div class="bg-slate-50 p-4 my-6 rounded-lg text-sm">
          <span class="font-bold text-slate-700">💡 따뜻한 전구 vs 차가운 전구</span><br/>
          러시아어로 백열등은 '추운 전구(холодная лампа)'였고 주황등은 '따뜻한 전구(тёплая лампа)'였으니, 그들이 왜 주황빛을 선호했는지 조금은 알 것도 같았다.
        </div>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">✨ 운명처럼 나타난 보금자리</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          그렇게 많은 헛 걸음 끝에 점점 지쳐갈 무렵, 정말로 살만한 집을 못 찾는 건 아닐까 하는 불안감이 엄습했다. 그 때 정말 운명처럼 학교와도 가깝고 사진상으로도 꽤 괜찮아 보이는 집이 매물로 나왔다. 집주인은 러시아 사람이지만 유럽풍의 실내 인테리어에 관심이 있는 사람이었다. 집은 넓지 않았지만 월세를 놓으려고 새로 깨끗하게 유럽풍으로 리몬트(리모델링)를 했다고 들었다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          특히, 가장 마음에 들었던 것은 크게 낸 창문이었다. 덕분에 밖에서 집으로 볕이 아주 잘 들었다. ☀️ 바닥에는 나무가 아닌 우리와 친숙한 바닥 장판이 깔려있었고, 벽면도 흰색으로 환하게 잘 도배되어 있었다. 방 하나에 주방과 화장실이 따로 있는 구조로 원룸보다는 방 하나 있는 아파트에 가까웠다. 거실은 따로 없었지만 둘이 살기에는 나쁘지 않았다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          집주인 아주머니는 아주 교양있는 사람이었다. 말도 조곤조곤하고 더듬거리는 서툰 내 러시아어도 끝까지 잘 들어주었다. 러시아에서는 매년 레기스트라찌야 (Регистрация, Registration)라는 거주증을 갱신해야 하는데 그 때마다 집주인도 동사무소에 직접 나와야 하는 번거로움이 있었다. 그럼에도 그녀는 기꺼이 이방인인 우리에게 세를 주었다. 내가 돈을 주는 입장이지만 너무 고마워서 눈물이 날 지경이었다. 🥹
        </p>

        <div class="bg-blue-50 border-t-4 border-b-4 border-blue-200 p-6 my-8 text-center">
          <p class="text-2xl font-bold text-blue-900">월세 약 70만원</p>
          <p class="text-blue-800 mt-2">공공요금(전기, 상하수도) 월 3만원 내외</p>
          <p class="text-sm text-blue-700 mt-2">(당시 환율 ±18원/루블 기준)</p>
        </div>

        <p class="leading-relaxed mb-6 text-slate-700">
          러시아에서는 난방을 국가에서 무료로 관리하기에 공공요금 부담이 적었다. 문득 한국에서의 겨울이 생각났다. 당시 겨울에 한국에서는 창문사이로 들어오는 한기를 막기 위해 ‘뽁뽁이’라는 포장재를 사용하는 것이 유행이었다. 내가 살던 집은 오래된 군아파트로 꼭대기인 5층에 있어 다른 집보다 더욱 추웠다. 개별 난방이 되지 않았기에 난방을 틀면 집 전체를 데워야만 했다. 그래서 이불을 두르고 난방팬을 사서 방에 틀어놓고 공부를 했던 기억이 난다.
        </p>
        <blockquote class="border-l-4 border-russia-blue pl-4 py-2 my-6 italic text-slate-700 bg-slate-50">
          "하지만 이제는 자애로운 러시아의 무료 난방 덕에 더이상 방에서 추위에 떨지 않아도 되었다. 러시아인들에게 온도가 조절이 안돼서 방이 너무 더운데 어떻게 해야하냐고 물어보면 그들은 백이면 백, ‘창문을 열어, 그럼 되잖아’라고 할 것이다. 이 얼마나 호사인가."
        </blockquote>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏰 우리만의 요새, 그리고 집들이</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          하나 뿐인 방에는 가운데에 둘이 쓰기에 넉넉한 킹 사이즈의 침대가 있었다. 침대를 중심으로 한쪽에는 내 책상을, 다른 한쪽에는 아내의 책상을 두어 각자의 영역을 만들었다. 살림살이가 단출했기에 이사는 택시 한 대로 충분했다. 🚚 정든 기숙사를 떠나는 날, 아내는 눈물을 흘렸는데 아마 낯선 곳에서의 첫 1년을 잘 버티게 도와준 보금자리를 떠나서 그런 듯 하다. 나는 짐들을 택시 트렁크와 뒷좌석까지 꾹꾹 실어서 이동했고, 아내는 지하철을 타고 새집으로 향했다. 짐을 풀고 앞으로 필요한 물품들을 하나하나 채우니 남은 2년 우리 둘 만의 새 요새가 완성되었다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          새 보금자리를 마련한 기념으로 예비학부 시절 친하게 지냈던 동생들 두 명과 단촐하게나마 집들이를 했다. 🎉 주방이 작아서 사람 넷이 앉으니 주방이 꽉 찼다. 주방이 좁아서 좋은 점도 있다. 음식을 먹으면서 부족하면 바로바로 요리를 더 할 수도 있었고, 더 필요한게 있으면 언제든 손이 닿는 냉장고에서 꺼내면 되었다. 심지어 요리를 하면서도 같이 대화를 할 수도 있었다. 이렇게 집들이까지 마치고 나니 남은 2년의 전투를 할 심신의 준비가 완료된 기분이었다.
        </p>
        <hr class="border-slate-200 my-8 w-1/3 mx-auto" />
        <p class="leading-relaxed mb-6 text-slate-700">
          러시아에서는 돈을 주고 집을 구하는 것도 전쟁이었고 또한 배움이었다. 낯선 땅, 낯선 이들을 이해하지 못했다면 그들의 배타성에 상처만 남았으리라 생각한다. 집을 구해야 한다는 절박한 상황 속이었지만 러시아도 다 사람 사는 곳이었고 그들을 이해하니 그들의 따뜻함 마저도 느껴졌던 소중한 경험이었다.
        </p>
      `,
        en: `
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          The dormitory that I had grown fond of during the preparatory program was no longer available to me as I entered graduate school. The dormitory we lived in was apartment-style, and although my wife's room was on a different floor, she had it all to herself. Moreover, it was one of the cleanest dormitories in Moscow, so the disappointment was even greater. 😥 Another major concern was that leaving the dormitory would incur additional costs such as electricity and hot water, which we had been enjoying as benefits.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          However, the new dormitories we would be assigned to as we entered the main program were all terrible places where we would have to <span class="text-red-600 font-bold">coexist with cockroaches 🪳</span>. To ensure a minimum standard of living for the remaining two years and to successfully complete my studies, I had to move to a place 'fit for human habitation' somehow. If I hesitated, I could miss out on good listings, so I hurried to look for a new home.
        </p>

        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
          <p class="leading-relaxed text-slate-800">
            My friends from the preparatory program also jumped into the house-hunting war. ⚔️ Yesterday's colleagues had become our competitors overnight, looking for cheaper and better homes.
          </p>
        </div>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏠 House Hunting in Moscow</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          As with any big city, Moscow has a population of about 10 million, and even more if you include the floating population, all sharing the limited space of this city. Therefore, places close to the subway and with good security were very expensive. Some acquaintances who were already living in apartments were paying more than 1,500 dollars a month in rent, which was <span class="text-slate-500 line-through">a pie in the sky</span> for us. 💸 Even if we could afford it, compared to the very cheap accommodation provided by the military, the large amount of money that would go out every month for doing nothing was a waste. Since we hadn't bought a car in Russia, the house we were looking for had to be accessible by public transport.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          During that time when I couldn't waste a single moment, I learned that one of the biggest obstacles to finding a house in Moscow was the closed-mindedness and exclusivity of the Russian people. Even if I found a house I liked on a real estate website and called, the response on the other end of the line was cold.
        </p>

        <div class="bg-red-50 border border-red-200 rounded-lg p-6 my-6">
          <p class="leading-relaxed text-red-900">
            There were countless landlords who said, <strong>"I can't rent to you if you're not Slavic."</strong> 😤 They were extremely reluctant to rent their homes to foreigners, as if they themselves were the purest people in the world. Perhaps they were worried that the smell of spices from other cultures would seep into the wallpaper, or that their homes would be damaged due to differences in lifestyle. Or it could have been a vague sense of rejection. From the perspective of the one being rejected, it was frustrating and absurd, but on the other hand, I could somewhat understand their wariness.
          </p>
        </div>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">😱 A Series of Shocks, Russian-style Interior</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          I looked at a few cheap listings that were said to be available to foreign tenants, but the scene that greeted me every time I opened the door was a series of shocks. The exterior of a huge apartment complex was belied by the fact that the interior of the house was entirely finished with wood. The pinnacle of Russian interior design was undoubtedly the carpets (rugs) laid everywhere. Not only the floor, but also the walls were occupied by carpets, perhaps as a way to block the cold or as a traditional preference.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          The problem was the condition of their management. The carpets, which seemed to have absorbed decades of time, were full of dust even without checking, and a musty, unidentifiable smell emanated from them. 🤢
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          In addition to this, Russians preferred orange-colored light bulbs instead of incandescent bulbs not only in the bathroom but everywhere in the house. The already dim interior due to the cloudy weather created an even darker and more subdued atmosphere under the orange lighting. The apartment, already full of creaky old wood, with its dirty carpets and dim orange lights, was reminiscent of a museum of the past.
        </p>
        <blockquote class="text-center font-serif text-xl font-bold text-russia-blue my-8 animate-pulse">
          "No matter how much I had tackled my master's program with the 'I can do it' spirit while being illiterate in Russian, I didn't have the confidence to endure the remaining two years in a place like this."
        </blockquote>
        <div class="bg-slate-50 p-4 my-6 rounded-lg text-sm">
          <span class="font-bold text-slate-700">💡 Warm Bulb vs. Cold Bulb</span><br/>
          In Russian, an incandescent bulb was a 'cold bulb (холодная лампа)' and an orange bulb was a 'warm bulb (тёплая лампа),' so I could somewhat understand why they preferred the orange light.
        </div>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">✨ A Home That Appeared Like Destiny</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Just as I was getting tired after so many fruitless visits, the anxiety that I might not be able to find a decent place to live at all crept up on me. At that moment, a house that was close to the school and looked quite good in the pictures came up for sale, as if by destiny. The landlord was Russian but was interested in European-style interior design. The house was not large, but I heard that it had been newly and cleanly renovated in a European style for rent.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          In particular, what I liked the most were the large windows. Thanks to them, the house got a lot of sunlight from the outside. ☀️ The floor was not wood but a familiar floor covering, and the walls were also brightly plastered in white. It was a one-room apartment with a separate kitchen and bathroom, rather than a studio apartment. There was no separate living room, but it was not bad for two people to live in.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          The landlady was a very cultured person. She spoke softly and listened patiently to my clumsy, stuttering Russian. In Russia, you have to renew your residence permit, called Registratsiya (Регистрация, Registration), every year, which meant that the landlord had to go to the community service center in person each time. Nevertheless, she willingly rented to us, who were foreigners. Although I was the one paying, I was so grateful that I was on the verge of tears. 🥹
        </p>

        <div class="bg-blue-50 border-t-4 border-b-4 border-blue-200 p-6 my-8 text-center">
          <p class="text-2xl font-bold text-blue-900">Rent approx. 700 USD</p>
          <p class="text-blue-800 mt-2">Utilities (electricity, water/sewage) approx. 30 USD/month</p>
          <p class="text-sm text-blue-700 mt-2">(Based on the exchange rate at the time of 70± RUB/USD)</p>
        </div>

        <p class="leading-relaxed mb-6 text-slate-700">
          In Russia, the burden of public utility fees was low because the state managed the heating for free. I was suddenly reminded of winter in Korea. At that time, it was popular in Korea to use a packaging material called 'bubble wrap' to block the cold air coming in through the windows. The old military apartment I lived in was on the top floor, the 5th floor, so it was even colder than other houses. Since there was no individual heating, I had to heat the entire house when I turned on the heating. So I remember studying wrapped in a blanket with a heating fan on in my room.
        </p>
        <blockquote class="border-l-4 border-russia-blue pl-4 py-2 my-6 italic text-slate-700 bg-slate-50">
          "But now, thanks to the benevolent free heating of Russia, I no longer had to shiver from the cold in my room. If you ask a Russian what to do when the room is too hot because the temperature cannot be adjusted, they will say, one hundred out of one hundred, 'Open the window, that's all.' What a luxury."
        </blockquote>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏰 Our Own Fortress, and a Housewarming Party</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          In the only room, there was a king-size bed in the middle that was spacious enough for two people. With the bed as the center, I created my own area with my desk on one side and my wife's desk on the other. Since our household goods were simple, one taxi was enough for the move. 🚚 On the day we left the dormitory we had grown fond of, my wife shed tears, probably because we were leaving the home that had helped us get through our first year in a strange place. I packed our belongings tightly into the trunk and back seat of the taxi, and my wife took the subway to our new home. After unpacking and filling the house with the necessary items one by one, our new fortress for the two of us for the remaining two years was complete.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          To celebrate our new home, we had a small housewarming party with two of our younger friends from the preparatory program. 🎉 The kitchen was small, so it was full with just four people sitting in it. There were also good things about the small kitchen. If we ran out of food while eating, we could cook more right away, and if we needed anything else, we could get it from the refrigerator, which was always within reach. We could even talk while cooking. After the housewarming party, I felt that I was mentally and physically ready for the battle of the remaining two years.
        </p>
        <hr class="border-slate-200 my-8 w-1/3 mx-auto" />
        <p class="leading-relaxed mb-6 text-slate-700">
          In Russia, even buying a house for money was a war and a learning experience. If I hadn't understood the strange land and the strange people, I think I would have only been hurt by their exclusivity. Although it was a desperate situation where I had to find a house, Russia was also a place where people lived, and once I understood them, it was a precious experience where I could even feel their warmth.
        </p>
      `,
      },
    },
    {
      id: 'post-201',
      title: { ko: '대학원 새내기', en: 'Graduate School Freshman' },
      subtitle: {
        ko: '동무들과의 첫 만남, 그리고 혹독한 전공의 맛',
        en: 'First Meeting with Comrades, and the Harsh Taste of a Major',
      },
      imageUrl: 'https://cdn-media.tass.ru/width/1020_b9261fa1/tass/m2/en/uploads/i/20190619/1223730.jpg', // Moscow State University
      isActive: true,
      comments: [],
      content: {
        ko: `
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          길 것만 같던 여름방학은 언제 흘러갔는지 흔적도 없이 증발해 버렸고, 어느새 대학원생으로서의 첫 학기가 막을 올렸다. 🎓 한국의 대학생이라면 수강 신청 기간마다 마우스 광클릭으로 🖱️ 스스로 시간표를 쟁취해야겠지만, 러시아는 참으로 ‘친절하게도’ 학부생은 물론 대학원생의 시간표까지 학교에서 알아서 짜준다. 뭐, 사실 사관학교 시절부터 국가가 정해준 시간표대로 살아온 나로서는 이런 수동적인 시스템에 별다른 불만이 없긴 했다.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🤝 같은 반 친구들, 아니 동무들</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          모스크바 국립대의 석사 과정은 한국의 대학원과는 조금 다르다. 같은 과, 같은 시기에 입학한 동기들은 졸업할 때까지 몇몇 교양과목을 제외하면 모든 수업을 함께 듣는다. 그래서 이들을 느슨한 ‘대학 동기’라기보다는 끈끈한 ‘같은 반 친구들’이라고 부르는 편이 훨씬 자연스럽다. 아니면 소련 식으로 ‘동무(товарищ)’라고 부르는 게 더 어울릴지도...
        </p>
        <div class="bg-slate-50 p-6 rounded-lg border-l-4 border-russia-blue my-6">
          <p class="leading-relaxed text-slate-700">
            우리 반은 총 12명이었는데, ‘핵물리학과’라는 무시무시하고도 딱딱한 전공 이름이 무색하게 여학생이 무려 3명이나 있었다. 👩‍🔬 성비가 25%라니, 공대나 자연대치고는 실로 굉장한 수치가 아닐 수 없다.
          </p>
        </div>
        <p class="leading-relaxed mb-6 text-slate-700">
          이 12명의 구성을 살펴보면 꽤 흥미롭다. 8명은 모스크바 국립대 학부에서 그대로 올라온 이른바 ‘성골’들이었고, 1명은 타 대학 출신의 내국인, 1명은 카자흐스탄에서 온 유학생이었다. 🇰🇿 사실 카자흐스탄은 러시아어권이라 말이 완벽하게 통하니 ‘외국인 전형’이라는 타이틀이 무색할 지경이었다. 그리고 남은 두 자리가 바로 진정한 의미의 쌩초보 외국인, 나와 내 지인이었다. 게다가 이들 모두 학부 때부터 핵물리학을 전공했다고 하니 더더욱 긴장이 되지 않을 수 없었다. 🤯
        </p>
        
        <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <p class="leading-relaxed text-yellow-900 font-medium mb-2">🤫 자본주의의 씁쓸한 진실</p>
          <p class="leading-relaxed text-yellow-800">
            나중에 지인들에게 전해 들은 충격적인 사실인데, 외국인인 우리 두 사람을 입학시키기 위해 원래 이 학부 출신이었던 러시아 학생 두 명이 석사 과정에서 탈락했다고 한다. 자국민 학생들은 학비를 내지 않고 오히려 소정의 장학금까지 받으며 학교를 다니지만, 우리는 학비를 100% 내야 하니 학교 입장에서는 꽤나 ‘짭짤한’ 수익원이었던 셈이다. 💸 이 자본주의의 씁쓸한 진실을 마주하고 나니, 얼굴 한 번 본 적 없는 그 두 명의 탈락자들에게 묘한 부채감이 밀려왔다. 같은 반 러시아 ‘동무’들은 이 두 명은 취직을 잘 했으니 걱정말라는 말로 나를 위로 했다.
          </p>
        </div>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💪 강인한 슬라브의 리더</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          우리 반의 반장은 여학생이었다. 같은 반 남학생과 사내(아니, 과내) 연애 중이었는데, 성격이 아주 씩씩하고 결단력이 넘치는 데다 친절하기까지 한 완벽한 리더였다. 반 친구들과 놀러 갈 때면 여행사 직원 뺨치게 모든 계획을 도맡아 했고, 말 안 통하는 외국인인 우리들의 공부도 살뜰히 챙겨주었다. 강인한 슬라브 민족 여성의 힘이 느껴지는 친구였다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          특히 그녀의 필기 노트는 가뭄의 단비 같았는데, 문제는 해독이 쉽지 않았다는 점이다. ✍️ 러시아 사람들은 성별을 불문하고 엄청난 악필을 자랑하는 경우가 많은데, 반장의 글씨체 역시 우리가 이수해야 할 또 하나의 '전공 필수 과목' 수준이었다. 심지어 본인이 휘갈겨 쓴 글씨를 본인도 못 알아봐서 둘이 같이 노트를 뚫어져라 쳐다본 적도 종종 있었다. 그래도 그 해독하기 힘든 노트와 반장의 헌신이 없었다면 내 무사 졸업은 불가능했을지도 모른다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">👨‍🏫 나의 지도교수님</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          대학원생의 본업은 역시 연구 아니겠는가. 진로 상담을 담당하는 교수님과 면담하며 희망 분야를 말씀드렸더니, 며칠 뒤 내 지도 교수가 배정되었다. 교수의 이름은 '벨릐셰프 세르게이 세르게예비치(Belyshev Sergey Sergeyevich)'. 이름에서 바로 눈치챌 수 있듯, 그의 아버지 이름 역시 세르게이다.
        </p>
        <blockquote class="border-l-4 border-russia-blue pl-4 py-2 my-6 italic text-slate-700 bg-slate-50">
          (러시아인들의 독특한 작명법과 부칭 시스템에 대해서는 6장, 러시아인 이름에서 더 자세히 다루도록 하겠다).
        </blockquote>
        <p class="leading-relaxed mb-6 text-slate-700">
          러시아에서 누군가를 존중을 담아 공식적으로 부를 때는 반드시 ‘이름’과 ‘부칭’을 함께 불러야 한다. 하지만 예비학부 시절 선생들을 편하게 이름으로만 부르던 버릇이 남아 있던 나는, 석사 초기 몇 번이나 호칭 실수를 저질러 따끔한 지적을 받아야 했다. 다행히 내 지도 교수는 나보다 많아 봐야 서너 살 위로 보이는 아주 젊고 열정적인 학자였고, 살인적인 일정 속에서도 헤매는 유학생을 정성껏 지도해 주었다.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">😵‍💫 영혼이 가출하는 시간</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          대학원에서의 첫 몇 주는 그야말로 영혼이 가출하는 시간이었다. 모스크바 국립대에서는 석사과정이라는 시스템이 생긴지 몇 년 되지 않은 터였다. 그전에는 러시아만의 독특한 스페셜리스트라는 학부에 1년만 더 하면 되는 과정이 있었다. 서방 국가의 시스템을 따라잡고 국제적인 트렌트를 반영하기 위한 노력이라고 할 수 있다. 아직 확실히 정착된 시스템이 아니었기에 시간표가 수시로 엎어지고 바뀌어서 매우 혼란스러웠다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          게다가 도무지 알아들을 수 없는 러시아어 전공 강의를 온종일 듣고 집에 오면 파김치가 되기 일쑤였다. 예비학부 시절에는 러시아어를 배우기 위해 수학과 과학을 도구로 삼았다면, 본학부가 시작되니 상황이 완벽히 역전되었다. 이제는 <span class="text-red-600 font-bold">살인적인 전공 수업을 이해하기 위해 러시아어를 죽어라 파고들어야만 했다.</span> 📚 물론 시간이 흐르면서 전공 수업에 등장하는 어휘들이 돌림노래처럼 한정적이라는 걸 깨닫고 나름 생존법을 터득하게 되지만 말이다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍻 술로 하나 된 추석</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          추석은 새 학기가 시작되고 3주쯤 지났을 때 찾아왔다. 🌕 당연히 러시아에서 추석은 공휴일이 아니었지만, 같은 반 친구들에게 앞으로 잘 부탁한다는 인사를 전하고 싶어 호텔 내 한국 식당으로 그들을 초대했다. 사실 당시만 해도 모스크바에서 한국 음식은 대중적이지 않았고 가격도 꽤 비싼 편이었다. 생전 처음 접하는 맵고 낯선 비주얼의 음식들에 친구들은 적잖이 당황한 눈치였다. 그들은 예의상 ‘음...’ 하며 고개를 끄덕이고는 있었지만, 굳어진 표정에서 숨길 수 없는 당혹감이 읽혔다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          하지만 분위기를 반전시킨 건 역시 술이었다. 보드카와 맥주를 섞은 한국식 ‘폭탄주’가 몇 번 돌기 시작하자, 어색했던 공기는 순식간에 달아올랐다. 🍻 독한 술에 단련된 러시아인들이라 그런지 폭탄주의 오묘한 맛에 금세 매료되었고, 그때부터는 안주가 무엇이든 개의치 않고 즐겁게 먹기 시작했다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          아직 러시아어가 서툴러 그들도 나도 서로의 말을 완벽히 이해하지 못할 때가 많았지만, 잔을 부딪치며 터져 나오는 웃음소리만큼은 통역이 필요 없었다. 문법이 틀리고 단어가 생각나지 않아도, 붉게 달아오른 얼굴로 서로를 마주 보며 건네는 투박한 몸짓 속에 진심이 담겨 있었다.
        </p>

        <blockquote class="text-center font-serif text-xl text-russia-blue my-10 border-y-2 border-slate-100 py-8 leading-relaxed">
          "결국 그날 밤, 호텔 식당을 나서며 우리는 한층 더 가까워져 있었다. <br/>
          한국의 명절인 추석이 모스크바의 차가운 밤공기 속에서 우정이라는 이름으로 다시 피어난 순간이었다. <br/>
          말이 통하지 않아도 마음은 통할 수 있다는, 유학 생활에서 가장 중요한 진리를 나는 그날의 술잔 속에서 배울 수 있었다."
        </blockquote>
      `,
        en: `
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          The summer vacation, which seemed like it would last forever, evaporated without a trace, and before I knew it, my first semester as a graduate student had begun. 🎓 If you're a university student in Korea, you have to fight for your own schedule by clicking your mouse like crazy 🖱️ during the course registration period, but in Russia, the school is so 'kind' as to make the schedule for not only undergraduate but also graduate students. Well, to be honest, I, who had lived according to a schedule set by the state since my military academy days, had no particular complaints about this passive system.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🤝 Classmates, No, Comrades</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The master's program at Moscow State University is a little different from that of a Korean graduate school. Classmates who enter the same department at the same time take all classes together until graduation, with the exception of a few liberal arts courses. So it's much more natural to call them close-knit 'classmates' rather than loose 'university classmates.' Or maybe it's more appropriate to call them 'comrades (товарищ)' in the Soviet style...
        </p>
        <div class="bg-slate-50 p-6 rounded-lg border-l-4 border-russia-blue my-6">
          <p class="leading-relaxed text-slate-700">
            There were a total of 12 people in our class, and contrary to the scary and rigid name of the 'Department of Nuclear Physics,' there were as many as 3 female students. 👩‍🔬 A gender ratio of 25% is truly an amazing number for an engineering or natural sciences department.
          </p>
        </div>
        <p class="leading-relaxed mb-6 text-slate-700">
          The composition of these 12 people is quite interesting. 8 of them were the so-called 'sacred bones' who came straight from the undergraduate program at Moscow State University, 1 was a domestic student from another university, and 1 was an international student from Kazakhstan. 🇰🇿 In fact, since Kazakhstan is a Russian-speaking country, he spoke the language perfectly, so the title of 'foreign student admission' was almost meaningless. And the remaining two spots were for the true beginner foreigners, me and my acquaintance. Moreover, since all of them had majored in nuclear physics since their undergraduate days, I couldn't help but be more nervous. 🤯
        </p>
        
        <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <p class="leading-relaxed text-yellow-900 font-medium mb-2">🤫 The Bitter Truth of Capitalism</p>
          <p class="leading-relaxed text-yellow-800">
            A shocking fact that I later heard from my acquaintances was that two Russian students who were originally from this undergraduate program were dropped from the master's program to admit us two foreigners. While domestic students go to school without paying tuition and even receive a small scholarship, we have to pay 100% of the tuition, so from the school's perspective, we were a pretty 'lucrative' source of income. 💸 After facing this bitter truth of capitalism, I felt a strange sense of debt towards those two dropouts whom I had never even seen before. My Russian 'comrade' classmates comforted me by saying that those two got good jobs, so I shouldn't worry.
          </p>
        </div>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💪 The Strong Slavic Leader</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The leader of our class was a female student. She was dating a male student from the same class, and she was a perfect leader with a very strong personality, decisiveness, and kindness. When she went out with her classmates, she took charge of all the planning like a travel agency employee, and she also took good care of our studies, who were foreigners who couldn't speak the language well. She was a friend who made me feel the power of a strong Slavic woman.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          In particular, her lecture notes were like a welcome rain in a drought, but the problem was that they were not easy to decipher. ✍️ Many Russians, regardless of gender, boast of terrible handwriting, and the class leader's handwriting was also at the level of another 'required major subject' that we had to complete. There were even times when she couldn't recognize her own scribbled handwriting, so we would often stare at the notebook together. Still, without those hard-to-decipher notes and the class leader's dedication, my safe graduation might have been impossible.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">👨‍🏫 My Advisor</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The main job of a graduate student is research, isn't it? After meeting with the professor in charge of career counseling and telling him my desired field, my advisor was assigned a few days later. The professor's name was 'Belyshev Sergey Sergeyevich'. As you can immediately guess from the name, his father's name is also Sergey.
        </p>
        <blockquote class="border-l-4 border-russia-blue pl-4 py-2 my-6 italic text-slate-700 bg-slate-50">
          (I will deal with the unique naming and patronymic system of Russians in more detail in Chapter 6, Russian Names).
        </blockquote>
        <p class="leading-relaxed mb-6 text-slate-700">
          In Russia, when you officially address someone with respect, you must call them by their 'first name' and 'patronymic' together. However, since I was still in the habit of casually calling my teachers by their first names during my preparatory program days, I made a few mistakes with the honorifics in the early days of my master's program and had to receive a sharp rebuke. Fortunately, my advisor was a very young and passionate scholar who looked to be at most three or four years older than me, and he diligently guided the lost international student even in his killer schedule.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">😵‍💫 A Time When the Soul Leaves the Body</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The first few weeks of graduate school were truly a time when the soul leaves the body. The master's program system had only been in place at Moscow State University for a few years. Before that, there was a unique Russian specialist program that only required one more year of study in the undergraduate program. It can be said that this was an effort to catch up with the Western system and reflect international trends. Since it was not yet a firmly established system, the schedule was often overturned and changed, which was very confusing.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          In addition, I would be exhausted when I came home after listening to Russian major lectures all day long that I couldn't understand at all. During my preparatory program days, I used mathematics and science as tools to learn Russian, but when the main program began, the situation was completely reversed. Now, I had to <span class="text-red-600 font-bold">dig into Russian like crazy to understand the killer major classes.</span> 📚 Of course, as time went by, I realized that the vocabulary that appeared in the major classes was limited like a round song, and I learned my own survival methods.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍻 Chuseok, United by Alcohol</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Chuseok came about 3 weeks after the new semester started. 🌕 Of course, Chuseok was not a public holiday in Russia, but I wanted to say hello to my classmates and ask them to take good care of me in the future, so I invited them to a Korean restaurant in a hotel. In fact, at that time, Korean food was not popular in Moscow and the price was quite expensive. My friends seemed quite embarrassed by the spicy and unfamiliar-looking food that they had never seen before. They nodded their heads and said 'umm...' out of politeness, but I could read the unconcealable embarrassment on their stiff faces.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          But what turned the atmosphere around was, of course, alcohol. As soon as a few rounds of Korean-style 'bomb shots,' a mixture of vodka and beer, began to circulate, the awkward atmosphere quickly heated up. 🍻 Perhaps because they were Russians who were hardened to strong alcohol, they were quickly fascinated by the subtle taste of the bomb shots, and from then on, they began to eat happily regardless of what the side dishes were.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          There were many times when we couldn't understand each other's words perfectly because I was not yet fluent in Russian, but the sound of laughter that erupted as we clinked our glasses together needed no translation. Even if the grammar was wrong and I couldn't remember the words, there was sincerity in the clumsy gestures we made as we looked at each other with flushed faces.
        </p>

        <blockquote class="text-center font-serif text-xl text-russia-blue my-10 border-y-2 border-slate-100 py-8 leading-relaxed">
          "In the end, as we left the hotel restaurant that night, we had grown much closer. <br/>
          It was the moment when the Korean holiday of Chuseok blossomed again in the cold night air of Moscow in the name of friendship. <br/>
          I was able to learn the most important truth of my life as a student abroad in that day's glass of alcohol: that even if we can't communicate with words, our hearts can."
        </blockquote>
      `,
      },
    },
    {
      id: 'post-202',
      title: { ko: '인생 처음 오리엔테이션', en: 'First Orientation of My Life' },
      subtitle: {
        ko: '야생, 보드카, 그리고 무너진 텐트',
        en: 'The Wild, Vodka, and a Collapsed Tent',
      },
      imageUrl: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1200&auto=format&fit=crop', // Camping in forest
      isActive: true,
      comments: [],
      content: {
        ko: `
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          반장으로부터 물리과 오리엔테이션이 있다는 이야기를 들었다. 모스크바가 교외의 어딘가 숲속 야영장에서 진행된다고 했다. 또한 우리과인 핵물리학과 뿐만이 아니라 물리학과 전체의 오리엔테이션이었기에 꽤나 규모가 크다고 한다. 같은 반 친구들이 대부분 간다기에 나와 지인도 호기심 반 기대 반으로 동참하기로 했다.
        </p>
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🛒 전투 식량 비축</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          첫 집결지는 기차역 근처의 대형 마트였다. 야생으로 떠나기 전 ‘전투 식량’을 비축하기 위해서였다. 각자 챙겨온 텐트와 침낭을 멘 무리들이 카트 한가득 보드카와 맥주, 고기, 빵, 그리고 소시지를 쓸어 담는 모습은 그야말로 장관이었다. 양손 무겁게 짐을 든 우리는 ‘일렉트리치카(Электричка)’라 불리는 모스크바 근교 통근 열차(혹은 교외철)에 몸을 실었다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          이 열차는 겉보기엔 세월의 흔적이 가득하고 덜컹거리는 소음도 심했지만, 막상 달리기 시작하니 예상과는 전혀 다른 속도감을 뽐냈다. 둔탁한 외관과 달리 광활한 러시아 평원을 거침없이 가로지르는 기세가 대단했는데, 창밖의 풍경이 마치 뒤로 빨려 들어가는 듯한 착각이 들 정도로 빨랐다. 2시간 남짓 이동하는 동안, 창밖으로는 모스크바의 도심 풍경 대신 빠른 속도로 스쳐 지나가는 끝없는 자작나무 숲이 이어졌다.
        </p>
        <div class="bg-slate-50 p-6 rounded-lg border-l-4 border-russia-blue my-6">
          <p class="leading-relaxed text-slate-700">
          출출해질 무렵, 한 친구가 흑빵 위에 기름에 절인 생선을 툭 얹어서 건넸다. 러시아인들이 보드카 안주로 가장 사랑한다는 셀룟카(Сельдка, 청어 절임)였다. 미끌거리고 비릿해 보이는 은빛 단면의 충격적인 비주얼에 잠시 멈칫했지만, 친구의 성의를 봐서 호기심에 눈 딱 감고 한 입 베어 물었다. 비린내가 진동할 것이라는 예상과 달리, 짭조름한 바다의 풍미와 발효된 생선 특유의 고소한 감칠맛이 묵직한 흑빵의 산미와 어우러져 묘하게 괜찮았다. 역시 보이는 것 만이 다는 아니었다. 이번에도 한 수 배운다.
          </p>
        </div>
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⛺️ 야생 그 자체, 숲속 캠핑</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          기차역에 내린 우리는 철길을 따라 걷다가 별안간 길도 없는 울창한 숲속으로 꺾어 들어갔다. ‘정말 이런 곳에 캠핑장이 있다고?’ 의심할 무렵, 나무들 사이로 웅성거리는 무리가 나타났다. 화장실도, 개수대도 없는 그야말로 100% 날것의 숲. 러시아의 캠핑은 역시나 야생 그 자체였다. 캠핑장은 무슨...
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          오후에 도착한 우리는 해가 지기 전 서둘러 텐트 칠 자리를 물색 해야했다. 하지만 숲의 바닥은 습기를 잔뜩 머금어 푹신하다 못해 질척거렸다. 팩을 아무리 깊게 박아도 흙이 물러서 지지대가 단단히 고정되지 않았다. 해가 지기 전에 어떻게든 형태를 갖춰야 했기에 대충 뼈대를 세우고 얼렁뚱땅 공사를 마무리했다. 텐트 앞에서는 코펠을 꺼내 투박한 요리를 시작했고, 주변 학생들과 자연스럽게 보드카와 음식을 나누며 본격적인 숲속의 밤을 맞이했다.
        </p>
        <blockquote class="border-l-4 border-russia-blue pl-4 py-2 my-6 italic text-slate-700 bg-slate-50">
          야생이나 다름없는 곳이다 보니 깜빡 잊고 챙겨오지 못한 물건이나 부족한 것들이 속출했지만, 그것이 크게 문제 되지는 않았다. 주위의 학생들은 약속이라도 한 듯 너나 할 거 없이 먹을 것부터 캠핑 장비까지 손에 잡히는 모든 걸 아낌없이 나누었다. 누군가는 툭 하고 소시지를 건넸고, 다른 누군가는 부족한 컵 대신 쓰라며 자신의 빈 용기를 내어주었다. 우리도 다른 이들이 필요한 것들을 서슴없이 건넸고 체면 차리지 않고 어느 도움도 아무 거리낌 없이 주고 받았다.
        </blockquote>
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎶 강남스타일 in a Russian Forest</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          보드카 덕분에 기분 좋은 취기가 올랐을 즈음, 캄캄한 숲 깊은 곳에서 심장을 울리는 강렬한 음악 소리가 들려왔다. 소리를 따라 헤치고 들어가니, 나무들에 둘러싸인 제법 널찍한 공터가 나타났다. 그곳엔 조악하지만 그럴싸한 무대와 화려한 조명이 설치되어 있었다. 사회자로 보이는 학생의 우렁찬 환영 인사와 함께 모스크바 국립대의 구호가 밤하늘에 울려 퍼졌고, 광란의 파티가 시작되었다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          술과 음악, 그리고 젊음이 뒤엉킨 숲속의 클럽. 서로의 이름도 모른 채 어깨동무를 하고 정체불명의 춤을 추며 놀던 그때, 스피커에서 익숙한 전주가 흘러나왔다. 바로 싸이의 ‘강남스타일’이었다. 이역만리 러시아의 캄캄한 숲속에서 수백 명의 러시아 학생들과 다 함께 말춤을 추게 될 줄이야. 벅차오르는 반가움과 묘한 자부심에 취해 그 어느 때보다 열정적으로 뛰놀았다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          한바탕 춤판을 벌이고 나니 금세 허기가 졌다. 공터 한편에 모닥불을 피워놓고 모여 앉은 무리가 있길래 자연스럽게 틈에 끼어들었다. 주변에 굴러다니는 나뭇가지 끝에 소시지를 푹 꽂아 타닥타닥 타오르는 장작불에 구워 먹는 맛은 그야말로 일품이었다. 타국에서 만난 친구들과 불멍을 하며 서툰 대화를 나누는 밤은 낭만으로 가득했다.
        </p>
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⛺️ 인간 김밥이 되다</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          하지만 낭만은 거기까지였다. 텐트로 돌아와 보니, 아까부터 불안불안하던 텐트는 이미 피사의 사탑처럼 기우뚱해져 있었다. 이미 알코올과 피곤에 절어있던 우리는 ‘에라 모르겠다’는 심정으로 러시아인 친구, 지인, 그리고 나까지 셋이서 위태로운 텐트 안으로 기어들어 갔다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          나와 텐트를 짝꿍처럼 쓰게 된 러시아인 친구는 자신의 주량을 한참 오버한 게 분명했다. 녀석은 자는 내내 "우욱" 소리와 함께 주기적으로 밖으로 뛰쳐나갔다. 자다가 깨는 것까지는 참을 만했는데, 진짜 문제는 녀석이 구토를 마치고 들어올 때마다 안 그래도 부실한 텐트 지지대를 자꾸 툭툭 건드린다는 것이었다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          "야... 텐트 무너진다..." 나의 애원에도 녀석은 아랑곳하지 않았다. 결국 다음 날 아침 눈을 떴을 때, 우리 셋은 텐트라는 공간 안에 누워있는 것이 아니라, 폭삭 주저앉은 텐트 천을 이불처럼 덮고 자는 '인간 김밥' 신세가 되어 있었다.
        </p>
        <blockquote class="text-center font-serif text-xl text-russia-blue my-10 border-y-2 border-slate-100 py-8 leading-relaxed">
        돌이켜보면 뼛속까지 야생적이고 날것 그대로였던 오리엔테이션이었다. 한국의 MT와는 차원이 다른, 진흙탕과 보드카, 그리고 무너진 텐트가 버무려진 진짜 생존 캠핑. 한국에서도 안 해본 대학 오리엔테이션을, 나는 이 낯선 러시아의 숲속에서 평생 잊지 못할 만큼 징하게 치러냈다.
        </blockquote>
      `,
        en: `
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          I heard from the class leader that there would be a physics department orientation. It was said to be held at a forest campground somewhere in the suburbs of Moscow. It was also said to be quite large, as it was an orientation for the entire physics department, not just our nuclear physics department. Since most of my classmates were going, my acquaintance and I decided to join them, half out of curiosity and half in anticipation.
        </p>
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🛒 Stocking Up on Combat Rations</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The first meeting point was a large supermarket near the train station. It was to stock up on 'combat rations' before heading into the wild. The sight of groups of people with their own tents and sleeping bags, filling their carts with vodka, beer, meat, bread, and sausages, was truly a spectacle. With our hands full of luggage, we boarded a Moscow suburban commuter train (or suburban railway) called an 'elektrichka (Электричка)'.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          The train looked old and creaky, but once it started running, it boasted a speed that was completely different from what I had expected. Unlike its clunky exterior, its momentum as it relentlessly crossed the vast Russian plains was tremendous, and the scenery outside the window was so fast that it felt like it was being sucked backward. During the two-hour journey, instead of the urban landscape of Moscow, an endless birch forest sped by outside the window.
        </p>
        <div class="bg-slate-50 p-6 rounded-lg border-l-4 border-russia-blue my-6">
          <p class="leading-relaxed text-slate-700">
          When I was getting hungry, a friend put a piece of oil-cured fish on a piece of black bread and handed it to me. It was Selyodka (Сельдка, pickled herring), which Russians love most as a vodka snack. I hesitated for a moment at the shocking visual of the slippery, fishy-looking silver cross-section, but out of curiosity and consideration for my friend's sincerity, I closed my eyes and took a bite. Contrary to my expectation that it would smell fishy, the salty taste of the sea and the savory taste unique to fermented fish combined with the acidity of the heavy black bread was strangely good. As expected, what you see is not all there is. I learned a lesson again this time.
          </p>
        </div>
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⛺️ The Wild Itself, Camping in the Woods</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          After getting off at the train station, we walked along the railroad tracks and then suddenly turned into a dense forest with no path. Just as I was wondering, 'Is there really a campground in a place like this?', a crowd of people appeared among the trees. It was a 100% raw forest with no toilets or sinks. Russian camping was indeed the wild itself. What campground...
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          We arrived in the afternoon and had to hurry to find a place to pitch our tent before the sun went down. However, the forest floor was so damp that it was not just soft, but muddy. No matter how deep I hammered the pegs, the soil was so soft that the supports would not stay firm. We had to have some form of shelter before sunset, so we roughly set up the frame and finished the construction in a hurry. In front of the tent, we took out a mess kit and started cooking a simple meal, and we greeted the forest night in earnest by naturally sharing vodka and food with the surrounding students.
        </p>
        <blockquote class="border-l-4 border-russia-blue pl-4 py-2 my-6 italic text-slate-700 bg-slate-50">
          Since it was a place no different from the wild, there were a lot of things we forgot to bring or were short of, but that wasn't a big problem. The students around us, as if by appointment, shared everything they had in their hands, from food to camping gear. Someone casually handed me a sausage, and another gave me their empty container to use instead of a cup. We also gave others what they needed without hesitation and gave and received help without any hesitation or saving face.
        </blockquote>
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎶 Gangnam Style in a Russian Forest</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Just as I was getting pleasantly drunk on vodka, I heard a loud, heart-pounding music coming from deep in the dark forest. I followed the sound and came to a fairly spacious clearing surrounded by trees. There was a crude but plausible stage and colorful lights installed there. With a loud welcome from a student who seemed to be the MC, the slogan of Moscow State University echoed through the night sky, and a frantic party began.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          A club in the woods where alcohol, music, and youth were intertwined. At that time, when we were dancing with our arms around each other's shoulders without even knowing each other's names, a familiar intro flowed from the speakers. It was Psy's 'Gangnam Style.' I never thought I would be doing the horse dance with hundreds of Russian students in a dark forest in a foreign country, Russia. Drunk on the overwhelming joy and a strange sense of pride, I danced more passionately than ever before.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          After a round of dancing, I quickly got hungry. There was a group of people sitting around a bonfire in a corner of the clearing, so I naturally joined them. The taste of sausages skewered on the ends of tree branches lying around and grilled over the crackling bonfire was truly exquisite. The night of talking with friends I met in a foreign country while staring at the fire was full of romance.
        </p>
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⛺️ Becoming a Human Gimbap</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          But the romance ended there. When I returned to the tent, the tent, which had been unstable for a while, was already leaning like the Leaning Tower of Pisa. Already soaked in alcohol and fatigue, we crawled into the precarious tent with a 'whatever' attitude, the three of us: my Russian friend, my acquaintance, and me.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          My Russian friend, who had become my tent buddy, had clearly drunk far beyond his limit. Throughout the night, he would periodically run outside with a "blech" sound. I could tolerate waking up, but the real problem was that every time he came back after vomiting, he would keep bumping into the already flimsy tent supports.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          "Hey... the tent is going to collapse..." Despite my pleas, he didn't care. In the end, when we woke up the next morning, the three of us were not lying in a tent, but in the state of 'human gimbap,' sleeping with the collapsed tent fabric as a blanket.
        </p>
        <blockquote class="text-center font-serif text-xl text-russia-blue my-10 border-y-2 border-slate-100 py-8 leading-relaxed">
        Looking back, it was an orientation that was wild and raw to the bone. It was a real survival camping mixed with mud, vodka, and a collapsed tent, on a different level from a Korean MT (membership training). I had never even been to a university orientation in Korea, but I went through this one in a strange Russian forest so intensely that I will never forget it for the rest of my life.
        </blockquote>
      `,
      },
    },
    {
      id: 'post-203',
      title: { ko: '교양과목', en: 'Elective Courses' },
      subtitle: {
        ko: '러시아 대학의 시간표, 교양과목에 숨겨진 이야기',
        en: 'The Story Behind the Timetable and Elective Courses at a Russian University',
      },
      imageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop', // Library books
      isActive: true,
      comments: [],
      content: {
        ko: `
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          소련이 붕괴한지도 20년이 넘었지만 여전히 러시아에는 소련의 잔재를 많이 느낄 수 있다. 2화에서도 잠시 소개했지만 러시아 대학의 시간표 또한 우리가 아는 그것과는 사뭇 다르다. 요즘 한국에서는 중고등학생도 선택과목을 선호도 혹은 전략적으로 스스로 선택한다는데, 러시아에서는 대학생들 조차 학과에서 일괄적으로 배정해 주는 시간표를 군말 없이 따라야 하는 구조다. 😥
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          전공 필수 과목들이 빽빽하게 박힌 시간표를 보면 숨이 턱 막히기도 하지만, 그나마 숨통이 트이는 지점은 매 학기 다른 학과의 전공 중 하나를 골라 들을 수 있는 ‘자유 선택 과목’이다. 많은 과목 중에 내 눈에 ‘핵화학’이라는 과목이 들어왔다. 학부시절 화학을 공부했고 지금 핵물리학을 공부하기에 이처럼 거저먹는 과목도 없다는 생각이 들었다. 🧪 그리고 러시아 ‘동무’들이 공부가 수월해 학점을 거저 받을 수 있다는 말에 혹해 다같이 ‘지리학’을 선택했다. 🗺️
        </p>

        <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
          <p class="leading-relaxed text-slate-800">
            당시 통번역학과에 재학 중이던 아내에게는 지리학은 정말 쉽고 어려운 부분은 같이 듣는 러시아 친구들이 도와줄 거라며 달콤한 말로 꼬드겨 같은 수업을 듣게 했다. 👩‍❤️‍👨 사실 강의 내용을 완벽히 이해하기보다는 그저 아내와 나란히 앉아 있는 시간이 좋았다. 잘 알아듣지는 못했지만 그래도 수업 시간에 아내와 함께 앉아 있으니 CC(Campus Couple)가 된것 같은 기분도 들긴했다. 💑
          </p>
        </div>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">📖 현대물리학의 역사: 지적 전쟁의 시대</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          선택 과목 외에 지정된 교양 과목들도 거쳐야 했다. 그중 첫 학기에 들었던 ‘현대물리학의 역사’는 꽤나 깊은 인상을 남겼다. 뉴턴의 고전역학이라는 견고한 성벽을 허물고 전자기학과 양자역학이라는 새로운 세계가 태동하던 시기, 그 혼돈의 시대를 풍미했던 과학자들의 뒷이야기를 다루는 수업이었다. ⚛️ 특히 빛의 이중성을 죽을 때까지 부인했던 고집불통 아인슈타인과, 당대 최고의 천재들이 한자리에 모여 지적 전쟁을 벌였던 ‘제5차 솔베이 회의’에 관한 에피소드는 전공자로서 무척이나 흥미로웠다. 🧑‍🔬 칠판 가득 적히는 수식 뒤에 숨겨진 인간적인 고뇌와 갈등을 엿볼 수 있는 귀한 시간이었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🤯 거대한 벽, 러시아 철학</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          또 다른 선택 과목이었던 '러시아 철학'은 나에게 거대한 벽과 같았다. 언어 실력이 계단식으로 오른다고는 하지만, 분야별로 체감되는 난이도는 천차만별이었다. 📈 과학 관련 수업은 익숙한 수식과 라틴어 기반의 단어들 덕분에 이해하기 수월해졌지만, 철학 용어는 도무지 감을 잡을 수 없었다. 수업 시간 중 80% 이상은 안개 속을 헤매는 기분이었지만, ‘얼굴 도장이라도 찍으면 낙제는 면하겠지’라는 절박한 마음으로 강의실 맨 앞줄을 고수했다. 😮‍💨 교수님의 입에서 나오는 단어 중 아는 것만 골라 무작정 노트에 적어 내려갔는데, 나중에 보니 앞뒤 문맥도 맞지 않는 단어들의 나열일 뿐이었다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          러시아 철학의 마지막 관문은 본인이 정한 철학 주제로 10분간 발표하는 것이었다. 🗣️ 내가 살던 거리의 이름이 러시아의 전설적인 수학자 ‘로바체프스키’였는데, 그가 러시아 우주론에 큰 족적을 남겼다는 이야기를 듣고 친숙함에 이끌려 발표 주제를 정했다. 🌌 하지만 막상 준비를 시작하니 머릿속은 하얘졌다. 기억나는 건 대학 시절 교양 수업에서 언뜻 들었던 플라톤의 ‘이데아’ 정도였다. “동굴 속 횃불이 비추는 그림자가 어쩌구...” 하는 희미한 기억을 붙잡고, 며칠 밤을 새워 자료를 뒤져 한 페이지 분량의 원고를 완성했다. 그걸 단어 하나하나 통째로 뇌에 새기듯 외운 덕분에, 다행히 교수님의 인자한 미소와 함께 과목을 잘 마칠 수 있었다. 😊
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🗣️ 피할 수 없는 숙명, 러시아어 수업</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          나 같은 외국인 유학생들에게 러시아어는 피할 수 없는 숙명이다. 첫 학기에는 일주일에 무려 6시간이나 배정되어 비중이 꽤 컸지만, 두 번째 학기에는 4시간, 세 번째 학기에는 2시간으로 서서히 줄어들며 전공에 집중할 시간을 내주었다. 🇷🇺 머리 아픈 물리학 공식과 씨름하다가 러시아어 시간에 오면 마음이 그렇게 평온할 수가 없었다. 🧘 한 반에 학생이 서너 명뿐이라 선생님과 일상적인 대화를 나눌 기회도 많았다. 같은 반 학생들은 모두 물리학과 소속 외국인들이었는데, 우리는 러시아어 논문에 자주 쓰이는 정제된 표현을 배우거나 짧은 과학 지문을 읽고 토론하며 유학 생활의 고충을 나누기도 했다. 💬
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          러시아어 수업이 유독 편안했던 이유는 단순히 전공의 압박에서 벗어났기 때문만은 아니었다. 당시 우리를 가르치셨던 선생님은 우리의 어설픈 러시아어를 인내심 있게 들어주셨을 뿐만 아니라, 본인의 이야기도 재미있게 들려주시곤 하셨다. 한 번은 내가 수업 시간에 조심스럽게 고민을 털어놓은 적이 있다. 러시아인들이 웬지 외국인을 차별하는 듯 하다고 말이다. 마트에서 계산을 하면 점원이 잔돈을 휙휙 던지듯 건네기도 하고, 아직 마감시간이 남았는데도 닫을 시간이라면서 쫓아낸 적도 있다고 했다. 😠
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          내 이야기를 가만히 듣던 선생님은 빙그레 웃으시더니 손사래를 치셨다. 🙅‍♀️ “그건 외국인이라서 그런 게 아니에요. 우리 러시아 사람들은 러시아인끼리도 그래요!”라며 본인이 겪은 기상천외한 에피소드들을 들려주셨다. 🤣 선생님은 아주 교양있는 사람이었음에도 종종 불친절한 사람들을 만나고 가끔은 그들과 설전도 마다하지 않는다고 한다. 🗣️🔥
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          선생님의 이야기를 들으며 우리는 한바탕 크게 웃었고, 그 덕분에 러시아인들에 대해 가졌던 막연한 고정관념과 날 선 오해들을 눈 녹듯 흘려보낼 수 있었다. 😌 돌이켜보면 좋은 선생님이란 단순히 지식을 전달하는 사람이 아니라, 타인의 고민에 깊이 공감하고 그 편견의 벽을 유머로 허물어주는 사람이 아닐까 싶다. 💖 낯선 땅에서 만난 뜻밖의 철학 수업은 강의실 안이 아니라, 선생님과 마주 앉아 나누었던 그 소소한 대화 속에 있었다. ✨
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🇬🇧 영국식 영어와 러시아 억양</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          러시아 같은 반 친구들과 영어 수업도 두 학기 수강했다. 모스크바 최고의 명문인 모스크바 국립대(MSU) 학생들이었지만, 영어 실력은 나와 별반 다를 게 없다는 사실에 묘한 동질감을 느꼈다. 😅 한두 명의 특출난 실력자를 제외하면, 문법만 지독하게 파고든 우리네 학생들과 수준이 비슷했다. 다만 특이한 점은 미국식 영어가 아닌 영국식 영어를 원형으로 배운다는 것이었다. 🇬🇧 여기에 러시아인 특유의 투박하고 강한 억양이 합쳐지니 몇몇 단어의 발음은 무척 이질적으로 들려 고개를 갸우뚱하게 만들기도 했다. 🤔
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          수업 방식은 문법과 회화를 두루 다루었다. 한국에 ‘성문 종합영어’가 있다면, 그들에게는 영국의 옥스포드나 캠브리지 교재를 기반으로 한 특유의 문법 교재가 있었다. 📖 ‘a’와 ‘the’ 같은 관사의 미묘한 차이나, ‘in’, ‘at’, ‘on’ 같은 전치사의 쓰임새를 지독할 정도로 반복 숙달시키는 책이었다. 🧐 영국 영어를 배우다 보니 친구들이 즐겨 보는 문화 콘텐츠도 달랐다. 한국 학생들이 ‘프렌즈’나 ‘모던 패밀리’를 보며 미국식 농담에 웃을 때, 러시아 친구들은 ‘셜록’이나 ‘닥터 후’ 같은 영국 드라마를 보며 베네딕트 컴버배치의 빠른 발음을 따라 하려 애썼다. 🕵️‍♂️ 러시아 땅에서 러시아어로 영어 수업을 듣는 기묘한 상황이 올 줄은 미처 몰랐지만, 그 생경하고 치열했던 시간들도 이제는 웃으며 반추할 수 있는 소중한 추억의 한 페이지가 되었다. 🌟
        </p>
      `,
        en: `
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          Although it has been over 20 years since the collapse of the Soviet Union, you can still feel many remnants of the Soviet Union in Russia. As I briefly introduced in episode 2, the university timetable in Russia is also quite different from what we know. Nowadays in Korea, even middle and high school students choose their elective subjects based on their preference or strategy, but in Russia, even university students have to follow the timetable assigned by the department without complaint. 😥
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          The timetable packed with required major subjects can be suffocating, but the one place where you can breathe is the 'free elective course' where you can choose and take one of the majors from another department each semester. Among the many subjects, the subject of 'Nuclear Chemistry' caught my eye. I thought that since I had studied chemistry in my undergraduate years and was now studying nuclear physics, there would be no other subject that I could get for free like this. 🧪 And I was tempted by the words of my Russian 'comrades' that I could get a good grade for free because the study was easy, so we all chose 'Geography'. 🗺️
        </p>

        <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
          <p class="leading-relaxed text-slate-800">
            At that time, my wife, who was a student in the translation and interpretation department, was persuaded with sweet words to take the same class, saying that geography was really easy and that our Russian friends who were taking it together would help with the difficult parts. 👩‍❤️‍👨 To be honest, rather than perfectly understanding the lecture content, I just enjoyed the time I spent sitting next to my wife. I didn't understand much, but sitting with my wife in class still made me feel like we were a CC (Campus Couple). 💑
          </p>
        </div>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">📖 The History of Modern Physics: The Age of Intellectual Warfare</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          In addition to elective courses, I also had to take designated liberal arts courses. Among them, 'The History of Modern Physics', which I took in my first semester, left a pretty deep impression. It was a class that dealt with the behind-the-scenes stories of the scientists who dominated the chaotic era when the solid walls of Newton's classical mechanics were torn down and a new world of electromagnetism and quantum mechanics was born. ⚛️ In particular, the episode about the stubborn Einstein, who denied the dual nature of light until his death, and the 'Fifth Solvay Conference', where the best geniuses of the time gathered to engage in intellectual warfare, was very interesting as a major. 🧑‍🔬 It was a precious time to get a glimpse of the human anguish and conflict hidden behind the formulas that filled the blackboard.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🤯 The Great Wall, Russian Philosophy</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Another elective course, 'Russian Philosophy', was like a huge wall to me. Although it is said that language skills improve in a stepwise manner, the perceived difficulty level varies greatly from field to field. 📈 Science-related classes became easier to understand thanks to familiar formulas and Latin-based words, but I couldn't get a grasp of philosophical terms at all. More than 80% of the class time, I felt like I was wandering in a fog, but I stuck to the front row of the classroom with the desperate thought that 'if I just show my face, I'll at least avoid failing.' 😮‍💨 I just jotted down the words I knew from the professor's mouth in my notebook, but later I found that it was just a list of words that didn't even make sense in context.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          The final gateway to Russian philosophy was to give a 10-minute presentation on a philosophical topic of my choice. 🗣️ The name of the street I lived on was 'Lobachevsky', a legendary Russian mathematician, and I was drawn to the topic by its familiarity after hearing that he had left a great mark on Russian cosmology. 🌌 However, when I actually started preparing, my mind went blank. All I could remember was Plato's 'Idea' that I had vaguely heard in a liberal arts class in college. Holding on to the faint memory of "something about the shadow cast by a torch in a cave...", I pulled a few all-nighters, researched materials, and completed a one-page manuscript. Thanks to memorizing it word for word as if I were engraving it on my brain, I was able to finish the course with the professor's benevolent smile. 😊
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🗣️ The Inescapable Fate, Russian Language Class</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          For foreign students like me, the Russian language is an inescapable fate. In the first semester, it was assigned a whopping 6 hours a week, so it was quite a large portion, but in the second semester, it was gradually reduced to 4 hours, and in the third semester, to 2 hours, giving me time to focus on my major. 🇷🇺 When I came to Russian class after struggling with headache-inducing physics formulas, my mind was so peaceful. 🧘 With only three or four students in a class, there were many opportunities to have casual conversations with the teacher. The students in the same class were all foreigners from the physics department, and we learned refined expressions often used in Russian academic papers or read and discussed short science texts, sharing the hardships of our study abroad life. 💬
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          The reason why the Russian class was so comfortable was not just because I was free from the pressure of my major. The teacher who taught us at that time not only listened patiently to our clumsy Russian, but also told us her own stories in an interesting way. Once, I carefully confessed my worries in class. I said that I felt that Russians somehow discriminated against foreigners. I said that when I paid at the supermarket, the cashier would sometimes throw the change at me, and that I had been kicked out of a store even though it was not yet closing time, with the excuse that it was closing time. 😠
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          The teacher, who was listening quietly to my story, smiled and waved her hands. 🙅‍♀️ "That's not because you're a foreigner. We Russians are like that to each other!" she said, telling us some of her own bizarre episodes. 🤣 Even though she was a very cultured person, she said she often met unfriendly people and sometimes did not hesitate to argue with them. 🗣️🔥
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          We all had a good laugh listening to the teacher's story, and thanks to that, we were able to let go of the vague stereotypes and sharp misunderstandings we had about Russians like melting snow. 😌 Looking back, I think a good teacher is not just someone who conveys knowledge, but someone who deeply empathizes with the worries of others and breaks down the wall of prejudice with humor. 💖 The unexpected philosophy class I encountered in a foreign land was not in the classroom, but in the small conversations I had with the teacher. ✨
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🇬🇧 British English and Russian Accent</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          I also took two semesters of English classes with my Russian classmates. Although they were students at Moscow State University (MSU), the most prestigious university in Moscow, I felt a strange sense of kinship in the fact that their English skills were not much different from mine. 😅 With the exception of one or two exceptionally skilled students, their level was similar to that of our students who had only dug into grammar. However, the peculiar thing was that they learned British English, not American English, as the original form. 🇬🇧 When the unique, rough, and strong Russian accent was added to this, the pronunciation of some words sounded very heterogeneous, making me tilt my head in confusion. 🤔
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          The teaching method covered both grammar and conversation. If Korea has 'Seongmun Comprehensive English', they had their own grammar textbook based on British Oxford or Cambridge textbooks. 📖 It was a book that repeatedly drilled the subtle differences between articles like 'a' and 'the', and the usage of prepositions like 'in', 'at', and 'on' to the point of being tedious. 🧐 As I learned British English, I found that the cultural content that my friends enjoyed was also different. While Korean students laughed at American jokes while watching 'Friends' or 'Modern Family', my Russian friends tried to imitate the fast pronunciation of Benedict Cumberbatch while watching British dramas like 'Sherlock' or 'Doctor Who'. 🕵️‍♂️ I never thought I would be in the strange situation of taking an English class in Russian in Russia, but those unfamiliar and intense times have now become a precious page of memories that I can look back on with a smile. 🌟
        </p>
      `,
      },
    },
    {
      id: 'post-203-extra',
      title: { ko: '✨ 외전 (3) - 러시아 남자들', en: '✨ Side Story (3) - Russian Men' },
      subtitle: {
        ko: '불곰 같은 겉모습 속 마트료시카 같은 매력',
        en: 'Matryoshka-like Charm Inside a Bear-like Exterior',
      },
      imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200&auto=format&fit=crop', // Russian winter atmosphere
      isActive: true,
      comments: [],
      content: {
        ko: `
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          러시아 남성들을 떠올리면 흔히들 한 손엔 보드카 병을 쥐고 영하 30도의 눈밭에서 불곰과 씨름을 할 것 같은 거칠고 마초적인 이미지를 상상한다. 실제로 그들은 꽤나 과격하고 무뚝뚝하지만, 사소한 일들에는 굉장히 관대(?) 혹은 무신경하고, 막상 마음의 문을 열면 생각보다 정이 넘치고 친근한 것도 사실이다. 학과 친구들을 제외하면 현지 남성들과 깊게 교류할 기회가 그리 많진 않았지만, 3년의 유학 생활 동안 내 피부로 직접 겪었던 몇 가지 일화를 통해 이 ‘불곰국 형님들’에 대해 단편적으로나마 소개하고자 한다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">👊 길거리 격투기 직관? 호전적인 형님들</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          모스크바에 살다 보면 지인들의 부탁으로 종종 공항에 픽업을 나갈 때가 있었다. 공항에서 시내까지 택시로 한 시간 남짓 이동하는 동안, 나는 일일 가이드가 되어 모스크바에 대한 이런저런 썰을 풀어드리곤 했다. 나의 단골 레퍼토리 중 하나는 바로 러시아 남자들의 호전성에 대한 경고였다. 거리에서 심심치 않게 주먹다짐을 하는 모습을 볼 수 있다고 주의를 주면, 손님들은 대개 대수롭지 않게 넘겼다. 
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          하지만 그 안일한 생각은 택시 창밖을 보면 여지없이 무너지곤 한다. 맹세컨데 러시아에 온 손님들은 공항에서 시내로 돌아올 때, 혹은 시내에서 공항으로 갈 때 둘 중에 한 번은 멱살을 잡고 주먹다짐을 하는 러시아인들의 실전 길거리 격투기(?)를 직관했다. 특히 번잡한 공항이나 기차역 근처에서는 본인의 남성성을 과시하려는 다혈질 형님들이 많아 크고 작은 다툼이 흔하게 일어난다. 🥊
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌙 심야의 지하철, 생존을 위한 팁</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          낮보다 더 조심해야 할 곳은 심야의 지하철역 근처다. 지금은 치안이 아주 많이 나아다고는 하지만, 늦은 밤 보드카에 절어 비틀거리는 러시아 취객을 마주치면 나도 모르게 손발이 떨려온다. 가끔 지하철 안에서 술기운에 시비를 거는 덩치들을 만나기도 하는데, 여기에 팁이 있다면 <span class="text-red-600 font-bold">‘절대 눈을 마주치지 말고 반대 방향으로 도망가라’</span>는 것이다. 🏃‍♂️ 
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          싸워서 이길 확률도 희박하거니와, 철없는 유학생들이 밤늦게 술 마시고 배회하다 폭행을 당하거나 금품을 갈취당하는 사건은 교민 사회에서 하도 많이 들어 레퍼토리가 지루할 지경이다. 이국의 밤거리에서는 나의 남성성을 증명하려 들지 말고, 그저 조용히 생존을 택하는 것이 현명하다. 
        </p>
        <div class="bg-slate-50 p-4 my-6 rounded-lg text-sm border-l-4 border-slate-300">
          모스크바 국립대 한인 학생회에서 모스크바 시내 투어를 시켜준 적이 있었는데 한국인 가이드가 전날 술 마시고 돌아다니다가 중앙아시아계 사람들에게 핸드폰과 금품을 빼앗겼다고 들은 적이 있다. 아무렇지 않게 이야기 하는 것으로 보아 한 두번 당해본게 아닌 듯 했는데도, 여전히 늦은 밤 술마시고 돌아다니다니… 그 가이드도 보통내기가 아니었다. 😵
        </div>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">❄️ 극한의 쿨함, 사과는 사치다</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          그런데 참 아이러니하게도, 이토록 전투력이 높은 사람들이 일상의 사소한 일에는 무서울 정도로 무덤덤하다. 러시아 지하철 같은 공공장소에서 걷다가 어깨를 아주 세게 부딪히거나 발을 밟혀도, 이들은 좀처럼 뒤돌아보며 화를 내거나 사과를 하지 않는다. 그저 ‘길을 걷다 보면 부딪힐 수도 있지, 잘 가’ 식의 극한의 쿨함(?)이었다. 이들에게 웬만한 물리적 충돌은 삶의 작은 스크래치조차 되지 않는 듯했다. 남의 시선을 1도 신경 쓰지 않고 자기 갈 길만 가는 그 무덤덤함, 삶의 해탈은 그들의 신비로움을 더하기도 하였다. 🧘‍♂️
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚂 기차 안에서 피어난 보드카 우정</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          그들의 숨겨진 따뜻한 정을 제대로 느꼈던 건 남부 지역으로 향하는 장거리 기차 안에서였다. 하루는 4인 1실인 '쿠페' 칸을 러시아인 가족(아빠, 엄마, 중학생 딸)과 함께 쓰게 되었다. 나는 2층 침대를 썼고, 그 가족이 1층 두 칸과 남은 2층 한 칸을 사용했다. 시베리아 횡단열차 편에서 소개했듯, 러시아 기차의 룰에 따라 식사 때가 되면 1층 사람들에게 양해를 구하고 테이블을 함께 써야 한다. 자연스럽게 그들 가족의 식사 자리에 합석하게 되었고, 가벼운 대화가 오갔다. 🥪
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          싹싹한 아주머니가 주로 대화를 주도했고, 사춘기 딸은 스마트폰 화면만 뚫어져라 쳐다보기 바빴다. 기차 내에서는 인터넷도 안터지는데 뭘 그렇게 열심히 하는지 신기할 따름이었다. 그때, 창밖만 묵묵히 응시하며 과묵함의 끝을 보여주던 아저씨가 슬그머니 내 쪽을 보며 입을 열었다. <span class="italic text-slate-600">"혹시... 술 좀 할 줄 아나?"</span> 🥃
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          나는 속으로 쾌재를 부르며 "러시아 보드카가 최고 아니겠습니까? 저도 꽤 마십니다"라며 너스레를 떨었다. 그 순간, 아저씨의 굳어 있던 얼굴에 봄바람 같은 화색이 돌더니 짐 가방 깊숙한 곳에서 투명한 보드카 한 병을 마술처럼 꺼내 들었다. 옆에서 아주머니의 날카로운 레이저 눈빛이 내리꽂히는 것이 느껴졌지만, 이미 사나이들의 결의(?)를 막을 순 없었다. 🤝
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🔥 사나이들의 결의, 국경을 넘다</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          이참에 한국인의 매운(?) 주량을 제대로 보여주리라 마음먹고 한 잔 두 잔, 주거니 받거니 술잔을 부딪쳤다. 언어의 장벽 따위는 독한 알코올이 식도를 타고 넘어가는 순간 하얗게 휘발되어 버렸고, 우리는 이미 국경을 초월한 의형제나 다름없었다. 기어코 순식간에 보드카 한 병이 바닥을 드러내자, 아저씨는 호탕하게 웃으며 내 어깨를 퍽퍽 내리쳤다. “하하! 이 친구, 제대로 마실 줄 아는구먼!” 
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          기차가 다음 역에 정차하자마자, 아저씨는 아주머니의 따가운 눈총을 뒤로한 채 승강장으로 튀어 나가 기어이 보드카 한 병을 더 보급해 오는 붉은 열정을 보여주었다. 각자 준비해 온 빵과 소시지를 넉넉하게 나눠 먹으며 밤이 깊도록 술잔을 기울였다. 🥖
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          아저씨가 사 온 보드카마저 동이 났을 때, 나는 직감적으로 ‘아, 이제 내 턴이구나’라는 걸 깨달았다. 아저씨의 융숭한 대접에 보답하고자 다음 정차역에서 살 수 있는 보드카 중 꽤 그럴싸하고 좋은 놈으로 한 병 골라왔다. 병을 건네자 아저씨의 얼굴엔 벅찬 감동이 일렁였다. 얼큰하게 달아오른 술기운에, 다음 날이면 기억도 안 날 온갖 이야기들을 끊임없이 주고받았다. 무뚝뚝한 표정 속에 감춰져 있던 러시아 아버지의 훈훈한 정 덕분에, 끝없이 지루할 뻔했던 시베리아 기차 여행은 내 인생 가장 유쾌한 추억 중 하나로 남았다. ✨
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🪆 마트료시카 같은 그들</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          결국 러시아 남자들은 알면 알수록 까도 까도 새로운 매력이 나오는 ‘마트료시카’ 같은 존재들이다. 인형을 열면 그 속에 더 작은 인형이, 또 열면 새로운 인형이 끊임없이 튀어나오는 러시아의 전통 목각 인형 마트료시카처럼 말이다. 겉보기엔 찔러도 피 한 방울 안 나올 것 같은 무뚝뚝한 불곰 형님들이지만, 일단 내 바운더리 안의 사람이라고 인정하는 순간 아낌없이 보드카 잔을 채워주는 츤데레들이다. 
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          돌이켜보면 러시아 사람들도 러시아라는 이 거대한 대륙과 꼭 닮았다. 그저 스쳐 지나가는 겉모습만 봐서는 진짜 속내를 알기 힘들지만, 오랫동안 곁에서 함께 부대끼고 잔을 부딪쳐 봐야 비로소 그 진국 같은 참매력을 온전히 느낄 수 있으니 말이다. 🇷🇺
        </p>
      `,
        en: `
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          When you think of Russian men, you often imagine a rough and macho image, perhaps wrestling a brown bear in -30 degree snow with a bottle of vodka in one hand. In reality, while they are quite aggressive and blunt, it's also true that they are incredibly generous—or perhaps indifferent—to minor inconveniences, and they are surprisingly warm and friendly once they open their hearts. Aside from my classmates, I didn't have many chances to interact deeply with local men, but through several anecdotes I experienced during my three years of study, I'd like to introduce these 'Brown Bear Country Brothers' in a fragmented way.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">👊 Witnessing Street Fighting? The Belligerent Brothers</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Living in Moscow, I often went to the airport for pickups at the request of acquaintances. During the hour-long taxi ride from the airport to the city, I would become a daily guide and tell various stories about Moscow. One of my regular repertoires was a warning about the aggressiveness of Russian men. When I warned them that they could easily see fistfights on the street, guests usually brushed it off.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          However, that complacent thought invariably crumbles when looking out the taxi window. I swear, guests who came to Russia witnessed real-life street fighting(?) between Russians grabbing each other's collars at least once, either on the way from the airport or back to the airport. Especially near busy airports or train stations, small and large fights are common because there are many hot-tempered men trying to show off their masculinity. 🥊
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌙 Midnight Subway, Tips for Survival</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The place to be even more careful than during the day is near subway stations late at night. Although security is said to have improved a lot now, my hands and feet tremble unconsciously when I encounter a Russian drunkard stumbling and soaked in vodka late at night. Sometimes I meet big guys who pick fights in the subway under the influence of alcohol, and if there's a tip, it's <span class="text-red-600 font-bold">'never make eye contact and run in the opposite direction.'</span> 🏃‍♂️
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          The probability of winning a fight is slim, and stories of immature international students wandering late at night after drinking and being assaulted or having their valuables stolen are so frequent in the Korean community that the repertoire is almost boring. In the night streets of a foreign country, it is wise to choose survival quietly rather than trying to prove your masculinity.
        </p>
        <div class="bg-slate-50 p-4 my-6 rounded-lg text-sm border-l-4 border-slate-300">
          The Moscow State University Korean Student Association once gave a tour of downtown Moscow, and I heard that a Korean guide had his phone and valuables stolen by people of Central Asian descent while wandering around after drinking the night before. Judging by the way he talked about it nonchalantly, it seemed like it wasn't his first time, yet he still wandered around drinking late at night... that guide was quite something. 😵
        </div>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">❄️ Extreme Coolness, Apologies are a Luxury</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Ironically, people with such high combat power are terrifyingly indifferent to the minor things of daily life. Even if they bump shoulders very hard or get their feet stepped on while walking in public places like the Moscow subway, they rarely look back in anger or apologize. It was a kind of extreme coolness(?), as if to say, 'You can bump into someone while walking, have a nice day.' To them, most physical collisions didn't seem to leave even a small scratch on their lives. That indifference of just going one's way without caring even 1% about others' eyes, that transcendence of life added to their mystery. 🧘‍♂️
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚂 Vodka Friendship Blossoming in a Train</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          I truly felt their hidden warm heart in a long-distance train heading to the southern region. One day, I ended up sharing a 4-person 'kupe' (compartment) with a Russian family (father, mother, and middle school daughter). I used a top bunk, and the family used the two bottom bunks and the remaining top bunk. As introduced in the Trans-Siberian Railway episode, according to the rules of Russian trains, when it's time for a meal, you must ask for permission from the people on the first floor to use the table together. Naturally, I joined their family's mealtime, and light conversation ensued. 🥪
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          The sociable lady mainly led the conversation, while the adolescent daughter was busy staring only at her smartphone screen. I was curious what she was doing so diligently since the internet doesn't even work in the train. At that moment, the man, who had been showing the height of reticence by silently staring only out the window, looked slightly toward me and opened his mouth. <span class="italic text-slate-600">"Do you... know how to drink a little?"</span> 🥃
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          I cheered internally and joked, "Isn't Russian vodka the best? I drink quite a bit too." At that moment, the man's frozen face turned as bright as a spring breeze, and he magically pulled out a bottle of clear vodka from deep inside his luggage. I felt the sharp laser-like gaze of the lady beside him, but nothing could stop the resolve(?) of men anymore. 🤝
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🔥 Men's Resolve, Crossing Borders</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          I decided to show them the spicy(?) drinking capacity of Koreans and clinked glasses back and forth, one glass, two glasses. The language barrier evaporated into white the moment the strong alcohol slid down the esophagus, and we were already no different from sworn brothers who had transcended borders. When the bottle of vodka finally revealed its bottom in an instant, the man laughed heartily and slapped my shoulder hard. "Haha! This guy, you really know how to drink!"
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          As soon as the train stopped at the next station, the man showed his red passion by running out to the platform and bringing one more bottle of vodka, leaving behind the lady's stinging glare. We shared the bread and sausages we had each prepared and tilted our glasses until late at night. 🥖
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          When even the vodka the man bought ran out, I instinctively realized, 'Ah, now it's my turn.' To repay the man's generous hospitality, I picked out a pretty decent and good bottle of vodka available at the next stop. When I handed him the bottle, a wave of deep emotion flickered on his face. In the drunken state of being tipsy, we continuously exchanged all sorts of stories that we wouldn't even remember the next day. Thanks to the warm heart of a Russian father hidden behind a blunt expression, the Siberian train journey, which could have been endlessly boring, remained one of the most pleasant memories of my life. ✨
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🪆 Like a Matryoshka</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          In the end, Russian men are like 'Matryoshkas,' where the more you know them, the more new charms come out. Just like the traditional Russian wooden doll Matryoshka, where when you open a doll, a smaller one pops out, and when you open it again, a new one keeps popping out. They look like blunt brown bear brothers who wouldn't bleed even if pricked, but they are 'tsunderes' who generously fill up vodka glasses the moment they recognize you as someone within their boundary.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          Looking back, Russian people also closely resemble this vast continent of Russia. It's hard to know their true inner feelings just by looking at their passing exterior, but you can only fully feel their genuine, rich charm after rubbing shoulders and clinking glasses with them for a long time. 🇷🇺
        </p>
      `,
      },
    },
    {
      id: 'post-204',
      title: { ko: '전공과목', en: 'Major Subjects' },
      subtitle: {
        ko: '러시아 학위 시스템과 혹독했던 전공 수업 이야기',
        en: 'The Russian Degree System and the Story of a Harsh Major Class',
      },
      imageUrl: 'https://s3.youthkiawaaz.com/wp-content/uploads/2013/07/06214745/subjects1.jpg', // Physics Equations
      isActive: true,
      comments: [],
      content: {
        ko: `
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          서양의 시스템을 가져온 우리에게는 학사, 석사, 박사 이런 식의 프로그램이 익숙하지만 러시아에서는 그들만의 프로그램이 있다. 가장 먼저 마주하게 되는 생소한 이름은 석사과정과 비슷한 <strong>‘스페셜리스트(Специалист)’</strong> 과정이다. 🎓 이는 4년제 학사와 2년제 석사를 묘하게 섞어놓은 5년(혹은 5.5년) 과정의 학위다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          박사 과정으로 넘어가면 이름표는 더 복잡해진다. 🤯 우리가 흔히 Ph. D.라고 알고 있는 명칭 대신 두 단계의 박사 학위가 존재한다. 첫 번째는 <strong>깐디다트 (Кандидат наук)</strong>, 직역하면 <strong>‘후보 박사’</strong>라는 겸손한 명칭이지만, 국제적으로는 일반적인 박사과정(Ph.D.)로 인정받는다. 하지만 그 위에는 <strong>진정한 끝판왕</strong>인 <strong>독또르(Доктор наук)</strong>가 버티고 있다. 👑 깐디다트 학위를 취득 후에도 수년간 독창적인 연구 업적을 쌓아야만 도전할 수 있는 이 학위 소지자들은 학계에서 거의 <strong>‘살아있는 전설’</strong> 대접을 받는다. 아마 서구식 시스템에 비슷한 예를 찾아보자면 정년보장 교수 (Tenured Faculty) 그 이상이다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">📜 볼로냐 프로세스와 새로운 물결</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          어쨌든 이렇게 우리와는 사뭇 다른 독자적인 시스템을 고수해 왔지만, 글로벌 시대의 흐름까지 거스를 수는 없었다. 🌊 러시아 학위가 해외에서 온전히 인정받지 못하거나 교류에 차질이 생기는 일이 잦아지자, 서방의 시스템을 도입해야 한다는 목소리가 커지기 시작했다. 결국 러시아는 2003년, 유럽의 학위 표준화 체계인 <strong>‘볼로냐 프로세스’</strong>에 가입하며 대대적인 수술에 들어갔다. 👨‍⚕️
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          이 과정에서 탄생한 것이 바로 우리에게 익숙한 4년제 학사와 2년제 석사(Магистратура) 시스템이다. 전통적인 5년제 ‘스페셜리스트’ 과정이 굳건히 자리 잡고 있던 러시아 학계에 서구식 석사 프로그램이 이식된 것이다. 모스크바 국립대학교(MSU) 역시 1990년대 초반부터 일부 학과에서 시범적으로 석사 과정을 운영하며 간을 보긴 했지만, 공식적으로 볼로냐 시스템에 맞춰 학사와 석사를 분리해 본격적으로 운영하기 시작한 것은 2011년부터다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">😵‍💫 혼돈의 ‘대학교 5학년’</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          내가 공부하던 2015년은 이 새로운 프로그램이 도입된 지 얼마 되지 않아 교정 곳곳에 혼란이 가득했다. 학기 초면 시간표가 갈대처럼 휘날리며 바뀌기 일쑤였고, 이름만 석사지 연구보다는 수업량이 압도적이어서 사실상 <strong>‘대학교 5학년’</strong>이나 다름없었다. 특히 핵물리학 기초가 부족했던 나는 토요일 오전마다 엄하기로 소문난 할머니 교수님의 기초핵물리학 수업을 들어야 했다. 👵 금요일 밤이면 숙제와 씨름하느라 유학생의 낭만 따위는 챙길 겨를이 없었지만, 그 혹독한 <strong>‘복지 희생’</strong> 덕분에 지식만큼은 빠른 속도로 습득할 수 있었다. 💪
        </p>
        <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <p class="leading-relaxed text-slate-800">
                수강 과목 중에는 ‘천체입자물리학’이라는 뜻밖의 보석도 있었다. 💎 빅뱅 이후 입자들이 어떻게 별을 만드는지 배우는 이 과목은 82세의 정정한 할아버지 교수님이 강의하셨는데, 마치 우주 탄생 신화를 들려주는 할아버지의 옛날이야기 같아 무척 흥미로웠다. ✨ 다만, 지식의 습득량은 숙제의 양과 비례한다는 교수님의 철학 덕분에 숙제 지옥에서는 벗어날 수 없었다. 😈
            </p>
        </div>
        <p class="leading-relaxed mb-6 text-slate-700">
          여담으로 내 지인은 이 교수님이 지도교수였는데 졸업 전에 혹시라도 무슨 변(?)이라도 당하실까 봐 매일 가슴을 졸이며 공부했다. 한국에 갔다올때마다 홍삼이던 뭐든 건강에 좋을만한 건강보조제를 사왔고 그 덕인지 다행히 교수님도 건강하셨고 지인도 무사히 졸업장에 도장을 찍을 수 있었다. 🙏
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💥 재앙과 깨달음의 시간</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          유럽입자물리연구소(CERN)의 자료로 힉스 입자를 다루던 수업도 기억에 남는다. 당시 힉스 입자는 존재가 증명된 지 얼마 되지 않아 모든 데이터가 안개 속이었다. 🌫️ 덕분에 시험 문제의 정답은 언제나 “~로 알려져 있다”라는 모호한 문장으로 끝맺음하곤 했다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          반면, <strong>‘초끈이론’</strong> 수업은 그야말로 재앙이었다. 💥 교수님을 찾아가도 이해할 수 없는 기괴한 수식들의 향연에 결국 시험을 망치고 말았는데, 알고 보니 외국인 학생은 들을 필요가 없는 과목이 시간표 오류로 들어간 것이었다. 성적표에서는 사라졌지만, 그 대가로 다른 과목을 추가로 들어야 했으니 <strong>‘조삼모사’</strong>가 따로 없었다. 🐒
        </p>

        <div class="bg-yellow-50 border-t-4 border-b-4 border-yellow-200 p-6 my-8 text-center">
            <p class="text-yellow-900 leading-relaxed">
                처음에는 내가 러시아어가 서툴러서 잘 이해를 못하는지 알았다. ‘단어만 조금 더 알면, 교수님의 농담 섞인 비유만 알아들으면 이 복잡한 수식들이 마법처럼 풀리지 않을까’ 하는 일말의 희망을 품고 사전을 뒤적였다. 📖 하지만 시간이 흐를수록 깨달은 잔인한 진실은, 초끈이론이나 힉스 입자 같은 녀석들은 모국어인 한국어로 배웠어도 똑같이 이해가 안 갔을 놈들이라는 사실이었다. 언어는 그저 거들 뿐, 물리학의 심오함 앞에서는 러시아인 동기들이나 나나 공평하게 머리를 쥐어뜯고 있었다. 🤯
            </p>
        </div>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🧗 학문의 장벽을 넘어서</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          결국 언어의 장벽보다 높았던 것은 학문의 장벽이었지만, 아이러니하게도 그 장벽을 넘기 위해 몸부림쳤던 시간들이 나를 성장시켰다. 사전에도 나오지 않는 물리 용어들을 노트 구석에 빼곡히 적어 넣고, 러시아 친구들과 서툰 러시아어로 “이 수식이 도대체 왜 이렇게 되는 거지?”라며 토론하던 그 밤들이 모여 (물론 토론이라 하기에는 보통 내가 묻고 그들이 답했지만) 나의 유학 생활을 지탱하는 단단한 뼈대가 되었다. 💪 무엇보다 어느 정도 전공 관련 단어들이 익숙해 지게 되니 소설은 읽을 줄 몰라도 전공 관련 논문은 꾸역꾸역 읽어 나갈 수 있게 되었다. 📜
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          생소한 나라에서 겨우 1~2년 배운 언어로 전문 지식을 완벽히 습득하기란 불가능에 가까운 일이었을지도 모른다. 하지만 칠판을 가득 채운 기괴한 수식들 사이에서 길을 잃기도 하고, 엉뚱한 과목을 듣느라 헛걸음을 하기도 했던 그 모든 시행착오가 결국은 ‘나’라는 책의 소중한 한 페이지가 되었다. 📖
        </p>
        <blockquote class="border-l-4 border-russia-blue pl-4 py-2 my-6 italic text-slate-700 bg-slate-50">
          앤젤라 더크워스는 그녀의 저서 <strong>‘그릿’</strong>에서 천재성보다 중요한 것은 장기적은 목표를 향한 열정과 끈기라고 했다. 돌이켜보면 모스크바에서의 시간은 나에게 물리학 지식 그 이상을 가르쳐주었다. 완벽한 이해보다 중요한 것은 낯선 세계에 뛰어들어 끝까지 자리를 지켰던 그 끈기, 즉 ‘그릿’이었음을 이제는 선명한 기억으로 확신할 수 있다.
        </blockquote>
        <p class="leading-relaxed mb-6 text-slate-700">
          비록 강의실 칠판에 적혔던 수식들은 희미해졌을지 몰라도, 포기하지 않고 그 시간을 버텨낸 근성만큼은 내 삶의 지치지 않는 동력으로 깊이 각인되어 있다. 🔥
        </p>
      `,
        en: `
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          For those of us who have adopted the Western system, programs like bachelor's, master's, and doctoral degrees are familiar, but in Russia, they have their own programs. The first unfamiliar name you will encounter is the <strong>'Specialist (Специалист)'</strong> program, which is similar to a master's program. 🎓 This is a 5-year (or 5.5-year) degree program that is a strange mix of a 4-year bachelor's degree and a 2-year master's degree.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          When you move on to the doctoral program, the name tags become even more complicated. 🤯 Instead of the designation we commonly know as Ph.D., there are two stages of doctoral degrees. The first is the <strong>Kandidat nauk (Кандидат наук)</strong>, which literally translates to <strong>'Candidate of Sciences'</strong>, a humble title, but it is internationally recognized as a regular doctoral program (Ph.D.). However, above that is the <strong>true final boss</strong>, the <strong>Doktor nauk (Доктор наук)</strong>. 👑 Holders of this degree, which can only be challenged after accumulating years of original research achievements even after obtaining the Kandidat degree, are treated almost like <strong>'living legends'</strong> in the academic world. Perhaps a similar example in the Western system would be a tenured faculty member, or even more.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">📜 The Bologna Process and the New Wave</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          In any case, although they have maintained this unique system that is quite different from ours, they could not go against the trend of the global era. 🌊 As Russian degrees were not fully recognized abroad or as problems arose in academic exchanges, voices calling for the adoption of the Western system began to grow louder. Eventually, in 2003, Russia joined the <strong>'Bologna Process'</strong>, the European degree standardization system, and underwent a major overhaul. 👨‍⚕️
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          It was in this process that the 4-year bachelor's and 2-year master's (Магистратура) systems, which are familiar to us, were born. The Western-style master's program was transplanted into the Russian academic world, where the traditional 5-year 'specialist' program was firmly established. Moscow State University (MSU) also began to operate a master's program on a trial basis in some departments from the early 1990s, but it was not until 2011 that it officially began to separate the bachelor's and master's programs in accordance with the Bologna system and operate them in earnest.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">😵‍💫 The Chaos of 'University 5th Grade'</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          In 2015, when I was studying, this new program had only been introduced for a short time, so there was a lot of confusion on campus. At the beginning of the semester, the timetable would change like a reed in the wind, and although it was called a master's program, the amount of coursework was overwhelming compared to research, so it was practically no different from <strong>'university 5th grade'</strong>. In particular, since I lacked a foundation in nuclear physics, I had to take a basic nuclear physics class every Saturday morning from a strict old grandmother professor. 👵 On Friday nights, I had no time for the romance of a foreign student because I was struggling with homework, but thanks to that harsh <strong>'welfare sacrifice'</strong>, I was able to acquire knowledge at a rapid pace. 💪
        </p>
        <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <p class="leading-relaxed text-slate-800">
                Among the courses I took, there was also an unexpected gem called 'Astroparticle Physics'. 💎 This course, which taught how particles create stars after the Big Bang, was taught by a spry 82-year-old grandfather professor, and it was very interesting, like an old story of a grandfather telling the myth of the birth of the universe. ✨ However, thanks to the professor's philosophy that the amount of knowledge acquired is proportional to the amount of homework, I could not escape from homework hell. 😈
            </p>
        </div>
        <p class="leading-relaxed mb-6 text-slate-700">
          As an aside, my acquaintance's advisor was this professor, and he studied with a heavy heart every day, worried that something might happen to him before graduation. Whenever he went to Korea, he would buy health supplements that would be good for his health, such as red ginseng, and thanks to that, fortunately, the professor was healthy and my acquaintance was able to get his diploma stamped safely. 🙏
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💥 A Time of Disaster and Enlightenment</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          I also remember a class that dealt with the Higgs boson using data from CERN. At that time, the existence of the Higgs boson had only been proven for a short time, so all the data was in a fog. 🌫️ Thanks to this, the correct answer to the exam questions was always concluded with the ambiguous sentence, "It is known that...".
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          On the other hand, the <strong>'superstring theory'</strong> class was a disaster. 💥 Even when I went to see the professor, I couldn't understand the feast of bizarre formulas, and in the end, I failed the exam. It turned out that a course that foreign students didn't need to take had been entered into the timetable by mistake. Although it disappeared from my transcript, I had to take another course as a price, so it was a case of <strong>'robbing Peter to pay Paul'</strong>. 🐒
        </p>

        <div class="bg-yellow-50 border-t-4 border-b-4 border-yellow-200 p-6 my-8 text-center">
            <p class="text-yellow-900 leading-relaxed">
                At first, I thought I didn't understand because my Russian was not good. I rummaged through the dictionary with a glimmer of hope that 'if I just knew a few more words, if I could just understand the professor's jokes and metaphors, these complicated formulas would magically solve themselves.' 📖 However, the cruel truth I realized over time was that things like superstring theory and the Higgs boson would have been just as incomprehensible even if I had learned them in my native Korean. Language was just a helping hand; in the face of the profundity of physics, my Russian classmates and I were all tearing our hair out equally. 🤯
            </p>
        </div>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🧗 Overcoming the Barrier of Academia</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          In the end, the barrier of academia was higher than the barrier of language, but ironically, the time I spent struggling to overcome that barrier was what made me grow. The nights I spent writing down physics terms that weren't even in the dictionary in the corner of my notebook and discussing with my Russian friends in clumsy Russian, "Why on earth is this formula like this?" (although it was usually me asking and them answering) became the solid backbone that supported my life as a student abroad. 💪 Most importantly, once I became familiar with some major-related vocabulary, I was able to trudge through major-related papers even if I couldn't read novels. 📜
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          It might have been close to impossible to perfectly acquire specialized knowledge in a language I had only learned for 1-2 years in a foreign country. However, all the trial and error of getting lost among the bizarre formulas that filled the blackboard and taking the wrong course in vain eventually became a precious page in the book of 'me'. 📖
        </p>
        <blockquote class="border-l-4 border-russia-blue pl-4 py-2 my-6 italic text-slate-700 bg-slate-50">
          Angela Duckworth said in her book <strong>'Grit'</strong> that more important than genius is passion and perseverance towards a long-term goal. Looking back, my time in Moscow taught me more than just physics knowledge. I can now say with a clear memory and conviction that more important than perfect understanding was the perseverance of jumping into a strange world and staying there until the end, that is, 'grit'.
        </blockquote>
        <p class="leading-relaxed mb-6 text-slate-700">
          Although the formulas written on the classroom blackboard may have faded, the grit of enduring that time without giving up is deeply engraved in my life as an untiring driving force. 🔥
        </p>
      `,
      },
    },
    {
      id: 'post-205',
      title: { ko: '나홀로 러시아 여행', en: 'Traveling Alone in Russia' },
      subtitle: {
        ko: '익숙함 너머의 낯선 매력, 러시아 시골 탐방기',
        en: 'The Unfamiliar Charm Beyond the Familiar, a Tour of the Russian Countryside',
      },
      imageUrl: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FdFycX4%2FbtrHp5ZCM45%2FAAAAAAAAAAAAAAAAAAAAAI9BUg4b5pYcZrw6XfyPuGzogBZIirKEp3_xCDoMcM3l%2Fimg.jpg%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1772290799%26allow_ip%3D%26allow_referer%3D%26signature%3DhYboyGd7lXQODlRu1cj2xkLI35g%253D',
      isActive: true,
      comments: [],
      content: {
        ko: `
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          학생이라면 누구나 기다리는 방학이 찾아왔다. 러시아도 한국과 마찬가지로 대학마다 과마다 시험 기간이 제각각이고 기말고사 마지막 날이 곧 공식적인 방학의 시작이었다. 운이 좋게도 우리 과는 아내가 다니는 통번역 학과를 포함한 다른 학과보다도 기말고사가 일찍 끝나 이른 방학을 맞이했다. 모처럼 찾아온 휴가에 어디라도 떠나고 싶었지만, 아내는 집이 좋다며 <strong>요지부동이었다.</strong> 🏡 그래서 2주 남짓 되는 방학기간 동안 첫 일주일은 평소 친하게 지내던 러시아 친구들의 고향집을 방문해 보기로 했다. 두 러시아 친구는 언어 교환으로 친해졌는데, 각각 카브로프와 쿠르가닌스크라는 작은 도시 출신으로 모스크바에서 공부 중이었다. 광활한 대륙에 사는 그들의 기준에서 한국은 아주 작은 나라일텐데 한국어를 배운다는 게 너무 신기했다. <strong>한류 만세!</strong> 🇰🇷🎉
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">러시아 시골로의 고난(?)의 여정 🚂</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          2015년 연말 아침, 새벽같이 일어나서 기차역에서 러시아인 친구를 만났다. 친구는 블라디미르 주에 위치한 카브로프라는 인구 약 13만 명 내외의 작은 도시에 사는데, 도시가 작아서 그런지 모스크바에서 카브로프로 직행하는 기차가 자주 있지는 않았다. 시간을 너무 지체할 수 없어서 한 번에 가는 기차 대신 번거롭더라도 환승 교통수단을 이용하기로 했다. 일단 일렉트리치카(근교/교외 열차)를 타고 모스크바에서 블라지미르라는 제법 큰 도시로 향했다. 여기서도 카브로프로 가는 기차가 당일에 없어서 버스를 타고 카브로프로 향했다. 자동차로 운전하면 약 4시간 정도 걸리는데, 작은 마을을 대중교통을 이용해서 가려니 <strong>여간 불편한 게 아니었다.</strong> 😩
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">생각보다 맛있었던 러시아 가정식 🍲</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          친구 집에 도착해서는 당연한 말이지만 러시아식으로 점심 식사를 했다. 러시아식 만두인 <strong>뺄매니</strong>와 고기 수프인 <strong>보르쉬</strong>, 여기에 오이 피클을 곁들여 먹었다. 사실 생각보다 <strong>맛있어서 많이 놀랐다.</strong> 😮 러시아에서 음식을 사먹어 본 경험에 비추어 보면 외식의 기억이 그렇게 좋지만은 않았기 때문이다. 러시아인들조차 맛있는 음식을 먹으려고 외식하는 경우는 많지 않다고 한다. 오히려 많은 사람들이 모여야 하거나 집에서 대접을 할 수 없는 경우 외식을 한단다. 제일 좋은 음식은 다차(дача)라는 시외곽의 별장에서 직접 가꾸고 바로 길러 먹는 그런 음식이라고들 하니까. 어쨌든 러시아 음식에 대한 나의 편견을 보기 좋게 깨준, 단출하지만 정갈하고 깔끔한 점심이 <strong>무척이나 마음에 들었다.</strong> 🥰
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">카브로프 도시 구경과 예상치 못한 만남, 곶감! 🍊</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          이제 밖으로 나와서 도시 구경을 시작했다. 친구가 다녔던 학교를 보며 학창 시절에 대해서 이야기 했고, 작지만 있을 건 다 있다는 전통 시장에 가서 구경을 했다. 그 중에 내 눈길을 끄는 물건이 있었는데 바로 <strong>말린 곶감이었다.</strong> 🧡 이 곳 사람들도 곶감을 만들어서 먹는다는 사실에 한 번 놀랐고, 놀라울 정도로 한국의 그것과 비슷한 맛에 <strong>두 번 놀랐다.</strong> 😲 참고로 카프로프라는 도시 이름은 러시아어로 카펫을 뜻하는 코뵤르(Ковёр)에서 유래했는데 그래서인지 지금도 러시아 내에서는 카펫이나 섬유, 정장이 아주 유명하다고 한다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">끝나지 않는 러시아인들의 산책 사랑 🚶‍♀️🚶‍♂️</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          다음은 공원 산책이었다. 러시아인들의 산책 사랑은 정말 <strong>유별난 것으로 유명하다.</strong> 그래서 친구에게 배가 고프니 산책은 적당히 하고 밥 먹으러 가자고 미리 언질을 했다. 이렇게 하지 않으면 내가 그만 살려달라고 <strong>애원할 때까지 산책을 하는 게 러시아인들이다.</strong> 🥺 친구가 나를 데려간 공원은 작은 도시치고 꽤 면적도 넓고 볼거리도 많았다. 작은 놀이공원과 예전에 친구가 다녔다는 문화센터와 근사한 식당도 있었다. 이 동네 맛집이라기에 들어갔는데 <strong>사람은 우리 말고 없었다.</strong> 🤷‍♀️ 가격도 저렴하고 음식 맛도 훌륭했는데 아마 연말이라 다들 집에서 저녁을 보내느라 사람이 없는 듯 했다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">러시아 국민 간식, 콘지테르스카야 깔바싸 🍫</h3>
        <div class="relative w-full h-80 mb-6">
          <img
            src="/images/russian_sweet_snack.jpg"
            alt="러시아 국민 간식, 콘지테르스카야 깔바싸"
            class="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        </div>

        <p class="leading-relaxed mb-6 text-slate-700">
          친구 집에 돌아와서는 차와 함께 <strong>콘지테르스카야 깔바싸(Кондитерская колба사)</strong>라는 간식을 먹었다. 직역하면 <strong>과자 소시지</strong>인데, 모양은 영락없는 소시지지만 아주 달콤한 설탕 덩어리 디저트다. 🍪 고기는 전혀 없고 부순 비스킷과 코코아 가루, 버터, 설탕, 견과류에 연유를 버무려 소시지 모양으로 돌돌 말아 냉장고에서 굳혀 만든다. 러시아의 국민 간식이라고도 불리는데 지금껏 먹어본 러시아 음식 중에 <strong>손에 꼽을 만 했다.</strong> ⭐ 특히 차와 곁들여 먹으면 금상첨화였다. 개인적으로 커피와도 잘 어울릴 듯 했지만 러시아인들은 커피보다도 차를 굉장히 즐긴다. 러시아 친구와 있으면 하루에 차 5잔은 쉽게 마실 수 있다. 엉덩이를 의자에 붙이면 <strong>‘차이(Чай, tea)?’</strong> ☕라고 바로 권유를 할 것이다. 아침부터 많은 일이 있었던 하루여서 <strong>기절하듯 잠에 들었다.</strong> 😴
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">김치? 아니, 김치가 아닌 김치! 🤯</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          다음 날, 다른 친구의 집을 방문하기 위해 길을 나섰다. 그 친구는 쿠르가닌스크라는 더 작은 도시에 살고 있었다. 얼마나 작고 조용한 동네인지, 친구 말로는 이곳에 슬라브인 말고 다른 외국인이 발을 들이는 경우는 거의 드물다고 했다. 친구 어머니는 한국인인 내가 방문한다고 하자 직접 <strong>김치를 만들어 주시겠다고 했다.</strong> 🥬 따뜻한 마음은 너무나 감사했지만, 한편으로는 김치를 잘 모르는 외국인이 만든 김치가 조금 <strong>무서웠던 건 사실이다.</strong> 😨 결국 <strong>“러시아 문화를 더욱 깊이 느끼고 싶다”는 고도의 외교적 화법으로 정중하게 거절할 수 있었다.</strong> 😅
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">러시아인들이 한국 음식이라고 믿는, 한국 당근 🥕</h3>
        <div class="relative w-full h-80 mb-6">
          <img
            src="/images/korean_carrot.jpg"
            alt="러시아인들이 한국 음식이라고 믿는, 한국 당근"
            class="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        </div>
        <p class="leading-relaxed mb-6 text-slate-700">
          하지만 친구 부모님은 외국인인 내가 음식 때문에 힘들까봐 마음이 영 놓이지 않으셨나보다. 그래서 러시아인들이 한국 음식이라고 굳게 믿고 있는 <strong>한국 당근(Корейская морковь)</strong>이라는 음식을 내어주셨다. 한국 당근은 이름과 달리 <strong>한국에는 없는 음식이다.</strong> 이는 과거 중앙아시아로 강제 이주당했던 고려인들이 김치가 너무 그리운 나머지, 배추 대신 구하기 쉬운 당근을 채 썰어 고춧가루와 그림에 버무려 만든 음식이다. 러시아에서는 마트 어디서나 찾을 수 있는 흔한 음식이지만 내가 친구 부모님께 한국에는 이런 음식이 없다고 하자 그분들은 정말로 <strong>까무러치게 놀라셨다.</strong> 😱
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">눈 덮인 시골에서의 뜻밖의 즐거움 ❄️</h3>
        <div class="relative w-full h-80 mb-6">
          <img
            src="/images/winter_hangout_russia.jpeg"
            alt="눈 덮인 시골에서의 뜻밖의 즐거움"
            class="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        </div>
        <p class="leading-relaxed mb-6 text-slate-700">
          지루할 줄 알았지만 눈 덮인 러시아 시골에서의 <strong>평온한 날들이 퍽이나 즐거웠다.</strong> 😊 적어도 하루에 5잔 이상 제공되는 차와 함께 티타임을 즐겼고, 동네에 하나뿐인 영화관에서 <strong>‘겨울왕국’</strong> 🎬을 봤다. 러시아는 자막을 쓰지 않고 더빙을 하는 경우가 많다. 아마 러시아어 단어가 길어서 자막으로 쓰면 읽어야 할 글씨가 너무 많아서 그렇지 않나 싶다. 쿠르가닌스크에서 했던 일 중에 제일 재미있었던 것은 <strong>자동차 뒤에 썰매를 매달고 내달린 일이다.</strong> 🛷 내가 외국인이라 그런지 아주 험하게 달리지 않았지만 정말 <strong>러시아인스러운 터프한 불곰국의 놀이였다.</strong> 🐻‍❄️
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">진정한 러시아의 모습, 유라시아의 발견 💖</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          연말 연시는 <strong>‘현지인 밀착형’ 여행</strong>으로 뜻깊게 보냈다. 일주일 내내 러시아인들에 둘러 쌓였더니 러시아어도 그 어느 때보다 많이 늘었다는 기분이 들었다. 모스크바의 도심에만 갇혀 있었다면 결코 알지 못했을 <strong>러시아의 진짜 얼굴이었다.</strong> 🧐 학위를 따고 지식을 쌓는 것도 중요하지만, 이렇게 낯선 대륙의 깊숙한 속살에 직접 부딪치며 사람 냄새를 맡는 것. 어쩌면 이것이야말로 내가 이 추운 나라까지 날아와 진정으로 배우고 싶었던 <strong>‘유라시아’의 진짜 모습이 아니었을까.</strong> ✨
        </p>
      `,
        en: `
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          The vacation that every student awaits has arrived. Just like in Korea, the exam period in Russia varies from university to university and from department to department, and the last day of the final exams was the official start of the vacation. Fortunately, our department finished its final exams earlier than other departments, including my wife's translation and interpretation department, so we had an early vacation. I wanted to go somewhere for the long-awaited vacation, but my wife was <strong>adamant</strong> that she wanted to stay home. 🏡 So, for the first week of the two-week vacation, I decided to visit the hometowns of my close Russian friends. I became friends with two Russian friends through language exchange. They were from small cities called Kavrov and Kurganinsk, respectively, and were studying in Moscow. From their perspective, living on a vast continent, Korea would be a very small country, so it was amazing that they were learning Korean. <strong>Long live the Korean Wave!</strong> 🇰🇷🎉
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">A Difficult(?) Journey to the Russian Countryside 🚂</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          On a morning at the end of 2015, I woke up at dawn and met my Russian friend at the train station. My friend lived in a small city called Kavrov in the Vladimir Oblast, with a population of about 130,000. Perhaps because the city was small, there were not many direct trains from Moscow to Kavrov. Since we couldn't delay too much, we decided to use a transfer instead of a direct train, even though it was cumbersome. First, we took an elektrichka (suburban/commuter train) from Moscow to a fairly large city called Vladimir. There were no trains to Kavrov on that day either, so we took a bus to Kavrov. It takes about 4 hours by car, but it was <strong>quite inconvenient</strong> to go to a small village by public transport. 😩
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Surprisingly Delicious Russian Home Cooking 🍲</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          After arriving at my friend's house, it goes without saying that we had a Russian-style lunch. We ate Russian dumplings called <strong>pelmeni</strong>, a meat soup called <strong>borscht</strong>, and a side of pickles. In fact, I was <strong>very surprised at how delicious it was.</strong> 😮 Based on my experience of eating out in Russia, my memory of eating out was not that great. They say that even Russians don't often eat out to eat delicious food. Rather, they say that they eat out when many people have to gather or when they can't entertain at home. They say that the best food is the food that is grown and eaten right away at a dacha, a country house outside the city. In any case, I was <strong>very pleased</strong> with the simple, yet neat and clean lunch that nicely shattered my prejudice against Russian food. 🥰
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Exploring the City of Kavrov and an Unexpected Encounter, Dried Persimmons! 🍊</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Now we went outside and started exploring the city. We talked about our school days while looking at the school my friend had attended, and we went to a traditional market that was small but had everything. Among them, something caught my eye: <strong>dried persimmons.</strong> 🧡 I was surprised once by the fact that people here also make and eat dried persimmons, and <strong>twice by the surprisingly similar taste to that of Korea.</strong> 😲 For reference, the name of the city, Kavrov, is derived from the Russian word for carpet, kover (Ковёр), and perhaps that is why it is said that carpets, textiles, and suits are still very famous in Russia.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">The Endless Love of Russians for Walking 🚶‍♀️🚶‍♂️</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Next was a walk in the park. The love of Russians for walking is truly <strong>famous for being peculiar.</strong> So I told my friend in advance that I was hungry, so we should take a moderate walk and go eat. If I didn't do this, <strong>Russians would walk until I begged them to stop.</strong> 🥺 The park my friend took me to was quite large and had a lot to see for a small city. There was a small amusement park, a cultural center that my friend used to go to, and a nice restaurant. We went in because it was said to be a local맛집, but <strong>we were the only ones there.</strong> 🤷‍♀️ The price was cheap and the food was excellent, but it seemed that there were no people because everyone was spending the evening at home for the end of the year.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Konditerskaya Kolbasa, the National Snack of Russia 🍫</h3>
        <div class="relative w-full h-80 mb-6">
          <img
            src="/images/russian_sweet_snack.jpg"
            alt="Konditerskaya Kolbasa, the National Snack of Russia"
            class="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        </div>

        <p class="leading-relaxed mb-6 text-slate-700">
          Back at my friend's house, we had a snack called <strong>Konditerskaya Kolbasa (Кондитерская колбаса)</strong> with tea. It literally translates to <strong>confectionery sausage</strong>, and it looks just like a sausage, but it's a very sweet dessert made of a lump of sugar. 🍪 It contains no meat at all, and is made by mixing crushed biscuits, cocoa powder, butter, sugar, nuts, and condensed milk, rolling it into a sausage shape, and hardening it in the refrigerator. It is also called the national snack of Russia, and it was <strong>one of the best</strong> Russian foods I have ever eaten. ⭐ It was especially good with tea. I personally thought it would go well with coffee, but Russians enjoy tea much more than coffee. If you are with a Russian friend, you can easily drink 5 cups of tea a day. As soon as you sit down, they will immediately offer you <strong>'chai (Чай, tea)?'</strong> ☕ It was a day with many events from the morning, so I <strong>fell asleep as if I had fainted.</strong> 😴
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Kimchi? No, Not Kimchi! 🤯</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The next day, I set out to visit another friend's house. That friend lived in an even smaller city called Kurganinsk. It was such a small and quiet town that, according to my friend, it was rare for foreigners other than Slavs to set foot there. When my friend's mother heard that I, a Korean, was visiting, she said she would <strong>make kimchi herself.</strong> 🥬 I was so grateful for her warm heart, but on the other hand, it was <strong>true that I was a little scared</strong> of kimchi made by a foreigner who didn't know kimchi well. 😨 In the end, I was able to politely decline with the highly diplomatic phrase, <strong>"I want to experience Russian culture more deeply."</strong> 😅
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Korean Carrots, What Russians Believe to Be Korean Food 🥕</h3>
        <div class="relative w-full h-80 mb-6">
          <img
            src="/images/korean_carrot.jpg"
            alt="Korean Carrots, What Russians Believe to Be Korean Food"
            class="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        </div>
        <p class="leading-relaxed mb-6 text-slate-700">
          But my friend's parents seemed to be worried that I, a foreigner, would have a hard time with the food. So they served me a dish that Russians firmly believe to be Korean food, called <strong>Korean Carrots (Корейская морковь)</strong>. Unlike its name, <strong>Korean carrots are not a food found in Korea.</strong> This is a dish that the Koryo-saram, who were forcibly relocated to Central Asia in the past, made by shredding carrots, which were easier to obtain than cabbage, and mixing them with red pepper powder and oil because they missed kimchi so much. It is a common food that can be found in any supermarket in Russia, but when I told my friend's parents that there was no such food in Korea, they were truly <strong>shocked.</strong> 😱
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Unexpected Joy in the Snowy Countryside ❄️</h3>
        <div class="relative w-full h-80 mb-6">
          <img
            src="/images/winter_hangout_russia.jpeg"
            alt="Unexpected Joy in the Snowy Countryside"
            class="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        </div>
        <p class="leading-relaxed mb-6 text-slate-700">
          I thought it would be boring, but the <strong>peaceful days in the snowy Russian countryside were quite enjoyable.</strong> 😊 I enjoyed tea time with at least 5 cups of tea a day, and I watched <strong>'Frozen'</strong> 🎬 at the only movie theater in town. In Russia, they often dub instead of using subtitles. I think it's because Russian words are long, so if they use subtitles, there would be too many words to read. The most fun I had in Kurganinsk was <strong>riding a sled tied to the back of a car.</strong> 🛷 Perhaps because I was a foreigner, they didn't drive too rough, but it was a really <strong>Russian-style, tough, bear-country game.</strong> 🐻‍❄️
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">The True Face of Russia, the Discovery of Eurasia 💖</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          I spent the end of the year and the new year meaningfully with a <strong>'local-style' trip</strong>. After being surrounded by Russians for a whole week, I felt that my Russian had improved more than ever before. It was the <strong>real face of Russia</strong> that I would never have known if I had been confined to the city of Moscow. 🧐 It is important to get a degree and accumulate knowledge, but it is also important to directly encounter the deep inside of this strange continent and smell the scent of people. Perhaps this was the <strong>'real face of Eurasia'</strong> that I truly wanted to learn by flying to this cold country. ✨
        </p>
      `,
      },
    },
    {
      id: 'post-206',
      title: { ko: '기말고사, 석사 1년차 마무리', en: 'Final Exams, End of the First Year of Master’s' },
      subtitle: {
        ko: '러시아의 기묘한 시험 제도와 성장의 기록',
        en: "Russia's Bizarre Exam System and a Record of Growth",
      },
      imageUrl: 'https://api.ruslanguage.ru/uploads/torfl_exam_bg_b65fa1865b.jpg',
      isActive: true,
      comments: [],
      content: {
        ko: `
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          이전 글에서도 잠시 다뤘듯이, 러시아의 대학은 아주 <strong>특이한 시험 제도</strong>를 고수하고 있다. 학생들이 반기는 가장 큰 특징은 학기 중간을 괴롭히는 <strong>‘중간고사’가 아예 존재하지 않는다는 것</strong>이다. 🎉 오로지 학기 말에 치르는 기말고사 한 방으로 한 학기의 학업 성취도가 결정된다. 중간고사가 없다는 사실은 학기 초반 학생들에게 엄청난 해방감을 안겨주지만, 이는 곧 <strong>치명적인 달콤한 독약</strong>이기도 하다. ☠️ 긴장감이 바닥을 치며 학업을 소홀히 하다가, 기말고사가 다가오면 그동안 쌓인 엄청난 양의 지식 청구서를 한 번에 받아 들고 <strong>패닉에 빠지기 때문</strong>이다. 😱
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">시험 문제 준비: 혼자서는 불가능한 미션 🤝</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          기말고사 약 2-3주 전에 교수는 시험에 나올 <strong>문제 리스트를 정리해서 주신다.</strong> 답은 없고 문제만 있는데 양이 꽤나 많은 편이다. 게다가 이렇게 받은 문제들은 하나같이 간단히 답할 수 있는 종류의 질문들이 아니었다. <strong>객관식은 기대도 할 수 없었고, 책의 내용을 완전히 이해해야 답할 수 있는 수준</strong>이었다. 그리고 몇몇 질문들은 질문 자체가 열려 있기 때문에 책 위의 지식을 넘어 <strong>스스로의 통찰을 증명해야 하는 문제도 있었다.</strong> 🤔 우리 반은 12명이었는데 보통 학급 인원의 3-4배 정도 문제를 주었다. 따라서 우리 반은 각 과목마다 약 30에서 40문제 정도를 받았다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          말했다시피 질문의 난이도도 높고 양이 꽤나 많아서 혼자 이 많은 답변을 다 준비하기는 <strong>물리적으로 불가능에 가깝다.</strong> 같은 반 친구들과 준비해야 하는 문제들을 나눠서 각자 준비하고 나중에 그 답변들을 공유했다. 물론 여기에는 <strong>치명적인 함정</strong>이 있다. ⚠️ 내게 할당된 문제를 대신 풀어준 친구의 답변이 부실하다면, 그 폭탄은 고스란히 내가 떠안아야 한다. 친구의 학구열을 전적으로 믿을 것인가, 아니면 밤을 새워서라도 내 손으로 다시 정리할 것인가. <strong>우정 테스트와 러시안룰렛이 결합된 아찔한 순간</strong>이다. 😨
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">운명의 ‘빌롓(Билет)’ 뽑기, 한 장의 종이에 희비가 엇갈리다 🃏</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          대망의 시험 당일, 강의실은 마치 <strong>긴장감 넘치는 카지노(?)</strong>를 방불케 한다. 🎰 교수님은 문제가 인쇄된 종이를 가늘고 길게 잘라 교탁 위에 뒤집어 흩어놓는다. 이른바 <strong>‘빌롓(Билет, 티켓)’을 뽑는 시간</strong>이다. 학생들은 차례대로 나가 마치 그날의 운세를 점치는 타로 카드를 뽑듯 비장하게 종이 한 장을 뒤집는다. 이때 교실의 희비가 엇갈린다. 평소에 공부를 게을리했어도 기가 막히게 자신이 준비한 문제를 뽑는 <strong>‘운수 좋은 날’</strong>의 주인공이 있는가 하면, 🍀 밤새워 한 문제 빼고 모든 문제를 달달 외웠는데 하필 안 본 딱 한 문제를 뽑아 드는 <strong>머피의 법칙 희생양</strong>도 속출한다. 😭 심지어 어떤 유쾌한 교수는 아예 진짜 포커 카드를 들고 와서 뽑게 만드는 경우도 있었다. ♠️
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          자신의 운명을 확인한 후에는 자리로 돌아가 30분간 주어진 문제에 대한 답변을 백지 노트에 쏟아내야 한다. 당연히 오픈북은 불가하며, <strong>오직 내 머릿속의 잔존 기억에만 의존해야 한다.</strong> 🧠 준비를 마친 학생이 비장하게 손을 들면, 교수는 그를 교탁 옆자리로 호출한다. 이제부터는 답변이 아니라 <strong>'방어전'이자 '고해성사'의 시간</strong>이다. 🛡️ 내가 적어 내려간 논리를 입으로 설명하면, 교수님은 매의 눈으로 고개를 끄덕이거나 <strong>날카롭게 꼬리 질문을 던진다.</strong> 🤔 “오, 그렇게 생각하나? 그럼 이 변수가 추가되면 어떻게 되지?”라며 훅 치고 들어오는 <strong>압박 면접을 방어해 내야만 점수를 얻어낼 수 있다.</strong> 🥵
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">주관적이지만 납득 가능한 채점 기준 👍</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          구술시험의 특성상 이 채점 기준이라는 게 <strong>대단히 주관적일 수밖에 없다.</strong> 하지만 러시아의 성적 체계는 아주 <strong>단순하고 쿨하다.</strong> 😎 보통 교수들은 학생의 논리를 존중해 점수를 후하게 주려는 편이라, 실질적인 학점은 <strong>3점(Удовлетворительно, 보통)</strong>, <strong>4점(Хорошо, 우수)</strong>, <strong>5점(Отлично, 최우수)</strong> 세 가지로 나뉜다. 수업태도가 영 불량했고 답변이 횡설수설하면 3점, 수업을 잘 나왔으나 답변이 마음에 들지 않으면 4점, 교수의 압박 질문까지 매끄럽게 쳐내면 5점 만점을 받는다. 언뜻 보면 운에 기대는 제비뽑기와 주관적인 구술시험이라 형평성에 어긋나 보일 수도 있다. 하지만 놀랍게도 나는 러시아에서 유학하는 내내 단 한 번도 내 점수에 불만을 품어본 적이 없다. 교수님과 1:1로 눈을 맞추며 밑천을 다 드러내고 나면, 내가 3점짜리인지 5점짜리인지 <strong>스스로가 가장 뼈저리게 깨닫게 되기 때문</strong>이다. 💡
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">잔혹한 기말고사 시즌의 끈끈한 연대 🫂</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          중간고사는 없지만, 수강하는 과목이 워낙 많아 기말고사 시즌의 유학생은 그야말로 <strong>초주검이 된다.</strong> 🧟‍♂️ 하지만 아이러니하게도 이 잔혹한 기간은 <strong>동기들과 가장 깊게 연대하는 시간</strong>이기도 했다. 💖 늦은 밤 도서관에 모여 간식을 나눠 먹으며 각자 준비한 답변을 맞춰보고, 모두 모르는 질문에 대해 머리를 맞대고 <strong>우리의 멍청함에 한탄하던 그 모든 시간들</strong> 말이다. 🤦
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">석사 1년차 마무리, 짜릿한 5점의 성취감 ✨</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          석사를 시작한 첫 1년 동안, 두 학기가 있으니 당연하게도 나는 이 <strong>지독한 기말고사를 두 번이나 치러냈다.</strong> 처음에는 더듬거리는 러시아어로 내 논리를 입 밖으로 꺼내는 것 자체가 <strong>공포였고, 교수님의 매서운 꼬리 질문 앞에서는 머릿속이 하얘지기 일쑤였다.</strong> 😨 아무것도 떠오르지 않는 백지 상태였다. 하지만 두 번째 학기의 기말고사를 마친 후, 내 학생 수첩(Zachyotka, 쟛초트까)에 교수님이 직접 펜으로 휘갈겨 써준 <strong>'5(Отлично)'라는 숫자를 보았을 때의 그 짜릿함</strong>은 말로 다 할 수 없었다. 🌟
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">기말고사, 학자에게 필요한 완벽한 예방주사 💉</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          러시아의 기말고사는 단순히 지식을 암기했는지 묻는 테스트가 아니었다. 정답이 없는 낯선 문제 앞에서 당황하지 않고, 자신이 아는 지식을 총동원해 <strong>논리적으로 상대를 설득해 내는 훈련.</strong> 🧠 어쩌면 이 거칠고 주관적인 '운 뽑기 구술 면접'이야말로, 훗날 어떤 돌발 상황에서도 자신의 연구를 꿋꿋하게 변호해야 할 학자들에게 필요한 <strong>가장 완벽한 예방주사</strong>가 아니었을까. 🩹
        </p>
      `,
        en: `
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          As I briefly mentioned in a previous post, Russian universities adhere to a very <strong>peculiar exam system</strong>. The biggest feature that students welcome is that there are <strong>no 'midterm exams'</strong> that torment the middle of the semester. 🎉 A single final exam at the end of the semester determines the academic achievement of the entire semester. The fact that there are no midterms gives students a great sense of liberation at the beginning of the semester, but this is also a <strong>deadly sweet poison</strong>. ☠️ This is because students tend to neglect their studies with a low sense of tension, and when the final exams approach, they are hit with a huge bill of knowledge accumulated over time and <strong>fall into a panic</strong>. 😱
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Preparing for Exam Questions: A Mission Impossible Alone 🤝</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          About 2-3 weeks before the final exams, the professor <strong>provides a list of exam questions.</strong> There are no answers, only questions, and the amount is quite large. In addition, the questions received in this way were not the kind that could be answered simply. <strong>Multiple choice was not to be expected, and the level was such that you had to fully understand the contents of the book to answer.</strong> And some questions were open-ended, so there were also problems that required you to <strong>prove your own insight beyond the knowledge in the book.</strong> 🤔 There were 12 students in our class, and we were usually given 3-4 times the number of problems as the number of students in the class. Therefore, our class received about 30 to 40 problems for each subject.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          As I said, the difficulty of the questions is high and the amount is quite large, so it is <strong>physically close to impossible</strong> to prepare all these answers alone. We shared the problems to be prepared with our classmates, prepared them individually, and then shared the answers later. Of course, there is a <strong>fatal trap</strong> here. ⚠️ If the answer of a friend who solved the problem assigned to me is poor, I have to take the bomb. Should I fully trust my friend's academic enthusiasm, or should I stay up all night and rearrange it with my own hands? It is a dizzying moment that combines a <strong>friendship test and Russian roulette</strong>. 😨
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Drawing the Fateful 'Bilet (Билет)', a Single Piece of Paper That Divides Joy and Sorrow 🃏</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          On the day of the long-awaited exam, the classroom resembles a <strong>tense casino(?)</strong>. 🎰 The professor cuts the paper with the questions printed on it into thin, long strips and scatters them face down on the lectern. This is the time to draw the so-called <strong>'bilet (Билет, ticket)'</strong>. The students take turns going up and flipping over a piece of paper with a grim determination, as if they were reading their fortune for the day with a tarot card. At this time, the joy and sorrow of the classroom are divided. There are the main characters of a <strong>'lucky day'</strong> who, even if they have been lazy with their studies, miraculously draw the problem they have prepared, 🍀 and there are also victims of <strong>Murphy's Law</strong> who have memorized all but one problem all night long, only to draw the one they haven't seen. 😭 Some even had a cheerful professor who brought real poker cards and had them draw. ♠️
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          After confirming their fate, they have to return to their seats and pour out their answers to the given problem on a blank notebook for 30 minutes. Of course, open book is not allowed, and you have to <strong>rely solely on the remaining memories in your head.</strong> 🧠 When a student who has finished preparing raises their hand with a grim determination, the professor calls them to the seat next to the lectern. From now on, it is not a time for answers, but a time for <strong>'defense' and 'confession'</strong>. 🛡️ When I explain the logic I have written down with my mouth, the professor nods with a hawk's eye or <strong>sharply throws a follow-up question.</strong> 🤔 "Oh, you think so? Then what happens if this variable is added?" You have to <strong>defend against the pressure interview</strong> that comes at you with a hook to get a score. 🥵
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Subjective but Understandable Grading Criteria 👍</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Due to the nature of the oral exam, the grading criteria are <strong>bound to be very subjective.</strong> However, the Russian grading system is very <strong>simple and cool.</strong> 😎 Professors usually tend to give generous scores in respect of the student's logic, so the actual grades are divided into three: <strong>3 points (Удовлетворительно, satisfactory)</strong>, <strong>4 points (Хорошо, good)</strong>, and <strong>5 points (Отлично, excellent)</strong>. If your class attitude was poor and your answers were rambling, you would get 3 points. If you attended class well but your answers were not satisfactory, you would get 4 points. If you smoothly handled even the professor's pressure questions, you would get a perfect score of 5. At first glance, it may seem unfair because it is a lottery that relies on luck and a subjective oral exam. But surprisingly, I have never once been dissatisfied with my grades while studying in Russia. After revealing all my shortcomings by making eye contact with the professor 1:1, I <strong>realize most painfully whether I am a 3-point or 5-point person myself</strong>. 💡
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">A Strong Bond During the Cruel Final Exam Season 🫂</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Although there are no midterms, there are so many courses to take that foreign students are literally <strong>half-dead</strong> during the final exam season. 🧟‍♂️ But ironically, this cruel period was also a time of <strong>deepest solidarity with my classmates</strong>. 💖 All those times when we gathered in the library late at night, sharing snacks and comparing the answers we had prepared, and lamented our stupidity over the questions that none of us knew. 🤦
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">End of the First Year of Master's, the Thrill of a Perfect 5 ✨</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          During the first year of my master's program, since there were two semesters, I naturally <strong>took this terrible final exam twice.</strong> At first, it was <strong>a horror</strong> to even get my logic out of my mouth in stuttering Russian, and my mind would go blank in front of the professor's sharp follow-up questions. 😨 It was a blank slate with nothing coming to mind. But after finishing the final exams of the second semester, the thrill I felt when I saw the number <strong>'5 (Отлично)'</strong> scribbled by the professor in my student handbook (Zachyotka) was beyond words. 🌟
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Final Exams, the Perfect Vaccination for a Scholar 💉</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The final exams in Russia were not simply a test of whether you had memorized knowledge. It was a training to <strong>logically persuade the other party</strong> by mobilizing all the knowledge you have, without being flustered in front of an unfamiliar problem with no correct answer. 🧠 Perhaps this rough and subjective 'lucky draw oral interview' was the <strong>most perfect vaccination</strong> for scholars who would have to stubbornly defend their research in any unexpected situation in the future. 🩹
        </p>
      `,
      },
    },
    {
      id: 'post-207',
      title: { ko: '가족의 방문', en: 'Family Visit' },
      subtitle: {
        ko: '연고 없는 땅에서 만난 가장 반가운 손님들',
        en: 'The Most Welcome Guests in a Land with No Ties',
      },
      imageUrl: 'https://tfifamily.org/wp-content/uploads/2022/03/family-visit.jpeg',
      isActive: true,
      comments: [],
      content: {
        ko: `
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          연고없는 먼 나라에서 이방인으로 살아갈 때, 아마 제일 반가운 일 중 하나는 단연코 <strong>가족이 방문하는 것</strong>이 아닐까 싶다. 👨‍👩‍👧‍👦 한 번은 친동생이 약 한 달 동안 나를 보러 놀러왔다. 우리는 연년생으로 <strong>친구처럼 어린 시절을 보냈다.</strong> 👫 항상 같은 운동을 하고 같은 게임을 하고 내가 재수학원에 가기 전까지 같은 침대에서 잤다. 하지만 서로 잘하는게 확연히 달라서 대학에서 완전히 다른 분야를 공부했고, 졸업을 하고도 가족이라는 것 외에는 접점이 별로 없었다. 동생은 군대도 다녀와야 했고 나는 러시아로 나왔다보니 그나마 더 만나기 힘들었다. 다행히 동생도 유학을 마치고 취업을 하기 전에 얼마간의 시간이 있어서 러시아에 나를 방문하러 올 수 있었다. 다만 당시 동생에게 여자친구가 있었는데 자신과 함께 시간을 보내지 않고 형을 보러 간다고 해서 <strong>삐졌다는 이야기를 나중에 들었다.</strong> 😅
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">소치에서 동생을 맞이하다 👋</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          이제 막 유학을 마친 <strong>가난한 취준생</strong>이었던 동생은 저렴한 항공편을 찾을 수 밖에 없었다. 💸 그 중에는 예카테린부르크라는 도시를 경유하여 소치로 오는 비행기가 있었다. 모스크바에 가기 전에 소치에서 구경도 하고, 스키도 좀 타고, 러시아 침대 기차를 타고 열차 체험도 같는 계획을 했다. 7화에서 머물렀던 쿠르가닌스크는 지리적으로 소치와 매우 가까웠다. 기차로 동생이 오기 전 소치로 먼저 이동을 했고, 소치 공항에서 동생을 기다렸다. 소치 공항에서 마주친 동생이 <strong>어찌나 반갑던지!</strong> 🥰
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">소치의 반전 매력: 아열대 해변과 만년설 🌴⛷️</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          소치 시내에서 엑스쿠르시아(Экскурсия)라고 불리는 투어 상품을 구입하여, 소치 주변에 산성에 올라가 경치도 구경고 올림픽 공원도 둘러보았다. 소치는 동계올림픽이 열린 도시로 유명하지만 사실 우리가 아는 설원은 시내에서 한참 떨어진 산악 지역의 풍경이다. 실제로 소치 시내는 <strong>러시아에서 보기 드문 아열대 기후</strong>를 자랑하며, 겨울에도 영하로 내려가는 일이 거의 없을 만큼 <strong>매우 온화하다.</strong> ☀️ 동계올림픽의 주 무대가 되었던 로자 후토르(Rosa Khutor) 같은 고산 지대에는 만년설이 쌓여있지만, 기차로 불과 한 시간 거리인 시내로 내려오면 야자수가 늘어선 이국적인 해변 산책로를 만날 수 있는 셈이다. 눈 덮인 산 위에서 스키를 즐기다가 조금만 내려오면 봄날 같은 바닷바람을 맞을 수 있다는 점이 소치가 가진 <strong>가장 매력적이고도 기묘한 반전</strong>이었다. 😮
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">로자 후토르에서의 스키와 낭만적인 침대 기차 여행 🥩🚂</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          구경을 마치고는 소치 시내에서 약 40분 가량 떨어져 있는 로자 후토르라는 스키장 근처의 마을로 이동했다. 숙소에 체크인을 하고 간단히 장을 보러 갔다. <strong>소고기가 엄청 저렴하다는 말에 러시아에 있는 동안 물리도록 스테이크를 먹여주겠다는 비장한 마음</strong>으로 스테이크를 골랐다. 🥩 통조림 옥수수와 약간의 샐러드, 소스를 구입하고는 숙소에서 거하게 저녁을 먹었다. 그 후로 동생과 약 3일간 소치에서 스키를 타고는 모스크바로 가는 열차를 탔다. 열차를 스무시간 넘게 타야 했는데도 동생은 기차여행이 즐거웠던 듯 했다. 중간중간 정차 시간이 길때마다 나가서 술이며 먹을 것들을 사왔던 것도 정차 시간이 짧을 때 러시아 할머니들이 팔던 도시락을 사먹었던 것은 우리 모두에게 매우 즐거운 시간이었다. 기차가 이동하는 대부분의 시간에는 인터넷이 되지 않는다. 동생과 오랜만에 만나서 <strong>먹고 마시며 많은 이야기를 여유롭게 나눴고</strong> 💬 어느새 모스크바에 도착할 수 있었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">모스크바의 추억: 북한 식당과 '사회주의의 맛' 🍜</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          모스크바에서는 아내가 마중을 나와있었다. 아내는 며칠 후에 한국에 잠시 다녀오기로 해서 동생과 있는 시간은 일주일 정도 밖에 없었다. 이즈마일롭스키라는 곳에 가서 러시아 사람들이 쓰는 근사한 불곰 털모자를 하나 사주었고 샤슬릭이라는 꼬치 고기도 사먹었다. 아내는 내친김에 우리가 예전 살던 기숙사 근처에 있는 북한 식당에 가보고 싶어 했다. 하지만 <strong>새가슴인 나는 괜한 외교적(?) 문제가 생길까 봐 걱정된다는 이유로 끝내 가지 않았다.</strong> 🐔 동생이 오자마자 아내는 같이 가지 않겠냐고 설득하여 결국 호기심 넘치는 둘이서만 다녀왔다. 평양냉면과 만두 같은 걸 시켜 먹었다고 했는데 맛은 그저 그랬다고 했다. 나도 포장해 온 만두를 먹어보았는데 <strong>만두피가 장갑처럼 두껍고 고기보다 야채 맛이 강하게 나는 것이 과연 ‘사회주의의 맛’이구나 싶었다.</strong> 🤔
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">30분 컷 에르미타주 박물관, 전설의 시작 🖼️💨</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          상트페테르부르크 여행에서도 두고두고 놀려먹을 전설적인 일화가 탄생했다. 상트페테르부르크에 있는 에르미타주 박물관은 <strong>세계 3대 미술관</strong>으로 유명하다. 🏛️ 나는 이미 박물관에 가본 적이 있기에 동생에게만 티켓을 끊어주었다. 당시에 김성주 아나운서의 해설이 녹음된 기기를 빌려주는 서비스까지 있었기에 동생이 최소 반나절은 느긋하게 작품들을 감상하고 올 수 있을 거라 생각했다. 나는 여유롭게 미술관 광장에서 차를 마시고 있었는데, 불과 삼십 분 정도가 지나자 동생이 <strong>에르미타주 미술관 문을 열고 튀어나왔다.</strong> 🏃‍♂️ 세계적인 거장들의 혼이 담긴 수백만 점의 예술품을 <strong>‘30분 컷’으로 돌파해버린 그의 경이로운 예술적(?) 안목</strong>에 나는 할 말을 잃었다. 🤯 물론 나라고 특별히 다를 건 없었지만 말이다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">형제의 시간, 그리고 사촌 동생의 러시아 유학기 🇷🇺</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          아내는 한국에 잠시 갔고, 모스크바에 남아있는 동안 형제는 <strong>옛 추억을 소환하며 시간을 보냈다.</strong> 🎮 낮에는 모스크바 곳곳을 돌아다니며 구경했고 거리의 음식들을 섭렵했다. 저녁이 되면 나란히 앉아 컴퓨터로 같이 게임을 하면서 스테이크를 맥주와 곁들여 먹었다. 동생은 러시아에서 특히나 <strong>서커스의 웅장함에 푹 빠져버렸다.</strong> 🎪 이듬해 여름에는 이모와 사촌 동생들이 방문했다. 이모와 사촌 동생 한 명은 일주일 정도 짧고 굵게 모스크바와 상트페테르부르크 여행을 했고 막내 동생은 모스크바에 남았다. 외국어 고등학교를 다니며 러시아어를 공부하고 있었는데 <strong>좀 더 남아서 러시아어 학원도 다니며 러시아를 제대로 체험하고 싶다</strong>고 했다. 🧐 마침 우리 부부도 여름방학이라 여행을 갈 계획을 하고 있어서 아파트도 비어있었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">막내 동생이 발견한 '다정한 러시아' 😇</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          막내 동생은 약 한 달간 더 머무르다가 한국으로 돌아갔는데, 러시아라는 나라가 꽤나 마음에 들었나 보다. 그리고 <strong>신기하게도 러시아 사람들이 너무 친절하다는 말을 해서 나를 놀라게 했다.</strong> 😮 사연인즉슨, 한 번은 갑자기 현기증이나고 너무 어지러워 지하철에서 잠시 정신을 잃고 쓰러진 적이 있었는데, <strong>무뚝뚝해 보이던 주위 사람들이 벌떼처럼 몰려와 다 자신의 일인 듯 성심껏 도와주었다</strong>고 한다. 🫂 그리고 주변의 권유에 앰뷸런스를 타고 병원에 갔는데 <strong>간호진도 천사처럼 친절했고 병원비도 전혀 나오지 않아 폭풍 감동</strong>을 받았다고 했다. 💖 길을 걷다 모르는 사람에게 “너네 나라로 돌아가라”는 시비나 듣던 척박한 유학생인 나와는 <strong>180도 다른 대우였다.</strong> 😲 참 오래 살고 볼 일이었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">가족은 나의 든든한 버팀목 💪</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          대체 내가 아는 러시아와 동생이 겪은 러시아는 같은 나라가 맞나 싶어 헛웃음이 났지만, 그렇게 내가 경험하지 못한 <strong>다정한 러시아의 이면을 듬뿍 경험한 막내 동생은 ... 모스크바 국립대 학부생으로 입학하여 석사까지 내리 마쳤다.</strong> 🎓 연고 없는 툰드라 같은 유학 생활에서 가족들의 방문은 단순한 관광 가이드 역할 그 이상이었다. 동생과 밤새 맥주를 마시며 나누었던 실없는 농담들, 30분 만에 끝난 에르미타주 관람의 황당함, 그리고 사촌 동생이 남겨두고 간 훈훈한 미담까지. 그 모든 기억은 외롭고 고단했던 나의 모스크바 생활을 버티게 해 준 <strong>든든한 버팀목이 되어 주었다.</strong> 🌳
        </p>
      `,
        en: `
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          When living as a stranger in a distant country with no connections, perhaps one of the most welcome things is a <strong>family visit</strong>. 👨‍👩‍👧‍👦 Once, my younger brother came to visit me for about a month. We were born a year apart and <strong>spent our childhood like friends</strong>. 👫 We always played the same sports, played the same games, and slept in the same bed until I went to a cram school for the college entrance exam. However, since we were clearly good at different things, we studied completely different fields in college, and even after graduation, we didn't have much in common other than being family. My brother had to serve in the military, and I went to Russia, so it was even harder to meet. Fortunately, my brother also had some time before he got a job after finishing his studies, so he was able to come and visit me in Russia. However, I later heard that his girlfriend at the time was <strong>pouting</strong> because he was going to see his brother instead of spending time with her. 😅
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Meeting My Brother in Sochi 👋</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          My brother, who was a <strong>poor job seeker</strong> who had just finished his studies, had no choice but to find a cheap flight. 💸 Among them was a flight to Sochi via a city called Yekaterinburg. We planned to do some sightseeing in Sochi, go skiing, and experience a Russian sleeper train before going to Moscow. Kurganinsk, where we stayed in episode 7, was geographically very close to Sochi. I went to Sochi by train before my brother arrived, and I waited for him at the Sochi airport. I was <strong>so happy</strong> to see my brother at the Sochi airport! 🥰
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">The Unexpected Charm of Sochi: Subtropical Beaches and Perennial Snow 🌴⛷️</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          In Sochi, we bought a tour package called an 'excursia (Экскурсия)' and went up to a mountain fortress around Sochi to see the scenery and also looked around the Olympic Park. Sochi is famous for being the city where the Winter Olympics were held, but the snowfields we know are actually a landscape of a mountainous region far from the city. In fact, the city of Sochi boasts a <strong>subtropical climate that is rare in Russia</strong>, and it is <strong>very mild</strong>, rarely dropping below zero even in winter. ☀️ There is perennial snow in the high-altitude areas like Rosa Khutor, which was the main stage of the Winter Olympics, but if you go down to the city, which is only an hour away by train, you can find an exotic beach promenade lined with palm trees. The fact that you can enjoy skiing on a snow-covered mountain and then come down a little to feel the spring-like sea breeze was the <strong>most attractive and bizarre twist</strong> that Sochi had. 😮
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Skiing in Rosa Khutor and a Romantic Sleeper Train Journey 🥩🚂</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          After sightseeing, we moved to a village near a ski resort called Rosa Khutor, which is about 40 minutes away from downtown Sochi. We checked into our accommodation and went to do some simple grocery shopping. Hearing that <strong>beef was very cheap, I chose a steak with the grim determination to feed my brother steak until he was sick of it while he was in Russia.</strong> 🥩 I bought canned corn, some salad, and sauce, and had a hearty dinner at our accommodation. After that, my brother and I skied in Sochi for about 3 days and then took a train to Moscow. Even though we had to ride the train for over twenty hours, my brother seemed to enjoy the train journey. It was a very enjoyable time for all of us to go out and buy alcohol and food whenever the stop was long, and to eat the lunch boxes that the Russian grandmothers sold when the stop was short. There is no internet for most of the time the train is moving. I met my brother after a long time and we <strong>ate, drank, and talked a lot at our leisure</strong>, 💬 and before we knew it, we had arrived in Moscow.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Memories of Moscow: A North Korean Restaurant and the 'Taste of Socialism' 🍜</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          In Moscow, my wife was waiting for me. My wife was going to go to Korea for a while in a few days, so I only had about a week with my brother. We went to a place called Izmailovsky and bought a nice bear fur hat that Russians wear, and we also ate a skewered meat called shashlik. My wife, on a whim, wanted to go to a North Korean restaurant near our old dormitory. However, <strong>being a chicken, I was worried that it would cause some unnecessary diplomatic(?) problems, so I ended up not going.</strong> 🐔 As soon as my brother arrived, my wife persuaded him to go with her, so in the end, only the two curious ones went. They said they ordered things like Pyongyang naengmyeon and dumplings, but the taste was just so-so. I also tried the dumplings they brought back, and the <strong>dumpling skin was as thick as a glove and the vegetable taste was stronger than the meat taste, which made me think that this was indeed the 'taste of socialism'.</strong> 🤔
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">30-Minute Cut of the Hermitage Museum, the Beginning of a Legend 🖼️💨</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          A legendary anecdote that we will tease him about for a long time was born during our trip to St. Petersburg. The Hermitage Museum in St. Petersburg is famous as one of the <strong>world's three major art museums</strong>. 🏛️ Since I had already been to the museum, I only bought a ticket for my brother. At that time, there was even a service that rented out a device with a recording of announcer Kim Seong-ju's commentary, so I thought my brother would be able to appreciate the artworks at a leisurely pace for at least half a day. I was leisurely drinking tea in the museum square, but after only about thirty minutes, my brother <strong>burst out of the Hermitage Museum door.</strong> 🏃‍♂️ I was speechless at his <strong>amazing artistic(?) eye, which had broken through millions of works of art containing the souls of world-renowned masters in a '30-minute cut'.</strong> 🤯 Of course, I was no different.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Brotherly Time, and My Cousin's Russian Study Abroad Story 🇷🇺</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          My wife went to Korea for a while, and while I was left in Moscow, the brothers <strong>spent their time reminiscing about old memories.</strong> 🎮 During the day, we went around Moscow and did some sightseeing, and we conquered the street food. In the evening, we would sit side by side and play games together on the computer while eating steak with beer. My brother was especially <strong>fascinated by the grandeur of the circus</strong> in Russia. 🎪 The following summer, my aunt and cousins visited. My aunt and one of my cousins had a short and intense trip to Moscow and St. Petersburg for about a week, and my youngest cousin stayed in Moscow. She was studying Russian at a foreign language high school, and she said she wanted to <strong>stay a little longer to attend a Russian language academy and experience Russia properly</strong>. 🧐 It just so happened that my wife and I were also planning a trip for our summer vacation, so our apartment was empty.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">The 'Kind Russia' My Youngest Cousin Discovered 😇</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          My youngest cousin stayed for about another month before returning to Korea, and it seems she really liked the country of Russia. And <strong>surprisingly, she told me that the Russian people were so kind, which surprised me.</strong> 😮 The story is that once, she suddenly felt dizzy and very lightheaded, and she fainted for a moment on the subway. The <strong>surrounding people, who looked stern, swarmed around her and helped her with all their hearts as if it were their own business</strong>. 🫂 And on the recommendation of those around her, she went to the hospital in an ambulance, and she was <strong>deeply moved by the fact that the nurses were as kind as angels and that there was no hospital bill at all</strong>. 💖 This was a <strong>180-degree different treatment</strong> from me, a poor foreign student who would get into arguments with strangers on the street who told me to "go back to your own country." 😲 It was truly something to live and see.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Family is My Strong Support 💪</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          I chuckled, wondering if the Russia I knew and the Russia my cousin experienced were the same country, but my youngest cousin, who had fully experienced the <strong>kind side of Russia</strong> that I had not experienced, ... entered Moscow State University as an undergraduate and finished her master's degree. 🎓 In a tundra-like life of studying abroad with no connections, my family's visits were more than just a role of a tour guide. The silly jokes I shared with my brother over beer all night, the absurdity of the 30-minute tour of the Hermitage, and the heartwarming story that my cousin left behind. All of those memories became a <strong>strong support</strong> that helped me endure my lonely and tiring life in Moscow. 🌳
        </p>
      `,
      },
    },
    {
      id: 'post-207-extra',
      title: { ko: '✨ 외전 (4) - 러시아 여자들', en: '✨ Side Story (4) - Russian Women' },
      subtitle: {
        ko: '얼음 공주와 시베리아 호랑이 바부시카 사이',
        en: 'Between Ice Princesses and Siberian Tiger Babushkas',
      },
      imageUrl: 'https://images.unsplash.com/photo-1520106212299-d99c443e4568?q=80&w=1200&auto=format&fit=crop', // Moscow evening vibe
      isActive: true,
      comments: [],
      content: {
        ko: `
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          러시아, 우크라이나 등 동슬라브 국가에 미인이 많다는 건 익히 알려진 사실이라, 한국 남성들 사이에서는 우스갯소리로 ‘장모님의 나라’로 불리기도 한다. “진짜로 길거리에 김태희가 밭을 매고 전지현이 소를 모느냐?”라고 묻는다면, 솔직한 내 영혼의 대답은 ‘Yes’라고 할 수 있다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">✨ 압도적인 피지컬과 분위기</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          일단 피지컬부터가 압도적이다. 얼굴이 똑같이 생겼어도 평균적으로 키가 훌쩍 크고, 특히 하체가 길어 시원시원한 비율을 자랑한다. 게다가 걸음걸이나 옷차림에서 뿜어져 나오는 도도한 분위기 덕분에 일단 평균 점수 20점 이상을 주고 출발한다. 👠 한겨울에 두툼한 털코트와 롱부츠를 장착하고 눈길을 걷는 길쭉한 러시아 여성의 뒤태는 감탄을 자아낸다. 오밀조밀한 아시아인의 이목구비와 달리, 입체적이고 시원시원한 선을 가진 그들의 얼굴도 참 매력있다. 금발이 흔한 것은 아니지만, 자연스러운 갈색빛 머리카락을 가진 이들이 많았다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🧟‍♀️ 고퀄리티 좀비? 겨울 아침의 풍경</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          다만 백인 특유의 얇은 피부 탓인지, 아니면 영양 상태(?)의 문제인지 쌩얼일 때는 푸른 정맥이 도드라져 보이는 경우가 많았다. 특히 한겨울 이른 아침, 모스크바 국립대로 등교하는 지하철 안에서 마주치는 핏기 없이 창백하고 푸른 실핏줄이 비치는 러시아 여대생들을 보고 있노라면, 예쁘긴 한데 어딘가 모르게 ‘고퀄리티 좀비’ 같다는 섬뜩한 기분이 들기도 했다. 나의 얄팍한 어휘력으로 묘사할 수 있는 그들의 외모 디테일은 대략 이 정도다. ❄️
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎒 폭풍 성장, 고등학생인가 성인인가</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          어느 날 시내의 한 카페에서 차를 마시며 러시아인 친구를 기다리고 있었다. 그때 비슷한 옷을 맞춰 입은 무리가 우르르 들어와 한쪽 자리를 차지하더니 시끌벅적 떠들기 시작했다. 속으로 ‘다 큰 어른들이 공공장소 매너가 없네’라고 쯧쯧거리고 있을 무렵, 도착한 친구가 그들을 보며 무심하게 말했다. “어? 오늘 저 학교는 수업이 일찍 끝났나 보네.” 
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          그렇다. 그들은 교복을 입은 고등학생들이었다! 😲 러시아 고등학교 시스템을 몰랐던 나는 그들의 폭풍 성장한 피지컬과 완숙한(?) 얼굴만 보고 당연히 성인일 거라 단정했던 것이다. 듣기로는 14세에서 16세 전후로 급격히 성인화가 된다고 한다. 당시 내 사촌 여동생도 고등학생이었는데 비교해 보면 그냥 애와 어른이다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍞 탄수화물의 저주와 체형 변화</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          거리에서 마주치는 러시아의 젊은 여성들은 대체로 살집이 없고 늘씬하다. 오히려 말랐다고 표현하는 게 맞을 정도다. 하지만 신기하게도 나이가 들고 중년이 되면 체형이 극적으로 변하는 경우가 많다. 데이터만 보면 미국의 여성 비만율(42%)에 비하면 러시아(25%)는 양반인 수준이긴 하지만 그들의 식습관을 곁에서 지켜보면 체형 변화의 이유가 짐작이 간다. 
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          마트에서 가장 싸고 흔하게 구할 수 있는 식재료가 바로 빵과 감자다. 🥔 2~300원이면 투박한 바게트를 살 수 있고, 감자 역시 1kg에 3~400원 수준으로 껌값보다 싸다. 팍팍한 주머니 사정 때문에 이 저렴한 탄수화물 덩어리들이 주식이 될 수밖에 없는데, 고기보다 무섭다는 이 탄수화물 과다 섭취가 나잇살과 결합하며 요정 같던 아가씨들을 푸근한 체형으로 바꾸어 놓는 주범이 아닐까 싶다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">❄️ 애교(Aegyo)? 그런 건 없다</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          성격적인 면을 보자면, 대체로 러시아 여자들에게 애교를 기대해선 안 된다. 애초에 러시아어에는 애교라는 단어 자체가 존재하지 않아서, 한국 드라마를 번역할 때도 그냥 발음 나는 대로 ‘Aegyo’라고 표기할 정도다. 언어가 사고를 지배한다고 했던가, 이들에게 눈웃음치며 콧소리를 내는 애교는 미지의 영역이다. 
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          게다가 러시아 여성들은 본인들이 타국 여성들보다 객관적으로 예쁘다는 사실을 아주 잘 알고 있어서인지 자존감이 하늘을 찌른다. 거리에서 마주치는 소녀나 아가씨들은 얼음장처럼 차갑다. 길을 묻거나 도움을 청할 때 어설픈 러시아어를 더듬거리면, 시베리아 벌판보다 더 냉랭한 시선을 꽂아버린다. 🧊
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          하지만 이 얼음벽도 일단 ‘내 사람’이라는 바운더리 안에 들어오면 사르르 녹아내린다. 우리 반 반장은 차갑고 도도한 여학생이었는데, 시험 기간에 공부가 너무 막막해 도와달라고 매달렸더니 기꺼이 자기 시간을 쪼개어 문제를 같이 풀어주는 천사 같은 모습을 보여주었다. 😇 친해지면 자신이 가진 게 적든 많든 따뜻하게 나누려 하는 그들의 반전 매력은 꽤나 뭉클하다. (대체 왜 모르는 사람에겐 그토록 무자비하게 철벽을 치지는 유학 생활이 끝날 때까지 풀지 못한 미스터리다.)
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">👗 상체 노출 vs 하체 노출, 문화의 차이</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          날씨가 풀리면 여성들의 옷차림도 확 가벼워지는데, 이때 한국과의 흥미로운 문화 차이를 발견할 수 있다. 러시아 여성들은 가슴이 깊게 파인 과감한 상의는 즐겨 입는 반면, 짧은 치마는 좀처럼 입지 않는다. 한국에서는 가슴골을 노출하는 것에 더 보수적인 잣대를 들이대지만, 러시아에서는 반대로 짧은 치마를 입고 다니는 여성을 훨씬 더 가벼운 사람으로 취급하는 경향이 있다. 
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          한국은 상대적으로 마르고 볼륨 있는 상체를 선호하는 편이지만, 러시아 남자들은 탄탄하고 큰 엉덩이를 가진 여성을 최고의 미인으로 친다. 🍑 어느 러시아 드라마에서 짝사랑에 빠진 여주인공이 친구에게 “난 별로 예쁘지도 않고, 엉덩이도 크지 않은데 어떡하지?”라며 한탄하는 장면만 봐도 ‘골반과 엉덩이 크기 = 미모의 척도’라는 이 동네의 확고한 공식(?)을 엿볼 수 있다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">👵 최종 진화 형태, 바부시카(Babushka)</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          마지막으로 러시아 여성 생태계의 최종 진화 형태인 할머니에 대해 논하지 않을 수 없다. 한국 아줌마들도 종종 초인적인 괴력을 발휘하고 “여자는 약하지만 엄마는 강하다”며 삶의 훈장을 뽐내지만, 소련 시절을 거치고 러시아의 혹독한 날씨와 거친 환경을 견뎌낸 러시아 할머니들의 강인함은 타의 추종을 불허한다. 젊은 시절의 도도함은 온데간데없고, 세상 무서울 게 없는 거리의 무법자로 거듭난다. 🐯
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          솔직히 유학 시절 내가 거리의 불량배나 스킨헤드보다 더 피하고 싶었던 대상 1순위가 바로 성난 바부시카(할머니)들이었다. 한 번은 기차역에서 현금 대신 카드로 계산을 하다가 뒤에 줄 서 있던 할머니에게 욕을 얻어먹은 적이 있다. 카드로 계산하면 현금으로 할 때보다 더 느리다는 이유였다. 
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          또 하루는 버스 뒷자리에 앉아 핸드폰만 쳐다보고 있었는데, 갑자기 근처에 앉아 있던 할머니가 사자후를 내질렀다. “이봐! 저기 젊은 아가씨가 서 있는데 왜 당장 자리를 안 비켜주나! 예의 없는 놈, 당장 네 나라로 돌아가라!” 😠 (러시아에선 노인뿐만 아니라 젊은 여성에게도 자리를 양보하는 게 남자의 기본 매너라나 뭐라나.) 하도 이런 일을 몇 번 당하다 보니, 한겨울 빙판길에서 러시아 할머니들이 “악!” 하고 미끄러지는 비명을 들을 때면 그 어떤 교향곡보다도 감미롭게(?) 들리기도 했다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🐯 거대한 대륙을 지탱하는 힘</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          결국 러시아 여자들은 화려한 바비인형으로 태어나, 무뚝뚝하지만 정 많은 이웃집 누나를 거쳐, 종국에는 시베리아 호랑이도 때려잡을 법한 세상 거칠게 없는 바부시카(할머니)로 진화한다. 차가운 겉모습 뒤에 숨겨진 그들의 따뜻한 오지랖과 억척스러운 생활력은, 척박한 이 거대한 대륙을 지탱해 온 진짜 힘일지도 모른다. 🇷🇺
        </p>
      `,
        en: `
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          It's a well-known fact that there are many beauties in East Slavic countries like Russia and Ukraine, so among Korean men, it's jokingly referred to as the 'Land of the Mother-in-Law.' If you ask, 'Do women who look like Kim Tae-hee really plow fields and those who look like Jun Ji-hyun really herd cows?' my honest answer from the bottom of my soul would be 'Yes.'
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">✨ Overwhelming Physical Presence and Aura</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          First of all, their physical presence is overwhelming. Even if their faces were the same, they are much taller on average and boast refreshing proportions with particularly long legs. Moreover, thanks to the haughty atmosphere emanating from their gait and attire, they start with an extra 20 points on average. 👠 The sight of a tall Russian woman walking through the snow in a thick fur coat and long boots in midwinter is truly admirable. Unlike the delicate features of Asians, their faces, with three-dimensional and refreshing lines, are also very attractive. Blonde hair isn't common, but many have natural brownish hair.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🧟‍♀️ High-Quality Zombies? Winter Morning Scenery</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          However, perhaps due to the thin skin characteristic of Caucasians or nutritional(?) issues, blue veins often stand out when they are not wearing makeup. Especially in the early morning of midwinter, watching pale, bloodless Russian college students with visible blue capillaries on the subway to Moscow State University, I sometimes felt an eerie feeling that they were like 'high-quality zombies,' even though they were beautiful. These are roughly the details of their appearance that I can describe with my limited vocabulary. ❄️
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎒 Rapid Growth, High Schoolers or Adults?</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          One day, I was waiting for a Russian friend at a cafe in the city, drinking tea. Then, a group of people dressed in similar clothes swarmed in, occupied one side, and started talking noisily. As I was clicking my tongue inwardly, thinking, 'Grown adults have no manners in public,' my friend arrived and said nonchalantly while looking at them, "Oh, I guess that school finished classes early today."
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          That's right. They were high school students in uniforms! 😲 I, who didn't know the Russian high school system, had naturally assumed they were adults based on their burst-grown physical presence and mature(?) faces. I heard that they undergo rapid maturation around the ages of 14 to 16. At that time, my cousin was also a high school student, and comparing them, it was just like a child and an adult.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍞 The Curse of Carbohydrates and Body Type Changes</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Young Russian women encountered on the street are generally slim and slender. It would be more accurate to describe them as thin. Surprisingly, however, their body types often change drastically as they age into middle age. Looking at the data, compared to the female obesity rate in the US (42%), Russia (25%) is at a decent level, but observing their eating habits from the side, one can guess the reason for the body type change.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          The cheapest and most common ingredients available at the supermarket are bread and potatoes. 🥔 You can buy a coarse baguette for 200-300 KRW, and potatoes are also cheaper than gum at 300-400 KRW per kg. Due to tight pockets, these cheap lumps of carbohydrates inevitably become the staple food. This excessive intake of carbohydrates, which is said to be scarier than meat, combined with middle-age weight gain, seems to be the main culprit in turning fairy-like young ladies into cozy body types.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">❄️ Aegyo? There is No Such Thing</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          In terms of personality, you generally shouldn't expect 'aegyo' from Russian women. In the first place, the word 'aegyo' itself does not exist in the Russian language, so when translating Korean dramas, they just write it as it sounds, 'Aegyo.' As they say language governs thought, aegyo—smiling with eyes and making nasal sounds—is unknown territory for them.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          Moreover, perhaps because Russian women know very well that they are objectively more beautiful than women from other countries, their self-esteem is sky-high. The girls or young ladies you meet on the street are as cold as ice. If you stammer in clumsy Russian when asking for directions or help, they will pierce you with a gaze colder than the Siberian plains. 🧊
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          However, this ice wall also melts away once you enter the 'my person' boundary. Our class leader was a cold and haughty female student, but when I clung to her for help because studying for the exam was so overwhelming, she showed an angelic side by willingly splitting her time to solve problems with me. 😇 Their unexpected charm of trying to share warmly, whether they have little or much, once you become close, is quite touching. (Exactly why they put up such a merciless iron wall against strangers remained a mystery I couldn't solve until the end of my studies.)
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">👗 Chest Exposure vs. Leg Exposure, a Cultural Difference</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          When the weather warms up, women's clothing becomes much lighter, and at this time, an interesting cultural difference from Korea can be discovered. While Russian women enjoy wearing bold tops with deep necklines, they rarely wear short skirts. In Korea, a more conservative standard is applied to exposing cleavage, but in Russia, on the contrary, there is a tendency to treat women wearing short skirts as much 'lighter' people.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          While Korea relatively prefers a thin yet voluminous upper body, Russian men consider women with firm and large buttocks to be the most beautiful. 🍑 Just by looking at a scene in a Russian drama where the female protagonist, who is in love, laments to a friend, "I'm not particularly pretty and I don't have large buttocks, what should I do?", you can catch a glimpse of the firm formula of this neighborhood: 'Pelvis and buttock size = measure of beauty.'
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">👵 The Final Evolution, Babushka</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Finally, one cannot help but discuss the final evolutionary form of the Russian female ecosystem: the grandmother. While Korean 'ajummas' also sometimes exert superhuman strength and boast of life's medals, saying "women are weak but mothers are strong," the toughness of Russian grandmothers, who have lived through the Soviet era and endured Russia's harsh weather and rough environment, is second to none. The haughtiness of their youth is nowhere to be found, and they are reborn as street outlaws who fear nothing in the world. 🐯
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          Honestly, during my time as a student, the number one object I wanted to avoid more than street thugs or skinheads was angry 'babushkas' (grandmothers). Once, I was scolded by a grandmother standing behind me at a train station for paying with a card instead of cash. The reason was that paying with a card was slower than cash.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          Another day, I was sitting in the back of a bus looking only at my phone, when suddenly a grandmother sitting nearby let out a lion's roar. "Hey! There's a young lady standing there, why don't you give up your seat right now! You mannerless fellow, go back to your country immediately!" 😠 (They say in Russia, it's a man's basic manner to give up a seat not only to the elderly but also to young women.) Having experienced such things several times, when I heard the "Ah!" scream of a Russian grandmother slipping on the icy road in midwinter, it sounded more melodious than any symphony(?).
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🐯 The Power That Sustains the Vast Continent</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          In the end, Russian women are born as glamorous Barbie dolls, go through a phase as blunt but warm-hearted older sisters next door, and finally evolve into 'babushkas' (grandmothers) who could even take down a Siberian tiger. Their warm nosiness and tenacious vitality hidden behind a cold exterior might be the real power that has sustained this vast, barren continent. 🇷🇺
        </p>
      `,
      },
    },
  ],
};
