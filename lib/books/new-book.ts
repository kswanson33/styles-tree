import { includeFeature, writeBookCss } from '../book';
import { figureRules } from "../features/figureFeature";
import { cardboardFontImports } from "../themes/cardboard/typography";

console.log("****Begin Book****");
const exampleBook = {
  name: 'example',
  rules: []
};

includeFeature(exampleBook, cardboardFontImports);
includeFeature(exampleBook, figureRules);

writeBookCss(exampleBook);
