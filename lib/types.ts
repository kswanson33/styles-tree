export type Rule = {
  type: String,
  loc: any, // source info
  prelude: any, // selector info
  block: any // property info
}

export type RuleSet = Array<Rule>; // TODO: rename
