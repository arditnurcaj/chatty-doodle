import ChatLayout from "./Chat.styles";
import { Messages, ChatForm } from "./components";

const Chat = () => {
  return (
    <ChatLayout>
      <Messages />
      <ChatForm />
    </ChatLayout>
  );
};

export default Chat;
