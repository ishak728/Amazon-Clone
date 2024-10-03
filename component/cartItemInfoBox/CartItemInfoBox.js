import { View, Image, Text, Pressable } from "react-native"
import { useDispatch } from "react-redux"
import { addToCart } from "../../redux/slices/CartSlice"
import styles from "./Style"
import { TouchableOpacity } from "react-native-gesture-handler"



const CartItemInfoBox = ({ item, isFromFavorites }) => {
    const dispatch = useDispatch()

    const add = () => {
        dispatch(addToCart({...item,quantity:1}))

    }

    return (
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <View style={isFromFavorites ? styles.imageContainerFromFavorites : styles.imageContainerFromCart}>
                {/* for image */}
                <Image
                    source={{ uri: item.image }}
                    style={{ height: 300 }}//no width
                    resizeMode="contain"
                />

            </View>
            <View style={isFromFavorites ? styles.infoContainerFromFavorites : styles.infoContainerFromCart}>
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

                    {
                        isFromFavorites &&
                        <TouchableOpacity onPress={() => { add() }}>
                            <View style={{ backgroundColor: "#ffd815", padding: 10, borderRadius: 30, paddingHorizontal: 20, justifyContent: "center", alignItems: "center", marginVertical: 15 }} >

                                <Text>Add to Cart</Text>

                            </View>
                        </TouchableOpacity>
                    }
                </View>


            </View>
        </View>
    )
}

export default CartItemInfoBox