import Link from 'next/link';
import styled from 'styled-components';

export interface NavigationLinkStyledProps {
    $active: boolean;
}

export const NavigationLinkStyled = styled(Link)<NavigationLinkStyledProps>`
    display: flex;
    align-items: center;
    font-size: ${({ theme: { fontSize } }) => fontSize.lg};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
    text-decoration: none;
    color: ${({ theme: { colors }, $active }) => ($active ? colors.primary : colors.gray)};
    width: 10rem;
    transition: 280ms;

    justify-content: center;

    position: relative;

    :hover {
        color: ${({ theme: { colors } }) => colors.primary};
        opacity: ${({ $active }) => ($active ? '80%' : '100%')};
    }
`;
