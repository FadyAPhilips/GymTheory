import React, { useState } from 'react';

import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

import NavBar from '../UIComponents/Header'
import Line from '../UIComponents/line'
import ImageGif from '../UIComponents/ImageGif'
import CounterShape from '../UIComponents/counterShape'


const WorkoutPage = ({ navigation, route }) => {

    const dispatch = useDispatch()

    const [repList, setReps] = useState(route.params.repsList);
    const [weightsList, setWeights] = useState(route.params.weightList);

    const setNumber = repList.length

    console.log(repList);
    console.log(weightsList);


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: '#222',
        },
        lineContainer: {
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
        },
        imageView: {
            width: '100%',
            backgroundColor: '#ee5050',
            top: -40,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            alignItems: 'center',
            justifyContent: 'flex-end',
            height: 600
        },
        imgStyle: {
            top: 60
        },
        titleContainer: {
            top: 20,
            padding: 20,
            width: '100%'
        },
        titleStyle: {
            color: '#eee',
            fontSize: 36,
            fontWeight: 'bold'
        },
        scrollContainer: {
            width: '100%',
            marginTop: -220,
        },
        setsInfo: {
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-around',
            height: setNumber * 70,
            display: 'flex',
            flexDirection: 'row',
        },
        allSets: {
            zIndex: 2,
            height: "100%"
        },
        singleSetView: {
            display: 'flex',
            flexDirection: 'row',
            width: '85%',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        weightStyle: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '60%'
        },
        weightInput: {
            backgroundColor: '#eee',
            width: 40,
            height: 40,
            margin: 10,
            alignItems: 'center',
            justifyContent: 'center',
        },
        textStyle: {
            color: '#eee',
            fontSize: 18,
            fontWeight: 'bold'
        },
        addSetButton: {
            backgroundColor: '#ee5050',
            width: 60,
            height: 60,
            margin: 7,
            marginLeft: 17,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: (30),
            borderColor: '#eee',
            borderWidth: 2
        },
        submitButton: {
            backgroundColor: '#ee5050',
            margin: 20,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: (30),
            borderColor: '#eee',
            borderWidth: 2
        }
    });


    const goBack = () => navigation.navigate('Home')

    const addSet = (r, w) => {

        if (setNumber < 5) {

            console.log(r, w);

            let oldReps = [...repList]
            let oldWeights = [...weightsList]


            oldReps.push(r)
            oldWeights.push(w)

            console.log(oldReps);
            console.log(oldWeights);

            setReps(oldReps)
            setWeights(oldWeights)
        }


    }

    const removeSet = (iToRemove) => {


        let newReps = []
        let newWeights = []

        let oldReps = [...repList]
        let oldWeights = [...weightsList]

        repList.forEach((set, i) => {


            if (!(i == iToRemove)) {

                console.log(i);

                newReps.push(oldReps[i])
                newWeights.push(oldWeights[i])
            }



        });

        // console.log(newReps);
        // console.log(newWeights);

        setReps(newReps)
        setWeights(newWeights)

    }

    const submit = () => {

        console.log('Submit');


        goBack()

    }


    const sets = repList.map((reps, i) => {

        // console.log(reps);

        return (

            <View style={styles.singleSetView} key={i}>
                <CounterShape
                    Changeable={true}
                    num={reps}
                    size={60}
                    maxLen={2}
                />
                <View style={styles.weightStyle}>
                    <Text style={styles.textStyle}>/</Text>
                    <CounterShape
                        Changeable={true}
                        num={weightsList[i]}
                        size={60}
                        maxLen={3}
                    />
                    <Text style={styles.textStyle}>Pounds</Text>
                </View>
                <TouchableOpacity onPress={() => removeSet(i)}>
                    <Text style={{ fontSize: 15, left: 20, color: '#eee' }}>X</Text>
                </TouchableOpacity>
            </View>
        )
    })

    console.log(route.params.index);


    return (
        <View style={styles.container}>
            <NavBar goBack={() => goBack()} />
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.imageView}>
                    <View style={styles.imgStyle}>
                        < ImageGif
                            imgSource={route.params.gif}
                            size={360}
                            style={styles.imgStyle}
                        />
                    </View>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleStyle}>
                        {route.params.name}
                    </Text>
                </View>
                <View style={styles.lineContainer}>
                    <Line horizontal />
                </View>
                <View style={[styles.setsInfo]}>
                    <View style={{ left: 40 }}>
                        <Line />
                    </View>
                    <View style={[styles.allSets, { flex: 1 }]}>

                        {sets}


                    </View>
                </View>

                <TouchableOpacity style={styles.addSetButton} onPress={() => addSet('12', '120')}>
                    <Text style={{ fontSize: 40, bottom: 2 }}>+</Text>
                </TouchableOpacity>

                <View>
                    <TouchableOpacity style={styles.submitButton} onPress={() => submit()}>
                        <Text style={{ fontSize: 40, bottom: 2, color: '#eee' }}>Submit</Text>
                    </TouchableOpacity>
                </View>


            </ScrollView >
        </View >
    );
}


export default WorkoutPage;