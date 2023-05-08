// Style
import { AuthFormTitle, RecomendText, RecomendTextButton, StyledAuthForm } from '../AuthFormStyle';

// Component
import AuthButton from '../../Buttons/AuthButton/AuthButton';
import AuthLink from '../../Links/AuthLink/AuthLink';
import AuthInput from '../../Inputs/AuthInput/AuthInput';

// React Hook Form
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

// Redux
import { useLoginMutation } from '../../../redux/services/authApi';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { setUser } from '../../../redux/features/userSlice';
import { changeMode } from '../../../redux/features/modalStatusSlice';

// Datas
import { inputItems } from './LoginFormInputItems';

// Types
import { Inputs } from './LoginForm.types';
import { HasEmptyFileds, HasSpacingInPassword, IsLoginStatusTrue } from '../../../utils/utils';

const LoginForm = () => {
    //for redux
    const dispatch = useAppDispatch();
    const [login, { data, error, isLoading }] = useLoginMutation();
    const changeModalMode = () => {
        dispatch(changeMode('signup'));
    };

    // for reactHookForm
    const { handleSubmit, control } = useForm({
        defaultValues: {
            username: '',
            password: '',
        },
    });

    const loginState = useAppSelector((state) => state.user.isLoggedIn);
    const onSubmit: SubmitHandler<Inputs> = async (userInfo) => {
        try {
            HasEmptyFileds(userInfo);
            HasSpacingInPassword(userInfo);
            IsLoginStatusTrue(loginState);
            const data = await login(userInfo);
            dispatch(setUser(data));
        } catch (err) {
            console.error(err);
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

            <AuthButton title="Login" backgorundColor={'primary'} color={'white'} />
            <div>{isLoading}</div>
            <RecomendText>Or</RecomendText>
            <AuthLink></AuthLink>
            <RecomendText>
                Dont'have an account? <RecomendTextButton onClick={changeModalMode}>Sign up</RecomendTextButton>
            </RecomendText>
        </StyledAuthForm>
    );
};

export default LoginForm;
