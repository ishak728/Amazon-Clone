import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react-native'
import DealsBox from '../../component/dealsBox/DealsBox'
import { useNavigation } from '@react-navigation/native'

jest.mock('@react-navigation/native', () => ({
    useNavigation: jest.fn()

}))

describe("DealsBox", () => {
    const item = {
        id: "20",
        title: "OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)",
        oldPrice: 25000,
        price: 19000,
        image:
            "https://images-eu.ssl-images-amazon.com/images/G/31/wireless_products/ssserene/weblab_wf/xcm_banners_2022_in_bau_wireless_dec_580x800_once3l_v2_580x800_in-en.jpg",
        carouselImages: [
            "https://m.media-amazon.com/images/I/61QRgOgBx0L._SX679_.jpg",
            "https://m.media-amazon.com/images/I/61uaJPLIdML._SX679_.jpg",
            "https://m.media-amazon.com/images/I/510YZx4v3wL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/61J6s1tkwpL._SX679_.jpg",
        ],
        color: "Stellar Green",
        size: "6 GB RAM 128GB Storage",
        off: "%13",
        ratingValue: 4.5,
        ratingCount: 234

    }
    const mockNavigate = jest.fn()
    useNavigation.mockReturnValue({ navigate: mockNavigate })

    afterEach(() => {
        // jest.clearAllMocks() 
        mockNavigate.mockClear()
    })

    it("navigates to Detail screen with correct params on press", () => {


        const { getByText, debug, getByTestId } = render(<DealsBox item={item} />)

        const pressable = getByTestId("Pressable")
        // console.log(pressable.props)
        expect(pressable).toBeTruthy()
        fireEvent.press(pressable)
        expect(mockNavigate).toHaveBeenCalledWith("Detail", { item })


    })

    it("renders the image with the correct URL", () => {
        const { getByTestId } = render(<DealsBox item={item} />)
        const image = getByTestId("Image")
        expect(image).toBeTruthy()
        expect(image.props.source.uri).toBe(item.image)
    })

    it("renders correctly when isfromdeals prop is default", () => {


        const { getByTestId, getByText } = render(<DealsBox item={item} />)
        expect(getByText(`${item.off} off`)).toBeTruthy()
        expect(getByText("Limited Time Deal"))

        // console.log(mockNavigate.mock.calls)


    })

    it("renders correctly when isfromdeals prop is false", () => {


        const { getByTestId, getByText,queryByText } = render(<DealsBox item={item} isFromDeals={false} />)
        expect(getByText(`${item.title} `)).toBeTruthy()
        expect(getByText(`$${item.price} `)).toBeTruthy()
        expect(queryByText("Limited Time Deal")).toBeNull()

        // console.log(mockNavigate.mock.calls)


    })
})



















