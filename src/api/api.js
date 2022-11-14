import axios from "axios";

const instance = axios.create({
    withCredentials: true, baseURL: 'https://social-network.samuraijs.com/api/1.0/', headers: {
        "API-KEY": "33804be5-efc1-4713-806e-e0af1a2925a7"
    }
})
export const serverGetUsers = (page, count) => {
    return instance.get(`users?page=${page}&count=${count}`)
        .then(r => r.data)
}

export const serverFollow = (id) => {
    return instance.post(`follow/${id}`).then(r => r.data)
}

export const serverUnfollow = (id) => {
    return instance.delete(`follow/${id}`).then(r => r.data)
}

export const serverCheckAuth = () => {
    return instance.get(`auth/me`)
        .then(r => r.data)
}