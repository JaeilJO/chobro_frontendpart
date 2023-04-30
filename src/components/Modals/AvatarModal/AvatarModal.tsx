import { useCallback, useState } from 'react';
import { AvatarModalItem, StyledAvatarModal } from './AvatarModal.styeld';
import AvatarModalButton from '../../Buttons/AvatarModalButton/AvatarModalButton';

export interface AvatarModalProps {
    modal: boolean;
}

const AvatarModal = ({ modal }: AvatarModalProps) => {
    const avatarModalItems = [{ title: 'LOGOUT', type: 'button', onClick: '' }];
    return (
        <StyledAvatarModal modal={modal}>
            {avatarModalItems.map((item) =>
                item.type === 'button' ? (
                    <AvatarModalItem>
                        {/* 아직 loginmethod가 없습니다 */}
                        <AvatarModalButton title={item.title} onClick={item.onClick} />
                    </AvatarModalItem>
                ) : (
                    <AvatarModalItem>
                        <>미완성</>
                    </AvatarModalItem>
                )
            )}
        </StyledAvatarModal>
    );
};

export default AvatarModal;
