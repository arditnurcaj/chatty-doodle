import request from "../request";

const getMessages = () => {
  return request({
    method: "GET",
    params: {
      token: process.env.REACT_APP_API_TOKEN,
    },
  });
};

const getRecentMessages = (params) => {
  return request({
    method: "GET",
    params: {
      token: process.env.REACT_APP_API_TOKEN,
      ...params,
    },
  });
};

const addMessage = (message) => {
  return request({
    method: "POST",
    data: {
      message,
      author: "Ardit",
    },
    headers: {
      token: process.env.REACT_APP_API_TOKEN,
    },
  });
};

const ChatService = {
  getMessages,
  getRecentMessages,
  addMessage,
};

export default ChatService;
