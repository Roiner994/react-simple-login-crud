import { handleActions } from 'redux-actions';
import { LOGIN_USER } from './../constants/index';
import isEmpty from './../auth/isEmpty';

const initialState = {
    isAuthenticated: false,
    user: {}
}


export const authentication = handleActions({
    [LOGIN_USER]: (state = initialState, action) => {
        if(!isEmpty(action.payload.data) && action.payload.success===true){
            const { auth_token } = action.payload.data;
            localStorage.setItem('jwtToken', auth_token);
            localStorage.setItem('auth', JSON.stringify(action.payload.data));
        }else{
            action.payload = {};
            localStorage.removeItem('jwtToken');
            localStorage.removeItem('auth');
        }
        return {
            ...state,
            isAuthenticated: !isEmpty(action.payload),
            user: action.payload
        };
    },
}, []);
