import { HtmlHTMLAttributes, MouseEventHandler, useCallback, useState } from 'react';
import { ModalBackground, StyledAuthModal } from './AuthModal.styled';

import SignUpForm from '../../Form/SignUpForm/SignUpForm';
import AuthContents from './AuthContents/AuthContents';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { changeMode } from '../../../features/authModalModeSlice';

interface LoginSingupModalProps {
    setAuthModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthModal = ({ setAuthModal }: LoginSingupModalProps) => {
    const modalMode = useAppSelector((state) => state.authModalMode.mode);
    const dispatch = useAppDispatch();

    const changemodalMode = useCallback(() => {
        dispatch(changeMode('signup'));
    }, [modalMode]);

    const remoteAuthModal = () => {
        setAuthModal((currentState) => !currentState);
    };

    const handleAuthModalClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <>
            <ModalBackground onClick={remoteAuthModal}>
                <StyledAuthModal onClick={handleAuthModalClick}>
                    <AuthContents modalMode={modalMode} mode={'login'}>
                        Dont'have an account? <button onClick={changemodalMode}>Sign up</button>
                    </AuthContents>
                    <AuthContents modalMode={modalMode} mode={'signup'}>
                        <SignUpForm />
                    </AuthContents>
                </StyledAuthModal>
            </ModalBackground>
        </>
    );
};

export default AuthModal;
