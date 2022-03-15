import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import { List, StyledLink } from './index.styles';

const Category = () => {
  return (
    <List>
      <StyledLink to={'/cuisine/italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </StyledLink>
      <StyledLink to={'/cuisine/american'}>
        <FaHamburger />
        <h4>American</h4>
      </StyledLink>
      <StyledLink to={'/cuisine/thai'}>
        <GiNoodles />
        <h4>Thai</h4>
      </StyledLink>
      <StyledLink to={'/cuisine/japanese'}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </StyledLink>
    </List>
  );
};

export default Category;
