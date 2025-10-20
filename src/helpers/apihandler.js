
import axios from 'axios'
import {BASE_URL} from  '../constants/api.js'

export const postApiHandler = async (url, data) => {
    const response = await axios.post(`${BASE_URL}${url}`, data)
    return response.data
}

export const getApiHandler = async (url) => {
    const response = await axios.get(url)
    return response.data
}

export const putApiHandler = async (url, data) => {
    const response = await axios.put(url, data)
    return response.data
}