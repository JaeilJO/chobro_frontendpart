import styled from 'styled-components';

export const AvatarBox = styled.div`
    position: relative;
`;

export const StyledAvatar = styled.div`
    //size
    width: 2rem;
    height: 2rem;
    padding: 1em;
    //color
    background-color: ${({ theme: { colors } }) => colors.primary};
    color: ${({ theme: { colors } }) => colors.white};

    // flex
    display: flex;
    justify-content: center;
    align-items: center;

    // font
    font-size: ${({ theme: { fontSize } }) => fontSize.lg};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.medium};

    //border
    border-radius: 5rem;

    //etc
    cursor: pointer;
    transition: 320ms;

    :hover {
        opacity: 80%;
    }
`;
