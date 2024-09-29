import { useNavigation } from "@react-navigation/native"
import { Pressable, View, Image, Alert, Text } from "react-native"


const DealsBox = ({ item, isFromDeals = true }) => {
    const navigation=useNavigation()
    const handle = () => {
        navigation.navigate("Detail")
    }

    return (
        <Pressable
            onPress={handle}
            style={{ margin: 5 }}
        >
            <View>
                <Image
                    style={{ height: 200, width: 170 }}
                    source={{ uri: item.image }}

                />

                {isFromDeals ?
                    (<View style={{ flexDirection: "row", marginVertical: 10 }}>
                        <Text style={{ backgroundColor: "#cc0d39", padding: 2, marginRight: 5, }}>
                            {item.off} off
                        </Text>
                        <Text style={{ padding: 2, marginRight: 5, fontSize: 10, color: "#cc0d39", fontWeight: "bold" }}>
                            Limited Time Deal
                        </Text>

                    </View>) :

                    <View style={{  marginVertical: 10 }}>
                        <Text numberOfLines={1} 
                        ellipsizeMode="tail"
                         style={{ padding: 2, marginRight: 5, fontSize: 10 , fontWeight: "bold",width:170 }}>
                           {item.title}
                        </Text>
                        
                        <Text style={{ padding: 2, marginRight: 5, fontWeight:"500"}}>
                            ${item.price}
                        </Text>
                        

                    </View>
                }
            </View>
            
        </Pressable>
    )
}

export default DealsBox