import { useCallback, useState } from 'react';
import { ModalBackground, StyledLoginModal } from './LoginModal.styled';

const LoginModal = () => {
    const [modalMode, setModalMode] = useState('login');
    const onClick = useCallback(() => {
        modalMode === 'login' ? setModalMode('signup') : setModalMode('login');
    }, [modalMode]);
    return (
        <>
            <ModalBackground>
                <StyledLoginModal>
                    <div>
                        Dont'have an account? <button>Sign up</button>
                    </div>
                </StyledLoginModal>
            </ModalBackground>
        </>
    );
};

export default LoginModal;
