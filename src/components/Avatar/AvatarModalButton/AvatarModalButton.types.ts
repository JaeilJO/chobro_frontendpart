import { MouseEventHandler } from 'react';

//Component Props
export interface AvatarModalButtonProps {
    title: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
