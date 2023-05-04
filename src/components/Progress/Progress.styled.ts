import styled from 'styled-components';

export const TotalProgress = styled.div`
    background-color: ${({ theme: { colors } }) => colors.gray};
    width: 100%;
    height: 10px;
    border-radius: 10px;
`;

export const CurrentProgress = styled.div`
    background-color: ${({ theme: { colors }, persentStatus }) =>
        persentStatus === 'safe' ? colors.second : persentStatus === 'wanr' ? colors.warning : colors.danger};
    width: ${({ persent }) => persent}%;
    height: 100%;
    border-radius: 10px;
`;
