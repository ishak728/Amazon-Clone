import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AccountHeader from '../component/AccountHeader';
import SignIn from '../screens/sign-in/SignIn';
import SignUp from '../screens/sign-up/SignUp';
import VerifyEmail from '../screens/verifyEmail/VerifyEmail';
import MyTab from './BottomTabNavigator';
import SearchBar from "../component/searchBar/SearchBar";
import Detail from "../screens/detail/Detail"

const Stack = createStackNavigator()


const MyStack = () => {
    return (
        <Stack.Navigator initialRouteName='MyTab'>
            <Stack.Screen name='SignIn' component={SignIn} options={{
                header: () => (<AccountHeader />),
            }}>
            </Stack.Screen>

            <Stack.Screen name='SignUp' component={SignUp} options={{
                header: () => (<AccountHeader />),
            }}>
            </Stack.Screen>

            <Stack.Screen name='MyTab' component={MyTab} options={{
                header: () => (<SearchBar/>),
            }}>
            </Stack.Screen>

            <Stack.Screen name='Detail' component={Detail} options={{
                header: () => (<SearchBar/>),
            }}>
            </Stack.Screen>

            <Stack.Screen name='VerifyEmail' component={VerifyEmail} options={{
                header: () => (<AccountHeader headerTitle='' />),
            }}>
            </Stack.Screen>

        </Stack.Navigator>
    )
}

export default MyStack



