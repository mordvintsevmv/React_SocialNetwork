import {rerenderAllTree} from "../render";

let state = {

    profilePage : {

        postData : [
            {id: 1, name:"Maksim", text: "First post", likes: 5},
            {id: 2, name:"Anton", text: "Interesting", likes: 10},
            {id: 3, name:"Maksim", text: "Hi!", likes: 47},
            {id: 4, name:"Sasha",text: "Bye!", likes: 0} ],

        currentPost : {
            text: "цйуцу",
}
    },

    messagePage : {

        messageData : [
            {id: 1, message: "Hi!"},
            {id: 2, message: "Good News!"},
            {id: 3, message: "GoodBye!"},
        ],

        dialogueData : [
            {id: 1, name: "Maksim"},
            {id: 2, name: "Andrey"},
            {id: 3, name: "Masha"},
            {id: 4, name: "Igor"},
            {id: 5, name: "Anton"},
            {id: 6, name: "Nick"},
            {id: 7, name: "Polina"}
        ],

        currentMessage : {
            text: "",
        }
    }
}

export let addPost = () => {
    let newPost = {
        id: 5,
        name: "Polina",
        text: state.profilePage.currentPost.text,
        likes: 0
    }

    state.profilePage.postData.push(newPost);

    state.profilePage.currentPost = {
        text: "",
    };

    rerenderAllTree(state);
}

export let addMessage = () => {
    let newMessage = {
        id: 3,
        message: state.messagePage.currentMessage.text,
    }

    state.messagePage.messageData.push(newMessage);

    state.messagePage.currentMessage = {
        text: "",
    }

    rerenderAllTree(state);
}

export let editCurrentPost = (currentText) => {
    state.profilePage.currentPost = {
        text: currentText,
    };
    rerenderAllTree(state);
}

export let editCurrentMessage = (currentText) => {
    state.messagePage.currentMessage = {
        text: currentText,
    }
    rerenderAllTree(state);
}

export default state;