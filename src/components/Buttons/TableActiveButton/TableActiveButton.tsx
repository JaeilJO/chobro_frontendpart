import { StyledTableActiveButton } from './TableActiveButton.styled';
interface TableAcitveButtonProps {
    data: string;
    sub_data?: string;
}

const TableActiveButton = ({ data, sub_data }: TableAcitveButtonProps) => {
    return <StyledTableActiveButton data={data}>{data === 'true' ? 'Acitvate' : 'Inactivate'}</StyledTableActiveButton>;
};

export default TableActiveButton;
