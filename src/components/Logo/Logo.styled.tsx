import Link from 'next/link';
import styled from 'styled-components';

export const StyledLogo = styled(Link)`
    color: ${({ theme: { colors } }) => colors.primary};
    font-size: ${({ theme: { fontSize } }) => fontSize.xl};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
`;
