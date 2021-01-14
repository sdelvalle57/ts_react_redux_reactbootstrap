import { StoreState } from 'app/types/store';
import { createSelector } from 'reselect';

export const getCounter = (state: StoreState) => state.counter.count;
