import { useCallback } from 'react';
import LoginModal from '../../Modals/LoginSignUpModal/LoginSignUpModal';
import { StyledLoginButton } from './LoginButtons.stlyed';

interface LoginButtonProps {
    setLoginSignUpModal: React.Dispatch<React.SetStateAction<boolean>>;
    loginSignUpModal: boolean;
}

const LoginButton = ({ loginSignUpModal, setLoginSignUpModal }: LoginButtonProps) => {
    const onClick = useCallback(() => {
        setLoginSignUpModal(!loginSignUpModal);
    }, [loginSignUpModal]);
    return (
        <>
            <StyledLoginButton onClick={onClick}>LOGIN</StyledLoginButton>
        </>
    );
};

export default LoginButton;
