import { View, Text, Dimensions } from "react-native"
import Line from "../line/Line"
import CartItemBoxButton from "../cartItemBoxButton/CartItemBoxButton"
import { AddressContext } from "../../contextApi/AddressContext"
import React, { useContext, useEffect } from 'react';



const AddressBox = ({ item }) => {
    const { width } = Dimensions.get("window")
    const { address, setAddress } = useContext(AddressContext)
    
    const edit = () => {
        console.log("adsf")
    }

    const remove = () => {

    }

    const setAsDefault = (item) => {
        console.log("setDefaultFunc",item)
        setAddress(item)

    }

    return (
        <View style={{ borderColor: "#c7c7c7", borderWidth: 2, marginBottom: 5, padding: 10 }}>
            <View style={{ flexDirection: "row" }}>
                <Text>Default:</Text>
                <Text>IMAGE</Text>

            </View>
            <Line />
            <View style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.fullName}</Text>
                <Text>{item.street}</Text>
                <Text>{item.building}{item.postalCode}</Text>
                <Text>{item.country}</Text>
                <Text >Phone number: +{item.phone}</Text>


                <View style={{ flexDirection: "row", }}>
                    <View style={{ flex: 2 }}>
                        <CartItemBoxButton name={"Edit"} handle={edit} />
                    </View>
                    <View style={{ flex: 2.3 }}>
                        <CartItemBoxButton name={"Remove"} handle={remove} />
                    </View>

                    {
                        address._id !== item._id && (
                            <View style={{ flex: 3 }}>
                                <CartItemBoxButton name={"Set as Default"} handle={() => setAsDefault(item)} />
                            </View>
                        )
                    }

                </View>



            </View>




        </View>
    )
}
export default AddressBox








