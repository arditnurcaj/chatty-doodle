import {
  MessageContainer,
  StyledMessage,
  MessageContent,
  MessageSentDate,
  MessageAuthor,
} from "./Message.styles";

const Message = ({ isSentFromAuthor }) => {
  return (
    <MessageContainer isSentFromAuthor={isSentFromAuthor}>
      <StyledMessage isSentFromAuthor={isSentFromAuthor}>
        {!isSentFromAuthor && <MessageAuthor>Ardit</MessageAuthor>}
        <MessageContent isSentFromAuthor={isSentFromAuthor}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          incidunt facilis pariatur cum expedita praesentium nisi corrupti modi.
          Illo dicta mollitia deleniti delectus ab quos repellat, soluta vero.
          Repellat, sunt.
        </MessageContent>
        <MessageSentDate isSentFromAuthor={isSentFromAuthor}>
          10 Mar 2021
        </MessageSentDate>
      </StyledMessage>
    </MessageContainer>
  );
};

export default Message;
