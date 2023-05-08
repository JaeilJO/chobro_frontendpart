import styled from 'styled-components';

interface TableHeadItemProps {
    width?: number;
    textAlign?: string;
}

export const StyledTableHeadItem = styled.th<TableHeadItemProps>`
    font-size: 1.5rem;
    width: ${({ width }) => width}px;
    padding: 0px 10px;
    border-bottom: 1px solid gray;
    text-align: ${({ textAlign }) => textAlign || 'left'};
`;
