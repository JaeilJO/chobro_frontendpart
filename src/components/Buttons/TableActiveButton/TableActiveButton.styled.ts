import styled from 'styled-components';

interface StyledTableActiveButtonProps {
    data: string;
}

export const StyledTableActiveButton = styled.button<StyledTableActiveButtonProps>`
    background-color: ${({ theme: { colors }, data }) => (data === 'true' ? colors.second : colors.gray)};
    border: none;
    padding: 0.4em 0.8em;
    border-radius: 0.3em;
    color: ${({ theme: { colors }, data }) => (data === 'true' ? colors.white : colors.black)};
    cursor: pointer;
`;
