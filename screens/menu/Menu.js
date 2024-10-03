import { useEffect } from "react"
import { View, Text, Alert, Pressable } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Line from "../../component/line/Line";
import CartItemBox from "../../component/cartItemBox/CartItemBox";
import { ScrollView } from "react-native-gesture-handler";
import CartItemInfoBox from "../../component/cartItemInfoBox/CartItemInfoBox";


const Menu = () => {
    const favorites = useSelector((state) => state.favorites.favoriteItems)
 
 

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: "#ffffff", padding: 10, paddingBottom: 100 }}>
           
           <Text style={{margin:10,fontWeight:"bold"}}>
            Saved Items
           </Text>
  
                

                {
                    favorites.map((item)=>{
                        return(
                            <CartItemInfoBox item={item} isFromFavorites={true} />
                            
                        )
                    })
                }

           
        </ScrollView>
    )
}

export default Menu