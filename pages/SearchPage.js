import React, { useState } from 'react';

import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

import NavBar from '../UIComponents/Header'
import Line from '../UIComponents/line'
import ImageGif from '../UIComponents/ImageGif'



const SearchPage = ({ navigation, route }) => {

    const dispatch = useDispatch()

    // const [repList, setReps] = useState(route.params.repsList);
    // const [weightsList, setWeights] = useState(route.params.weightList);

    // const setNumber = repList.length


    let searchedList = [{
        workout: 'pushup',
        gif: 'http://d205bpvrqc9yn1.cloudfront.net/0001.gif'
    }, {
        workout: 'pushup',
        gif: 'http://d205bpvrqc9yn1.cloudfront.net/0001.gif'
    }, {
        workout: 'pushup',
        gif: 'http://d205bpvrqc9yn1.cloudfront.net/0001.gif'
    }, {
        workout: 'pushup',
        gif: 'http://d205bpvrqc9yn1.cloudfront.net/0001.gif'
    }, {
        workout: 'pushup',
        gif: 'http://d205bpvrqc9yn1.cloudfront.net/0001.gif'
    }, {
        workout: 'pushup',
        gif: 'http://d205bpvrqc9yn1.cloudfront.net/0001.gif'
    }, {
        workout: 'pushup',
        gif: 'http://d205bpvrqc9yn1.cloudfront.net/0001.gif'
    },
    ]


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


    const searchResults = searchedList.map(
        (result, i) => {
            return (
                <View style={styles.result} key={i}>
                    < ImageGif
                        imgSource={result.gif}
                        size={170}
                    />
                    <View>
                        <Text style={styles.textStyle}>{result.workout}</Text>
                    </View>
                </View>
            )
        }
    )



    return (
        <View style={styles.container}>
            <NavBar goBack={() => goBack()} search />
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.allResults}>
                    {searchResults}
                </View>
            </ScrollView >
        </View >
    );
}


export default SearchPage;