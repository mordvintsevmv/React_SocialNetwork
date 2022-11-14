import {combineReducers, legacy_createStore as createStore} from "redux";
import {messagePageReducer} from "./MessagePageReducer";
import {profilePageReducer} from "./ProfilePageReducer";
import {userPageReducer} from "./UserPageReducer";
import {authReducer} from "./authReducer";

let reducers = combineReducers({
    messagePage: messagePageReducer,
    profilePage: profilePageReducer,
    userPage: userPageReducer,
    auth: authReducer
});

export let store = createStore(reducers);

window.store = store;