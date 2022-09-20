import { configureStore } from '@reduxjs/toolkit'

import searchReducer from './slices/searchSlice'
import headerReducers from './slices/headerStates'
import dateDataReducers from './slices/dayDataSlice'

export default configureStore({
    reducer: {
        searchState: searchReducer,
        headerState: headerReducers,
        dateState: dateDataReducers
    }
})