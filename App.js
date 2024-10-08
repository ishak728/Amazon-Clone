import './gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from './screens/sign-in/SignIn'
import MyStack from './navigation/StackNavigator';
import { Provider } from 'react-redux';
import { store } from './redux/Store';
import { AddressProvider } from "./contextApi/AddressContext"


export default function App() {
  return (
    <Provider store={store}>


      <AddressProvider>
        <NavigationContainer>
          <MyStack></MyStack>
        </NavigationContainer>
      </AddressProvider>


    </Provider>
  );
}

 