import { createSlice } from '@reduxjs/toolkit'

export const searchState = createSlice({
    name: 'search',
    initialState: {
        searchValue: '',
        searchValueToSubmit: '',
        searching: false
    },
    reducers: {
        setSubmitValue: (state, action) => {
            state.searchValueToSubmit = action.payload
        },
        setSearching: (state, action) => {
            state.searching = action.payload
            console.log(action.payload);
        },
        setSearchValue: (state, action) => {
            state.searchValue = action.payload
        },
    }
})

export const { setSearching, setSearchValue, setSubmitValue } = searchState.actions

export default searchState.reducer