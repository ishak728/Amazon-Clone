import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import VideoFeed from '../screens/videoFeedScreen/VideoFeed';
import Profile from '../screens/profile/Profile';
import Cart from '../screens/cart/Cart';
import Menu from '../screens/menu/Menu';
import { Ionicons } from '@expo/vector-icons';
import Main from '../screens/main/Main';
import Fontisto from '@expo/vector-icons/Fontisto';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import ProfileStack from './ProfileStackNavigator';

//#008E97 amazon tab color

const Tab = createBottomTabNavigator();


const MyTab = () => {
    const cart = useSelector((state) => state.cart.cart)
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarIconStyle: { marginBottom: 1 },
                tabBarStyle: {
                    position: 'absolute',
                },
            }}>
            <Tab.Screen name='ProfileStack' component={ProfileStack}
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
            <Tab.Screen name='Main' component={Main}
                options={{
                    tabBarLabel: "",
                    headerShown: false,
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

            <Tab.Screen name='Cart' component={Cart}
                options={{
                    tabBarLabel: "",
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>//#008E97
                        focused ? (
                            <View style={{ alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ position: "absolute", fontSize: 13, color: "#008E97", fontWeight: "bold" }}>{cart?.length}</Text>
                                <Ionicons name="cart-outline" size={40} color="#008E97" />
                            </View>
                        ) : (
                            <View style={{ alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ position: "absolute", fontSize: 13, color: "black", fontWeight: "bold" }}>{cart?.length}</Text>
                                <Ionicons name="cart-outline" size={40} color="black" />
                            </View>
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



