import styled from 'styled-components';

interface StyledTBodyItemProps {
    type?: string;
}

export const StyledTBodyItem = styled.td<StyledTBodyItemProps>`
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.gray};
    text-align: ${({ type }) => (type === 'is_active' ? `center` : `left`)};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    padding: ${({ type }) => (type === 'is_active' ? `0` : `0px 10px`)};
    padding: ${({ type }) => (type === 'is_active' ? `auto` : ``)};
`;

export const BodyItemText = styled.span`
    font-size: ${({ theme: { fontSize } }) => fontSize.md};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.light};
    pointer-events: none;
`;
