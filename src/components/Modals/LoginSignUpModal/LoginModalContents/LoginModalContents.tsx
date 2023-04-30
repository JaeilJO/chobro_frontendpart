import React from 'react';
import { StyledLoginModalContents } from './LoginModalContents.styled';

interface LoginModalContents {
    children: React.ReactNode;
    modalMode: string;
}

const LoginModalContents = ({ children, modalMode }: LoginModalContents) => {
    return <StyledLoginModalContents modalMode={modalMode}>{children}</StyledLoginModalContents>;
};

export default LoginModalContents;
