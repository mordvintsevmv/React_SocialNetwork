import {addPost, profilePageReducer} from "./ProfilePageReducer";

it('New post should be added',()=>{
    const action = addPost("Hello everybody!")

    let initial_state = {
        postData: [
            {id: 1, name: "Maksim", text: "First post", likes: 5},
            {id: 2, name: "Anton", text: "Interesting", likes: 10},
            {id: 3, name: "Maksim", text: "Hi!", likes: 47},
            {id: 4, name: "Sasha", text: "Bye!", likes: 0}],

    }

    const newState = profilePageReducer(initial_state,action)

    expect (newState.postData.length).toBe(5)

})