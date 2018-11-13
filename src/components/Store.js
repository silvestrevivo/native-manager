import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './../reducers'
import ReduxThunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  return createStore(reducers, {}, composeEnhancers(applyMiddleware(ReduxThunk)));
};

export default configureStore;
