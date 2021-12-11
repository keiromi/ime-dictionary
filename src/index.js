import { dictMaker } from '@heppokofrontend/dictionary-file-maker';
import kawarabeEcma from './members/kawarabe-ecma.js';
import { format } from './format';

const dict = [
  ...format(kawarabeEcma),
];

dictMaker(dict, 'win', './downloads'); // The text file is writen.
