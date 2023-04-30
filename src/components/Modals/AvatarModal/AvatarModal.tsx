import { useCallback, useState } from 'react';
import StyledAvatarModal from './AvatarModal.styeld';

export interface AvatarModalProps {
    modal: boolean;
}

const AvatarModal = ({ modal }: AvatarModalProps) => {
    return (
        <StyledAvatarModal modal={modal}>
            <li>LogOut</li>
        </StyledAvatarModal>
    );
};

export default AvatarModal;
