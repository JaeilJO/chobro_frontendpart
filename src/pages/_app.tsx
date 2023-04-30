import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import GlobalStyles from '../styles/GlobalStyle';
import { Provider } from 'react-redux';
import { store } from '../store/store';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <GlobalStyles />
                    <Component {...pageProps} />
                </ThemeProvider>
            </Provider>
        </>
    );
}

export default MyApp;
