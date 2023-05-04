import { useState } from 'react';
import { HeadItemText, OptionDown, OptionUp, StyledTHeadItem } from './HeadItem.styled';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

interface TheadItemProps {
    title: string;
    option?: boolean;
}

const TheadItem = ({ title, option }: TheadItemProps) => {
    const [optionOn, setOptionOn] = useState(false);

    const toggleOption = () => {
        setOptionOn(!optionOn);
    };
    console.log(title);
    return (
        <StyledTHeadItem title={title}>
            <HeadItemText>{title}</HeadItemText>

            {option && (optionOn ? <OptionDown onClick={toggleOption} /> : <OptionUp onClick={toggleOption} />)}
        </StyledTHeadItem>
    );
};

export default TheadItem;
