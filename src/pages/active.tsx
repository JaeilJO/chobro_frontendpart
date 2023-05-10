import Header from '../components/Layouts/Header/Header';
import Main from '../components/Layouts/Main/Main';
import { wrapper } from '../redux/store';

import { authApi } from '../redux/services/authApi';

import { setUser } from '../redux/features/userSlice';
import { isCookieEmpty } from '../utils/utils';
import TableActiveButtonModal from '../components/Modals/TableActiveButtonModal/TableActiveButtonModal';
import { useAppSelector } from '../redux/hooks';
import AvatarModal from '../components/Modals/AvatarModal/AvatarModal';
import AuthModal from '../components/Modals/AuthModal/AuthModal';

const Active = () => {
    const TableActiveButtonModalToggle = useAppSelector((state) => state.modal?.tableActiveModal.toggle_status);
    const AvatarModalToggle = useAppSelector((state) => state.modal.headerAvatarModal);
    const headerLoginButtonModalToggle = useAppSelector((state) => state.modal.headerLoginButtonModal);
    const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
    return (
        <>
            <Header />
            <Main />

            {/* modals */}
            {TableActiveButtonModalToggle ? <TableActiveButtonModal /> : <></>}
            {<AvatarModal $modal={AvatarModalToggle} />}
            {headerLoginButtonModalToggle && !isLoggedIn && <AuthModal />}
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
