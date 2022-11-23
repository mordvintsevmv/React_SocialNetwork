import axios from "axios";

const instance = axios.create({
    withCredentials: true, baseURL: 'https://social-network.samuraijs.com/api/1.0/', headers: {
        "API-KEY": "e9780500-4a96-4f98-a331-2d15af9d7a57"
    }
})

/*

UserPage functions

 */
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


/*

ProfilePage functions

 */
export const serverLoadProfile = (userID) => {
    console.log("serverLoadProfile")
    return instance.get(`profile/${userID}`).then(r => r.data)
}

export const serverLoadStatus = (userID) => {
    console.log("serverLoadStatus")
    return instance.get(`profile/status/${userID}`).then(r => r.data)
}

export const serverUploadPhoto = (image) => {
    console.log("serverUploadPhoto")
    const formData = new FormData()
    formData.append("image", image)
    return instance.put(`profile/photo`, formData, {headers: {"Content-Type": "multipart/form-data"}}).then(r => r.data)
}

export const serverUpdateStatus = (status) => {
    console.log("serverUpdateStatus")
    return instance.put(`profile/status`, {status}).then(r => r.data)
}


/*

AuthPage functions

 */
export const serverCheckAuth = () => {
    console.log("serverCheckAuth")
    return instance.get(`auth/me`).then(r => r.data)
}

export const serverLogin = (email, password, rememberMe = false) => {
    console.log("serverLogin")
    return instance.post(`auth/login`, {email, password, rememberMe}).then(r => r.data)
}

export const serverLogout = () => {
    console.log("serverLogout")
    return instance.delete(`auth/login`).then(r => r.data)
}