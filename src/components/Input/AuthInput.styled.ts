import styled from 'styled-components';

export const AuthInputContainer = styled.div`
    position: relative;
`;

interface AuthLabelProps {
    active: boolean;
}

export const AuthLabel = styled.label<AuthLabelProps>`
    position: absolute;
    left: 5px;
    top: ${({ active }) => (active ? `-15px` : `15px`)};
    transition: 320ms;
    font-size: ${({ theme: { fontSize }, active }) => (active ? fontSize.sm : fontSize.md)};
    font-weight: ${({ theme: { fontWeight }, active }) => (active ? fontWeight.bold : fontWeight.medium)};
    color: ${({ theme: { colors }, active }) => (active ? colors.primary : colors.gray)};
    pointer-events: none;
    @media screen and (max-width: 500px) {
        width: 100%;
        text-align: center;
    }
`;

export const StyledAuthInput = styled.input`
    height: 50px;
    padding: 5px 5px;
    border: none;
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.gray};
    font-size: ${({ theme: { fontSize } }) => fontSize.md};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.light};

    width: 100%;

    :focus {
        outline: none;
    }

    @media screen and (max-width: 500px) {
        padding: 0;
        text-align: center;
    }
`;
