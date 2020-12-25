import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducers/todoReducer";
import logger from "redux-logger";
const store = createStore(reducer,composeWithDevTools(applyMiddleware(logger)));
export default store;