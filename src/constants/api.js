export const BASE_URL = "http://localhost:3000"
export const SOCKET_URL = "http://localhost:3005"

export const alpha_api = {
    ADD_PROFILE: '/users/profile',
    GET_PROFILE: '/users/profile',
    USER_SIGNUP: '/auth/register',
    USER_LOGIN: '/auth/login',
    GET_USERS: '/users/user_list',
    MEDIA_UPLOAD: '/media/upload',
    CREATE_POST: '/posts',
    GET_POSTS: (userId) => `/posts/user/${userId}`,
    GET_NOTIFICATIONS: (userId) => `/notifications/${userId}`,
    FOLLOW_USER: (targetUserId) => `/users/follow/${targetUserId}`,
    GET_FOLLOWING_USERS: (userId) => `/users/following/${userId}`
}