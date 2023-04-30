import { HtmlHTMLAttributes, MouseEventHandler, useCallback, useState } from 'react';
import { ModalBackground, StyledLoginSignUpModal } from './LoginSignUpModal.styled';
import SignUpModal from '../SignUpModal/SignUpModal';
import LoginModalContents from './LoginModalContents/LoginModalContents';

interface LoginSingupModalProps {
    openLoginSignUpModal: MouseEventHandler<HTMLDivElement>;
}

const LoginSingupModal = ({ openLoginSignUpModal }: LoginSingupModalProps) => {
    const [modalMode, setModalMode] = useState('login');

    const changemodalMode = useCallback(() => {
        modalMode === 'login' ? setModalMode('signup') : setModalMode('login');
    }, [modalMode]);

    return (
        <>
            <ModalBackground onClick={openLoginSignUpModal}>
                <StyledLoginSignUpModal>
                    <LoginModalContents modalMode={modalMode}>
                        Dont'have an account? <button onClick={changemodalMode}>Sign up</button>
                    </LoginModalContents>
                    <SignUpModal modalMode={modalMode}>
                        I have an account! <button onClick={changemodalMode}>login</button>
                    </SignUpModal>
                </StyledLoginSignUpModal>
            </ModalBackground>
        </>
    );
};

export default LoginSingupModal;
