import { useRoute } from "@react-navigation/native"
import { useEffect, useState } from "react";
import { View, Text, Image, Dimensions, Pressable, Alert, Modal, StyleSheet, TouchableOpacity } from "react-native"
import { ScrollView, TouchableWithoutFeedback } from "react-native-gesture-handler"
import { Rating } from 'react-native-ratings';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Line from "../../component/line/Line";
import Ionicons from '@expo/vector-icons/Ionicons';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import QuantitySelector from "../../component/quantitySelector/QuantitySelector";
import DealsBox from "../../component/dealsBox/DealsBox";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slices/CartSlice";
import { addItemToFavorites, removeItemFromFavorites } from "../../redux/slices/FavoriteItemSlice";
import Fontisto from '@expo/vector-icons/Fontisto';
//i will change circle of the SwiperFlatlist

const Detail = () => {
    const route = useRoute()
    const item = route.params.item
    const [index, setIndex] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedQuantity, setSelectedQuantity] = useState(1)
    const { width } = Dimensions.get("window")
    const [isFavorited, setIsFavorited] = useState(false)
    const cart = useSelector((state) => state.cart.cart)
    const favorites = useSelector((state) => state.favorites.favoriteItems)
    const dispatch = useDispatch()

    useEffect(() => {
        isFavoritedItem()

    }, [])

    useEffect(() => {

        console.log("isfavorited::::", isFavorited)

    }, [isFavorited])

    useEffect(() => {

        console.log("favorites::::", favorites)

    }, [favorites])

    const isFavoritedItem = () => {
        const isFav = favorites.some((favItem) => favItem.id === item.id)
        setIsFavorited(isFav)
    }





    const renderPagination = (index) => {

        return (
            <View style={{ position: 'absolute', bottom: 10, flexDirection: 'row', alignSelf: "center" }}>
                {
                    item.carouselImages.map((_, i) => (
                        <View key={item.id} style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: index === i ? "#000000" : "#cdcdcd", margin: 4 }} />
                    )
                    )
                }
            </View>
        )
    };



    const explainTypicalPrice = () => {
        // TODO:i will show this with bottomSheet later
        Alert.alert("This is determined using the 90-day median price paid by customers for the product on Amazon. We exclude prices paid by customers for the product during a limited time deal.")
    }
    const explainFreeReturns = () => {
        // TODO:i will show this with bottomSheet later
        Alert.alert("This is determined using the 90-day median price paid by customers for the product on Amazon. We exclude prices paid by customers for the product during a limited time deal.")
    }
    const explainFreeDelivery = () => {
        // TODO:i will show this with bottomSheet later
        Alert.alert("This is determined using the 90-day median price paid by customers for the product on Amazon. We exclude prices paid by customers for the product during a limited time deal.")
    }
    const explainPrimeMember = () => {
        // TODO:i will show this with bottomSheet later
        Alert.alert("This is determined using the 90-day median price paid by customers for the product on Amazon. We exclude prices paid by customers for the product during a limited time deal.")
    }

    const add = () => {
        dispatch(addToCart({...item,quantity:selectedQuantity}))

    }
    const buyNow = () => {
        Alert.alert("saved")
    }

    const saveToFavorites = () => {
        dispatch(addItemToFavorites(item))
        setIsFavorited(true)
    }
    const removeFromFavorites = () => {
        dispatch(removeItemFromFavorites(item))
        setIsFavorited(false)
    }

    const share = () => {
        Alert.alert("shared")
    }


    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: "#ffffff", padding: 10, paddingBottom: 100 }}>
            <View style={{ marginBottom: 30 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 5 }}>
                    <Text style={{ color: "#007185" }}>Visit The Amazon Basics Store</Text>


                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <Rating
                            ratingColor="#FFD700"
                            type="star"
                            startingValue={item.ratingValue}
                            imageSize={10}
                            readonly={true}
                        />
                        <Text style={{ color: "#636464", fontSize: 12 }}> ({item.ratingCount})</Text>
                    </View>

                </View>
                <Text style={{ color: "#636464" }} >{item.title}</Text>
            </View>
            <View >
                <SwiperFlatList
                    // autoplay
                    // autoplayDelay={2}
                    // paginationStyle={{ position: 'absolute', bottom: 1, }}  
                    // paginationActiveColor="black"  

                    autoplayLoop
                    index={2}
                    onChangeIndex={({ index }) => setIndex(index)}
                    // showPagination//shows circle
                    data={item.carouselImages}
                    renderItem={({ item: imageItem }) => {
                        console.log(imageItem)
                        return (
                            <TouchableWithoutFeedback >
                                <Image
                                    source={{ uri: imageItem }}
                                    style={{ width: width, height: 300 }}
                                    resizeMode="cover"
                                />
                            </TouchableWithoutFeedback>
                        )
                    }

                    }
                // paginationStyleItemActive={{backgroundColor:"black",width:10,height:10,borderRadius:5}}
                // paginationStyleItemInactive={{backgroundColor:"#cdcdcd",width:10,height:10,borderRadius:5}}


                />
                {renderPagination(index)}

                <View style={{ flexDirection: "row", position: "absolute", bottom: 10, alignSelf: "flex-end" }}>
                    {isFavorited ?
                        <Pressable onPress={removeFromFavorites}>
                            <Fontisto name="heart" size={24} color="black" style={{ marginHorizontal: 20 }} />
                        </Pressable> :

                        <Pressable onPress={saveToFavorites}>
                            <AntDesign name="hearto" size={24} color="black" style={{ marginHorizontal: 20 }} />
                        </Pressable>
                    }

                    <Pressable onPress={share}>
                        <Entypo name="share-alternative" size={24} color="black" />
                    </Pressable>
                </View>
            </View>
            <Line />
            <Text style={{ color: "black", fontWeight: "500" }}> Color: <Text style={{ color: "black", fontWeight: "bold" }}>{item.color}</Text></Text>
            <Line />
            <Text style={{ color: "black", fontWeight: "500" }}> Size: <Text style={{ color: "black", fontWeight: "bold" }}>{item.size}</Text></Text>
            <Line />

            <Text style={{ backgroundColor: "#cc0d39", width: 140, padding: 7, color: "white", fontWeight: "500", marginBottom: 10 }}>Limited time deal</Text>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: "#cc0d39", fontWeight: "300", fontSize: 40 }}>-{item.off}</Text>
                <Text style={{ color: "black", fontWeight: "bold", fontSize: 30 }}>${item.price}</Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: "#565959", fontWeight: "300", marginRight: 5 }}>Typical price: <Text style={{ color: "#565959", fontWeight: "300", marginRight: 5, textDecorationLine: 'line-through' }}>${item.oldPrice}</Text>  </Text>
                <Pressable onPress={explainTypicalPrice}>
                    <Ionicons name="alert-circle" size={24} color="#969696" />
                </Pressable>

            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: "black", fontWeight: "bold", marginRight: 10 }}>0% claimed</Text>
                <Line />
            </View>

            <Pressable onPress={explainFreeReturns}>
                <Text style={{ color: "#007185", marginBottom: 10 }}> Free Returns</Text>
            </Pressable>

            <Text style={{ marginBottom: 10 }}>
                <Pressable onPress={explainFreeDelivery}>
                    <Text style={{ color: "#007185" }}> FREE delivery</Text>
                </Pressable>
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                    {" "}Saturday, October 14{" "}
                </Text>
                on orders shipped by Amazon over $35
            </Text>

            <View style={{ flexDirection: "row", marginBottom: 3 }}>
                <Text style={{}}>
                    Or
                </Text>
                <Pressable style={{}} onPress={explainPrimeMember}>
                    <Text style={{ color: "#007185" }}> Prime members</Text>
                </Pressable>

                <Text style={{}}>
                    get FREE delivery
                </Text>


            </View>

            <Text style={{ marginBottom: 10, }}>

                <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                    Tomorrow, October 10.
                </Text>
                Order within
                <Text style={{ fontSize: 15, color: "green" }}>
                    {" "}37 mins
                </Text>

            </Text>

            <View style={{ flexDirection: "row", marginBottom: 20 }}>
                <EvilIcons name="location" size={24} color="black" />
                <Pressable>
                    <Text style={{ color: "#007185" }}>
                        Deliver to ishak -Astoria 11102
                    </Text>
                </Pressable>

            </View>




            <QuantitySelector selectedQuantity={selectedQuantity} setSelectedQuantity={setSelectedQuantity} />

            <TouchableOpacity
                onPress={() => { add() }}>
                <View style={{ backgroundColor: "#ffd815", padding: 10, borderRadius: 30, flexDirection: "row", paddingVertical: 20, justifyContent: "center", alignItems: "center", marginVertical: 15 }} >

                    <Text>Add to Cart</Text>



                </View>
            </TouchableOpacity>


            <TouchableOpacity
                onPress={() => { buyNow() }}>
                <View style={{ backgroundColor: "#ffa31b", padding: 10, borderRadius: 30, flexDirection: "row", paddingVertical: 20, justifyContent: "center", alignItems: "center" }} >

                    <Text>Buy Now</Text>



                </View>

            </TouchableOpacity>




        </ScrollView>
    )
}
export default Detail
