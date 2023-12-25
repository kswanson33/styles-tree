import * as csstree from 'css-tree';
const fs = require('fs').promises;
import getCurrentLine from 'get-current-line';
require('source-map-support').install();

// CSS tree operations
const ast = csstree.parse(
  'div { border: calc(1px) solid #ff0000 }',
  { positions: true, filename: getCurrentLine().file, line: getCurrentLine().line-1 } // TODO: automate getting current path
);
// to ensure getting mappings: fill "loc" value (call parse & pass { positions: true, filename: "some_string"} options)
// TODO: monkeypatch parse to get loc info from wherever (although ... maybe sourcemaps would always link back to the patch then?)
// could fix ^ by getting line number from Error stack trace instead

// csstree.walk(ast, (node) => {
//   // console.log(node);
// })
console.log(ast);
const result = csstree.generate(ast, { sourceMap: true }); // TODO: get the type for "result"

// Book stuff
type Book = { name: String, cssArray: Array<any> } // TODO: Array<T> where T is type for "result"

// function that writes css file for a book & its mapping
async function writeBookCss(book: Book): Promise<void> {
  try {
    const outputDir = 'out'
    const outputFile = `${ book.name }.css`
    // write css & map
    await fs.writeFile(`${outputDir}/${outputFile}`, book.cssArray[0].css); // TODO: iterate over array
    await fs.writeFile(`${outputDir}/${outputFile}.map`, book.cssArray[0].map.toString()); // TODO^
    // add source map comment
    await fs.writeFile(`${outputDir}/${outputFile}`, `\n/*# sourceMappingURL=./${outputFile}.map */`, { flag: 'a' })
  } catch (error) {
    console.error(`Got an error trying to write to a file: ${error.message}`);
  }
}

// Example
let example_book: Book = {
  name: 'example',
  cssArray: [result]
}

// write book & source map to file
writeBookCss(example_book);
