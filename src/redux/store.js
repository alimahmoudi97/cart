import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(rootReducer, composeEnhancer);

export default store;
