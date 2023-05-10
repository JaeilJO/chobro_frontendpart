import { Dispatch, SetStateAction, useCallback } from 'react';
import { StyledPagination } from './Pagination.styled';
import PaginationButton from '../PaginationButton/PageNationButton';

interface PaginationProps {
    setCurrentTable: Dispatch<SetStateAction<number>>;
    currentTable: number;
    pageCount: number;
}

const Pagination = ({ setCurrentTable, currentTable, pageCount }: PaginationProps) => {
    const nextPageHandler = useCallback(() => {
        setCurrentTable((preventState) => preventState + 1);
    }, [currentTable]);

    const prevPageHandler = useCallback(() => {
        setCurrentTable((preventState) => preventState - 1);
    }, [currentTable]);

    //데이터가 하나도 없는 경우
    if (pageCount === 0) {
        pageCount = 1;
    }

    return (
        <StyledPagination>
            <PaginationButton
                type={'prev'}
                onClick={prevPageHandler}
                currentTable={currentTable}
                pageCount={pageCount}
            />
            <div>
                {currentTable} of {pageCount} pages
            </div>
            <PaginationButton
                type={'next'}
                onClick={nextPageHandler}
                currentTable={currentTable}
                pageCount={pageCount}
            />
        </StyledPagination>
    );
};

export default Pagination;
