import { useState } from 'react';
import { useAppSelector } from '../../redux/hooks';

import { StyledTable } from './Table.styled';
import Tbody from './Tbody/Tbody';

import Thead from './Thead/Thead';

import TableActiveModal from '../Modals/TableActiveModal/TableActiveModal';
import { DataTypes } from './Table.types';
import Pagination from '../Pagination/Pagination';
import { useGetCertQuery } from '../../redux/services/userApi';

const paginateData = (data: DataTypes[], NumberOfPageContent: number) => {
    let pages = [];

    for (let i = 0; i < data?.length; i += NumberOfPageContent) {
        pages.push(data.slice(i, i + NumberOfPageContent));
    }

    return { pages };
};

const Table = () => {
    //Modal Toggle
    const tableActiveModal = useAppSelector((state) => state.modalStatus.tableActiveModal);
    const [currentTalbe, setCurrentTable] = useState(1);

    //한페이지당 볼 수 있는 최대 contents
    const NumberOfPageContent = 10;

    //Page정보 가져올 수 있게 AccessToken 가져오기
    const accessToken: string = useAppSelector((state) => state.user.token);
    

    const { data } = useGetCertQuery({ accessToken }, { skip: !accessToken });
    

    const { pages } = paginateData(data, NumberOfPageContent);

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
                                    <Tbody data={content} key={content.cert_id} />
                                ))}
                            </tbody>
                        );
                    } else {
                        return null;
                    }
                })}
            </StyledTable>
            <Pagination dataTotalCount={pages.length} currentTalbe={currentTalbe} setCurrentTable={setCurrentTable} />
            {tableActiveModal.toggle_status ? <TableActiveModal /> : <></>}
        </>
    );
};

export default Table;
