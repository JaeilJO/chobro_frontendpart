import styled from 'styled-components';

export const StyledAvatarModalButton = styled.button`
    width: 100%;
    height: 100%;
    border-radius: 3px;
    border: none;
    background-color: ${({ theme: { colors } }) => colors.second};
    color: ${({ theme: { colors } }) => colors.white};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
    cursor: pointer;
    :hover {
        opacity: 90%;
    }
`;
