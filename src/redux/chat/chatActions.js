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
