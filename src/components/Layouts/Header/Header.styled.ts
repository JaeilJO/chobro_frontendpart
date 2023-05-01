import styled from 'styled-components';

export const StyledHeader = styled.header`
    //size
    min-width: 360px;
    height: 100px;

    //etc
    box-shadow: rgba(0, 0, 0, 0.35) 1px 1px 10px;
`;

export const HeaderContents = styled.div`
    //size
    width: 1200px;
    height: 100%;
    margin: auto;
    padding: 20px 0;

    //flex
    display: flex;
    justify-content: space-between;

    //Media Query
    @media screen and (max-width: 1200px) {
        width: 100%;
        margin: 0;
        padding: 20px 10px;
    }
`;
