import React from 'react';
import { StyledTableActiveModalButton } from './TableActiveModalButton.styled';
import { useAppDispatch } from '../../../redux/hooks';
import { closeToggleTableActiveModal } from '../../../redux/features/modalStatusSlice';

interface TableActiveModalButtonProps {
    children: React.ReactNode;
    role?: string;
}

const TableActiveModalButton = ({ children, role }: TableActiveModalButtonProps) => {
    const dispatch = useAppDispatch();
    const closeHandler = () => {
        dispatch(closeToggleTableActiveModal());
    };
    if (role === 'close') {
        //Close Button
        return (
            <StyledTableActiveModalButton onClick={closeHandler} role={role}>
                {children}
            </StyledTableActiveModalButton>
        );
    }
    //Activate or Deactivate Button
    return <StyledTableActiveModalButton>{children}</StyledTableActiveModalButton>;
};

export default TableActiveModalButton;
