import styled from 'styled-components';

interface StyledAuthContentsProps {
    modalMode: string;
    mode: string;
}

export const StyledAuthContents = styled.div<StyledAuthContentsProps>`
    width: ${({ modalMode, mode }) => (modalMode === mode ? `100%` : `0%`)};
    height: 100%;
    display: flex;

    justify-content: center;
    align-items: center;
    white-space: nowrap;
    transition: 320ms;
    overflow: hidden;
`;
