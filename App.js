import './gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from './screens/sign-in/SignIn'
import MyStack from './navigation/StackNavigator';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/Store';
import { AddressProvider } from "./contextApi/AddressContext"
import { PersistGate } from 'redux-persist/integration/react';



export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
      <AddressProvider>
        <NavigationContainer>
          <MyStack></MyStack>
        </NavigationContainer>
      </AddressProvider>
      </PersistGate>
    </Provider>
  );
}

