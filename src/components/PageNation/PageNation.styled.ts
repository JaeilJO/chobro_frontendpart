import styled from 'styled-components';

export const StyledPageNation = styled.div`
    background-color: antiquewhite;
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    font-size: ${({ theme: { fontSize } }) => fontSize.md};
    gap: 1rem;
`;
