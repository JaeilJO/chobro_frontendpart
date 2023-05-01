import { ColorTypes } from '../../../styles/theme';

//Component Props
export interface AuthButtonProps {
    title: string;
    backgorundColor: keyof ColorTypes;
    color: keyof ColorTypes;
}

//Styled Props
export interface StyledAuthButtonProps {
    backgroundColor: keyof ColorTypes;
    color: keyof ColorTypes;
}
