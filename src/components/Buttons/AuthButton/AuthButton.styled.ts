import styled from 'styled-components';
import { ColorTypes } from '../../../styles/theme';

interface StyledAuthButtonProps {
    backgroundColor: keyof ColorTypes;
    color: keyof ColorTypes;
}

export const StyledAuthButton = styled.button<StyledAuthButtonProps>`
    height: 70px;
    font-size: ${({ theme: { fontSize } }) => fontSize.lg};
    border: none;
    background-color: ${({ theme: { colors }, backgroundColor }) => colors[backgroundColor]};
    color: ${({ theme: { colors }, color }) => colors[color]};
    border-radius: 10px;
    cursor: pointer;
    :hover {
        opacity: 90%;
    }
`;
