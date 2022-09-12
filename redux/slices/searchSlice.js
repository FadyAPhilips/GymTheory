import { createSlice } from '@reduxjs/toolkit'

export const searchState = createSlice({
    name: 'search',
    initialState: {
        searchValue: '',
        searching: false
    },
    reducers: {
        setSearching: (state, action) => {
            state.searching = action.payload
            console.log(action.payload);
        },
        setSearchValue: (state, action) => {
            state.searchValue = action.payload
        }
    }
})

export const { setSearching, setSearchValue } = searchState.actions

export default searchState.reducer