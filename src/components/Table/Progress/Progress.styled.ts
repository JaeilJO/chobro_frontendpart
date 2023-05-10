import styled, { keyframes } from 'styled-components';

export const TotalProgress = styled.div`
    background-color: #f4f4f4;
    width: 100%;
    height: 1rem;
    border-radius: 1em;
`;

interface CurrentProgressProps {
    percentStatus: string;
    percent: number;
}
const progressMove = (percent: number) => keyframes`
	0%{
    	width: 0;
    }
     
    100%{
    	width: ${percent}%;
    }
`;

export const CurrentProgress = styled.div<CurrentProgressProps>`
    background-color: ${({ theme: { colors }, percentStatus }) =>
        percentStatus === 'safe' ? colors.second : percentStatus === 'warn' ? colors.warning : colors.danger};
    transition: 320ms;
    width: ${({ percent }) => `${percent}%`};
    left: 0;
    position: relative;
    height: 100%;
    border-radius: 1em;
    animation: ${({ percent }) => progressMove(percent)} 1s 0s;
`;
