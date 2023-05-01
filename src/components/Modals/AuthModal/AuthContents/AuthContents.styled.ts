import styled from 'styled-components';
import { StyledAuthContentsProps } from './AuthContents.types';

export const StyledAuthContents = styled.div<StyledAuthContentsProps>`
    //position
    position: relative;

    //size
    width: ${({ modalMode, mode }) => (modalMode === mode ? `100%` : `0%`)};
    height: 100%;

    //flex
    display: flex;
    justify-content: center;
    align-items: center;

    //etc
    white-space: nowrap;
    transition: 320ms;
    overflow: hidden;
`;
