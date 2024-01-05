import * as csstree from 'css-tree';
import { RuleSet } from '../../types';

const fonts = [
  `@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap&subset=latin,latin-ext');`,
  `@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap&subset=latin,latin-ext');`,
  `@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:wght@200;400;500,700&display=swap&subset=latin,latin-ext');`,
  `@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@400;700&display=swap&subset=latin,latin-ext');`,
  `@import url('https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap');`
];

export const cardboardFontImports: RuleSet = fonts.map(font => {
  return csstree.parse(font, { context: 'atrule', positions: true });
}); // todo: add source

// Font aliases are readable by csstype.PropertiesHyphen
export const cardboardFonts = {
  baseFont: 'Noto Sans, StixGeneral'
};
