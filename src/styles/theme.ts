import { DefaultTheme } from 'styled-components';

const colors = {
    primary: '#0061A8',
    second: '#4E9AD2',
    third: '#BEDAEF',
    black: '#2F2F2F',
    gray: '#E2E2E2',
    danger: '#FF8181',
    warning: '#FFBD3C',
    white: '#ffffff',
};

const fontSize = {
    xl: '38px',
    lg: '32px',
    md: '16px',
    sm: '12px',
};

const fontWeight = {
    bold: '700',
    medium: '500',
    light: '300',
};

export type ColorTypes = typeof colors;
export type FontSizeTypes = typeof fontSize;
export type FontWeight = typeof fontWeight;

const theme: DefaultTheme = {
    colors: colors,
    fontSize: fontSize,
    fontWeight: fontWeight,
};

export default theme;
