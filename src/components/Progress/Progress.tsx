import { useEffect, useState } from 'react';
import { CurrentProgress, TotalProgress } from './Progress.styled';

const Progress = ({ persent }) => {
    const [persentStatus, setPersentStatus] = useState('safe');

    useEffect(() => {
        if (persent <= 30) {
            setPersentStatus('safe');
        } else if (persent <= 70) {
            setPersentStatus('warn');
        } else {
            setPersentStatus('danger');
        }
    }, [persentStatus]);

    return (
        <TotalProgress>
            <CurrentProgress persentStatus={persentStatus} persent={persent} />
        </TotalProgress>
    );
};

export default Progress;
