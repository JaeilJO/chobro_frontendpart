import styled from 'styled-components';

export const StyledTableActiveButton = styled.button`
    background-color: ${({ theme: { colors }, data }) => (data === 'true' ? colors.second : colors.gray)};
    border: none;
    padding: 4px 8px;
    border-radius: 3px;
    color: ${({ theme: { colors }, data }) => (data === 'true' ? colors.white : colors.black)};
    cursor: pointer;
`;
