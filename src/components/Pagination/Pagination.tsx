import { Dispatch, SetStateAction, useCallback } from 'react';
import { StyledPagination } from './Pagination.styled';
import PaginationButton from '../Buttons/PaginationButton/PageNationButton';

interface PaginationProps {
    setCurrentTable: Dispatch<SetStateAction<number>>;
    currentTalbe: number;
    dataTotalCount: number;
}

const Pagination = ({ setCurrentTable, currentTalbe, dataTotalCount }: PaginationProps) => {
    const nextPageHandler = useCallback(() => {
        setCurrentTable((preventState) => preventState + 1);
    }, [currentTalbe]);

    const prevPageHandler = useCallback(() => {
        setCurrentTable((preventState) => preventState - 1);
    }, [currentTalbe]);

    //데이터가 하나도 없는 경우
    if (dataTotalCount === 0) {
        dataTotalCount = 1;
    }

    return (
        <StyledPagination>
            <PaginationButton
                type={'prev'}
                onClick={prevPageHandler}
                currentTalbe={currentTalbe}
                dataTotalCount={dataTotalCount}
            />
            <div>
                {currentTalbe} of {dataTotalCount} pages
            </div>
            <PaginationButton
                type={'next'}
                onClick={nextPageHandler}
                currentTalbe={currentTalbe}
                dataTotalCount={dataTotalCount}
            />
        </StyledPagination>
    );
};

export default Pagination;
