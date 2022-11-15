import {messagePageReducer} from "./MessagePageReducer";
import {profilePageReducer} from "./ProfilePageReducer";
import {userPageReducer} from "./UserPageReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware from 'redux-thunk'
import { configureStore, combineReducers, applyMiddleware } from "@reduxjs/toolkit";
//import {legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux";

let reducer = combineReducers({
    messagePage: messagePageReducer,
    profilePage: profilePageReducer,
    userPage: userPageReducer,
    auth: authReducer
});

export let store = configureStore({reducer}, applyMiddleware(thunkMiddleware));
//export let store = createStore(reducer, applyMiddleware(thunkMiddleware))
window.store = store;