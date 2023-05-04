import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import GlobalStyles from '../styles/GlobalStyle';
import { Provider } from 'react-redux';
import { wrapper } from '../redux/store';

function MyApp({ Component, pageProps }: AppProps) {
    const { store, props } = wrapper.useWrappedStore(pageProps);
    return (
        <>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <GlobalStyles />
                    <Component {...props.pageProps} />
                </ThemeProvider>
            </Provider>
        </>
    );
}

export default MyApp;
