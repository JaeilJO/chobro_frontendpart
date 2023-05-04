import { title } from 'process';

import { StyledTbody } from './Tbody.styled';
import TbodyItem from './bodyItem/BodyItem';
import { TbodyMocks } from './TbodyMocks';

const Thead = ({ mock }) => {
    return (
        <StyledTbody>
            <TbodyItem data={mock.url} type={'url'} />
            <TbodyItem data={mock.certificate} type={'certificate'} />
            <TbodyItem data={mock.expiration_date} type={'expiration_date'} />
            <TbodyItem data={mock.is_active} type={'is_active'} />
            <TbodyItem data={mock.expiration_date} sub_data={mock.created_at} type={'progress'} />
        </StyledTbody>
    );
};

export default Thead;
