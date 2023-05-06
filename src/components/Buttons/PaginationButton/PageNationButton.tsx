import { AiOutlineCaretRight, AiOutlineCaretLeft } from 'react-icons/ai';
import { NextButton, PrevButton } from './PageNationButton.styled';

interface PaginationButtonProps {
    onClick: () => void;
    type: 'prev' | 'next';
    currentTalbe: number;
    dataTotalCount: number;
}

const PaginationButton = ({ type, onClick, currentTalbe, dataTotalCount }: PaginationButtonProps) => {
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

export default PaginationButton;
