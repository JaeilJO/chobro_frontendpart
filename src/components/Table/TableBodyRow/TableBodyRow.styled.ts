import styled from 'styled-components';

export const StyledTableBodyRow = styled.tr`
    height: 50px;

    :hover {
        background-color: ${({ theme: { colors } }) => colors.gray};
    }
`;
