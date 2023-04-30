import React, { useCallback, useState } from 'react';
import { HeaderContents, StyledHeader } from './Header.styled';
import Logo from '../../Logo/Logo';
import Navigation from '../../Navigation/Navigation';
import LoginButton from '../../Buttons/LoginButton/LoginButton';
import Avatar from '../../Avatar/Avatar';
import LoginSingupModal from '../../Modals/LoginSignUpModal/LoginSignUpModal';

const Header = () => {
    const [login, setLogin] = useState(false);
    const [loginSignUpModal, setLoginSignUpModal] = useState(false);

    return (
        <>
            <StyledHeader>
                <HeaderContents>
                    <Logo href="/" />
                    {login ? <Navigation /> : <></>}
                    {login ? <Avatar lastName="Jo" /> : <LoginButton setLoginSignUpModal={setLoginSignUpModal} />}
                </HeaderContents>
            </StyledHeader>
            {loginSignUpModal ? <LoginSingupModal setLoginSignUpModal={setLoginSignUpModal} /> : <></>}
        </>
    );
};

export default Header;
