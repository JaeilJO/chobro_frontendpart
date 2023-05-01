import styled from 'styled-components';

export const StyledLoginButton = styled.button`
    //size
    width: 150px;

    //color
    background-color: ${({ theme: { colors } }) => colors.primary};
    color: ${({ theme: { colors } }) => colors.white};

    //border
    border: none;
    border-radius: 10px;

    //font
    font-size: ${({ theme: { fontSize } }) => fontSize.md};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};

    //etc
    cursor: pointer;
    :hover {
        opacity: 90%;
    }
`;
