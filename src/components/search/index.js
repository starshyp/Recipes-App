import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { StyledForm } from './index.styles';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [input, setInput] = useState('');
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/results/' + input);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div>
        <FaSearch />
        <input
          onChange={(e) => setInput(e.target.value)}
          type='text'
          value={input}
        />
      </div>
    </StyledForm>
  );
};

export default Search;
