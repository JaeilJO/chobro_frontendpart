import styled from 'styled-components';

export const StyledPaginationButton = styled.button<StyledPaginationButtonProps>`
    //size
    width: 2rem;
    height: 2rem;

    border: 2px solid ${({ theme: { colors } }) => colors.primary};
    border-radius: 50%;

    color: ${({ theme: { colors } }) => colors.primary};
    background-color: ${({ theme: { colors } }) => colors.white};

    font-size: ${({ theme: { fontSize } }) => fontSize.sm};

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
`;

interface StyledPaginationButtonProps {
    currentTable: number;
    dataTotalCount?: number;
}

export const NextButton = styled(StyledPaginationButton)`
    pointer-events: ${({ currentTable, dataTotalCount }) => (currentTable === dataTotalCount ? `none` : ``)};
    transition: 320ms;
    opacity: ${({ currentTable, dataTotalCount }) => (currentTable === dataTotalCount ? `0%` : ``)};
    width: ${({ currentTable, dataTotalCount }) => (currentTable === dataTotalCount ? `0%` : ``)};
`;
export const PrevButton = styled(StyledPaginationButton)`
    pointer-events: ${({ currentTable }) => (currentTable === 1 ? `none` : ``)};
    transition: 320ms;
    opacity: ${({ currentTable }) => (currentTable === 1 ? `0%` : ``)};
    width: ${({ currentTable }) => (currentTable === 1 ? `0%` : ``)};
`;
