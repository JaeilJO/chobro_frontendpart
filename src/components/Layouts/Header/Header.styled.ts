import styled from 'styled-components';

export const StyledHeader = styled.header`
    //size
    width: 100vw;
    height: 80px;

    display: flex;
    justify-content: center;

    border-bottom: 1px solid ${({ theme: { colors } }) => colors.gray};
`;

export const HeaderContents = styled.div`
    //size
    width: 1200px;
    height: 100%;
    padding: 0 1rem;

    //flex
    display: flex;
    justify-content: space-between;
    align-items: center;

    //Media Query
`;
