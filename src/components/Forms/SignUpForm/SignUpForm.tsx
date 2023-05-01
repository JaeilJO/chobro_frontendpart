import React from 'react';
// Components
import AuthButton from '../../Buttons/AuthButton/AuthButton';
import AuthInput from '../../Inputs/AuthInput/AuthInput';

// Redux
import { useAppDispatch } from '../../../redux/hooks';
import { changeMode } from '../../../redux/features/modalStatusSlice';
import { useSignUpMutation } from '../../../redux/services/userApi';

// React Hook form
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

// Types
import { Inputs } from './SignUpForm.types';

// Style
import { AuthFormTitle, RecomendText, RecomendTextButton, StyledAuthForm } from '../AuthFormStyle';

// Datas
import { inputItems } from './SignUpInputItems';

const SignUpForm = () => {
    //for redux
    const dispatch = useAppDispatch();
    const [signUp] = useSignUpMutation();
    const changeModalMode = (): void => {
        dispatch(changeMode('login'));
    };

    //react hook form
    const { handleSubmit, control } = useForm({
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

    return (
        <StyledAuthForm onSubmit={handleSubmit(onSubmit)}>
            <AuthFormTitle>Sign Up</AuthFormTitle>
            {/* 로그인을 위한 정보 */}
            {inputItems.map((inputItem) => (
                <Controller
                    key={inputItem.formType}
                    control={control}
                    name={inputItem.formType}
                    render={({ field: { onChange } }) => (
                        <AuthInput onChange={onChange} type={inputItem.type} title={inputItem.title} />
                    )}
                />
            ))}

            <AuthButton title="Sign Up" backgorundColor={'primary'} color={'white'} />

            <RecomendText>
                I already have an account<RecomendTextButton onClick={changeModalMode}>Login!</RecomendTextButton>
            </RecomendText>
        </StyledAuthForm>
    );
};

export default SignUpForm;
