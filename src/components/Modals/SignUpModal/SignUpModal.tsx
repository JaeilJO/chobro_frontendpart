import React from 'react';
import { StyledSignUpModal } from './SignUpModal.styled';

interface SignUpModalProps {
    children: React.ReactNode;
    modalMode: string;
}

const SignUpModal = ({ modalMode, children }: SignUpModalProps) => {
    return <StyledSignUpModal modalMode={modalMode}>{children}</StyledSignUpModal>;
};

export default SignUpModal;
