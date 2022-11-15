/*

    INITIAL STATE

 */
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


/*

    ACTION TYPES

 */
const ADD_MESSAGE = "ADD-MESSAGE"
const EDIT_CURRENT_MESSAGE = "EDIT-CURRENT-MESSAGE"


/*

    ACTION CREATORS

 */
export const addMessage = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const changeMessage = (currentText) => {
    return {
        type: EDIT_CURRENT_MESSAGE,
        currentText: currentText
    }
}


/*

    THUNK

 */



/*

    REDUCER

 */
export const messagePageReducer = (state = initial_state, action) => {


    switch (action.type) {

        case(ADD_MESSAGE): {

            return {

                ...state,

                messageData: [...state.messageData,

                    {
                        id: state.messageData.at(-1).id + 1,
                        message: state.currentMessage.text,
                    }

                ],

                currentMessage:
                    {
                        text: ""
                    }
            };
        }

        case(EDIT_CURRENT_MESSAGE): {

            return {
                ...state,
                currentMessage: {
                    text: action.currentText
                }
            };
        }

        default: {
            return state;
        }

    }
}