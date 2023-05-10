import styled from 'styled-components';

export const TableTextInput = styled.input`
    width: 100%;
    text-align: left;
    font-size: ${({ theme: { fontSize } }) => fontSize.md};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.light};
    padding: 1rem 0;
    border: none;
    :focus {
        outline: none;
    }
`;
