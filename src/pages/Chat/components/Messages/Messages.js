import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Message, ScrollToBottom } from "../";

import {
  fetchMessages,
  fetchRecentMessages,
  setHasFetchedMessages,
} from "redux/chat/chatActions";

import useInterval from "hooks/useInterval";

import { StyledMessages, MessagesContainer } from "./Messages.styles";

const Messages = () => {
  const dispatch = useDispatch();
  const { messages, hasFetchedMessages } = useSelector((state) => state.chat);

  useEffect(() => {
    dispatch(fetchMessages());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (hasFetchedMessages) {
      dispatch(setHasFetchedMessages(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasFetchedMessages]);

  useInterval(() => {
    if (messages.length > 0) {
      const lastMessageTimestamp = messages[messages.length - 1].timestamp;
      dispatch(fetchRecentMessages({ since: lastMessageTimestamp, limit: 10 }));
    }
  }, 3000);

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
        <ScrollToBottom changes={hasFetchedMessages} />
      </MessagesContainer>
    </StyledMessages>
  );
};

export default Messages;
