import { useEffect, useContext } from "react"
import { View, Text, Alert, Pressable, TouchableOpacity } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Line from "../../component/line/Line";
import CartItemBox from "../../component/cartItemBox/CartItemBox";
import { ScrollView } from "react-native-gesture-handler";
import { createOrder } from "../../services/OrderService";
import { getUserId } from "../../utils/AsyncStorage";
import { AddressContext } from "../../contextApi/AddressContext";
import { useNavigation } from "@react-navigation/native";
import { clearCart } from "../../redux/slices/CartSlice";


const Cart = () => {
    const cart = useSelector((state) => state.cart.cart)
    const dispatch = useDispatch()
    const navigation = useNavigation()
    let userId = null
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const { address } = useContext(AddressContext)




    const proceed = async () => {
        userId = await getUserId()

        const products = cart.map((item) => ({
            name: item.title,
            quantity: item.quantity,
            price: item.price,
            image: item.image
        }))

        try {
            const data = await createOrder(userId, products, subtotal, address)
            Alert.alert(data.message)
            dispatch(clearCart())
            navigation.goBack()
        } catch (error) {
            Alert.alert(error)
        }



    }



    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: "#ffffff", padding: 10, paddingBottom: 100 }}>


            <Text style={{ fontSize: 20 }}>Subtotal{" "}
                <Text style={{ fontWeight: "bold" }}>${subtotal}</Text>
            </Text>

            <View style={{ flexDirection: "row", marginTop: 10 }}>
                <FontAwesome style={{ marginRight: 10 }} name="check-circle" size={24} color="green" />
                <Text style={{ color: "green" }}>
                    Your order qualifies for FREE Shipping.{" "}
                    <Text style={{ color: "black" }}>
                        Choose this option at checkout.{" "}

                    </Text>
                    <TouchableOpacity onPress={() => { }}>
                        <Text style={{ color: "#007185" }}>
                            See details
                        </Text>
                    </TouchableOpacity>
                </Text>


            </View>
            <View style={{ backgroundColor: "#ffd815", padding: 10, borderRadius: 30, paddingVertical: 15, justifyContent: "center", alignItems: "center", marginVertical: 15 }} >
                <TouchableOpacity onPress={() => { proceed() }}>
                    <Text> Proceed to checkout({cart.length} items)</Text>

                </TouchableOpacity>

            </View>
            <Line />

            {
                cart.map((item) => {
                    return (
                        <CartItemBox key={item.id} item={item} />
                    )
                })
            }


        </ScrollView>
    )
}

export default Cart