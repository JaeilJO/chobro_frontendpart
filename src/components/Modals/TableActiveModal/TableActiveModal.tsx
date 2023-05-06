import { useEffect, useState } from 'react';
import {
    ActiveModalMainText,
    PointText,
    StyledTableAcitveModal,
    TableActiveModalBackGround,
    UrlText,
} from './TableActiveModal.styled';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { closeToggleTableActiveModal } from '../../../redux/features/modalStatusSlice';
import TableActiveModalButtonSet from './TableActiveModalButtonSet/TableActiveModalButtonSet';

const TableActiveModal = () => {
    const tableActiveModalData = useAppSelector((state) => state.modalStatus.tableActiveModal);

    return (
        <TableActiveModalBackGround>
            <StyledTableAcitveModal>
                <ActiveModalMainText>
                    Would you like to{' '}
                    <PointText mode={tableActiveModalData.mode}>{tableActiveModalData.mode}</PointText> this URL?
                </ActiveModalMainText>
                <UrlText>{tableActiveModalData.url}</UrlText>
                <TableActiveModalButtonSet mode={tableActiveModalData.mode} />
            </StyledTableAcitveModal>
        </TableActiveModalBackGround>
    );
};

export default TableActiveModal;
