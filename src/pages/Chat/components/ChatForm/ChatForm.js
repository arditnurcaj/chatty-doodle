import { Input, SendButton } from "../";

import StyledChatForm from "./ChatForm.styles";

const ChatForm = () => {
  return (
    <StyledChatForm>
      <Input placeholder='Message' />
      <SendButton>Send</SendButton>
    </StyledChatForm>
  );
};

export default ChatForm;
