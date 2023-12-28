import * as csstree from 'css-tree';
import { PropertySetPlaceholder } from './propertySet';
import { RuleSet, SourceInfo } from './types';

export type FeaturePlaceholder = {
  subselector: String,
  properties: PropertySetPlaceholder,
  source_info: SourceInfo,
  children: Array<FeaturePlaceholder>
}

// functions that traverse Feature and assemble AST

// Visit node, recursively visit children, parse rule, push rule onto array
// TODO: better name
const visitFeature = (feature: FeaturePlaceholder, parent_selector: String, ruleArr: Array<any>): void => {
  const selector = `${parent_selector}${feature.subselector}`
  const property_string = feature.properties.parsable
  console.log(`${selector} ${property_string}`);
  // visit children
  for (let index in feature.children) {
    visitFeature(feature.children[index], selector, ruleArr); // TODO: where to send the returned value?
  }
  // parse current node
  ruleArr.push(csstree.parse(
    `${selector} ${property_string}`,
    {
      context: 'rule', positions: 'true',
      filename: feature.source_info.file,
      line: feature.source_info.line,
      column: feature.source_info.char
    }
  ));
}

// Returns full set of parsed rules
export const parseFeature = (feature: FeaturePlaceholder): RuleSet => {
  let ruleArr = [];
  visitFeature(feature, '', ruleArr);
  return ruleArr;
};
