import styled from 'styled-components';
import { AvatarModalProps } from './AvatarModal';

const StyledAvatarModal = styled.ul<AvatarModalProps>`
    background-color: white;
    list-style-type: none;
    width: 150px;
    height: ${({ modal }) => (modal ? `` : `0px`)};
    position: absolute;
    right: 0;
    border-radius: 3px;
    top: 60px;
    padding: ${({ modal }) => (modal ? `10px` : `0px`)};
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: 320ms;
`;

export default StyledAvatarModal;
