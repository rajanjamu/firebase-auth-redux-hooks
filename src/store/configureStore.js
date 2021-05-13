import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';
import notesReducer from '../reducers/notesReducer';

const configureStore = () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      notes: notesReducer,
    }),
    composeWithDevTools(applyMiddleware(thunk))
  );

  return store;
};

export default configureStore;
