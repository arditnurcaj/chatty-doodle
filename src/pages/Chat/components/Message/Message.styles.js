import styled, { css } from "styled-components";

import mediaQueries from "constants/mediaQueries";
import BreakpointSizes from "constants/breakpointSizes";

export const MessageContainer = styled.div`
  display: flex;
  margin: 0.8rem 0;

  ${({ isSentFromAuthor }) =>
    isSentFromAuthor &&
    css`
      justify-content: flex-end;
    `}
`;

export const StyledMessage = styled.div`
  padding: 0.8rem;
  border: 0.1rem solid #d4dade;
  background-color: white;
  border-radius: 0.5rem;
  font-size: 2rem;
  max-width: 24rem;

  ${mediaQueries(BreakpointSizes.MD)`
      max-width: 42rem;
  `}

  ${({ isSentFromAuthor }) =>
    isSentFromAuthor &&
    css`
      background-color: #fcf6c5;
    `}
`;

export const MessageContent = styled.p`
  margin: 0.8rem 0.8rem 1.6rem 0.8rem;
`;

export const MessageSentDate = styled.span`
  color: #b9c1c7;
  display: block;

  ${({ isSentFromAuthor }) =>
    isSentFromAuthor &&
    css`
      text-align: end;
    `}
`;

export const MessageAuthor = styled.span`
  color: #b9c1c7;
  display: block;
  margin: 0.8rem;
`;
