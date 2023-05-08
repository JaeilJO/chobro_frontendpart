import { StyledTableHeadItem } from './TableHeadItem.styled';

export interface TableHeadItemProps {
    width?: number;
    textAlign?: string;
    text?: string;
}

const TableHeadItem = ({ width, textAlign, text }: TableHeadItemProps) => {
    return (
        <StyledTableHeadItem width={width} textAlign={textAlign}>
            {text}
        </StyledTableHeadItem>
    );
};

export default TableHeadItem;
