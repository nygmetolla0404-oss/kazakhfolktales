/* Museum objects, photo lists, bilingual narration helpers (used by the site and the audio generator) */
window.PROPS = {
  saukele: { en: 'Saukele', kk: 'Сәукеле', d: { en: 'The tall wedding hat of a Kazakh bride, decorated with gold, coins and owl feathers.', kk: 'Қалыңдықтың алтынмен, тиынмен және үкімен безендірілген биік бас киімі.' } },
  sword:   { en: 'Kylysh — sword', kk: 'Қылыш', d: { en: 'A batyr’s sword with a golden guard and a leather scabbard.', kk: 'Алтын сапты, былғары қынапты батыр қылышы.' } },
  shield:  { en: 'Kalkan — shield', kk: 'Қалқан', d: { en: 'A round shield decorated with Kazakh ornament.', kk: 'Қазақ ою‑өрнегімен безендірілген дөңгелек қалқан.' } },
  bow:     { en: 'Sadak — bow and quiver', kk: 'Садақ пен қорамсақ', d: { en: 'Steppe warriors and hunters were famous archers.', kk: 'Дала батырлары мен аңшылары мерген садақшы болған.' } },
  dombyra: { en: 'Dombyra', kk: 'Домбыра', d: { en: 'The two‑stringed instrument — the soul of the Kazakh people.', kk: 'Екі ішекті аспап — қазақ халқының жаны.' } },
  kobyz:   { en: 'Kobyz', kk: 'Қобыз', d: { en: 'An ancient bowed instrument; its voice is deep and magical.', kk: 'Көне ысқышты аспап, үні терең әрі сиқырлы.' } },
  chapan:  { en: 'Chapan and borik', kk: 'Шапан мен бөрік', d: { en: 'A traditional embroidered coat and a fur‑trimmed hat.', kk: 'Кестелі ұлттық шапан мен құндыз бөрік.' } },
  holes:   { en: 'The coat with a hundred holes', kk: 'Жүз тесік тон', d: { en: 'Aldar Köse’s famous “warm” coat that tricked greedy Shygaibai.', kk: 'Сараң Шығайбайды алдаған Алдар Көсенің әйгілі «жылы» тоны.' } },
  helmet:  { en: 'Dulyga — helmet', kk: 'Дулыға', d: { en: 'A batyr’s steel helmet with chainmail and a red plume.', kk: 'Шашақты, торкөзді болат батыр дулығасы.' } },
  chest:   { en: 'Sandyq — chest', kk: 'Сандық', d: { en: 'A painted chest for treasures, clothes and the bride’s dowry.', kk: 'Қазына, киім және қыз жасауы сақталатын әшекейлі сандық.' } },
  ring:    { en: 'Golden ring', kk: 'Алтын жүзік', d: { en: 'A symbol of a promise and a faithful heart.', kk: 'Уәде мен адал жүректің нышаны.' } },
  egg:     { en: 'Samruk’s golden egg', kk: 'Самұрықтың алтын жұмыртқасы', d: { en: 'In the legend the golden egg is the Sun — the symbol of hope.', kk: 'Аңызда алтын жұмыртқа — Күн, үміттің нышаны.' } },
  bowl:    { en: 'Tostagan — wooden bowl', kk: 'Тостаған', d: { en: 'A carved bowl for kumys — guests are always welcome.', kk: 'Қымыз құятын ағаш тостаған — қонақ әрқашан қадірлі.' } },
  staff:   { en: 'Shepherd’s staff', kk: 'Шопан таяғы', d: { en: 'Ayaz kept it to remember where he came from.', kk: 'Аяз оны өзінің кім екенін ұмытпау үшін сақтаған.' } },
  feather: { en: 'Magic feather', kk: 'Сиқырлы қауырсын', d: { en: 'The bird brought it from the top of the mountains.', kk: 'Құс оны тау басынан әкелді.' } },
  scroll:  { en: 'Manuscript of wise words', kk: 'Дана сөздер қолжазбасы', d: { en: 'Proverbs and sayings of the great orators.', kk: 'Шешендердің мақал‑мәтелдері мен нақыл сөздері.' } },
  horse:   { en: 'Golden tulpar', kk: 'Алтын тұлпар', d: { en: 'Every batyr has a faithful horse — his best friend.', kk: 'Әр батырдың адал тұлпары бар — ең жақын досы.' } },
  eagle:   { en: 'Berkut — golden eagle', kk: 'Бүркіт', d: { en: 'The proud bird of the steppe, a friend of eagle hunters.', kk: 'Даланың мақтанышы, бүркітшінің серігі.' } },
  wolf:    { en: 'Kök böri — grey wolf', kk: 'Көк бөрі', d: { en: 'The legendary mother of the Turkic peoples.', kk: 'Түркі халықтарының аңыздағы анасы.' } },
  camel:   { en: 'Zhelmaya — fast camel', kk: 'Желмая', d: { en: 'Asan Kaigy crossed the whole steppe on this camel.', kk: 'Асан Қайғы бүкіл даланы осы түйемен аралаған.' } },
  rock:    { en: 'Ancient stone', kk: 'Көне тас', d: { en: 'A stone with ancient signs from the land of the legend.', kk: 'Аңыз мекенінен алынған көне белгілері бар тас.' } },
  map:     { en: 'Map of the steppe', kk: 'Дала картасы', d: { en: 'Asan Kaigy described every land of Kazakhstan.', kk: 'Асан Қайғы Қазақстанның әр өңірін сипаттаған.' } }
};
window.PROP_BY = {
  kozy: ['ring', 'saukele', 'horse', 'chest'], zhibek: ['saukele', 'chest', 'ring', 'horse'], alpamys: ['sword', 'bow', 'helmet', 'horse'],
  tostik: ['eagle', 'horse', 'sword', 'rock'], kendebai: ['horse', 'sword', 'bowl', 'chapan'], aldar: ['holes', 'bowl', 'chest', 'horse'],
  zhirenshe: ['scroll', 'dombyra', 'bowl', 'chapan'], ayaz: ['chest', 'staff', 'chapan', 'bowl'], tazsha: ['bowl', 'scroll', 'ring', 'chest'],
  kunikei: ['ring', 'feather', 'bowl', 'saukele'], aksak: ['dombyra', 'bow', 'horse', 'kobyz'], asan: ['camel', 'map', 'scroll', 'bowl'],
  edige: ['helmet', 'sword', 'scroll', 'shield'], koblandy: ['helmet', 'shield', 'horse', 'sword'], kambar: ['bow', 'eagle', 'bowl', 'chapan'],
  manas: ['helmet', 'shield', 'horse', 'kobyz'], dombyra: ['dombyra', 'kobyz', 'chapan', 'bowl'], baiterek: ['egg', 'eagle', 'map', 'dombyra'],
  samruk: ['eagle', 'egg', 'feather', 'sword'], kokbori: ['wolf', 'bow', 'rock', 'helmet']
};
/* photo lists (missing files are skipped automatically) */
window.IMGS_BY = {
  kozy: ['kozy', 'kozyart', 'saukele', 'steppe', 'yurt'], zhibek: ['zhibekopera', 'zhibek', 'zhibekopera2', 'saukele', 'yurt'], alpamys: ['alpamys', 'armor', 'warrior', 'syrdarya', 'steppe'],
  tostik: ['tostik', 'bozzhyra', 'samruk', 'saddle'], kendebai: ['ishim', 'saddle', 'steppe', 'shanyrak'], aldar: ['aldar', 'stamp437', 'clothing', 'shepherd', 'yurt'],
  zhirenshe: ['kazakhs19', 'clothing2', 'shanyrak', 'yurt'], ayaz: ['shepherd', 'clothing', 'steppe', 'shanyrak'], tazsha: ['shepherd', 'clothing2', 'yurt', 'steppe'],
  kunikei: ['kunikei', 'saukele19', 'altynemel', 'saukele'], aksak: ['jochi', 'jochi2', 'dombyra2', 'kobyz'], asan: ['ishim', 'syrdarya', 'steppe', 'yurt'],
  edige: ['edige', 'warrior', 'armor', 'jochi2'], koblandy: ['koblandy', 'armor', 'bow', 'saddle'], kambar: ['kambar', 'eaglehunter', 'berkut', 'bow'],
  manas: ['manas', 'tamgaly2', 'kobyz', 'yurt'], dombyra: ['dombyra', 'dombyra2', 'kobyz', 'kobyzstamp'], baiterek: ['baiterek', 'samruk', 'shanyrak'],
  samruk: ['samruk', 'berkut', 'eaglehunter'], kokbori: ['kokbori', 'tamgaly2', 'steppe']
};
Object.assign(window.IMG_CAP, {
  kozyart:    { en: 'Kozy Korpesh and Bayan Sulu — illustration', kk: 'Қозы Көрпеш пен Баян сұлу — иллюстрация' },
  zhibekopera:{ en: 'The opera “Kyz Zhibek” on stage', kk: '«Қыз Жібек» операсы сахнада' },
  zhibekopera2:{ en: 'Zhibek and Tolegen in the opera “Kyz Zhibek”', kk: '«Қыз Жібек» операсындағы Жібек пен Төлеген' },
  saukele:    { en: 'A real saukele — the bride’s wedding hat', kk: 'Нағыз сәукеле — қалыңдықтың бас киімі' },
  saukele19:  { en: 'Saukele of Kazakh nomads, 19th century', kk: 'Қазақ көшпенділерінің сәукелесі, XIX ғ.' },
  kazakhs19:  { en: 'Kazakhs of the 19th century in national dress', kk: 'Ұлттық киімдегі XIX ғасыр қазақтары' },
  saddle:     { en: 'Kazakh saddle, 19th century (museum)', kk: 'Қазақ ері, XIX ғ. (мұражай)' },
  saddle2:    { en: 'Kazakh saddle, early 20th century', kk: 'Қазақ ері, XX ғ. басы' },
  armor:      { en: 'Kazakh warrior armour (Akmola museum)', kk: 'Қазақ жауынгерінің сауыты (Ақмола мұражайы)' },
  bow:        { en: 'Kazakh bow (State Historical Museum)', kk: 'Қазақ садағы (Мемлекеттік тарихи мұражай)' },
  clothing:   { en: 'Traditional Kazakh clothing', kk: 'Қазақтың ұлттық киімі' },
  clothing2:  { en: 'Traditional Kazakh clothing and ornament', kk: 'Ұлттық киім мен ою‑өрнек' },
  kobyz:      { en: 'Kobyz — ancient instrument (Guimet museum)', kk: 'Қобыз — көне аспап (Гиме мұражайы)' },
  kobyzstamp: { en: 'Kazakhstan stamp with a kobyz', kk: 'Қобыз бейнеленген марка' },
  warrior:    { en: 'A Kazakh sultan and a warrior — old drawing', kk: 'Қазақ сұлтаны мен жауынгері — көне сурет' },
  manas:      { en: 'Statue of Manas', kk: 'Манас ескерткіші' }
});
STORIES.forEach(s => { if (IMGS_BY[s.id]) s.imgs = IMGS_BY[s.id]; s.storyKk = (window.STORY_KK || {})[s.id] || []; s.props = PROP_BY[s.id] || []; });
/* only photos that exist (embedded list is generated together with the photos) */
window.hasImg = k => !window.IMGDATA || !!window.IMGDATA[k];
STORIES.forEach(s => { s.imgs = s.imgs.filter(hasImg); });

