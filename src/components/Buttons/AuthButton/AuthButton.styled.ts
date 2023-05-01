import styled from 'styled-components';
import { StyledAuthButtonProps } from './AuthButton.types';

export const StyledAuthButton = styled.button<StyledAuthButtonProps>`
    //size
    height: 70px;

    //font
    font-size: ${({ theme: { fontSize } }) => fontSize.lg};

    //border
    border: none;
    border-radius: 10px;

    //color
    background-color: ${({ theme: { colors }, backgroundColor }) => colors[backgroundColor]};
    color: ${({ theme: { colors }, color }) => colors[color]};

    //etc
    cursor: pointer;
    :hover {
        opacity: 90%;
    }
`;
