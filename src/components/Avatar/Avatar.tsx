import { useCallback } from 'react';

//Component
import AvatarModal from '../Modals/AvatarModal/AvatarModal';

//Style
import { AvatarBox, StyledAvatar } from './Avatar.styled';

//Types
import { AvatarPorps } from './Avatar.types';

//Redux
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { toggleHeaderAvatarModal } from '../../redux/features/modalStatusSlice';

const Avatar = ({ lastName }: AvatarPorps) => {
    //for redux
    const avatarModalStatus = useAppSelector((state) => state.modalStatus.headerAvatarModal);
    const dispatch = useAppDispatch();

    //toggle onOff Modal
    const toggleAvatarModal = useCallback(() => {
        dispatch(toggleHeaderAvatarModal());
    }, []);

    return (
        <AvatarBox>
            <StyledAvatar onClick={toggleAvatarModal}>{lastName}</StyledAvatar>
            <AvatarModal modal={avatarModalStatus} />
        </AvatarBox>
    );
};

export default Avatar;
