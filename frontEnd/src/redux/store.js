import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';

import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory } from 'react-router';

import rootReducer from './reducers/index';

const loggerMiddleware = createLogger();

const InitialState = {
  requestMovies: {
    isFetching: false,
    error: null
  },
  receiveMovies: {
    SingleMovie: {},
    movies: [],
  },
  authentication: {
    isPostingToServer: false,
    register: false,
    isLoggedIn: false,
    error: null,
  }
};

// Note: thunk middleware helps to deal with asynchonizity problem (for fetching)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, InitialState, composeEnhancers(
    applyMiddleware(thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware,
    )));

export const history = syncHistoryWithStore(hashHistory, store);

export default store;
