import { changeMode } from '../../../features/authModalModeSlice';
import { AuthFormTitle, RecomendText, RecomendTextButton, StyledAuthForm } from '../AuthFormStyle';
import AuthButton from '../../Buttons/AuthButton/AuthButton';
import AuthInput from '../../Input/AuthInput';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import AuthLink from '../../Links/AuthLink/AuthLink';
import { useLoginMutation } from '../../../services/authApi';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { setToken } from '../../../features/userSlice';
const inputs: InputInfo[] = [
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

type InputInfo = {
    formType: 'username' | 'password';
    type: string;
    title: string;
};
interface Inputs {
    username: string;
    password: string;
}

const LoginForm = () => {
    const dispatch = useAppDispatch();
    const [login, { isLoading, data }] = useLoginMutation();
    const changeModalMode = () => {
        dispatch(changeMode('signup'));
    };

    const { handleSubmit, control } = useForm({
        defaultValues: {
            username: '',
            password: '',
        },
    });

    const onSubmit: SubmitHandler<Inputs> = async (userInfo) => {
        const res = await login(userInfo);
        if ('data' in res) {
            console.log(res.data);
            dispatch(setToken(res.data));
        } else {
            console.log('실패');
        }
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
            <AuthButton title="Login" backgorundColor={'primary'} color={'white'} />

            <RecomendText>Or</RecomendText>
            <AuthLink></AuthLink>
            <RecomendText>
                Dont'have an account? <RecomendTextButton onClick={changeModalMode}>Sign up</RecomendTextButton>
            </RecomendText>
        </StyledAuthForm>
    );
};

export default LoginForm;
