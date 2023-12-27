import * as csstree from 'css-tree';
const fs = require('fs').promises;
import * as prettier from 'prettier';
import { RuleSet } from './types';
// import { SourceMapGenerator } from '';

export type Book = { name: String, rules: RuleSet }

// TODO: this could become a member of Book
export const includeFeature = (book: Book, parsedFeature: RuleSet): void => {
  book.rules = [...book.rules, ...parsedFeature];
}

const getAstFromBook = (book: Book): any => {
  return csstree.fromPlainObject({
    type: 'StyleSheet', children: book.rules
  });
}

const generateBookCss = (book: Book): { css: string, map: any } => {
  return csstree.generate(
    getAstFromBook(book), { sourceMap: true }
  );
}

// writes css file for a book & its mapping
export const writeBookCss = (book: Book) => {
  let generated = generateBookCss(book);
  try {
    const outputDir = 'out'
    const outputFile = `${ book.name }.css`
    // write css
    prettier.format(
      generated.css, { parser: 'css'}
    ).then ((css) => fs.writeFile(
      `${outputDir}/${outputFile}`,
      `${css}\n/*# sourceMappingURL=./${outputFile}.map */` // mapping comment
    ));
    // write map
    fs.writeFile(`${outputDir}/${outputFile}.map`, generated.map.toString());
  } catch (error) {
    console.error(`Got an error trying to write to a file: ${error.message}`);
  }
}
