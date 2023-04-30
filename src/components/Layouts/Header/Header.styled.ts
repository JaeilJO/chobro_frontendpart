import styled from 'styled-components';

export const StyledHeader = styled.header`
    height: 100px;

    box-shadow: rgba(0, 0, 0, 0.35) 1px 1px 10px;
    min-width: 360px;
`;

export const HeaderContents = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1200px;
    margin: auto;
    height: 100%;
    padding: 20px 0;

    @media screen and (max-width: 1200px) {
        width: 100%;

        margin: 0;

        padding: 20px 10px;
    }
`;
