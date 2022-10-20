import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

import { removeExercise } from '../redux/slices/dayDataSlice'

import ImageGif from './ImageGif'
import Line from './line'
import CounterShape from './counterShape'
import API from '../API';


const WorkoutCard = (props) => {

    const userID = useSelector(state => state.userState.deviceID)

    const dispatch = useDispatch()


    const styles = StyleSheet.create({
        containerView: {
            display: 'flex',
            width: '100%',
            alignItems: 'center',
        },
        cardContainer: {
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        outerLineContainer: {
            width: '90%',
            alignItems: 'center',
        },
        lineContainer: {
            width: '100%',
            alignItems: 'center',
            position: 'relative',
            bottom: 20
        },
        infoContainer: {
            flex: 5,
            padding: 20,
        },
        gifContainer: {
            flex: 3.4,
        },
        textStyle: {
            color: '#eee',
            fontSize: 18,
            fontWeight: 'bold',
            paddingLeft: 6,
            height: 54,
        },
        setContainer: {
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-around',
            position: 'relative',
            top: 18,
            zIndex: 2,
            flex: 1,
        },
    });

    const day = useSelector(state => state.dateState.currentDate)


    const counterList = props.setList && props.setList.map((set, i) => {

        return (
            <CounterShape
                key={Math.random()}
                Changeable={false}
                num={set}
                size={36}
                maxLen={3}
            />
        )
    }
    )



    const removeWorkout = () => {
        console.log("HEEEEERRRREEEE");
        dispatch(removeExercise(props.workoutGif))
        // await API.removeExercise(userID, props.workoutGif, day.timestamp)
    }


    return (
        <TouchableOpacity style={styles.containerView} onPress={props.pressed}>
            <View style={styles.cardContainer} >
                <View style={styles.gifContainer}>
                    < ImageGif
                        imgSource={props.workoutGif}
                        size={140}
                    />
                </View>
                <View style={styles.infoContainer}>
                    <View style={styles.cardContainer} >
                        <Text style={styles.textStyle}>
                            {props.workoutName}
                        </Text>
                        <TouchableOpacity onPress={() => removeWorkout()}>
                            <Text style={{ fontSize: 14, color: '#aaa' }}>X</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.setContainer}>
                        {counterList}
                    </View>
                    <View style={styles.lineContainer}>
                        <Line horizontal />
                    </View>
                </View>
            </View>
            <View style={styles.outerLineContainer}>
                <Line horizontal />
            </View>
        </TouchableOpacity >
    )

}

export default WorkoutCard;