import React, { Dispatch, MouseEventHandler, SetStateAction, useCallback, useState } from 'react';
import AuthButton from '../../Buttons/AuthButton/AuthButton';
import AuthInput from '../../Input/AuthInput';

import { useAppDispatch } from '../../../store/hooks';
import { changeMode } from '../../../features/authModalModeSlice';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useSignUpMutation } from '../../../services/userApi';
import { InputInfo, Inputs } from './types';
import { AuthFormTitle, RecomendText, RecomendTextButton, StyledAuthForm } from '../AuthFormStyle';

const inputs: InputInfo[] = [
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
    const [
        signUp,
        { isLoading }, // This is the destructured mutation result
    ] = useSignUpMutation();

    const { handleSubmit, control } = useForm<Inputs>({
        defaultValues: {
            username: '',
            firstName: '',
            lastName: '',
            password: '',
            source: 'Local',
        },
    });

    const onSubmit: SubmitHandler<Inputs> = async (userInfo) => {
        const res = await signUp(userInfo);
        if ('data' in res) {
            dispatch(changeMode('login'));
        } else {
            console.log('실패');
        }
    };

    // 곧지울예정
    const moveToLoginModal = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        dispatch(changeMode('login'));
    };

    return (
        <StyledAuthForm onSubmit={handleSubmit(onSubmit)}>
            <AuthFormTitle>Sign Up</AuthFormTitle>
            {inputs.map((input) => (
                <Controller
                    key={input.formType}
                    control={control}
                    name={input.formType}
                    render={({ field: { onChange } }) => (
                        <AuthInput onChange={onChange} type={input.type} title={input.title} />
                    )}
                />
            ))}
            <AuthButton title="Sign Up" backgorundColor={'primary'} color={'white'} />
            <RecomendText>
                I already have an account<RecomendTextButton onClick={moveToLoginModal}>Login!</RecomendTextButton>
            </RecomendText>
        </StyledAuthForm>
    );
};

export default SignUpForm;