/* narration lines (exact strings → pre‑recorded neural audio) */
window.NARR = {
  welcome: (s, l) => l === 'kk' ? `«${s.kk}» әлеміне қош келдің! ${s.sum.kk} Айналаны аралап, жарқыраған заттарды бас: кейіпкерлер, мұражай, буктрейлер, хат және тапсырмалар сені күтіп тұр.` : `Welcome to the world of ${s.en}! ${s.sum.en} Ride around and visit the heroes, the museum, the book trailer, the letter and the tasks.`,
  near: (s, l) => l === 'kk' ? `Қара! Бұл — «${s.kk}» кітабы. Порталға кіру үшін Е пернесін бас.` : `Look! This is the magic book of ${s.en}. Press E to enter the portal.`,
  prop: (p, l) => l === 'kk' ? `${PROPS[p].kk}. ${PROPS[p].d.kk}` : `${PROPS[p].en}. ${PROPS[p].d.en}`,
  done: (s, l) => l === 'kk' ? `Тамаша! Сен «${s.kk}» шығармасының үш тапсырмасын да орындадың!` : `Excellent! You completed all three tasks of ${s.en}. You earned a golden badge!`
};
window.GUIDE_LINES = {
  en: { hello: 'Hello, traveller! I am Tulpar, your AI guide. Let’s ride across Kazakhstan together. Every magic book is a portal into a legend!', fly: 'Now I am Berkut, the golden eagle! Let’s fly high above the steppe, the mountains and the lakes.', idle: ['Do you know which tale lives in the Altai mountains?', 'Try to find the legend of Baiterek in Astana!', 'Every hero has a letter for you. Open a book and read it!', 'Press the eagle button to fly with me!'], win: 'Well done, Adal Azamat! You earned a golden shanyrak badge!', quest: 'Find this tale on the map!' },
  kk: { hello: 'Сәлем, саяхатшы! Мен — Тұлпар, сенің AI‑гидің. Қазақстанды бірге аралайық. Әр сиқырлы кітап — аңыз әлеміне апаратын портал!', fly: 'Енді мен — Бүркітпін! Дала, тау мен көлдердің үстінен биік ұшайық.', idle: ['Алтай тауларында қай ертегі бар екенін білесің бе?', 'Астанадағы Бәйтерек аңызын тауып көр!', 'Әр кейіпкердің саған жазған хаты бар. Кітапты ашып, оқып көр!', 'Менімен бірге ұшу үшін бүркіт батырмасын бас!'], win: 'Жарайсың, Адал азамат! Сен алтын шаңырақ белгісін алдың!', quest: 'Осы ертегіні картадан тап!' }
};
/* who speaks: voice ids → neural voices (see tools/make_audio.py) */
window.VOICE_OF = a => {
  if (!a || a.creature) return a && (a.creature === '🦅' || a.creature === '🕊️') ? 'f_bird' : 'm_deep';
  if (a.g === 'f') return a.age === 'kid' ? 'f_kid' : a.age === 'old' ? 'f_old' : 'f_young';
  return a.age === 'kid' ? 'm_kid' : a.age === 'old' ? 'm_old' : 'm_young';
};

