import styled from 'styled-components';

export const StyledLoginButton = styled.button`
    //size
    width: 15rem;

    //color
    background-color: ${({ theme: { colors } }) => colors.primary};
    color: ${({ theme: { colors } }) => colors.white};

    //border
    border: none;
    border-radius: 1em;

    //font
    font-size: ${({ theme: { fontSize } }) => fontSize.md};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};

    //etc
    cursor: pointer;
    :hover {
        opacity: 90%;
    }
`;
