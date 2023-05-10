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

const Avatar = () => {
    //for redux
    const avatarModalStatus = useAppSelector((state) => state.modal.headerAvatarModal);
    const dispatch = useAppDispatch();

    //toggle onOff Modal
    const toggleAvatarModal = useCallback(() => {
        dispatch(toggleHeaderAvatarModal());
    }, []);

    const name = useAppSelector((state) => state.user.userName);

    return (
        <AvatarBox>
            <StyledAvatar onClick={toggleAvatarModal}>{name[0]}</StyledAvatar>
        </AvatarBox>
    );
};

export default Avatar;
