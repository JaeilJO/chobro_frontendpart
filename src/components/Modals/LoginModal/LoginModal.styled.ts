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

export const StyledLoginModal = styled.div`
    width: 700px;
    height: 80%;
    border-radius: 10px;
    background-color: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    @media screen and(max-width: 700px) {
        width: 100%;
    }
`;
