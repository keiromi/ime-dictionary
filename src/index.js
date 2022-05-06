import { dictMaker } from '@heppokofrontend/dictionary-file-maker';
import oruko from './members/amase-oruko';
import asuki from './members/akabami-asuki';
import ecma from './members/kawarabe-ecma';
import limone from './members/kiyomi-limone';
import naaka from './members/nakaoka-naaka';
import petaco from './members/takomiya-petaco';
import wakaba from './members/touou-wakaba';
import kusari from './members/tetsuno-kusari';
import manmaru from './members/manmaru';
import oru from './members/yorushiro-oru';
import { format } from './format';
import { join } from 'path';

const out = './downloads';
const dict = [
  ...format(oruko),
  ...format(asuki),
  ...format(ecma),
  ...format(limone),
  ...format(naaka),
  ...format(petaco),
  ...format(wakaba),
  ...format(kusari),
  ...format(manmaru),
  ...format(oru),
];
// macOS向けのダッシュにWindows向けのダッシュを変換する
const mac = (_dict) => _dict.map(data => {
  return {
    input: data.input.replace(/〜/g, '～'),
    output: data.output.replace(/〜/g, '～'),
  };
});

// export
dictMaker(dict, 'win', join(out, 'keiromi-windows.txt'));
dictMaker(dict, 'win-google', join(out, 'keiromi-windows--google-ime.txt'));
dictMaker(mac(dict), 'mac', join(out, 'keiromi-macos.txt'));
