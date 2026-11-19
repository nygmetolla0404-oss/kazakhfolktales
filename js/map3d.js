/* 3D Fairy Tale Map of Kazakhstan — green hills, mountains, rivers, flowers; magic books with mini heroes;
   AI-guide horse Tulpar & eagle Berkut */
window.MapView = function (opts) {
  const T = THREE, E = ENG;
  const { canvas, labelsEl, onPick, onNear, getLang, stories, onReady } = opts;
  const LON0 = 67, LAT0 = 48, KX = Math.cos(LAT0 * Math.PI / 180), DEPTH = .7, TOP = DEPTH + .1;
  const P = (lon, lat) => [(lon - LON0) * KX, -(lat - LAT0)];
  const LL = (x, z) => [x / KX + LON0, -z + LAT0];

  const renderer = E.renderer(canvas, 1.75);
  const scene = new T.Scene(); scene.fog = new T.Fog(0xcdeeff, 55, 150);
  const camera = new T.PerspectiveCamera(42, 1, .05, 900); camera.position.set(0, 23, 16);
  const controls = new T.OrbitControls(camera, canvas);
  Object.assign(controls, { enableDamping: true, dampingFactor: .08, minDistance: 4, maxDistance: 46, maxPolarAngle: Math.PI * .46 }); controls.target.set(0, 0, .5);

  E.sky(scene, 0x4cb8ff, 0xdff4ff);
  const sunS = E.sunFace(16); sunS.position.set(-55, 42, -70); scene.add(sunS);
  const sunL = E.lights(scene, 18, new T.Vector3(-16, 26, 14));
  const cl = E.clouds(scene, 16, 30, 8);

  /* ---------- ocean ---------- */
  const wcv = document.createElement('canvas'); wcv.width = wcv.height = 256; { const c = wcv.getContext('2d'); c.fillStyle = '#39b0ee'; c.fillRect(0, 0, 256, 256); for (let i = 0; i < 120; i++) { c.strokeStyle = `rgba(255,255,255,${.12 + Math.random() * .2})`; c.lineWidth = 2; const x = Math.random() * 256, y = Math.random() * 256; c.beginPath(); c.moveTo(x, y); c.quadraticCurveTo(x + 8, y - 4, x + 18, y); c.stroke(); } }
  const wtex = E.ctex(wcv, [60, 60]);
  const ocean = new T.Mesh(new T.PlaneGeometry(400, 400), new T.MeshStandardMaterial({ map: wtex, roughness: .35, metalness: .05 }));
  ocean.rotation.x = -Math.PI / 2; ocean.position.y = -.2; scene.add(ocean);

  /* ---------- country outline ---------- */
  const pts = window.KZ_SHAPE.map(([lo, la]) => { const [x, z] = P(lo, la); return new T.Vector2(x, -z); });
  let minX = 1e9, maxX = -1e9, minY = 1e9, maxY = -1e9; pts.forEach(p => { minX = Math.min(minX, p.x); maxX = Math.max(maxX, p.x); minY = Math.min(minY, p.y); maxY = Math.max(maxY, p.y); });
  function inPolyArr(arr, x, y) { let ins = false; for (let i = 0, j = arr.length - 1; i < arr.length; j = i++) { const a = arr[i], b = arr[j]; if (((a.y > y) !== (b.y > y)) && (x < (b.x - a.x) * (y - a.y) / (b.y - a.y) + a.x)) ins = !ins; } return ins; }
  const inPoly = (x, y) => inPolyArr(pts, x, y);
  function segDist(px, py, ax, ay, bx, by) { const dx = bx - ax, dy = by - ay, l = dx * dx + dy * dy, t = l ? Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / l)) : 0; const qx = ax + t * dx - px, qy = ay + t * dy - py; return Math.sqrt(qx * qx + qy * qy); }
  function edgeDist(x, y) { let d = 1e9; for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) { const a = pts[i], b = pts[j]; if (Math.abs(a.x - x) > 1.2 && Math.abs(b.x - x) > 1.2) continue; d = Math.min(d, segDist(x, y, a.x, a.y, b.x, b.y)); } return d; }

  /* lakes & rivers (lon, lat) */
  const LAKES = [
    [[59.4, 46.7], [60.6, 46.8], [61.6, 46.3], [61.2, 45.6], [60.2, 45.4], [59.3, 45.8]],
    [[73.4, 46.4], [74.2, 46.85], [75.4, 46.75], [76.6, 46.6], [78.2, 46.55], [79.3, 46.35], [79.1, 46.05], [77.8, 46.2], [76.4, 46.3], [75.2, 46.4], [74.4, 46.2], [73.7, 45.9]],
    [[83.6, 48.05], [84.4, 48.15], [84.9, 47.95], [84.1, 47.8]], [[81.2, 46.2], [81.9, 46.3], [82.0, 45.9], [81.4, 45.85]]
  ].map(l => l.map(([lo, la]) => { const [x, z] = P(lo, la); return new T.Vector2(x, -z); }));
  const RIVERS = [
    [[84.5, 47.5], [82.6, 49.95], [80.23, 50.41], [78.3, 51.2], [76.95, 52.29], [75.3, 53.4], [74.2, 54.5]],
    [[68.2, 40.8], [67.4, 41.9], [66.7, 42.3], [65.5, 44.8], [63.5, 45.7], [61.6, 46.3]],
    [[51.37, 51.23], [51.5, 50.2], [51.8, 48.4], [51.9, 47.1], [51.95, 46.9]],
    [[71.43, 51.13], [70.2, 51.6], [69.2, 52.2], [68.2, 52.9], [67.6, 54.2], [69.15, 54.87]],
    [[80.5, 43.9], [79.8, 44.1], [78.5, 44.3], [77.2, 44.9], [75.6, 45.9], [74.6, 46.35]],
    [[65.3, 51.8], [64.5, 50.6], [63.9, 49.8], [63.5, 48.6]]
  ].map(r => r.map(([lo, la]) => { const [x, z] = P(lo, la); return [x, -z]; }));
  function riverDist(x, y) { let d = 1e9; RIVERS.forEach(r => { for (let i = 1; i < r.length; i++) d = Math.min(d, segDist(x, y, r[i - 1][0], r[i - 1][1], r[i][0], r[i][1])); }); return d; }
  /* mountains: lon, lat, height, radius */
  const MTN = [[86.2, 49.3, 1.5, 1.1], [85, 49.7, 1.1, .9], [83.8, 50.2, .7, .8], [76.9, 43.0, 1.5, 1.0], [78.4, 42.9, 1.7, 1.0], [79.8, 42.7, 1.4, .8], [75.4, 42.95, 1.1, .8], [73.8, 43.1, .7, .6],
    [80.6, 45.2, 1.0, .9], [82.5, 47.1, .6, .7], [69.6, 43.3, .5, .8], [67.3, 48.4, .45, .55], [69.4, 53.1, .3, .45], [59.0, 48.6, .3, .8], [72.6, 49.6, .25, 1.2], [75.6, 49.9, .3, 1.0]];
  const MTNP = MTN.map(([lo, la, h, r]) => { const [x, z] = P(lo, la); return [x, z, h, r]; });
  function rawH(x, z) {
    let h = (E.fbm(x * .45 + 3, z * .45 + 7) - .45) * .32;
    MTNP.forEach(([mx, mz, mh, r]) => { const d2 = ((x - mx) ** 2 + (z - mz) ** 2) / (r * r); if (d2 < 4) h += mh * Math.exp(-d2 * 1.6) * (.75 + E.fbm(x * 2.2, z * 2.2) * .5); });
    return h;
  }

  /* height grid */
  const STEP = .085, NX = Math.ceil((maxX - minX) / STEP) + 1, NY = Math.ceil((maxY - minY) / STEP) + 1;
  const HG = new Float32Array(NX * NY), IN = new Uint8Array(NX * NY), KIND = new Uint8Array(NX * NY);
  for (let j = 0; j < NY; j++) for (let i = 0; i < NX; i++) {
    const x = minX + i * STEP, y = minY + j * STEP, k = j * NX + i;
    if (!inPoly(x, y)) continue; IN[k] = 1;
    const e = Math.min(1, edgeDist(x, y) / .45), fall = e * e * (3 - 2 * e);
    let h = Math.max(-.02, rawH(x, -y)) * fall + .02 * fall;
    if (LAKES.some(l => inPolyArr(l, x, y))) { h = -.04; KIND[k] = 2; }
    else { const rd = riverDist(x, y); if (rd < .07) { h = Math.min(h, -.015); KIND[k] = 1; } else if (rd < .16) h *= (rd - .07) / .09; }
    HG[k] = h;
  }
  function ground(x, z) {
    const gx = (x - minX) / STEP, gy = (-z - minY) / STEP, i = Math.floor(gx), j = Math.floor(gy);
    if (i < 0 || j < 0 || i >= NX - 1 || j >= NY - 1) return TOP;
    const fx = gx - i, fy = gy - j, k = j * NX + i;
    const h = HG[k] * (1 - fx) * (1 - fy) + HG[k + 1] * fx * (1 - fy) + HG[k + NX] * (1 - fx) * fy + HG[k + NX + 1] * fx * fy;
    return TOP + Math.max(0, h);
  }
  const at = (lon, lat, y) => { const [x, z] = P(lon, lat); return new T.Vector3(x, ground(x, z) + (y || 0), z); };

  /* terrain mesh */
  {
    const pos = new Float32Array(NX * NY * 3), col = new Float32Array(NX * NY * 3), idx = [];
    const c = new T.Color(), GREENS = [new T.Color(0x6cc84d), new T.Color(0x82d455), new T.Color(0x5bb543), new T.Color(0x93dc62)], SAND = new T.Color(0xeedc8c), STEPPE = new T.Color(0xc4d86a), ROCK = new T.Color(0xa9a8a2), SNOW = new T.Color(0xffffff), WATER = new T.Color(0x3fb6f2), DARK = new T.Color(0x4ea83c);
    for (let j = 0; j < NY; j++) for (let i = 0; i < NX; i++) {
      const k = j * NX + i, x = minX + i * STEP, y = minY + j * STEP, h = HG[k];
      pos[k * 3] = x; pos[k * 3 + 1] = TOP + h; pos[k * 3 + 2] = -y;
      const [lo, la] = LL(x, -y), n = E.fbm(x * 1.7, y * 1.7);
      c.copy(GREENS[Math.floor(n * 7) % 4]);
      const south = Math.min(1, Math.max(0, (46.8 - la) / 2.2)), west = Math.min(1, Math.max(0, (57 - lo) / 3)) * Math.min(1, Math.max(0, (47.5 - la) / 1.5));
      if (lo < 75 || la < 45) c.lerp(STEPPE, south * .55);
      c.lerp(SAND, Math.max(west * .75, south * (lo < 72 && la < 45.5 ? .55 : .1)));
      if (la > 51.5) c.lerp(DARK, .25);
      if (h > .35) c.lerp(ROCK, Math.min(1, (h - .35) / .45)); if (h > .95) c.lerp(SNOW, Math.min(1, (h - .95) / .2));
      if (KIND[k]) c.copy(WATER);
      col[k * 3] = c.r; col[k * 3 + 1] = c.g; col[k * 3 + 2] = c.b;
    }
    for (let j = 0; j < NY - 1; j++) for (let i = 0; i < NX - 1; i++) { const k = j * NX + i; if (IN[k] && IN[k + 1] && IN[k + NX] && IN[k + NX + 1]) idx.push(k, k + NX, k + 1, k + 1, k + NX, k + NX + 1); }
    const g = new T.BufferGeometry(); g.setAttribute('position', new T.BufferAttribute(pos, 3)); g.setAttribute('color', new T.BufferAttribute(col, 3)); g.setIndex(idx); g.computeVertexNormals();
    const terrain = new T.Mesh(g, new T.MeshStandardMaterial({ vertexColors: true, roughness: .95, flatShading: true })); terrain.receiveShadow = true; terrain.castShadow = true; scene.add(terrain);
    const shape = new T.Shape(pts); const eg = new T.ExtrudeGeometry(shape, { depth: DEPTH, bevelEnabled: true, bevelThickness: .08, bevelSize: .06, bevelSegments: 2 }); eg.rotateX(-Math.PI / 2);
    const sideCv = document.createElement('canvas'); sideCv.width = 16; sideCv.height = 128; { const cc = sideCv.getContext('2d'); const gr = cc.createLinearGradient(0, 0, 0, 128); gr.addColorStop(0, '#5bb543'); gr.addColorStop(.14, '#5bb543'); gr.addColorStop(.16, '#b77a44'); gr.addColorStop(.6, '#9a6236'); gr.addColorStop(1, '#6a4224'); cc.fillStyle = gr; cc.fillRect(0, 0, 16, 128); }
    const slab = new T.Mesh(eg, [new T.MeshStandardMaterial({ color: 0x6cc84d, roughness: 1 }), new T.MeshStandardMaterial({ map: E.ctex(sideCv), roughness: .9 })]); slab.position.y = -.005; slab.receiveShadow = true; scene.add(slab);
    const lakeM = new T.MeshStandardMaterial({ color: 0x46c0f5, roughness: .2, metalness: .1, transparent: true, opacity: .92 });
    LAKES.forEach(l => { const sg = new T.ShapeGeometry(new T.Shape(l)); sg.rotateX(-Math.PI / 2); const m = new T.Mesh(sg, lakeM); m.position.y = TOP + .005; scene.add(m); });
  }

  /* ---------- vegetation (instanced) ---------- */
  const samplePts = (n, fn) => { const out = []; let tries = 0; while (out.length < n && tries < n * 30) { tries++; const x = E.rnd(minX, maxX), y = E.rnd(minY, maxY); const gi = Math.round((x - minX) / STEP), gj = Math.round((y - minY) / STEP), k = gj * NX + gi; if (!IN[k] || KIND[k]) continue; const [lo, la] = LL(x, -y); if (fn(lo, la, HG[k], x, -y)) out.push([x, ground(x, -y), -y]); } return out; };
  const isGreen = (lo, la) => la > 46 || (lo > 74 && la > 43.2);
  scene.add(E.grassField(samplePts(9000, (lo, la, h) => h < .9 && (isGreen(lo, la) || Math.random() < .3)), .45));
  scene.add(E.flowerField(samplePts(2600, (lo, la, h) => h < .6 && isGreen(lo, la)), .2));
  const treePts = samplePts(900, (lo, la, h) => h < .9 && ((la > 51.3 && Math.random() < .8) || (h > .15 && h < .8) || (lo > 83 && la > 48.5) || Math.random() < .06)); treePts.forEach(p => p[3] = E.rnd(.13, .2));
  scene.add(E.treeField(treePts, 1));
  const add = (o, pos, ry) => { o.position.copy(pos); if (ry != null) o.rotation.y = ry; scene.add(o); return o; };
  for (let i = 0; i < 40; i++) { const p = samplePts(1, (lo, la, h) => (h > .2 && h < .9) || lo > 84)[0]; if (p) add(E.tree(E.rnd(.15, .22), 'pine'), new T.Vector3(p[0], p[1], p[2])); }
  [[68, 48.9], [68.5, 48.7], [62, 47.4], [62.5, 47.6], [73.5, 45.2], [55, 48.2], [55.5, 48.4], [58.5, 50.6], [77.5, 48.1], [78, 48.4], [60.5, 44.0], [70.5, 45.0], [64.5, 46.8], [74.3, 50.2], [82.3, 51.2], [66, 50.2], [53.5, 49.5], [79.5, 49.2]]
    .forEach(([a, b], i) => add(E.yurt(E.rnd(.12, .15), ['#c8323a', '#2a6aa8', '#d0702a'][i % 3]), at(a, b), E.rnd(0, 6)));
  for (let i = 0; i < 40; i++) { const p = samplePts(1, (lo, la) => la < 46.5 || lo < 57)[0]; if (p) add(E.rock(E.rnd(.04, .09), 0xd8c08a), new T.Vector3(p[0], p[1], p[2])); }
  const bt = add(E.baiterek(.16), at(71.2, 51.35));
  const roofs = [0xd8453a, 0x2a8ac0, 0xf2b33d, 0x5aa84a];
  const town = (lo, la, n) => { for (let i = 0; i < n; i++) { const p = at(lo + E.rnd(-.4, .4), la + E.rnd(-.22, .22)); const h = E.rnd(.08, .22), w = E.rnd(.07, .11); const b = new T.Mesh(new T.BoxGeometry(w, h, w), E.mat([0xfff4e0, 0xe6f2ff, 0xffe9d0][i % 3])); b.position.set(p.x, p.y + h / 2, p.z); b.castShadow = true; scene.add(b); const r = new T.Mesh(new T.ConeGeometry(w * .8, w * .7, 4), E.mat(roofs[i % 4])); r.rotation.y = Math.PI / 4; r.position.set(p.x, p.y + h + w * .35, p.z); r.castShadow = true; scene.add(r); } };
  town(71.6, 51.05, 16); town(76.9, 43.3, 18); town(69.6, 42.35, 9); town(57.2, 50.28, 6); town(73.1, 49.8, 7); town(51.37, 51.2, 5); town(82.6, 49.95, 6); town(76.95, 52.29, 6); town(63.6, 53.2, 5);

  /* ---------- labels ---------- */
  const PLACES = [
    [71.43, 51.13, 'Astana', 'Астана', 'cap'], [76.9, 43.24, 'Almaty', 'Алматы'], [69.6, 42.3, 'Shymkent', 'Шымкент'], [57.2, 50.28, 'Aktobe', 'Ақтөбе'], [51.37, 51.23, 'Oral', 'Орал'],
    [51.9, 47.1, 'Atyrau', 'Атырау'], [51.2, 43.65, 'Aktau', 'Ақтау'], [65.5, 44.85, 'Kyzylorda', 'Қызылорда'], [71.4, 42.9, 'Taraz', 'Тараз'], [73.1, 49.8, 'Karaganda', 'Қарағанды'],
    [76.95, 52.29, 'Pavlodar', 'Павлодар'], [80.23, 50.41, 'Semey', 'Семей'], [82.6, 49.95, 'Oskemen', 'Өскемен'], [63.6, 53.2, 'Kostanay', 'Қостанай'], [69.15, 54.87, 'Petropavl', 'Петропавл'],
    [68.25, 43.3, 'Turkistan', 'Түркістан'], [69.4, 53.28, 'Kokshetau', 'Көкшетау'], [67.7, 47.8, 'Ulytau', 'Ұлытау'],
    [50.2, 45.0, 'Caspian Sea', 'Каспий теңізі', 'w'], [60.4, 46.1, 'Aral Sea', 'Арал теңізі', 'w'], [76.5, 46.45, 'Lake Balkhash', 'Балқаш көлі', 'w'], [86.0, 49.7, 'Altai', 'Алтай', 'm'], [78.2, 42.6, 'Tian Shan', 'Тянь-Шань', 'm']
  ];
  const placeEls = PLACES.map(p => { const el = document.createElement('div'); el.className = 'clabel ' + (p[4] || ''); labelsEl.appendChild(el); return { el, pos: at(p[0], p[1], .12), p }; });

  /* ---------- magic books with mini heroes ---------- */
  const books = [], pickables = [], minis = [];
  const parchment = (c, W, H) => { const g = c.createLinearGradient(0, 0, W, H); g.addColorStop(0, '#fff8e6'); g.addColorStop(1, '#f6e2b4'); c.fillStyle = g; c.fillRect(0, 0, W, H); };
  function pageLeft(s, photo) {
    const W = 512, H = 640, cv = document.createElement('canvas'); cv.width = W; cv.height = H; const c = cv.getContext('2d'); parchment(c, W, H);
    c.save(); E.roundRect(c, 30, 30, W - 60, H - 60, 30); c.clip();
    if (photo) { const r = Math.max((W - 60) / photo.width, (H - 60) / photo.height), w = photo.width * r, h = photo.height * r; c.drawImage(photo, 30 + (W - 60 - w) / 2, 30 + (H - 60 - h) / 2, w, h); }
    else { const g = c.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#8fd8ff'); g.addColorStop(1, '#7ed957'); c.fillStyle = g; c.fillRect(0, 0, W, H); c.drawImage(Avatar.canvas(s.chars[0].a, 400), 56, 110, 400, 400); }
    c.restore(); c.strokeStyle = '#f2b33d'; c.lineWidth = 12; E.roundRect(c, 30, 30, W - 60, H - 60, 30); c.stroke();
    return cv;
  }
  function pageRight(s, lang) {
    const W = 512, H = 640, cv = document.createElement('canvas'); cv.width = W; cv.height = H; const c = cv.getContext('2d'); parchment(c, W, H);
    c.textAlign = 'center'; c.fillStyle = '#c8323a'; c.font = '800 34px Nunito, sans-serif'; c.fillText(String(stories.indexOf(s) + 1), W / 2, 74);
    c.fillStyle = '#16306a'; let fs = 60; c.font = `800 ${fs}px Nunito, sans-serif`; while (c.measureText(s.en).width > W - 70 && fs > 34) { fs -= 3; c.font = `800 ${fs}px Nunito, sans-serif`; }
    wrap(c, s.en, W / 2, 160, W - 60, fs * 1.08, 3);
    c.fillStyle = '#b5652a'; c.font = '700 34px Nunito, sans-serif'; wrap(c, s.kk, W / 2, 320, W - 70, 40, 2);
    c.fillStyle = '#3a4a6a'; c.font = '600 26px Nunito, sans-serif'; wrap(c, '📍 ' + (s.place[lang] || s.place.en), W / 2, 440, W - 70, 32, 2);
    const V = VALUES[s.value]; c.fillStyle = '#2fae6a'; E.roundRect(c, 80, 535, W - 160, 64, 32); c.fill(); c.fillStyle = '#fff'; c.font = '800 28px Nunito, sans-serif'; c.fillText(V.ico + ' ' + V[lang === 'kk' ? 'kk' : 'en'], W / 2, 578);
    return cv;
  }
  function wrap(c, text, x, y, mw, lh, max) { const w = text.split(' '); let line = '', n = 0; for (let i = 0; i < w.length; i++) { const t = line ? line + ' ' + w[i] : w[i]; if (c.measureText(t).width > mw && line) { c.fillText(line, x, y + n * lh); n++; line = w[i]; if (n >= max - 1) { line = w.slice(i).join(' '); break; } } else line = t; } c.fillText(line, x, y + n * lh); }
  function bentPage(side) { const g = new T.PlaneGeometry(.52, .66, 12, 1); const p = g.attributes.position; for (let i = 0; i < p.count; i++) { const x = p.getX(i) + .26 * side, k = Math.abs(x) / .52; p.setX(i, x); p.setZ(i, Math.sin(k * Math.PI) * .05 + k * .06); } g.computeVertexNormals(); return g; }

  stories.forEach((s, i) => {
    const root = new T.Group(); root.position.copy(at(s.lon, s.lat)); root.scale.setScalar(1.3);
    const ped = new T.Mesh(new T.CylinderGeometry(.34, .42, .14, 8), E.mat(0xfff4e0)); ped.position.y = .07; ped.castShadow = true; root.add(ped);
    const band = new T.Mesh(new T.CylinderGeometry(.425, .425, .05, 8, 1, true), new T.MeshStandardMaterial({ map: E.bandTex('#c8323a', '#f6c34a') })); band.position.y = .07; root.add(band);
    const ring = new T.Mesh(new T.TorusGeometry(.48, .025, 8, 40), new T.MeshBasicMaterial({ color: 0xffd66b })); ring.rotation.x = Math.PI / 2; ring.position.y = .03; root.add(ring);
    const beam = new T.Mesh(new T.CylinderGeometry(.06, .3, 2.4, 16, 1, true), new T.MeshBasicMaterial({ color: 0xfff0b0, transparent: true, opacity: .18, blending: T.AdditiveBlending, depthWrite: false, side: T.DoubleSide })); beam.position.y = 1.25; root.add(beam);
    const book = new T.Group(); book.position.y = .8; root.add(book);
    const tilt = new T.Group(); tilt.rotation.x = -.42; book.add(tilt);
    const cover = E.mat(new T.Color(s.color).getHex(), { roughness: .6 });
    [-1, 1].forEach(sd => { const b = new T.Mesh(new T.BoxGeometry(.56, .7, .03), cover); b.position.set(.28 * sd, 0, -.02); b.rotation.y = -sd * .12; b.castShadow = true; tilt.add(b); });
    tilt.add(new T.Mesh(new T.CylinderGeometry(.03, .03, .7, 8), E.gold()).translateZ(-.02));
    const lt = new T.CanvasTexture(pageLeft(s, null)), rt = new T.CanvasTexture(pageRight(s, getLang())); lt.encoding = rt.encoding = T.sRGBEncoding; lt.anisotropy = rt.anisotropy = 8;
    const pl = new T.Mesh(bentPage(-1), new T.MeshBasicMaterial({ map: lt, side: T.DoubleSide })); pl.position.z = .002;
    const pr = new T.Mesh(bentPage(1), new T.MeshBasicMaterial({ map: rt, side: T.DoubleSide })); pr.position.z = .002;
    tilt.add(pl); tilt.add(pr);
    const sp = E.sparkles(26, .5); sp.position.y = .3; root.add(sp);
    const star = new T.Mesh(new T.OctahedronGeometry(.1), new T.MeshStandardMaterial({ color: 0xffd34d, emissive: 0xffa000, emissiveIntensity: .8, metalness: .6 })); star.position.set(0, 1.4, 0); star.visible = false; root.add(star);
    const hit = new T.Mesh(new T.BoxGeometry(1.3, 1.5, .8), new T.MeshBasicMaterial({ visible: false })); hit.position.y = .8; hit.userData.story = s; root.add(hit); pickables.push(hit);
    scene.add(root);
    const mini = E.character(s.chars[0].a, .2); const mp = root.position; mini.position.set(mp.x + .55, ground(mp.x + .55, mp.z + .15), mp.z + .15); mini.rotation.y = .4; scene.add(mini); minis.push(mini);
    const el = document.createElement('div'); el.className = 'blabel'; el.innerHTML = `<b>${i + 1}</b><span></span>`; el.onclick = () => onPick(s); labelsEl.appendChild(el);
    books.push({ s, root, book, beam, ring, sp, star, lt, rt, el, phase: i * .7 });
    E.img(s.imgs[0]).then(im => { if (im) { lt.image = pageLeft(s, im); lt.needsUpdate = true; } });
  });

  /* ---------- life ---------- */
  let ctrl = null, herds = [], eagles = [], mode = 'view', ready = false;
  E.creatures().then(cr => {
    const tulpar = E.instance(cr.horse, .5), berkut = E.instance(cr.eagle, .55);
    const saddle = new T.Mesh(new T.BoxGeometry(.085, .014, .125), E.mat(0xc8323a)); saddle.position.set(0, .186, -.03); tulpar.add(saddle);
    scene.add(tulpar); scene.add(berkut);
    ctrl = E.Controller({ camera, horse: tulpar, eagle: berkut, rideSpeed: 1.1, flySpeed: 2.2, camDist: 1.25, camH: .55, minAlt: .9, maxAlt: 7,
      ground: (x, z) => ground(x, z), inside: (x, z, fly) => fly ? (x > minX - 4 && x < maxX + 4 && -z > minY - 4 && -z < maxY + 4) : inPoly(x, -z) });
    const st = at(71.0, 50.4); ctrl.place(st.x, st.z, Math.PI);
    ctrl.st.active = false; camera.position.set(0, 23, 16); controls.target.set(0, 0, .5); controls.update();
    [[68.5, 50.2, 1.4], [62.5, 51.5, 1.2], [77.5, 49.0, 1.3]].forEach(([lo, la, r], hi) => {
      for (let k = 0; k < 4; k++) { const h = E.instance(cr.horse, E.rnd(.36, .44), [0xffffff, 0xc89060, 0x8a6048, 0xf0e0c8][k]); scene.add(h); h.userData.action.timeScale = E.rnd(.9, 1.2); herds.push({ h, c: at(lo, la), r: r + E.rnd(-.15, .15), a: k * .35 + hi, sp: .28 + E.rnd(0, .05) }); }
    });
    [[85.8, 49.3, 1.4, 3.2], [77.6, 43.2, 1.8, 3.2], [67.7, 48.0, 1.2, 2.4]].forEach(([lo, la, r, y], k) => { const e = E.instance(cr.eagle, .45); scene.add(e); eagles.push({ e, c: at(lo, la, y), r, a: k * 2, sp: .45 }); });
    ready = true; onReady && onReady(); if (mode !== 'view') setMode(mode);
  });

  /* ---------- interaction ---------- */
  const ray = new T.Raycaster(), mouse = new T.Vector2(); let hovered = null, downAt = null;
  function pickAt(e) { const r = canvas.getBoundingClientRect(); mouse.set((e.clientX - r.left) / r.width * 2 - 1, -(e.clientY - r.top) / r.height * 2 + 1); ray.setFromCamera(mouse, camera); const h = ray.intersectObjects(pickables, false)[0]; return h ? h.object.userData.story : null; }
  canvas.addEventListener('pointermove', e => { const s = pickAt(e); hovered = s; canvas.style.cursor = s ? 'pointer' : ''; });
  canvas.addEventListener('pointerdown', e => downAt = [e.clientX, e.clientY]);
  canvas.addEventListener('pointerup', e => { if (!downAt || Math.hypot(e.clientX - downAt[0], e.clientY - downAt[1]) > 6) return; const s = pickAt(e); if (s) onPick(s); });

  let fly = null;
  function flyTo(pos, target) { fly = { p0: camera.position.clone(), t0: controls.target.clone(), p1: pos, t1: target, k: 0 }; }
  function intro() { if (mode !== 'view') return; camera.position.set(0, 78, 3); controls.target.set(0, 0, .5); controls.update(); fly = { p0: camera.position.clone(), t0: controls.target.clone(), p1: new T.Vector3(0, 23, 16), t1: new T.Vector3(0, 0, .5), k: 0, sp: .38 }; }
  function setMode(m) {
    mode = m; if (!ctrl) return;
    if (m === 'view') { ctrl.st.active = false; controls.enabled = true; ctrl.obj.visible = true; flyTo(new T.Vector3(0, 23, 16), new T.Vector3(0, 0, .5)); }
    else { fly = null; controls.enabled = false; ctrl.setMode(m === 'fly' ? 'fly' : 'ride'); ctrl.st.active = true; ctrl.snap(); }
  }
  function focus(id) {
    const B = books.find(b => b.s.id === id); if (!B) return;
    if (mode === 'view') { const t = B.root.position.clone(); flyTo(t.clone().add(new T.Vector3(0, 4.5, 5)), t); }
    else if (ctrl) ctrl.place(B.root.position.x, B.root.position.z + 1.4, Math.PI);
  }
  function setLang(l) {
    books.forEach(B => { B.rt.image = pageRight(B.s, l); B.rt.needsUpdate = true; B.el.querySelector('span').textContent = l === 'kk' ? B.s.kk : B.s.en; });
    placeEls.forEach(Pl => Pl.el.textContent = l === 'kk' ? Pl.p[3] : Pl.p[2]);
  }
  function markDone(ids) { books.forEach(B => { B.star.visible = ids.includes(B.s.id); B.el.classList.toggle('done', ids.includes(B.s.id)); }); }
  function highlight(id) { books.forEach(B => B.el.classList.toggle('quest', B.s.id === id)); }

  /* ---------- loop ---------- */
  let W = 0, H = 0, paused = false, near = null;
  const clock = new T.Clock(), tmp = new T.Vector3(), one = new T.Vector3();
  function resize() { const r = canvas.parentElement.getBoundingClientRect(); W = r.width; H = r.height; renderer.setSize(W, H, false); camera.aspect = W / H; camera.updateProjectionMatrix(); }
  addEventListener('resize', resize); resize();
  function loop() {
    requestAnimationFrame(loop); if (paused) return;
    const dt = Math.min(clock.getDelta(), .05), t = clock.elapsedTime;
    wtex.offset.x = t * .004; wtex.offset.y = t * .002;
    cl.children.forEach(c => { c.position.x += c.userData.v * dt; if (c.position.x > 34) c.position.x = -34; });
    if (fly) { fly.k = Math.min(1, fly.k + dt * (fly.sp || .8)); const k = 1 - Math.pow(1 - fly.k, 3); camera.position.lerpVectors(fly.p0, fly.p1, k); controls.target.lerpVectors(fly.t0, fly.t1, k); if (fly.k >= 1) fly = null; }
    if (mode === 'view' || !ctrl) controls.update(); else ctrl.update(dt);
    if (bt.userData.ball) bt.userData.ball.rotation.y = t * .5;
    minis.forEach((m, i) => E.animChar(m, t + i));
    herds.forEach(Hd => { Hd.a += Hd.sp * dt / Hd.r * 1.6; const x = Hd.c.x + Math.cos(Hd.a) * Hd.r, z = Hd.c.z + Math.sin(Hd.a) * Hd.r * .7; Hd.h.position.set(x, ground(x, z), z); Hd.h.rotation.y = Math.atan2(-Math.sin(Hd.a) * Hd.r, Math.cos(Hd.a) * Hd.r * .7); Hd.h.userData.mixer.update(dt); });
    eagles.forEach(G => { G.a += G.sp * dt; G.e.position.set(G.c.x + Math.cos(G.a) * G.r, G.c.y + Math.sin(G.a * 2) * .2, G.c.z + Math.sin(G.a) * G.r); G.e.rotation.set(0, -G.a, .35, 'YXZ'); G.e.userData.mixer.update(dt); });
    let best = null, bd = 1e9; const pp = ctrl && mode !== 'view' ? ctrl.obj.position : null;
    books.forEach(B => {
      const ph = t * 1.6 + B.phase; B.book.position.y = .8 + Math.sin(ph) * .05;
      B.book.rotation.y = Math.atan2(camera.position.x - B.root.position.x, camera.position.z - B.root.position.z);
      const hov = hovered === B.s || near === B.s, sc = hov ? 1.18 : 1; B.book.scale.lerp(one.set(sc, sc, sc), .15);
      B.beam.material.opacity = (hov ? .32 : .16) + Math.sin(ph * 1.3) * .04; B.ring.scale.setScalar(1 + Math.sin(ph * 2) * .05); B.sp.rotation.y = t * .3; B.star.rotation.y = t * 2;
      if (pp) { const d = Math.hypot(pp.x - B.root.position.x, pp.z - B.root.position.z); if (d < bd) { bd = d; best = B.s; } }
      tmp.copy(B.root.position); tmp.y += 2.0; tmp.project(camera);
      const dist = camera.position.distanceTo(B.root.position), vis = tmp.z < 1 && Math.abs(tmp.x) < 1.1 && Math.abs(tmp.y) < 1.1 && dist < (mode === 'view' ? 70 : 14);
      B.el.style.opacity = vis ? (mode === 'view' ? 1 : Math.max(0, Math.min(1, (14 - dist) / 5))) : 0; B.el.style.pointerEvents = vis ? 'auto' : 'none'; B.el.classList.toggle('compact', dist > 19);
      B.el.style.transform = `translate(-50%,-100%) translate(${(tmp.x * .5 + .5) * W}px,${(-tmp.y * .5 + .5) * H}px)`;
    });
    placeEls.forEach(Pl => { tmp.copy(Pl.pos).project(camera); const d = camera.position.distanceTo(Pl.pos); const vis = tmp.z < 1 && d < (mode === 'view' ? 40 : 9); Pl.el.style.opacity = vis ? .95 : 0; Pl.el.style.transform = `translate(-50%,-50%) translate(${(tmp.x * .5 + .5) * W}px,${(-tmp.y * .5 + .5) * H}px)`; });
    const nn = pp && bd < (ctrl.st.mode === 'fly' ? 1.6 : 1.0) ? best : null;
    if (nn !== near) { near = nn; onNear && onNear(near); }
    renderer.render(scene, camera);
  }
  loop();
  return { intro, setMode, focus, setLang, markDone, highlight, resize, get near() { return near; }, get ready() { return ready; }, set paused(v) { paused = v; if (!v) { clock.getDelta(); resize(); } } };
};
