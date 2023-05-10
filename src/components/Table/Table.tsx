import { useState } from 'react';

import { TableHeadRow, TableMain } from './Table.styled';

import TableBodyRow from './TableBodyRow/TableBodyRow';
import TableHeadItem from './TableHeadItem/TableHeadItem';

import TableBodyFormRow from './TableBodyFormRow/TableBodyFormRow';
import { TableMocks } from './TableMock/TableMock';
import Pagination from './Pagination/Pagination';
import { generateUniqueId, makePages } from '../../utils/utils';
import { TableData } from './Table.types';
import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { useGetCertQuery } from '../../redux/services/userApi';

export const Table = () => {
    const [currentTable, setCurrentTable] = useState(1);
    const NumberOfPageContent = 10;

    //Page정보 가져올 수 있게 AccessToken 가져오기
    const accessToken: string = useAppSelector((state) => state.user.token);

    const { data } = useGetCertQuery(accessToken, { skip: !accessToken });

    const { pages } = makePages(data, NumberOfPageContent);

    return (
        <>
            <TableMain>
                {/* Table Head */}
                <thead>
                    <TableHeadRow>
                        <TableHeadItem width={300} text="URL" />
                        <TableHeadItem width={300} text="Certificate" />
                        <TableHeadItem width={150} text="Expiration Date" />
                        <TableHeadItem width={150} textAlign="center" text="Active" />
                        <TableHeadItem />
                    </TableHeadRow>
                </thead>
                {/* Table Body */}
                <tbody>
                    <TableBodyFormRow />

                    {pages.map((page, idx) => {
                        //현재 페이지가 아니면 보여지지 않는 조건
                        if (idx + 1 === currentTable) {
                            return (
                                <React.Fragment key={generateUniqueId()}>
                                    {page.map((content: TableData) => (
                                        <TableBodyRow
                                            key={content.cert_id}
                                            url={content.url}
                                            certificate={content.certificate}
                                            expiration_date={content.expiration_date}
                                            is_active={content.is_active}
                                            created_at={content.created_at}
                                            cert_id={content.cert_id}
                                        />
                                    ))}
                                </React.Fragment>
                            );
                        } else {
                            return null;
                        }
                    })}
                </tbody>
            </TableMain>
            <Pagination currentTable={currentTable} setCurrentTable={setCurrentTable} pageCount={pages.length} />
        </>
    );
};
