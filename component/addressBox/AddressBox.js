import { View, Text, Dimensions } from "react-native"
import Line from "../line/Line"
import CartItemBoxButton from "../cartItemBoxButton/CartItemBoxButton"
 


const AddressBox = ({ item }) => {
    const { width } = Dimensions.get("window")

    const edit=()=>{
console.log("adsf")
    }
    const remove=()=>{
        
    }

    return (
        <View style={{ borderColor: "#c7c7c7", borderWidth: 2, marginBottom: 5, padding: 10 }}>
            <View style={{ flexDirection: "row" }}>
                <Text>Default:</Text>
                <Text>IMAGE</Text>

            </View>
            <Line />
            <View style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.fullName}</Text>
                <Text>{item.street}</Text>
                <Text>{item.building}{item.postalCode}</Text>
                <Text>{item.country}</Text>
                <Text >Phone number: +{item.phone}</Text>
                

                <View style={{flexDirection:"row",width:width*0.5}}>
                    <View style={{flex:1}}>
                        <CartItemBoxButton name={"Edit"} handle={edit} />
                    </View>
                    <View style={{flex:1}}>
                        <CartItemBoxButton name={"Remove"} handle={remove}/>
                    </View>

                </View>



            </View>




        </View>
    )
}
export default AddressBox








