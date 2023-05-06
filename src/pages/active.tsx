import Header from '../components/Layouts/Header/Header';
import Main from '../components/Layouts/Main/Main';

import { wrapper } from '../redux/store';
import { parse } from 'cookie';
import { setToken } from '../redux/features/userSlice';
import { authApi, useRefreshQuery } from '../redux/services/authApi';
import { useAppDispatch } from '../redux/hooks';
import TableActiveModal from '../components/Modals/TableActiveModal/TableActiveModal';

const Active = () => {
    return (
        <>
            <Header />
            <Main />
        </>
    );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
    const cookie = context.req.cookies;

    const cookieIsEmpty = Object.keys(cookie).length === 0;
    //쿠키가 존재하지 않는다면
    if (cookieIsEmpty) {
        return {
            props: {},
        };
    }
    //그 쿠키가 rt가 아니라면
    if (cookie.rt === undefined) {
        return {
            props: {},
        };
    }

    const { data } = await store.dispatch(authApi.endpoints.refresh.initiate(cookie.rt));

    console.log('SSR Data', data);

    await store.dispatch(setToken({ token: data.token, exp: data.exp, userName: data.userName }));

    const newRefreshToken = await data.RefreshTokenValue;

    context.res.setHeader('Set-Cookie', `rt=${newRefreshToken}`);

    return {
        props: {},
    };
});

export default Active;
