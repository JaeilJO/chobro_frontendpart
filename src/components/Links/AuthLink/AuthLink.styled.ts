import Link from 'next/link';
import styled from 'styled-components';

export const StyledAuthLink = styled(Link)`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid ${({ theme: { colors } }) => colors.gray};
    border-radius: 10px;
    background-color: ${({ theme: { colors } }) => colors.white};
    text-decoration: none;
    color: ${({ theme: { colors } }) => colors.black};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
    font-size: ${({ theme: { fontSize } }) => fontSize.md};
    gap: 10px;
`;
