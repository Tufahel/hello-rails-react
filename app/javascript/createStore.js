import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const REQUEST_GREETING = 'REQUEST_GREETING';
const LOAD_GREETING = 'LOAD_GREETING';
const GREETING_FAILED = 'GREETING_FAILED';

export const GreetingsReducer = (state = { greeting: '', error: '', pending: false }, action = {}) => {
  switch (action.type) {
    case REQUEST_GREETING:
      return { ...state, pending: true };
    case LOAD_GREETING:
      return { ...state, greeting: action.payload, pending: false };
    case GREETING_FAILED:
      return { ...state, pending: false, error: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ GreetingsReducer });
const store = configureStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;