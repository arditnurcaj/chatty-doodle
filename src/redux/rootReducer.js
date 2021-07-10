import { combineReducers } from "redux";

import chatReducer from "./chat/chatReducer";

const reducers = {
  chat: chatReducer,
};

export default combineReducers(reducers);
