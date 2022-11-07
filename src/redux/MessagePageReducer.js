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

export const messagePageReducer = (state, action) => {

    switch (action.type){

        case(ADD_MESSAGE):{
            state.messageData.push({
                id: 3,
                message: state.currentMessage.text,
            });

            state.currentMessage = {
                text: "",
            }

            break;
        }

        case(EDIT_CURRENT_MESSAGE):{
            state.currentMessage = {
                text: action.currentText,
            }
            break;
        }

        default:{
            break;
        }

    }

    return (state)
}