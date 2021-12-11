import { dictMaker } from '@heppokofrontend/dictionary-file-maker';
import alabamiAsuki from './members/akabami-asuki.js';
import kawarabeEcma from './members/kawarabe-ecma.js';
import { format } from './format';

const dict = [
  ...format(alabamiAsuki),
  ...format(kawarabeEcma),
];

dictMaker(dict, 'win', './downloads'); // The text file is writen.
