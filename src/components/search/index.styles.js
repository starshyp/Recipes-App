import styled from 'styled-components';

export const StyledForm = styled.form`
  margin: 2rem 15rem;

  div {
    width: 100%;
    position: relative;
  }

  input {
    border: 2px solid #494949;
    border-radius: 2rem;
    color: #494949;
    font-size: 1.5rem;
    color: #000;
    padding: 1rem 3rem;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: #494949;
  }
`;
