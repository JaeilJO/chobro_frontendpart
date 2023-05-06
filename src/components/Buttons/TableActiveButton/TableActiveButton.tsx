import { openToggleTableActiveModal } from '../../../redux/features/modalStatusSlice';
import { useAppDispatch } from '../../../redux/hooks';
import { StyledTableActiveButton } from './TableActiveButton.styled';
interface TableAcitveButtonProps {
    is_active: string;
    url: string;
}

const TableActiveButton = ({ is_active, url }: TableAcitveButtonProps) => {
    const dispatch = useAppDispatch();

    const toggleTableAcitvButton = () => {
        let mode = '';
        if (is_active === 'true' ? (mode = 'Activate') : (mode = 'Deactivate'))
            dispatch(
                openToggleTableActiveModal({
                    mode: mode,
                    url: url,
                })
            );
    };
    return (
        <StyledTableActiveButton onClick={toggleTableAcitvButton} is_active={is_active}>
            {is_active === 'true' ? 'Activate' : 'Inactivate'}
        </StyledTableActiveButton>
    );
};

export default TableActiveButton;
