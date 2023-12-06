import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducer/reducer";
import thunk from "redux-thunk";

const composerEnhancer = window._REDUX_DEVTOOLS_EXTENSION || compose;

export const store = createStore(
  rootReducer,
  composerEnhancer(applyMiddleware(thunk))
);
