import React, { Dispatch, MouseEventHandler, SetStateAction, useCallback, useState } from 'react';
import AuthButton from '../../Buttons/AuthButton/AuthButton';
import AuthInput from '../../Input/AuthInput';
import { RecomendText, RecomendTextButton, SignUpFormTitle, StyledSignUpForm } from './SignUpForm.styled';
import { useAppDispatch } from '../../../store/hooks';
import { changeMode } from '../../../features/authModalModeSlice';
const inputs = [
    {
        type: '',
        formType: 'firstName',
        title: 'firstName',
    },
    {
        type: '',
        formType: 'lastName',
        title: 'lastName',
    },
    {
        type: 'email',
        formType: 'username',
        title: 'Email',
    },
    {
        type: 'password',
        formType: 'password',
        title: 'Password',
    },
];

const SignUpForm = () => {
    const dispatch = useAppDispatch();
    const moveToLoginModal = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        dispatch(changeMode('login'));
    };
    const [signUpForm, setSignUpForm] = useState({
        username: '',
        firstName: '',
        lastName: '',
        password: '',
        source: 'Local',
    });

    const onSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(signUpForm);
    };
    return (
        <StyledSignUpForm onSubmit={onSubmit}>
            <SignUpFormTitle>Sign Up</SignUpFormTitle>
            {inputs.map((input) => (
                <AuthInput type={input.type} title={input.title} />
            ))}
            <AuthButton title="Sign Up" backgorundColor={'primary'} color={'white'} />
            <RecomendText>
                I already have an account<RecomendTextButton onClick={moveToLoginModal}>Login!</RecomendTextButton>
            </RecomendText>
        </StyledSignUpForm>
    );
};

export default SignUpForm;
