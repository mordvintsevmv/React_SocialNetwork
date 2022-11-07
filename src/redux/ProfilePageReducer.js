const ADD_POST = "ADD-POST"
const EDIT_CURRENT_POST = "EDIT-CURRENT-POST"

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

export const profilePageReducer = (state, action) => {

    switch (action.type){
        case(ADD_POST): {
            state.postData.push({
                id: 5,
                name: "Polina",
                text: state.currentPost.text,
                likes: 0
            });

            state.currentPost = {
                text: "",
            };

            break;
        }

        case(EDIT_CURRENT_POST):{
            state.currentPost = {
                text: action.currentText,
            };
            break;
        }

        default:{
            console.log("Unknown action!");
            break;
        }

    }

    return (state)
}