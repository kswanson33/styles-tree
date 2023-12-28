import * as book from '../lib/book';

describe('book related functions', () => {
  const testFeature = {
    type: 'Rule',
    loc: {},
    prelude: {},
    block: {}
  }
  const testBook = {
    name: 'test',
    rules: []
  }
  test('includeFeature', () => {
    expect(testBook.rules.length).toBe(0);
    book.includeFeature(testBook, [testFeature]);
    expect(testBook.rules.length).toBe(1);
  });
});
