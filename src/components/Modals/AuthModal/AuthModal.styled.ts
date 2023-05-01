import styled from 'styled-components';

export const ModalBackground = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5px);
    justify-content: center;
    align-items: center;
`;

export const StyledAuthModal = styled.div`
    position: relative;
    z-index: 2;
    width: 600px;
    height: 900px;
    border-radius: 10px;
    background-color: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    display: flex;
    overflow: hidden;

    justify-content: center;
    align-items: center;
    @media screen and(max-width: 700px) {
        width: 100%;
        height: 400px;
    }
`;
