import React from 'react';
import styled from 'styled-components';

export const StyledSignUpForm = styled.form`
    width: 350px;
    height: 650px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (max-width: 500px) {
        width: 100%;
    }
`;

export const SignUpFormTitle = styled.div`
    font-size: ${({ theme: { fontSize } }) => fontSize.xl};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
    color: ${({ theme: { colors } }) => colors.primary};
    @media screen and (max-width: 500px) {
        width: 100%;
        text-align: center;
    }
`;

export const RecomendText = styled.div`
    text-align: center;
    font-size: ${({ theme: { fontSize } }) => fontSize.md};
    color: ${({ theme: { colors } }) => colors.black};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.light};
`;

export const RecomendTextButton = styled.button`
    border: none;
    margin-left: 10px;
    font-size: ${({ theme: { fontSize } }) => fontSize.md};
    color: ${({ theme: { colors } }) => colors.primary};
    background: none;
    cursor: pointer;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
    :hover {
        opacity: 80%;
    }
`;

export const LoadingModal = styled.div`
    background-color: ${({ theme: { colors } }) => colors.warning};
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    display: flex;
    height: 50px;
`;

export const ErrorModal = styled.div``;

export const SuccessModal = styled.div``;
