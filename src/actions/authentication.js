import { LOGIN_USER } from "../constants";
import { createAction } from 'redux-actions';
import { apiPost } from "../api";
import { urlAuth } from "../api/urls";


export const authentication = createAction(LOGIN_USER,
    (user) => apiPost(urlAuth, user)() );

export const authUser = createAction(LOGIN_USER, (user) => user);

export const setCurrentUser = user => {
    return {
        type: LOGIN_USER,
        payload: {data : user, success:true}
    }
}