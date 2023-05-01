import React from 'react';
//Style
import { StyledAuthContents } from './AuthContents.styled';

//Types
import { LoginModalContents } from './AuthContents.types';

const AuthContents = ({ children, modalMode, mode }: LoginModalContents) => {
    return (
        <StyledAuthContents modalMode={modalMode} mode={mode}>
            {children}
        </StyledAuthContents>
    );
};

export default AuthContents;
