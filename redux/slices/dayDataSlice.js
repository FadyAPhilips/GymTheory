import { createSlice } from '@reduxjs/toolkit'

export const dayData = createSlice({
    name: 'dayData',
    initialState: {
        currentDate: {
            dateString: '2022-09-10',
            day: '10',
            month: '09',
            year: '2022',
            timestamp: '1662768000000'
        },
        todaysWorkouts: {}
    },
    reducers: {
        setDate: (state, action) => {
            const newDate = action.payload
            state.currentDate = { ...newDate }

        },
        setWorkouts: (state, action) => {
            const newWorkouts = action.payload
            state.todaysWorkouts = { ...newWorkouts }
        },
        addExercise: (state, action) => {
            const { newWorkoutId, newWorkoutData } = action.payload
            state.todaysWorkouts = { ...state.todaysWorkouts, [newWorkoutId]: newWorkoutData }
        },
        setOneWorkout: (state, action) => {

            const newWorkoutData = action.payload.newWorkout

            state.todaysWorkouts = { ...state.todaysWorkouts, [newWorkoutData.id]: newWorkoutData }
        },
        removeExercise: (state, action) => {

            console.log(action.payload);
            const newWorkouts = { ...state.todaysWorkouts }
            delete newWorkouts[action.payload];
            state.todaysWorkouts = { ...newWorkouts }
        }
    }
})

export const { setDate, setWorkouts, addExercise, removeExercise, setOneWorkout } = dayData.actions

export default dayData.reducer