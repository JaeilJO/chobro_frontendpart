import styled from 'styled-components';

export const StyledLoginButton = styled.button`
    background-color: ${({ theme: { colors } }) => colors.primary};
    border: none;
    width: 150px;
    border-radius: 10px;
    font-size: ${({ theme: { fontSize } }) => fontSize.md};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
    color: ${({ theme: { colors } }) => colors.white};
    cursor: pointer;
    :hover {
        opacity: 90%;
    }
`;
