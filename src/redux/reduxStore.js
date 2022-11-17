import {messagePageReducer} from "./MessagePageReducer";
import {profilePageReducer} from "./ProfilePageReducer";
import {userPageReducer} from "./UserPageReducer";
import {authReducer} from "./authReducer";
import {appReducer} from "./appReducer";
import thunkMiddleware from 'redux-thunk'
import {applyMiddleware, combineReducers, configureStore} from "@reduxjs/toolkit";

let reducer = combineReducers({
    messagePage: messagePageReducer,
    profilePage: profilePageReducer,
    userPage: userPageReducer,
    auth: authReducer,
    app: appReducer
});

export let store = configureStore({reducer}, applyMiddleware(thunkMiddleware));
window.store = store;