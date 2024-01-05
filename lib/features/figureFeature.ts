// actual book feature

import getCurrentLine from "get-current-line";
import { FeaturePlaceholder, parseFeature } from "../feature";
import { getSourceInfo } from "../getSourceInfo";
import * as figprops from '../themes/cardboard/figureProperties';

const figureFeature: FeaturePlaceholder = {
  subselector: '.os-figure:not(.has-splash)',
  properties: {},
  source_info: getSourceInfo(getCurrentLine()),
  children: [
    {
      subselector: ' > figure',
      properties: figprops.figureProps,
      source_info: getSourceInfo(getCurrentLine()),
      children: []
    },
    {
      subselector: ' > .os-caption-container',
      properties: figprops.caption__containerProps,
      source_info: getSourceInfo(getCurrentLine()),
      children: [
        {
          subselector: ' > .os-title-label',
          properties: figprops.caption__titleLabelProps,
          source_info: getSourceInfo(getCurrentLine()),
          children: []
        },
        {
          subselector: ' > .os-number',
          properties: figprops.caption__numberProps,
          source_info: getSourceInfo(getCurrentLine()),
          children: []
        },
        {
          subselector: ' > .os-title',
          properties: figprops.caption__titleProps,
          source_info: getSourceInfo(getCurrentLine()),
          children: []
        },
        {
          subselector: ' > .os-caption',
          properties: figprops.caption__content,
          source_info: getSourceInfo(getCurrentLine()),
          children: []
        }
      ]
    }
  ]
}

export const figureRules = parseFeature(figureFeature);
