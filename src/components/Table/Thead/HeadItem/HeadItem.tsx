import { useState } from 'react';
import { HeadItemText, OptionDown, OptionUp, StyledTHeadItem } from './HeadItem.styled';
import { TheadItemProps } from './HeadItem.types';

const TheadItem = ({ title, option }: TheadItemProps) => {
    const [optionOn, setOptionOn] = useState(false);

    const toggleOption = () => {
        setOptionOn(!optionOn);
    };

    return (
        <StyledTHeadItem title={title}>
            <HeadItemText>{title}</HeadItemText>
            {option && (optionOn ? <OptionDown onClick={toggleOption} /> : <OptionUp onClick={toggleOption} />)}
        </StyledTHeadItem>
    );
};

export default TheadItem;
