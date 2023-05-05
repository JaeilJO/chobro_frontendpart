import { Dispatch, SetStateAction, useCallback } from 'react';
import { StyledPageNation } from './PageNation.styled';
import PageNationButton from '../Buttons/PageNationButton/PageNationButton';

interface PageNationProps {
    setCurrentTable: Dispatch<SetStateAction<number>>;
    currentTalbe: number;
    dataTotalCount: number;
}

const PageNation = ({ setCurrentTable, currentTalbe, dataTotalCount }: PageNationProps) => {
    const nextPageHandler = useCallback(() => {
        setCurrentTable((preventState) => preventState + 1);
    }, [currentTalbe]);

    const prevPageHandler = useCallback(() => {
        setCurrentTable((preventState) => preventState - 1);
    }, [currentTalbe]);

    return (
        <StyledPageNation>
            <PageNationButton
                type={'prev'}
                onClick={prevPageHandler}
                currentTalbe={currentTalbe}
                dataTotalCount={dataTotalCount}
            />
            <div>
                {currentTalbe} of {dataTotalCount} pages
            </div>
            <PageNationButton
                type={'next'}
                onClick={nextPageHandler}
                currentTalbe={currentTalbe}
                dataTotalCount={dataTotalCount}
            />
        </StyledPageNation>
    );
};

export default PageNation;
