import {INCREMENT, DECREMENT, RESET} from '../actions/types';
import { Counter } from '../types/store';

const initialState: Counter = {
    count:0
}

export default function Counter_Reducer(state = initialState, action): Counter {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case RESET:
            return {
                ...state,
                count: initialState.count
            }
        default: return state;
    }
}
