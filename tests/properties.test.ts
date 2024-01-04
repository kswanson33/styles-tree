import * as properties from '../lib/propertySet';

describe('property related functions', () => {

  const props: properties.PropertySetPlaceholder = {
    border: '1px solid blue',
    'font-family': 'MySansFont,sans-serif',
    'color': 'color'
  }
  test('styleToString', () => {
    let css = properties.styleToString(props);
    expect(css).toBe('{border:1px solid blue;font-family:MySansFont,sans-serif;color:color;}')
  });
});
