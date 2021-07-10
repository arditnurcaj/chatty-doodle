import styled from "styled-components";

const StyledInput = styled.input`
  flex-grow: 1;
  border-radius: 0.5rem;
  border: none;
  caret-color: #2e77a4;
  padding: 0.8rem;
  font-size: 2rem;

  &::placeholder {
    color: #b6bfc6;
  }
`;

export default StyledInput;
