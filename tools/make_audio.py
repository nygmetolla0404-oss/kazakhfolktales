#!/usr/bin/env python3
"""Generate neural voice-over for the site (English + Kazakh) with edge-tts.

Usage:  python3 tools/make_audio.py tools/clips.json
clips.json is produced by opening tools/audiolist.html (see README). Existing files are skipped,
so after editing texts just run it again. Writes assets/audio/<key>.mp3 and js/audio-map.js.
"""
import asyncio, json, os, subprocess, sys
import edge_tts

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'assets', 'audio')
VOICES = {  # one calm, accent-free female voice for the whole site (guide, narrator, heroes, letters)
    'guide':    ('en-US-AvaNeural', '+0Hz', '-4%'),
}
KK = 'kk-KZ-AigulNeural'  # native Kazakh female voice
OLD = {'guide': 'en-US-AvaNeural'}  # clips made before voices.json existed: only the guide ones are kept
MF = os.path.join(OUT, 'voices.json')
MANIFEST = json.load(open(MF)) if os.path.exists(MF) else {}


def key(lang, text):
    h = 0x811c9dc5
    for b in (lang + '|' + text).encode('utf-8'):
        h ^= b
        h = (h * 0x01000193) & 0xffffffff
    return '%08x' % h


async def one(c, sem, done):
    k = key(c['lang'], c['text'])
    dst = os.path.join(OUT, k + '.mp3')
    v, pitch, rate = VOICES['guide']
    if c['lang'] == 'kk': v = KK
    if os.path.exists(dst) and MANIFEST.get(k, OLD.get(c['voice'], 'old') if c['lang'] == 'en' else KK) == v:
        done[k] = dur(dst); MANIFEST[k] = v; return
    if c['lang'] == 'kk':
        v = KK; pitch = '+0Hz'; rate = '-6%'
    if c.get('rate'): rate = c['rate']
    tmp = dst + '.tmp.mp3'
    async with sem:
        for attempt in range(4):
            try:
                await edge_tts.Communicate(c['text'], v, rate=rate, pitch=pitch).save(tmp)
                break
            except Exception as e:
                print('retry', k, e); await asyncio.sleep(3 * (attempt + 1))
        else:
            print('FAILED', c['text'][:60]); return
    subprocess.run(['ffmpeg', '-loglevel', 'error', '-y', '-i', tmp, '-ac', '1', '-b:a', '40k', dst])
    os.remove(tmp)
    done[k] = dur(dst); MANIFEST[k] = v
    if len(done) % 50 == 0: print(len(done), 'done')


def dur(p):
    try:
        r = subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', p], capture_output=True, text=True)
        return round(float(r.stdout.strip()), 2)
    except Exception:
        return round(os.path.getsize(p) / 5000, 2)


async def main(path):
    os.makedirs(OUT, exist_ok=True)
    clips = json.load(open(path, encoding='utf-8'))
    sem, done = asyncio.Semaphore(6), {}
    await asyncio.gather(*(one(c, sem, done) for c in clips))
    with open(os.path.join(ROOT, 'js', 'audio-map.js'), 'w') as f:
        f.write('window.AUDIO_MAP=' + json.dumps(done, separators=(',', ':')) + ';\n')
    json.dump(MANIFEST, open(MF, 'w'), separators=(',', ':'))
    print('clips:', len(done))


if __name__ == '__main__':
    asyncio.run(main(sys.argv[1] if len(sys.argv) > 1 else os.path.join(ROOT, 'tools', 'clips.json')))
