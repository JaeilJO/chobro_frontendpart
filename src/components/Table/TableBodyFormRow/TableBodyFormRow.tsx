import { TableSubmitButton } from '../../Buttons/TableSubmitButton/TableSubmitButton.styled';
import { TableTextInput } from '../../Inputs/TableInput/TableInput.styled';
import { StyledTableBodyItem } from '../TableBodyItem/TableBodyItem.styled';
import { StyledTableBodyFormRow } from './TableBodyFormRow.styled';

const TableBodyFormRow = () => {
    return (
        <StyledTableBodyFormRow>
            {/* // */}

            <StyledTableBodyItem textAlign="center">
                <TableTextInput placeholder="URL" />
            </StyledTableBodyItem>

            <StyledTableBodyItem textAlign="center">
                <TableTextInput placeholder="Certificate" />
            </StyledTableBodyItem>

            <StyledTableBodyItem textAlign="center">
                <input type="date"></input>
            </StyledTableBodyItem>

            <StyledTableBodyItem textAlign="center">
                <input type="radio" name="active" value={'Acitve'} />
                <input type="radio" name="active" value={'Inactive'} />
            </StyledTableBodyItem>

            <StyledTableBodyItem textAlign="center">
                <TableSubmitButton>Submit</TableSubmitButton>
            </StyledTableBodyItem>

            {/* // */}
        </StyledTableBodyFormRow>
    );
};

export default TableBodyFormRow;
