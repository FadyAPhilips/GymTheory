import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

import { setSearching, setSearchValue } from '../redux/slices/searchSlice'

import Search from "./Search"
import DateHeader from './DateHeader';



const NavBar = (props) => {

    const searching = useSelector(state => state.searchState.searching)
    const dispatch = useDispatch()


    let color, searchingIndicator

    if (searching) {
        color = 'green'
        searchingIndicator = 'Searching'
    } else {
        color = 'red'
        searchingIndicator = 'Not Searching'
    }

    const styles = StyleSheet.create({
        nav: {
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ff6666',
            width: '100%',
            // height: 110,
            borderWidth: 0,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            paddingTop: 6,
        },
        testerButton: {
            margin: 20,
            padding: 10,
            backgroundColor: color,
        }
    });



    return (
        <View style={styles.nav}>
            <Text>GymTheory</Text>
            <Search />
            <DateHeader
                day={"11"}
                month={"09"}
                year={"2022"}
                weekDay={"Sunday"}
            />
            <View style={styles.testerButton}>
                <Text>{searchingIndicator}</Text>
            </View>
        </View >
    );
}

export default NavBar;