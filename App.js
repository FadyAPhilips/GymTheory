import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import store from './redux/store'
import { Provider } from 'react-redux'

import WorkoutListPage from './pages/WorkoutListPage';



export default function App() {


  return (
    <Provider store={store}>
      <WorkoutListPage />
    </Provider>
  );
}

