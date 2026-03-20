import { Category } from '../types';

export const russiaTravelCategory: Category = {
  id: 'russia_travel',
  title: {
    ko: '러시아 여행',
    en: 'Russia Travel',
  },
  description: {
    ko: '모스크바, 시베리아, 그리고 바이칼에서의 잊지 못할 추억들',
    en: 'Unforgettable memories from Moscow, Siberia, and Baikal',
  },
  isSinglePost: false,
  isActive: true,
  posts: [
    {
      id: 'russia-travel-1',
      title: {
        ko: '러시아의 심장, 모스크바',
        en: 'Moscow, the Heart of Russia',
      },
      subtitle: {
        ko: '붉은 광장에서 참새 언덕까지, 유라시아의 심장을 걷다',
        en: 'From Red Square to Sparrow Hills, Walking the Heart of Eurasia',
      },
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/8/85/Saint_Basil%27s_Cathedral_and_the_Red_Square.jpg?q=80&w=1200&auto=format&fit=crop', // Moscow, Red Square
      isActive: true,
      comments: [],
      content: {
        ko: `
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏙️ 낯선 여행객의 시선으로</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          등잔 밑이 어둡다고, 정작 본인이 사는 곳에는 어떤 관광지가 있는지 잘 모르고 산다. 돌이켜 보면 나도 마찬가지였다. 군 시절 연천에서 근무할 때는 수도 없이 재인폭포 앞을 지나다니면서도 그곳을 일부러 구경하러 오는 사람들이 있다는 사실조차 몰랐다. 부대 안에만 박혀 있었지 연천에 뭐가 있는지 하나도 몰랐던 것이다. 서울에 살 때도 마찬가지였다. 서울 산다고 서울 곳곳의 구경거리나 맛집을 다 아는 게 아니다. 오히려 한국에 여행 온 외국인이 나보다 명소에 대해 더 잘 꿰뚫고 있었다. 하지만 3년간 모스크바에 살면서, 나는 언제든 떠날 수 있는 가벼운 짐만으로 생활하고 있었기에 스스로를 마치 장기 여행객처럼 여겼다. 그러한 이방인의 마음가짐 덕분인지, 나는 부지런히 모스크바 이곳저곳을 돌아다닐 수 있었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏰 붉은 광장, 아름다움과 피의 역사</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          모스크바에 오는 사람이라면 누구든 ‘붉은 광장’은 꼭 보게 될 것이다. 그만큼 러시아, 그리고 모스크바를 상징하는 랜드마크이기 때문이다. 예전에는 이곳에서 공개 처형이 많아 광장이 항상 붉은 피로 덮여 있어 붉은 광장이라는 살벌한 이름이 붙었다는 소문도 있지만, 사실 고대 러시아어로 ‘붉다’는 단어가 ‘아름답다’는 뜻과 뿌리가 같아 붙여진 이름이라는 낭만적인 설이 더 유력하다. 뭐 믿거나 말거나. 붉은 광장에는 항상 들어갈 수 있는 건 아니지만 미라가 된 레닌이 잠들어 있는 레닌 묘가 있고, 소정의 입장료를 내고 들어갈 수 있는 성 바실리 대성당이 있다. 우리에게는 '테트리스 배경화면'으로 더 유명한 성당인데, 화려한 양파 모양 돔에 홀려 들어가면 정작 러시아 정교회 특성상 내부에는 볼 게 별로 없어 묘한 배신감(?)을 느낄 수도 있다. 광장 바로 옆에는 ‘굼(GUM)’이라는 럭셔리 백화점이 위풍당당하게 서 있다. 물건들의 가격이 살벌하게 비싸기 때문에, 쇼핑을 하러 오는 사람보다는 그냥 압도적인 인테리어를 구경하러 오는 아이쇼핑객이 훨씬 많은 곳이기도 하다.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌳 붉은 광장 주변, 역사의 산책로</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          붉은 광장을 나와서 입구를 바라보면, 과거 폴란드-리투아니아 침략 당시 러시아 민병대를 조직해 나라를 지켰다는 ‘쿠즈마 미닌’과 ‘드미트리 포자르스키’의 동상이 세워져 있다. 붉은 광장 입구를 끼고 조금만 돌면 분위기가 확 바뀌며 ‘알렉산드르 정원’이 나타난다. 그곳에는 ‘꺼지지 않는 불꽃’과 무명용사의 묘를 지키는 근위병이 각을 잡고 근무하고 있으며, 운이 좋다면 근위병 교대식을 직관할 수 있다. 무명용사의 묘는 제2차 세계대전에서 희생된 군인들을 기리는 신성한 공간으로, 푸틴도 종종 참배를 하러 오는 곳이다. 그래, 뉴스에 맨날 나오는 그 푸틴 말이다. 정원 자체로도 형형색색의 꽃과 로마노프 오벨리스크 등이 있어 꽤나 근사하고 볼 만하다. (여담이지만, 알렉산드르 정원 바로 옆에는 소련 시절 서방과의 문화적, 경제적 교류를 상징하던 ‘러시아 1호 맥도날드’도 있었다. 하지만 이 역사적인 매장조차 현재는 러시아-우크라이나 전쟁의 여파로 아쉽게도 간판을 내린 상태다.)
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">👑 권력의 심장, 크렘린</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          붉은 광장 바로 옆은 러시아 권력의 심장, ‘크렘린’ 궁전이다. 소정의 입장료를 내야 하지만 여기는 모스크바에 여행 왔다면 반드시 가야 하는 필수 코스다. 당연히 푸틴의 실제 집무실 문을 열고 들어갈 순 없지만, 무기 박물관을 비롯해 한 번도 울리지 못한 어마어마한 사이즈의 ‘황제의 종’, 한 번도 쏴보지 못한 ‘황제의 대포’ 등 대륙의 허세를 엿볼 수 있다. 크렘린 중심부의 대성당 광장에는 우스펜스키, 아르항겔스키, 블라고베셴스키 성당이 옹기종기 모여 있다. 아까도 잠시 언급했지만 러시아 성당 내부에는 볼 게 별로 없다고 했지만, 이 세 곳만큼은 예외다. 러시아에서 방문할 수 있는 그 어떤 성당들보다도 웅장하고 훌륭한 성화(혹은 이콘이라고 함)들을 감상할 수 있다.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎸 예술과 젊음의 거리, 아르바트</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          모스크바 중심부는 생각보다 아담해서 굳이 교통수단을 이용하지 않더라도 체력만 있다면 두 발로 충분히 걸어 다니며 구경할 수 있다. 예술의 전당 격인 볼쇼이 극장이나 고즈넉한 노보데비치 수도원도 훌륭하다. 지하철이나 택시를 타고 조금만 이동하면 모스크바의 젊음과 문화가 숨 쉬는 '아르바트 거리'가 나온다. 이곳에선 대문호 푸시킨 부부의 동상과 더불어, '빅토르 최'의 추모 공간을 만날 수 있다. 빅토르 최는 구소련 시절 활동했던 고려인 3세 로커로, 억압된 사회 속에서 젊은이들의 자유와 저항을 노래해 '러시아의 전설'이 된 인물이다. 불의의 사고로 요절했지만, 그의 추모 벽에는 여전히 그를 기리는 팬들의 낙서와 담배꽁초가 끊이지 않는다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍔 아르바트의 명물, 쉑쉑버거</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          그리고 아르바트 거리의 또 다른 명물은 다름 아닌 ‘쉑쉑버거’였다. 당시 한국에서는 줄을 몇 시간씩 서야 간신히 맛볼 수 있었던 귀하신 몸이었지만, 아르바트 거리에선 대기 줄 없이 세상 쾌적하게 햄버거를 씹을 수 있었다. 그래서 나는 한국에서 손님이 놀러 오면 꼭 이 한적한 쉑쉑버거로 안내하곤 했다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏞️ 거대한 도시의 쉼터, 공원</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          도심 곳곳에는 대륙의 스케일답게 어마어마한 크기의 공원들이 있다. 날씨가 조금이라도 맑다 싶으면 온 동네 러시아인들이 마치 약속이라도 한 듯 공원으로 쏟아져 나와 산책을 즐긴다. 특히 고리키 공원이나 베데엔하(VDNKh) 공원 등은 겨울이 되면 거대한 야외 스케이트장으로 변신한다. 스케이트 대여도 가능하니 두툼한 겨울옷과 털모자, 장갑만 챙기면 준비 끝이다. 화려한 조명이 감싸는 빙판 위에서 타는 야간 스케이트는 꽤나 낭만적이다. 단, 낭만은 낭만이고 빙판에 넘어지면 뼈가 시리게 아프니, 스케이트 초보라면 멋 부리지 말고 엉덩이 보호대부터 챙겨 입는 것을 강력히 권한다.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🐦 도시의 파노라마, 참새 언덕</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          모스크바의 중심부에서 조금 벗어나면, 도시의 스카이라인을 한눈에 담을 수 있는 참새 언덕과 마주하게 된다. 모스크바 국립대학교의 압도적인 스탈린 양식 건물을 등지고 언덕에 서면, 굽이치는 모스크바 강과 함께 우리가 지금까지 걸어왔던 시내의 풍경이 파노라마처럼 쫙 펼쳐진다. 그만큼 많은 사람들이 찾는 모스크바를 대표하는 포토존이다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌍 유럽도 아시아도 아닌, 유라시아</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          한국 사람들은 보통 바다 건너 여행을 떠난다고 하면, 엽서에 나올 법한 아기자기하고 동화 같은 유럽의 풍경을 기대하곤 한다. 하지만 모스크바는 그런 전형적인 유럽의 말랑말랑한 모습과는 거리가 멀다. 그렇다고 아시아라고 부르기엔 무언가 억울한(?) 구석이 있다. 모스크바는 유럽도 아니고 아시아도 아닌, 그저 ‘유라시아’라는 아주 독특한 장르 그 자체를 구축하고 있는 도시다.
        </p>
      `,
        en: `
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏙️ Through the Eyes of a Strange Traveler</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          As the saying goes, it's darkest under the lamp. People often live without knowing what tourist attractions are in their own area. Looking back, I was the same. When I was serving in the military in Yeoncheon, I passed by Jaein Falls countless times without even knowing that people deliberately came to see it. I was just stuck inside the base and knew nothing about what was in Yeoncheon. It was the same when I lived in Seoul. Living in Seoul doesn't mean you know all the sights and famous restaurants. In fact, a foreigner traveling in Korea knew more about the famous spots than I did. However, living in Moscow for three years, I lived with only a light luggage that I could leave at any time, so I considered myself a long-term traveler. Perhaps thanks to this stranger's mindset, I was able to diligently explore Moscow.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏰 Red Square, a History of Beauty and Blood</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Anyone who comes to Moscow will surely see the 'Red Square.' It is that much of a landmark that symbolizes Russia and Moscow. There is a rumor that in the past, there were many public executions here, and the square was always covered in red blood, hence the gruesome name Red Square. However, a more romantic theory is that the word 'red' in ancient Russian has the same root as the word 'beautiful.' Believe it or not. You can't always enter Red Square, but there is Lenin's Mausoleum where the mummified Lenin rests, and there is St. Basil's Cathedral, which you can enter for a small fee. It is more famous to us as the 'Tetris background,' but if you are mesmerized by the colorful onion-shaped domes and go inside, you may feel a strange sense of betrayal(?) as there is not much to see inside due to the characteristics of the Russian Orthodox Church. Right next to the square stands the magnificent 'GUM' luxury department store. Since the prices of the goods are ridiculously expensive, it is a place where there are far more window shoppers who just come to see the overwhelming interior than people who come to shop.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌳 Around Red Square, a Walk Through History</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          If you leave Red Square and look at the entrance, you will see a statue of 'Kuzma Minin' and 'Dmitry Pozharsky,' who organized the Russian militia and defended the country during the Polish-Lithuanian invasion. If you turn a little around the entrance of Red Square, the atmosphere changes completely and the 'Alexander Garden' appears. There, guards are on duty, guarding the 'Eternal Flame' and the Tomb of the Unknown Soldier, and if you're lucky, you can witness the changing of the guard ceremony. The Tomb of the Unknown Soldier is a sacred space that honors the soldiers who died in World War II, and it is a place where Putin often comes to pay his respects. Yes, that Putin you see on the news all the time. The garden itself is quite nice and worth seeing, with colorful flowers and the Romanov Obelisk. (As an aside, right next to the Alexander Garden was also the 'first McDonald's in Russia,' which symbolized cultural and economic exchange with the West during the Soviet era. However, even this historic store is now unfortunately closed due to the aftermath of the Russia-Ukraine war.)
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">👑 The Heart of Power, the Kremlin</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Right next to Red Square is the heart of Russian power, the 'Kremlin' palace. You have to pay a small entrance fee, but this is a must-see course if you are traveling in Moscow. Of course, you can't open the door to Putin's actual office, but you can get a glimpse of the continent's bluff, including the Armory, the 'Tsar Bell' of enormous size that has never been rung, and the 'Tsar Cannon' that has never been fired. In the Cathedral Square in the center of the Kremlin, the Uspensky, Arkhangelsky, and Blagoveshchensky Cathedrals are gathered together. As I mentioned earlier, there is not much to see inside a Russian cathedral, but these three are exceptions. You can appreciate the most magnificent and wonderful icons (or icons) that you can visit in Russia.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎸 Arbat Street, a Street of Art and Youth</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The center of Moscow is surprisingly small, so you can easily walk around and see the sights if you have the stamina, without having to use transportation. The Bolshoi Theatre, which is like the Hall of Arts, and the quiet Novodevichy Convent are also excellent. A short ride on the subway or a taxi will take you to 'Arbat Street,' where the youth and culture of Moscow breathe. Here, you can see a statue of the great writer Pushkin and his wife, as well as a memorial space for 'Viktor Tsoi.' Viktor Tsoi was a third-generation Korean-Russian rocker who was active during the Soviet era, and he became a 'legend of Russia' by singing about the freedom and resistance of young people in an oppressed society. He died prematurely in an accident, but his memorial wall is still filled with graffiti and cigarette butts from fans who commemorate him.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍔 Shake Shack, the Specialty of Arbat</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          And another specialty of Arbat Street was none other than 'Shake Shack.' At that time, it was a precious item that you could barely taste after waiting in line for hours in Korea, but on Arbat Street, you could eat a hamburger in a very pleasant environment without a waiting line. So, whenever I had guests from Korea, I would always guide them to this quiet Shake Shack.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏞️ Parks, the Shelters of a Huge City</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Throughout the city center, there are huge parks, as befits the scale of the continent. If the weather is even a little clear, all the Russians in the neighborhood pour out into the parks to enjoy a walk, as if by appointment. In particular, Gorky Park and VDNKh Park transform into huge outdoor ice rinks in winter. Skate rentals are also available, so all you need to bring are thick winter clothes, a fur hat, and gloves. Night skating on the ice rink surrounded by colorful lights is quite romantic. However, romance is romance, and if you fall on the ice, it will hurt to the bone, so if you are a beginner skater, I strongly recommend that you wear hip protectors instead of trying to look cool.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🐦 Sparrow Hills, the Panorama of the City</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          A little away from the center of Moscow, you will come across Sparrow Hills, where you can see the city's skyline at a glance. Standing on the hill with the overwhelming Stalinist-style building of Moscow State University at your back, the scenery of the city we have walked through so far unfolds like a panorama with the winding Moscow River. It is that much of a photo zone that many people visit in Moscow.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌍 Neither Europe nor Asia, but Eurasia</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          When Koreans travel across the sea, they usually expect the charming and fairy-tale-like scenery of Europe that you might see on a postcard. However, Moscow is far from that typical soft image of Europe. On the other hand, it feels somewhat unfair(?) to call it Asia. Moscow is neither Europe nor Asia, but a city that has built its own unique genre of 'Eurasia.'
        </p>
      `,
      },
    },
    {
      id: 'russia-travel-2',
      title: {
        ko: '시베리아 횡단열차',
        en: 'The Trans-Siberian Railway',
      },
      subtitle: {
        ko: '끝없는 설원을 달리는 낭만과 생존의 기록',
        en: 'A Record of Romance and Survival Running Through the Endless Snowfields',
      },
      imageUrl:
        'https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/6e5ef7a9-efe4-4a82-8b4b-6de85029ca10.jpeg?q=80&w=1200&auto=format&fit=crop', // Trans-Siberian railway
      isActive: true,
      comments: [],
      content: {
        ko: `
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">낭만의 대륙 횡단 🚂</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          러시아에서 유학하며 가장 야심 차게 품었던 로망 중 하나는, 다름 아닌 시베리아 횡단열차를 타보는 것이었다. 한국 사람 중에도 이미 다녀온 사람들이 꽤 있고 관련 책도 있을 정도로, 조금만 손품을 팔면 꽤 많은 정보를 찾을 수 있었지만 무작정 몸을 싣고 대륙을 가로지르는 낭만을 포기할 순 없었다. 모스크바에서 맞는 첫 번째 겨울 방학, 그것도 하필 내 생일인 1월 1일 새해 첫날에 맞춰, 아내와 의리의 동생들인 P군, S양과 함께 바이칼 호수로 떠나는 여행을 계획했다.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💰 3등석, 2등석, 그리고 바퀴 달린 호텔</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          여담으로 인류학자들은 한국인의 뿌리가 바이칼 호수 주변을 누비던 고대 기마 민족이라고 하던데, 믿거나 말거나. 러시아의 장거리 열차는 크게 플라츠캇, 쿠페, 룩스로 나뉘는데, 쉽게 말해 3등석, 2등석, 1등석으로 보면 된다. 각 열차 칸의 가격 차이가 꽤 많이 나지만, 주머니 사정에 맞춰 쉽게 구분하는 절대 공식이 있다. 3등석인 플라츠캇은 비행기 표보다 확실히 싸고, 2등석인 쿠페는 비행기 표 값과 비슷해서 묘한 내적 갈등을 유발한다. 그리고 대망의 1등석 룩스는? 타본 적은 없지만 비행기 표 값의 두 배에 육박하니, 이쯤 되면 교통수단 보다는 ‘바퀴 달린 호텔’이라고 인식하는 편이 옳다.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🫂 찐 러시아를 느끼는 공간, 플라츠캇</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          3등석 플라츠캇은, 문도 없는 개방형 큐브 공간에 6명이 오밀조밀 모여 타게 된다. 장거리 열차이기에 모든 자리는 침대로 되어 있고, 복도를 사이에 두고 한쪽에는 위아래로 두 사람, 반대편에는 양쪽으로 두 명씩 네 명이 머무르는 독특한 구조다. 식사나 간식을 먹을 수 있는 유일한 테이블은 1층에만 붙어 있기에, 만약 2층 침대 당첨자가 무언가 먹고 싶다면 1층 침대 거주자에게 알현하듯 내려와 양해를 구해야 한다. 다행히 러시아 사람들은 이 열차 시스템을 잘 알고 있기에 크게 개의치 않아 한다. 낯선 러시아인과 무릎을 맞대고 자연스럽게 대화하기에는 플라츠캇만한 것이 없다고 생각한다. 가격뿐만 아니라 ‘찐 러시아’를 온몸으로 느끼고 싶은 사람들에게 강력 추천한다.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🃏 기차 여행의 필수 교양, 카드게임 '두락'</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          여담으로, 러시아에서 기차 여행을 한다면 필수 교양 과목처럼 알아두면 좋은 카드게임이 있다. 바로 ‘두락(Дурак)’인데, 직역하자면 ‘바보’라는 아주 직관적인 뜻이다. 손에 든 카드를 가장 먼저 털어내는 사람이 이기고, 마지막까지 카드를 쥐고 끙끙대는 한 명이 바로 그 영광의 ‘바보’가 되는 게임이기 때문이다. 나도 기차 안에서 이 카드 게임을 처음 배웠고, 러시아 친구들과 실전을 거듭하며 타짜(?)의 기량을 쌓을 수 있었다. 기본적으로는 두 명이 하지만 최대 여섯 명까지도 즐길 수 있다. 제일 특이한 점은 포커용 트럼프 카드에서 숫자 2, 3, 4, 5는 과감하게 내다 버린다는 것이다. 따라서 조커를 제외하고 총 사용되는 카드는 52장이 아니라 36장이다. 한국에서 치던 버릇대로 풀세트 카드를 사 가면 빈 숫자를 찾느라 당황하는 경우가 생길 수 있다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🔒 안락한 우리만의 공간, 쿠페</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          다시 열차 이야기로 돌아와서, 2등석인 쿠페는 네 명이 하나의 문 달린 독립된 공간을 사용한다. 플라츠캇과 가장 크게 구별되는 점이 바로 이 ‘문’인데, 열고 닫을 수 있어서 복도의 소음을 차단하고 생각보다 안락하게 머무를 수 있다. 우리는 마침 일행이 딱 넷이었기에 한 치의 망설임도 없이 이 쿠페를 통째로 점령했다. 모르는 사람과 며칠을 섞여 가는 게 불편하기도 했고, 무엇보다 소매치기 괴담 때문에 귀중품을 복대에 차고 뜬눈으로 밤을 새워야 한다는 두려움이 컸기에 문을 걸어 잠글 수 있는 일행 넷의 조합이 정말 다행이라 생각했다.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍜 기차 안 생존기</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          1층 침대 밑의 벙커 같은 공간에는 큰 짐을 보관하고, 당장 생존에 필요한 먹거리들만 미리 빼두었다. 각 열차 칸에는 화장실과 뜨거운 물이 콸콸 나오는 온수 통(사모바르)이 있어서, 컵라면이나 감자 퓨레(뜨거운 물을 부으면 순식간에 으깬 감자로 변신하는 마법의 가루), 차나 커피 등을 원 없이 먹고 마실 수 있었다. 특히 한국에선 보기 힘든 팔도 도시락 컵라면이 러시아에선 국민 라면 급으로 인기가 엄청난데, 그 숨은 비결 중 하나가 용기가 네모나게 생겨서 흔들리는 기차 여행 중 좁은 테이블에서도 잘 엎어지지 않기 때문이라고 한다. 믿거나 말거나.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🦐 새우잠과 으스스한 미신</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          기차 안 객실 공간은 여유가 있는 편이었지만, 침대는 원망스러울 정도로 조금 작았다. 내가 한국에서는 꽤 키가 큰 편에 속하긴 하지만, 평균적으로 덩치가 산만한 러시아인들에게도 이 침대 길이는 많이 아쉬운 편이다. 길이가 약 180cm 정도 되는데, 베개까지 놓고 누우면 다리를 쭉 펴기엔 택도 없이 모자랐다. 결국 나는 테트리스 블록처럼 자세를 대각선으로 틀거나 새우처럼 옆으로 웅크리고 잘 수밖에 없었다. 재밌게도 러시아 사람들은 “죽은 사람만 관 속에서 사지를 일자로 뻗고 잔다”는 으스스한 미신이 있어서, 침대가 짧은 걸 크게 불평하지 않는다고 한다. 그들이 긍정적인 건지, 체념이 빠른 건지 모를 일이다.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎉 시베리아에서 맞이하는 새해</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          바이칼로 향하는 우리의 기차가 2014년 12월 31일 밤, 눈 덮인 모스크바를 미끄러지듯 빠져나가기 시작했다. 그로부터 얼마 지나지 않아, 캄캄한 어둠 속을 밤기차로 뚫고 달리며 우리는 2015년 새해를 맞았다. 시베리아 횡단열차 안에서 맞이하는 새해라니! 글로만 읽으면 미치도록 낭만적일 것 같지만, 현실은 가혹했다. 창밖은 끝없는 칠흑 같은 어둠뿐이었고, 가끔씩 스쳐 지나는 이름 모를 작은 마을의 불빛들만이 유일한 생존 신호였다. 그래도 굳이 낭만을 쥐어짜 내자면, 주변에 빛 공해가 없으니 밤하늘의 별만큼은 기똥차게 잘 보였다.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎴 광활한 설원과 정차역의 묘미</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          낮에는 광활한 시베리아 벌판을 배경 삼아 타짜들처럼 화투를 치며 심심한 시간을 달랬다. 기차는 중간중간 여러 역에 정차하며 사람들을 토해내고 또 태웠는데, 대부분은 작은 역들이었지만 가끔 큰 도시에서는 30분 이상 느긋하게 정차하기도 했다. 기차가 정차하면 승강장 한편에는 찐 감자와 고기, 만두 등을 파는 할머니들이 어김없이 진을 치고 있었다. 가격도 착하고 맛도 기차 안에서 허기를 달래기엔 훌륭했다. 기차 내에서는 식당칸으로 원정을 가서 먹을 것을 사 올 수도 있었고, 주기적으로 카트를 끌고 도는 승무원에게 간식을 살 수도 있었다.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍗 혹한 속 KFC 치킨 쟁탈전</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          이름조차 기억나지 않는 어느 작은 마을 역에서, 열차가 연료를 보충하는지 꽤 오랜 시간 정차한 적이 있다. 우리는 밖으로 나가 구멍가게를 털어 필요한 것들을 샀고, 시베리아의 한파 속에서 무슨 객기였는지 겉옷을 벗어 던진 채 반바지와 속옷 차림으로 기념사진을 찍는 광기를 부리기도 했다. 한 번은 ‘예카테린부르크’라는 큰 도시에 정차했을 때, 나와 P군은 이번에도 반바지 차림으로 기차역 근처의 KFC를 향해 전력 질주를 했다. 혹독한 추위를 뚫고 공수해 온 소중한 치킨을, 다시 출발하는 따뜻한 열차 안에서 얼어붙은 몸을 녹이며 뜯어 먹었을 때의 그 쾌감이란! 정말이지 기가 막히게 황홀한 맛이었다.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⏳ 시간을 달리는 열차</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          모스크바에서 바이칼 호수의 관문인 이르쿠츠크까지는 다이렉트로 꼬박 4일이 걸리지만, 우리는 중간에 옴스크라는 큰 도시에 내려 하루를 묵었다. 시내 구경도 하고, 모처럼 식당에서 ‘진짜 밥’도 먹고, 숙소에서 따뜻한 물로 사람 몰골을 되찾았기에 총 5일이 걸린 여정이었다. 모스크바와 이르쿠츠크 간의 시차는 무려 5시간인데, 기차로 대략 하루를 이동할 때마다 시계가 한 시간씩 미래로(?) 당겨지는 신비로운 타임슬립을 경험했다. 신기하게도 이르쿠츠크는 모스크바에서 그토록 아득하게 멀리 떨어져 있었지만, 한국과의 시차는 고작 한 시간밖에 차이 나지 않았다. 대륙을 횡단하며 마침내 그리운 한국의 시간에 한 뼘 더 가까워진 기분이었다.
        </p>
      `,
        en: `
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">The Romance of a Transcontinental Journey 🚂</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          One of the most ambitious romantic notions I had while studying in Russia was to ride the Trans-Siberian Railway. There were quite a few Koreans who had already been there, and there were even books about it, so I could find a lot of information with a little effort, but I couldn't give up the romance of just getting on and crossing the continent. During my first winter vacation in Moscow, on New Year's Day, January 1st, which also happened to be my birthday, I planned a trip to Lake Baikal with my wife and my loyal younger siblings, P and S.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💰 3rd Class, 2nd Class, and a Hotel on Wheels</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          As an aside, anthropologists say that the roots of the Korean people are the ancient horse-riding people who roamed around Lake Baikal, but believe it or not. Russia's long-distance trains are largely divided into Platzkart, Coupe, and Lux, which can be easily understood as 3rd, 2nd, and 1st class. The price difference between each train car is quite large, but there is an absolute formula for easy classification according to your budget. The 3rd class Platzkart is definitely cheaper than a plane ticket, and the 2nd class Coupe is similar in price to a plane ticket, which causes a strange inner conflict. And the long-awaited 1st class Lux? I've never been on it, but it's almost twice the price of a plane ticket, so it's better to think of it as a 'hotel on wheels' rather than a means of transportation.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🫂 Platzkart, a Place to Feel the Real Russia</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The 3rd class Platzkart is an open-plan cube space without a door, where 6 people are crammed together. Since it is a long-distance train, all seats are beds, and it has a unique structure with two people on top of each other on one side of the aisle, and two people on each side on the other side, for a total of four people. The only table where you can eat meals or snacks is attached to the first floor, so if the winner of the second-floor bed wants to eat something, they have to come down as if for an audience with the first-floor bed resident and ask for their understanding. Fortunately, Russians are well aware of this train system and don't really mind. I think there is nothing better than Platzkart for striking up a natural conversation with a stranger in Russia. I highly recommend it not only for the price but also for those who want to feel the 'real Russia' with their whole body.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🃏 'Durak', a Must-Know Card Game for Train Travel</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          As an aside, if you are traveling by train in Russia, there is a card game that is good to know as a required liberal arts subject. It's called 'Durak (Дурак),' which literally means 'fool.' This is because the person who gets rid of all their cards first wins, and the one person who is stuck with cards until the end becomes the glorious 'fool.' I also learned this card game for the first time on the train, and I was able to build up my skills as a card sharp(?) through repeated practice with my Russian friends. Basically, two people play, but up to six people can enjoy it. The most peculiar thing is that the numbers 2, 3, 4, and 5 are boldly discarded from a poker deck. Therefore, excluding the joker, a total of 36 cards are used, not 52. If you buy a full deck of cards as you are used to doing in Korea, you may be flustered looking for the missing numbers.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🔒 Coupe, Our Own Cozy Space</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Returning to the train story, the 2nd class Coupe has four people using one independent space with a door. The biggest difference from Platzkart is this 'door,' which can be opened and closed, blocking the noise from the aisle and allowing you to stay in a surprisingly cozy space. Since there were exactly four of us, we occupied this coupe without a moment's hesitation. It was uncomfortable to be mixed with strangers for several days, and above all, the fear of having to stay up all night with valuables in a money belt due to pickpocketing stories was great, so I was really glad that we had a combination of four people who could lock the door.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍜 Survival on the Train</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          We stored our large luggage in the bunker-like space under the first-floor bed and took out only the food we needed for immediate survival. Each train car had a bathroom and a hot water dispenser (samovar) that gushed hot water, so we could eat and drink as much cup noodles, potato puree (a magical powder that turns into mashed potatoes in an instant when you pour hot water), tea, or coffee as we wanted. In particular, the Paldo Dosirak cup noodles, which are hard to find in Korea, are incredibly popular in Russia, to the point of being a national ramen, and one of the hidden secrets is that the container is square, so it doesn't tip over easily on a narrow table during a shaky train journey. Believe it or not.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🦐 Shrimp Sleep and a Creepy Superstition</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The cabin space on the train was spacious, but the bed was resentfully a little small. Although I am quite tall in Korea, the length of this bed is also a bit disappointing for the average-sized Russian. It is about 180 cm long, and if you lie down with a pillow, it is not long enough to stretch your legs out. In the end, I had to sleep with my body twisted diagonally like a Tetris block or curled up on my side like a shrimp. Interestingly, Russians have a creepy superstition that "only the dead sleep with their limbs stretched out straight in a coffin," so they don't complain much about the short beds. I don't know if they are positive or quick to give up.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎉 New Year in Siberia</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Our train to Baikal began to slide out of snow-covered Moscow on the night of December 31, 2014. Shortly thereafter, we greeted the new year of 2015 while running through the pitch-black darkness on a night train. New Year's on the Trans-Siberian Railway! It sounds incredibly romantic when you read it in writing, but reality was harsh. The view outside the window was nothing but endless pitch-black darkness, and the only signs of life were the occasional lights of small, nameless villages that we passed by. Still, if I had to squeeze out some romance, the stars in the night sky were amazingly clear because there was no light pollution around.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎴 The Charm of the Vast Snowfields and Station Stops</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          During the day, we passed the boring time by playing Hwatu (Korean card game) like professional gamblers against the backdrop of the vast Siberian plains. The train stopped at several stations along the way, letting people off and on. Most of them were small stations, but sometimes in big cities, it would stop for more than 30 minutes at a leisurely pace. When the train stopped, there were always grandmothers on one side of the platform selling steamed potatoes, meat, and dumplings. The price was reasonable and the taste was excellent for satisfying hunger on the train. On the train, we could go on an expedition to the dining car to buy food, or we could buy snacks from a crew member who periodically pushed a cart.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍗 KFC Chicken Scramble in the Extreme Cold</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          At a small village station whose name I don't even remember, the train stopped for quite a long time to refuel. We went outside, raided a convenience store for necessary items, and in the Siberian cold wave, with some kind of bravado, we even engaged in the madness of taking commemorative photos in our shorts and underwear after throwing off our outer clothes. Once, when we stopped in a big city called 'Yekaterinburg,' P and I once again sprinted to a KFC near the train station in our shorts. The pleasure of tearing into the precious chicken that we had procured through the harsh cold, while warming our frozen bodies in the warm train that was starting again! It was a truly, amazingly ecstatic taste.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⏳ The Time-Traveling Train</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          It takes a full 4 days to get from Moscow to Irkutsk, the gateway to Lake Baikal, but we got off in a big city called Omsk in the middle and stayed for a day. It was a 5-day journey because we also looked around the city, had a 'real meal' at a restaurant for a change, and regained our human form with warm water at our accommodation. The time difference between Moscow and Irkutsk is a whopping 5 hours, and we experienced a mysterious time slip where the clock was advanced by one hour for every day we traveled by train. Surprisingly, although Irkutsk was so far away from Moscow, the time difference with Korea was only one hour. It felt like I had finally gotten one step closer to the time of my beloved Korea while crossing the continent.
        </p>
      `,
      },
    },
    {
      id: 'russia-travel-3',
      title: {
        ko: '이르쿠츠크와 바이칼',
        en: 'Irkutsk and Baikal',
      },
      subtitle: {
        ko: '얼음 왕국에서 맛보는 훈제 오물과 스노모빌의 짜릿함',
        en: 'The Thrill of Smoked Omul and Snowmobiling in the Ice Kingdom',
      },
      imageUrl:
        'https://i.namu.wiki/i/Zl5MyGIK8j9aB7KJCT2eiF5-I_3M9A3Lpie5967ZiYqngweaEBjEswltjGZwTgkTn_QscbaYHD9d-lpUbvKqiw.webp?q=80&w=1200&auto=format&fit=crop', // Lake Baikal frozen
      isActive: true,
      comments: [],
      content: {
        ko: `
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍲 시베리아의 포근한 도시, 이르쿠츠크</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          4일간의 열차 이동을 하며 컵라면, 마법의 감자 퓨레 가루, 그리고 패스트푸드로 간신히 연명했다. 그렇기에 목적지인 이르쿠츠크에 도착하자마자 우리 일행의 눈이 뒤집혀 찾은 것은 다름 아닌 식당에서 사람이 직접 요리해 주는 따뜻한 요리였다. 아침 일찍 도착하여 문을 연 곳이 많지 않았지만 다행히도 식당을 하나 찾아 몸과 마음을 녹일 수 있었다. 우리가 거쳐온 시베리아의 무시무시한 도시들과는 다르게, 이르쿠츠크의 날씨는 영하 5도에서 10도 사이로 애교 수준의 포근함(?)을 자랑했다. 도시는 크게 주민들의 거주 구역과 시내 중심가로 나뉘어 있었는데, 워낙 동네가 아담해서 택시만 타면 어디든 5분 이면 갈 수 있었다.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚿 아늑한 숙소와 온수통 룰렛</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          우리가 잡은 숙소는 거주 구역 쪽에 있어서 다행히 주변에 예쁜 공원과 식당들이 잘 갖춰져 있었다. 인심 좋은 호스트가 이른 체크인을 허락해 준 덕분에 아늑한 실내에서 기차 여행의 묵은 피로를 씻어낼 수 있었다. 부킹닷컴에서 예약했지만 마치 에어비엔비처럼 누군가의 진짜 가정집을 통째로 빌린 느낌이었는데, 한껏 낸 크리스마스 장식과 집 안을 어슬렁거리는 고양이가 아주 인상적이었다. 다만 이 집에는 치명적인 함정이 하나 있었으니, 바로 ‘온수통 룰렛’이었다. 따뜻한 물이 데워지는 데 시간이 걸리는 시스템이라, 누군가 샤워를 길게 하고 나온 직후에 멋모르고 들어갔다가는 찬물을 강제로 뒤집어쓰는 참사를 겪어야 했다. 기차에서의 불편한 잠자리 때문인지 따뜻하게 먹은 아침 때문인지 일단 체력을 보충하고, 이르쿠츠크 시내 구경을 나섰다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🧊 얼음 왕국이 된 도시</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          우리 달력으로는 새해가 밝았지만, 러시아 정교회는 1월 7일을 크리스마스로 기념한다. 덕분에 러시아는 1월 1일부터 8일까지 나라 전체가 거대한 연휴 모드에 들어간다. 우리가 도착한 날이 1월 5일이었으니, 아직 새해의 텐션이 꺾이지 않은 데다 크리스마스이브의 설렘까지 겹쳐 시내는 그야말로 축제 분위기였다. 광장 한복판에는 얼음으로 조각한 거대한 2015 숫자와 늑대 상이 위풍당당하게 서 있었고, 주변으로 놀거리와 먹거리가 넘쳐났다. 숙소 근처의 큰 공원 역시 아예 얼음 왕국으로 변신해 있었다. 얼음성, 얼음 미로, 얼음 미끄럼틀을 마주한 우리 일행은 체면도 잊은 채 동심으로 돌아갔고, 다 큰 어른이 다섯 명이서 그렇게 이르쿠츠크의 얼음판을 뒹굴며 하루를 하얗게 불태웠다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏞️ 바이칼의 관문, 리스트비얀카</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          이르쿠츠크 시내에서 몸을 풀었으니, 이제 진짜 목적지인 바이칼 호수를 마주할 차례였다. 버스를 타고 30~40분 정도를 달리자 호숫가 마을인 리스트비얀카에 도착했다. 내심 꽝꽝 언 호수 위에서 자동차 드리프트라도 해볼까 기대했지만, 아쉽게도 아직 호수가 완전히 얼어붙지 않아 그 야망은 접어야 했다. 하지만 바이칼은 얼지 않아도 즐길 거리가 무궁무진했다. 우리는 본격적인 탐험에 앞서 바이칼 호수 박물관부터 들렀다. 규모가 엄청나게 크진 않았지만, 전 세계 담수의 20%를 품고 있다는 이 거대한 바다 같은 호수의 역사와 이곳에서만 사는 고유 생물들을 훑어보기엔 완벽한 장소였다.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🐟 바이칼의 별미, 훈제 오물</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          박물관에서 대충 지식을 채운 뒤에는 호숫가를 따라 형성된 리스트비얀카 마을을 유유자적 걸었다. 걷다 보면 어디선가 기가 막힌 냄새가 코를 찌르는데, 상인들이 거리에서 팔고 있는 오물(Omul)이라는 물고기 훈제 냄새다. 오직 바이칼 호수에서만 서식하는 연어과 물고기라는데, 가격도 착하고 맛도 아주 훌륭했다. 거리에서 이 훈제 오물을 구입하면 비밀봉지에 넣어주는데 맨손이나 장갑 낀 손으로 낄낄거리며 뜯어 먹었다. 비록 그 대가로 장갑에 한동안 지워지지 않는 강렬한 비린내를 달게 되었지만, 길거리에서 넓디 넓은 바이칼 호수를 바라보며 뜯어 먹던 그 맛은 고급 식당 부럽지 않은 진귀한 경험이었다.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🐕 시베리아의 로망, 개썰매</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          시베리아에 왔다면 은빛 설원을 질주하는 개썰매에 대한 로망을 품게 마련이다. 숙소 호스트에게서 바이칼 근처에 개썰매를 탈 수 있는 곳이 있다는 고급 정보를 얻은 우리는 한껏 부푼 마음으로 찾아갔다. 내 머릿속엔 영화에 나오는 털이 북실북실하고 위풍당당한 썰매견들을 상상했지만, 막상 마주한 녀석들은 털도 짧고 몸매도 꽤나 얄쌍한(?) 실전 압축형 일꾼들이었다. 손님과 방향을 잡는 머셔(Musher)까지 두 사람을 태운 썰매를 여덟 마리의 개가 끌었는데, 상상했던 것만큼 스피드가 빠르지 않았다. 하지만 뭐 어떤가. “나 시베리아 벌판에서 개썰매 타본 사람이야”라는 기가 막힌 안줏거리를 하나 건진 것만으로도 본전은 뽑은 셈이다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏍️ 개썰매보다 짜릿한 스노모빌</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          하지만 솔직히 고백하건대, 개썰매보다 오조오억 배는 더 재미있고 짜릿했던 것은 따로 있었다. 바로 개썰매 체험장 근처에 있던 스노모빌이었다. 스키장에서 안전요원들이 타고 다니는 바로 그 엔진 달린 눈썰매 말이다. 지친 기색이 역력했던 얄쌍한 개들과 달리, 시동을 걸자마자 우렁찬 굉음을 뿜어내는 이 기계는 단숨에 우리를 대륙의 폭주족(?)으로 만들어 주었다. 엑셀을 당기는 순간, 방금 전 느릿했던 개썰매의 아쉬움은 싹 잊혀지고 러시아의 끝없는 은빛 설원을 미친 듯이 질주하는 쾌감이 온몸을 휘감았다. 현대 문명의 자본주의 스피드가 시베리아 벌판을 지배하는 순간이었다. 다만, 이 미친 속도감을 즐길 때 반드시 주의할 점이 하나 있다. 아무리 헬멧을 푹 눌러쓰고 무장을 해도, 스노모빌이 일으키는 자비 없는 눈보라가 얼굴을 사정없이 때려 앞이 하나도 안 보일 수 있다는 것이다. 자칫하다간 끝없는 설원을 달리다 진짜 인생의 '끝'을 볼 수도 있으니, 스피드에 취하더라도 두 눈을 부릅뜨고 시야 확보에 목숨을 걸어야 한다.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⛷️ 호수를 마주하며 즐기는 스키</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          바이칼의 겨울여행을 제대로 완성해 준 화룡점정은 단연 스키장이었다. 이곳의 슬로프 길이가 압도적으로 긴 것은 아니지만, 뷰 하나만큼은 전 세계 어디와 비교해도 뒤지지 않는다. 첩첩산중의 눈덮힌 앙상한 산봉우리만 내려다보며 타는 일반 스키장과 달리, 이곳에서는 그 거대한 바이칼 호수를 정면으로 마주 보며 활강할 수 있다. 설령 스키를 타다 자빠져도, 잠시 쉬며 바이칼 호수의 그 웅장함을 멍하니 바라보고 있으면 그만이다. 그때 두 눈에 담았던 풍경은 여전히 내 기억 속에 여전히 선명하다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">👋 꿈같던 겨울 여행의 마무리</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          광활한 횡단열차로 시작해 바이칼 호수에서 정점을 찍은 겨울 여행은 쏜살같이 지나갔다. 돌아갈 때는 열차 비행기를 탔다. 또다시 4일간 기차를 탈 각오가 서지 않았다. 6시간을 날아가는 비행이었지만, 모스크바와 이르쿠츠크의 5시간 시차 덕분에 비행기를 타고 출발한 시간과 거의 똑같은 시간에 모스크바에 떨어지는 신기한 타임슬립을 경험했다. 하루가 30시간으로 늘어난 듯한 기묘한 기분과 함께 시베리아 횡단열차와 함께한 겨울여행도 막을 내렸다. 러시아의 겨울 방학은 총 3주. 여행에서 하얗게 불태운 2주를 뒤로하고, 이제 남은 일주일은 다가올 새 학기의 융단폭격을 견뎌내기 위해 얌전히 방구석에서 체력을 재충전할 시간이다.
        </p>
      `,
        en: `
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍲 Irkutsk, a Cozy City in Siberia</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          For four days on the train, we barely survived on cup noodles, magical potato puree powder, and fast food. Therefore, as soon as we arrived at our destination, Irkutsk, what our group looked for with our eyes wide open was none other than a warm dish cooked by a person in a restaurant. We arrived early in the morning, and there were not many places open, but fortunately, we were able to find a restaurant to warm our bodies and minds. Unlike the scary Siberian cities we had passed through, the weather in Irkutsk was a cute level of cozy(?), between -5 and -10 degrees Celsius. The city was largely divided into a residential area for residents and a downtown area, but the neighborhood was so small that you could get anywhere in 5 minutes by taxi.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚿 Cozy Accommodation and Hot Water Tank Roulette</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The accommodation we booked was in a residential area, so fortunately, there were pretty parks and restaurants nearby. Thanks to the generous host who allowed us to check in early, we were able to wash away the accumulated fatigue of our train journey in the cozy interior. We booked it on Booking.com, but it felt like we had rented someone's real home, like an Airbnb, and the Christmas decorations and the cat that was lounging around the house were very impressive. However, there was one fatal trap in this house, and that was the 'hot water tank roulette.' It was a system where it took time for the hot water to heat up, so if you went in right after someone had taken a long shower, you would have to face the disaster of being forced to take a cold shower. Perhaps because of the uncomfortable bed on the train or the warm breakfast we ate, we decided to replenish our energy first and then go out to see the sights of Irkutsk.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🧊 The City That Became an Ice Kingdom</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Although the new year had dawned on our calendar, the Russian Orthodox Church celebrates Christmas on January 7. Thanks to this, from January 1st to 8th, the entire country of Russia enters a huge holiday mode. Since we arrived on January 5th, the New Year's tension had not yet subsided, and the excitement of Christmas Eve was added, so the city was truly in a festive mood. In the middle of the square stood a huge 2015 number and a wolf statue carved out of ice, and there were plenty of things to do and eat around. A large park near our accommodation had also been transformed into an ice kingdom. Faced with an ice castle, an ice maze, and an ice slide, our group forgot our dignity and returned to our childhood innocence, and the five of us grown adults spent the day rolling around on the ice of Irkutsk.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏞️ Listvyanka, the Gateway to Baikal</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          After warming up in the city of Irkutsk, it was time to face our real destination, Lake Baikal. After a 30-40 minute bus ride, we arrived at the lakeside village of Listvyanka. I was secretly hoping to do some car drifting on the frozen lake, but unfortunately, the lake was not yet completely frozen, so I had to give up that ambition. However, Baikal had plenty to enjoy even when it wasn't frozen. Before our full-fledged exploration, we first visited the Lake Baikal Museum. It wasn't a huge museum, but it was the perfect place to get a glimpse of the history of this huge, sea-like lake, which contains 20% of the world's fresh water, and the unique creatures that live only here.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🐟 Smoked Omul, a Delicacy of Baikal</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          After filling our minds with knowledge at the museum, we leisurely walked through the village of Listvyanka, which was formed along the lakeshore. As you walk, you will smell a wonderful smell, which is the smell of smoked fish called Omul, which merchants sell on the street. It is a salmonid fish that lives only in Lake Baikal, and the price was reasonable and the taste was excellent. When you buy this smoked omul on the street, they put it in a plastic bag, and we ate it with our bare hands or gloved hands, giggling. Although the price was a strong fishy smell that did not go away from my gloves for a while, the taste of eating it on the street while looking at the vast Lake Baikal was a rare experience that was not inferior to a fancy restaurant.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🐕 Dog Sledding, the Romance of Siberia</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          If you come to Siberia, you are bound to have a romantic notion of dog sledding through the silver snowfields. We got some high-quality information from our host that there was a place near Baikal where you could go dog sledding, so we went there with high hopes. In my head, I imagined the fluffy, majestic sled dogs from the movies, but the ones I actually met were short-haired and quite slender(?) practical, compressed workers. Eight dogs pulled a sled carrying two people, including a guest and a musher who set the direction, but the speed was not as fast as I had imagined. But who cares? I had already gotten my money's worth just by getting a great story to tell: "I'm the guy who went dog sledding on the Siberian plains."
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏍️ Snowmobiling, More Thrilling Than Dog Sledding</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          But to be honest, there was something that was a hundred million times more fun and thrilling than dog sledding. It was the snowmobile near the dog sledding experience center. I'm talking about the engine-powered snow sled that the safety guards at ski resorts ride. Unlike the slender dogs that looked exhausted, this machine, which let out a roaring sound as soon as it was started, instantly turned us into continental bikers(?). The moment I pulled the accelerator, the disappointment of the slow dog sledding was completely forgotten, and the thrill of madly racing through the endless silver snowfields of Russia engulfed my whole body. It was the moment when the capitalist speed of modern civilization dominated the Siberian plains. However, there is one thing to be careful about when enjoying this crazy speed. No matter how much you wear a helmet and are armed, the merciless snowstorm that the snowmobile creates can hit your face so hard that you can't see anything in front of you. If you're not careful, you could really see the 'end' of your life while running through the endless snowfields, so even if you're drunk on speed, you have to keep your eyes wide open and risk your life to secure your vision.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⛷️ Skiing While Facing the Lake</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The finishing touch that completed our winter trip to Baikal was definitely the ski resort. The slopes here are not overwhelmingly long, but the view is second to none in the world. Unlike a normal ski resort where you only look down at the snow-covered, bare mountain peaks of the deep mountains, here you can ski downhill while facing the huge Lake Baikal. Even if you fall while skiing, you can just take a break and stare blankly at the magnificence of Lake Baikal. The scenery I saw with my own eyes at that time is still vivid in my memory.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">👋 The End of a Dreamlike Winter Trip</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The winter trip, which started with a vast transcontinental train and culminated at Lake Baikal, passed by in a flash. We took a plane back. I was not prepared to ride the train for another 4 days. It was a 6-hour flight, but thanks to the 5-hour time difference between Moscow and Irkutsk, we experienced a strange time slip where we landed in Moscow at almost the same time as we departed. With the strange feeling that the day had stretched to 30 hours, our winter trip with the Trans-Siberian Railway also came to an end. The winter vacation in Russia is a total of 3 weeks. After burning through 2 weeks on our trip, it was time to recharge our batteries in the corner of our room for the remaining week to withstand the carpet bombing of the upcoming new semester.
        </p>
      `,
      },
    },
    {
      id: 'russia-travel-4',
      title: {
        ko: '아픔을 간직한 도시, 상트 페테르부르크',
        en: 'St. Petersburg, a City That Holds Pain',
      },
      subtitle: {
        ko: '눈부신 아름다움과 핏빛 역사가 공존하는 도시',
        en: 'A city where dazzling beauty and bloody history coexist',
      },
      imageUrl: 'https://d3b39vpyptsv01.cloudfront.net/photo/1/2/aec606e62cd04ac98dad836388702a39.jpg?q=80&w=1200&auto=format&fit=crop', // St. Petersburg, Church of the Savior on Spilled Blood
      isActive: true,
      comments: [],
      content: {
        ko: `
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏛️ 아름다움과 비극이 공존하는 도시</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          상트페테르부르크는 러시아의 제2의 도시로 불리지만, 그 위상과 자부심만큼은 수도 모스크바에 결코 뒤지지 않는다. 러시아 도시답게 면적은 서울의 두 배가 넘는 광활한 대지를 품고 있다. 모스크바의 임구가 약 1,300 만 명으로 서울의 천만명을 넘듯, 상트 페테르부르크는 부산의 330만 인구보다도 많은 약 560만 명의 인구가 거주하는 거대 메트로폴리스다. 18세기 표트르 대제가 ‘서구로 향하는 창’을 열기 위해 늪지대를 일구어 만든 이 계획도시는, 도시 전체가 유네스코 세계문화유산으로 지정될 만큼 눈부신 아름다움을 자랑한다. 하지만 이 화려한 유럽풍의 궁전과 낭만적인 운하를 걷다 보면, 이곳이 한때 상상조차 하기 힘든 생지옥이었다는 사실을 떠올리기 힘들다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⚔️ 900일의 지옥, 레닌그라드 공방전</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          제2차 세계대전 당시 레닌그라드 공방전으로 불리는 약 900일간의 처절한 포위전 동안, 이 도시는 그야말로 아사의 늪이었다. 식량이 완전히 바닥나 가죽 구두와 벽지를 끓여 먹는 것은 예사였고, 굶주림에 이성을 잃은 사람들이 길거리의 개와 고양이를 넘어서 심지어 사람을 잡아먹는 인육 사건까지 벌어졌던 끔찍한 비극의 역사가 서려 있다. 그 지독한 고통과 굶주림을 뼈를 깎는 인내로 버텨낸 도시이기에, 잿빛 하늘 아래 우뚝 선 상트페테르부르크의 화려한 건축물들은 단순한 예쁨을 넘어 기묘하고도 묵직한 전율을 안겨준다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌹 잊지 못할 3월 8일, 여성의 날</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          러시아에서는 3월 8일, 세계 여성의 날을 기념하는데 이에 맞춰 여행 일정을 짰다. 한국 사람들은 잘 모르지만, 러시아에서 여성의 날은 꽤나 굵직한 명절이다. 아내는 “러시아에선 여성의 날에 길거리의 모르는 남자들도 여자에게 축하한다며 꽃을 건넨다더라”는 낭만적인 카더라(?)를 듣고 이 첫 여성의 날을 오매불망 기다렸다. 그리고 이 낭만적인 소문이 진짜였음을 증명해 준 건 다름 아닌 우리 숙소의 주인아주머니였다. 아침에 길을 나서려는데, 아주머니가 수줍게 다가와 여성의 날을 축하한다며 아내에게 장미꽃 한 송이를 건넨 것이다. 타지에서 받은 그 따뜻한 꽃 한 송이의 감동 덕분에, 아내는 매년 여성의 날이 돌아올 때마다 상트페테르부르크의 추억을 미소 지으며 꺼내어 놓곤 한다.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌉 밤을 가르는 거대한 도개교</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          상트페테르부르크를 이야기할 때 절대 빼놓을 수 없는 명물이 하나 있다. 바로 늦은 밤 네바강 위에서 펼쳐지는 거대한 도개교다. 강이 꽁꽁 어는 한겨울에는 아쉽게도 볼 수 없지만, 강물이 녹는 4월 말부터 11월까지는 매일 밤 장관이 연출된다. 보통 새벽 1시 10분경 에르미타주 박물관 앞의 팰리스 브리지(궁전 다리)를 시작으로, 거대한 다리들이 배가 지나갈 수 있도록 반으로 쩍 갈라져 하늘로 솟구친다. 화려한 야간 조명을 받은 수천 톤의 다리가 육중하게 열리는 모습은 넋을 잃게 만들 만큼 압도적이다. 다만 낭만에 취해 다리 넘어가는 시간을 놓쳤다가는, 강 건너편 숙소로 돌아가기 위해 택시를 하염없이 기다려야 하는 것은 물론택시비를 왕창 뜯길 수 있으니 관람 시간과 동선 체크는 생존을 위한 필수다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🖼️ 예술의 정점, 에르미타주 박물관</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          도시의 스케일은 단연 에르미타주 박물관에서 절정을 찍는다. 영국 대영 박물관, 프랑스 루브르와 함께 세계 3대 박물관으로 꼽히는 이곳은 예술에 조예가 깊은 사람이라면 일주일을 꼬박 봐도 모자라다고 한다. 예술적 감각이 부족한 우리 부부는 경보 수준으로 스피드런을 했지만, 그냥 스윽스윽 걸으며 지나치기만 해도 끝없이 펼쳐지는 화려한 방들과 어마어마한 스케일의 명작들에 완전히 압도당하고 말았다. 이성주 아나운서의 목소리가 담긴 오디오 가이드도 있다지만, 굳이 설명을 듣지 않아도 이 거대한 겨울 궁전 내부를 두 발로 걷고 있다는 사실 자체가 황홀한 예술적 경험이었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⛪ 모스크바와는 다른 매력의 성당들</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          모스크바에 성 바실리 대성당이 있다면, 상트 페테르부르크에는 피의 구원자 성당(혹은 피의 사원)이 있다. 평소 바실리 성당이 러시아 건축의 끝판왕이라 믿었던 우리는 피의 사원의 디테일을 보고 입을 다물지 못했다. 딱 봐도 피의 사원 쪽의 레벨이 한 수 위였다. 피의 사원 옆에 위치한 러시아 박물관에서는 교과서에서 본 듯한 익숙한 그림들을 찾아내는 쏠쏠한 재미가 있었고, 별 기대 없이 들렀던 성 이사악 성당은 유명세가 무색할 정도로 압도적인 웅장함을 자랑했다.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏰 지식인들의 감옥, 페트로파블롭스크 요새</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          네바강 위 작은 섬에 자리한 페트로파블롭스크 요새(혹은 피터폴 요새)는 과거 감옥으로 쓰였던 곳이다. 사방이 강으로 둘러싸여 탈출이 불가능했다는 이 감옥에는 이름만 대면 알 만한 지식인들이 수없이 거쳐 갔다. 가이드 말로는 죄질이 '조금' 나쁜 엘리트들만 오는 일종의 VIP 휴양형(?) 감옥이었고, 진짜 중범죄자들은 얄짤없이 시베리아로 유배되었다고 한다. 하지만 막상 좁고 차가운 감방 내부를 보니, 휴양은커녕 어느 나라든 옥살이는 결코 만만치 않겠다는 서늘한 깨달음을 얻었다. 이 외에도 러시아 황제들의 피서지라는 여름 정원과 푸틴의 모교인 상트페테르부르크 국립대학교, 붉은 등대 등도 야무지게 눈도장을 찍었다.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚇 등골 오싹한 지하철의 스킨헤드</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          상트 페테르부르크의 지하철을 이용하다 보면 가끔 등골이 오싹해지는 순간이 있는데, 바로 말로만 듣던 스킨헤드와 마주칠 때다. 스킨헤드는 이름 그대로 머리를 아주 짧게 깎거나 아예 삭발한 채 군화를 신고 다니는 극우 인종차별주의자 집단을 일컫는데, 러시아 내 외국인들에게는 공포의 대상 그 자체다. 그들이 무서운 진짜 이유는 예측 불가능한 폭력성과 외국인을 향한 맹목적인 적개심에 있었다. 그들에게 외국인은 대화의 상대가 아니라 단지 ‘러시아에서 몰아내야 할 사냥감’에 불과했기에, 그들과 눈이 마주친다는 것은 곧 통제 불능의 위험에 노출됨을 의미했다. 특히 히틀러의 생일(4월 20일) 즈음해서는 그 광기가 정점에 달해, 이유없는 무차별적 린치를 가하는 일이 있다고 들었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">✨ 화려함 뒤에 가려진 시린 현실</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          유쾌했던 관람을 마치고 돌아온 기차역의 풍경은 사뭇 달랐다. 겨울이라 한산한 관광지와 달리, 따뜻한 역 안에는 추위를 피하러 온 거지들이 잔뜩 몰려 있었다. 러시아 사람들은 선행을 베풀어야 천국에 간다고 굳게 믿기에 평소 적선을 아주 후하게 하는 편인데, 그 때문인지 상트페테르부르크의 눈부신 궁전과 극명하게 대비되는 이 시린 현실이 유독 씁쓸하고 묵직하게 다가왔다.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚂 야생화처럼 피어난 도시의 낭만</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          모스크바로 돌아가는 야간열차 안에서 멀어지는 불빛들을 바라보며 생각했다. 상트페테르부르크가 그토록 눈부시게 화려해 보였던 이유는, 역설적이게도 그 밑바닥에 짙게 깔린 역사적 아픔 때문일지도 모른다. 900일의 굶주림을 견뎌낸 핏빛 역사 위로 세워진 찬란한 금빛 돔, 차가운 늪지대 위에 세계 최고의 예술을 꽃피운 사람들의 지독한 생명력, 이 도시의 낭만은 온실 속 화초처럼 가볍고 얄팍한 아름다움이 아니었다. 그것은 매서운 겨울의 눈보라를 악착같이 버텨낸 야생화 같은 끈질긴 생명력의 결정체였다.
        </p>
      `,
        en: `
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏛️ A City of Coexisting Beauty and Tragedy</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          St. Petersburg is called the second city of Russia, but its status and pride are by no means inferior to the capital, Moscow. Like a typical Russian city, its area is more than twice that of Seoul, embracing a vast land. Just as Moscow's population of about 13 million exceeds Seoul's 10 million, St. Petersburg is a huge metropolis with a population of about 5.6 million, more than Busan's 3.3 million. This planned city, created by Peter the Great in the 18th century by cultivating a swamp to open a 'window to the West,' boasts a dazzling beauty that has earned the entire city a UNESCO World Heritage designation. However, as you walk through these splendid European-style palaces and romantic canals, it is hard to imagine that this place was once a living hell that is hard to even imagine.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⚔️ 900 Days of Hell, the Siege of Leningrad</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          During the approximately 900-day brutal siege known as the Siege of Leningrad during World War II, the city was literally a swamp of starvation. It was common to boil and eat leather shoes and wallpaper when food was completely gone, and there is a history of horrific tragedy where people who lost their reason due to hunger went beyond eating dogs and cats on the street to even eating people. Because it is a city that endured such terrible pain and hunger with bone-crushing patience, the splendid architecture of St. Petersburg, standing tall under the gray sky, gives a strange and heavy thrill beyond simple beauty.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌹 Unforgettable March 8th, Women's Day</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          In Russia, March 8th is celebrated as International Women's Day, and we planned our trip accordingly. Koreans don't know much about it, but in Russia, Women's Day is a pretty big holiday. My wife had heard a romantic rumor(?) that "in Russia, on Women's Day, even strange men on the street give flowers to women to congratulate them," and she had been eagerly awaiting this first Women's Day. And what proved this romantic rumor to be true was none other than the landlady of our accommodation. As we were about to leave in the morning, the landlady shyly approached us and gave my wife a single rose to congratulate her on Women's Day. Thanks to the感动 of that warm flower received in a foreign land, my wife smiles and reminisces about St. Petersburg every Women's Day.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌉 A Giant Drawbridge That Splits the Night</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          There is one specialty that can never be left out when talking about St. Petersburg. It is the giant drawbridge that unfolds over the Neva River late at night. Unfortunately, you can't see it in the middle of winter when the river is frozen solid, but from late April to November when the river thaws, a spectacular sight is created every night. Usually starting with the Palace Bridge in front of the Hermitage Museum around 1:10 am, the giant bridges split in half and soar into the sky so that ships can pass. The sight of the thousands of tons of bridges, illuminated by colorful night lights, opening majestically is overwhelming enough to make you lose your mind. However, if you miss the time to cross the bridge while drunk on romance, you will have to wait endlessly for a taxi to return to your accommodation on the other side of the river, and you may be ripped off for the taxi fare, so checking the viewing time and route is essential for survival.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🖼️ The Pinnacle of Art, the Hermitage Museum</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The scale of the city definitely reaches its peak at the Hermitage Museum. It is said that this place, which is considered one of the world's three major museums along with the British Museum and the Louvre in France, is not enough to see in a whole week if you are well-versed in art. My wife and I, who lack artistic sense, did a speed run at a walking pace, but even just walking past, we were completely overwhelmed by the endlessly unfolding magnificent rooms and the enormous scale of the masterpieces. There is an audio guide with the voice of announcer Lee Sung-ju, but even without listening to the explanation, the fact that we were walking inside this huge winter palace with our own two feet was an ecstatic artistic experience in itself.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⛪ Cathedrals with a Different Charm from Moscow</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          If Moscow has St. Basil's Cathedral, St. Petersburg has the Church of the Savior on Spilled Blood (or the Church on Blood). We, who had always believed that St. Basil's Cathedral was the king of Russian architecture, were speechless when we saw the details of the Church on Blood. It was clear that the level of the Church on Blood was a step above. At the Russian Museum located next to the Church on Blood, there was the simple fun of finding familiar paintings that seemed to be from textbooks, and St. Isaac's Cathedral, which we visited without much expectation, boasted an overwhelming grandeur that belied its fame.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏰 The Peter and Paul Fortress, a Prison for Intellectuals</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The Peter and Paul Fortress, located on a small island on the Neva River, was once used as a prison. This prison, which was said to be impossible to escape from because it was surrounded by the river on all sides, has housed countless intellectuals whose names are well-known. According to the guide, it was a kind of VIP resort-style(?) prison where only elites with 'slightly' bad crimes came, and real serious criminals were sent to Siberia without mercy. However, looking at the narrow and cold prison cells, I got a chilling realization that prison life is by no means easy in any country, let alone a resort. In addition, we also made sure to see the Summer Garden, which is said to be the summer resort of the Russian emperors, St. Petersburg State University, Putin's alma mater, and the red lighthouse.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚇 The Chilling Skinheads of the Subway</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          When you use the subway in St. Petersburg, there are times when you get a chill down your spine, and that is when you come face to face with the skinheads you have only heard about. The skinheads are a far-right racist group who shave their heads very short or completely bald and wear military boots, and they are the object of fear itself for foreigners in Russia. The real reason they are scary is their unpredictable violence and blind hostility towards foreigners. To them, foreigners were not partners in conversation, but simply 'prey to be driven out of Russia,' so making eye contact with them meant being exposed to uncontrollable danger. In particular, around Hitler's birthday (April 20), their madness is said to reach its peak, and they commit unprovoked and indiscriminate lynchings.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">✨ The Chilling Reality Hidden Behind the Glamour</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The scenery of the train station we returned to after a pleasant viewing was quite different. Unlike the quiet tourist attractions in winter, the warm station was crowded with beggars who had come to escape the cold. Russians firmly believe that they must do good deeds to go to heaven, so they are usually very generous with their alms, but perhaps because of that, this chilling reality, which is in stark contrast to the dazzling palaces of St. Petersburg, came to me as particularly bitter and heavy.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚂 The Romance of a City That Bloomed Like a Wildflower</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          On the night train back to Moscow, I thought as I watched the receding lights. The reason why St. Petersburg seemed so dazzlingly splendid might be, paradoxically, because of the deep historical pain that lay beneath it. The brilliant golden dome built on the bloody history of enduring 900 days of starvation, the terrible vitality of the people who made the world's best art bloom on the cold swamp, the romance of this city was not a light and flimsy beauty like a greenhouse flower. It was the crystallization of a tenacious vitality like a wildflower that had stubbornly endured the fierce winter blizzard.
        </p>
      `,
      },
    },
    {
      id: 'russia-travel-5',
      title: { ko: '모스크바 동부 여행', en: 'Traveling East of Moscow' },
      subtitle: {
        ko: '니즈니 노브고러드의 얼음 낚시와 카잔의 하얀 진주',
        en: 'Ice Fishing in Nizhny Novgorod and the White Pearl of Kazan',
      },
      imageUrl: 'https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?q=80&w=1200&auto=format&fit=crop', // Kul Sharif Mosque, Kazan
      isActive: true,
      comments: [],
      content: {
        ko: `
        <p class="leading-relaxed mb-6 text-slate-700">
          러시아의 광활한 대지를 횡단하는 여행자라면, 모스크바를 벗어나 진짜 대륙의 민낯을 마주하고 싶은 충동에 휩싸이기 마련이다. 러시아의 남성의 날 (2월 23일, 정식 명칭은 조국 수호자의 날) 연휴를 핑계 삼아, 사실은 그저 역마살이 도져서 훌쩍 떠난 이번 여행의 최종 목적지는 타타르스탄 공화국의 하얀 진주 카잔이었다. ❄️ 그리고 기차로 가는 길목에 자리한 거대한 상업 도시 니즈니 노브고러드에서 하루를 멈춰 가기로 했다. 
        </p>

        <div class="bg-slate-50 p-6 rounded-lg border-l-4 border-russia-blue my-6 text-sm">
          <p class="leading-relaxed text-slate-700 italic">
            본격적인 이야기에 앞서 두 도시를 짧게 소개하자면, <strong>니즈니 노브고러드</strong>는 거대한 볼가강과 오카강이 만나는 지점에 위치한 러시아의 대표적인 상업 및 공업 중심지로, 탁 트인 강변 풍경과 고풍스러운 크렘린이 유명하다. 반면 <strong>카잔</strong>은 이슬람 문화와 러시아 정교회가 절묘하게 공존하는 이국적인 도시로, 모스크바와는 전혀 다른 새하얀 정갈함을 자랑하는 타타르스탄 공화국의 심장이다. ✨
          </p>
        </div>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏃‍♂️ 아내의 여권 실종 사건, 숨 가쁜 출발</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          2월 20일 저녁 짐을 챙겨 여유롭게 기차역으로 향하려던 참이었다. 그런데 아내가 여권을 집에 두고 왔다고 했다. 러시아에서는 어딜 가든 외국인이라면 반드시 여권과 거주자 등록증을 항시 가지고 다녀야 한다. 어딜가나 경찰들이 불시로 검문할 가능성이 있었고, 만약 해당 문서가 없다면 뇌물을 주거나 법원에 가서 관련 사항을 소명하고 벌금을 내야할 터였다. 😱
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          어쩌겠는가. 불쌍한 남편인 내가 숨이 턱이 닿도록 집으로 뛰어가 재빨리 아내의 여권을 챙겨 온 덕에 다행히 제 시간에 열차에 탑승 할 수 있었다. 모스크바에서 니즈니 노브고러드까지는 6시간 정도 걸린다. 우린 러시아의 찐한 분위기가 가득한 플라츠캇이라는 3등석 열차칸을 탔다. 🚂
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🧱 니즈니 노브고러드: 꽝꽝 언 강과 벼룩시장</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          러시아에서 기차역의 이름은 열차가 향하는 종착지의 이름을 따오는 경우가 많다. 우리가 니즈니 노브고러드에 도착한 기차역의 이름이 ‘모스콥스키’ 인 것만 봐도 알 수 있다. 아침을 대충 해결하고 날이 밝아오자 본격적으로 밖으로 나와 눈 쌓인 텅 빈 푸시킨 공원과 니즈니 노브고러드의 아르바트 거리를 걸었다. 거리를 걷다 마주친 중앙은행 건물을 슥 구경하고, 사람들이 웅성거리는 작은 벼룩시장으로 향했다. 🪙
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          세계 각국의 동전과 신기한 잡동사니들을 파는 시장 구경은 언제나 쏠쏠한 재미를 준다. 동전을 파는 아저씨의 콜렉션 중에 한국 동전도 발견해서 매우 반가웠다. 기념품을 하나둘 챙긴 뒤, 도시의 자랑인 니즈니 노브고러드 크렘린으로 발걸음을 옮겼다. 크렘린 성벽에서 내려다보는 꽝꽝 언 오카강의 전경은 그야말로 절경이었다. 근처에 있는 거대한 저택과 그 유명한 츠칼로프 계단도 둘러보았는데, 사실 웅장한 건축물이긴 했지만 흐린 날씨와 칙칙한 주변 환경이 어우러지니 기대했던 것만큼 로맨틱하진 않았다. 🌫️
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎣 얼음 위 강태공들과 보드카 한 잔</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          어느 언덕 위로 올라가 도시 전경을 내려다보았지만, 잿빛 하늘과 굳은 표정의 사람들, 저 멀리 뿜어져 나오는 공장 연기 탓에 감동은 덜했다. 그때, 저 아래 얼어붙은 오카강 위로 조그맣고 까만 점들이 보였다. 호기심에 강가로 내려가 보니 그 점들의 정체는 두꺼운 얼음을 뚫고 낚시를 하는 러시아인들이 있었다. 🧊
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          조심스레 얼음판 위를 걸어, 낚시 중인 러시아인들 근처에 가보았다. 실제 뭔가가 잡히는지, 잡히면 얼마나 큰지, 그리고 얼음 낚시가 재미있는지 등 궁금했기 때문이었다. 낚시 중인 아저씨들 근처에는 하나같이 다 보드카 병이 보였다. 우리가 다가가자 선뜻 먼저 걸어준 아저씨 한 분이 계셨는데, 외국인인 우리가 꽤나 신기했나보다. 그날 잡은 물고기도 보여주시고 나에게 원하면 물고기 들고 사진도 같이 찍자고 먼저 권하였다. 그래서 내가 잡은 물고기도 아니지만 아저씨와 사이좋게 한 마리씩 들고는 인생에 길이 남을 추억도 하나 남길 수 있었다. 📸🐟
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🕌 카잔: 순백의 성벽과 에메랄드빛 모스크</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          니즈니 노브고러드의 여정을 마치고 다음날 새벽, 카잔으로 향했다. 카잔은 첫인상부터 우중충했던 평범한 러시아 도시들과 달리, 거리가 무척 깨끗하고 건물들은 새하얀 빛을 뽐내고 있었다. 가장 먼저 카잔 대학교를 구경했다. 러시아에서는 도로명을 유명인의 이름을 따온 경우가 많은데 우리가 모스크바에서 살던 집 주소 역시 천재 수학자 ‘로바쳅스키’의 이름을 딴 ‘로바쳅스카바’ 거리 였다. 카잔 대학에서 아주 반갑게도 우리 동네 도로명 주소의 주인공인 ‘로바쳅스키’의 동상을 발견했다. 당연히 쌩판 모르는 남이었지만 그래도 어딘지 모르게 반가웠다. 🎓
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          점심으로는 타타르식 식당에 들어갔는데, 조금은 투박하지만 고기 향이 진하게 베어 있는 아주 담백한 맛의 음식이라 마음에 들었다. 🍽️
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          모스크바에는 모스크바 크렘린이 있다면 카잔에는 카잔 크렘린이 있다. 붉은 색을 좋아하는 러시아인들의 특성과 다르게, 카잔의 크렘린은 다른 붉고 화려한 크렘린들과 달리 도시의 이미지처럼 새하얗고 정갈한 자태를 뽐낸다. 마치 순백의 성벽이 긴 세월 동안 이방의 문화를 고스란히 품어 안은 듯한 평온함마저 느껴진다. 🕊️
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          크렘린 중앙에 자리 잡은 에메랄드빛 ‘쿨 샤리프 모스크’는 그야말로 압도적인 아름다움을 자랑했다. 하얀 대리석 벽면과 대비되는 선명한 에메랄드빛 지붕은 햇살을 받을 때마다 보석처럼 반짝이며, 이곳이 러시아 정교회와 이슬람 문화가 수백 년간 어우러져 피워낸 결정체임을 증명하고 있었다. 💎
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌖 두 도시의 대비, 대륙의 진짜 매력</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          모스크바로 돌아가는 이튿날 새벽 비행기를 타러 가는 택시 안, 창밖으로 멀어지는 카잔의 새하얀 도로를 바라보며 이번 여정을 가만히 되짚어 보았다. 잿빛 공장 연기 아래 화려했던 러시아 정교회의 건물들과 보드카를 옆에 두고 낚시하는 니즈니 노브고러드의 얼음 위 강태공들. 그리고 순백의 성벽 안에서 이슬람과 정교회가 평화롭게 어우러져 에메랄드빛으로 빛나던 카잔의 우아함. 🌖
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          달라도 너무 다른 두 도시였지만, 이 극명한 대비야말로 끊임없이 나를 낯선 곳으로 이끄는 러시아 대륙의 진짜 매력이 아닐까. 연휴를 핑계 삼아 훌쩍 다녀온 짧은 일정이었지만, 러시아가 품은 이토록 다채롭고 아름다운 모습들에 다시 한번 놀라게 된 여행이었다. 🇷🇺
        </p>
      `,
        en: `
        <p class="leading-relaxed mb-6 text-slate-700">
          As a traveler traversing the vast lands of Russia, one is bound to be swept away by the urge to leave Moscow and face the raw, unadorned face of the real continent. Using the Russian Men's Day (February 23rd, officially Defender of the Fatherland Day) holiday as an excuse—though in truth it was just a severe case of wanderlust—I set off for my final destination: Kazan, the white pearl of the Republic of Tatarstan. ❄️ Along the way by train, I decided to stop for a day in the massive commercial city of Nizhny Novgorod.
        </p>

        <div class="bg-slate-50 p-6 rounded-lg border-l-4 border-russia-blue my-6 text-sm">
          <p class="leading-relaxed text-slate-700 italic">
            To briefly introduce the two cities before starting the story: <strong>Nizhny Novgorod</strong> is a representative commercial and industrial hub of Russia, located at the confluence of the mighty Volga and Oka rivers, famous for its open riverfront views and ancient Kremlin. <strong>Kazan</strong>, on the other hand, is an exotic city where Islamic culture and Russian Orthodoxy exquisitely coexist, the heart of Tatarstan boasting a pure white elegance entirely different from Moscow. ✨
          </p>
        </div>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏃‍♂️ The Missing Passport Incident, A Breathless Start</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          On the evening of February 20th, just as I was about to head leisurely to the train station after packing, my wife realized she had left her passport at home. In Russia, foreigners must always carry their passport and residence registration wherever they go. There was always the possibility of spot checks by the police, and without those documents, one would have to pay a bribe or explain the situation in court and pay a fine. 😱
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          What else could I do? As the pitiful husband, I ran home until I was out of breath, quickly grabbed her passport, and luckily managed to board the train just in time. The journey from Moscow to Nizhny Novgorod takes about 6 hours. We took a third-class 'Platskart' carriage, which is filled with the thick, authentic atmosphere of Russia. 🚂
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🧱 Nizhny Novgorod: Frozen Rivers and Flea Markets</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          In Russia, train stations are often named after their final destination. You can tell by the fact that the station where we arrived in Nizhny Novgorod was named 'Moskovsky.' After a quick breakfast as dawn broke, we headed out in earnest to walk through the snow-covered, empty Pushkin Park and Nizhny Novgorod's Arbat Street. We glanced at the Central Bank building we encountered on the way and headed to a small, bustling flea market. 🪙
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          Exploring markets selling coins from around the world and curious trinkets is always a lot of fun. I was very pleased to find a Korean coin among one vendor's collection. After picking up a few souvenirs, we moved toward the pride of the city, the Nizhny Novgorod Kremlin. The view of the solidly frozen Oka River from the Kremlin walls was truly breathtaking. We also looked around the massive mansion nearby and the famous Chkalov Stairs; while they were grand structures, the overcast weather and somewhat drab surroundings made them feel less romantic than expected. 🌫️
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎣 Anglers on Ice and a Shot of Vodka</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          I climbed a hill to look down at the city panorama, but the impression was diminished by the gray sky, people with stiff expressions, and factory smoke billowing in the distance. Just then, I saw small black dots on the frozen Oka River below. Driven by curiosity, I went down to the riverbank and found that the dots were Russians fishing through holes drilled in the thick ice. 🧊
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          I walked carefully onto the ice to approach the fishermen. I was curious if they were actually catching anything, how big the fish were, and if ice fishing was fun. Without fail, a bottle of vodka was visible near every one of them. One man reached out to us first, seemingly fascinated by us as foreigners. He showed us the fish he caught that day and invited me to take a photo holding one if I wanted. So, even though it wasn't a fish I caught, I stood side-by-side with him holding a fish, leaving behind a memory that will last a lifetime. 📸🐟
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🕌 Kazan: Pure White Walls and the Emerald Mosque</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          After finishing our journey in Nizhny Novgorod, we headed to Kazan at dawn the next day. Unlike ordinary Russian cities that felt gloomy from the first impression, Kazan's streets were very clean and its buildings shone with a pure white light. We first explored Kazan University. In Russia, streets are often named after famous people, and our address in Moscow was 'Lobachevskaya' street, named after the genius mathematician Lobachevsky. At Kazan University, I was delighted to find a statue of Lobachevsky, the namesake of our home street. He was a complete stranger, of course, but it felt oddly welcoming. 🎓
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          For lunch, we went to a Tatar restaurant; I liked the food, which was a bit rustic but had a deep aroma of meat and a very clean, savory taste. 🍽️
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          Just as Moscow has the Moscow Kremlin, Kazan has the Kazan Kremlin. Unlike the typical Russian preference for red, Kazan's Kremlin is pure white and elegant, matching the city's image. There's even a sense of tranquility, as if the white walls have peacefully embraced foreign cultures over long centuries. 🕊️
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          The emerald-colored 'Kul Sharif Mosque' situated in the center of the Kremlin boasted overwhelming beauty. The vibrant emerald roof, contrasting with the white marble walls, sparkled like a jewel whenever the sunlight hit it, proving that this place is the culmination of centuries of harmony between Russian Orthodoxy and Islamic culture. 💎
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌖 Contrast of Two Cities, The Continent's Real Charm</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          In the taxi heading to the airport for a pre-dawn flight back to Moscow, I quietly reflected on this journey while looking at Kazan's white roads receding through the window. The ornate Russian Orthodox buildings under gray factory smoke and the ice anglers of Nizhny Novgorod with vodka by their side. And the elegance of Kazan, where Islam and Orthodoxy blended peacefully within pure white walls, shining in emerald. 🌖
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          Though the two cities were so incredibly different, perhaps this stark contrast is the real charm of the Russian continent that constantly draws me to unfamiliar places. Although it was a short trip taken on the excuse of a holiday, it was a journey that made me marvel once again at the diverse and beautiful forms that Russia holds. 🇷🇺
        </p>
      `,
      },
    },
    {
      id: 'russia-travel-6',
      title: { ko: '모스크바 남부 여행', en: 'Traveling South of Moscow' },
      subtitle: {
        ko: '러시아의 거친 도로 위에서 겪은 뇌물과 낭만 사이',
        en: 'Between Bribes and Romance on the Rough Roads of Russia',
      },
      imageUrl: 'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?q=80&w=1200&auto=format&fit=crop', // Russian landscape/road vibe
      isActive: true,
      comments: [],
      content: {
        ko: `
        <p class="leading-relaxed mb-6 text-slate-700">
          나는 여행 계획을 짤 때, 최대한 꽉꽉 일정을 눌러 담는 편이다. 예비학부 시절부터 친하게 지내오던 P군과 S양은 이런 우리(정확히 말하면 나)의 빡센 여행 방식을 궁금해 했다. 마침 연휴가 있어, 모스크바 남부 여행을 계획한다는 말에, 겁도 없이 이들은 우리와 합류하기로 하였다. 🚗 기차로 여행하는 낭만도 있지만 이번에는 차를 빌려 조금 더 구석구석 다녀보기로 했다. 사실 예전부터 러시아의 거친 도로를 직접 차를 몰고 달려보고 싶다는 로망도 있었다. 물론 한편으로는 이 대륙에서의 운전이 순탄한 낭만 여행이 되리라곤 기대하지 않았지만 말이다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚉 툴라(Tula) 도착과 대륙의 드라이버 데뷔</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          아침 일찍 집을 나서 지하철 역에서 P군, S양과 합류하여 일렉트리치카라는 교외철에 몸을 실었다. 꼭두새벽부터 일어나서 움직인 탓에 다들 기차 안에서 기절할 줄 알았건만, 웬걸. 잠은커녕 눈을 번뜩이며 카드 게임을 하고 이야기를 나누다 보니 어느새 첫 목적지인, 톨스토이의 영지로 유명한, 툴라라는 도시에 도착했다. 🚂
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          역에 내리자마자 가장 먼저 예약해 둔 렌터카를 찾으러 갔다. 오랜만의 운전인 데다 러시아 특유의 거친 도로 상태, 그리고 어디서 튀어나올지 모르는 불곰식 운전자들 때문에 처음엔 손에 땀이 흥건할 정도로 무서웠지만, 차차 적응이 되며 대륙의 드라이버로 거듭나고 있었다. 확실히 차가 있으니 여러모로 구경하기가 매우 편리했다. 이전에도 단체 투어로 툴라에 잠시 방문한 적이 있었는데, 이번에는 툴라 크렘린을 포함하여 그 때 둘러보지 못한 명소들을 샅샅히 볼 수 있었다. 🏰
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">👮‍♂️ 실선 추월과 ‘뇌물 학생 할인’</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          다음으로 우리의 렌터카가 향한 곳은 제2차 세계대전 당시 격전지로 유명한 아룔이라는 도시였다. 열심히 엑셀을 밝으며 운전 중이었는데 도로에 차도 별로 없고 앞차가 너무 느리게 가기에 과감히 추월을 시도했다. 그런데 하필이면 추월 차선이 아닌 실선 구간에서 추월을 하는 바람에, 언덕 너머 잠복해 있던 경찰에게 딱 걸리고 말았다. 🛑
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          경찰은 차를 세운 나를 내리라고 하더니 경찰차로 끌고가 조수석에 앉히고는 대뜸 성의를 표현할 생각이 없는지 물었다. 그렇다. 정확히 <span class="text-red-600 font-bold">뇌물을 요구하는 것이었다.</span> 성의(?)의 양이 얼마나 되면 좋겠냐고 묻자 그는 5천 루블(당시 약 10만 원)이라고 했다. 💸
        </p>
        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6 text-sm">
          내가 주변 사람들에게 들은 이야기에 따르면 <strong>‘뇌물도 학생 할인이 된다’</strong>고 했다. 그래서 나는 믿져야 본전이라는 생각으로 경찰에게 “방학 때 잠깐 차를 빌려 나왔는데, 가난한 유학생이라 정말 돈이 없습니다”라며 세상 불쌍한 표정으로 학생증을 내밀었다. 놀랍게도 경찰은 내 처지를 갸륵하게 여긴 건지 요구액을 반으로 깎아주었다. 💳 
        </div>
        <p class="leading-relaxed mb-6 text-slate-700">
          그러면서 차량 대시보드 위에 금액을 놓고가라고 했다. 나는 실수로 돈을 차에 놓고 내린거고, 경찰은 내가 떠난 뒤 우연히 주인 모르는 그 돈을 발견했다는 스토리텔링을 만드는 거였다. 그렇게 나는 조금씩, 그러나 아주 확실하게 러시아의 생태계에 적응해 가고 있었다. 😒
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🦅 아룔(Oryol)의 독수리와 요상한 ‘벨라지오’</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          경찰에게 뜯긴 속 쓰림을 안고 어둠이 깔린 아룔 시내에 진입했다. 아룔에서 웅장한 우스펜스키 사원과 아룔시의 상징인 거대한 독수리 상(Oryol은 러시아어로 독수리를 뜻한다) 등을 구경했다. 하지만 아룔에서 가장 기억에 남는 장소를 꼽으라면 유명 관광지가 아닌 단연 ‘벨라지오’라는 아주 요상한 음식점이다. 🦅
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          이탈리아 음식 전문전이라고 내건 식당 내부는 캬바레처럼 생겼는데 내부에는 손님이 아무도 없었다. 그리고 식당 주인은 주문을 받으며 춤과 노래를 선보여도(?) 되는지 물어봤다. 조용히 식사를 하고 싶었던 우리가 극구 사양한 덕에 더욱 요상한 것을 볼 뻔한 위기를 넘길 수 있었다. 💃 캬바레 같은 분위기의 아무도 없는 식당에서 여사장의 춤과 노래라니… 게다가 음식도 별로라 최대한 빨리 그곳을 벗어나고 싶었다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🛡️ 쿠르스크의 탱크와 동화 마을 옐레츠</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          아룔을 떠나 남쪽으로 더 달려 쿠르스크에 도착했다. 쿠르스크는 2차 세계대전 당시 인류 역사상 가장 거대했던 전차전이 벌어졌던 역사적인 도시다. 도시에 들어서는 길목부터 당시의 치열함을 증명하듯 길가에 실제 탱크들이 줄지어 전시되어 있어 매우 흥미로웠다. 🚜
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          이제 다시 모스크바가 있는 북쪽으로 방향을 돌려 올라가는 길에 옐레츠라는 작은 도시에 식사도 할 겸 잠시 들르기로 했다. 그런데 웬걸, 기대 없이 들어선 이 작은 도시는 마치 유럽의 작은 동화 마을을 그대로 옮겨놓은 듯, 아기자기한 건물들과 깨끗한 거리, 고풍스러운 교회들이 어우러져 탄성을 자아냈다. 🏘️ 이렇게 자유 여행 중에 예기치 않는 보물을 찾았을 때의 희열이란 말로 표현하기 힘들다. ✨
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏠 톨스토이의 숨결과 설원 속 샤슬릭</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          대문호 레프 톨스토이의 고향인 야스나야 폴랴나에서 톨스토이 생가를 마지막으로 여행은 어느 정도 마무리가 되었다. 여행의 마지막 밤, 무사히 한 대도 맞지 않고(?) 여행을 완수한 기념으로 숙소에서 바베큐 파티를 했다. 🍖 
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          영하 10도의 간간히 칼바람이 불어오는 추위 속에서 타닥타닥 타오르는 장작불에 구워 먹는 기름진 샤슬릭(꼬치고기)의 맛은 모든 고생을 잊게 할 만큼 환상적이었다. 그간의 험난했던 여행의 에피소드들을 안주 삼아 복기하며 밤이 저물어 갔다. 🔥
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💸 과속 벌금 고지서의 ‘혜자’스러운 반전</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          다시 툴라로 돌아와 렌터카를 반납하고 우리를 모스크바로 데려다줄 일렉트리치카에 몸을 실었다. 모스크바에 다시 돌아온 나는 그 며칠 사이 모스크바의 살인적인 교통 체증과 탁한 공기마저 반갑게 느껴지는 걸 보니, 어지간히 이 도시에 정이 들었나 보다는 생각이 들어 실소가 났다. 🏙️
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          그리고 모스크바에 돌아온지 며칠 후에 집으로 과속 벌금 고지서 뭉치가 날아왔다. 무려 4번이나 과속 카메라에 찍힌 것이었다! 대륙의 도로에 심취한 나머지 단속 카메라의 존재를 잊은 대가였다. 📸 내심 벌금 폭탄을 맞을까 두려웠지만, 4건을 합친 벌금은 약 5~6만원 정도로 다행히 굉장히 저렴했다. 게다가 벌금 고지서를 받은 날로부터 20일 이내에 납부하면 벌금을 50% 감면해 주는 혜자스러운 룰도 있었다. 러시아는 참 여러모로, 파면 팔수록 좋은 쪽으로든 나쁜 쪽으로든 놀라움인 나라다. 🇷🇺
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          돌이켜보면 빡빡한 일정과 예측 불가능한 돌발 상황의 연속이었지만, 불평 한마디 없이 이 여정을 온전히 즐겨준 우리 일행들에게 이 자리를 빌려 깊은 고마움을 전하고 싶다. 낯선 빙판길을 함께 달리며 울고 웃었던 이 기억들은, 여전히 내 가슴 속에 추억이라는 이름으로 진하게 남아있다. 💖
        </p>
      `,
        en: `
        <p class="leading-relaxed mb-6 text-slate-700">
          When I plan a trip, I tend to pack the schedule as tightly as possible. P and S, who had been close friends since the preparatory faculty, were curious about our (or rather, my) intense way of traveling. Since there was a holiday, they fearlessly decided to join us when I said I was planning a trip to southern Moscow. 🚗 While there's a romance to traveling by train, this time we decided to rent a car to explore more nooks and crannies. Honestly, I've always had a dream of driving on Russia's rough roads myself. Of course, I didn't expect driving on this continent to be a smooth romantic journey.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚉 Arrival in Tula and Debut as a Continental Driver</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          We left home early in the morning, met P and S at the subway station, and boarded the 'Elektrichka' (suburban train). I thought everyone would pass out on the train since we woke up at the crack of dawn, but to my surprise, they were wide awake, playing cards and talking. Before we knew it, we arrived in Tula, the city famous for Leo Tolstoy's estate. 🚂
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          As soon as we got off at the station, we went to pick up the rental car we had reserved. It had been a while since I'd driven, and with Russia's notoriously rough roads and 'bear-like' drivers who could pop out from anywhere, I was scared enough to have sweaty palms at first. But I gradually adapted and was becoming a true continental driver. Having a car definitely made sightseeing much more convenient. I had visited Tula briefly on a group tour before, but this time I was able to thoroughly see the sights I'd missed, including the Tula Kremlin. 🏰
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">👮‍♂️ Overtaking on a Solid Line and the 'Student Bribe Discount'</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Our rental car then headed to Oryol, a city famous as a battlefield during World War II. I was stepping on the gas and driving along when I saw there were few cars and the one in front was going too slowly, so I boldly attempted to overtake. Unfortunately, I overtook on a solid line section instead of a dashed one, and was immediately caught by a policeman hiding over the hill. 🛑
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          The policeman told me to get out, led me to his car, sat me in the passenger seat, and bluntly asked if I intended to show my 'sincerity.' Yes, he was <span class="text-red-600 font-bold">asking for a bribe.</span> When I asked how much 'sincerity'(?) was required, he said 5,000 rubles (about 100,000 KRW at the time). 💸
        </p>
        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6 text-sm">
          According to stories I'd heard, <strong>'bribes also have student discounts.'</strong> So, thinking I had nothing to lose, I showed my student ID with the most pitiful expression possible and said, "I just rented this car for the holidays, and as a poor international student, I really have no money." Surprisingly, the policeman seemed to sympathize with my plight and cut the requested amount in half. 💳
        </div>
        <p class="leading-relaxed mb-6 text-slate-700">
          He then told me to leave the money on the vehicle's dashboard. The storytelling was that I had 'accidentally' left the money in the car, and the policeman 'coincidentally' found the ownerless money after I left. In this way, I was gradually but very surely adapting to the Russian ecosystem. 😒
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🦅 The Eagle of Oryol and the Strange 'Bellagio'</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Carrying the sting of being fleeced by the police, we entered downtown Oryol as darkness fell. In Oryol, we saw the grand Uspensky Cathedral and the massive eagle statue, the symbol of the city (Oryol means eagle in Russian). 🦅 But if I had to pick the most memorable place in Oryol, it wouldn't be a famous tourist spot, but a very strange restaurant called 'Bellagio.'
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          The interior of the restaurant, which claimed to be an Italian specialty place, looked like a cabaret, and there were no other customers. The owner asked if she could perform(?) songs and dances while taking our order. Thanks to our firm refusal, wanting a quiet meal, we avoided an even weirder situation. 💃 Dancing and singing by a female owner in an empty, cabaret-like restaurant... Plus, the food wasn't great, so I wanted to get out of there as quickly as possible.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🛡️ Tanks of Kursk and the Fairytale Town of Yelets</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Leaving Oryol, we drove further south to Kursk. Kursk is a historical city where the largest tank battle in human history took place during World War II. It was fascinating to see actual tanks lined up along the road from the very entrance to the city, testifying to the intensity of the time. 🚜
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          Turning north again toward Moscow, we decided to stop for a meal in a small town called Yelets. To our surprise, this small town we entered without expectations looked like a small European fairytale village, with charming buildings, clean streets, and ancient churches that made us gasp in admiration. 🏘️ It's hard to express the joy of finding such an unexpected treasure during a road trip. ✨
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏠 Tolstoy's Breath and Shashlik in the Snow</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The trip wound down with a visit to Leo Tolstoy's birthplace in Yasnaya Polyana. On the last night of the trip, we had a barbecue party at our accommodation to celebrate completing the journey without getting 'hit'(?) by anything. 🍖
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          In the cold of -10°C with an occasional biting wind, the taste of greasy Shashlik (skewered meat) grilled over a crackling fire was fantastic enough to make us forget all the hardships. The night faded away as we reminisced about the various episodes of our arduous journey. 🔥
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💸 The 'Generous' Twist of Speeding Tickets</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Returning to Tula, we handed back the rental car and boarded the 'Elektrichka' back to Moscow. Returning to Moscow, I found myself chuckling at how even the murderous traffic and stale air felt welcoming after those few days, making me realize how much I'd grown fond of this city. 🏙️
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          A few days after returning to Moscow, a stack of speeding tickets arrived at my house. I'd been caught by speeding cameras four times! It was the price of being so absorbed in the continental roads that I forgot about the existence of enforcement cameras. 📸 Two were for exceeding the limit by 20 km/h, and two were for exceeding it by 40 km/h. I was terrified of a fine bomb, but the total fine for all four cases was only about 50,000 to 60,000 KRW, which was surprisingly cheap. Plus, there was a 'generous' rule where the fine was reduced by 50% if paid within 20 days of receiving the notice. Russia is truly a country of surprises, for better or worse, the deeper you dig. 🇷🇺
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          Looking back, it was a series of tight schedules and unpredictable events, but I want to take this opportunity to express my deep gratitude to our group who enjoyed this journey completely without a single word of complaint. These memories of laughing and crying while running together on unfamiliar icy roads remain deeply engraved in my heart under the name of 'memories.' 💖
        </p>
      `,
        en: `
        <p class="leading-relaxed mb-6 text-slate-700">
          When I plan a trip, I tend to pack the schedule as tightly as possible. P and S, who had been close friends since the preparatory faculty, were curious about our (or rather, my) intense way of traveling. Since there was a holiday, they fearlessly decided to join us when I said I was planning a trip to southern Moscow. 🚗 While there's a romance to traveling by train, this time we decided to rent a car to explore more nooks and crannies. Honestly, I've always had a dream of driving on Russia's rough roads myself. Of course, I didn't expect driving on this continent to be a smooth romantic journey.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚉 Arrival in Tula and Debut as a Continental Driver</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          We left home early in the morning, met P and S at the subway station, and boarded the 'Elektrichka' (suburban train). I thought everyone would pass out on the train since we woke up at the crack of dawn, but to my surprise, they were wide awake, playing cards and talking. Before we knew it, we arrived in Tula, the city famous for Leo Tolstoy's estate. 🚂
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          As soon as we got off at the station, we went to pick up the rental car we had reserved. It had been a while since I'd driven, and with Russia's notoriously rough roads and 'bear-like' drivers who could pop out from anywhere, I was scared enough to have sweaty palms at first. But I gradually adapted and was becoming a true continental driver. Having a car definitely made sightseeing much more convenient. I had visited Tula briefly on a group tour before, but this time I was able to thoroughly see the sights I'd missed, including the Tula Kremlin. 🏰
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">👮‍♂️ Overtaking on a Solid Line and the 'Student Bribe Discount'</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Our rental car then headed to Oryol, a city famous as a battlefield during World War II. I was stepping on the gas and driving along when I saw there were few cars and the one in front was going too slowly, so I boldly attempted to overtake. Unfortunately, I overtook on a solid line section instead of a dashed one, and was immediately caught by a policeman hiding over the hill. 🛑
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          The policeman told me to get out, led me to his car, sat me in the passenger seat, and bluntly asked if I intended to show my 'sincerity.' Yes, he was <span class="text-red-600 font-bold">asking for a bribe.</span> When I asked how much 'sincerity'(?) was required, he said 5,000 rubles (about 100,000 KRW at the time). 💸
        </p>
        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6 text-sm">
          According to stories I'd heard, <strong>'bribes also have student discounts.'</strong> So, thinking I had nothing to lose, I showed my student ID with the most pitiful expression possible and said, "I just rented this car for the holidays, and as a poor international student, I really have no money." Surprisingly, the policeman seemed to sympathize with my plight and cut the requested amount in half. 💳
        </div>
        <p class="leading-relaxed mb-6 text-slate-700">
          He then told me to leave the money on the vehicle's dashboard. The storytelling was that I had 'accidentally' left the money in the car, and the policeman 'coincidentally' found the ownerless money after I left. In this way, I was gradually but very surely adapting to the Russian ecosystem. 😒
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🦅 The Eagle of Oryol and the Strange 'Bellagio'</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Carrying the sting of being fleeced by the police, we entered downtown Oryol as darkness fell. In Oryol, we saw the grand Uspensky Cathedral and the massive eagle statue, the symbol of the city (Oryol means eagle in Russian). 🦅 But if I had to pick the most memorable place in Oryol, it wouldn't be a famous tourist spot, but a very strange restaurant called 'Bellagio.'
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          The interior of the restaurant, which claimed to be an Italian specialty place, looked like a cabaret, and there were no other customers. The owner asked if she could perform(?) songs and dances while taking our order. Thanks to our firm refusal, wanting a quiet meal, we avoided an even weirder situation. 💃 Dancing and singing by a female owner in an empty, cabaret-like restaurant... Plus, the food wasn't great, so I wanted to get out of there as quickly as possible.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🛡️ Tanks of Kursk and the Fairytale Town of Yelets</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Leaving Oryol, we drove further south to Kursk. Kursk is a historical city where the largest tank battle in human history took place during World War II. It was fascinating to see actual tanks lined up along the road from the very entrance to the city, testifying to the intensity of the time. 🚜
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          Turning north again toward Moscow, we decided to stop for a meal in a small town called Yelets. To our surprise, this small town we entered without expectations looked like a small European fairytale village, with charming buildings, clean streets, and ancient churches that made us gasp in admiration. 🏘️ It's hard to express the joy of finding such an unexpected treasure during a road trip. ✨
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏠 Tolstoy's Breath and Shashlik in the Snow</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The trip wound down with a visit to Leo Tolstoy's birthplace in Yasnaya Polyana. On the last night of the trip, we had a barbecue party at our accommodation to celebrate completing the journey without getting 'hit'(?) by anything. 🍖
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          In the cold of -10°C with an occasional biting wind, the taste of greasy Shashlik (skewered meat) grilled over a crackling fire was fantastic enough to make us forget all the hardships. The night faded away as we reminisced about the various episodes of our arduous journey. 🔥
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💸 The 'Generous' Twist of Speeding Tickets</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Returning to Tula, we handed back the rental car and boarded the 'Elektrichka' back to Moscow. Returning to Moscow, I found myself chuckling at how even the murderous traffic and stale air felt welcoming after those few days, making me realize how much I'd grown fond of this city. 🏙️
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          A few days after returning to Moscow, a stack of speeding tickets arrived at my house. I'd been caught by speeding cameras four times! It was the price of being so absorbed in the continental roads that I forgot about the existence of enforcement cameras. 📸 Two were for exceeding the limit by 20 km/h, and two were for exceeding it by 40 km/h. I was terrified of a fine bomb, but the total fine for all four cases was only about 50,000 to 60,000 KRW, which was surprisingly cheap. Plus, there was a 'generous' rule where the fine was reduced by 50% if paid within 20 days of receiving the notice. Russia is truly a country of surprises, for better or worse, the deeper you dig. 🇷🇺
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          Looking back, it was a series of tight schedules and unpredictable events, but I want to take this opportunity to express my deep gratitude to our group who enjoyed this journey completely without a single word of complaint. These memories of laughing and crying while running together on unfamiliar icy roads remain deeply engraved in my heart under the name of 'memories.' 💖
        </p>
      `,
        en: `
        <p class="leading-relaxed mb-6 text-slate-700">
          Though the two cities were so incredibly different, perhaps this stark contrast is the real charm of the Russian continent that constantly draws me to unfamiliar places. Although it was a short trip taken on the excuse of a holiday, it was a journey that made me marvel once again at the diverse and beautiful forms that Russia holds. 🇷🇺
        </p>
      `,
      },
    },
  ],
};
