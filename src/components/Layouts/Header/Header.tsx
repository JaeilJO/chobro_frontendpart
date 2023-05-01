import React from 'react';
//Component
import Logo from '../../Logo/Logo';
import Navigation from '../../Navigation/Navigation';
import LoginButton from '../../Buttons/LoginButton/LoginButton';
import Avatar from '../../Avatar/Avatar';
import AuthModal from '../../Modals/AuthModal/AuthModal';

//Style
import { HeaderContents, StyledHeader } from './Header.styled';
import { useAppSelector } from '../../../redux/hooks';

const Header = () => {
    //for redux
    const LoginButtonModalStatus = useAppSelector((state) => state.modalStatus.headerLoginButtonModal);
    const isLogin = useAppSelector((state) => state.user.isLoggedIn);

    return (
        <>
            <StyledHeader>
                <HeaderContents>
                    <Logo href="/" />

                    {/* 로그인이 되지 못한사람은 Navigation에 접근하지 못하도록 하는것 */}
                    {isLogin && <Navigation />}

                    {/* 로그인이 되지 못한사람은 Avatar를 볼 수 없게 하는 것 */}
                    {isLogin ? <Avatar lastName="Jo" /> : <LoginButton />}
                </HeaderContents>
            </StyledHeader>

            {/* 로그인이 된 상태에서 Modal에 접근하지 못하도록 하는 것 */}
            {LoginButtonModalStatus && !isLogin && <AuthModal />}
        </>
    );
};

export default Header;
