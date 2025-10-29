import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'

const store = configureStore({
    reducer: {
        userProfile: userReducer,
    },
})

export default store