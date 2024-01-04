import * as CSS from 'csstype';

export type PropertySetPlaceholder = CSS.PropertiesHyphen

export const styleToString = (style: PropertySetPlaceholder) => {
  let stylestr = Object.entries(style).map(([k,v]) => {
    return `${k}:${v}`
  }).join(';');
  return `{${stylestr};}`;
}
