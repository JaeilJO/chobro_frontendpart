import styled from 'styled-components';

export const StyledMain = styled.main`
    max-width: 1200px;
    margin: auto;
    position: relative;

    display: flex;
    justify-content: center;

    flex-direction: column;

    min-height: 100%;
`;

export const MainTitle = styled.div`
    margin-top: 150px;
    color: ${({ theme: { colors } }) => colors.primary};
    font-size: ${({ theme: { fontSize } }) => fontSize.xl};
    transition: 320ms;

    @media screen and (max-width: 500px) {
        font-size: ${({ theme: { fontSize } }) => fontSize.lg};
        text-align: center;
    }
`;
