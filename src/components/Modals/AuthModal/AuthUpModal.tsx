import { HtmlHTMLAttributes, MouseEventHandler, useCallback, useState } from 'react';
import { ModalBackground, StyledAuthModal } from './AuthModal.styled';

import SignUpForm from '../../Form/SignUpForm/SignUpForm';
import AuthContents from './AuthContents/AuthContents';

interface LoginSingupModalProps {
    setAuthModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthModal = ({ setAuthModal }: LoginSingupModalProps) => {
    const [modalMode, setModalMode] = useState('login');

    const changemodalMode = useCallback(() => {
        modalMode === 'login' ? setModalMode('signup') : setModalMode('login');
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
                        <SignUpForm setModalMode={setModalMode} />
                    </AuthContents>
                </StyledAuthModal>
            </ModalBackground>
        </>
    );
};

export default AuthModal;
