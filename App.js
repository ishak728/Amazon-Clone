import './gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from './screens/sign-in/SignIn'
import MyStack from './navigation/StackNavigator';
import { Provider } from 'react-redux';
import { store } from './redux/Store';


export default function App() {
  return (
   <Provider store={store}>
     <NavigationContainer>
      <MyStack></MyStack>
    </NavigationContainer>
   </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
