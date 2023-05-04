import styled from 'styled-components';

export const AvatarBox = styled.div`
    position: relative;
`;

export const StyledAvatar = styled.div`
    //size
    width: 5rem;
    height: 5rem;
    padding: 2em;

    //color
    background-color: ${({ theme: { colors } }) => colors.primary};
    color: ${({ theme: { colors } }) => colors.white};

    // flex
    display: flex;
    justify-content: center;
    align-items: center;

    // font
    font-size: ${({ theme: { fontSize } }) => fontSize.md};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};

    //border
    border-radius: 5rem;

    //etc
    cursor: pointer;

    :hover {
        opacity: 90%;
    }
`;
