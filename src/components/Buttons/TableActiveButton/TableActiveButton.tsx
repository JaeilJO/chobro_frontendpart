import { StyledTableActiveButton } from './TableActiveButton.styled';
interface TableAcitveButtonProps {
    data: string;
}

const TableActiveButton = ({ data }: TableAcitveButtonProps) => {
    return <StyledTableActiveButton data={data}>{data === 'true' ? 'Acitvate' : 'Inactivate'}</StyledTableActiveButton>;
};

export default TableActiveButton;
