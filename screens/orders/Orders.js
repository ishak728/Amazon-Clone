import { View, Text, TextInput } from "react-native"
import { useEffect, useContext, useState } from "react"
import { getOrders } from "../../services/OrderService"
import { getUserId } from "../../utils/AsyncStorage"
import { ScrollView } from "react-native-gesture-handler"
import OrdersBox from "../../component/ordersBox/OrdersBox"
import styles from "./Style"
import AntDesign from '@expo/vector-icons/AntDesign';
import Octicons from '@expo/vector-icons/Octicons';

const Orders = () => {

    const [products, setProducts] = useState()
    const [text, setText] = useState()



    useEffect(() => {
        orders()
    }, [])

    const orders = async () => {
        const id = await getUserId()
        const data = await getOrders(id)
        console.log(data)
        setProducts(data)
    }


    return (
        <ScrollView contentContainerStyle={styles.container} >
            <View style={styles.subContainer}>
                <View style={styles.search}>
                    <AntDesign name="search1" size={24} color="black" style={{ flex: 1 }} />
                    <TextInput
                        style={styles.textInput}
                        value={text}
                        onChangeText={(value) => setText(value)}
                        placeholder="Search All orders"
                    />
                </View>

                <Octicons name="chevron-right" size={24} color="black" style={{ flex: 3 }} />


            </View>


            {
                products?.map((orders) => {
                    return (
                        <View>

                            {
                                orders.products.map((product) => {
                                    return (
                                        <OrdersBox key={product._id} item={product} />
                                    )
                                })
                            }
                        </View>
                    )
                })
            }





        </ScrollView>
    )
}

export default Orders    