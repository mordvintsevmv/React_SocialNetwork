import axios from "axios";

const instance = axios.create({
    withCredentials: true, baseURL: 'https://social-network.samuraijs.com/api/1.0/', headers: {
        "API-KEY": "33804be5-efc1-4713-806e-e0af1a2925a7"
    }
})
export const serverGetUsers = (page, count) => {
    console.log("serverGetUsers")
    return instance.get(`users?page=${page}&count=${count}`).then(r => r.data)
}

export const serverFollow = (userID) => {
    console.log("serverFollow")
    return instance.post(`follow/${userID}`).then(r => r.data)
}

export const serverUnfollow = (userID) => {
    console.log("serverUnfollow")
    return instance.delete(`follow/${userID}`).then(r => r.data)
}

export const serverCheckAuth = () => {
    console.log("serverCheckAuth")
    return instance.get(`auth/me`).then(r => r.data)
}

export const serverLoadProfile = (userID) => {
    console.log("serverLoadProfile")
    return instance.get(`profile/${userID}`).then(r => r.data)
}