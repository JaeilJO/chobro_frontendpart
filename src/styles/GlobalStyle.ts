import { createGlobalStyle } from 'styled-components';
import { Roboto } from 'next/font/google';
const roboto = Roboto({
    weight: ['300', '500', '700'],
    subsets: ['cyrillic'],
});

const GlobalStyles = createGlobalStyle`
html{
  
}
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${roboto.style.fontFamily};
    }
  
`;
export default GlobalStyles;
