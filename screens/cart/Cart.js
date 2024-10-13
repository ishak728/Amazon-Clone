import { useEffect, useContext } from "react"
import { View, Text, Alert, Pressable, TouchableOpacity, Dimensions } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Line from "../../component/line/Line";
import CartItemBox from "../../component/cartItemBox/CartItemBox";
import { ScrollView } from "react-native-gesture-handler";
import { createOrder } from "../../services/OrderService";
import { getUserId } from "../../utils/AsyncStorage";
import { AddressContext } from "../../contextApi/AddressContext";
import { useNavigation } from "@react-navigation/native";
import { clearCart, removeItem } from "../../redux/slices/CartSlice";
import { Swipeable } from 'react-native-gesture-handler';
import { addItemToFavorites } from "../../redux/slices/FavoriteItemSlice";
import Ionicons from '@expo/vector-icons/Ionicons';


const Cart = () => {
    const cart = useSelector((state) => state.cart.cart)
    const dispatch = useDispatch()
    const navigation = useNavigation()
    let userId = null
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const { address } = useContext(AddressContext)

    const { width } = Dimensions.get("window")






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


    const remove = (item) => {
        dispatch(removeItem(item))
    }


    const save = (item) => {
        dispatch(addItemToFavorites(item))
        remove(item)
    }

    const renderRightActions = (item) => {
        return (
            <TouchableOpacity onPress={() => { save(item) }} style={{
                backgroundColor: '#e2e5e4',
                justifyContent: 'center',
                alignItems: 'flex-end',

                paddingRight: 20,
            }}>



                <Text style={{ color: "#111111", paddingHorizontal: 30, fontWeight: "bold" }}>
                    Save for later
                </Text>

            </TouchableOpacity>
        );
    };


    const renderLeftActions = (item) => {
        return (

            <TouchableOpacity onPress={() => { remove(item) }} style={{
                backgroundColor: '#c40103',
                justifyContent: 'center',
                alignItems: 'flex-end',

                paddingRight: 20,
            }}>
                <Text style={{ color: "#f7fcff", paddingHorizontal: 30, fontWeight: "bold" }}>
                    Delete
                </Text>
            </TouchableOpacity>

        );
    };



    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: "#ffffff", padding: 10, paddingBottom: 100 }}>


            <Text style={{ fontSize: 20 }}>Subtotal{" "}
                <Text style={{ fontWeight: "bold" }}>${subtotal}</Text>
            </Text>

            {subtotal >= 35 ? (
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
            ) : (

                <View style={{ flexDirection: "row", marginTop: 10, }}>
                   
                    <Ionicons style={{ marginRight: 10 }} name="alert-circle" size={24} color="#007185" />

                    <Text style={{ color: "#c45504" }}>
                        <Text style={{ color: "black" }}>Add </Text>
                        ${35 - subtotal}{" "}
                        <Text style={{ color: "black" }}>
                            of eligible items to your order to qualify for FREE Shipping.{" "}

                        </Text>
                        <TouchableOpacity onPress={() => { }}>
                            <Text style={{ color: "#007185" }}>
                                See details
                            </Text>
                        </TouchableOpacity>

                    </Text>

                </View>
            )}

            <View style={{ backgroundColor: "#ffd815", padding: 10, borderRadius: 30, paddingVertical: 15, justifyContent: "center", alignItems: "center", marginVertical: 15 }} >
                <TouchableOpacity onPress={() => { proceed() }}>
                    <Text> Proceed to checkout({cart.length} items)</Text>

                </TouchableOpacity>

            </View>
            <Line />

            {
                cart.map((item) => {
                    return (
                        <Swipeable
                            key={item.id}
                            renderRightActions={() => renderRightActions(item)}
                            renderLeftActions={() => renderLeftActions(item)}

                        >

                            <CartItemBox key={item.id} item={item} />

                        </Swipeable>

                    )
                })
            }


        </ScrollView>
    )
}

export default Cart