import styled from 'styled-components';

export const StyledAuthForm = styled.form`
    //size
    width: 350px;
    height: 650px;

    //flex
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    //Media Query
    @media screen and (max-width: 500px) {
        width: 100%;
    }
`;

export const AuthFormTitle = styled.div`
    //font
    font-size: ${({ theme: { fontSize } }) => fontSize.xl};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};

    //color
    color: ${({ theme: { colors } }) => colors.primary};

    //Media Query
    @media screen and (max-width: 500px) {
        width: 100%;
        text-align: center;
    }
`;

export const RecomendText = styled.div`
    //font
    text-align: center;
    font-size: ${({ theme: { fontSize } }) => fontSize.md};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.light};

    //color
    color: ${({ theme: { colors } }) => colors.black};
`;

export const RecomendTextButton = styled.button`
    //size
    margin-left: 10px;

    //font
    font-size: ${({ theme: { fontSize } }) => fontSize.md};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};

    //border
    border: none;

    //color
    color: ${({ theme: { colors } }) => colors.primary};

    //etc
    background: none;
    cursor: pointer;

    :hover {
        opacity: 80%;
    }
`;
