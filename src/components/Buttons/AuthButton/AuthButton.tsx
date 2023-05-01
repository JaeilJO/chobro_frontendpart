//Style
import { StyledAuthButton } from './AuthButton.styled';

//Types
import { AuthButtonProps } from './AuthButton.types';

const AuthButton = ({ title, backgorundColor, color }: AuthButtonProps) => {
    return (
        <StyledAuthButton type="submit" backgroundColor={backgorundColor} color={color}>
            {title}
        </StyledAuthButton>
    );
};

export default AuthButton;
