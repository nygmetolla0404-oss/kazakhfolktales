/* =====================================================================
   AI-GUIDE: FAIRY TALE MAP — content data
   20 Kazakh tales, epics and legends · English + Kazakh
   Each tale: map position, real photos (assets/img/w/*.jpg), cartoon heroes,
   story, letter, book-trailer, vocabulary, 3 tasks and AI-guide questions.
   ===================================================================== */

/* Adal Azamat values */
window.VALUES = {
  honesty:        { en: 'Honesty',          kk: 'Адалдық',          ico: '🤍', d: { en: 'Tell the truth and keep your word, even when it is hard.', kk: 'Шындықты айту, сөзде тұру — қиын болса да.' } },
  justice:        { en: 'Justice',          kk: 'Әділдік',          ico: '⚖️', d: { en: 'Treat everyone fairly and protect the weak.', kk: 'Барлығына әділ болу, әлсізді қорғау.' } },
  responsibility: { en: 'Responsibility',   kk: 'Жауапкершілік',    ico: '🛡️', d: { en: 'Care for your people, your land and your actions.', kk: 'Халқың, жерің және ісің үшін жауап беру.' } },
  diligence:      { en: 'Hard work',        kk: 'Еңбекқорлық',      ico: '🌾', d: { en: 'Success comes from work, skill and patience.', kk: 'Табыс — еңбек, шеберлік пен төзімнің жемісі.' } },
  patriotism:     { en: 'Love of homeland', kk: 'Отансүйгіштік',    ico: '🇰🇿', d: { en: 'Love and protect your native land.', kk: 'Туған жерді сүю және қорғау.' } },
  respect:        { en: 'Respect',          kk: 'Құрмет',           ico: '🤝', d: { en: 'Respect elders, traditions and other people.', kk: 'Үлкенді, салт-дәстүрді, өзгені құрметтеу.' } },
  courage:        { en: 'Courage',          kk: 'Батылдық',         ico: '🦁', d: { en: 'Be brave and do the right thing.', kk: 'Батыл болып, дұрыс іс жасау.' } },
  wisdom:         { en: 'Wisdom',           kk: 'Даналық',          ico: '🦉', d: { en: 'Think first, speak wisely, learn all your life.', kk: 'Алдымен ойлау, дана сөйлеу, өмір бойы білім алу.' } },
  kindness:       { en: 'Kindness',         kk: 'Мейірімділік',     ico: '💛', d: { en: 'Help others; kindness always comes back.', kk: 'Өзгеге көмектесу; жақсылық қайтады.' } },
  loyalty:        { en: 'Faithfulness',     kk: 'Сөзге беріктік',   ico: '💍', d: { en: 'Stay true to your friends, family and promises.', kk: 'Досқа, отбасыға, уәдеге адал болу.' } },
  unity:          { en: 'Unity',            kk: 'Бірлік',           ico: '🔗', d: { en: 'Together we are strong.', kk: 'Бірлік бар жерде — тірлік бар.' } },
  gratitude:      { en: 'Gratitude',        kk: 'Ризашылық',        ico: '🙏', d: { en: 'Say thank you and repay good with good.', kk: 'Жақсылыққа жақсылықпен жауап беру.' } }
};

/* captions for real photos (Wikimedia Commons, see credits) */
window.IMG_CAP = {
  kozy:      { en: 'Kozy Korpesh – Bayan Sulu mausoleum near Ayagoz (Abai region)', kk: 'Аягөз маңындағы Қозы Көрпеш – Баян сұлу кесенесі' },
  zhibek:    { en: 'Kazakhstan stamp “Kyz Zhibek”, 2020', kk: '«Қыз Жібек» пошта маркасы, 2020' },
  zhibek2:   { en: 'Stamp sheet for the 50th anniversary of the film “Kyz Zhibek” (1970)', kk: '«Қыз Жібек» фильмінің 50 жылдығына арналған марка' },
  alpamys:   { en: 'Alpamys on a commemorative coin', kk: 'Мерейтойлық монетадағы Алпамыс' },
  alpamys2:  { en: 'Stamp “Alpamysh”, 1988 — the epic is shared by Turkic peoples', kk: '«Алпамыс» маркасы, 1988 — түркі халықтарына ортақ жыр' },
  tostik:    { en: 'Er Töstik — illustration', kk: 'Ер Төстік — иллюстрация' },
  aldar:     { en: 'Aldar Köse on a Kazakh silver coin, 2011', kk: 'Алдар Көсе — күміс монета, 2011' },
  aldar2:    { en: 'Coin series “Kazakh fairy tales”', kk: '«Қазақ ертегілері» монеталар сериясы' },
  stamp437:  { en: 'Kazakhstan stamp with folk tale heroes', kk: 'Ертегі кейіпкерлері бейнеленген марка' },
  swallow:   { en: 'Stamp of a Kazakh folk tale, 2017', kk: 'Қазақ ертегісіне арналған марка, 2017' },
  kunikei:   { en: 'The Singing Dune, Altyn-Emel', kk: 'Әнші құм, Алтын-Емел' },
  jochi:     { en: 'Mausoleum of Jochi Khan, Ulytau (13th c.)', kk: 'Жошы хан кесенесі, Ұлытау (XIII ғ.)' },
  jochi2:    { en: 'Jochi Khan mausoleum — the place of the legend “Aksak Kulan”', kk: 'Жошы хан кесенесі — «Ақсақ құлан» аңызының орны' },
  edige:     { en: 'Edige’s campaign in a 16th‑century chronicle', kk: 'XVI ғ. шежіредегі Едіге жорығы' },
  koblandy:  { en: 'Stamp “Koblandy Batyr”, 1988', kk: '«Қобыланды батыр» маркасы, 1988' },
  kambar:    { en: 'Kambar Batyr — illustration', kk: 'Қамбар батыр — иллюстрация' },
  manas:     { en: 'Manas monument — stamp, 1990', kk: 'Манас ескерткіші — марка, 1990' },
  dombyra:   { en: 'The dombyra of the poet Zhambyl Zhabayev', kk: 'Жамбыл Жабаевтың домбырасы' },
  dombyra2:  { en: 'Kazakh instruments: sybyzgy, dombyra, kobyz, dauylpaz', kk: 'Қазақ аспаптары: сыбызғы, домбыра, қобыз, дауылпаз' },
  baiterek:  { en: 'Baiterek monument, Astana', kk: 'Бәйтерек монументі, Астана' },
  samruk:    { en: 'Samruk bird on the “Kazakh Eli” monument, Astana', kk: '«Қазақ елі» монументіндегі Самұрық құс' },
  kokbori:   { en: 'Tamgaly petroglyphs (UNESCO)', kk: 'Тамғалы петроглифтері (ЮНЕСКО)' },
  tamgaly2:  { en: 'Ancient rock art: horses and people', kk: 'Ежелгі жартас суреттері: жылқы мен адам' },
  shepherd:  { en: 'A Kazakh shepherd with his horse and dogs', kk: 'Атты, иттері бар қазақ шопаны' },
  steppe:    { en: 'Horses in the Kazakh steppe', kk: 'Қазақ даласындағы жылқылар' },
  ishim:     { en: 'Horses in the Ishim river valley', kk: 'Есіл өзені алқабындағы жылқылар' },
  yurt:      { en: 'Kazakh yurts in the steppe', kk: 'Даладағы киіз үйлер' },
  shanyrak:  { en: 'Shanyrak — the crown of the yurt', kk: 'Шаңырақ — киіз үйдің төбесі' },
  berkut:    { en: 'Berkutchi — eagle hunter (museum, Pavlodar)', kk: 'Бүркітші (Павлодар мұражайы)' },
  eaglehunter:{ en: 'Eagle hunter with a golden eagle', kk: 'Бүркітші және бүркіт' },
  bozzhyra:  { en: 'Bozzhyra, Mangystau — land of the Underworld legends', kk: 'Бозжыра, Маңғыстау' },
  syrdarya:  { en: 'The Syr Darya river', kk: 'Сырдария өзені' },
  altynemel: { en: 'Altyn-Emel national park', kk: 'Алтын-Емел ұлттық паркі' }
};

/* avatar keys:  g: m|f, age: kid|young|adult|old, hat: borik|saukele|takiya|helmet|kalpak|crown|kimeshek|none|bald,
   coat: color, beard: none|mustache|short|long|white, creature: emoji (for animals) */
