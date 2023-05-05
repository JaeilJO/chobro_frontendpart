import { useEffect, useState } from 'react';
import { NextButton, PrevButton, StyledPageNationButton } from './PageNationButton.styled';
import { AiOutlineCaretRight, AiOutlineCaretLeft } from 'react-icons/ai';

interface PageNationButtonProps {
    onClick: () => void;
    type: 'prev' | 'next';
    currentTalbe: number;
    dataTotalCount: number;
}

const PageNationButton = ({ type, onClick, currentTalbe, dataTotalCount }: PageNationButtonProps) => {
    if (type === 'next') {
        return (
            <NextButton onClick={onClick} currentTable={currentTalbe} dataTotalCount={dataTotalCount}>
                <AiOutlineCaretRight />
            </NextButton>
        );
    }

    if (type === 'prev') {
        return (
            <PrevButton onClick={onClick} currentTable={currentTalbe}>
                <AiOutlineCaretLeft />
            </PrevButton>
        );
    }
    return null;
};

export default PageNationButton;
