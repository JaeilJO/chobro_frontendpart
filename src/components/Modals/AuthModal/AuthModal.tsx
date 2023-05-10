import { useCallback } from 'react';

//Component

import AuthContents from './AuthContents/AuthContents';
import LoginForm from './LoginForm/LoginForm';

//Stlye
import { ModalBackground, StyledAuthModal } from './AuthModal.styled';

//Redux
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { toggleHeaderLoginButtonModal } from '../../../redux/features/modalStatusSlice';
import SignUpForm from './SignUpForm/SignUpForm';

const AuthModal = () => {
    //for redux
    const authModalMode = useAppSelector((state) => state.modal.authMode);
    const dispatch = useAppDispatch();

    //toggle onOff Modal
    const toggleLoginButtonModal = useCallback(() => {
        dispatch(toggleHeaderLoginButtonModal());
    }, []);

    //toggleLoginButtonModal의 효과가 Modal창 안쪽까지 못오게 하는 것
    const handleAuthModalClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <>
            <ModalBackground onClick={toggleLoginButtonModal}>
                <StyledAuthModal onClick={handleAuthModalClick}>
                    <AuthContents modalMode={authModalMode} mode={'login'}>
                        <LoginForm />
                    </AuthContents>

                    <AuthContents modalMode={authModalMode} mode={'signup'}>
                        <SignUpForm />
                    </AuthContents>
                </StyledAuthModal>
            </ModalBackground>
        </>
    );
};

export default AuthModal;
