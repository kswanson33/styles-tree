import { bookRootRules } from "../features/bookRootFeature";
import { twoPartRules } from "../features/twoPartFeature";
import { includeFeature, writeBookCss } from '../book';

console.log("****Begin Book****");
const exampleBook = {
  name: 'example-two',
  rules: []
};

includeFeature(exampleBook, twoPartRules);
includeFeature(exampleBook, bookRootRules);

writeBookCss(exampleBook);

