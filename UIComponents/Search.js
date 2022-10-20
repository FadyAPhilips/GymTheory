import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

import { setSubmitValue, setSearchValue } from '../redux/slices/searchSlice'

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

    const onSub = (newText) => {
        props.onSearch(newText.nativeEvent.text)
    }

    return (
        <View style={styles.searchContainer}>
            <TextInput
                autoFocus={props.focus}
                style={styles.searchInput}
                // value={searchValue}
                // onChangeText={(value) => onChange(value)}
                onSubmitEditing={(newText) => onSub(newText)}
                placeholder="Search..."
                onPressIn={props.pressed}
                autoCapitalize='none'
            />
        </View>
    );
}


export default Search;