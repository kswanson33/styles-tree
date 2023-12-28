import * as feature from '../lib/feature';
import getCurrentLine from 'get-current-line';
import { getSourceInfo } from '../lib/getSourceInfo';

describe('feature related functions', () => {
  let bookRootFeature: feature.FeaturePlaceholder = {
    subselector: 'body',
    properties: { parsable:
      "{ line-height: 1.5rem; font-family: serif; border: 1px solid red; }"
    },
    source_info: getSourceInfo(getCurrentLine()),
    children: []
  }
  test('parseFeature', () => {
    const parsed = feature.parseFeature(bookRootFeature);
    expect(parsed.length).toBe(1);
    expect(JSON.stringify(parsed[0])).toBe(
      `{"type":"Rule","loc":{"source":"../tests/feature.test.ts","start":{"offset":0,"line":11,"column":46},"end":{"offset":72,"line":11,"column":118}},"prelude":{"type":"SelectorList","loc":{"source":"../tests/feature.test.ts","start":{"offset":0,"line":11,"column":46},"end":{"offset":4,"line":11,"column":50}},"children":[{"type":"Selector","loc":{"source":"../tests/feature.test.ts","start":{"offset":0,"line":11,"column":46},"end":{"offset":4,"line":11,"column":50}},"children":[{"type":"TypeSelector","loc":{"source":"../tests/feature.test.ts","start":{"offset":0,"line":11,"column":46},"end":{"offset":4,"line":11,"column":50}},"name":"body"}]}]},"block":{"type":"Block","loc":{"source":"../tests/feature.test.ts","start":{"offset":5,"line":11,"column":51},"end":{"offset":72,"line":11,"column":118}},"children":[{"type":"Declaration","loc":{"source":"../tests/feature.test.ts","start":{"offset":7,"line":11,"column":53},"end":{"offset":26,"line":11,"column":72}},"important":false,"property":"line-height","value":{"type":"Value","loc":{"source":"../tests/feature.test.ts","start":{"offset":20,"line":11,"column":66},"end":{"offset":26,"line":11,"column":72}},"children":[{"type":"Dimension","loc":{"source":"../tests/feature.test.ts","start":{"offset":20,"line":11,"column":66},"end":{"offset":26,"line":11,"column":72}},"value":"1.5","unit":"rem"}]}},{"type":"Declaration","loc":{"source":"../tests/feature.test.ts","start":{"offset":28,"line":11,"column":74},"end":{"offset":46,"line":11,"column":92}},"important":false,"property":"font-family","value":{"type":"Value","loc":{"source":"../tests/feature.test.ts","start":{"offset":41,"line":11,"column":87},"end":{"offset":46,"line":11,"column":92}},"children":[{"type":"Identifier","loc":{"source":"../tests/feature.test.ts","start":{"offset":41,"line":11,"column":87},"end":{"offset":46,"line":11,"column":92}},"name":"serif"}]}},{"type":"Declaration","loc":{"source":"../tests/feature.test.ts","start":{"offset":48,"line":11,"column":94},"end":{"offset":69,"line":11,"column":115}},"important":false,"property":"border","value":{"type":"Value","loc":{"source":"../tests/feature.test.ts","start":{"offset":56,"line":11,"column":102},"end":{"offset":69,"line":11,"column":115}},"children":[{"type":"Dimension","loc":{"source":"../tests/feature.test.ts","start":{"offset":56,"line":11,"column":102},"end":{"offset":59,"line":11,"column":105}},"value":"1","unit":"px"},{"type":"Identifier","loc":{"source":"../tests/feature.test.ts","start":{"offset":60,"line":11,"column":106},"end":{"offset":65,"line":11,"column":111}},"name":"solid"},{"type":"Identifier","loc":{"source":"../tests/feature.test.ts","start":{"offset":66,"line":11,"column":112},"end":{"offset":69,"line":11,"column":115}},"name":"red"}]}}]}}`
    );
  });
});
