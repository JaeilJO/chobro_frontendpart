import LoginModal from '../../Modals/LoginSignUpModal/LoginSignUpModal';
import { StyledLoginButton } from './LoginButtons.stlyed';

const LoginButton = ({ onClick }) => {
    return (
        <>
            <StyledLoginButton onClick={onClick}>LOGIN</StyledLoginButton>
        </>
    );
};

export default LoginButton;
