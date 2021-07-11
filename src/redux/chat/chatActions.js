import toast from "react-hot-toast";

import ChatActionTypes from "./chatActionTypes";

import ChatService from "services/api/chat";

export const fetchMessagesStart = () => ({
  type: ChatActionTypes.FETCH_MESSAGES_START,
});

export const fetchMessagesSuccess = (messages) => ({
  type: ChatActionTypes.FETCH_MESSAGES_SUCCESS,
  payload: messages,
});

export const fetchMessagesFailure = () => ({
  type: ChatActionTypes.FETCH_MESSAGES_FAILURE,
});

export const addMessageStart = () => ({
  type: ChatActionTypes.ADD_MESSAGE_START,
});

export const addMessageSuccess = () => ({
  type: ChatActionTypes.ADD_MESSAGE_SUCCESS,
});

export const addMessageFailure = () => ({
  type: ChatActionTypes.FETCH_MESSAGES_FAILURE,
});

export const fetchMessages = () => {
  return async (dispatch) => {
    dispatch(fetchMessagesStart());

    try {
      const response = await ChatService.getMessages();
      dispatch(fetchMessagesSuccess(response.data || []));
    } catch (error) {
      dispatch(fetchMessagesFailure());
      toast.error("There was an error fetching messages!");
    }
  };
};

export const addMessage = (message) => {
  return async (dispatch) => {
    dispatch(addMessageStart());

    try {
      await ChatService.addMessage(message);
      dispatch(addMessageSuccess());
      dispatch(fetchMessages());
    } catch (error) {
      dispatch(addMessageFailure());
      toast.error("There was an error adding message!");
    }
  };
};
