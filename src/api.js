import Axios from 'axios'

Axios.defaults.baseURL = '/api'
Axios.defaults.headers.post['Content-Type'] = 'application/json'

export const currentUser = async () => {
    return (await Axios.post("/current-user", { userId: "100000" })).data
}

export const recent = async ({ userId }) => {
    return (await Axios.post("/recent", { userId })).data
}

export const moments = async ({ userId }) => {
    return (await Axios.post("/moments", { userId })).data
}

export const friends = async () => {
    return (await Axios.post("/friends", { userId: "100000" })).data
}

export const newMoment = async ({ content }) => {
    return (await Axios.post("/new-moment", { userId: "100000", content })).data
}

export const removeMoment = async ({ momentId }) => {
    return (await Axios.post("/remove-moment", { userId: "100000", momentId })).data
}

export const newFriend = async ({ friendId }) => {
    return (await Axios.post("/new-friend", { userId: "100000", friendId })).data
}

export const removeFriend = async ({ friendId }) => {
    return (await Axios.post("/remove-friend", { userId: "100000", friendId })).data
}