import React, { useCallback, useState } from 'react';
import { HeaderContents, StyledHeader } from './Header.styled';
import Logo from '../../Logo/Logo';
import Navigation from '../../Navigation/Navigation';
import LoginButton from '../../Buttons/LoginButton/LoginButton';
import Avatar from '../../Avatar/Avatar';
import LoginSingupModal from '../../Modals/AuthModal/AuthUpModal';

const Header = () => {
    const [login, setLogin] = useState(false);
    const [AuthModal, setAuthModal] = useState(false);

    return (
        <>
            <StyledHeader>
                <HeaderContents>
                    <Logo href="/" />
                    {login ? <Navigation /> : <></>}
                    {login ? (
                        <Avatar lastName="Jo" />
                    ) : (
                        <LoginButton AuthModal={AuthModal} setAuthModal={setAuthModal} />
                    )}
                </HeaderContents>
            </StyledHeader>
            {AuthModal ? <LoginSingupModal setAuthModal={setAuthModal} /> : <></>}
        </>
    );
};

export default Header;
