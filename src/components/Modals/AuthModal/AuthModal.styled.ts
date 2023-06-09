import styled from 'styled-components';

export const ModalBackground = styled.div`
    //position
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    //size
    width: 100%;
    height: 100%;

    //flex
    display: flex;
    justify-content: center;
    align-items: center;

    //etc
    backdrop-filter: blur(5px);
`;

export const StyledAuthModal = styled.div`
    //position
    position: relative;
    z-index: 2;

    //size
    width: 60rem;
    height: 90rem;

    //flex
    display: flex;
    justify-content: center;
    align-items: center;

    //border
    border-radius: 1em;
    border: 2px solid ${({ theme: { colors } }) => colors.gray};

    //color
    background-color: white;

    //etc

    overflow: hidden;
    transition: 320ms;

    //Media Query
    @media screen and(max-width: 700px) {
        width: 100vw;
        height: 100vh;
    }
`;
