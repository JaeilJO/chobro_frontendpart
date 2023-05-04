import { StyledTable } from './Table.styled';
import Thead from './Thead/Thead';

const Table = () => {
    return (
        <StyledTable>
            <thead>
                <Thead />
            </thead>
            <tbody>
                <tr></tr>
            </tbody>
        </StyledTable>
    );
};

export default Table;
