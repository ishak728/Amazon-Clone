import { View, Text, Pressable, Modal, ScrollView, Dimensions, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Alert } from "react-native"
import styles from "./Style"
import { useEffect, useState } from "react"
import Ionicons from '@expo/vector-icons/Ionicons';
import QuantitySelector from "../../component/quantitySelector/QuantitySelector"


import axios from "axios";
import { addAddress } from "../../services/UserService";
import { useNavigation } from "@react-navigation/native";
import { getUserId } from "../../utils/AsyncStorage";

const DetailAddress = () => {
    const { width } = Dimensions.get("window")
    const navigation=useNavigation()
    const [country, setCountry] = useState(null)
    const [fullName, setFullName] = useState(null)
    const [phone, setPhone] = useState(null)
    const [streetAdd, setStreetAdd] = useState(null)
    const [building, setBuilding] = useState(null)
    const [city, setCity] = useState(null)
    const [state, setState] = useState(null)
    const [zipCode, setZipCode] = useState(null)






    const add = async () => {
  

        if (country && fullName && phone && streetAdd && city && state && zipCode) {
            const userId = await getUserId()

            const address = {
                country, fullName, phone, street:streetAdd, building, city, state,postalCode: zipCode
            }

            try {
                const data=await addAddress(userId,address)

                Alert.alert(data.message)
                navigation.goBack()

            


            } catch (error) {
                console.log("errror1",error) 
                Alert.alert("Error", error)
            }
        }else{
            console.log("empty infos")
        }



    }






    return (

        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
        >

            <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 10, backgroundColor: "#ffffff" }}>
                <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>Add a new address</Text>

                {/* add modal like dropdown menu */}

                <QuantitySelector state={country} setState={setCountry} isFromAddress={true} isCountry={true} />

                <View style={{ marginVertical: 10 }}>
                    <Text style={styles.title}>Full name(First and Last name)</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", borderWidth: 1, borderColor: "#aaaaaa", padding: 10 }}>
                        <TextInput
                            value={fullName}
                            onChangeText={(value) => { setFullName(value) }}
                            style={{ flex: 1 }}
                        >

                        </TextInput>

                        {
                            fullName && (
                                <Pressable onPress={() => { setFullName("") }}>
                                    <Ionicons name="close" size={24} color="black" />
                                </Pressable>
                            )
                        }


                    </View>
                </View>

                <View style={{ marginVertical: 10 }}>
                    <Text style={styles.title}>Phone number</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", borderWidth: 1, borderColor: "#aaaaaa", padding: 10 }}>
                        <TextInput
                            value={phone}
                            onChangeText={(value) => { setPhone(value) }}
                            style={{ flex: 1 }}
                            keyboardType="phone-pad"
                        >

                        </TextInput>
                        {phone && (
                            <Pressable onPress={() => setPhone("")}>
                                <Ionicons name="close" size={24} color="black" />
                            </Pressable>
                        )}

                    </View>
                </View>




                {/* use location */}


                <View style={{ marginVertical: 10 }}>
                    <Text style={styles.title}>Address</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", borderWidth: 1, borderColor: "#aaaaaa", padding: 10, borderBottomWidth: 0 }}>
                        <TextInput
                            value={streetAdd}
                            placeholder="Street address or P.O. Box"
                            onChangeText={(value) => { setStreetAdd(value) }}
                            style={{ flex: 1 }}
                        >

                        </TextInput>
                        {streetAdd && (
                            <Pressable onPress={() => setStreetAdd("")}>
                                <Ionicons name="close" size={24} color="black" />
                            </Pressable>
                        )}

                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", borderWidth: 1, borderColor: "#aaaaaa", padding: 10 }}>
                        <TextInput
                            value={building}
                            placeholder="Apt,Suite,Unit,Building(optional)"
                            onChangeText={(value) => { setBuilding(value) }}
                            style={{ flex: 1 }}
                        >

                        </TextInput>
                        {building && (
                            <Pressable onPress={() => setBuilding("")}>
                                <Ionicons name="close" size={24} color="black" />
                            </Pressable>
                        )}

                    </View>
                </View>

                <View style={{ marginVertical: 10 }}>
                    <Text style={styles.title}>City</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", borderWidth: 1, borderColor: "#aaaaaa", padding: 10 }}>
                        <TextInput
                            value={city}
                            onChangeText={(value) => { setCity(value) }}
                            style={{ flex: 1 }}
                        >

                        </TextInput>
                        {city && (
                            <Pressable onPress={() => setCity("")}>
                                <Ionicons name="close" size={24} color="black" />
                            </Pressable>
                        )}

                    </View>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ width: width * 0.4, }}>
                        <Text style={styles.title}>State</Text>
                        <QuantitySelector state={state} setState={setState} isFromAddress={true} />
                    </View>

                    <View style={{ width: width * 0.4, }}>
                        <Text style={styles.title}>ZIP Code</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", borderWidth: 1, borderColor: "#aaaaaa", padding: 10 }}>
                            <TextInput
                                value={zipCode}
                                onChangeText={(value) => { setZipCode(value) }}
                                style={{ flex: 1 }}
                                keyboardType="numeric"
                            >

                            </TextInput>
                            {zipCode && (
                                <Pressable onPress={() => setZipCode("")}>
                                    <Ionicons name="close" size={24} color="black" />
                                </Pressable>
                            )}

                        </View>
                    </View>


                </View>

                <TouchableOpacity
                    onPress={() => { add() }}>
                    <View style={{ backgroundColor: "#ffd815", padding: 10, borderRadius: 30, flexDirection: "row", paddingVertical: 20, justifyContent: "center", alignItems: "center", marginVertical: 15 }} >

                        <Text>Add address</Text>



                    </View>
                </TouchableOpacity>



            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default DetailAddress