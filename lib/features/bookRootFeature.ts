import { getSourceInfo } from '../getSourceInfo';
import { FeaturePlaceholder, parseFeature } from '../feature';
import { PropertySetPlaceholder } from '../propertySet';
import getCurrentLine from 'get-current-line';
require('source-map-support').install();

let bookRootProps: PropertySetPlaceholder =  {
  'line-height': '1.5rem', 'font-family': 'serif', border: '1px solid red'
}

let bookRootFeature: FeaturePlaceholder = {
  subselector: 'body',
  properties: bookRootProps,
  source_info: getSourceInfo(getCurrentLine()),
  children: []
}

export const bookRootRules = parseFeature(bookRootFeature);
