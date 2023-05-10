import { calculatePercentage } from '../../../utils/utils';
import Progress from '../Progress/Progress';
import ActiveButton from '../ActiveButton/ActiveButton';
import TableBodyItem from '../TableBodyItem/TableBodyItem';
import { StyledTableBodyRow } from './TableBodyRow.styled';

interface TableBodyRowProps {
    url: string;
    certificate: string;
    expiration_date: string;
    is_active: boolean;
    created_at: string;
    cert_id: string;
}

const TableBodyRow = ({ url, certificate, expiration_date, is_active, created_at, cert_id }: TableBodyRowProps) => {
    const percent = calculatePercentage(created_at as string, expiration_date as string);

    return (
        <StyledTableBodyRow>
            <TableBodyItem text={url} />
            <TableBodyItem text={certificate} />
            <TableBodyItem text={expiration_date} />

            <TableBodyItem textAlign="center">
                <ActiveButton cert_id={cert_id} url={url} is_active={is_active} />
            </TableBodyItem>

            <TableBodyItem textAlign="center">
                <Progress percent={percent} />
            </TableBodyItem>
        </StyledTableBodyRow>
    );
};

export default TableBodyRow;
