import request from "../request";

function getMessages() {
  return request({
    method: "GET",
    params: {
      token: process.env.REACT_APP_API_TOKEN,
    },
  });
}

const ChatService = {
  getMessages,
};

export default ChatService;
