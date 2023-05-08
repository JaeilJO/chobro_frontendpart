import React from 'react';
import { StyledTableBodyItem } from './TableBodyItem.styled';

interface TableBodyItemProps {
    textAlign?: string;
    text?: string;
    children?: React.ReactNode;
}

const TableBodyItem = ({ textAlign, text, children }: TableBodyItemProps) => {
    return <StyledTableBodyItem textAlign={textAlign}>{text || children}</StyledTableBodyItem>;
};

export default TableBodyItem;
