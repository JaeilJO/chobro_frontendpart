import { calculatePercentage } from '../../../utils/utils';
import Progress from '../../Progress/Progress';
import TableBodyItem from '../TableBodyItem/TableBodyItem';
import { StyledTableBodyRow } from './TableBodyRow.styled';

interface TableBodyRowProps {
    url: string;
    certificate: string;
    expiration_date: string;
    is_active: string;
    created_at: string;
}

const TableBodyRow = ({ url, certificate, expiration_date, is_active, created_at }: TableBodyRowProps) => {
    const percent = calculatePercentage(created_at as string, expiration_date as string);

    return (
        <StyledTableBodyRow>
            <TableBodyItem text={url} />
            <TableBodyItem text={certificate} />
            <TableBodyItem text={expiration_date} />

            <TableBodyItem text={is_active} textAlign="center" />
            <TableBodyItem textAlign="center">
                <Progress percent={percent} />
            </TableBodyItem>
        </StyledTableBodyRow>
    );
};

export default TableBodyRow;
