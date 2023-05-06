import { useAppSelector } from '../../../redux/hooks';
import Table from '../../Table/Table';
import { MainTitle, StyledMain } from './Main.styled';

const Main = () => {
    const a = useAppSelector((state) => state.user.isLoggedIn);
    return (
        <StyledMain>
            <MainTitle>Active access Certification</MainTitle>
            {a ? <Table /> : null}
        </StyledMain>
    );
};

export default Main;