/* ---------- Time machine: era, season and weather of every world ---------- */
window.ERA = {
  samruk:   { y: -1000, c: { en: 'Ancient myths · about 3,000 years ago', kk: 'Көне мифтер · шамамен 3000 жыл бұрын' }, w: 'dawn' },
  tostik:   { y: -500,  c: { en: 'Ancient tale times · Saka era', kk: 'Ерте заман · сақтар дәуірі' }, w: 'night' },
  dombyra:  { y: -200,  c: { en: 'About 2,000 years ago', kk: 'Шамамен 2000 жыл бұрын' }, w: 'sunset' },
  kokbori:  { y: 552,   c: { en: '6th century · Turkic Khaganate', kk: 'VI ғасыр · Түрік қағанаты' }, w: 'snow' },
  manas:    { y: 840,   c: { en: '9th century', kk: 'IX ғасыр' }, w: 'clear' },
  alpamys:  { y: 1000,  c: { en: '10th–11th centuries', kk: 'X–XI ғасырлар' }, w: 'clear' },
  kendebai: { y: 1100,  c: { en: '≈ 12th century · folk tale', kk: '≈ XII ғасыр · халық ертегісі' }, w: 'rain' },
  kozy:     { y: 1150,  c: { en: '10th–12th centuries', kk: 'X–XII ғасырлар' }, w: 'autumn' },
  aksak:    { y: 1227,  c: { en: '13th century · Mongol Empire', kk: 'XIII ғасыр · Моңғол империясы' }, w: 'fog' },
  edige:    { y: 1400,  c: { en: '14th–15th centuries · Golden Horde', kk: 'XIV–XV ғасырлар · Алтын Орда' }, w: 'storm' },
  asan:     { y: 1440,  c: { en: '15th century', kk: 'XV ғасыр' }, w: 'rain' },
  zhirenshe:{ y: 1465,  c: { en: '15th century · Kazakh Khanate', kk: 'XV ғасыр · Қазақ хандығы' }, w: 'spring' },
  koblandy: { y: 1480,  c: { en: '15th century', kk: 'XV ғасыр' }, w: 'sunset' },
  zhibek:   { y: 1600,  c: { en: '16th–17th centuries', kk: 'XVI–XVII ғасырлар' }, w: 'spring' },
  kambar:   { y: 1620,  c: { en: '17th century', kk: 'XVII ғасыр' }, w: 'snow' },
  aldar:    { y: 1700,  c: { en: '18th century · folk tale', kk: 'XVIII ғасыр · халық ертегісі' }, w: 'clear' },
  ayaz:     { y: 1750,  c: { en: '≈ 18th century · folk tale', kk: '≈ XVIII ғасыр · халық ертегісі' }, w: 'snow' },
  tazsha:   { y: 1800,  c: { en: '≈ 19th century · folk tale', kk: '≈ XIX ғасыр · халық ертегісі' }, w: 'fog' },
  kunikei:  { y: 1850,  c: { en: '≈ 19th century · folk tale', kk: '≈ XIX ғасыр · халық ертегісі' }, w: 'clear' },
  baiterek: { y: 2002,  c: { en: 'Ancient legend · monument of 2002', kk: 'Көне аңыз · 2002 жылғы монумент' }, w: 'night' }
};
window.WEATHER = {
  clear:  { ico: '☀️', en: 'Summer · sunny day', kk: 'Жаз · шуақты күн' },
  spring: { ico: '🌸', en: 'Spring · blossom', kk: 'Көктем · гүлдер' },
  autumn: { ico: '🍂', en: 'Autumn · golden leaves', kk: 'Күз · сары жапырақ' },
  rain:   { ico: '🌧️', en: 'Rainy day · rainbow', kk: 'Жаңбыр · кемпірқосақ' },
  storm:  { ico: '⛈️', en: 'Thunderstorm', kk: 'Найзағайлы жаңбыр' },
  fog:    { ico: '🌫️', en: 'Misty morning', kk: 'Тұманды таң' },
  snow:   { ico: '❄️', en: 'Winter · snow', kk: 'Қыс · қар' },
  night:  { ico: '🌙', en: 'Night · stars', kk: 'Түн · жұлдыздар' },
  sunset: { ico: '🌇', en: 'Evening · sunset', kk: 'Кеш · күн батуы' },
  dawn:   { ico: '🌅', en: 'Dawn · sunrise', kk: 'Таң · күн шығуы' }
};
window.eraYear = (y, lang) => y < 0 ? (lang === 'kk' ? 'б.з.д. ' + (-y) : (-y) + ' BC') : String(y);

