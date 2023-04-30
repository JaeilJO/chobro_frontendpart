import styled from 'styled-components';

interface StyledSignUpModalProps {
    modalMode: string;
}

export const StyledSignUpModal = styled.div<StyledSignUpModalProps>`
    background-color: aliceblue;
    transition: 320ms;
    white-space: nowrap;
    width: ${({ modalMode }) => (modalMode === 'signup' ? `100%` : `0%`)};
    height: 100%;
`;
