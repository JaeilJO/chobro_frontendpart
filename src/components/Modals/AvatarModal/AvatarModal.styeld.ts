import styled, { css } from 'styled-components';
import { AvatarModalProps } from './AvatarModal.types';

export const StyledAvatarModal = styled.ul<AvatarModalProps>`
    //position
    position: absolute;
    right: 0;
    top: 60px;

    //size
    width: 150px;

    //border
    border-radius: 3px;

    //color
    background-color: white;

    //for modal
    ${({ modal }) => css`
        opacity: ${modal ? `100%` : `0%`};
        height: ${modal ? `` : `0px`};
        padding: ${modal ? `10px` : `0px`};
    `}

    //etc
    list-style-type: none;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: 320ms;
`;

export const AvatarModalItem = styled.li`
    height: 30px;
`;
