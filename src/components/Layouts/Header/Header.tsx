import React, { useCallback, useEffect, useState } from 'react';
import { HeaderContents, StyledHeader } from './Header.styled';
import Logo from '../../Logo/Logo';
import Navigation from '../../Navigation/Navigation';
import LoginButton from '../../Buttons/LoginButton/LoginButton';
import Avatar from '../../Avatar/Avatar';
import LoginSingupModal from '../../Modals/AuthModal/AuthUpModal';
import { useAppSelector } from '../../../store/hooks';

const Header = () => {
    const isLogin = useAppSelector((state) => state.user.isLoggedIn);

    const [AuthModal, setAuthModal] = useState(false);

    return (
        <>
            <StyledHeader>
                <HeaderContents>
                    <Logo href="/" />
                    {isLogin ? <Navigation /> : <></>}
                    {isLogin ? (
                        <Avatar lastName="Jo" />
                    ) : (
                        <LoginButton AuthModal={AuthModal} setAuthModal={setAuthModal} />
                    )}
                </HeaderContents>
            </StyledHeader>
            {AuthModal && !isLogin ? <LoginSingupModal setAuthModal={setAuthModal} /> : <></>}
        </>
    );
};

export default Header;
