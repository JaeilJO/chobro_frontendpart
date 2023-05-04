import { useEffect } from 'react';
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
    is_active: 'true' | 'false';
    cert_id: string;
    created_at: string;
    updated_at: string;
}

const Table = () => {
    // const accessToken = useAppSelector((state) => state.user.token);

    // console.log('accessToken', accessToken);

    // const { data } = useGetCertQuery(accessToken);

    return (
        <>
            <StyledTable>
                <thead>
                    <Thead />
                </thead>
                <tbody>
                    {TableMocks?.map((mock) => (
                        <Tbody data={mock} />
                    ))}
                </tbody>
            </StyledTable>
            <PageNation />
        </>
    );
};

export default Table;
