import { StoreState } from 'app/types/store';
import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';

import ReducerClock from './clock/reducers';
import ReducerCounter from './counter/reducers';
import * as actions from './actions';

export type RootAction = ActionType<typeof actions>;

export const createRootReducer = () => 
    combineReducers<StoreState>({
        clock: ReducerClock,
        counter: ReducerCounter
    }
);

