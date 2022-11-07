const ADD_POST = "ADD-POST"
const EDIT_CURRENT_POST = "EDIT-CURRENT-POST"
const ADD_MESSAGE = "ADD-MESSAGE"
const EDIT_CURRENT_MESSAGE = "EDIT-CURRENT-MESSAGE"

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

        switch (action.type){
            case(ADD_POST): {
                this._state.profilePage.postData.push({
                    id: 5,
                    name: "Polina",
                    text: this._state.profilePage.currentPost.text,
                    likes: 0
                });

                this._state.profilePage.currentPost = {
                    text: "",
                };

                this._subscriber(store);
                break;
            }

            case(EDIT_CURRENT_POST):{
                this._state.profilePage.currentPost = {
                    text: action.currentText,
                };
                this._subscriber(store);
                break;
            }

            case(ADD_MESSAGE):{
                this._state.messagePage.messageData.push({
                    id: 3,
                    message: this._state.messagePage.currentMessage.text,
                });

                this._state.messagePage.currentMessage = {
                    text: "",
                }

                this._subscriber(store);
                break;
            }

            case(EDIT_CURRENT_MESSAGE):{
                this._state.messagePage.currentMessage = {
                    text: action.currentText,
                }
                this._subscriber(store);
                break;
            }

            default:{
                console.log("Unknown action!");
            }

        }

    },

}



export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const onPostChangeActionCreator = (currentText) => {
    return {
        type: EDIT_CURRENT_POST,
        currentText: currentText
    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const onMessageChangeActionCreator = (currentText) => {
    return {
        type: EDIT_CURRENT_MESSAGE,
        currentText: currentText
    }
}