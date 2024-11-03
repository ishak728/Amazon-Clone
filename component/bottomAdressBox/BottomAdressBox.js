import { View, Text, TouchableOpacity } from "react-native"
import React, { useContext,useEffect } from 'react';
import { AddressContext } from "../../contextApi/AddressContext"


const BottomAdressBox = ({ item,testId="button" }) => {

    const { address, setAddress } = useContext(AddressContext)

  


    useEffect(() => { 
       if(  address._id){
        console.log("ad",address._id)
         
  
       }
    }, [address])

 


    return (
        <TouchableOpacity testID={testId} onPress={() => { setAddress(item) }} >
            <View style={{ borderWidth: 2, padding: 5, marginRight: 10, width: 140, height: 140, borderColor: item._id === address._id  ? "orange" : "#a2a6ab", backgroundColor: item._id  === address._id  ? "#fef8f2" : "#fdfdfd" }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.fullName}</Text>
                <Text>{item.street}</Text>
                <Text>{item.building}{item.postalCode}</Text>
            </View>


        </TouchableOpacity>
    )
}

export default BottomAdressBox