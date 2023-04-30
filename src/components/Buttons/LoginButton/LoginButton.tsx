import { useCallback } from 'react';
import LoginModal from '../../Modals/AuthModal/AuthUpModal';
import { StyledLoginButton } from './LoginButtons.stlyed';

interface LoginButtonProps {
    setAuthModal: React.Dispatch<React.SetStateAction<boolean>>;
    AuthModal: boolean;
}

const LoginButton = ({ AuthModal, setAuthModal }: LoginButtonProps) => {
    const onClick = useCallback(() => {
        setAuthModal(!AuthModal);
    }, [AuthModal]);
    return (
        <>
            <StyledLoginButton onClick={onClick}>LOGIN</StyledLoginButton>
        </>
    );
};

export default LoginButton;
