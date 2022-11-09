const ADD_MESSAGE = "ADD-MESSAGE"
const EDIT_CURRENT_MESSAGE = "EDIT-CURRENT-MESSAGE"

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

let initial_state = {
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

export const messagePageReducer = (state = initial_state, action) => {

    switch (action.type){

        case(ADD_MESSAGE):{

            let stateCopy = {...state}
            stateCopy.messageData = [...state.messageData]

            stateCopy.messageData.push({
                id: state.messageData.at(-1).id+1,
                message: state.currentMessage.text,
            });

            stateCopy.currentMessage = {
                text: "",
            }

            return stateCopy;
        }

        case(EDIT_CURRENT_MESSAGE):{

            let stateCopy = {...state};
            stateCopy.messageData = [...state.messageData];


            stateCopy.currentMessage = {
                text: action.currentText,
            }
            return stateCopy;
        }

        default:{
            return state;
        }

    }
}