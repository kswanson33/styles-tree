import { PropertySetPlaceholder } from "../../propertySet";
import { cardboardFonts } from "./typography";
import { cardboardColors } from "./colors";

// When importing properties, namespace the file.
// Then we don't have to worry about naming conflicts (i.e. captionProps)
export const figureProps: PropertySetPlaceholder = {
  display: 'table',
  'margin-left': 'auto',
  'margin-right': 'auto'
};

export const caption__containerProps: PropertySetPlaceholder = {
  display: 'table',
  'margin-left': 'auto',
  'margin-right': 'auto',
  'margin-bottom': '0.7rem',
  'line-height': '1rem'
};

export const caption__titleLabelProps: PropertySetPlaceholder = {
  'font-family': cardboardFonts.baseFont,
  'font-weight': 'bold',
  'font-size': '0.8333333333rem', // todo: implement font-scale https://github.com/openstax/ce-styles/blob/main/styles/designs/common/pdf/typography.scss#L19
  color: cardboardColors.black
};

export const caption__numberProps: PropertySetPlaceholder = {
  'font-family': cardboardFonts.baseFont,
  'font-weight': 'bold',
  'font-size': '0.8333333333rem',
  color: cardboardColors.black
};

export const caption__titleProps: PropertySetPlaceholder = {
  'font-family': cardboardFonts.baseFont,
  'font-weight': 'bold',
  'font-size': '0.8333333333rem',
  color: cardboardColors.black
};

export const caption__content: PropertySetPlaceholder = {
  'font-family': cardboardFonts.baseFont,
  'font-size': '0.8333333333rem',
  color: cardboardColors.gray1
};
