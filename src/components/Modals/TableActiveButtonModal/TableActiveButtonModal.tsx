import { closeToggleTableActiveModal } from '../../../redux/features/modalStatusSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { usePatchCertMutation } from '../../../redux/services/userApi';
import { ModalBackground } from '../commonModal.styled';
import {
    StyledTableActiveButtonModal,
    ActiveButtonMainText,
    ActiveButtonModalButtonSet,
    ActiveButtonModalButton,
    ActiveButtonModalUrl,
    IsActiveText,
    ActiveButtonModalCloseButton,
} from './TableActiveButtonModal.styled';

const TableActiveButtonModal = () => {
    const { is_active, url, cert_id } = useAppSelector((state) => state.modal.tableActiveModal);
    const dispatch = useAppDispatch();
    const [patchCert, { isLoading }] = usePatchCertMutation();
    const accessToken = useAppSelector((state) => state.user.token);
    const closeHandler = () => {
        dispatch(closeToggleTableActiveModal());
    };

    const changeActiveStatusHandler = () => {
        patchCert({ cert_id: cert_id, accessToken: accessToken, is_active: !is_active });
        dispatch(closeToggleTableActiveModal());
    };

    return (
        <>
            <ModalBackground>
                <StyledTableActiveButtonModal>
                    <ActiveButtonMainText>
                        Would you like to <IsActiveText>{is_active ? 'Active' : 'Deactive'}</IsActiveText> this URL?
                    </ActiveButtonMainText>

                    <ActiveButtonModalUrl>{url}</ActiveButtonModalUrl>

                    <ActiveButtonModalButtonSet>
                        <ActiveButtonModalCloseButton onClick={closeHandler}>close</ActiveButtonModalCloseButton>

                        <ActiveButtonModalButton onClick={changeActiveStatusHandler}>
                            {is_active ? 'Deactivate' : 'Activate'}
                        </ActiveButtonModalButton>
                    </ActiveButtonModalButtonSet>
                </StyledTableActiveButtonModal>
            </ModalBackground>
        </>
    );
};

export default TableActiveButtonModal;
