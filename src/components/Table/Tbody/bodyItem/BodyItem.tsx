import { useState } from 'react';
import TableActiveButton from '../../../Buttons/TableActiveButton/TableActiveButton';
import Progress from '../../../Progress/Progress';
import { BodyItemText, StyledTBodyItem } from './BodyItem.styled';

interface TheadItemProps {
    data: string;
    type: string;
    sub_data?: string;
}

const BodyItem = ({ data, type, sub_data }: TheadItemProps) => {
    if (type === 'is_active') {
        return (
            <StyledTBodyItem type={type}>
                <TableActiveButton data={data} sub_data={sub_data} />
            </StyledTBodyItem>
        );
    }

    if (type === 'progress') {
        let now = new Date().setHours(0, 0, 0);
        const start = new Date(sub_data as string).setHours(0, 0, 0);
        const finish = new Date(data).setHours(0, 0, 0);

        const totalDays = Math.floor((finish - start) / (1000 * 60 * 60 * 24)) + 1;
        const startToNow = Math.floor((now - start) / (1000 * 60 * 60 * 24)) + 1;
        let persent = Math.floor((startToNow / totalDays) * 100);

        if (persent > 100) {
            persent = 100;
        }

        return (
            <StyledTBodyItem>
                <Progress persent={persent} />
                <BodyItemText>{persent}%</BodyItemText>
            </StyledTBodyItem>
        );
    }

    return (
        <StyledTBodyItem>
            <BodyItemText>{data}</BodyItemText>
        </StyledTBodyItem>
    );
};

export default BodyItem;
