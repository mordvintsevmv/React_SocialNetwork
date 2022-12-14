import {profilePageReducer} from "./ProfilePageReducer";
import {messagePageReducer} from "./MessagePageReducer";

export let store = {

    _state: {

        profilePage: {

            postData: [
                {id: 1, name: "Maksim", text: "First post", likes: 5},
                {id: 2, name: "Anton", text: "Interesting", likes: 10},
                {id: 3, name: "Maksim", text: "Hi!", likes: 47},
                {id: 4, name: "Sasha", text: "Bye!", likes: 0}],

            currentPost: {
                text: "",
            }
        },

        messagePage: {

            messageData: [
                {id: 1, message: "Hi!"},
                {id: 2, message: "Good News!"},
                {id: 3, message: "GoodBye!"},
            ],

            dialogueData: [
                {id: 1, name: "Maksim"},
                {id: 2, name: "Andrey"},
                {id: 3, name: "Masha"},
                {id: 4, name: "Igor"},
                {id: 5, name: "Anton"},
                {id: 6, name: "Nick"},
                {id: 7, name: "Polina"}
            ],

            currentMessage: {
                text: "",
            }
        }
    },

    _subscriber() {
        console.log("No subscriber!");
    },

    subscribe(observer) {
        this._subscriber = observer;
    },

    getState() {
        return this._state;
    },

    dispatch(action) {

        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.messagePage = messagePageReducer(this._state.messagePage, action);

        this._subscriber(this._state);

    },

}

