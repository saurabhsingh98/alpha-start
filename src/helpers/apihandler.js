
import axios from 'axios'
import {BASE_URL} from  '../constants/api.js'

const bearerToken = localStorage.getItem('token')
export const postApiHandler = async (url, data) => {
    const response = await axios.post(`${BASE_URL}${url}`, data, {
        headers: {
            Authorization: `Bearer ${bearerToken}`
        }
    })
    return response.data
}

export const getApiHandler = async (url) => {
    const response = await axios.get(`${BASE_URL}${url}`, {
        headers: {
            Authorization: `Bearer ${bearerToken}`
        }
    })
    return response.data
}

export const putApiHandler = async (url, data) => {
    const response = await axios.put(url, data, {
        headers: {
            Authorization: `Bearer ${bearerToken}`
        }
    })
    return response.data
}