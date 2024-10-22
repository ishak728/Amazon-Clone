import React, { useState } from "react";
import { render, fireEvent } from "@testing-library/react-native";
import AccountInfoBox from "../../component/accountInfoBox/AccountInfoBox";

// describe("AccountInfoBox", () => {
//     it("renders correctly with title and updates state on text input", () => {
//         const title = "Password";
//         const { getByText, getByDisplayValue } = render(
//             <AccountInfoBox title={title} state={""} setState={() => {}} />
//         );


//         expect(getByText(title)).toBeTruthy();

//         const input = getByDisplayValue("");
//         expect(input).toBeTruthy();


//         const mockSetState = jest.fn();
//         const { getByTestId } = render(
//             <AccountInfoBox title={title} state={""} setState={mockSetState} />
//         );
//         const inputElement = getByTestId("textInput");

//         fireEvent.changeText(inputElement, "newPassword");


//         expect(mockSetState).toHaveBeenCalledWith("newPassword");
//     });
// });

const TestAccountInfoBox = () => {
    const [state, setState] = useState("")
    return (
        <AccountInfoBox
            title={"First and last name"}
            state={state}
            setState={setState}
        />
    )
}





describe("AccountInfoBox", () => {
    it("renders correctly first and last name", () => {



        const { getByText, getByDisplayValue, debug } = render(<TestAccountInfoBox />
        )

        const textInput = getByDisplayValue("")
        // console.log(textInput.type)
        expect(textInput).toBeTruthy()
        fireEvent.changeText(textInput, "ishak")
        expect(getByDisplayValue("ishak")).toBeTruthy()
        console.log(textInput.props.value)
        expect(textInput.props.value).toBe("ishak")

    })



    it("should show and hide the password when toggled", () => {

        const TestAccountInfoBox2 = () => {
            const [state, setState] = useState("12")
            return (
                <AccountInfoBox
                    title={"Create a password"}
                    state={state}
                    setState={setState}
                    isShowPassword={false}
                />
            )
        }

        const { getByText, getByDisplayValue, debug } = render(<TestAccountInfoBox2 />
        )

        const textInput = getByDisplayValue("12")
        // console.log(textInput.type)
        expect(textInput).toBeTruthy()
 
    
        expect(textInput.props.secureTextEntry).toBe(true) 
        expect(getByDisplayValue("12")).toBeTruthy()
       

        

    })
})













