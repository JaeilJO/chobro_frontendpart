import styled from 'styled-components';

interface StyledActiveButtonProps {
    $is_active: boolean;
}

export const StyledActiveButton = styled.button<StyledActiveButtonProps>`
    border: none;
    width: 70%;
    height: 3rem;
    border-radius: 1em;
    background-color: ${({ theme: { colors }, $is_active }) => ($is_active ? colors.second : colors.gray)};
    color: ${({ theme: { colors }, $is_active }) => ($is_active ? colors.white : colors.black)};
    cursor: pointer;
`;
