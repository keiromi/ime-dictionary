import { dictMaker } from '@heppokofrontend/dictionary-file-maker';
import oruko from './members/amase-oruko.js';
import asuki from './members/akabami-asuki.js';
import ecma from './members/kawarabe-ecma.js';
import limone from './members/kiyomi-limone.js';
import naaka from './members/naaka.js';
import { format } from './format';

const dict = [
  ...format(oruko),
  ...format(asuki),
  ...format(ecma),
  ...format(limone),
  ...format(naaka),
];

dictMaker(dict, 'win', './downloads'); // The text file is writen.
