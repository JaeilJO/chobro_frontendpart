import { StyledTable } from './Table.styled';
import Tbody from './Tbody/Tbody';
import { TbodyMocks } from './Tbody/TbodyMocks';
import Thead from './Thead/Thead';

const Table = () => {
    return (
        <StyledTable>
            <thead>
                <Thead />
            </thead>
            <tbody>
                {TbodyMocks.map((mock) => (
                    <Tbody mock={mock} />
                ))}
            </tbody>
        </StyledTable>
    );
};

export default Table;
