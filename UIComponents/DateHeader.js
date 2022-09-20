import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

import Icon from 'react-native-vector-icons/FontAwesome'

import { setDrawer } from '../redux/slices/headerStates'

const styles = StyleSheet.create({
    date: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        padding: 15,
    },
    text: {
        fontSize: 16,
        color: '#eee',
    },
    icon: {
        color: '#eee',
        transform: [
            { rotate: "180deg" },
        ]
    }
});

const DateHeader = (props) => {

    const drawerOpen = useSelector(state => state.headerState.drawerOpen)
    const date = useSelector(state => state.dateState.currentDate)
    const dispatch = useDispatch()


    const iconRight = <Icon name="chevron-left" size={16} style={styles.icon} onPress={() => console.log('Tomorrow')} />
    const iconLeft = <Icon name="chevron-right" size={16} style={styles.icon} onPress={() => console.log('Yesterday')} />


    return (
        <View style={styles.date}
            onPress={() => dispatch(setDrawer(!drawerOpen))}
        >
            {iconLeft}
            <Text style={styles.text} onPress={() => dispatch(setDrawer(!drawerOpen))}>
                {date.day} / {date.month} / {date.year}
            </Text>
            {iconRight}
        </View >
    );
}


export default DateHeader;