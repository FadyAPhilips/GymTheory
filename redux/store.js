import { configureStore } from '@reduxjs/toolkit'

import searchReducer from './slices/searchSlice'
import headerReducers from './slices/headerStates'
import dateDataReducers from './slices/dayDataSlice'
import userReducerers from './slices/userSlice'

export default configureStore({
    reducer: {
        searchState: searchReducer,
        headerState: headerReducers,
        dateState: dateDataReducers,
        userState: userReducerers
    }
})