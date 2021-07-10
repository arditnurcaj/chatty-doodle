import styled from "styled-components";

import chatBg from "assets/chat-bg.png";

const ChatLayout = styled.div`
  height: 100%;
  background-image: url(${chatBg});
  display: flex;
  flex-direction: column;
`;

export default ChatLayout;
