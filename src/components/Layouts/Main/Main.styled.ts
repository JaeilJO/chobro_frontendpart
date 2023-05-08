import styled from 'styled-components';

export const StyledMain = styled.main`
    max-width: 120rem;
    margin: auto;
    position: relative;

    display: flex;
    justify-content: center;

    flex-direction: column;

    min-height: 100%;
    @media screen and (max-width: 1200px) {
        margin: 0 1em;
    }
`;

export const MainTitle = styled.div`
    margin-top: 15rem;
    color: ${({ theme: { colors } }) => colors.primary};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxl};
    transition: 320ms;
    margin-left: 1rem;

    @media screen and (max-width: 500px) {
        margin-left: 0;
        font-size: ${({ theme: { fontSize } }) => fontSize.xl};
        text-align: center;
    }
`;
