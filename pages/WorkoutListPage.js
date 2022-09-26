import { StyleSheet, Button, View, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';


import NavBar from '../UIComponents/Header'
import Line from '../UIComponents/line'
import WorkoutCard from '../UIComponents/workoutCard'

const WorkoutListPage = ({ navigation }) => {

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

    const goToWorkoutPage = (name, gif, repsList, weightList, key) => {
        navigation.navigate('Workout', {
            name: name,
            gif: gif,
            repsList: repsList,
            weightList: weightList,
            index: key
        })
    }

    const goToSearch = () => {
        navigation.navigate('Search', {

        })
    }

    const workoutList = dateData.map((workout, i) => {
        return (
            <WorkoutCard
                key={i}
                workoutName={workout.name}
                workoutGif={workout.gif}
                setList={workout.repsList}
                pressed={() => goToWorkoutPage(workout.name, workout.gif, workout.repsList, workout.weightList, i)}
            />

        )
    })

    return (
        <View style={styles.container}>
            <NavBar home pressed={() => goToSearch()} />
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