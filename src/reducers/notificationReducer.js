import { handleActions } from 'redux-actions';
import { NOTIFICATIONS } from './../constants/index';
export const notifications = handleActions({
    [NOTIFICATIONS]: (state, action) => [...state , action.payload],
}, []);
