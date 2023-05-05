import { useEffect, useState } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { useGetCertQuery } from '../../redux/services/userApi';
import { StyledTable } from './Table.styled';
import Tbody from './Tbody/Tbody';
import { TableMocks } from './TbodyMocks';
import Thead from './Thead/Thead';
import PageNation from '../PageNation/PageNation';

interface DataTypes {
    url: string;
    certificate: string;
    expiration_date: string;
    is_active: string;
    cert_id: string;
    created_at: string;
    updated_at: string;
}

const paginateData = (data: DataTypes[], NumberOfPageContent: number) => {
    let pages = [];

    for (let i = 0; i < data.length; i += NumberOfPageContent) {
        pages.push(data.slice(i, i + NumberOfPageContent));
    }

    return { pages };
};

const Table = () => {
    const [currentTalbe, setCurrentTable] = useState(1);
    const NumberOfPageContent = 10;

    // const accessToken = useAppSelector((state) => state.user.token);

    // const { data, isLoading } = useGetCertQuery(accessToken);

    // if (isLoading) {
    //     return <>{isLoading}</>;
    // }

    const { pages } = paginateData(TableMocks, NumberOfPageContent);

    return (
        <>
            <StyledTable>
                <thead>
                    <Thead />
                </thead>

                {pages.map((table, idx) => {
                    if (idx + 1 === currentTalbe) {
                        return (
                            <tbody>
                                {table.map((content) => (
                                    <Tbody data={content} />
                                ))}
                            </tbody>
                        );
                    } else {
                        return null;
                    }
                })}
            </StyledTable>
            <PageNation dataTotalCount={pages.length} currentTalbe={currentTalbe} setCurrentTable={setCurrentTable} />
        </>
    );
};

export default Table;
