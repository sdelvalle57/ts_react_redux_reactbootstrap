import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import ThunkMiddleware from 'redux-thunk'
import ReduxPromise from 'redux-promise';
import rootReducer from '../reducers/index';
import { Counter, StoreState } from '../types/store';

/** If you want to add more than one middleware */
const middlewares = [ThunkMiddleware, ReduxPromise]

const counter: Counter = {
  count: 0
}

export function initializeStore (initialState: StoreState = {clock: null, counter}): any {
  return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)))
  //return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(ThunkMiddleware)))

}
