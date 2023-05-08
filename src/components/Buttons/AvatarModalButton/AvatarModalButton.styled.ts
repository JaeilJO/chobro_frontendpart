import styled from 'styled-components';

export const StyledAvatarModalButton = styled.button`
    //size
    width: 100%;
    height: 40px;

    //border
    border-radius: 0.3em;
    border: none;

    //color

    color: ${({ theme: { colors } }) => colors.black};

    //font
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};

    //etc
    cursor: pointer;
    transition: 320ms;
    z-index: 30;
    :hover {
        opacity: 90%;
        background-color: ${({ theme: { colors } }) => colors.primary};
        color: ${({ theme: { colors } }) => colors.white};
    }
`;
