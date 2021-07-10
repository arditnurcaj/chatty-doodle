import { Input } from "../";

import StyledChatForm from "./ChatForm.styles";

const ChatForm = () => {
  return (
    <StyledChatForm>
      <Input placeholder='Message' />
    </StyledChatForm>
  );
};

export default ChatForm;
