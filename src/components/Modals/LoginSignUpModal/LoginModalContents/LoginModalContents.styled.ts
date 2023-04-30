import styled from 'styled-components';

interface StyledLoginModalContentsProps {
    modalMode: string;
}

export const StyledLoginModalContents = styled.div<StyledLoginModalContentsProps>`
    width: ${({ modalMode }) => (modalMode === 'login' ? `100%` : `0%`)};
    height: 100%;
    white-space: nowrap;
    transition: 320ms;
    overflow: hidden;
`;
