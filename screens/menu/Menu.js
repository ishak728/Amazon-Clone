import { useEffect } from "react"
import { View, Text, Alert, Pressable, Button, TouchableOpacity } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Line from "../../component/line/Line";
import CartItemBox from "../../component/cartItemBox/CartItemBox";
import { ScrollView } from "react-native-gesture-handler";
import CartItemInfoBox from "../../component/cartItemInfoBox/CartItemInfoBox";
import { Swipeable } from 'react-native-gesture-handler';
import { removeItemFromFavorites } from "../../redux/slices/FavoriteItemSlice";
import { addToCart } from "../../redux/slices/CartSlice";


const Menu = () => {
    const favorites = useSelector((state) => state.favorites.favoriteItems)
    const dispatch = useDispatch()


    const remove = (item) => {
        dispatch(removeItemFromFavorites(item))
    }

    const add = (item) => {
        dispatch(addToCart(item))
        remove(item)
    }

    const renderRightActions = (item) => {
        return (


            <TouchableOpacity onPress={() => { add(item) }} style={{
                backgroundColor: '#e2e5e4',
                justifyContent: 'center',
                alignItems: 'flex-end',

                paddingRight: 20,
            }}>
                <Text style={{ color: "#111111", paddingHorizontal: 30, fontWeight: "bold" }}>
                    Add to Cart
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

            <Text style={{ margin: 10, fontWeight: "bold" }}>
                Saved Items
            </Text>



            {
                favorites.map((item) => {
                    return (
                        <Swipeable
                            key={item.id}
                            renderRightActions={() => renderRightActions(item)}
                            renderLeftActions={() => renderLeftActions(item)}

                        >

                            <CartItemInfoBox item={item} isFromFavorites={true} />

                        </Swipeable>

                    )
                })
            }


        </ScrollView>
    )
}

export default Menu