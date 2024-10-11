import { View, Text, Dimensions, Image } from "react-native"
import styles from "./Style"
import Line from "../line/Line"

const OrdersBox = ({ item }) => {



    return (


        <View>
            <View style={styles.subContainer}>
                {/* put image */}
                <Image
                    source={{ uri: item.image }}
                    style={styles.image}
                    resizeMode="container"
                />

                {/* put text info */}
                <View style={styles.infoContainer}>
                    <Text>{item.name}</Text>
                </View>
            </View>
            <Line/>
        </View>


    )
}
export default OrdersBox