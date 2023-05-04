import { useEffect, useState } from 'react';
import { CurrentProgress, TotalProgress } from './Progress.styled';

interface PrograssProps {
    persent: number;
}

const Progress = ({ persent }: PrograssProps) => {
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
