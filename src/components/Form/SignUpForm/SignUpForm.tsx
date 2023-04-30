import { Dispatch, SetStateAction } from 'react';
import AuthButton from '../../Buttons/AuthButton/AuthButton';
import AuthInput from '../../Input/AuthInput';
import { RecomendText, RecomendTextButton, SignUpFormTitle, StyledSignUpForm } from './SignUpForm.styled';
const inputs = [
    {
        type: '',
        title: 'firstName',
    },
    {
        type: '',
        title: 'lastName',
    },
    {
        type: 'email',
        title: 'Email',
    },
    {
        type: 'password',
        title: 'Password',
    },
];

interface SignUpFormProps {
    setModalMode: Dispatch<SetStateAction<string>>;
}
const SignUpForm = ({ setModalMode }: SignUpFormProps) => {
    const moveToLoginModal = () => {
        setModalMode('login');
    };
    return (
        <StyledSignUpForm>
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
