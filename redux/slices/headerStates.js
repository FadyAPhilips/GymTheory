import { createSlice } from '@reduxjs/toolkit'

export const headerState = createSlice({
    name: 'header',
    initialState: {
        drawerOpen: false
    },
    reducers: {
        setDrawer: (state, action) => {
            state.drawerOpen = action.payload
        },
    }
})

export const { setDrawer } = headerState.actions

export default headerState.reducer