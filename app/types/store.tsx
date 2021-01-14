import { ActionCreator, AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { ExtraArgument } from '../store/index';

export type ThunkCreator<R = Promise<any>> = ActionCreator<ThunkAction<R, StoreState, ExtraArgument, AnyAction>>;


export interface StoreState {
    readonly clock: Clock | null;
    readonly counter: Counter
}

export interface Clock {
    lastUpdate: number,
    light: boolean
}

export interface Counter {
    count: number
}