export type ThemeProps = {
  white: string;
  black: string;
  primary?: string;
  secondary?: string;
  tertiary?: string;
  border?: string;
  textPrimary?: string;
  textSecondary?: string;
  textTertiary?: string;
};

export const theme: { light: ThemeProps; dark: ThemeProps } = {
  light: {
    white: '#fcfcfc',
    black: '#0c0c0c',
    primary: '#F1F0E7',
    secondary: '#E9E6DB',
    tertiary: '#D2C7BE',
    border: '#ECECEC',
    textPrimary: '#9482A7',
    textSecondary: '#5B4C6B',
    textTertiary: '#939393',
  },
  dark: {
    white: '#fcfcfc',
    black: '#0c0c0c',
  },
};
