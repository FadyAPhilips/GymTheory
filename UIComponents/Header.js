import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, InteractionManager } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { Calendar } from 'react-native-calendars';
import dateCalc from 'date-calc'

import { setSearching, setSearchValue } from '../redux/slices/searchSlice'
import { setDrawer } from '../redux/slices/headerStates'
import { setDate } from '../redux/slices/dayDataSlice'


import Search from "./Search"
import DateHeader from './DateHeader';
import Img from './ImageGif'



const NavBar = (props) => {

    const searching = useSelector(state => state.searchState.searching)
    const drawerOpen = useSelector(state => state.headerState.drawerOpen)
    const date = useSelector(state => state.dateState.currentDate)
    const dispatch = useDispatch()


    const styles = StyleSheet.create({
        nav: {
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ee5050',
            width: '100%',
            // height: 110,
            borderWidth: 0,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            paddingTop: 6,
        },
        img: {
            margin: 10,
            width: 100,
            height: 100,
        },
        calendarContainer: {
            width: '94%',
            height: 380
        }
    });

    const changeDateState = (date) => {
        dispatch(setDate(date))
    }

    const InternalComponent = <View style={styles.calendarContainer} e>
        <Calendar

            theme={{
                backgroundColor: '#ee5050',
                calendarBackground: '#ee5050',
                textSectionTitleColor: '#fff',
                textSectionTitleDisabledColor: '#d9e1e8',
                selectedDayBackgroundColor: '#252525',
                todayTextColor: '#44c',
                arrowColor: 'white',
                monthTextColor: 'white',
                indicatorColor: '#505050',
                textDayFontSize: 18,
                textMonthFontSize: 18,
                textDayHeaderFontSize: 15,
                dayTextColor: '#fff',
                textDisabledColor: '#333',
            }}

            markedDates={{
                [date.dateString]: { selected: true },
            }}
            onDayPress={day => {
                changeDateState(day);
            }}
        />
    </View>

    const displayInternalComponent = () => {
        if (drawerOpen) {
            return (
                InternalComponent
            )
        }
    }


    return (
        <View style={styles.nav}>
            <Text>GymTheory</Text>
            <Search />
            <DateHeader
                collapsable={true}
            />
            {displayInternalComponent()}
        </View >
    );
}

export default NavBar;