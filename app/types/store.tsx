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