import Link from 'next/link';
import styled from 'styled-components';

export const StyledAuthLink = styled(Link)`
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid ${({ theme: { colors } }) => colors.gray};
    border-radius: 1em;
    background-color: ${({ theme: { colors } }) => colors.white};
    text-decoration: none;
    color: ${({ theme: { colors } }) => colors.black};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
    font-size: ${({ theme: { fontSize } }) => fontSize.md};
    gap: 1em;
`;
