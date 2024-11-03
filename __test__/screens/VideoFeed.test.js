import React from 'react';
import { render, act } from '@testing-library/react-native';
import VideoFeed from '../../screens/videoFeedScreen/VideoFeed';
import Home from '../../screens/home/Home';
import { useNavigation ,NavigationContainer} from '@react-navigation/native';
import { AddressContext } from '../../contextApi/AddressContext';
 
import { getAddress } from '../../services/UserService';
import { getUserId } from '../../utils/AsyncStorage';

jest.mock('@expo/vector-icons/Fontisto', () => 'Fontisto');
jest.mock('@expo/vector-icons/Entypo', () => 'Entypo');
jest.mock('@expo/vector-icons', () => ({
    Ionicons: 'Ionicons',
}));

jest.mock('@react-navigation/native', () => {
    const original = jest.requireActual('@react-navigation/native');
    return {
        ...original,
        useNavigation: jest.fn(),
    };
});

jest.mock('../../utils/AsyncStorage')
jest.mock('../../services/UserService')



describe('Homett', () => {

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
       
       
        getUserId.mockResolvedValue('true');

        getAddress.mockResolvedValue([address]);//! ******

    
        await act(async () => {
            const { getByTestId, debug } = render(
                <NavigationContainer>
                    <AddressContext.Provider value={mockValue}>
                        <Home />
                    </AddressContext.Provider>
                </NavigationContainer>
            );
        });

        await waitFor(() => {
            expect(mockNavigate).toHaveBeenCalledWith("Addresses")
          });
       

       

        // expect(mockNavigate).toHaveBeenCalledWith("Addresses")
    });
});
