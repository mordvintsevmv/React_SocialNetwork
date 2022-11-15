import {messagePageReducer} from "./MessagePageReducer";
import {profilePageReducer} from "./ProfilePageReducer";
import {userPageReducer} from "./UserPageReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware from 'redux-thunk'
import {applyMiddleware, combineReducers, configureStore} from "@reduxjs/toolkit";

let reducer = combineReducers({
    messagePage: messagePageReducer, profilePage: profilePageReducer, userPage: userPageReducer, auth: authReducer
});

export let store = configureStore({reducer}, applyMiddleware(thunkMiddleware));
window.store = store;