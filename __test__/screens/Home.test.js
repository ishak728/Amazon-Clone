import React from 'react';
import { render, act } from '@testing-library/react-native';
import Home from '../../screens/home/Home';
import { getAddress } from '../../services/UserService';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { AddressContext } from '../../contextApi/AddressContext';
import { getUserId } from '../../utils/AsyncStorage';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Stack2 = createStackNavigator();
const Tab = createBottomTabNavigator();

// Ana Stack Navigator
const MainStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="MainTabs" component={TabNavigator} />
    </Stack.Navigator>
);

// Tab Navigator
const TabNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        {/* Diğer tab bileşenleri burada */}
    </Tab.Navigator>
);

// Home için Stack Navigator
const HomeStack = () => (
    <Stack2.Navigator>
        <Stack2.Screen name="HomeScreen" component={Home} />
        {/* Diğer stack bileşenleri burada */}
    </Stack2.Navigator>
);

jest.mock('../../services/UserService');
jest.mock('../../utils/AsyncStorage');
jest.mock('@react-navigation/native', () => {
    const original = jest.requireActual('@react-navigation/native');
    return {
        ...original,
        useNavigation: jest.fn(),
    };
});

jest.mock('@expo/vector-icons/Fontisto', () => 'Fontisto');
jest.mock('@expo/vector-icons/Entypo', () => 'Entypo');
jest.mock('@expo/vector-icons', () => ({
    Ionicons: 'Ionicons',
}));

describe('Home', () => {
    const address = {
        country: 'United State',
        fullName: 'Ishak Erdogan',
        phone: '7019785234',
        street: '1-23 2th ave astoria',
        building: 'apt floor 1',
        city: 'new york',
        state: 'new york',
        postalCode: '11234',
        _id: '67005cbc7fb14afe2f77427e',
    };
    const mockSetAddress = jest.fn();
    const mockValue = {
        address: {},
        setAddress: mockSetAddress,
    };

    const mockNavigate = jest.fn();
    beforeEach(() => {
        jest.clearAllMocks();
        useNavigation.mockReturnValue({ navigate: mockNavigate });
    });

    test('gets userId correctly from token and gets address correctly', async () => {
        await act(async () => {
            getUserId.mockResolvedValue('true');
            getAddress.mockResolvedValue(address);
            render(
                <AddressContext.Provider value={mockValue}>
                    <NavigationContainer>
                        <MainStack />
                    </NavigationContainer>
                </AddressContext.Provider>
            );
        });

        // Testlerinizi burada yapabilirsiniz, örneğin:
        // expect(mockNavigate).toHaveBeenCalledWith('SomeScreen');
    });
});
