import { View, Text, TextInput } from "react-native"
import { useEffect, useContext, useState, useCallback } from "react"
import { getOrders } from "../../services/OrderService"
import { getUserId } from "../../utils/AsyncStorage"
import { ScrollView } from "react-native-gesture-handler"
import OrdersBox from "../../component/ordersBox/OrdersBox"
import styles from "./Style"
import AntDesign from '@expo/vector-icons/AntDesign';
import Octicons from '@expo/vector-icons/Octicons';
import { debounce } from 'lodash';

const Orders = () => {

    const [products, setProducts] = useState([])
    const [text, setText] = useState("")
    const [filteredProducts, setFilteredProducts] = useState([]);




    const debouncedFilter = useCallback(

        debounce((text) => {
            console.log("kara",text)  
            const filtered = products.filter((product) =>
                product.name.toLowerCase().includes(text.toLowerCase())
            )
            
            setFilteredProducts(filtered)
       
            console.log("ishak",filtered)
     
        }, 300),
        [products]

    )


    useEffect(() => {
        console.log("asdf",text)
        debouncedFilter(text)
        console.log("1")

    }, [text,debouncedFilter])






    useEffect(() => {
        orders()
    }, [])

    const orders = async () => {
        const id = await getUserId()
        const data = await getOrders(id)
        const allProducts = data.reduce((acc, order) => {
            return [...acc, ...order.products]
        }, [])
        setProducts(allProducts)
        setFilteredProducts(allProducts)


    }


    return (
        <ScrollView contentContainerStyle={styles.container} >
            <View style={styles.subContainer}>
                <View style={styles.search}>
                    <AntDesign name="search1" size={24} color="#03a4b4" style={{ marginHorizontal: 10 }} />
                    <TextInput
                        style={{ flex: 1, height: "100%", }}
                        value={text}
                        onChangeText={(value) => setText(value)}
                        placeholder="Search All orders"
                    />
                </View>
                <View style={styles.filter}>
                    <Text style={styles.filterText}>Filter</Text>

                    <Octicons name="chevron-right" size={24} color="black" style={{ marginRight: 10 }} />
                </View>


            </View>
            {
                filteredProducts.map((product) => {
                    return (
                        <OrdersBox key={product._id} item={product} />
                    )
                })
            }

        </ScrollView>
    )
}

export default Orders    