import { Clock } from '../../types/store';

const TICK = "TICK";

const initialState: Clock = {
    lastUpdate:0, 
    light: false
}

export default function Clock_Reducer(state = initialState, action): Clock {
    switch (action.type) {
        case TICK:  
            return {
                ...state,
                lastUpdate: action.ts,
                light: !!action.light
            }
        default: return state;
    }
}