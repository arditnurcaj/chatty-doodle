import ChatActionTypes from "./chatActionTypes";

const initialState = {
  messages: [],
  error: null,
  isLoadingMessages: false,
  isAddingMessage: false,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case ChatActionTypes.FETCH_MESSAGES_START: {
      return { ...state, isLoadingMessages: true };
    }
    case ChatActionTypes.FETCH_MESSAGES_SUCCESS: {
      return { ...state, isLoadingMessages: false, messages: action.payload };
    }
    case ChatActionTypes.FETCH_MESSAGES_FAILURE: {
      return { ...state, isLoadingMessages: false, error: action.payload };
    }
    case ChatActionTypes.ADD_MESSAGE_START: {
      return { ...state, isAddingMessage: true };
    }
    case ChatActionTypes.ADD_MESSAGE_SUCCESS: {
      return { ...state, isAddingMessage: false };
    }
    case ChatActionTypes.ADD_MESSAGE_FAILURE: {
      return { ...state, isAddingMessage: false, error: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default chatReducer;
