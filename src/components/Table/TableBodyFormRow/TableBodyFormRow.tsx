import { TableSubmitButton } from '../../Buttons/TableSubmitButton/TableSubmitButton.styled';
import { TableTextInput } from '../../Inputs/TableInput/TableInput.styled';
import { StyledTableBodyItem } from '../TableBodyItem/TableBodyItem.styled';
import { StyledTableBodyFormRow } from './TableBodyFormRow.styled';

const TableBodyFormRow = () => {
    return (
        <StyledTableBodyFormRow>
            <StyledTableBodyItem textAlign="center" colSpan={4}>
                <TableTextInput placeholder="URL" />
            </StyledTableBodyItem>

            <StyledTableBodyItem textAlign="center">
                <TableSubmitButton>Submit</TableSubmitButton>
            </StyledTableBodyItem>
        </StyledTableBodyFormRow>
    );
};

export default TableBodyFormRow;
