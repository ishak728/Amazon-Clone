import React from 'react'
import { render,fireEvent } from '@testing-library/react-native'
import BottomAdressBox from '../../component/bottomAdressBox/BottomAdressBox'
import { AddressContext } from '../../contextApi/AddressContext'
describe("",()=>{

    const address={
		"country": "United State",
		"fullName": "Ishak Erdogan",
		"phone": "7019785234",
		"street": "1-23 2th ave astoria",
		"building": "apt floor 1",
		"city": "new york",
		"state": "new york",
		"postalCode": "11234",
		"_id": "67005cbc7fb14afe2f77427e"
	}
    const mockSetAddress=jest.fn()
    const mockValue={
        address:{},
        setAddress:mockSetAddress
    }

    test('renders correctly bottomAdressBox', () => { 
        const {getByTestId,getByText}=render(
            <AddressContext.Provider value={mockValue}>
                <BottomAdressBox item={address}/>
            </AddressContext.Provider>
        )

        expect(getByText(address.fullName)).toBeTruthy()
        expect(getByText(address.street)).toBeTruthy()
         expect(getByText(address.building+address.postalCode)).toBeTruthy()

     })

     test("calls setAddress when pressed",()=>{
        const {getByTestId,getByText}=render(
            <AddressContext.Provider value={mockValue}>
                <BottomAdressBox item={address}/>
            </AddressContext.Provider>

        )

        const button=getByTestId("button")
        expect(button).toBeTruthy()

        fireEvent.press(button)

        expect(mockSetAddress).toHaveBeenCalledTimes(1)
        expect(mockSetAddress).toHaveBeenCalledWith(address)


     })


}) 