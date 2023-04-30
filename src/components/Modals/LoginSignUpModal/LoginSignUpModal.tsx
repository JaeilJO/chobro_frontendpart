import { HtmlHTMLAttributes, MouseEventHandler, useCallback, useState } from 'react';
import { ModalBackground, StyledLoginSignUpModal } from './LoginSignUpModal.styled';
import SignUpModal from '../SignUpModal/SignUpModal';
import LoginModalContents from './LoginModalContents/LoginModalContents';

interface LoginSingupModalProps {
    setLoginSignUpModal: React.Dispatch<React.SetStateAction<boolean>>;
    loginSignUpModal: boolean;
}

const LoginSingupModal = ({ setLoginSignUpModal }: LoginSingupModalProps) => {
    const [modalMode, setModalMode] = useState('login');

    const changemodalMode = useCallback(() => {
        modalMode === 'login' ? setModalMode('signup') : setModalMode('login');
    }, [modalMode]);

    const remoteLoginSignUpModal = () => {
        setLoginSignUpModal((currentState) => !currentState);
    };

    const handleLoginSignUpModalClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <>
            <ModalBackground onClick={remoteLoginSignUpModal}>
                <StyledLoginSignUpModal onClick={handleLoginSignUpModalClick}>
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
