import { combineReducers } from 'redux';
import {users} from './users';
import {authentication} from './authentication';
import {reducer as reduxForm } from "redux-form";
// import {errorReducer} from './errorReducer';

export default combineReducers ({
    users,
    form: reduxForm,
    authentication,
    // errors: errorReducer
});