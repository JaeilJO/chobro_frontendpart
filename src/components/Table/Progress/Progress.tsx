import { useEffect, useState } from 'react';
import { CurrentProgress, TotalProgress } from './Progress.styled';

interface PrograssProps {
    percent: number;
}

const Progress = ({ percent }: PrograssProps) => {
    const [percentStatus, setPercentStatus] = useState('safe');

    useEffect(() => {
        if (percent <= 30) {
            setPercentStatus('safe');
        } else if (percent <= 70) {
            setPercentStatus('warn');
        } else {
            setPercentStatus('danger');
        }
    }, [percentStatus]);

    return (
        <TotalProgress>
            <CurrentProgress percentStatus={percentStatus} percent={percent} />
        </TotalProgress>
    );
};

export default Progress;
