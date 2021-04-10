import Axios from 'axios'

Axios.defaults.baseURL = '/api'
Axios.defaults.headers.post['Content-Type'] = 'application/json'

export const currentUser = async () => {
    return (await Axios.post("/current-user")).data
}

export const recent = async ({ userId }) => {
    return (await Axios.post("/recent", { userId })).data
}

export const moments = async ({ userId }) => {
    return (await Axios.post("/moments", { userId })).data
}

export const friends = async () => {
    return (await Axios.post("/friends")).data
}