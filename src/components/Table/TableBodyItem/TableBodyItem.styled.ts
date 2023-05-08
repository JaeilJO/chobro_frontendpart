import styled from 'styled-components';

interface StyledTableBodyItemProps {
    textAlign?: string;
}
export const StyledTableBodyItem = styled.td<StyledTableBodyItemProps>`
    font-size: ${({ theme: { fontSize } }) => fontSize.md};
    padding: 10px 10px;
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.gray};
    text-align: ${({ textAlign }) => textAlign || 'left'};
`;
