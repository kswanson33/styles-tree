import * as feature from '../lib/feature';
import getCurrentLine from 'get-current-line';
import { getSourceInfo } from '../lib/getSourceInfo';
import * as csstree from 'css-tree';

describe('feature related functions', () => {
  let bookRootFeature: feature.FeaturePlaceholder = {
    subselector: 'body',
    properties: {
      'line-height': '1.5rem',
      'font-family': 'serif',
      border: '1px solid red'
    },
    source_info: getSourceInfo(getCurrentLine()),
    children: []
  }
  test('parseFeature', () => {
    const parsed = feature.parseFeature(bookRootFeature);
    expect(parsed.length).toBe(1);
    const generated = csstree.generate(parsed[0], { sourceMap: true });
    expect(generated.css).toBe(
      'body{line-height:1.5rem;font-family:serif;border:1px solid red}'
    );
    expect(JSON.stringify(generated.map)).toBe(
      '{"version":3,"sources":["../tests/feature.test.ts"],"names":[],"mappings":"AAa6C,I,CAAM,kB,CAAmB,iB,CAAkB,oB"}'
    )
  });
});
