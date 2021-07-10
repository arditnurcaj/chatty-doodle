import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
import logger from "redux-logger";

import rootReducer from "./rootReducer";

const initialState = {};

const middleware = [thunk];

export const store = createStore(
  rootReducer,
  initialState,
  process.env.NODE_ENV === "development"
    ? compose(applyMiddleware(...middleware, logger))
    : compose(applyMiddleware(...middleware))
);

export default store;
