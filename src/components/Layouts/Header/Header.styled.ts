import styled from 'styled-components';

export const StyledHeader = styled.header`
    //size
    width: 100vw;
    height: 100px;

    //etc
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const HeaderContents = styled.div`
    //size
    width: 120rem;
    height: 100%;
    margin: auto;
    padding: 2em 0;

    //flex
    display: flex;
    justify-content: space-between;

    //Media Query
    @media screen and (max-width: 1200px) {
        width: 100vw;
        margin: 0;
        padding: 2em 1em;
    }
`;
