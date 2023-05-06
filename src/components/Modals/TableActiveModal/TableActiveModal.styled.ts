import styled from 'styled-components';

interface PointTextProps {
    mode: string;
}

export const TableActiveModalBackGround = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;

    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(3px);
    top: 0;
    left: 0;
`;

export const StyledTableAcitveModal = styled.div`
    position: relative;
    width: 45rem;
    height: 20rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    border-radius: 1em;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    overflow: hidden;
    transition: 320ms;
    padding: 3em 2em;
`;

export const ActiveModalMainText = styled.div`
    font-size: ${({ theme: { fontSize } }) => fontSize.lg};

    text-align: center;
`;

export const PointText = styled.span<PointTextProps>`
    color: ${({ theme: { colors }, mode }) => (mode === 'activate' ? colors.primary : colors.danger)};
`;

export const UrlText = styled.div`
    font-size: ${({ theme: { fontSize } }) => fontSize.md};
    text-align: center;
`;
