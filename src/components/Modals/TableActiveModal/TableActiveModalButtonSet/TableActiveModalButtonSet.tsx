import { closeToggleTableActiveModal } from '../../../../redux/features/modalStatusSlice';
import { useAppDispatch } from '../../../../redux/hooks';
import TableActiveModalButton from '../../../Buttons/TableActiveModalButton/TableActiveModalButton';
import { StyledTableActiveModalButtonSet } from './TableActiveModalButtonSet.styled';

interface TableActiveModalButtonSet {
    mode: string;
}

const TableActiveModalButtonSet = ({ mode }: TableActiveModalButtonSet) => {
    return (
        <StyledTableActiveModalButtonSet>
            <li>
                <TableActiveModalButton role={'close'}>Close</TableActiveModalButton>
            </li>
            <li>
                <TableActiveModalButton>{mode === 'Activate' ? 'Deactivate' : 'Active'}</TableActiveModalButton>
            </li>
        </StyledTableActiveModalButtonSet>
    );
};

export default TableActiveModalButtonSet;
