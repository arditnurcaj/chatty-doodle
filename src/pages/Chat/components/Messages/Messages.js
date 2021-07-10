import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Message } from "../";

import { fetchMessages } from "redux/chat/chatActions";

import { StyledMessages, MessagesContainer } from "./Messages.styles";

const Messages = () => {
  const dispatch = useDispatch();
  const { messages } = useSelector((state) => state.chat);

  useEffect(() => {
    dispatch(fetchMessages());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledMessages>
      <MessagesContainer>
        {messages.map((message) => {
          // Assume sending author is Ardit */
          return (
            <Message
              key={message._id}
              isSentFromAuthor={message.author.toLowerCase() === "ardit"}
              {...message}
            />
          );
        })}
      </MessagesContainer>
    </StyledMessages>
  );
};

export default Messages;
