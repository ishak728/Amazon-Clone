import { useEffect } from "react"
import { View, Text, Alert, Pressable, TouchableOpacity } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Line from "../../component/line/Line";
import CartItemBox from "../../component/cartItemBox/CartItemBox";
import { ScrollView } from "react-native-gesture-handler";


const Cart = () => {
    const cart = useSelector((state) => state.cart.cart)
    const dispatch = useDispatch()

    const subtotal = cart.reduce((total, item) => total + (item.price*item.quantity), 0);


    //  useEffect(()=>{
    //     console.log("changed cart screens::",cart[0].quantity)

    //  },[cart[0].quantity])

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
                    <Pressable onPress={() => { add() }}>
                        <Text> Proceed to checkout({cart.length} items)</Text>

                    </Pressable>

                </View>
                <Line />

                {
                    cart.map((item)=>{
                        return(
                            <CartItemBox key={item.id} item={item}/>
                        )
                    })
                }

           
        </ScrollView>
    )
}

export default Cart