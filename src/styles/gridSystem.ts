import { type } from 'os';
import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1200px;
    min-width: 360px;
    margin: 0 auto;
    display: flex;

    background-color: violet;
    align-items: center;
`;

interface ColumnSpan {
    span: number;
    offset?: number;
}

export const DeskTopColumn = styled.div<ColumnSpan>`
    flex-basis: calc(100% / 12 * ${({ span }) => span});
    background-color: aqua;
    margin: 0 15px;
    margin-left: calc(100% / 12 * ${({ offset }) => `calc(100% / 12 * ${offset} - 30px)`});
`;
