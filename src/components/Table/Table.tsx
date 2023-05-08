import { useState } from 'react';
import { TableSubmitButton } from '../Buttons/TableSubmitButton/TableSubmitButton.styled';
import { TableTextInput } from '../Inputs/TableInput/TableInput.styled';
import { TableHeadRow } from './Table.styled';
import TableBodyItem from './TableBodyItem/TableBodyItem';
import { StyledTableBodyItem } from './TableBodyItem/TableBodyItem.styled';
import TableBodyRow from './TableBodyRow/TableBodyRow';
import TableHeadItem from './TableHeadItem/TableHeadItem';
import { useAppSelector } from '../../redux/hooks';
import { useGetCertQuery } from '../../redux/services/userApi';
import TableBodyFormRow from './TableBodyFormRow/TableBodyFormRow';
import { TableMocks } from './TableMock/TableMock';

const paginateData = (data, NumberOfPageContent: number) => {
    let pages = [];

    for (let i = 0; i < data?.length; i += NumberOfPageContent) {
        pages.push(data.slice(i, i + NumberOfPageContent));
    }

    return { pages };
};

export const Table = () => {
    const [currentTalbe, setCurrentTable] = useState(1);
    const NumberOfPageContent = 10;

    //Page정보 가져올 수 있게 AccessToken 가져오기
    const accessToken: string = useAppSelector((state) => state.user.token);

    // const { data } = useGetCertQuery({ accessToken }, { skip: !accessToken });

    const { pages } = paginateData(TableMocks, NumberOfPageContent);

    return (
        <table style={{ borderSpacing: 0 }}>
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
                    if (idx + 1 === currentTalbe) {
                        return (
                            <>
                                {page.map((content) => (
                                    <TableBodyRow
                                        key={content.cert_id}
                                        url={content.url}
                                        certificate={content.certificate}
                                        expiration_date={content.expiration_date}
                                        is_active={content.is_active}
                                        created_at={content.created_at}
                                    />
                                ))}
                            </>
                        );
                    } else {
                        return null;
                    }
                })}
            </tbody>
        </table>
    );
};
