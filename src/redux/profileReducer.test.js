import {addPost, profilePageReducer, deletePost} from "./ProfilePageReducer";

let initial_state = {
    postData: [{id: 1, name: "Maksim", text: "First post", likes: 5}, {
        id: 2, name: "Anton", text: "Interesting", likes: 10
    }, {id: 3, name: "Maksim", text: "Hi!", likes: 47}, {id: 4, name: "Sasha", text: "Bye!", likes: 0}],

    currentPost: {
        text: "",
    },

    profile: {
        aboutMe: null,
        userId: null,
        lookingForAJob: null,
        lookingForAJobDescription: null,
        status: null,
        fullName: null,
        contacts: {
            github: null,
            vk: null,
            facebook: null,
            instagram: null,
            twitter: null,
            website: null,
            youtube: null,
            mainLink: null
        },
        photos: {
            small: null, large: null
        }
    }
}

it('New post should be added | length', () => {
    const action = addPost("Hello everybody!")

    const newState = profilePageReducer(initial_state, action)

    expect(newState.postData.length).toBe(5)
})

it('New post should be added | id', () => {
    const action = addPost("Hello everybody!")

    const newState = profilePageReducer(initial_state, action)

    expect(newState.postData[4].id).toBe(5)
})

it('New post should be added | text', () => {
    const action = addPost("Hello everybody!")

    const newState = profilePageReducer(initial_state, action)

    expect(newState.postData[4].text).toBe("Hello everybody!")
})

it('New post should be added | likes', () => {
    const action = addPost("Hello everybody!")

    const newState = profilePageReducer(initial_state, action)

    expect(newState.postData[4].likes).toBe(0)
})

it('Post should be deleted | length', () => {
    const action = deletePost(1)

    const newState = profilePageReducer(initial_state, action)

    expect(newState.postData.length).toBe(3)
})

it(`Post shouldn't be deleted with wrong id | length`, () => {
    const action = deletePost(999)

    const newState = profilePageReducer(initial_state, action)

    expect(newState.postData.length).toBe(4)
})