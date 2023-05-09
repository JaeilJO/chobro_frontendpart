import { openToggleTableActiveModal } from '../../../redux/features/modalStatusSlice';
import { useAppDispatch } from '../../../redux/hooks';
import { StyledActiveButton } from './ActiveButton.styled';

interface ActiveButtonProps {
    is_active: boolean;
    url: string;
    cert_id: string;
}

const ActiveButton = ({ url, is_active, cert_id }: ActiveButtonProps) => {
    //redux Dispatch
    const dispatch = useAppDispatch();

    //active인지 Inactive인지 판별
    const status = is_active === true ? 'Active' : 'Inactive';

    //ActiveModal Handler
    const handleActiveModal = () => {
        dispatch(
            openToggleTableActiveModal({
                is_active,
                url,
                cert_id,
            })
        );
    };
    return (
        <StyledActiveButton onClick={handleActiveModal} $is_active={is_active}>
            {status}
        </StyledActiveButton>
    );
};

export default ActiveButton;
