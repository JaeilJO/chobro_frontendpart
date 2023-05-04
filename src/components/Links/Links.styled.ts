import Link from 'next/link';
import styled from 'styled-components';

export interface NavigationLinkStyledProps {
    active: boolean;
}

export const NavigationLinkStyled = styled(Link)<NavigationLinkStyledProps>`
    display: flex;
    align-items: center;
    font-size: ${({ theme: { fontSize } }) => fontSize.lg};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
    text-decoration: none;
    color: ${({ theme: { colors }, active }) => (active ? colors.primary : colors.gray)};
    width: 10rem;

    justify-content: center;

    position: relative;
    :before {
        content: '';
        position: absolute;
        width: ${({ active }) => (active ? `100%` : `0%`)};
        height: 0.2em;
        background-color: ${({ theme: { colors } }) => colors.primary};
        bottom: 0;
        left: 0;
        transition: 320ms;
    }
    :hover:before {
        width: 100%;
    }
    :hover {
        color: ${({ theme: { colors } }) => colors.primary};
        opacity: ${({ active }) => (active ? '80%' : '100%')};
    }
    @media screen and (max-width: 800px) {
        display: none;
    }
`;
