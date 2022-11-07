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

let initial_state = {
    postData: [
        {id: 1, name: "Maksim", text: "First post", likes: 5},
        {id: 2, name: "Anton", text: "Interesting", likes: 10},
        {id: 3, name: "Maksim", text: "Hi!", likes: 47},
        {id: 4, name: "Sasha", text: "Bye!", likes: 0}],

    currentPost: {
        text: "",
    }
}

export const profilePageReducer = (state = initial_state, action) => {

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
            return state;
        }

    }

    return (state)
}