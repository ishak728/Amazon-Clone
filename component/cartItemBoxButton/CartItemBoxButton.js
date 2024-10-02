import { View,Text, TouchableOpacity } from "react-native"
 

const CartItemBoxButton = ({name,handle}) => {
    return (
        <TouchableOpacity style={{ borderWidth: 2, borderRadius: 20, backgroundColor: "#ffffff", margin: 5,borderColor:"#888c8c",padding:10,paddingHorizontal:15 }}
        onPress={()=>{handle()}}
        >
            <Text>
                {name}
            </Text>
        </TouchableOpacity>
    )
}
export default CartItemBoxButton