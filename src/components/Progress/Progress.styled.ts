import styled, { keyframes } from 'styled-components';

export const TotalProgress = styled.div`
    background-color: #f4f4f4;
    width: 100%;
    height: 1rem;
    border-radius: 1em;
`;

interface CurrentProgressProps {
    persentStatus: string;
    persent: number;
}
const progressMove = (persent: number) => keyframes`
	0%{
    	width: 0;
    }
     
    100%{
    	width: ${persent}%;
    }
`;

export const CurrentProgress = styled.div<CurrentProgressProps>`
    background-color: ${({ theme: { colors }, persentStatus }) =>
        persentStatus === 'safe' ? colors.second : persentStatus === 'warn' ? colors.warning : colors.danger};
    transition: 320ms;
    width: ${({ persent }) => `${persent}%`};
    left: 0;
    position: relative;
    height: 100%;
    border-radius: 1em;
    animation: ${({ persent }) => progressMove(persent)} 1s 1s;
`;
