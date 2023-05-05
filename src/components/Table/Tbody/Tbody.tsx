import { StyledTbody } from './Tbody.styled';
import TbodyItem from './bodyItem/BodyItem';

export interface DataType {
    data: {
        url: string;
        certificate: string;
        expiration_date: string;
        is_active: string;
        cert_id: string;
        created_at: string;
        updated_at: string;
    };
}

const Thead = ({ data }: DataType) => {
    return (
        <StyledTbody>
            <TbodyItem data={data?.url} type={'url'} />
            <TbodyItem data={data?.certificate} type={'certificate'} />
            <TbodyItem data={data?.expiration_date} type={'expiration_date'} />
            <TbodyItem data={data?.is_active} sub_data={data.cert_id} type={'is_active'} />
            <TbodyItem data={data?.expiration_date} sub_data={data.created_at} type={'progress'} />
        </StyledTbody>
    );
};

export default Thead;
