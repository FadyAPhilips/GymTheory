import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

import { setSearching, setSearchValue } from '../redux/slices/searchSlice'

const styles = StyleSheet.create({
    searchContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eeeeee',
        width: '90%',
        height: 36,
        borderWidth: 0,
        borderBottomLeftRadius: 17,
        borderBottomRightRadius: 17,
        borderTopLeftRadius: 17,
        borderTopRightRadius: 17,
        margin: 5,
        marginTop: 18
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