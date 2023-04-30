import { useCallback, useState } from 'react';
import AvatarModal from '../Modals/AvatarModal/AvatarModal';
import { AvatarBox, StyledAvatar } from './Avatar.styled';

interface AvatarPorps {
    lastName: string;
}

const Avatar = ({ lastName }: AvatarPorps) => {
    const [modal, setModal] = useState(false);
    const onClick = useCallback(() => {
        setModal(!modal);
    }, [modal]);
    return (
        <AvatarBox>
            <StyledAvatar onClick={onClick}>{lastName}</StyledAvatar>
            <AvatarModal modal={modal} />
        </AvatarBox>
    );
};

export default Avatar;
