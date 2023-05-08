import { useCallback } from 'react';

//Style
import { StyledLoginButton } from './LoginButtons.stlyed';

//Redux
import { useAppDispatch } from '../../../redux/hooks';
import { toggleHeaderLoginButtonModal } from '../../../redux/features/modalStatusSlice';
import { DeskTopColumn } from '../../../styles/gridSystem';

const LoginButton = () => {
    //for redux
    const dispatch = useAppDispatch();

    //toggle onOff Modal
    const toggleLoginButtonModal = useCallback(() => {
        dispatch(toggleHeaderLoginButtonModal());
    }, []);

    return <StyledLoginButton onClick={toggleLoginButtonModal}>LOGIN</StyledLoginButton>;
};

export default LoginButton;
