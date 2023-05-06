import TheadItem from './HeadItem/HeadItem';
import { StyledThead } from './Thead.styled';
import { TheadItems } from './TheadItems';

const Thead = () => {
    return (
        <StyledThead>
            {TheadItems.map((item) => (
                <TheadItem key={item.title} title={item.title} option={item.option}></TheadItem>
            ))}
        </StyledThead>
    );
};

export default Thead;
