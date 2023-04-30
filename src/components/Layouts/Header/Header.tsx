import React, { useState } from 'react';
import { HeaderContents, StyledHeader } from './Header.styled';
import Logo from '../../Logo/Logo';
import Navigation from '../../Navigation/Navigation';
import LoginButton from '../../Buttons/LoginButton';
import Avatar from '../../Avatar/Avatar';

const Header = () => {
    const [login, setLogin] = useState(false);

    return (
        <StyledHeader>
            <HeaderContents>
                <Logo href="/" />
                {login ? <Navigation /> : <></>}
                <Avatar></Avatar>
                {/* <LoginButton/> */}
            </HeaderContents>
        </StyledHeader>
    );
};

export default Header;
