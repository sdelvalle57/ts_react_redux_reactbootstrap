import { getType } from 'typesafe-actions';

import { Clock } from '../../types/store';

import * as actions from '../actions';
import { RootAction } from '../reducers';

const TICK = "TICK";

const initialState: Clock = {
    lastUpdate:0, 
    light: false
}

export default function clockReducer(state: Clock = initialState, action: RootAction): Clock {
    switch (action.type) {
        case getType(actions.renderClock): 
            return {...state, lastUpdate: action.payload.ts, light: action.payload.light}
     
        default: return state;
    }
}