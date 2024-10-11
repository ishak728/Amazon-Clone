import { createStackNavigator } from "@react-navigation/stack";
import { SearchBar } from "react-native-screens";
import Profile from "../screens/profile/Profile";
import Orders from "../screens/orders/Orders";


const Stack = createStackNavigator()

const ProfileStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={Profile} options={{
                header: () => (<SearchBar />),
            }}>
            </Stack.Screen>

            <Stack.Screen name="Orders" component={Orders} options={{
                header: () => (<SearchBar />),
            }}>
            </Stack.Screen>




        </Stack.Navigator>
    )
}

export default ProfileStack

