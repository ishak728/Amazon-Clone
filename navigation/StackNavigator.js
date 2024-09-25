import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AccountHeader from '../component/AccountHeader';
import SignIn from '../screens/sign-in/SignIn';
import SignUp from '../screens/sign-up/SignUp';
import VerifyEmail from '../screens/verifyEmail/VerifyEmail';


const Stack = createStackNavigator()


const MyStack = () => {
    return (
        <Stack.Navigator initialRouteName='SignUp'>
            <Stack.Screen name='SignIn' component={SignIn} options={{
                header: () => (<AccountHeader />),
            }}>
            </Stack.Screen>

            <Stack.Screen name='SignUp' component={SignUp} options={{
                header: () => (<AccountHeader />),
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



