import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

import NavBar from '../UIComponents/Header'
import Line from '../UIComponents/line'
import WorkoutCard from '../UIComponents/workoutCard'

const WorkoutListPage = (props) => {

    const drawerOpen = useSelector(state => state.headerState.drawerOpen)
    const dateData = useSelector(state => state.dateState.todaysWorkouts)
    const dispatch = useDispatch()


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

    const workoutList = dateData.map((workout) => {
        return (
            <WorkoutCard
                workoutName={workout.name}
                workoutGif={workout.gif}
                setList={workout.repsList}
            />

        )
    })

    return (
        <View style={styles.container}>
            <NavBar />
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