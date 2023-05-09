import { AiOutlineCaretRight, AiOutlineCaretLeft } from 'react-icons/ai';
import { NextButton, PrevButton } from './PageNationButton.styled';

interface PaginationButtonProps {
    onClick: () => void;
    type: 'prev' | 'next';
    currentTable: number;
    pageCount: number;
}

const PaginationButton = ({ type, onClick, currentTable, pageCount }: PaginationButtonProps) => {
    if (type === 'next') {
        return (
            <NextButton onClick={onClick} currentTable={currentTable} dataTotalCount={pageCount}>
                <AiOutlineCaretRight />
            </NextButton>
        );
    }

    if (type === 'prev') {
        return (
            <PrevButton onClick={onClick} currentTable={currentTable}>
                <AiOutlineCaretLeft />
            </PrevButton>
        );
    }
    return null;
};

export default PaginationButton;
