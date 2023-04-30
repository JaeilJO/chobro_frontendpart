import AvatarModal from '../Modals/AvatarModal/AvatarModal';
import { AvatarBox, StyledAvatar } from './Avatar.styled';

interface AvatarPorps {
    lastName: string;
}

const Avatar = ({ lastName }: AvatarPorps) => {
    return (
        <AvatarBox>
            <StyledAvatar>{lastName}</StyledAvatar>
            <AvatarModal />
        </AvatarBox>
    );
};

export default Avatar;
