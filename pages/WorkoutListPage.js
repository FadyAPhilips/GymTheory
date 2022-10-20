import React, { useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import * as Device from 'expo-device';
import Constants from 'expo-constants';
import { useSelector, useDispatch } from 'react-redux'
import moment from "moment"
import { setDate, setWorkouts } from '../redux/slices/dayDataSlice'
import { setDeviceID } from '../redux/slices/userSlice'


import NavBar from '../UIComponents/Header'
import Line from '../UIComponents/line'
import WorkoutCard from '../UIComponents/workoutCard'
import API from '../API';

const WorkoutListPage = ({ navigation }) => {

    const dateData = useSelector(state => state.dateState.todaysWorkouts)
    const day = useSelector(state => state.dateState.currentDate)
    const userID = useSelector(state => state.userState.deviceID)

    const dispatch = useDispatch()

    const getDayData = async () => {
        const raw = await API.getWorkout(userID, day.timestamp)

        const parsed = JSON.parse(raw.data.body)?.Item?.workoutData
        moment().format();
        await dispatch(setWorkouts(parsed))


    }

    useEffect(() => {

        (async () => {
            const momentObj = moment().set({ hour: 0, minute: 0, second: 0, millisecond: 0 })

            const ts = momentObj.unix() * 1000

            await dispatch(setDate({
                dateString: momentObj.format("MM-DD-YYYY"),
                day: momentObj.format("DD"),
                month: momentObj.format("MM"),
                year: momentObj.format("YYYY"),
                timestamp: momentObj.unix() * 1000,
            }
            ))
        })();

        (async () => {
            // const deviceID = (Constants.installationId);
            await dispatch(setDeviceID(deviceID))
        })();


    }, []);


    useEffect(() => {
        (async () => {
            await getDayData()
        })();
    }, [day]);


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
        scrollContainer: {
            width: '100%',
        }
    });

    const goToWorkoutPage = (name, id, repsList, weightsList, key, bodypart, equipment) => {
        navigation.navigate('Workout', {
            name: name,
            id: id,
            repsList: repsList,
            weightsList: weightsList,
            index: key,
            bodypart: bodypart,
            equipment: equipment
        })
    }

    const goToSearch = () => {
        navigation.navigate('Search', {
        })
    }


    const workoutList = Object.values(dateData).map((workout, i) => {

        return (
            <WorkoutCard
                key={i}
                workoutName={workout.name}
                workoutGif={workout.id}
                setList={workout.repsList}
                pressed={() => goToWorkoutPage(workout.name, workout.id, workout.repsList, workout.weightsList, i, workout.bodyPart, workout.equipment)}
            />

        )
    })

    return (
        <View style={styles.container}>
            <NavBar home pressed={() => goToSearch()} onDateChange={getDayData} />
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.lineContainer}>
                    <Line horizontal />
                </View>
                {workoutList}
            </ScrollView>
        </View>
    );
}


export default WorkoutListPage;
