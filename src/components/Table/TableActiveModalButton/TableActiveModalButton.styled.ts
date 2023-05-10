import styled from 'styled-components';

interface StyledTableActiveModalButtonProps {
    role?: string;
}

export const StyledTableActiveModalButton = styled.button<StyledTableActiveModalButtonProps>`
    background: none;
    width: 10rem;
    height: 3.5rem;
    border-radius: 0.3em;

    background-color: ${({ theme: { colors }, role }) => (role === 'close' ? colors.white : colors.second)};
    border: ${({ theme: { colors }, role }) => (role === 'close' ? `1px solid ${colors.gray}` : `none`)};
    color: ${({ theme: { colors }, role }) => (role === 'close' ? colors.black : colors.white)};

    cursor: pointer;
    :hover {
        opacity: 90%;
    }
`;
