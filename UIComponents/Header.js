import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, InteractionManager, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { Calendar } from 'react-native-calendars';
import dateCalc from 'date-calc'
import Icon from 'react-native-vector-icons/FontAwesome'


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
            zIndex: 3
        },
        img: {
            margin: 10,
            width: 100,
            height: 100,
        },
        calendarContainer: {
            width: '94%',
            height: 380
        }, icon: {
            color: '#eee',
            padding: 5
        }, backContainer: {
            display: 'flex',
            marginTop: 20,
            paddingLeft: 10,
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%'
        }, backTextStyle: {
            color: '#eee',
            fontSize: 18
        },
        searchPageBarContainer: {
            display: 'flex',
            // marginTop: 20,
            // paddingLeft: 10,
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%'
        },
        searchingBackContainer: {
            display: 'flex',
            marginTop: 15,
            paddingRight: 8,
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
            paddingBottom: 10,
        },
        searchBarContainer: {
            flex: 5,
            marginRight: -10,
            paddingBottom: 10,
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
        if (drawerOpen && props.home) {
            return (
                InternalComponent
            )
        }
    }

    let topHeader, dateHeader

    if (props.home) {
        topHeader = <Search pressed={props.pressed} />
        dateHeader = <DateHeader collapsable={true} />
    } else if (props.search) {
        topHeader =
            <View style={styles.backContainer}>
                <TouchableOpacity style={styles.searchingBackContainer} onPress={props.goBack}>
                    <Icon name="chevron-left" size={16} style={styles.icon} />
                    <Text style={styles.backTextStyle}>Home</Text>
                </TouchableOpacity>
                <View style={styles.searchBarContainer}>
                    <Search pressed={props.pressed} />
                </View>
            </View>
    } else {
        topHeader =
            <TouchableOpacity style={styles.backContainer} onPress={props.goBack}>
                <Icon name="chevron-left" size={16} style={styles.icon} />
                <Text style={styles.backTextStyle}>Home</Text>
            </TouchableOpacity>
        dateHeader = <DateHeader collapsable={true} />

    }



    return (
        <View style={styles.nav}>
            <Text>GymTheory</Text>
            {topHeader}
            {dateHeader}
            {displayInternalComponent()}
        </View >
    );
}

export default NavBar;