#!/usr/bin/env python3
"""Embed small copies of assets/img/w/*.jpg into js/imgdata.js (so 3D textures work even from file://)
and credits.json into js/credits.js.  Usage: python3 tools/make_imgdata.py   (macOS: uses sips)"""
import base64, json, os, subprocess, tempfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
W = os.path.join(ROOT, 'assets', 'img', 'w')
out, tmp = {}, tempfile.mkdtemp()
for f in sorted(os.listdir(W)):
    if not f.endswith('.jpg') or f.startswith('tmp_'):
        continue
    k = f[:-4]; dst = os.path.join(tmp, f)
    subprocess.run(['sips', '-Z', '512', '-s', 'format', 'jpeg', '-s', 'formatOptions', '72', os.path.join(W, f), '--out', dst], capture_output=True)
    out[k] = 'data:image/jpeg;base64,' + base64.b64encode(open(dst, 'rb').read()).decode()
open(os.path.join(ROOT, 'js', 'imgdata.js'), 'w').write('window.IMGDATA=' + json.dumps(out, separators=(',', ':')) + ';\n')
cred = {}
cp = os.path.join(W, 'credits.json')
if os.path.exists(cp):
    cred = {k: v for k, v in json.load(open(cp)).items() if k in out}
open(os.path.join(ROOT, 'js', 'credits.js'), 'w').write('window.CREDITS=' + json.dumps(cred, ensure_ascii=False) + ';\n')
print(len(out), 'images embedded,', sum(len(v) for v in out.values()) // 1024, 'KB')
