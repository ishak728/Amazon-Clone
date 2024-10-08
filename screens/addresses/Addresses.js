import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native"
import Line from "../../component/line/Line"
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { getAddress } from "../../services/UserService";
import { getUserId } from "../../utils/AsyncStorage";
import AddressBox from "../../component/addressBox/AddressBox";
import { ScrollView } from "react-native-gesture-handler";




const Addresses = () => {
    const [addresses, setAddresses] = useState([])
    const [loading, setLoading] = useState(true)
    const navigation=useNavigation()

    const get = async () => {
         
        const userId = await getUserId()
        const addresses = await getAddress(userId) 
        setAddresses(addresses)
       
    }

    useEffect(()=>{
get()
    },[])

  useEffect(()=>{

    if(addresses){
        setLoading(false)
    }
  },[addresses])

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />; // Yükleniyor gösterimi
}


    return (

        <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 10,backgroundColor:"#ffffff" }}>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>Your Addresses</Text>
            <Line />
            <TouchableOpacity onPress={() => { navigation.navigate("DetailAddress") }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text>Add a new address</Text>
                    <Feather name="chevron-right" size={24} color="black" />

                    {/* <Text>Add a new address</Text> */}
                </View>
            </TouchableOpacity>
            <Line />
            <Line />
            <TouchableOpacity onPress={() => { }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text>Add a new pickup location</Text>
                    <Feather name="chevron-right" size={24} color="black" />

                    {/* <Text>Add a new address</Text> */}
                </View>
            </TouchableOpacity>
            <Line />
            <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom:15 }}>Personal Addresses</Text>

            {
                addresses.length > 0 ? (
                    addresses.map((item, i) => (
                        <AddressBox key={i} item={item} />
                    ))
                ) : (
                    <Text>No addresses found.</Text>
                )
            }


        </ScrollView>
    )
}

export default Addresses