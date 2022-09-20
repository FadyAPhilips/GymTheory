import { createSlice } from '@reduxjs/toolkit'

const DateCalc = require('date-calc')

export const dayData = createSlice({
    name: 'dayData',
    initialState: {
        currentDate: {
            dateString: '2022-09-10',
            day: '10',
            month: '09',
            year: '2022',
        },
        todaysWorkouts: [{
            name: 'Sit-ups',
            gif: 'http://d205bpvrqc9yn1.cloudfront.net/0001.gif',
            repsList: ['20', '30', '40', '50', '10'],
            weightList: []
        }, {
            name: 'Pull-ups',
            gif: 'http://d205bpvrqc9yn1.cloudfront.net/0015.gif',
            repsList: ['30', '30', '30', '30'],
            weightList: []
        }, {
            name: 'Close-grip Barbell Bench Press',
            gif: 'http://d205bpvrqc9yn1.cloudfront.net/0055.gif',
            repsList: ['8', '10', '12'],
            weightList: ['70', '70', '80']
        }, {
            name: 'Sit-ups',
            gif: 'http://d205bpvrqc9yn1.cloudfront.net/0001.gif',
            repsList: ['20', '30', '40'],
            weightList: []
        }, {
            name: 'Pull-ups',
            gif: 'http://d205bpvrqc9yn1.cloudfront.net/0015.gif',
            repsList: ['30', '30', '30', '30'],
            weightList: []
        }, {
            name: 'Close-grip Barbell Bench Press',
            gif: 'http://d205bpvrqc9yn1.cloudfront.net/0055.gif',
            repsList: ['8', '10', '12'],
            weightList: ['70', '70', '80']
        }
        ]
    },
    reducers: {
        setDate: (state, action) => {
            const newDate = action.payload
            state.currentDate = { ...newDate }
        }
    }
})

export const { setDate } = dayData.actions

export default dayData.reducer