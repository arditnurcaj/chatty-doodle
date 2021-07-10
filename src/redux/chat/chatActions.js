import ChatActionTypes from "./chatActionTypes";

import ChatService from "services/api/chat";

export const fetchMessagesStart = () => ({
  type: ChatActionTypes.FETCH_MESSAGES_START,
});

export const fetchMessagesSuccess = (messages) => ({
  type: ChatActionTypes.FETCH_MESSAGES_SUCCESS,
  payload: messages,
});

export const fetchMessagesFailure = (error) => ({
  type: ChatActionTypes.FETCH_MESSAGES_FAILURE,
  payload: error,
});

export const addMessageStart = () => ({
  type: ChatActionTypes.ADD_MESSAGE_START,
});

export const addMessageSuccess = () => ({
  type: ChatActionTypes.ADD_MESSAGE_SUCCESS,
});

export const addMessageFailure = (error) => ({
  type: ChatActionTypes.FETCH_MESSAGES_FAILURE,
  payload: error,
});

export const fetchMessages = () => {
  return async (dispatch) => {
    dispatch(fetchMessagesStart());

    try {
      const response = await ChatService.getMessages();
      dispatch(fetchMessagesSuccess(response.data || []));
    } catch (error) {
      dispatch(fetchMessagesFailure("There was an error fetching messages!"));
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
      dispatch(addMessageFailure("There was an error adding message!"));
    }
  };
};
