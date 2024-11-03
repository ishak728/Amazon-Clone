import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SignUp from '../../screens/sign-up/SignUp'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createUser,verifyToken,signIn } from '../../services/UserService';
import { NavigationContainer } from '@react-navigation/native';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
 

jest.mock('@expo/vector-icons/FontAwesome', () => 'FontAwesome');
jest.mock('@expo/vector-icons/FontAwesome6', () => 'FontAwesome6');

// Mock the dependencies
jest.mock('@react-native-async-storage/async-storage');//unecessary
jest.mock('../../services/UserService');
jest.mock('@react-navigation/native', () => {
    const actualNav = jest.requireActual('@react-navigation/native');
    return {
        ...actualNav,
        useNavigation: jest.fn(), 
    };
});
 
describe('SignUp Screen', () => {

    const mockNavigate = jest.fn();
    beforeEach(() => {

        jest.clearAllMocks();
        useNavigation.mockReturnValue({ navigate: mockNavigate });

    });

    test('navigates to "MyTab" if token verification is successful',async()=>{
        AsyncStorage.getItem.mockResolvedValue("mockedToken")
        verifyToken.mockResolvedValue("mockedData")
    

        const { getByPlaceholderText, getByText, getByTestId } = render(
            <NavigationContainer>
                <SignUp />
            </NavigationContainer>
        ); 

        await waitFor(() => {
            expect(mockNavigate).toHaveBeenCalledWith("MyTab");

        });

    })

    test("does not navigate if token verification fails",async()=>{
        AsyncStorage.getItem.mockResolvedValue("mockedToken")
        verifyToken.mockResolvedValue("mockedData")

        await waitFor(()=>{
            expect(mockNavigate).not.toHaveBeenCalledWith("MyTab")
        }) 
    })

    test("shows an alert and does not navigate if user creation fails",async()=>{

        createUser.mockRejectedValue(new Error("user creation failed"))
        const alertSpy=jest.spyOn(Alert,"alert")

        const { getByPlaceholderText, getByText, getByTestId,debug } = render(
            <NavigationContainer>
                <SignUp />
            </NavigationContainer>
        );
        

        fireEvent.changeText(getByTestId("First and last name"),"jack john")
        fireEvent.changeText(getByTestId("Mobile number or email"),"jack@gmail.com")
        fireEvent.changeText(getByTestId("Create a password"),"12345678")

        const continueButton=getByTestId("continue")
        fireEvent.press(continueButton)

        await waitFor(()=>{  
            // console.log("-",createUser.mock.calls)
            expect(alertSpy).toHaveBeenCalledWith("Error"  )
            // console.log("-",alertSpy.mock.calls)
            expect(mockNavigate).not.toHaveBeenCalled 
        }) 

    })
    
    test("renders correctly the sign up component",async()=>{
        createUser.mockResolvedValue("mockedData")
        const alertSpy=jest.spyOn(Alert,"alert")

        const { getByPlaceholderText, getByText, getByTestId,debug } = render(
            <NavigationContainer>
                <SignUp />
            </NavigationContainer>
        );

        expect(getByText("Welcome")).toBeTruthy()
        expect(getByText("Create account New to Amazon?")).toBeTruthy()

        fireEvent.changeText(getByTestId("First and last name"),"jack john")
        fireEvent.changeText(getByTestId("Mobile number or email"),"jack@gmail.com")
        fireEvent.changeText(getByTestId("Create a password"),"12345678")

        const continueButton=getByTestId("continue")
        fireEvent.press(continueButton)
       

        await waitFor(()=>{  
            expect(createUser).toHaveBeenCalledWith('jack john', 'jack@gmail.com', '12345678');
            expect(alertSpy).toHaveBeenCalledWith("Thanks")
            // console.log("-",alertSpy.mock.calls)
            expect(mockNavigate).toHaveBeenCalledTimes(1)
        })
        
      
        
    })

    test("renders correctly the sign in componenet ",async()=>{
        signIn.mockResolvedValue({token:"mockedToken"})
        AsyncStorage.setItem.mockResolvedValue()
        AsyncStorage.getItem.mockResolvedValue("mockedToken")
        verifyToken.mockResolvedValue("mockedData")
        const email="jack@gmail.com"
        const password="12345678"

        const { getByPlaceholderText, getByText, getByTestId,debug,queryByText } = render(
            <NavigationContainer>
                <SignUp />
            </NavigationContainer>
        );

        const signInButton=getByText("Sign in Already a customer?")
        expect(signInButton).toBeTruthy()
        fireEvent.press(signInButton)
        expect(queryByText("First and last name")).toBeNull()
        fireEvent.changeText(getByTestId("Email or phone number"),email)
        fireEvent.changeText(getByTestId("Amazon password"),password)
        
        const continueButton=getByTestId("continue")
        fireEvent.press(continueButton)

        await waitFor(()=>{
            expect(signIn).toHaveBeenCalledWith(email,password)
            // console.log("1-",AsyncStorage.setItem.mock.calls)
            expect(AsyncStorage.setItem).toHaveBeenCalledWith("token","mockedToken")
            expect(verifyToken).toHaveBeenCalledWith("mockedToken")
            expect(mockNavigate).toHaveBeenCalledWith("MyTab")
        //   console.log(mockNavigate.mock.calls)
          expect(mockNavigate).toHaveBeenCalledTimes(2)
           
        })

    })
}); 
