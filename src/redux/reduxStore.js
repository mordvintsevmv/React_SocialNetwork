import {combineReducers, legacy_createStore as createStore} from "redux";
import {messagePageReducer} from "./MessagePageReducer";
import {profilePageReducer} from "./ProfilePageReducer";

let reducers = combineReducers({
    messagePage: messagePageReducer,
    profilePage: profilePageReducer
});

export let store = createStore(reducers);

window.store = store;