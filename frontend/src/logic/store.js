import { configureStore } from '@reduxjs/toolkit'

import { userReducer } from './slices/authSlice'
import { institutionCategoryReducer } from './slices/institutionSlice'
import { preloaderReducer} from './slices/otherSlice'
import { partyReducer } from './slices/partsSlice'
import { geopositionReducer } from './slices/geopositionSlice'
import { userInfoReducer } from './slices/userInfoSlice'


export const store = configureStore({
    reducer: {
        user: userReducer,
        instCategory: institutionCategoryReducer,
        preloader: preloaderReducer,
        party: partyReducer,
        geoposition: geopositionReducer,
        userInfo: userInfoReducer
    }
})
