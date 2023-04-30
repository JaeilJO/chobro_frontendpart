import { MouseEventHandler } from 'react';
import { StyledAvatarModalButton } from './AvatarModalButton.styled';

interface AvatarModalButtonProps {
    title: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const AvatarModalButton = ({ title, onClick }: AvatarModalButtonProps) => {
    return <StyledAvatarModalButton onClick={onClick}>{title}</StyledAvatarModalButton>;
};

export default AvatarModalButton;
