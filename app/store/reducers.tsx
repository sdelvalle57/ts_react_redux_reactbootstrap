import { StoreState } from 'app/types/store';
import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';

import ReducerClock from '../reducers/reducer_clock';
import ReducerCounter from '../reducers/reducer_counter';
import * as actions from './actions';

export type RootAction = ActionType<typeof actions>;

export const createRootReducer = () => 
    combineReducers<StoreState>({
        clock: ReducerClock,
        counter: ReducerCounter
    }
);

