import { Dimensions, View, Image, Text, Alert, Pressable } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import CartItemBoxButton from "../cartItemBoxButton/CartItemBoxButton"
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useDispatch, useSelector } from "react-redux";
import { decrementQuantity, incrementQuantity, removeItem } from "../../redux/slices/CartSlice";
import { useEffect } from "react";

const CartItemBox = ({ item }) => {
    const { width } = Dimensions.get("window")
    const dispatch=useDispatch()
    const cart=useSelector((state)=>state.cart.cart)

    const deleteItem = () => {
        Alert.alert("clickerdd")
    }
    const saveItem = () => {
        Alert.alert("clickerdd")
    }
    const compare = () => {
        Alert.alert("clickerdd")
    }
    const share = () => {
        Alert.alert("clickerdd")
    }
    const increase  = () => {
        dispatch(incrementQuantity(item))
        Alert.alert("clickerdd")
    }
    const decrease = (quantity) => {

        if(quantity===1){
            dispatch(removeItem(item)) 
        }else{
            dispatch(decrementQuantity(item))
        }
       
        Alert.alert("clickerdd")
    }

    useEffect(()=>{
        console.log("cartttt!!",cart)    
    },[cart])

    return (
        <View style={{ backgroundColor: "#f8f9fa", marginBottom: 20, }}>
            <View style={{ flexDirection: "row", }}>
                <View style={{ flex: 2, }}>
                    {/* for image */}
                    <Image
                        source={{ uri: item.image }}
                        style={{ height: 300 }}//no width
                        resizeMode="contain"
                    />

                </View>
                <View style={{ flex: 4, }}>
                    {/* infos */}

                    <View style={{ margin: 10, }}>
                        <Text style={{ fontSize: 18, marginTop: 10 }}>{item.title}</Text>
                        <Text style={{ fontWeight: "bold", marginTop: 10, fontSize: 30 }}>${item.price}</Text>
                        <Text style={{ fontSize: 15, color: "black", fontWeight: "bold", marginTop: 10 }}>
                            Size:
                            <Text style={{ fontWeight: "400" }}>{item.size}
                            </Text>
                        </Text>

                        <Text style={{ fontSize: 15, color: "black", fontWeight: "bold", marginTop: 5 }}>
                            Color:
                            <Text style={{ fontWeight: "400" }}>{item.color}
                            </Text>
                        </Text>

                    </View>
                </View>
            </View>

            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                {/* for buttons  view style will be wrap */}
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 10, overflow: 'hidden', backgroundColor: '#f1f2f2', width: width * 0.35 }}>


                    <Pressable onPress={()=>{decrease(item.quantity)}} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ebecef', paddingVertical: 10, borderWidth: 1, borderColor: '#d5d9d9' }}>

                        {
                            item.quantity === 1 ? <MaterialIcons name="delete-outline" size={24} color="black" /> : <AntDesign name="minus" size={24} color="black" />
                        }


                    </Pressable>


                    <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', paddingVertical: 10, borderWidth: 1, borderColor: '#d5d9d9' }}>
                        <Text style={{ fontSize: 18, color: '#0e7184' }}>{item.quantity}</Text>
                    </View>


                    <Pressable onPress={()=>{increase()}} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ebecef', paddingVertical: 10, borderWidth: 1, borderColor: '#d5d9d9' }}>
                        <Feather name="plus" size={24} color="black" />
                    </Pressable>

                </View>

                <CartItemBoxButton name={"Delete"} handle={deleteItem} />
                <CartItemBoxButton name={"Save for later"} handle={saveItem} />
                <CartItemBoxButton name={"Compare with similar items"} handle={compare} />
                <CartItemBoxButton name={"Share"} handle={share} />





            </View>

        </View>
    )
}
export default CartItemBox