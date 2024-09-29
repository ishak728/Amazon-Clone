import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import VideoFeed from '../screens/videoFeedScreen/VideoFeed';
import Profile from '../screens/profile/Profile';
import Cart from '../screens/cart/Cart';
import Menu from '../screens/menu/Menu';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import { SearchBar } from 'react-native-screens';
//#008E97 amazon tab color

const Tab = createBottomTabNavigator();


const MyTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarIconStyle: { marginBottom: 1 },
                tabBarStyle: {
                    position: 'absolute',
                },
            }}>
            <Tab.Screen name='Home' component={Home}
                options={{
                    tabBarLabel: "",
                    headerShown:false,
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Ionicons name="home-outline" size={24} color="#008E97" />
                        ) : (
                            <Ionicons name="home-outline" size={24} color="black" />
                        ),

                }}

            />
            <Tab.Screen name='VideoFeed' component={VideoFeed}
                options={{
                    tabBarLabel: "",
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Ionicons name="play-circle-outline" size={24} color="#008E97" />
                        ) : (
                            <Ionicons name="play-circle-outline" size={24} color="black" />
                        ),
                }}

            />
            <Tab.Screen name='Profile' component={Profile}
                options={{
                    tabBarLabel: "",
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Ionicons name="person-outline" size={24} color="#008E97" />
                        ) : (
                            <Ionicons name="person-outline" size={24} color="black" />
                        ),


                }}

            />
            <Tab.Screen name='Cart' component={Cart}
                options={{
                    tabBarLabel: "",
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Ionicons name="cart-outline" size={24} color="#008E97" />
                        ) : (
                            <Ionicons name="cart-outline" size={24} color="black" />
                        ),
                }}

            />
            <Tab.Screen name='Menu' component={Menu}
                options={{
                    tabBarLabel: "",
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Ionicons name="menu-outline" size={24} color="#008E97" />
                        ) : (
                            <Ionicons name="menu-outline" size={24} color="black" />
                        ),
                }}

            />

        </Tab.Navigator>
    )
}

export default MyTab



