import styled from "styled-components";

const StyledInput = styled.input`
  flex: 1;
  min-width: 1px;
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
