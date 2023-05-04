import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import styled from 'styled-components';

export const StyledTHeadItem = styled.th`
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.gray};
    padding-left: ${({ title }) => (title === 'Active' ? `0` : `10px`)};
    border: 1px solid red;
    text-align: ${({ title }) => (title === 'Active' ? `center` : `left`)};
`;

export const HeadItemText = styled.span`
    font-size: ${({ theme: { fontSize } }) => fontSize.md};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.medium};
    pointer-events: none;
`;

export const OptionDown = styled(AiFillCaretDown)`
    margin-left: 10px;
    cursor: pointer;
`;
export const OptionUp = styled(AiFillCaretUp)`
    margin-left: 10px;
    cursor: pointer;
`;
