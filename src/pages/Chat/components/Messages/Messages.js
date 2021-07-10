import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Message } from "../";

import { fetchMessages } from "redux/chat/chatActions";

import { StyledMessages, MessagesContainer } from "./Messages.styles";

const Messages = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMessages());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