window.STORIES = [
{
  id: 'kozy', type: 'epic', lon: 80.44, lat: 47.97, biome: 'steppe', mark: 'mausoleum', color: '#8e2b3c',
  en: 'Kozy Korpesh and Bayan Sulu', kk: 'Қозы Көрпеш – Баян сұлу',
  place: { en: 'Ayagoz, Abai region (East Kazakhstan)', kk: 'Аягөз, Абай облысы' },
  value: 'loyalty', imgs: ['kozy', 'steppe', 'yurt'],
  sum: { en: 'A timeless love story of Kozy Korpesh and Bayan Sulu, who stayed faithful to each other and to a promise made before they were born.',
         kk: 'Туылмай жатып атастырылған Қозы Көрпеш пен Баян сұлудың бір-біріне деген адал махаббаты туралы жыр.' },
  story: [
    'Two rich friends, Sarybai and Karabai, went hunting together. They made a promise: “If one of us has a son and the other has a daughter, they will marry.”',
    'Sarybai died during the hunt, and soon his son Kozy Korpesh was born. Karabai’s daughter was Bayan, the most beautiful girl in the steppe.',
    'Karabai forgot his promise. He became greedy and moved far away with his herds. But Bayan never forgot Kozy. Kozy grew up and travelled across the steppe to find her.',
    'The strong and jealous Kodar wanted to marry Bayan, and he killed Kozy. Bayan punished Kodar and stayed with Kozy for ever. People say the old mausoleum near Ayagoz is their resting place. Even the poet Alexander Pushkin wrote down part of this legend in 1833.'
  ],
  chars: [
    { n: { en: 'Kozy Korpesh', kk: 'Қозы Көрпеш' }, d: 'A brave and faithful young man who crossed the steppe to find his love.', a: { g: 'm', age: 'young', hat: 'borik', coat: '#2f4f7f' }, line: 'A true promise is stronger than any distance.' },
    { n: { en: 'Bayan Sulu', kk: 'Баян сұлу' }, d: 'A beautiful, clever and loyal girl who kept her word.', a: { g: 'f', age: 'young', hat: 'saukele', coat: '#b3262e' }, line: 'My heart remembers every promise.' },
    { n: { en: 'Karabai', kk: 'Қарабай' }, d: 'Bayan’s rich father who broke his promise because of greed.', a: { g: 'm', age: 'old', hat: 'kalpak', coat: '#5a4630', beard: 'white' }, line: 'I thought my herds were more important than my word...' },
    { n: { en: 'Kodar', kk: 'Қодар' }, d: 'A strong but jealous man who chose evil.', a: { g: 'm', age: 'adult', hat: 'kalpak', coat: '#3a3a2a', beard: 'short' }, line: 'Strength without honesty brings only trouble.' }
  ],
  letter: { from: 'Bayan Sulu', text: 'Dear friend,\n\nI am writing to you from the quiet steppe near the Ayagoz river. Here the wind still sings our story. My father promised that I would marry Kozy, but later he forgot his word because he loved his herds more. I never forgot. A promise is like a seed: if you keep it, it grows into trust.\n\nIn your life, you also make promises — to your friends, your parents and your teachers. Please keep them, even small ones.\n\nTell me, what promise is the most important for you?\n\nWith a faithful heart,\nBayan Sulu' },
  trailer: ['In the endless steppe of East Kazakhstan…', 'two friends made a promise before their children were born.', 'But greed can make people forget their word.', 'Will love be stronger than distance, gold and jealousy?', 'Kozy Korpesh and Bayan Sulu. A legend of faithful hearts.'],
  vocab: [['promise', 'уәде'], ['faithful', 'адал'], ['greedy', 'сараң, ашкөз'], ['jealous', 'қызғаншақ'], ['herd', 'мал табыны']],
  quiz: [
    { q: 'What did Sarybai and Karabai promise?', o: ['That their children would marry', 'To build a city', 'To give away their horses'], a: 0 },
    { q: 'Why did Karabai move away?', o: ['He was afraid of wolves', 'He became greedy and forgot his promise', 'He wanted to study'], a: 1 },
    { q: 'Where is the mausoleum of Kozy and Bayan?', o: ['Near Ayagoz', 'In Astana', 'In Mangystau'], a: 0 }
  ],
  speak: { p: 'Tell your partner about a promise you kept. Use: “I promised…”, “It was hard because…”, “I kept my word because…”.', k: ['promise', 'kept', 'word', 'because'] },
  guide: [
    { q: 'Why is it important to keep a promise?', k: ['trust', 'honest', 'friend', 'word', 'respect'], m: 'It is important because people can trust you. When you keep your word, you are an honest person.' },
    { q: 'Who is the most faithful character in this story? Why?', k: ['bayan', 'kozy', 'faithful', 'love', 'promise'], m: 'Bayan Sulu is the most faithful, because she never forgot her promise to Kozy.' }
  ]
},
{
  id: 'zhibek', type: 'epic', lon: 51.9, lat: 50.6, biome: 'river', mark: 'yurts', color: '#b5473a',
  en: 'Kyz Zhibek', kk: 'Қыз Жібек',
  place: { en: 'The Zhaiyk (Ural) river, West Kazakhstan', kk: 'Жайық өзені, Батыс Қазақстан' },
  value: 'respect', imgs: ['zhibek', 'zhibek2', 'yurt'],
  sum: { en: 'The lyrical epic about beautiful Zhibek and the brave Tolegen — a story of love, respect and loyalty on the banks of the Zhaiyk river.',
         kk: 'Жайық бойындағы сұлу Жібек пен ер Төлегеннің махаббаты, құрмет пен адалдық туралы лиро-эпостық жыр.' },
  story: [
    'Young Tolegen, the son of rich Bazarbai, rode to the Zhaiyk river to find a wise and beautiful bride. There he met Zhibek, the daughter of Syrlybai.',
    'Zhibek chose Tolegen because he was kind, polite and brave. Their families agreed to the wedding, and Tolegen rode home to bring gifts.',
    'On the way back, the jealous Bekezhan attacked Tolegen at a lonely spring and killed him. Zhibek waited for him for many years.',
    'When an enemy khan, Koren, tried to take Zhibek by force, Tolegen’s younger brother Sansyzbai came with his warriors and saved her. The famous film “Kyz Zhibek” (1970) made this story known all over the world.'
  ],
  chars: [
    { n: { en: 'Zhibek', kk: 'Жібек' }, d: 'A beautiful and wise girl whose name means “silk”.', a: { g: 'f', age: 'young', hat: 'saukele', coat: '#f1e4cf' }, line: 'A good person is known by kind words and respect.' },
    { n: { en: 'Tolegen', kk: 'Төлеген' }, d: 'A brave and polite young man who respected his parents.', a: { g: 'm', age: 'young', hat: 'borik', coat: '#2c5f8a' }, line: 'I asked my father’s blessing before my journey.' },
    { n: { en: 'Bekezhan', kk: 'Бекежан' }, d: 'A jealous rival who did a terrible thing.', a: { g: 'm', age: 'adult', hat: 'kalpak', coat: '#3b2f2f', beard: 'mustache' }, line: 'Jealousy made my heart dark.' },
    { n: { en: 'Sansyzbai', kk: 'Сансызбай' }, d: 'Tolegen’s brave younger brother.', a: { g: 'm', age: 'young', hat: 'helmet', coat: '#4a6a3a' }, line: 'I will protect my family’s honour.' }
  ],
  letter: { from: 'Zhibek', text: 'Dear friend,\n\nGreetings from the Zhaiyk river! In my aul, young people always greet elders first, listen carefully and speak politely. I chose Tolegen not for his wealth, but for his respect to people.\n\nRespect is like silk — soft, beautiful and strong. It connects people.\n\nHow do you show respect to your parents and grandparents? Please write and tell me about your family traditions.\n\nWith warm wishes,\nZhibek' },
  trailer: ['On the banks of the silver Zhaiyk river…', 'lived a girl as beautiful as silk.', 'A brave young man rode across the steppe to meet her.', 'But jealousy was waiting on the road…', 'Kyz Zhibek. The greatest love song of the Kazakh steppe.'],
  vocab: [['silk', 'жібек'], ['bride', 'қалыңдық'], ['polite', 'сыпайы'], ['blessing', 'бата'], ['rival', 'бәсекелес, қарсылас']],
  quiz: [
    { q: 'Where did Tolegen meet Zhibek?', o: ['By the Zhaiyk river', 'In the Altai mountains', 'In Turkistan'], a: 0 },
    { q: 'Why did Zhibek choose Tolegen?', o: ['He was rich', 'He was kind, polite and brave', 'He was a khan'], a: 1 },
    { q: 'Who saved Zhibek from Koren khan?', o: ['Bekezhan', 'Sansyzbai', 'Bazarbai'], a: 1 }
  ],
  speak: { p: 'Describe how people show respect in your family. Use: “In my family we always…”, “We never…”, “Respect means…”.', k: ['respect', 'always', 'family', 'elders'] },
  guide: [
    { q: 'What does respect mean to you?', k: ['listen', 'polite', 'elders', 'help', 'kind'], m: 'Respect means listening to others, being polite and helping elders.' },
    { q: 'Why was Bekezhan wrong?', k: ['jealous', 'kill', 'bad', 'wrong', 'evil'], m: 'Bekezhan was wrong because he was jealous and hurt another person.' }
  ]
},
{
  id: 'alpamys', type: 'epic', lon: 65.5, lat: 44.85, biome: 'river', mark: 'river', color: '#8a5a1f',
  en: 'Alpamys Batyr', kk: 'Алпамыс батыр',
  place: { en: 'The Syr Darya river, South Kazakhstan', kk: 'Сырдария бойы, Оңтүстік Қазақстан' },
  value: 'patriotism', imgs: ['alpamys', 'alpamys2', 'syrdarya'],
  sum: { en: 'An ancient heroic epic about Alpamys, who protected his people and his homeland and never gave up, even in a deep prison pit.',
         kk: 'Елі мен жерін қорғаған, зынданда да мойымаған Алпамыс батыр туралы көне батырлық жыр.' },
  story: [
    'Old Baibori and his wife had no children for many years. At last they had a son, Alpamys, and a daughter, Karlygash. Alpamys grew up very fast and became strong.',
    'Alpamys rode his horse Baishubar to a faraway land to marry his bride Gulbarshyn. He won the horse race, the archery and the wrestling contests.',
    'An enemy khan, Taishyk, tricked Alpamys and threw him into a deep pit — a zindan. For seven years he was in prison, but he never lost hope.',
    'With the help of kind people, Alpamys escaped. He came home, saved his family from a cruel servant who had taken power, and brought peace back to his land.'
  ],
  chars: [
    { n: { en: 'Alpamys', kk: 'Алпамыс' }, d: 'A mighty hero who loved his homeland.', a: { g: 'm', age: 'young', hat: 'helmet', coat: '#7a1f1f' }, line: 'My strength belongs to my people.' },
    { n: { en: 'Gulbarshyn', kk: 'Гүлбаршын' }, d: 'Alpamys’s wise and faithful bride.', a: { g: 'f', age: 'young', hat: 'saukele', coat: '#2a7a6f' }, line: 'I believed that he would come back.' },
    { n: { en: 'Karlygash', kk: 'Қарлығаш' }, d: 'Alpamys’s kind sister.', a: { g: 'f', age: 'kid', hat: 'takiya', coat: '#c76a2a' }, line: 'My brother never gives up!' },
    { n: { en: 'Baishubar', kk: 'Байшұбар' }, d: 'The fast and loyal horse of Alpamys.', a: { creature: '🐎', coat: '#6b4a2a' }, line: '(neighs) We will race like the wind!' }
  ],
  letter: { from: 'Alpamys', text: 'Dear young friend,\n\nI am writing to you from the banks of the Syr Darya. When I was in the dark zindan, I thought about my homeland every day: the smell of the steppe, the voice of my mother, the songs of my people. That gave me strength.\n\nLove for your homeland starts with small things: keep your school clean, help your village, learn the history of your land.\n\nWhat do you love most about your native place? Write to me!\n\nYour friend,\nAlpamys Batyr' },
  trailer: ['Long ago, by the great Syr Darya…', 'a hero was born with the strength of a hundred men.', 'He won every contest… but fell into a deep, dark pit.', 'Seven years. No light. Only hope.', 'Alpamys Batyr. The hero who never gave up.'],
  vocab: [['hero', 'батыр'], ['homeland', 'туған жер, Отан'], ['prison pit', 'зындан'], ['contest', 'жарыс, сайыс'], ['hope', 'үміт']],
  quiz: [
    { q: 'What was the name of Alpamys’s horse?', o: ['Baishubar', 'Tulpar', 'Kerkula'], a: 0 },
    { q: 'How long was Alpamys in the zindan?', o: ['Seven days', 'Seven years', 'Seventy years'], a: 1 },
    { q: 'What gave Alpamys strength in prison?', o: ['Gold', 'Thoughts about his homeland and family', 'A magic sword'], a: 1 }
  ],
  speak: { p: 'Talk about your native village or town. Use: “My homeland is…”, “I love it because…”, “I want to…”.', k: ['homeland', 'love', 'because', 'village'] },
  guide: [
    { q: 'How can a student show love for the homeland?', k: ['help', 'clean', 'learn', 'history', 'study', 'nature'], m: 'A student can study well, learn the history of the country, keep nature clean and help people.' },
    { q: 'What would you do if you were Alpamys in the zindan?', k: ['hope', 'wait', 'think', 'escape', 'strong'], m: 'I would never lose hope. I would think about my family and look for a way to escape.' }
  ]
},
{
  id: 'tostik', type: 'tale', lon: 53.6, lat: 43.9, biome: 'canyon', mark: 'cave', color: '#3d5c8a',
  en: 'Er Töstik', kk: 'Ер Төстік',
  place: { en: 'Mangystau — land of canyons and the Underworld', kk: 'Маңғыстау — шатқалдар мен жер асты әлемі' },
  value: 'courage', imgs: ['tostik', 'bozzhyra', 'samruk'],
  sum: { en: 'The most famous Kazakh magic tale: brave Er Töstik travels to the Underworld with his talking horse Shalkuiryk and returns on the wings of the giant bird Samruk.',
         kk: 'Ер Төстіктің тұлпары Шалқұйрықпен жер асты еліне сапары және Самұрық құстың көмегімен жер бетіне оралуы туралы ертегі.' },
  story: [
    'Old Ernazar had nine sons, but eight of them went away to find pastures. His youngest son, Töstik, grew up fast and became a strong hero. He found his brothers and brought them home.',
    'Töstik married wise Kenzhekey. His magic horse Shalkuiryk could talk and give good advice. On their journey they met wonderful helpers: Zhelayak, who ran faster than the wind, and Sakkulak, who could hear everything in the world.',
    'Because of an evil witch, Töstik fell into the Underworld. There he met the Snake King and passed many difficult tests.',
    'Töstik saved the babies of the giant bird Samruk from a dragon. To thank him, Samruk carried him back to the Earth. When the food ended on the way, Töstik even gave a piece of his own leg to feed the tired bird. Samruk healed him, and Töstik came home to his family.'
  ],
  chars: [
    { n: { en: 'Er Töstik', kk: 'Ер Төстік' }, d: 'A brave hero who is never afraid of difficulties.', a: { g: 'm', age: 'young', hat: 'borik', coat: '#a33b2a' }, line: 'A brave heart can find a way out of any darkness.' },
    { n: { en: 'Kenzhekey', kk: 'Кенжекей' }, d: 'Töstik’s clever and faithful wife.', a: { g: 'f', age: 'young', hat: 'takiya', coat: '#3b6ea5' }, line: 'I will wait for you, however long it takes.' },
    { n: { en: 'Shalkuiryk', kk: 'Шалқұйрық' }, d: 'A wise talking horse.', a: { creature: '🐎', coat: '#e9e2d0' }, line: 'Listen to good advice, my friend!' },
    { n: { en: 'Samruk', kk: 'Самұрық' }, d: 'A giant magic bird who repays kindness.', a: { creature: '🦅', coat: '#d9a43a' }, line: 'You saved my children — now I will save you.' }
  ],
  letter: { from: 'Er Töstik', text: 'Hello, my brave friend!\n\nI am writing from the canyons of Mangystau, where the stones remember my journey to the Underworld. I was afraid many times. But courage is not “no fear”. Courage is doing the right thing even when you are afraid.\n\nI also learned that friends make us stronger. Without Shalkuiryk, Zhelayak and Samruk, I could not come home.\n\nWhen were you brave? Tell me your story!\n\nYour friend,\nEr Töstik' },
  trailer: ['Deep under the Earth lies a kingdom of darkness…', 'One brave boy and his talking horse…', 'giants, witches, a Snake King…', 'and a bird bigger than the sky.', 'Er Töstik. Courage that opens every door.'],
  vocab: [['brave', 'батыл, ер'], ['Underworld', 'жер асты әлемі'], ['witch', 'мыстан, жалмауыз'], ['advice', 'кеңес'], ['to repay', 'қарымтасын қайтару']],
  quiz: [
    { q: 'What was the name of Töstik’s talking horse?', o: ['Shalkuiryk', 'Baishubar', 'Taiburyl'], a: 0 },
    { q: 'Who carried Töstik back to the Earth?', o: ['A dragon', 'The bird Samruk', 'Zhelayak'], a: 1 },
    { q: 'What can Zhelayak do?', o: ['Hear everything', 'Run faster than the wind', 'Fly'], a: 1 }
  ],
  speak: { p: 'Tell about a time when you were brave. Use: “Once I…”, “I was afraid, but…”, “Finally…”.', k: ['brave', 'afraid', 'but', 'finally'] },
  guide: [
    { q: 'What is courage?', k: ['afraid', 'fear', 'right', 'brave', 'help'], m: 'Courage is doing the right thing even when you are afraid.' },
    { q: 'Why did Samruk help Töstik?', k: ['saved', 'children', 'babies', 'chicks', 'thank', 'kind'], m: 'Samruk helped him because Töstik saved her babies from the dragon.' }
  ]
},
{
  id: 'kendebai', type: 'tale', lon: 66.5, lat: 53.2, biome: 'forest', mark: 'forest', color: '#4f6b2a',
  en: 'Kendebai and His Horse Kerkula', kk: 'Керқұла атты Кендебай',
  place: { en: 'Forest-steppe of North Kazakhstan', kk: 'Солтүстік Қазақстанның орманды даласы' },
  value: 'responsibility', imgs: ['ishim', 'steppe', 'shanyrak'],
  sum: { en: 'A magic tale about Kendebai, a boy who grew into a hero, and his wise chestnut horse Kerkula, who together protected people from monsters.',
         kk: 'Батыр болып өскен Кендебай мен оның ақылды тұлпары Керқұланың халықты қорғауы туралы қиял-ғажайып ертегі.' },
  story: [
    'An old man and an old woman dreamed of a child. At last they had a son, Kendebai. He grew not by days but by hours, and soon he was a strong young man.',
    'Kendebai found a thin, weak foal and cared for it every day. The foal became Kerkula — a magic horse that could understand people and fly over the hills.',
    'A terrible monster and an evil witch frightened the auls and took away people’s cattle. Nobody dared to fight them.',
    'Kendebai felt responsible for his people. With Kerkula’s help and advice he defeated the monsters and returned the cattle. Versions of this tale differ in different regions, but the main idea is the same: a hero takes care of others.'
  ],
  chars: [
    { n: { en: 'Kendebai', kk: 'Кендебай' }, d: 'A strong boy who feels responsible for his people.', a: { g: 'm', age: 'kid', hat: 'borik', coat: '#5e7f2a' }, line: 'If not me, then who will help?' },
    { n: { en: 'Kerkula', kk: 'Керқұла' }, d: 'A clever magic horse who was once a weak foal.', a: { creature: '🐎', coat: '#b5652a' }, line: 'You cared for me — now I care for you.' },
    { n: { en: 'The Witch', kk: 'Жалмауыз кемпір' }, d: 'An evil witch who frightened the auls.', a: { g: 'f', age: 'old', hat: 'kimeshek', coat: '#3a3a3a' }, line: 'Nobody can stop me! …or can they?' }
  ],
  letter: { from: 'Kendebai', text: 'Dear friend,\n\nGreetings from the green forests of the North! When I was little, I found a weak foal. Everybody laughed: “It is useless!” But I fed it, cleaned it and talked to it every day. That foal became Kerkula, the best horse in the world.\n\nResponsibility means taking care of something — a pet, a younger brother, your homework, your school.\n\nWhat are you responsible for at home or at school? Write back to me!\n\nYour friend,\nKendebai' },
  trailer: ['A little boy. A weak little foal.', 'Nobody believed in them.', 'Then monsters came to the steppe…', 'and only one hero rode out to meet them.', 'Kendebai and Kerkula. A hero cares for others.'],
  vocab: [['foal', 'құлын'], ['to take care of', 'қамқор болу'], ['monster', 'құбыжық, дәу'], ['cattle', 'мал'], ['responsible', 'жауапты']],
  quiz: [
    { q: 'What was Kerkula at first?', o: ['A weak foal', 'A camel', 'An eagle'], a: 0 },
    { q: 'How did Kendebai grow?', o: ['Very slowly', 'Not by days but by hours', 'He never grew'], a: 1 },
    { q: 'Why did Kendebai fight the monsters?', o: ['For gold', 'Because he felt responsible for his people', 'Because the khan ordered'], a: 1 }
  ],
  speak: { p: 'Talk about your duties at home. Use: “I am responsible for…”, “Every day I…”, “It is important because…”.', k: ['responsible', 'every day', 'important', 'help'] },
  guide: [
    { q: 'What does it mean to be responsible?', k: ['care', 'duty', 'help', 'promise', 'homework'], m: 'To be responsible means to take care of your duties and other people.' },
    { q: 'How did Kendebai change the weak foal?', k: ['fed', 'care', 'clean', 'love', 'every day'], m: 'He fed it, cleaned it and cared for it every day, so it became a strong horse.' }
  ]
},
{
  id: 'aldar', type: 'tale', lon: 69.4, lat: 42.6, biome: 'steppe', mark: 'yurts', color: '#c08a2a',
  en: 'Aldar Köse', kk: 'Алдар Көсе',
  place: { en: 'Southern steppes (Turkistan region)', kk: 'Оңтүстік даласы (Түркістан облысы)' },
  value: 'justice', imgs: ['aldar', 'aldar2', 'stamp437'],
  sum: { en: 'Funny tales about clever Aldar Köse, the beardless trickster who outwits greedy rich men and helps poor people.',
         kk: 'Сараң байларды алдап, кедейлерге көмектескен тапқыр Алдар Көсе туралы күлкілі ертегілер.' },
  story: [
    'Aldar Köse was a poor man without a beard (“köse” means beardless). He had nothing but an old coat full of holes and a very quick mind.',
    'The greedy rich man Shygaibai never shared his food or warm clothes with anyone. One cold day Aldar told him: “My coat has a hundred holes — so the wind goes in and goes out, and I am always warm!” Shygaibai wanted the “magic” coat so much that he gave Aldar his own fur coat and horse.',
    'Aldar used his cleverness only against the greedy and the proud. He helped poor shepherds, old people and children.',
    'People laughed at his tricks, but they also learned a lesson: greed makes people foolish, and justice is more valuable than gold.'
  ],
  chars: [
    { n: { en: 'Aldar Köse', kk: 'Алдар Көсе' }, d: 'A clever and funny trickster who loves justice.', a: { g: 'm', age: 'adult', hat: 'kalpak', coat: '#8a6a3a' }, line: 'A sharp mind is warmer than a fur coat!' },
    { n: { en: 'Shygaibai', kk: 'Шығайбай' }, d: 'A greedy rich man who never shared.', a: { g: 'm', age: 'old', hat: 'borik', coat: '#5a1e5e', beard: 'long' }, line: 'Mine, mine, everything is mine!' }
  ],
  letter: { from: 'Aldar Köse', text: 'Salem, my clever friend!\n\nAldar Köse is writing to you — the man with no beard but with many ideas! People think I am a trickster. Yes, I play tricks, but only on greedy and unfair people. I never take from the poor, I always give.\n\nJustice means fairness: share, play by the rules and stand up for those who are weak.\n\nHave you ever seen an unfair situation? What did you do? Write to me and tell me!\n\nWith a smile,\nAldar Köse' },
  trailer: ['He has no beard, no money, and a coat full of holes…', 'but he has the quickest mind in the steppe!', 'Greedy rich men, beware!', 'Laughter is his weapon. Justice is his goal.', 'Aldar Köse. The trickster with a kind heart.'],
  vocab: [['trickster', 'алдаушы, айлакер'], ['greedy', 'сараң'], ['to share', 'бөлісу'], ['fair', 'әділ'], ['clever', 'тапқыр, ақылды']],
  quiz: [
    { q: 'What does “köse” mean?', o: ['Rich', 'Beardless', 'Tall'], a: 1 },
    { q: 'Whom did Aldar trick?', o: ['Poor shepherds', 'Greedy rich men', 'Children'], a: 1 },
    { q: 'What is the main lesson?', o: ['Greed makes people foolish', 'Never wear a coat', 'Always be rich'], a: 0 }
  ],
  speak: { p: 'Explain what is fair and unfair at school. Use: “It is fair when…”, “It is unfair when…”, “We should…”.', k: ['fair', 'unfair', 'should', 'share'] },
  guide: [
    { q: 'Is it good to trick people? When was Aldar right?', k: ['greedy', 'poor', 'help', 'justice', 'unfair'], m: 'Tricking people is usually wrong, but Aldar only tricked greedy people to help the poor.' },
    { q: 'What is justice?', k: ['fair', 'equal', 'share', 'rules', 'weak'], m: 'Justice is when everyone is treated fairly and the weak are protected.' }
  ]
},
{
  id: 'zhirenshe', type: 'legend', lon: 73.1, lat: 49.8, biome: 'steppe', mark: 'yurts', color: '#1f6a7a',
  en: 'Zhirenshe the Orator', kk: 'Жиренше шешен',
  place: { en: 'Saryarka — the Golden Steppe (Karaganda region)', kk: 'Сарыарқа (Қарағанды облысы)' },
  value: 'wisdom', imgs: ['shanyrak', 'yurt', 'stamp437'],
  sum: { en: 'Legends about Zhirenshe, a witty orator at the court of Zhanibek Khan, and his wise wife Karashash, who answered every riddle.',
         kk: 'Жәнібек хан тұсындағы тапқыр Жиренше шешен мен оның дана жары Қарашаш туралы аңыздар.' },
  story: [
    'In the times of Zhanibek Khan lived Zhirenshe, a poor man but a great orator. His words were sharp and wise, and he could solve any argument.',
    'One day Zhirenshe met a girl, Karashash, who was playing with other girls. He asked her difficult riddles, and she answered every one cleverly. Zhirenshe understood that wisdom is the best treasure, and he married her.',
    'The khan often tested Zhirenshe with strange tasks. With the help of Karashash’s advice, Zhirenshe always found a wise answer.',
    'People still remember his sayings. Kazakhs value “sheshendik söz” — the art of wise and beautiful speech.'
  ],
  chars: [
    { n: { en: 'Zhirenshe', kk: 'Жиренше' }, d: 'A witty orator who could win any debate.', a: { g: 'm', age: 'adult', hat: 'borik', coat: '#1f5a6a', beard: 'short' }, line: 'A good word opens the door, a bad word closes it.' },
    { n: { en: 'Karashash', kk: 'Қарашаш' }, d: 'A clever girl who answered every riddle.', a: { g: 'f', age: 'young', hat: 'takiya', coat: '#7a2a4a' }, line: 'Think three times, speak once.' },
    { n: { en: 'Zhanibek Khan', kk: 'Жәнібек хан' }, d: 'A khan who respected wise people.', a: { g: 'm', age: 'old', hat: 'crown', coat: '#6a4a1a', beard: 'long' }, line: 'A country is strong when its people are wise.' }
  ],
  letter: { from: 'Karashash', text: 'Dear friend,\n\nHere is a riddle for you: “What is lighter than a feather, but even the strongest man cannot hold it for long?” (Answer: your breath!)\n\nWisdom is not only knowing many facts. It is thinking before speaking, listening to others and choosing kind words. My husband Zhirenshe says: “A sharp word can hurt like an arrow.”\n\nDo you know any Kazakh or English proverb? Please send me your favourite one and explain it.\n\nWith wisdom and warmth,\nKarashash' },
  trailer: ['In the golden steppe of Saryarka…', 'words were sharper than swords.', 'A khan’s impossible tasks…', 'a girl who solved every riddle…', 'Zhirenshe the Orator. When wisdom speaks, everyone listens.'],
  vocab: [['orator', 'шешен'], ['riddle', 'жұмбақ'], ['wise', 'дана'], ['argument', 'дау, айтыс'], ['proverb', 'мақал']],
  quiz: [
    { q: 'Who was Zhirenshe?', o: ['A famous orator', 'A khan', 'A hunter'], a: 0 },
    { q: 'Why did Zhirenshe marry Karashash?', o: ['She was rich', 'She answered his riddles wisely', 'The khan told him'], a: 1 },
    { q: 'What does “sheshendik söz” mean?', o: ['A song', 'The art of wise speech', 'A horse race'], a: 1 }
  ],
  speak: { p: 'Say your favourite proverb in English and explain it. Use: “My favourite proverb is…”, “It means…”, “For example…”.', k: ['proverb', 'means', 'example'] },
  guide: [
    { q: 'Here is a riddle: “I have no legs but I run, I have no mouth but I talk.” What am I?', k: ['river', 'water'], m: 'A river! It runs and “talks” with its sound.' },
    { q: 'Why is it important to think before you speak?', k: ['hurt', 'kind', 'words', 'wise', 'feel'], m: 'Because words can hurt people. A wise person chooses kind words.' }
  ]
},
{
  id: 'ayaz', type: 'tale', lon: 76.9, lat: 52.3, biome: 'river', mark: 'yurts', color: '#2a4a7a',
  en: 'Ayaz the Wise Judge', kk: 'Аяз би',
  place: { en: 'The Irtysh steppe (Pavlodar region)', kk: 'Ертіс өңірі (Павлодар облысы)' },
  value: 'honesty', imgs: ['shepherd', 'steppe', 'shanyrak'],
  sum: { en: 'A poor shepherd boy, Ayaz, becomes a wise judge (bi) but never forgets where he came from — a lesson of honesty and modesty.',
         kk: 'Кедей шопан бала Аяздың әділ би болуы және өзінің кім екенін ұмытпауы — адалдық пен кішіпейілділік туралы ертегі.' },
  story: [
    'Ayaz was a poor shepherd boy, but he was honest and very clever. He solved difficult problems that even old people could not solve.',
    'The khan heard about him and made Ayaz his adviser and judge — “bi”. Ayaz judged fairly and helped many people.',
    'Envious courtiers whispered to the khan: “Ayaz hides a chest of stolen gold!” The khan ordered to open the chest.',
    'Inside there was no gold — only Ayaz’s old shepherd coat, his staff and a note: “Ayaz, know who you are!” (“Ayaz, äliñdi bil!”). The khan understood that Ayaz was honest and modest, and respected him even more.'
  ],
  chars: [
    { n: { en: 'Ayaz bi', kk: 'Аяз би' }, d: 'An honest judge who remembers his roots.', a: { g: 'm', age: 'young', hat: 'borik', coat: '#2a4a7a' }, line: 'Never forget where you come from.' },
    { n: { en: 'The Khan', kk: 'Хан' }, d: 'A ruler who learned to trust honesty.', a: { g: 'm', age: 'old', hat: 'crown', coat: '#7a1a2a', beard: 'long' }, line: 'An honest adviser is worth more than gold.' }
  ],
  letter: { from: 'Ayaz bi', text: 'Dear friend,\n\nMy old shepherd coat still lies in my chest. Every morning I look at it and say to myself: “Ayaz, know who you are!” It helps me to stay honest and modest.\n\nWhen people become successful, sometimes they forget their friends and their roots. Please, never forget the people who helped you.\n\nWho helped you to become who you are today? Write me a few lines about this person.\n\nHonestly yours,\nAyaz bi' },
  trailer: ['A poor shepherd boy with an honest heart…', 'became the wisest judge of the khan.', 'Envious eyes watched him. Secret whispers…', 'What was hidden in his chest?', 'Ayaz bi. Know who you are.'],
  vocab: [['judge', 'би, сот'], ['honest', 'адал'], ['modest', 'кішіпейіл'], ['chest', 'сандық'], ['envious', 'күншіл']],
  quiz: [
    { q: 'Who was Ayaz at first?', o: ['A poor shepherd', 'A khan’s son', 'A merchant'], a: 0 },
    { q: 'What was in Ayaz’s chest?', o: ['Gold', 'His old coat and staff', 'Weapons'], a: 1 },
    { q: 'What does “Ayaz, know who you are!” teach us?', o: ['Be proud', 'Be modest and remember your roots', 'Be rich'], a: 1 }
  ],
  speak: { p: 'Talk about an honest person you know. Use: “I think … is honest because…”, “He/She always…”.', k: ['honest', 'because', 'always', 'truth'] },
  guide: [
    { q: 'Why did Ayaz keep his old coat?', k: ['remember', 'modest', 'roots', 'forget', 'poor'], m: 'He kept it to remember where he came from and to stay modest.' },
    { q: 'What is honesty for you?', k: ['truth', 'lie', 'word', 'trust'], m: 'Honesty is telling the truth and never lying, so people can trust you.' }
  ]
},
{
  id: 'tazsha', type: 'tale', lon: 57.2, lat: 48.9, biome: 'steppe', mark: 'yurts', color: '#9a6a2a',
  en: 'Tazsha Bala — the Clever Bald Boy', kk: 'Тазша бала',
  place: { en: 'Steppes of the Aktobe region', kk: 'Ақтөбе өңірінің даласы' },
  value: 'diligence', imgs: ['swallow', 'shepherd', 'yurt'],
  sum: { en: 'A poor bald boy, laughed at by everyone, wins with his cleverness and hard work and proves that a person is valued for their mind, not their looks.',
         kk: 'Бәрі күлген кедей тазша баланың еңбегі мен тапқырлығы арқасында жеңіске жетуі туралы ертегі.' },
  story: [
    'Tazsha bala was a poor boy with no hair. Rich people laughed at him, but he was never lazy: he worked hard, watched carefully and learned from everything.',
    'One day the khan announced a contest: “Whoever completes my three difficult tasks will marry my daughter!” Many rich young men tried and failed.',
    'Tazsha bala used his hard work and quick mind. He found clever answers to the khan’s riddles and completed all three tasks.',
    'The khan kept his word. Everyone understood: a person is valued not for beautiful clothes, but for a clever head and golden hands.'
  ],
  chars: [
    { n: { en: 'Tazsha bala', kk: 'Тазша бала' }, d: 'A hard‑working, clever boy.', a: { g: 'm', age: 'kid', hat: 'bald', coat: '#9a7a4a' }, line: 'Work and wit beat wealth!' },
    { n: { en: 'The Khan', kk: 'Хан' }, d: 'A khan who gave three difficult tasks.', a: { g: 'm', age: 'old', hat: 'crown', coat: '#3a2a5a', beard: 'long' }, line: 'Only the cleverest can solve my tasks.' },
    { n: { en: 'The Khan’s daughter', kk: 'Ханның қызы' }, d: 'A princess who valued intelligence.', a: { g: 'f', age: 'young', hat: 'saukele', coat: '#d0507a' }, line: 'I want a husband with a clever mind.' }
  ],
  letter: { from: 'Tazsha bala', text: 'Hi, my friend!\n\nPeople laughed at my bald head. But I never cried. I just worked: I herded sheep, helped old people, listened and learned. Every day I became a little bit smarter.\n\nRemember: talent is good, but hard work is even better. Little by little, a lake is made from drops.\n\nWhat do you do every day to become better? Write me your plan!\n\nYour hard‑working friend,\nTazsha bala' },
  trailer: ['Everybody laughed at the bald boy…', 'Then the khan gave three impossible tasks.', 'Rich princes failed one by one.', 'But hard work and a clever mind can do miracles.', 'Tazsha Bala. Small boy — big mind.'],
  vocab: [['bald', 'таз'], ['lazy', 'жалқау'], ['hard‑working', 'еңбекқор'], ['task', 'тапсырма'], ['to laugh at', 'күлу, мазақ ету']],
  quiz: [
    { q: 'Why did people laugh at Tazsha bala?', o: ['He was bald and poor', 'He was rich', 'He was a khan'], a: 0 },
    { q: 'How many tasks did the khan give?', o: ['One', 'Three', 'Ten'], a: 1 },
    { q: 'What helped Tazsha bala win?', o: ['Magic', 'Hard work and a clever mind', 'Money'], a: 1 }
  ],
  speak: { p: 'Describe your daily routine of learning. Use: “Every day I…”, “I want to become…”, “Hard work helps me…”.', k: ['every day', 'work', 'learn', 'become'] },
  guide: [
    { q: 'Why is hard work important?', k: ['success', 'learn', 'better', 'dream', 'goal'], m: 'Hard work helps us to learn, become better and reach our dreams.' },
    { q: 'Is it right to laugh at people because of their appearance?', k: ['no', 'wrong', 'mind', 'kind', 'respect'], m: 'No, it is wrong. People should be valued for their mind and heart.' }
  ]
},
{
  id: 'kunikei', type: 'tale', lon: 78.4, lat: 44.0, biome: 'desert', mark: 'dunes', color: '#d08a1a',
  en: 'Künikei — the Girl Under the Sun', kk: 'Күн астындағы Күнікей қыз',
  place: { en: 'Altyn-Emel and the Singing Dune (Zhetisu)', kk: 'Алтын-Емел, Әнші құм (Жетісу)' },
  value: 'kindness', imgs: ['kunikei', 'altynemel', 'steppe'],
  sum: { en: 'A magic tale about a kind young man who searches for the beautiful Künikei, “the girl under the sun”, and succeeds thanks to the friends he helped on his way.',
         kk: 'Күн астындағы Күнікей қызды іздеген мейірімді жігіттің жолда өзі көмектескен достарының арқасында мұратына жетуі туралы ертегі.' },
  story: [
    'Far away, where the sun rises, lived Künikei — a girl so bright that she shone like the sun itself. Many heroes tried to reach her land, but nobody came back.',
    'A young man set off on a long journey. On the way he saved an ant from a stream, freed a bird from a trap and returned a little fish to the lake. Each of them said: “One day we will help you.”',
    'Künikei’s father gave the young man three impossible tasks: to collect scattered grain, to bring a golden ring from the bottom of a lake and to find a feather from the top of the mountains.',
    'The ants collected the grain, the fish found the ring and the bird brought the feather. Kindness came back to the hero, and Künikei agreed to marry him. Tale versions differ, but the lesson is the same.'
  ],
  chars: [
    { n: { en: 'Künikei', kk: 'Күнікей' }, d: 'A bright girl who lives under the sun.', a: { g: 'f', age: 'young', hat: 'saukele', coat: '#e0a020' }, line: 'A kind heart shines brighter than gold.' },
    { n: { en: 'The young hero', kk: 'Жас жігіт' }, d: 'A kind traveller who helped everyone.', a: { g: 'm', age: 'young', hat: 'borik', coat: '#2a6a8a' }, line: 'Even an ant deserves help.' },
    { n: { en: 'The helper bird', kk: 'Көмекші құс' }, d: 'A bird the hero freed from a trap.', a: { creature: '🕊️', coat: '#8ac0e0' }, line: 'Good deeds always fly back!' }
  ],
  letter: { from: 'Künikei', text: 'Dear friend,\n\nThe sun is shining over the Singing Dune as I write to you. Did you know that the sand here really sings when the wind blows?\n\nThe young man who came to me was not the strongest or the richest. He was the kindest. He helped an ant, a bird and a fish, and they helped him in return.\n\nWhat kind thing did you do this week? Write to me — I will keep your letter in a golden box!\n\nWith sunny greetings,\nKünikei' },
  trailer: ['Where the sun touches the singing sands…', 'lives a girl as bright as the sun.', 'Three impossible tasks. One kind heart.', 'An ant, a bird and a fish… will they remember?', 'Künikei. Kindness always comes back.'],
  vocab: [['kind', 'мейірімді'], ['trap', 'тұзақ'], ['grain', 'дән'], ['feather', 'қауырсын'], ['in return', 'орнына, қайтарымға']],
  quiz: [
    { q: 'Where does Künikei live?', o: ['Under the sun', 'Under the sea', 'In a cave'], a: 0 },
    { q: 'Who helped the hero to collect the grain?', o: ['The fish', 'The ants', 'The khan'], a: 1 },
    { q: 'What is the main idea?', o: ['Kindness comes back', 'Gold is the best gift', 'Never travel'], a: 0 }
  ],
  speak: { p: 'Tell about a kind thing you did. Use: “Last week I helped…”, “I felt…”, “Kindness is…”.', k: ['helped', 'felt', 'kind'] },
  guide: [
    { q: 'Why did the ant, the bird and the fish help the hero?', k: ['helped', 'saved', 'kind', 'first'], m: 'Because the hero helped them first. Kindness came back to him.' },
    { q: 'Name three kind things you can do at school.', k: ['help', 'share', 'smile', 'friend', 'clean'], m: 'I can help a classmate, share my pencils and smile at new students.' }
  ]
},
{
  id: 'aksak', type: 'legend', lon: 67.7, lat: 47.6, biome: 'steppe', mark: 'mausoleum', color: '#6a3a2a',
  en: 'The Lame Kulan', kk: 'Ақсақ құлан',
  place: { en: 'Ulytau — the heart of the steppe', kk: 'Ұлытау — даланың жүрегі' },
  value: 'honesty', imgs: ['jochi', 'jochi2', 'dombyra2'],
  sum: { en: 'The legend of how a dombyra told Genghis Khan the sad truth about his son Jochi — and why the dombyra has a small hole in its body.',
         kk: 'Шыңғыс ханға ұлы Жошының қазасын домбыра күйі арқылы жеткізген аңыз және домбырадағы ойықтың шығуы.' },
  story: [
    'Jochi, the eldest son of Genghis Khan, loved hunting in the Ulytau steppe. One day he chased a herd of wild kulans. Their leader, a huge lame kulan, attacked and killed him.',
    'Genghis Khan loved his son very much. He had said: “Whoever brings me bad news about Jochi will have hot lead poured into his throat!” Nobody dared to tell him the truth.',
    'Then the wise musician Ketbuga took his dombyra and played a kui called “Aksak Kulan”. The strings cried and told the whole story without words.',
    'The khan understood and shouted: “My son is dead!” — “You said it, not I,” answered the musician. The angry khan ordered hot lead to be poured into the dombyra — and that is why, the legend says, the dombyra has a hole. Jochi’s mausoleum still stands in Ulytau.'
  ],
  chars: [
    { n: { en: 'Ketbuga', kk: 'Кетбұға' }, d: 'A wise musician who told the truth with music.', a: { g: 'm', age: 'old', hat: 'kalpak', coat: '#d8cfb8', beard: 'white' }, line: 'Music can say what words cannot.' },
    { n: { en: 'Jochi', kk: 'Жошы' }, d: 'The eldest son of Genghis Khan.', a: { g: 'm', age: 'young', hat: 'helmet', coat: '#6a2a2a' }, line: 'The steppe calls me to hunt.' },
    { n: { en: 'Genghis Khan', kk: 'Шыңғыс хан' }, d: 'A powerful ruler and a loving father.', a: { g: 'm', age: 'old', hat: 'crown', coat: '#3a2a1a', beard: 'long' }, line: 'Who dares to tell me the truth?' },
    { n: { en: 'The Lame Kulan', kk: 'Ақсақ құлан' }, d: 'The leader of the wild kulans.', a: { creature: '🫏', coat: '#c9a46a' }, line: '(snorts) I protect my herd.' }
  ],
  letter: { from: 'Ketbuga the musician', text: 'Dear friend,\n\nThe khan wanted to hear only good news. Everyone was afraid. But a country cannot live without truth. So I let my dombyra speak.\n\nSometimes telling the truth is very difficult. You can be gentle and kind, but you should still be honest. Music, poems and kind words can help us say hard things.\n\nHave you ever had to tell someone difficult news? How did you do it? Write to me.\n\nWith my dombyra,\nKetbuga' },
  trailer: ['The great khan’s son never came back from the hunt…', 'Anyone who brings the bad news — will die.', 'Silence filled the khan’s palace…', 'until a dombyra began to cry.', 'Aksak Kulan. When music tells the truth.'],
  vocab: [['kulan', 'құлан (жабайы есек)'], ['lame', 'ақсақ'], ['truth', 'шындық'], ['strings', 'ішек (домбыра)'], ['to dare', 'батылы бару']],
  quiz: [
    { q: 'Who was Jochi?', o: ['A musician', 'The son of Genghis Khan', 'A kulan'], a: 1 },
    { q: 'How did Ketbuga tell the truth?', o: ['He wrote a letter', 'He played a kui on the dombyra', 'He sent a bird'], a: 1 },
    { q: 'According to the legend, why does the dombyra have a hole?', o: ['Hot lead was poured into it', 'A bird made it', 'For decoration'], a: 0 }
  ],
  speak: { p: 'Why is it hard to tell the truth sometimes? Use: “Sometimes it is hard because…”, “But we should…”.', k: ['truth', 'hard', 'because', 'should'] },
  guide: [
    { q: 'Was the musician brave? Why?', k: ['truth', 'brave', 'afraid', 'told', 'music'], m: 'Yes, he was brave because he told the truth when everyone was afraid.' },
    { q: 'How can we tell bad news kindly?', k: ['gentle', 'kind', 'calm', 'help', 'soft'], m: 'We can speak calmly and gently, and offer help.' }
  ]
},
{
  id: 'asan', type: 'legend', lon: 75.2, lat: 47.2, biome: 'lake', mark: 'lake', color: '#4a7a6a',
  en: 'Asan Kaigy and the Promised Land', kk: 'Асан Қайғының Жерұйығы',
  place: { en: 'Across Kazakhstan — near Lake Balkhash', kk: 'Бүкіл Қазақстан — Балқаш маңы' },
  value: 'responsibility', imgs: ['ishim', 'syrdarya', 'steppe'],
  sum: { en: 'The legend of the 15th‑century thinker Asan Kaigy, who rode a fast camel across the steppe searching for Zheruiyk — a happy land for his people.',
         kk: 'XV ғасырдағы ойшыл Асан Қайғының Желмаясымен халқына бақытты мекен — Жерұйықты іздеуі туралы аңыз.' },
  story: [
    'Asan Kaigy was a wise thinker and adviser of the Kazakh khans. “Kaigy” means “sorrow”: he always worried about the future of his people.',
    'He rode his fast camel Zhelmaya across the whole steppe — from the Syr Darya to the Irtysh — looking for Zheruiyk, a land where nobody is hungry and everybody is happy.',
    'About every place he said a wise word: which land is good for cattle, which river is clean, which mountain protects from the wind. These sayings became the first “geography” of the Kazakh steppe.',
    'Did he find Zheruiyk? The legend says that a happy land is not found — it is built by people who love and protect their home.'
  ],
  chars: [
    { n: { en: 'Asan Kaigy', kk: 'Асан Қайғы' }, d: 'A thinker who cared about his people’s future.', a: { g: 'm', age: 'old', hat: 'kalpak', coat: '#8a7a5a', beard: 'white' }, line: 'Take care of the land, and the land will take care of you.' },
    { n: { en: 'Zhelmaya', kk: 'Желмая' }, d: 'Asan’s fast camel.', a: { creature: '🐫', coat: '#c79a5a' }, line: '(hums) Let’s travel to the horizon!' }
  ],
  letter: { from: 'Asan Kaigy', text: 'My dear young traveller,\n\nI rode across the whole steppe on my camel Zhelmaya. I saw rivers and deserts, mountains and lakes. I was looking for Zheruiyk — a land of happiness.\n\nNow I understand: Zheruiyk is not far away. It is where people are kind, work hard, protect nature and care for each other.\n\nHow can we make our village or town a “Zheruiyk”? Write me three ideas!\n\nWith care for the future,\nAsan Kaigy' },
  trailer: ['A wise man looked at his people with sorrow…', 'and rode across the endless steppe.', 'Rivers, deserts, mountains… which land is best?', 'Where is the land of happiness?', 'Asan Kaigy. In search of Zheruiyk.'],
  vocab: [['thinker', 'ойшыл'], ['sorrow', 'қайғы'], ['camel', 'түйе'], ['future', 'болашақ'], ['to protect nature', 'табиғатты қорғау']],
  quiz: [
    { q: 'What was Asan Kaigy looking for?', o: ['Gold', 'Zheruiyk — the land of happiness', 'His horse'], a: 1 },
    { q: 'What was the name of his camel?', o: ['Zhelmaya', 'Kerkula', 'Akkula'], a: 0 },
    { q: 'What does “Kaigy” mean?', o: ['Happy', 'Sorrow', 'Fast'], a: 1 }
  ],
  speak: { p: 'Describe your ideal “Zheruiyk”. Use: “In my Zheruiyk there is/are…”, “People…”, “Nature…”.', k: ['there is', 'people', 'nature', 'happy'] },
  guide: [
    { q: 'What makes a land happy?', k: ['kind', 'people', 'work', 'nature', 'peace', 'clean'], m: 'A land is happy when people are kind, work hard and protect nature.' },
    { q: 'What can YOU do for your town?', k: ['clean', 'tree', 'help', 'plant', 'study'], m: 'I can plant trees, keep the streets clean and help older people.' }
  ]
},
{
  id: 'edige', type: 'epic', lon: 65.8, lat: 49.0, biome: 'steppe', mark: 'banners', color: '#4a5a2a',
  en: 'Edige Batyr', kk: 'Едіге батыр',
  place: { en: 'Ulytau and Central Kazakhstan', kk: 'Ұлытау және Орталық Қазақстан' },
  value: 'justice', imgs: ['edige', 'jochi2', 'steppe'],
  sum: { en: 'An epic about Edige, a hero of the Golden Horde, who was famous for fair judgement since childhood and fought for justice.',
         kk: 'Бала кезінен әділ билігімен танылған, Алтын Орданың батыры Едіге туралы жыр.' },
  story: [
    'Edige was a real historical person (1352–1419), a powerful leader of the Golden Horde. The people also created a beautiful epic about him.',
    'The legend says his mother was a fairy (peri). As a little boy, Edige was already wise: he solved a difficult argument between adults so fairly that everybody was amazed.',
    'He served Khan Toktamys, but when the khan became unjust, Edige did not stay silent. He chose justice, even though it was dangerous.',
    'Edige became a great leader. The epic teaches that a true hero is not only strong, but also fair.'
  ],
  chars: [
    { n: { en: 'Edige', kk: 'Едіге' }, d: 'A fair and wise leader since childhood.', a: { g: 'm', age: 'adult', hat: 'helmet', coat: '#4a5a2a', beard: 'short' }, line: 'Strength must serve justice.' },
    { n: { en: 'Toktamys Khan', kk: 'Тоқтамыс хан' }, d: 'A khan of the Golden Horde.', a: { g: 'm', age: 'old', hat: 'crown', coat: '#5a2a5a', beard: 'long' }, line: 'Who dares to argue with a khan?' },
    { n: { en: 'The Peri mother', kk: 'Пері ана' }, d: 'A fairy, Edige’s mother in the legend.', a: { g: 'f', age: 'young', hat: 'takiya', coat: '#7ab0d8' }, line: 'Be fair, my son, and you will be great.' }
  ],
  letter: { from: 'Edige', text: 'Greetings, young judge!\n\nWhen I was a small boy, two men argued about a horse. Everyone was shouting. I listened to both of them calmly and asked good questions. In the end, the truth became clear.\n\nA fair person listens to both sides before deciding. Try this with your friends when they argue!\n\nHave you ever helped your friends to stop an argument? Tell me how.\n\nWith justice,\nEdige' },
  trailer: ['A boy born to a fairy mother…', 'judged wiser than old men.', 'He served a khan… until the khan became unjust.', 'Silence or justice? He chose justice.', 'Edige Batyr. Strength that serves fairness.'],
  vocab: [['fair', 'әділ'], ['to judge', 'билік айту, төрелік ету'], ['fairy', 'пері'], ['argument', 'дау'], ['leader', 'көшбасшы']],
  quiz: [
    { q: 'Who was Edige’s mother in the legend?', o: ['A fairy (peri)', 'A queen', 'A shepherd'], a: 0 },
    { q: 'What was Edige famous for as a child?', o: ['Fair judgement', 'Singing', 'Running'], a: 0 },
    { q: 'What does the epic teach?', o: ['A hero should be fair', 'A hero should be rich', 'A hero should be silent'], a: 0 }
  ],
  speak: { p: 'How do you solve arguments with friends? Use: “First I listen…”, “Then…”, “Finally we…”.', k: ['first', 'listen', 'then', 'finally'] },
  guide: [
    { q: 'What should a fair person do before deciding?', k: ['listen', 'both', 'sides', 'questions', 'calm'], m: 'A fair person listens to both sides and asks questions before deciding.' },
    { q: 'Why didn’t Edige stay silent?', k: ['unjust', 'unfair', 'justice', 'right'], m: 'Because the khan became unjust, and Edige wanted justice.' }
  ]
},
{
  id: 'koblandy', type: 'epic', lon: 63.0, lat: 49.7, biome: 'steppe', mark: 'banners', color: '#5a2a1a',
  en: 'Koblandy Batyr', kk: 'Қобыланды батыр',
  place: { en: 'The Torgai steppe (Kostanay region)', kk: 'Торғай даласы (Қостанай облысы)' },
  value: 'courage', imgs: ['koblandy', 'steppe', 'yurt'],
  sum: { en: 'A great heroic epic about Koblandy, the defender of the Kipchak people, his wise wife Kurtka and his winged horse Taiburyl.',
         kk: 'Қыпшақ елінің қорғаны Қобыланды, дана жары Құртқа және тұлпары Тайбурыл туралы батырлық жыр.' },
  story: [
    'Koblandy was a hero of the Kipchak people. His wife Kurtka was very wise: she raised a special foal in a dark stable, and it became Taiburyl — the fastest horse in the steppe.',
    'When enemies attacked his land and took people captive, Koblandy rode Taiburyl to fight them. The journey was long and dangerous.',
    'In the enemy land, the brave girl Karlyga, the daughter of the enemy khan, saw that Koblandy was fighting for justice. She helped him and joined his side.',
    'Koblandy defeated the enemies and freed his people. Kurtka’s wisdom, Taiburyl’s speed and Koblandy’s courage together saved the homeland.'
  ],
  chars: [
    { n: { en: 'Koblandy', kk: 'Қобыланды' }, d: 'A brave defender of his people.', a: { g: 'm', age: 'adult', hat: 'helmet', coat: '#5a2a1a', beard: 'mustache' }, line: 'I will not let anyone harm my people!' },
    { n: { en: 'Kurtka', kk: 'Құртқа' }, d: 'Koblandy’s wise wife who raised Taiburyl.', a: { g: 'f', age: 'young', hat: 'saukele', coat: '#2a5a8a' }, line: 'Wisdom prepares the victory.' },
    { n: { en: 'Karlyga', kk: 'Қарлыға' }, d: 'A brave warrior girl who chose justice.', a: { g: 'f', age: 'young', hat: 'helmet', coat: '#6a1a3a' }, line: 'I stand with what is right.' },
    { n: { en: 'Taiburyl', kk: 'Тайбурыл' }, d: 'A winged horse, fast as the wind.', a: { creature: '🐎', coat: '#8a5a3a' }, line: '(neighs) Hold on tight!' }
  ],
  letter: { from: 'Kurtka', text: 'Dear friend,\n\nMany people think that only warriors are heroes. But I believe that every person can be a hero in their own way. I raised Taiburyl with patience and care. Without this horse, Koblandy could not win.\n\nCourage needs wisdom and preparation. Before a test, a competition or a difficult day, prepare well — and you will be brave.\n\nWho is a real hero for you? It can be someone from your family! Write and tell me.\n\nWith respect,\nKurtka' },
  trailer: ['Enemies came to the Torgai steppe…', 'One hero. One horse born in darkness.', 'A long road through enemy lands…', 'and an unexpected friend.', 'Koblandy Batyr. The shield of his people.'],
  vocab: [['defender', 'қорғаушы'], ['enemy', 'жау'], ['captive', 'тұтқын'], ['stable', 'ат қора'], ['victory', 'жеңіс']],
  quiz: [
    { q: 'Who raised the horse Taiburyl?', o: ['Kurtka', 'Karlyga', 'Koblandy'], a: 0 },
    { q: 'Who helped Koblandy in the enemy land?', o: ['Karlyga', 'Kurtka', 'Aldar Köse'], a: 0 },
    { q: 'What saved the homeland?', o: ['Only gold', 'Wisdom, speed and courage together', 'Luck'], a: 1 }
  ],
  speak: { p: 'Who is a real hero for you? Use: “My hero is…”, “He/She is brave because…”, “I want to be like…”.', k: ['hero', 'brave', 'because', 'like'] },
  guide: [
    { q: 'Was Kurtka a hero too? Why?', k: ['wise', 'horse', 'raised', 'help', 'prepare'], m: 'Yes, she was a hero because she was wise and raised Taiburyl.' },
    { q: 'Why did Karlyga help Koblandy?', k: ['justice', 'right', 'fair', 'brave'], m: 'Because she saw that he was fighting for justice.' }
  ]
},
{
  id: 'kambar', type: 'epic', lon: 52.0, lat: 47.3, biome: 'river', mark: 'yurts', color: '#3a6a3a',
  en: 'Kambar Batyr', kk: 'Қамбар батыр',
  place: { en: 'West Kazakhstan (Atyrau region)', kk: 'Батыс Қазақстан (Атырау облысы)' },
  value: 'diligence', imgs: ['kambar', 'berkut', 'eaglehunter'],
  sum: { en: 'The epic of Kambar, a skilful hunter who fed a whole aul with his hard work and became the chosen hero of beautiful Nazym.',
         kk: 'Еңбегімен бүкіл ауылды асыраған аңшы Қамбар және оны таңдаған сұлу Назым туралы жыр.' },
  story: [
    'Kambar was a poor young man, but the best hunter in the steppe. Every day he hunted and shared his food with the poor families of the aul.',
    'Beautiful Nazym, the daughter of rich Azimbai, had many rich suitors. But she chose Kambar, because he was hard‑working, generous and brave.',
    'An enemy khan, Zhortar, wanted to take Nazym and attacked the aul. The rich men were afraid and did nothing.',
    'Kambar came to help. He defeated Zhortar and protected the people. The epic shows that honest work and generosity make a real hero.'
  ],
  chars: [
    { n: { en: 'Kambar', kk: 'Қамбар' }, d: 'A hard‑working hunter and generous hero.', a: { g: 'm', age: 'young', hat: 'borik', coat: '#3a6a3a' }, line: 'What I earn with my hands, I share with my people.' },
    { n: { en: 'Nazym', kk: 'Назым' }, d: 'A beautiful girl who valued work and kindness.', a: { g: 'f', age: 'young', hat: 'saukele', coat: '#c03a5a' }, line: 'I choose a hard‑working and kind heart.' },
    { n: { en: 'Zhortar', kk: 'Жортар' }, d: 'An enemy khan.', a: { g: 'm', age: 'adult', hat: 'crown', coat: '#2a2a3a', beard: 'mustache' }, line: 'I take what I want!' }
  ],
  letter: { from: 'Kambar', text: 'Hello, friend!\n\nI am a hunter. I wake up early, before sunrise. I train my golden eagle and ride across the steppe. It is hard work, but when I bring food to the old people and children of my aul, I feel happy.\n\nWork is not only for money. Work is a way to help people. Even at school, when you study hard, you prepare to help your country in the future.\n\nWhat job do you want to have in the future? How will it help people? Write to me!\n\nYour friend,\nKambar Batyr' },
  trailer: ['Before the sun rises, a hunter is already on his horse…', 'He feeds a whole aul with his work.', 'A beautiful girl must choose: wealth or a good heart?', 'Then an enemy khan arrives…', 'Kambar Batyr. Hard work makes a hero.'],
  vocab: [['hunter', 'аңшы'], ['generous', 'жомарт'], ['suitor', 'құда түсуші, үміткер'], ['to share', 'бөлісу'], ['golden eagle', 'бүркіт']],
  quiz: [
    { q: 'What did Kambar do every day?', o: ['He hunted and shared food', 'He slept', 'He sold horses'], a: 0 },
    { q: 'Why did Nazym choose Kambar?', o: ['He was rich', 'He was hard‑working and generous', 'He was a khan'], a: 1 },
    { q: 'Who attacked the aul?', o: ['Zhortar', 'Koren', 'Taishyk'], a: 0 }
  ],
  speak: { p: 'Talk about your future job. Use: “In the future I want to be…”, “I will help people by…”.', k: ['future', 'want', 'help', 'people'] },
  guide: [
    { q: 'Why is Kambar a real hero?', k: ['work', 'share', 'help', 'generous', 'brave'], m: 'He is a hero because he works hard, shares food and protects people.' },
    { q: 'What is the difference between rich and generous?', k: ['share', 'money', 'give', 'heart'], m: 'A rich person has a lot; a generous person shares what he has.' }
  ]
},
{
  id: 'manas', type: 'epic', lon: 71.9, lat: 43.4, biome: 'mountain', mark: 'mountains', color: '#a01f2a',
  en: 'Manas', kk: 'Манас',
  place: { en: 'Tian Shan foothills (Zhambyl region) — shared Turkic heritage', kk: 'Тянь-Шань бөктері (Жамбыл облысы) — ортақ түркі мұрасы' },
  value: 'unity', imgs: ['manas', 'tamgaly2', 'yurt'],
  sum: { en: 'The great Kyrgyz epic about the hero Manas who united his people — a treasure of the Turkic world, first written down by the Kazakh scholar Shokan Ualikhanov.',
         kk: 'Халқын біріктірген Манас батыр туралы ұлы қырғыз эпосы — түркі әлемінің қазынасы, оны алғаш жазып алған қазақ ғалымы Шоқан Уәлиханов.' },
  story: [
    '“Manas” is one of the longest epics in the world — it has hundreds of thousands of lines! It belongs to the Kyrgyz people, our close neighbours and brothers.',
    'The hero Manas united many separate tribes into one strong people. His wise wife Kanykei, his loyal friend Almambet and his white horse Akkula were always by his side.',
    'In 1856, the Kazakh scholar Shokan Ualikhanov travelled to the Tian Shan and wrote down an episode of the epic for the first time.',
    'Kazakhs and Kyrgyz share the steppe, the mountains, the yurt and many traditions. “Manas” reminds us: friendship between peoples is a great strength.'
  ],
  chars: [
    { n: { en: 'Manas', kk: 'Манас' }, d: 'A great hero who united his people.', a: { g: 'm', age: 'adult', hat: 'helmet', coat: '#a01f2a', beard: 'mustache' }, line: 'Together we are a mountain; alone we are a stone.' },
    { n: { en: 'Kanykei', kk: 'Қаныкей' }, d: 'Manas’s wise and noble wife.', a: { g: 'f', age: 'young', hat: 'saukele', coat: '#f0f0f0' }, line: 'Wisdom keeps the family and the people together.' },
    { n: { en: 'Almambet', kk: 'Алмамбет' }, d: 'Manas’s loyal friend.', a: { g: 'm', age: 'young', hat: 'kalpak', coat: '#2a4a6a' }, line: 'A true friend is closer than a brother.' },
    { n: { en: 'Shokan Ualikhanov', kk: 'Шоқан Уәлиханов' }, d: 'Kazakh scholar who first wrote down Manas (1856).', a: { g: 'm', age: 'young', hat: 'none', coat: '#1a2a3a', beard: 'mustache' }, line: 'Our peoples’ stories are a shared treasure.' }
  ],
  letter: { from: 'Kanykei', text: 'Dear friend from Kazakhstan,\n\nGreetings from the Tian Shan mountains! Our peoples are like two branches of one tree. We both live in yurts, love horses, play the komuz and the dombyra, and respect our elders.\n\nManas taught that unity is the strongest weapon. In your class, too, everyone is different — but together you are a team.\n\nWhat makes your class a strong team? Write and tell me!\n\nWith friendship,\nKanykei' },
  trailer: ['Between the mountains of the Tian Shan…', 'scattered tribes waited for a leader.', 'One hero. One horse. One dream: unity.', 'An epic of half a million lines…', 'Manas. Together we are strong.'],
  vocab: [['to unite', 'біріктіру'], ['tribe', 'ру, тайпа'], ['neighbour', 'көрші'], ['friendship', 'достық'], ['heritage', 'мұра']],
  quiz: [
    { q: 'Which people does the epic Manas belong to?', o: ['The Kyrgyz', 'The English', 'The Chinese'], a: 0 },
    { q: 'Who first wrote down an episode of Manas?', o: ['Abai', 'Shokan Ualikhanov', 'Pushkin'], a: 1 },
    { q: 'What is the main idea of Manas?', o: ['Unity and friendship', 'Being alone', 'Getting rich'], a: 0 }
  ],
  speak: { p: 'What makes your class a team? Use: “Our class is…”, “We always…together”, “Unity means…”.', k: ['together', 'team', 'unity', 'class'] },
  guide: [
    { q: 'Why is unity important?', k: ['strong', 'together', 'team', 'help'], m: 'Unity is important because together we are stronger.' },
    { q: 'What traditions do Kazakhs and Kyrgyz share?', k: ['yurt', 'horse', 'music', 'elders', 'dombyra', 'komuz'], m: 'We share yurts, love for horses, music and respect for elders.' }
  ]
},
{
  id: 'dombyra', type: 'legend', lon: 80.2, lat: 50.4, biome: 'steppe', mark: 'dombyra', color: '#7a4a1a',
  en: 'The Legend of the Dombyra', kk: 'Домбыра туралы аңыз',
  place: { en: 'The Kazakh steppe near Semey — land of Abai', kk: 'Семей өңірі — Абай елі' },
  value: 'respect', imgs: ['dombyra', 'dombyra2', 'jochi'],
  sum: { en: 'Legends about the birth of the dombyra — the two‑stringed soul of the Kazakh people — and the kuis that tell stories without words.',
         kk: 'Қазақтың жаны — екі ішекті домбыраның пайда болуы және сөзсіз сыр шертетін күйлер туралы аңыздар.' },
  story: [
    'Long ago a shepherd killed a sheep and hung its guts on a tree branch to dry. At night the wind blew and the dry strings began to sing. The shepherd was amazed and made the first dombyra.',
    'Another legend, “Aksak Kulan”, explains the hole in the dombyra: it was made by hot lead on the order of Genghis Khan.',
    'The dombyra has only two strings, but it can tell about a galloping horse, a crying mother, a happy wedding or a sad farewell. This music is called “kui”. Great kuishi, like Kurmangazy and Dina Nurpeisova, created hundreds of them.',
    'Since 2018, Kazakhstan celebrates the National Dombyra Day on the first Sunday of July. “The real Kazakh is not a Kazakh, the real Kazakh is the dombyra,” — people say.'
  ],
  chars: [
    { n: { en: 'The Shepherd', kk: 'Шопан' }, d: 'The first maker of the dombyra in the legend.', a: { g: 'm', age: 'young', hat: 'kalpak', coat: '#7a5a3a' }, line: 'Listen! Even the wind can sing!' },
    { n: { en: 'Kurmangazy', kk: 'Құрманғазы' }, d: 'The great kui composer (1823–1896).', a: { g: 'm', age: 'old', hat: 'borik', coat: '#3a2a1a', beard: 'long' }, line: 'My dombyra speaks for my people.' },
    { n: { en: 'Dina Nurpeisova', kk: 'Дина Нұрпейісова' }, d: 'A famous woman kuishi (1861–1955).', a: { g: 'f', age: 'old', hat: 'kimeshek', coat: '#5a3a6a' }, line: 'Music has no age.' },
    { n: { en: 'The Dombyra', kk: 'Домбыра' }, d: 'The two‑stringed soul of the steppe.', a: { creature: '🪕', coat: '#b07a3a' }, line: '(plays a melody)' }
  ],
  letter: { from: 'The Dombyra', text: 'Hello, dear listener!\n\nYes, it is me — the Dombyra! I have only two strings, but I know a thousand stories. I have played at weddings and at farewells, in yurts and in great concert halls.\n\nRespect for culture means knowing your music, your language and your traditions — and sharing them with the world. Maybe you can teach a foreign friend a Kazakh song?\n\nWhat Kazakh song or kui do you like? Write to me, and I will play it for you!\n\nWith a melody,\nYour Dombyra' },
  trailer: ['The wind blew through the steppe at night…', 'and the dry strings began to sing.', 'Two strings. A thousand stories.', 'Horses gallop, mothers cry, weddings dance…', 'The Dombyra. The soul of the Kazakh people.'],
  vocab: [['string', 'ішек'], ['melody', 'әуен'], ['composer', 'композитор, күйші'], ['to celebrate', 'тойлау'], ['culture', 'мәдениет']],
  quiz: [
    { q: 'How many strings does a dombyra have?', o: ['Two', 'Six', 'Four'], a: 0 },
    { q: 'What is a “kui”?', o: ['A dance', 'Music played without words', 'A horse'], a: 1 },
    { q: 'When is National Dombyra Day?', o: ['First Sunday of July', '1 January', '22 March'], a: 0 }
  ],
  speak: { p: 'Talk about Kazakh music you like. Use: “I like… because…”, “It sounds…”, “It makes me feel…”.', k: ['like', 'because', 'sounds', 'feel'] },
  guide: [
    { q: 'How did the first dombyra appear in the legend?', k: ['wind', 'shepherd', 'tree', 'strings', 'sing'], m: 'The wind blew on dry strings on a tree, they began to sing, and a shepherd made the dombyra.' },
    { q: 'How can we respect our culture?', k: ['music', 'language', 'traditions', 'learn', 'share'], m: 'We can learn our music, language and traditions and share them with others.' }
  ]
},
{
  id: 'baiterek', type: 'legend', lon: 71.43, lat: 51.13, biome: 'city', mark: 'tower', color: '#c9a227',
  en: 'The Legend of Baiterek', kk: 'Бәйтерек туралы аңыз',
  place: { en: 'Astana — the capital', kk: 'Астана — елорда' },
  value: 'patriotism', imgs: ['baiterek', 'samruk', 'shanyrak'],
  sum: { en: 'The legend of the Tree of Life, on which the sacred bird Samruk lays a golden egg — the Sun — and the modern Baiterek monument in Astana.',
         kk: 'Самұрық құс алтын жұмыртқа — Күнді салатын өмір ағашы туралы аңыз және Астанадағы Бәйтерек монументі.' },
  story: [
    'In Kazakh mythology, the Tree of Life — Baiterek — grows in the centre of the world. Its roots go down to the Underworld, and its crown touches the sky.',
    'Every year the sacred bird Samruk lays a golden egg in the crown of the tree. The egg is the Sun, the symbol of new life and hope.',
    'But every year the dragon Aidahar climbs the tree and swallows the egg. Day changes into night, summer into winter — and hope is born again and again.',
    'In 2002 the Baiterek monument was opened in Astana. It is 97 metres high — a symbol of 1997, when Astana became the capital. The golden sphere on top is the Samruk’s egg — the hope of the Kazakh people.'
  ],
  chars: [
    { n: { en: 'Samruk', kk: 'Самұрық' }, d: 'The sacred bird who lays the golden egg.', a: { creature: '🦅', coat: '#e0b040' }, line: 'Every sunrise is a new hope.' },
    { n: { en: 'Aidahar', kk: 'Айдаһар' }, d: 'A dragon who swallows the golden egg.', a: { creature: '🐉', coat: '#3a7a3a' }, line: '(roars) Darkness always tries — but light returns!' },
    { n: { en: 'A young citizen', kk: 'Жас азамат' }, d: 'A student of Astana who loves the homeland.', a: { g: 'f', age: 'kid', hat: 'takiya', coat: '#2a8ac0' }, line: 'I want my country to shine like the golden egg!' }
  ],
  letter: { from: 'Samruk', text: 'Dear child of the steppe,\n\nI am Samruk, the bird of the Tree of Life. Every year I lay a golden egg — the Sun. Every year the dragon takes it, and every year I lay a new one. I never give up.\n\nYour country is like that golden egg: it needs care and love from every citizen. When you study well, help others and protect nature, you make Kazakhstan shine.\n\nWhat is your dream for Kazakhstan in 2050? Write to me!\n\nFrom the top of the Tree of Life,\nSamruk' },
  trailer: ['In the centre of the world grows a magic tree…', 'Its roots touch the Underworld, its crown — the sky.', 'Every year a golden egg is born… and stolen.', 'Today the tree stands in the heart of Astana.', 'Baiterek. The tree of hope.'],
  vocab: [['Tree of Life', 'өмір ағашы'], ['capital', 'астана, елорда'], ['sacred', 'киелі'], ['egg', 'жұмыртқа'], ['symbol', 'символ, нышан']],
  quiz: [
    { q: 'What is the golden egg in the legend?', o: ['The Sun', 'The Moon', 'A stone'], a: 0 },
    { q: 'How high is the Baiterek monument?', o: ['97 metres', '50 metres', '200 metres'], a: 0 },
    { q: 'Who swallows the egg every year?', o: ['Samruk', 'The dragon Aidahar', 'A wolf'], a: 1 }
  ],
  speak: { p: 'Describe your dream for Kazakhstan. Use: “In the future Kazakhstan will…”, “I will help by…”.', k: ['future', 'will', 'help', 'country'] },
  guide: [
    { q: 'Why is Baiterek 97 metres high?', k: ['1997', 'capital', 'astana'], m: 'Because in 1997 Astana became the capital of Kazakhstan.' },
    { q: 'What does the golden egg symbolise?', k: ['sun', 'hope', 'life', 'future'], m: 'It symbolises the Sun, new life and hope.' }
  ]
},
{
  id: 'samruk', type: 'legend', lon: 84.9, lat: 49.3, biome: 'mountain', mark: 'tree', color: '#d9a43a',
  en: 'Samruk — the Magic Bird', kk: 'Самұрық құс туралы аңыз',
  place: { en: 'The Altai mountains (East Kazakhstan)', kk: 'Алтай таулары (Шығыс Қазақстан)' },
  value: 'gratitude', imgs: ['samruk', 'berkut', 'eaglehunter'],
  sum: { en: 'Legends about Samruk, the giant bird of happiness that lives on the Tree of Life and helps heroes who are kind and brave.',
         kk: 'Өмір ағашында мекендеп, мейірімді әрі батыл ерлерге көмектесетін алып бақыт құсы — Самұрық туралы аңыздар.' },
  story: [
    'High in the Altai mountains, where the clouds sleep, lives Samruk — a bird so big that its wings cover the sun.',
    'Samruk knows the past and the future. It is the bird of happiness: whoever it helps will find their way.',
    'In the tale of Er Töstik, the hero saved Samruk’s chicks from a dragon. Samruk did not forget this good deed and carried the hero from the Underworld to the Earth.',
    'Kazakhs say: “Jaqsylyq jasa da, suğa tasta” — “Do good and throw it into the water” — it will come back to you. Today Samruk crowns the “Kazakh Eli” monument in Astana, and the golden eagle — berkut — is on the national flag.'
  ],
  chars: [
    { n: { en: 'Samruk', kk: 'Самұрық' }, d: 'A giant bird of happiness and wisdom.', a: { creature: '🦅', coat: '#d9a43a' }, line: 'Good deeds are never forgotten.' },
    { n: { en: 'Er Töstik', kk: 'Ер Төстік' }, d: 'The hero who saved Samruk’s chicks.', a: { g: 'm', age: 'young', hat: 'borik', coat: '#a33b2a' }, line: 'Thank you for carrying me home!' },
    { n: { en: 'A berkutchi', kk: 'Бүркітші' }, d: 'An eagle hunter of the Altai.', a: { g: 'm', age: 'old', hat: 'borik', coat: '#4a3a2a', beard: 'white' }, line: 'The eagle is our friend, not our servant.' }
  ],
  letter: { from: 'Samruk', text: 'Dear friend,\n\nI am flying over the snowy peaks of the Altai. From here I can see the whole of Kazakhstan — the lakes, the steppes, the cities.\n\nOnce a young hero saved my children. I could not forget it. Gratitude is a beautiful feeling: when someone helps you, say “thank you” and help them back.\n\nWho do you want to thank today? Write a short “thank‑you” message to this person!\n\nWith wings full of wind,\nSamruk' },
  trailer: ['Above the snowy peaks of the Altai…', 'flies a bird bigger than the clouds.', 'A dragon. A brave hero. A good deed.', 'Will the bird remember?', 'Samruk. Good always comes back.'],
  vocab: [['wings', 'қанат'], ['chick', 'балапан'], ['gratitude', 'ризашылық'], ['to thank', 'алғыс айту'], ['peak', 'шың']],
  quiz: [
    { q: 'Where does Samruk live in this legend?', o: ['In the Altai mountains', 'In the sea', 'In a city'], a: 0 },
    { q: 'Why did Samruk help Er Töstik?', o: ['He paid gold', 'He saved her chicks', 'He was a khan'], a: 1 },
    { q: 'What bird is on the flag of Kazakhstan?', o: ['A golden eagle', 'A swan', 'A parrot'], a: 0 }
  ],
  speak: { p: 'Say thank you to someone in English. Use: “I want to thank… for…”, “Without you I…”.', k: ['thank', 'for', 'help', 'without'] },
  guide: [
    { q: 'What does “Do good and throw it into the water” mean?', k: ['come back', 'good', 'return', 'help', 'expect'], m: 'It means: do good without expecting anything — and it will come back to you.' },
    { q: 'How can we show gratitude?', k: ['thank', 'help', 'smile', 'gift', 'say'], m: 'We can say thank you, help back and remember good deeds.' }
  ]
},
{
  id: 'kokbori', type: 'legend', lon: 75.6, lat: 43.8, biome: 'mountain', mark: 'petroglyph', color: '#5a6a7a',
  en: 'The Legend of the Grey Wolf', kk: 'Көк бөрі туралы аңыз',
  place: { en: 'Tamgaly — ancient Turkic steppes (Zhetisu)', kk: 'Тамғалы — көне түркі даласы (Жетісу)' },
  value: 'unity', imgs: ['kokbori', 'tamgaly2', 'steppe'],
  sum: { en: 'The ancient Turkic legend of the grey she‑wolf Asena, who saved a wounded boy and became the mother of a great people.',
         kk: 'Жараланған баланы құтқарып, ұлы халықтың анасы болған Көк бөрі (Асена) туралы көне түркі аңызы.' },
  story: [
    'Long, long ago, enemies destroyed a whole tribe. Only one little boy survived, but he was badly wounded and left alone in the steppe.',
    'A grey she‑wolf — Kök böri — found him. She did not hurt him; she fed him, kept him warm and hid him in a cave in the mountains.',
    'The boy grew up. According to the legend, his ten sons became the ancestors of the Turkic peoples. The wolf’s head appeared on their banners.',
    'For the Turks, the grey wolf is a symbol of freedom, courage and loyalty to the pack. A wolf never leaves its pack — and people should never leave each other in trouble. Ancient rock art at Tamgaly shows the world of these early steppe people.'
  ],
  chars: [
    { n: { en: 'Asena, the grey wolf', kk: 'Көк бөрі (Асена)' }, d: 'A she‑wolf who saved a boy.', a: { creature: '🐺', coat: '#7a8a9a' }, line: 'The pack protects every member.' },
    { n: { en: 'The boy', kk: 'Бала' }, d: 'The only survivor of his tribe.', a: { g: 'm', age: 'kid', hat: 'none', coat: '#8a6a4a' }, line: 'I was alone — but I was saved.' },
    { n: { en: 'The Turkic khagan', kk: 'Түрік қағаны' }, d: 'A ruler with the wolf banner.', a: { g: 'm', age: 'adult', hat: 'helmet', coat: '#3a4a5a', beard: 'mustache' }, line: 'Under one banner we are one people.' }
  ],
  letter: { from: 'Kök böri, the grey wolf', text: 'Greetings, little one!\n\nI am the Grey Wolf of the old legends. Once I found a lonely, wounded boy. I did not pass by. I saved him, and from him a great people was born.\n\nIn a wolf pack, everyone matters: the strong protect the weak, the old teach the young. Your class and your family are your “pack”. Never leave a friend in trouble.\n\nHow does your “pack” help each other? Write and tell me!\n\nHowling under the moon,\nKök böri' },
  trailer: ['A tribe was lost. Only one boy survived…', 'In the cold steppe, a grey wolf found him.', 'She did not attack. She protected.', 'And from one boy — a whole people was born.', 'Kök Böri. The grey wolf of the Turks.'],
  vocab: [['wolf', 'қасқыр, бөрі'], ['pack', 'үйір, топ'], ['to survive', 'аман қалу'], ['ancestor', 'ата-баба'], ['banner', 'ту']],
  quiz: [
    { q: 'What did the grey wolf do with the boy?', o: ['Attacked him', 'Saved and fed him', 'Ran away'], a: 1 },
    { q: 'What is the grey wolf a symbol of?', o: ['Freedom, courage and loyalty', 'Laziness', 'Fear'], a: 0 },
    { q: 'Where can you see ancient rock art in Kazakhstan?', o: ['Tamgaly', 'Baiterek', 'Aral'], a: 0 }
  ],
  speak: { p: 'How do your classmates help each other? Use: “In our class we…”, “When someone is in trouble, we…”.', k: ['help', 'class', 'together', 'trouble'] },
  guide: [
    { q: 'What can we learn from a wolf pack?', k: ['together', 'protect', 'help', 'weak', 'leave'], m: 'We learn to stay together, protect the weak and never leave anyone in trouble.' },
    { q: 'Why did the Turks put a wolf on their banners?', k: ['symbol', 'courage', 'freedom', 'ancestor', 'mother'], m: 'Because the wolf was their legendary mother and a symbol of courage and freedom.' }
  ]
}
];

