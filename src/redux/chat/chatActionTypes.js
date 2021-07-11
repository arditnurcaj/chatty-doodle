const ChatActionTypes = Object.freeze({
  FETCH_MESSAGES_START: "FETCH_MESSAGES_START",
  FETCH_MESSAGES_SUCCESS: "FETCH_MESSAGES_SUCCESS",
  FETCH_MESSAGES_FAILURE: "FETCH_MESSAGES_FAILURE",
  FETCH_RECENT_MESSAGES_START: "FETCH_RECENT_MESSAGES_START",
  FETCH_RECENT_MESSAGES_SUCCESS: "FETCH_RECENT_MESSAGES_SUCCESS",
  FETCH_RECENT_MESSAGES_FAILURE: "FETCH_RECENT_MESSAGES_FAILURE",
  ADD_MESSAGE_START: "ADD_MESSAGE_START",
  ADD_MESSAGE_SUCCESS: "ADD_MESSAGE_SUCCESS",
  ADD_MESSAGE_FAILURE: "ADD_MESSAGE_FAILURE",
  SET_HAS_FETCHED_MESSAGES: "SET_HAS_FETCHED_MESSAGES",
});

export default ChatActionTypes;
