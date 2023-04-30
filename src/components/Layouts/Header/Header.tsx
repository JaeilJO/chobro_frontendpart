import React, { useState } from 'react';
import { HeaderContents, StyledHeader } from './Header.styled';
import Logo from '../../Logo/Logo';
import Navigation from '../../Navigation/Navigation';
import LoginButton from '../../Buttons/LoginButton/LoginButton';
import Avatar from '../../Avatar/Avatar';
import LoginModal from '../../Modals/LoginModal/LoginModal';

const Header = () => {
    const [login, setLogin] = useState(false);

    return (
        <>
            <StyledHeader>
                <HeaderContents>
                    <Logo href="/" />
                    {login ? <Navigation /> : <></>}
                    {login ? <Avatar lastName="Jo" /> : <LoginButton />}
                </HeaderContents>
            </StyledHeader>
            <LoginModal />
        </>
    );
};

export default Header;
