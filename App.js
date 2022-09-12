import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import store from './redux/store'
import { Provider } from 'react-redux'

import NavBar from './UIComponents/NavBar'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#eeeeee',
  },
});


export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NavBar />
        <Text>Hello World!</Text>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

