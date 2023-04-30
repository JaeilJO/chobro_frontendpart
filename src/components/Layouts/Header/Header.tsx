import React, { useState } from 'react';
import { HeaderContents, StyledHeader } from './Header.styled';
import Logo from '../../Logo/Logo';
import Navigation from '../../Navigation/Navigation';
import LoginButton from '../../Buttons/LoginButton';
import Avatar from '../../Avatar/Avatar';

const Header = () => {
    const [login, setLogin] = useState(true);

    return (
        <StyledHeader>
            <HeaderContents>
                <Logo href="/" />
                {login ? <Navigation /> : <></>}
                {login ? <Avatar lastName="Jo" /> : <LoginButton />}
            </HeaderContents>
        </StyledHeader>
    );
};

export default Header;
