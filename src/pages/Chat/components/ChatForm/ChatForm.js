import { Input, SendButton } from "../";

import { StyledChatForm, ChatFormContainer } from "./ChatForm.styles";

const ChatForm = () => {
  return (
    <StyledChatForm>
      <ChatFormContainer>
        <Input placeholder='Message' />
        <SendButton>Send</SendButton>
      </ChatFormContainer>
    </StyledChatForm>
  );
};

export default ChatForm;
