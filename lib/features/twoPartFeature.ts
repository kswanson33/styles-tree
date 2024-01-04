import { getSourceInfo } from '../getSourceInfo';
import { FeaturePlaceholder, parseFeature } from '../feature';
import { PropertySetPlaceholder } from '../propertySet';
import getCurrentLine from 'get-current-line';
require('source-map-support').install();

let rootProps: PropertySetPlaceholder = { border: '1px solid blue' };

let leafProps: PropertySetPlaceholder = { border: '1px solid green' };

let twoPartFeature: FeaturePlaceholder = {
  subselector: 'div',
  properties: rootProps,
  source_info: getSourceInfo(getCurrentLine()),
  children: [
    {
      subselector: ' > p',
      properties: leafProps,
      source_info: getSourceInfo(getCurrentLine()),
      children: []
    }
  ]
}

export const twoPartRules = parseFeature(twoPartFeature);
