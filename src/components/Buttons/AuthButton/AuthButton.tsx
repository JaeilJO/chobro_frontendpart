import { ColorTypes } from '../../../styles/theme';
import { StyledAuthButton } from './AuthButton.styled';

interface AuthButtonProps {
    title: string;
    backgorundColor: keyof ColorTypes;
    color: keyof ColorTypes;
}

const AuthButton = ({ title, backgorundColor, color }: AuthButtonProps) => {
    return (
        <StyledAuthButton type="submit" backgroundColor={backgorundColor} color={color}>
            {title}
        </StyledAuthButton>
    );
};

export default AuthButton;
