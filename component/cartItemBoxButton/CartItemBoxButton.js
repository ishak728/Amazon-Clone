import { View,Text, TouchableOpacity } from "react-native"
 

const CartItemBoxButton = ({name,handle}) => {
    return (
        <TouchableOpacity testID="button" style={{ borderWidth: 2, borderRadius: 20, backgroundColor: "#ffffff", margin: 5,borderColor:"#888c8c",padding:5,paddingHorizontal:15 }} 
        onPress={()=>{handle()}}
        >
            <Text>
                {name}
            </Text>
        </TouchableOpacity>  
    )
}
export default CartItemBoxButton