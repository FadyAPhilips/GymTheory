import { createSlice } from '@reduxjs/toolkit'

export const userState = createSlice({
    name: 'user',
    initialState: {
        deviceID: '',
    },
    reducers: {
        setDeviceID: (state, action) => {
            state.deviceID = action.payload
        },
    }
})

export const { setDeviceID } = userState.actions

export default userState.reducer