import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducer from "../reducers/authReducer";

const configureStore = () => {
  const store = createStore(
    authReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );

  return store;
};

export default configureStore;
