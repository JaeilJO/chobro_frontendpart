import TableActiveButton from '../../../Buttons/TableActiveButton/TableActiveButton';
import Progress from '../../../Progress/Progress';

import TableActiveModal from '../../../Modals/TableActiveModal/TableActiveModal';
import { useAppSelector } from '../../../../redux/hooks';
import { calculatePercentage } from './utils/calculatePercentage';
import { StyledTBodyItem, BodyItemText } from './BodyItem.styled';
import { TheadItemProps } from './BodyItem.types';

const TBodyItem = ({ is_active, expiration_date, certificate, url, created_at, type }: TheadItemProps) => {
    console.log(type);

    if (type === 'is_active') {
        return (
            <>
                <StyledTBodyItem type={type}>
                    <TableActiveButton is_active={is_active as string} url={url} />
                </StyledTBodyItem>

                {/* Active 클릭시 나오는 Modal */}
            </>
        );
    }

    if (type === 'progress') {
        //퍼센트 계산하는 것
        const percent = calculatePercentage(created_at as string, expiration_date as string);
        console.log('percent', percent);

        return (
            <StyledTBodyItem>
                <Progress percent={percent} />
                <BodyItemText>{percent}%</BodyItemText>
            </StyledTBodyItem>
        );
    }

    return (
        <StyledTBodyItem>
            <BodyItemText>{url || certificate || expiration_date}</BodyItemText>
        </StyledTBodyItem>
    );
};

export default TBodyItem;
