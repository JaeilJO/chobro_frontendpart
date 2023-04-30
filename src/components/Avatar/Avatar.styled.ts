import styled from 'styled-components';

export const AvatarBox = styled.div`
    position: relative;
`;

export const StyledAvatar = styled.div`
    background-color: ${({ theme: { colors } }) => colors.primary};
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme: { fontSize } }) => fontSize.md};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
    color: ${({ theme: { colors } }) => colors.white};
    border-radius: 50%;
    cursor: pointer;
    :hover {
        opacity: 90%;
    }
`;
