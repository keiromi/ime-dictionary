import { dictMaker } from '@heppokofrontend/dictionary-file-maker';
import oruko from './members/amase-oruko.js';
import asuki from './members/akabami-asuki.js';
import ecma from './members/kawarabe-ecma.js';
import limone from './members/kiyomi-limone.js';
import naaka from './members/naaka.js';
import petaco from './members/takomiya-petaco.js';
import wakaba from './members/touou-wakaba.js';
import { format } from './format';
import { join } from 'path';

const out = './downloads';
const others = [
  {
    input: 'しとらんど',
    output: 'シトランド',
  },
];
const dict = [
  ...format(oruko),
  ...format(asuki),
  ...format(ecma),
  ...format(limone),
  ...format(naaka),
  ...format(petaco),
  ...format(wakaba),
  ...others,
];
// macOS向けのダッシュにWindows向けのダッシュを変換する
const mac = (_dict) => _dict.map(data => {
  return {
    input: data.input.replace(/〜/g, '～'),
    output: data.output.replace(/〜/g, '～'),
  };
});

// export
dictMaker(dict, 'win', join(out, 'windows.txt'));
dictMaker(dict, 'win-google', join(out, 'windows--google-ime.txt'));
dictMaker(mac(dict), 'mac', join(out, 'macos.txt'));
