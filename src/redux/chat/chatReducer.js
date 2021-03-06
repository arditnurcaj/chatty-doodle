import ChatActionTypes from "./chatActionTypes";

const initialState = {
  messages: [],
  isLoadingMessages: false,
  isLoadingRecentMessages: false,
  isAddingMessage: false,
  hasFetchedMessages: false,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case ChatActionTypes.FETCH_MESSAGES_START: {
      return { ...state, isLoadingMessages: true };
    }
    case ChatActionTypes.FETCH_MESSAGES_SUCCESS: {
      return {
        ...state,
        isLoadingMessages: false,
        messages: action.payload,
        hasFetchedMessages: true,
      };
    }
    case ChatActionTypes.FETCH_MESSAGES_FAILURE: {
      return { ...state, isLoadingMessages: false };
    }
    case ChatActionTypes.FETCH_RECENT_MESSAGES_START: {
      return { ...state, isLoadingRecentMessages: true };
    }
    case ChatActionTypes.FETCH_RECENT_MESSAGES_SUCCESS: {
      return {
        ...state,
        isLoadingRecentMessages: false,
        messages: [...state.messages, ...action.payload],
      };
    }
    case ChatActionTypes.FETCH_RECENT_MESSAGES_FAILURE: {
      return { ...state, isLoadingRecentMessages: false };
    }
    case ChatActionTypes.ADD_MESSAGE_START: {
      return { ...state, isAddingMessage: true };
    }
    case ChatActionTypes.ADD_MESSAGE_SUCCESS: {
      return { ...state, isAddingMessage: false };
    }
    case ChatActionTypes.ADD_MESSAGE_FAILURE: {
      return { ...state, isAddingMessage: false };
    }
    case ChatActionTypes.SET_HAS_FETCHED_MESSAGES: {
      return { ...state, hasFetchedMessages: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default chatReducer;
