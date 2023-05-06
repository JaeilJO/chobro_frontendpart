import styled from 'styled-components';
import { StyledTBodyItemProps } from './BodyItem.types';

export const StyledTBodyItem = styled.td<StyledTBodyItemProps>`
    //size
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.gray};
    padding: ${({ type }) => (type === 'is_active' ? `0` : `0px 10px`)};

    //text
    text-align: ${({ type }) => (type === 'is_active' ? `center` : `left`)};
    text-overflow: ellipsis;

    //etc
    white-space: nowrap;
    overflow: hidden;
`;

export const BodyItemText = styled.span`
    //font
    font-size: ${({ theme: { fontSize } }) => fontSize.md};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.light};

    //etc
    pointer-events: none;
`;
