import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
    },
    reducers: {
        setUserProfile: (state, action) => {
            state.user = action.payload
        },
        getUserProfile: (state) => {
            return state.user
        },
    },
})

export const { setUserProfile, getUserProfile } = userSlice.actions
export default userSlice.reducer