import styled from 'styled-components';

export const ModalBackground = styled.div`
    //position
    position: absolute;
    top: 0;
    left: 0;

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
    width: 600px;
    height: 900px;

    //flex
    display: flex;
    justify-content: center;
    align-items: center;

    //border
    border-radius: 10px;

    //color
    background-color: white;

    //etc
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    overflow: hidden;

    //Media Query
    @media screen and(max-width: 700px) {
        width: 100%;
        height: 400px;
    }
`;
