import styled from 'styled-components';

export const StyledAvatarModalButton = styled.button`
    //size
    width: 100%;
    height: 100%;

    //border
    border-radius: 0.3em;
    border: none;

    //color
    background-color: ${({ theme: { colors } }) => colors.second};
    color: ${({ theme: { colors } }) => colors.white};

    //font
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};

    //etc
    cursor: pointer;
    :hover {
        opacity: 90%;
    }
`;
