import Link from 'next/link';
import styled from 'styled-components';

export interface NavigationLinkStyledProps {
    active: boolean;
}

export const NavigationLinkStyled = styled(Link)<NavigationLinkStyledProps>`
    display: flex;
    align-items: center;
    font-size: ${({ theme: { fontSize } }) => fontSize.md};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
    text-decoration: none;
    color: ${({ theme: { colors }, active }) => (active ? colors.primary : colors.gray)};
    width: 100px;

    justify-content: center;

    position: relative;
    :before {
        content: '';
        position: absolute;
        width: ${({ active }) => (active ? `100%` : `0%`)};
        height: 3px;
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
        opacity: ${({ active }) => (active ? '90%' : '100%')};
    }
    @media screen and (max-width: 800px) {
        display: none;
    }
`;
