//Style
import { StyledAvatarModalButton } from './AvatarModalButton.styled';

//Types
import { AvatarModalButtonProps } from './AvatarModalButton.types';

const AvatarModalButton = ({ title, onClick }: AvatarModalButtonProps) => {
    return <StyledAvatarModalButton onClick={onClick}>{title}</StyledAvatarModalButton>;
};

export default AvatarModalButton;