/* ---------- Spoken lines of the audio guide (all pre-recorded: female voice, EN + KK) ---------- */
window.SAY = (function () {
  const plain = x => String(x).replace(/\s*·\s*/g, ', ').replace(/≈\s*/g, '').replace(/–/g, ' – ');
  const yr = (y, l) => y < 0 ? (l === 'kk' ? `біздің заманымызға дейінгі ${-y} жыл` : `${-y} BC`) : (l === 'kk' ? `${y} жыл` : String(y));
  return {
    ask: [{ lang: 'en', text: 'Hello! Please choose your language: English or Kazakh.' }, { lang: 'kk', text: 'Сәлем! Тілді таңдаңыз: ағылшын тілі немесе қазақ тілі.' }],
    chosen: { en: 'You chose English. Great, let’s begin!', kk: 'Сіз қазақ тілін таңдадыңыз. Керемет, бастайық!' },
    voiceOn: { en: 'The voice guide is on.', kk: 'Дыбыстық гид қосылды.' },
    travel: (s, l) => { const e = ERA[s.id]; if (!e) return ''; return l === 'kk' ? `Уақыт машинасы! Біз ${yr(e.y, l)} уақытына келдік: ${plain(e.c.kk)}.` : `Time machine! We travel back to ${yr(e.y, l)}: ${plain(e.c.en)}.`; },
    heroes: (s, l) => l === 'kk' ? `«${s.kk}» кейіпкерлерімен танысыңыз: ${s.chars.map(c => c.n.kk).join(', ')}. Кейіпкерді таңдаңыз — ол кітаптан шығып, сөйлейді.` : `Meet the heroes of ${s.en}: ${s.chars.map(c => c.n.en).join(', ')}. Choose a hero, and the hero will pop up from the book and speak.`,
    trailer: (s, l) => l === 'kk' ? `Бұл — «${s.kk}» буктрейлері. Ойнату батырмасын басып, тамашалаңыз. Жаңа сөздерді де қайталап шығыңыз.` : `This is the book trailer of ${s.en}. Press play and watch the story come alive. Then learn the new words.`,
    letters: (s, l) => l === 'kk' ? `Кейіпкер саған хат жазды. Хатты тыңдап, оқып шық, содан кейін ағылшын тілінде жауап жаз.` : `${s.letter.from} has written you a letter. Listen to it, and then write a reply in English.`,
    tasks: (s, l) => l === 'kk' ? `«${s.kk}» бойынша үш тапсырма: тест, сөздерді сәйкестендіру және сөйлеу. Сәттілік тілеймін!` : `Here are three tasks for ${s.en}: a quiz, matching words, and speaking. Good luck!`,
    guide: (s, l) => l === 'kk' ? `Мен — Тұлпар, сенің AI‑гидің. Мен ағылшынша сұрақ қоямын. Ағылшынша жауап бер: сөйле немесе жаз.` : `I am Tulpar, your AI guide. I will ask you a question. Answer in English — you can speak or type.`
  };
})();
