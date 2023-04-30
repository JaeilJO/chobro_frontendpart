import React from 'react';
import { StyledLogo } from './Logo.styled';

interface LogoProps {
    href: string;
}
const Logo = ({ href }: LogoProps) => {
    return <StyledLogo href={href}>JoBro</StyledLogo>;
};

export default Logo;
