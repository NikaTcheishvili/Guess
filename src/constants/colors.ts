export const Colors = {
  BLACK: '#000000',
  WHITE: '#FFFFFF',
  PRIMARY: '#B481F4',
  SUCCESS: '#18E5CC',
  FAILURE: '#EF586E',
  DARK_BLUE: '#131429',
};

const light = {
  dark: false,
  colors: {
    primary: Colors.PRIMARY,
    background: '#FFFFFF',
    card: '#FFFFFF',
    text: '#131429',
    border: '#D8D8D8',
    notification: '#FF3B30',
    ...Colors,
  },
};

const dark = {
  dark: true,
  colors: {
    primary: Colors.PRIMARY,
    background: '#131429',
    card: '#131429',
    text: '#CDCDD2',
    border: '#272729',
    notification: '#FF453A',
    ...Colors,
  },
};

export const Theme = {
  light,
  dark,
};
