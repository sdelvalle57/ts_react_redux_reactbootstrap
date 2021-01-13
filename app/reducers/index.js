import { combineReducers } from 'redux';
import ReducerClock from './reducer_clock';
import ReducerCounter from './reducer_counter';

const rootReducer = combineReducers({
    clock: ReducerClock,
    counter: ReducerCounter
})

export default rootReducer;
