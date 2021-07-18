import {
  MessageContainer,
  StyledMessage,
  MessageContent,
  MessageSentDate,
  MessageAuthor,
} from "./Message.styles";

import formatTimestamp from "utils/formatTimestamp";

const Message = ({ isSentFromAuthor, message, author, timestamp }) => {
  return (
    <MessageContainer isSentFromAuthor={isSentFromAuthor}>
      <StyledMessage isSentFromAuthor={isSentFromAuthor}>
        {!isSentFromAuthor && (
          <MessageAuthor data-testid='message-author'>
            {author || ""}
          </MessageAuthor>
        )}
        <MessageContent isSentFromAuthor={isSentFromAuthor}>
          {message || ""}
        </MessageContent>
        <MessageSentDate isSentFromAuthor={isSentFromAuthor}>
          {(timestamp && formatTimestamp(timestamp)) || ""}
        </MessageSentDate>
      </StyledMessage>
    </MessageContainer>
  );
};

export default Message;
