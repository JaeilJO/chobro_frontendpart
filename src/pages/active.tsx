import Header from '../components/Layouts/Header/Header';
import Main from '../components/Layouts/Main/Main';
import { wrapper } from '../redux/store';

import { authApi } from '../redux/services/authApi';

import { setUser } from '../redux/features/userSlice';
import { isCookieEmpty } from '../utils/utils';
import TableActiveButtonModal from '../components/Modals/TableActiveButtonModal/TableActiveButtonModal';
import { useAppSelector } from '../redux/hooks';

const Active = () => {
    const TableActiveButtonModalToggle = useAppSelector((state) => state.modal?.tableActiveModal.toggle_status);
    return (
        <>
            <Header />
            <Main />
            {TableActiveButtonModalToggle ? <TableActiveButtonModal /> : <></>}
        </>
    );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
    const cookie = context.req.cookies;

    //refresh와  디코딩된 token얻어오기
    const tokens = await store.dispatch(authApi.endpoints.refresh.initiate(cookie.rt));

    //token없는 것에 대한 처리
    if (!tokens || !tokens.data) return { props: {} };

    //데이터 처리를 위한 준비
    const refreshToken = tokens.data?.refreshToken;
    const userData = {
        data: {
            userName: tokens.data?.userData.userName,
            exp: tokens.data?.userData.exp,
            token: tokens.data?.userData.token,
        },
    };

    store.dispatch(setUser(userData));
    context.res.setHeader('Set-Cookie', `rt=${refreshToken}; Path=/; HttpOnly`);

    return {
        props: {},
    };
});

export default Active;
