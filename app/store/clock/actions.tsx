import { ThunkCreator } from 'app/types/store';
import { createAction } from 'typesafe-actions';

export const renderClock = createAction('clock/RENDER_set', resolve => {
    return (isServer: boolean, ts: number) => resolve({light: !isServer, ts })
})


export const startClockInterval: ThunkCreator<any> = () => {
    return (dispatch) => {

        setInterval(() => {
            // Dispatch `TICK` every 1 second
            dispatch(renderClock(false, Date.now()))
        }, 1000)
    };
};