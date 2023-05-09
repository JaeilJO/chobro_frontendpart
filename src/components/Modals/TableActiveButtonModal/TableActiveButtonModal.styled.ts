import styled from 'styled-components';

export const StyledTableActiveButtonModal = styled.div`
    position: relative;
    background-color: white;
    z-index: 2;

    width: 450px;
    height: 200px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const ActiveButtonMainText = styled.div`
    font-size: ${({ theme: { fontSize } }) => fontSize.lg};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.light};
`;

export const IsActiveText = styled.span`
    color: ${({ theme: { colors } }) => colors.primary};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
`;

export const ActiveButtonModalUrl = styled.div`
    font-size: ${({ theme: { fontSize } }) => fontSize.md};
`;

export const ActiveButtonModalButtonSet = styled.div`
    align-self: flex-end;
    display: flex;
    gap: 30px;
`;

export const ActiveButtonModalButton = styled.button`
    padding: 1em;
    border: none;
    border-radius: 0.5em;
    background-color: ${({ theme: { colors } }) => colors.primary};
    color: ${({ theme: { colors } }) => colors.white};
    cursor: pointer;
    :hover {
        opacity: 80%;
    }
`;
export const ActiveButtonModalCloseButton = styled(ActiveButtonModalButton)`
    background-color: ${({ theme: { colors } }) => colors.gray};
    color: ${({ theme: { colors } }) => colors.black};
    border: 1px dashed black;
`;
