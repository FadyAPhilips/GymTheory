import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './redux/store'
import { Provider } from 'react-redux'

import WorkoutListPage from './pages/WorkoutListPage';
import WorkoutPage from './pages/WorkoutPage';
import SearchPage from './pages/SearchPage';

const Stack = createNativeStackNavigator();


export default function App() {


  return (
    <Provider store={store}>
      <NavigationContainer>

        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen
            name="Home"
            component={WorkoutListPage}
          // options={{ title: 'WorkoutListPage' }}
          />
          <Stack.Screen name="Workout" component={WorkoutPage} />
          <Stack.Screen name="Search" component={SearchPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

