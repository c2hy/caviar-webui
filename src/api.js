import Axios from 'axios'

Axios.defaults.baseURL = '/api'
Axios.defaults.headers.post['Content-Type'] = 'application/json'

export const newToken = async ({ userId, password }) => {
    return (await Axios.post("/new-token", { userId, password })).data
}

export const currentUser = async () => {
    return (await Axios.post("/current-user")).data
}

export const recent = async ({ userId }) => {
    return (await Axios.post("/recent", { userId })).data
}

export const ownerMoments = async () => {
    return (await Axios.post("/owner-moments")).data
}

export const friendMoments = async ({ friendId }) => {
    return (await Axios.post("/friend-moments", { friendId })).data
}

export const friends = async () => {
    return (await Axios.post("/friends")).data
}

export const newMoment = async ({ content }) => {
    return (await Axios.post("/new-moment", { content })).data
}

export const removeMoment = async ({ momentId }) => {
    return (await Axios.post("/remove-moment", { momentId })).data
}

export const newFriend = async ({ friendUserId }) => {
    return (await Axios.post("/new-friend", { friendUserId })).data
}

export const removeFriend = async ({ friendId }) => {
    return (await Axios.post("/remove-friend", { friendId })).data
}