/* ---------- Adal Azamat games (3 games × 3 tasks) ---------- */
window.GAMES = {
  path: [ /* Tulpar's Honest Path — choose the honest action */
    { s: 'You found a wallet with money in the school yard. What do you do?', o: ['Keep the money', 'Give it to the teacher so the owner can get it back', 'Leave it there'], a: 1, why: 'Honesty: returning lost things is what Ayaz bi would do.' },
    { s: 'Your friend asks you to show your test answers. What do you say?', o: ['“Sure, copy everything!”', '“Let’s study together after school instead.”', 'Ignore your friend'], a: 1, why: 'Honesty and kindness together: help your friend learn, not cheat.' },
    { s: 'A new student sits alone at lunch. What do you do?', o: ['Laugh at them', 'Invite them to sit with your friends', 'Do nothing'], a: 1, why: 'Kindness and unity — like the grey wolf, never leave anyone alone.' },
    { s: 'You broke a window by accident while playing football.', o: ['Run away', 'Say it was another boy', 'Tell the adults the truth and offer to help fix it'], a: 2, why: 'Responsibility: honest people admit their mistakes.' },
    { s: 'You promised to help your grandmother, but friends invite you to play.', o: ['Keep your promise to grandmother first', 'Go and play', 'Tell grandmother you are ill'], a: 0, why: 'Faithfulness — like Bayan Sulu, keep your word.' },
    { s: 'In a shop, the cashier gives you too much change.', o: ['Keep it — lucky day!', 'Return the extra money', 'Buy sweets with it'], a: 1, why: 'Honesty — Adal azamat never takes what is not theirs.' },
    { s: 'Someone is writing rude comments about a classmate online.', o: ['Like the comments', 'Write a kind comment and tell an adult', 'Share the post'], a: 1, why: 'Justice and courage: stand up for others, like Edige.' },
    { s: 'You see rubbish near the river in your village.', o: ['Walk past', 'Organise a clean‑up with friends', 'Throw more rubbish'], a: 1, why: 'Love of homeland and responsibility — make your own “Zheruiyk”.' },
    { s: 'Your team lost the game. The other team celebrates.', o: ['Shake hands and congratulate them', 'Shout at them', 'Leave angrily'], a: 0, why: 'Respect: a real batyr respects even the rivals.' }
  ],
  match: [ /* Hero ↔ Value match, 3 rounds of 4 */
    [['kozy', 'loyalty'], ['aldar', 'justice'], ['ayaz', 'honesty'], ['tostik', 'courage']],
    [['zhirenshe', 'wisdom'], ['kunikei', 'kindness'], ['kambar', 'diligence'], ['manas', 'unity']],
    [['samruk', 'gratitude'], ['alpamys', 'patriotism'], ['zhibek', 'respect'], ['kendebai', 'responsibility']]
  ],
  yurt: [ /* Word Yurt — build the sentence */
    'An honest person always keeps their word',
    'We should help people who are in trouble',
    'Together we are strong like a wolf pack',
    'I love my homeland and protect its nature',
    'A kind word opens every door',
    'Hard work is the key to success',
    'Respect your elders and listen to them',
    'Justice means treating everyone fairly',
    'Say thank you when someone helps you'
  ]
};
