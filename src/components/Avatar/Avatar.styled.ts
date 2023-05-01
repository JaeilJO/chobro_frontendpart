import styled from 'styled-components';

export const AvatarBox = styled.div`
    position: relative;
`;

export const StyledAvatar = styled.div`
    //size
    width: 50px;
    height: 50px;

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
    border-radius: 50%;

    //etc
    cursor: pointer;

    :hover {
        opacity: 90%;
    }
`;
