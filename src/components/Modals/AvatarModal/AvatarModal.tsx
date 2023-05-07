//Style
import { AvatarModalItem, StyledAvatarModal } from './AvatarModal.styeld';

//Conponent
import AvatarModalButton from '../../Buttons/AvatarModalButton/AvatarModalButton';

//Datas
import { avatarModalItems } from './AvatarModalItems';

//Types
import { AvatarModalProps } from './AvatarModal.types';

const AvatarModal = ({ modal }: AvatarModalProps) => {
    return (
        <StyledAvatarModal modal={modal}>
            {avatarModalItems.map((item) => (
                <AvatarModalItem key={item.title}>
                    <AvatarModalButton  title={item.title} onClick={item.onClick} />
                </AvatarModalItem>
            ))}
        </StyledAvatarModal>
    );
};

export default AvatarModal;
