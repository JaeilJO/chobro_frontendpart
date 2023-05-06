import { StyledTbody } from './Tbody.styled';
import { DataType } from './Tbody.types';
import TbodyItem from './BodyItem/BodyItem';

const Thead = ({ data }: DataType) => {
    return (
        <StyledTbody>
            <TbodyItem url={data.url} type={'url'} />
            <TbodyItem certificate={data.certificate} type={'certificate'} />
            <TbodyItem expiration_date={data.expiration_date} type={'expiration_date'} />
            <TbodyItem is_active={data.is_active} cert_id={data.cert_id} url={data.url} type={'is_active'} />
            <TbodyItem expiration_date={data.expiration_date} created_at={data.created_at} type={'progress'} />
        </StyledTbody>
    );
};

export default Thead;
