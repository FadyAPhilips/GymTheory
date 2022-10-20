import React, { useEffect, useState } from 'react';
// import { getUniqueId } from 'react-native-device-info';

import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

import NavBar from '../UIComponents/Header'
import ImageGif from '../UIComponents/ImageGif'
import API from '../API';
import { addExercise } from '../redux/slices/dayDataSlice';



const SearchPage = ({ navigation, route }) => {
    const [searchResults, setSearchResults] = useState([])

    const userID = useSelector(state => state.userState.deviceID)
    const day = useSelector(state => state.dateState.currentDate)

    const getSearchResults = async (searchValue) => {
        const data = await API.search(searchValue)
        setSearchResults(data)
    }


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: '#222',
        },
        scrollContainer: {
            width: '100%',
        },
        textStyle: {
            color: '#eee',
            fontSize: 15,
            paddingLeft: 6,
            height: 54,
            textAlign: 'center'
        },
        allResults: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: '100%',

        },
        result: {
            width: '50%',
            alignItems: 'center',
            justifyContent: 'center'
        }
    });


    const goBack = () => navigation.navigate('Home')

    const dispatch = useDispatch()

    const goToWorkoutPage = async (name, id, bodypart, equipment) => {
        const newWorkoutData = {
            name: name,
            id: id,
            repsList: [],
            weightsList: [],
            bodypart: bodypart,
            equipment: equipment
        }
        await dispatch(addExercise({ newWorkoutId: id, newWorkoutData }))

        await API.createExercise(userID, id, day.timestamp)

        await API.modifyExercise(userID, id, day.timestamp,
            newWorkoutData
        )


        navigation.navigate('Workout', {
            name: name,
            id: id,
            repsList: [],
            weightsList: [],
            bodypart: bodypart,
            equipment: equipment
        })
    }


    const resultsComponents = searchResults.map(
        (result, i) => {
            return (
                <TouchableOpacity style={styles.result} key={Math.random()} onPress={() => goToWorkoutPage(result.name, result.id, result.bodyPart, result.equipment)}>
                    < ImageGif
                        imgSource={result.id}
                        size={170}
                    />
                    <View>
                        <Text style={styles.textStyle}>{result.name}</Text>
                    </View>
                </TouchableOpacity>
            )
        }
    )



    return (
        <View style={styles.container}>
            <NavBar onSearch={getSearchResults} goBack={() => goBack()} search />
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.allResults}>
                    {resultsComponents}
                </View>
            </ScrollView >
        </View >
    );
}


export default SearchPage;