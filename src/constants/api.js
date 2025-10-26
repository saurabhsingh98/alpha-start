export const BASE_URL = "http://localhost:3000"
export const SOCKET_URL = "http://localhost:3005"

export const alpha_api = {
    USER_SIGNUP: '/auth/register',
    USER_LOGIN: '/auth/login',
    MEDIA_UPLOAD: '/media/upload',
    CREATE_POST: '/posts',
    GET_POSTS: (userId) => `/posts/user/${userId}`,
    GET_NOTIFICATIONS: (userId) => `/notifications/${userId}`
}