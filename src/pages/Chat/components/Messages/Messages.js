import { Message } from "../";

import { StyledMessages, MessagesContainer } from "./Messages.styles";

const Messages = () => {
  return (
    <StyledMessages>
      <MessagesContainer>
        <Message isSentFromAuthor={true} />
        <Message isSentFromAuthor={false} />
        <Message isSentFromAuthor={false} />
        <Message isSentFromAuthor={false} />
        <Message isSentFromAuthor={true} />
      </MessagesContainer>
    </StyledMessages>
  );
};

export default Messages;
