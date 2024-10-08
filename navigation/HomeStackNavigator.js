import { createStackNavigator } from "@react-navigation/stack";
import Detail from "../screens/detail/Detail";
import { SearchBar } from "react-native-screens";
import Home from "../screens/home/Home";
import Addresses from "../screens/addresses/Addresses";
import DetailAddress from "../screens/detailAddress/DetailAddress";


const Stack = createStackNavigator()

const MainStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{
                header: () => (<SearchBar />),
            }}>
            </Stack.Screen>

            <Stack.Screen name="Detail" component={Detail} options={{
                header: () => (<SearchBar />),
            }}>
            </Stack.Screen>
            <Stack.Screen name="Addresses" component={Addresses} options={{
                header: () => (<SearchBar />),
            }}>
            </Stack.Screen>
            <Stack.Screen name="DetailAddress" component={DetailAddress} options={{
                header: () => (<SearchBar />),
            }}>
            </Stack.Screen>


        </Stack.Navigator>
    )
}

export default MainStack

