import React from 'react';
import { StyledLogo } from './Logo.styled';
import { DeskTopColumn } from '../../styles/gridSystem';

interface LogoProps {
    href: string;
}
const Logo = ({ href }: LogoProps) => {
    return <StyledLogo href={href}>JB</StyledLogo>;
};

export default Logo;
