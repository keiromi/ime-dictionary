import { dictMaker } from '@heppokofrontend/dictionary-file-maker';
import oruko from './members/amase-oruko.js';
import asuki from './members/akabami-asuki.js';
import ecma from './members/kawarabe-ecma.js';
import limone from './members/kiyomi-limone.js';
import naaka from './members/naaka.js';
import petaco from './members/takomiya-petaco.js';
import wakaba from './members/touou-wakaba.js';
import { format } from './format';

const out = './downloads';
const dict = [
  ...format(oruko),
  ...format(asuki),
  ...format(ecma),
  ...format(limone),
  ...format(naaka),
  ...format(petaco),
  ...format(wakaba),
];

// export
dictMaker(dict, 'win', out);
dictMaker(dict, 'win-google', out);
dictMaker(dict, 'mac', out);
