import ChatActionTypes from "./chatActionTypes";

const initialState = {
  messages: [],
  isLoadingMessages: false,
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
    default: {
      return state;
    }
  }
};

export default chatReducer;
