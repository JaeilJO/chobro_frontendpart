import styled from 'styled-components';

export const StyledPageNation = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 1rem;
    font-size: ${({ theme: { fontSize } }) => fontSize.md};
    gap: 1rem;
`;
