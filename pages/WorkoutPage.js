import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { setOneWorkout } from '../redux/slices/dayDataSlice';

import NavBar from '../UIComponents/Header'
import Line from '../UIComponents/line'
import ImageGif from '../UIComponents/ImageGif'
import CounterShape from '../UIComponents/counterShape'
import API from '../API';


const WorkoutPage = ({ navigation, route }) => {

    const dispatch = useDispatch()

    const day = useSelector(state => state.dateState.currentDate)
    const userID = useSelector(state => state.userState.deviceID)

    const [workout, setWorkout] = useState({
        name: route.params.name,
        id: route.params.id,
        repsList: route.params.repsList,
        weightsList: route.params.weightsList,
        bodypart: route.params.bodypart,
        equipment: route.params.equipment
    }
    );


    const setNumber = workout.repsList.length


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
            paddingBottom: 20
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
            backgroundColor: '#eeeeee',
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

    useEffect(() => {

        (async () => {
            await API.modifyExercise(userID, workout.id, day.timestamp, workout)
        })();


    }, [workout]);

    const addSet = async (r, w) => {

        if (setNumber < 5) {

            const currentWorkout = { ...workout }

            let oldReps = [...currentWorkout.repsList]
            let oldWeights = [...currentWorkout.weightsList]

            oldReps.push(r)
            oldWeights.push(w)

            const newWorkout = { ...workout }

            newWorkout.repsList = oldReps
            newWorkout.weightsList = oldWeights

            setWorkout(newWorkout)


            API.modifyExercise(userID, workout.id, day.timestamp, newWorkout)


            await dispatch(setOneWorkout({ newWorkout }))


        }

    }



    const removeSet = async (iToRemove) => {


        let newReps = []
        let newWeights = []

        let oldReps = [...workout.repsList]
        let oldWeights = [...workout.weightsList]

        const newWorkout = { ...workout }


        newWorkout.repsList.forEach((set, i) => {

            if (!(i == iToRemove)) {

                newReps.push(oldReps[i])
                newWeights.push(oldWeights[i])
            }
        });


        newWorkout.repsList = newReps
        newWorkout.weightsList = newWeights


        setWorkout(newWorkout)

        API.modifyExercise(userID, workout.id, day.timestamp, newWorkout)

        await dispatch(setOneWorkout({ newWorkout }))


    }


    const onNumChange = async (num, index, type) => {

        let newWorkout = { ...workout }

        console.log(type);

        if (type === "reps") {

            console.log("NOT HEREE");

            const newReps = [...newWorkout.repsList]
            newReps[index] = num
            console.log(newReps);
            newWorkout.repsList = newReps

        } else if (type === "weight") {

            console.log("HERE");
            const newWeights = [...newWorkout.weightsList]
            newWeights[index] = num
            console.log(newWeights);
            newWorkout.weightsList = newWeights
        }

        console.log(newWorkout);

        setWorkout(newWorkout)

        API.modifyExercise(userID, workout.id, day.timestamp, newWorkout)

        await dispatch(setOneWorkout({ newWorkout }))

    }


    const sets = workout.repsList.map((reps, i) => {


        const type = () => {
            if (workout.bodypart === "cardio") {
                return (
                    <View style={styles.weightStyle} >
                        <Text style={styles.textStyle}>Minutes    </Text>
                    </View>
                )
            } else if (workout.equipment === "body weight") {
                return (
                    <View style={styles.weightStyle} >
                        <Text style={styles.textStyle}>Reps  /</Text>
                        <Text style={styles.textStyle}>Body Weight</Text>
                    </View>
                )
            } else {
                return (
                    <View style={styles.weightStyle}>
                        <Text style={styles.textStyle}>Reps /    </Text>
                        <CounterShape
                            index={i}
                            Changeable={true}
                            num={workout.weightsList[i]}
                            size={60}
                            maxLen={3}
                            type={"weight"}
                            changed={onNumChange}
                        />
                        <Text style={styles.textStyle}>Pounds</Text>
                    </View>
                )
            }
        }

        return (

            <View style={styles.singleSetView} key={Math.random()}>
                <CounterShape
                    index={i}
                    Changeable={true}
                    num={reps}
                    size={60}
                    maxLen={2}
                    type={"reps"}
                    changed={onNumChange}
                />
                {type()}
                <TouchableOpacity onPress={() => removeSet(i)}>
                    <Text style={{ fontSize: 15, left: 20, color: '#eee' }}>X</Text>
                </TouchableOpacity>
            </View>
        )
    })


    const displayAddButton = () => {

        if (setNumber < 5) {

            return (
                <TouchableOpacity style={styles.addSetButton} onPress={() => addSet('0', '0')}>
                    <Text style={{ fontSize: 40, bottom: 2 }}>+</Text>
                </TouchableOpacity>
            )


        }

    }



    return (
        <View style={styles.container}>
            <NavBar goBack={() => goBack()} />
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.imageView}>
                    <View style={styles.imgStyle}>
                        < ImageGif
                            imgSource={workout.id}
                            size={360}
                            style={styles.imgStyle}
                        />
                    </View>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleStyle}>
                        {workout.name}
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


                {displayAddButton()}


            </ScrollView >
        </View >
    );
}


export default WorkoutPage;