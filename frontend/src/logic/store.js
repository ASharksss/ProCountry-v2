import { configureStore } from '@reduxjs/toolkit'

import { userReducer } from './slices/authSlice'
import { institutionCategoryReducer } from './slices/institutionSlice'
import { preloaderReducer} from './slices/otherSlice'


export const store = configureStore({
    reducer: {
        user: userReducer,
        instCategory: institutionCategoryReducer,
        preloader: preloaderReducer
    }
})
