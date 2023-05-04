import Header from '../components/Layouts/Header/Header';
import Main from '../components/Layouts/Main/Main';
import jwt_decode from 'jwt-decode';
import { wrapper } from '../redux/store';
import { parse } from 'cookie';
import { setToken } from '../redux/features/userSlice';
import { authApi, useRefreshQuery } from '../redux/services/authApi';
import { useAppDispatch } from '../redux/hooks';

interface JsonWebTokenDecode {
    username: string;
    exp: number;
}

const Active = () => {
    return (
        <>
            <Header />
            <Main />
        </>
    );
};

interface JwtDecodeType {
    username: string;
    user_id: string;
    iat: number;
    exp: number;
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
    const cookie = context.req.cookies;

    const cookieIsEmpty = Object.keys(cookie).length === 0;

    if (cookieIsEmpty) return { props: {} };

    const refreshToken = cookie.rt;
    console.log('보낼쿠키', refreshToken);

    const result = await store.dispatch(authApi.endpoints.refresh.initiate(refreshToken));
    console.log('result?', result.error);

    const responseRefreshToken = await result.data.RefreshTokenValue;

    context.res.setHeader('set-cookie', `rt=${responseRefreshToken}`);
    console.log('받은 쿠키', responseRefreshToken);

    store.dispatch(setToken(result.data));

    return {
        props: {},
    };
});

export default Active;
