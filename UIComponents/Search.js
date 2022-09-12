import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

import { setSearching, setSearchValue } from '../redux/slices/searchSlice'

const styles = StyleSheet.create({
    searchContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eeeeee',
        width: '90%',
        height: 30,
        borderWidth: 0,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        margin: 5
    },
    searchInput: {
        width: '100%',
        paddingHorizontal: 10,
        fontSize: 16
    }
});

const Search = (props) => {

    const searchValue = useSelector(state => state.searchState.searchValue)

    const dispatch = useDispatch()

    const onChange = (searchVal) => {
        dispatch(setSearchValue(searchVal))
    }

    return (
        <View style={styles.searchContainer}>
            <TextInput
                style={styles.searchInput}
                value={searchValue}
                onChangeText={(value) => onChange(value)}
                placeholder="Search..."
                onPressIn={() => dispatch(setSearching(true))}
            />
        </View>
    );
}


export default Search;