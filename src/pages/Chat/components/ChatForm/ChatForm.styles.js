import styled from "styled-components";

import mediaQueries from "constants/mediaQueries";
import BreakpointSizes from "constants/breakpointSizes";

const StyledChatForm = styled.div`
  height: 8rem;
  background: #3798d4;

  ${mediaQueries(BreakpointSizes.MD)`
    height: 13rem;
  `}
`;

export default StyledChatForm;
