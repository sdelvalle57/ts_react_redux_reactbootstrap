import { createStore, applyMiddleware, AnyAction } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk, { ThunkMiddleware } from 'redux-thunk';
import ReduxPromise from 'redux-promise';

import rootReducer from '../reducers/index';
import { Counter, StoreState } from '../types/store';

/** If you want to add more than one middleware */

const counter: Counter = {
  count: 0
}

const extraArgument = {
  
};
export type ExtraArgument = typeof extraArgument;

const thunkMiddleware = thunk.withExtraArgument(extraArgument) as ThunkMiddleware<StoreState, AnyAction>;

const middlewares = [thunkMiddleware, ReduxPromise]

export function initializeStore (initialState: StoreState = {clock: null, counter}): any {
  return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)))
  //return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(ThunkMiddleware)))

}
