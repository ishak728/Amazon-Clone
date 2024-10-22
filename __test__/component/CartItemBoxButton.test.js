import React from "react"
import { render, fireEvent } from "@testing-library/react-native"
import CartItemBoxButton from "../../component/cartItemBoxButton/CartItemBoxButton"


describe("CartItemBoxtButton", () => {
    it("renders correctly and respond to button press ", () => {
        const mockHandle = jest.fn()

        const { getByText, getByTestId,debug } = render(<CartItemBoxButton name={"click"} handle={mockHandle} />)

        const button = getByTestId("button")

        expect(button).toBeTruthy()
        expect(getByText("click")).toBeTruthy

        fireEvent.press(button)

        expect(mockHandle).toHaveBeenCalledTimes(1)
        expect(button).toHaveStyle({ borderWidth: 2, borderRadius: 20, backgroundColor: "#ffffff", margin: 5 })

        // debug()
    })

    it("renders correctly when name is empty", () => {
        const mockHandle = jest.fn()

        const { getByTestId, getByText } = render(<CartItemBoxButton name={""} handle={mockHandle} />)

        expect(getByText("")).toBeTruthy


    })
})











