import styled from 'styled-components';

interface StyledTableActiveButtonProps {
    is_active: string;
}

export const StyledTableActiveButton = styled.button<StyledTableActiveButtonProps>`
    background-color: ${({ theme: { colors }, is_active }) => (is_active === 'true' ? colors.second : colors.gray)};
    border: none;
    padding: 0.4em 0.8em;
    border-radius: 0.3em;
    color: ${({ theme: { colors }, is_active }) => (is_active === 'true' ? colors.white : colors.black)};
    cursor: pointer;
`;
