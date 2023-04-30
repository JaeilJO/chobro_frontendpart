import React from 'react';
import { HeaderContents, StyledHeader } from './Header.styled';
import Logo from '../../Logo/Logo';
import Navigation from '../../Navigation/Navigation';
import LoginButton from '../../Buttons/LoginButton';

const Header = () => {
    return (
        <StyledHeader>
            <HeaderContents>
                <Logo href="/" />
                <Navigation />
                <LoginButton></LoginButton>
            </HeaderContents>
        </StyledHeader>
    );
};

export default Header;
