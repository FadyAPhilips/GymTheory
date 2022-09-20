import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import ImageGif from './ImageGif'
import Line from './line'
import CounterShape from './counterShape'


const WorkoutCard = (props) => {


    const styles = StyleSheet.create({
        containerView: {
            display: 'flex',
            width: '100%',
            alignItems: 'center',
        },
        cardContainer: {
            display: 'flex',
            width: '100%',
            flexDirection: 'row'
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

    const counterList = props.setList.map((set) => {
        return (
            <CounterShape
                Changeable={false}
                num={set}
                size={36}
            />
        )
    }
    )


    return (
        <TouchableOpacity style={styles.containerView} onPress={() => console.log(props.workoutName)}>
            <View style={styles.cardContainer} >
                <View style={styles.gifContainer}>
                    < ImageGif
                        imgSource={props.workoutGif}
                        size={140}
                    />
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.textStyle}>
                        {props.workoutName}
                    </Text>
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