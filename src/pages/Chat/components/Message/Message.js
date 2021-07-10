import {
  MessageContainer,
  StyledMessage,
  MessageContent,
  MessageSentDate,
  MessageAuthor,
} from "./Message.styles";

const Message = ({ isSentFromAuthor, message, author, timestamp }) => {
  return (
    <MessageContainer isSentFromAuthor={isSentFromAuthor}>
      <StyledMessage isSentFromAuthor={isSentFromAuthor}>
        {!isSentFromAuthor && <MessageAuthor>{author || ""}</MessageAuthor>}
        <MessageContent isSentFromAuthor={isSentFromAuthor}>
          {message || ""}
        </MessageContent>
        <MessageSentDate isSentFromAuthor={isSentFromAuthor}>
          {timestamp || ""}
        </MessageSentDate>
      </StyledMessage>
    </MessageContainer>
  );
};

export default Message;
