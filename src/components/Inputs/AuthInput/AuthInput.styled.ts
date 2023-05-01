import styled, { css } from 'styled-components';
import { AuthLabelProps } from './AuthInput.types';

export const AuthInputContainer = styled.div`
    position: relative;
`;

export const AuthLabel = styled.label<AuthLabelProps>`
    //position
    position: absolute;
    left: 5px;

    //Active Status
    ${({ theme: { fontSize, fontWeight, colors }, active }) => css`
        top: ${active ? `-15px` : `15px`};
        font-size: ${active ? fontSize.sm : fontSize.md};
        font-weight: ${active ? fontWeight.bold : fontWeight.medium};
        color: ${active ? colors.primary : colors.gray};
    `}

    //etc
    pointer-events: none;
    transition: 320ms;

    //Media Queries
    @media screen and (max-width: 500px) {
        width: 100%;
        text-align: center;
    }
`;

export const StyledAuthInput = styled.input`
    //size
    width: 100%;
    height: 50px;
    padding: 5px 5px;

    //border
    border: none;
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.gray};

    //font
    font-size: ${({ theme: { fontSize } }) => fontSize.md};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.light};

    :focus {
        outline: none;
    }

    //Media Queries
    @media screen and (max-width: 500px) {
        padding: 0;
        text-align: center;
    }
`;
