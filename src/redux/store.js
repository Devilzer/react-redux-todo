import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";


import rootReducer from "./rootReducer";
import logger from "redux-logger";
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)));
const persistor = persistStore(store);

export {store, persistor};