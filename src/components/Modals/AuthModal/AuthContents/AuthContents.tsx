import React from 'react';
import { StyledAuthContents } from './AuthContents.styled';

interface LoginModalContents {
    children: React.ReactNode;
    modalMode: string;
    mode: string;
}

const AuthContents = ({ children, modalMode, mode }: LoginModalContents) => {
    return (
        <StyledAuthContents modalMode={modalMode} mode={mode}>
            {children}
        </StyledAuthContents>
    );
};

export default AuthContents;
