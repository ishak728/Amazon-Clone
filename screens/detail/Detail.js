import { useRoute } from "@react-navigation/native"
import { useEffect, useState } from "react";
import { View, Text, Image, Dimensions, Pressable, Alert, Modal, StyleSheet } from "react-native"
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
//i will change circle of the SwiperFlatlist

const Detail = () => {
    const route = useRoute()
    const item = route.params.item
    const [index, setIndex] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedQuantity, setSelectedQuantity] = useState(1)
    const { width } = Dimensions.get("window")

    const cart=useSelector((state)=>state.cart.cart)
    const dispatch=useDispatch()
    
    useEffect(()=>{

        console.log("asdcart...",cart)
    },[cart])


    const offers = [
        {
            id: "20",
            title: "OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)",
            oldPrice: 25000,
            price: 19000,
            image:
                "https://images-eu.ssl-images-amazon.com/images/G/31/wireless_products/ssserene/weblab_wf/xcm_banners_2022_in_bau_wireless_dec_580x800_once3l_v2_580x800_in-en.jpg",
            carouselImages: [
                "https://m.media-amazon.com/images/I/61QRgOgBx0L._SX679_.jpg",
                "https://m.media-amazon.com/images/I/61uaJPLIdML._SX679_.jpg",
                "https://m.media-amazon.com/images/I/510YZx4v3wL._SX679_.jpg",
                "https://m.media-amazon.com/images/I/61J6s1tkwpL._SX679_.jpg",
            ],
            color: "Stellar Green",
            size: "6 GB RAM 128GB Storage",
            off: "%13",
            ratingValue: 4.5,
            ratingCount: 234

        },
        {
            id: "30",
            title:
                "Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage) with No Cost EMI & Additional Exchange Offers",
            oldPrice: 74000,
            price: 26000,
            image:
                "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Samsung/SamsungBAU/S20FE/GW/June23/BAU-27thJune/xcm_banners_2022_in_bau_wireless_dec_s20fe-rv51_580x800_in-en.jpg",
            carouselImages: [
                "https://m.media-amazon.com/images/I/81vDZyJQ-4L._SY879_.jpg",
                "https://m.media-amazon.com/images/I/61vN1isnThL._SX679_.jpg",
                "https://m.media-amazon.com/images/I/71yzyH-ohgL._SX679_.jpg",
                "https://m.media-amazon.com/images/I/61vN1isnThL._SX679_.jpg",
            ],
            color: "Cloud Navy",
            size: "8 GB RAM 128GB Storage",
            off: "%21",
            ratingValue: 4.3,
            ratingCount: 200
        },
        {
            id: "40",
            title:
                "Samsung Galaxy M14 5G (ICY Silver, 4GB, 128GB Storage) | 50MP Triple Cam | 6000 mAh Battery | 5nm Octa-Core Processor | Android 13 | Without Charger",
            oldPrice: 16000,
            price: 14000,
            image:
                "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Samsung/CatPage/Tiles/June/xcm_banners_m14_5g_rv1_580x800_in-en.jpg",
            carouselImages: [
                "https://m.media-amazon.com/images/I/817WWpaFo1L._SX679_.jpg",
                "https://m.media-amazon.com/images/I/81KkF-GngHL._SX679_.jpg",
                "https://m.media-amazon.com/images/I/61IrdBaOhbL._SX679_.jpg",
            ],
            color: "Icy Silver",
            size: "6 GB RAM 64GB Storage",
            off: "%15",
            ratingValue: 4.1,
            ratingCount: 331
        },
        {
            id: "50",
            title:
                "realme narzo N55 (Prime Blue, 4GB+64GB) 33W Segment Fastest Charging | Super High-res 64MP Primary AI Camera",
            oldPrice: 12999,
            price: 10999,
            image:
                "https://images-eu.ssl-images-amazon.com/images/G/31/tiyesum/N55/June/xcm_banners_2022_in_bau_wireless_dec_580x800_v1-n55-marchv2-mayv3-v4_580x800_in-en.jpg",
            carouselImages: [
                "https://m.media-amazon.com/images/I/41Iyj5moShL._SX300_SY300_QL70_FMwebp_.jpg",
                "https://m.media-amazon.com/images/I/61og60CnGlL._SX679_.jpg",
                "https://m.media-amazon.com/images/I/61twx1OjYdL._SX679_.jpg",
            ],
            off: "%12",
            ratingValue: 2.99,
            ratingCount: 589,
            size: "6 GB RAM 64GB Storage",
        },
        {
            id: "0",
            title:
                "Oppo Enco Air3 Pro True Wireless in Ear Earbuds with Industry First Composite Bamboo Fiber, 49dB ANC, 30H Playtime, 47ms Ultra Low Latency,Fast Charge,BT 5.3 (Green)",
            offer: "72% off",
            oldPrice: 7500,
            price: 4500,
            image:
                "https://m.media-amazon.com/images/I/61a2y1FCAJL._AC_UL640_FMwebp_QL65_.jpg",
            carouselImages: [
                "https://m.media-amazon.com/images/I/61a2y1FCAJL._SX679_.jpg",
                "https://m.media-amazon.com/images/I/71DOcYgHWFL._SX679_.jpg",
                "https://m.media-amazon.com/images/I/71LhLZGHrlL._SX679_.jpg",
                "https://m.media-amazon.com/images/I/61Rgefy4ndL._SX679_.jpg",
            ],
            color: "Green",
            size: "Normal",
            off: "%34",
            ratingValue: 3.3,
            ratingCount: 123
        },
        {
            id: "1",
            title:
                "Fastrack Limitless FS1 Pro Smart Watch|1.96 Super AMOLED Arched Display with 410x502 Pixel Resolution|SingleSync BT Calling|NitroFast Charging|110+ Sports Modes|200+ Watchfaces|Upto 7 Days Battery",
            offer: "40%",
            oldPrice: 7955,
            price: 3495,
            image: "https://m.media-amazon.com/images/I/41mQKmbkVWL._AC_SY400_.jpg",
            carouselImages: [
                "https://m.media-amazon.com/images/I/71h2K2OQSIL._SX679_.jpg",
                "https://m.media-amazon.com/images/I/71BlkyWYupL._SX679_.jpg",
                "https://m.media-amazon.com/images/I/71c1tSIZxhL._SX679_.jpg",
            ],
            color: "black",
            size: "Normal",
            off: "%12",
            ratingValue: 4.4,
            ratingCount: 564
        },
        {
            id: "2",
            title: "Aishwariya System On Ear Wireless On Ear Bluetooth Headphones",
            offer: "40%",
            oldPrice: 7955,
            price: 3495,
            image: "https://m.media-amazon.com/images/I/41t7Wa+kxPL._AC_SY400_.jpg",
            carouselImages: ["https://m.media-amazon.com/images/I/41t7Wa+kxPL.jpg"],
            color: "black",
            size: "Normal",
            off: "%19",
            ratingValue: 3.3,
            ratingCount: 443
        },
        {
            id: "3",
            title:
                "Fastrack Limitless FS1 Pro Smart Watch|1.96 Super AMOLED Arched Display with 410x502 Pixel Resolution|SingleSync BT Calling|NitroFast Charging|110+ Sports Modes|200+ Watchfaces|Upto 7 Days Battery",
            offer: "40%",
            oldPrice: 24999,
            price: 19999,
            image: "https://m.media-amazon.com/images/I/71k3gOik46L._AC_SY400_.jpg",
            carouselImages: [
                "https://m.media-amazon.com/images/I/41bLD50sZSL._SX300_SY300_QL70_FMwebp_.jpg",
                "https://m.media-amazon.com/images/I/616pTr2KJEL._SX679_.jpg",
                "https://m.media-amazon.com/images/I/71wSGO0CwQL._SX679_.jpg",
            ],
            color: "Norway Blue",
            size: "8GB RAM, 128GB Storage",
            off: "%25",
            ratingValue: 4.2,
            ratingCount: 423
        },
    ];



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
        dispatch(addToCart(item))
       
    }
    const buyNow = () => {
        Alert.alert("saved")
    }

    const saveToFavorites = () => {
        Alert.alert("saved")
    }

    const share = () => {
        Alert.alert("shared")
    }


    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: "#ffffff", padding: 10, paddingBottom: 50 }}>
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
                    <Pressable onPress={saveToFavorites}>
                        <AntDesign name="hearto" size={24} color="black" style={{ marginHorizontal: 20 }} />
                    </Pressable>

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

            <View style={{ backgroundColor: "#ffd815", padding: 10, borderRadius: 30, flexDirection: "row", paddingVertical: 20, justifyContent: "center", alignItems: "center", marginVertical: 15 }} >
                <Pressable onPress={() => {add() }}>
                    <Text>Add to Cart</Text>

                </Pressable>

            </View>

            <View style={{ backgroundColor: "#ffa31b", padding: 10, borderRadius: 30, flexDirection: "row", paddingVertical: 20, justifyContent: "center", alignItems: "center" }} >
                <Pressable onPress={() => { buyNow() }}>
                    <Text>Buy Now</Text>

                </Pressable>

            </View>


            {/* <ScrollView horizontal={true}>
                <View style={{flexWrap:"wrap",justifyContent:"center",marginBottom:10,height:800 }}>
                    {
                        offers.map((item) => (
                            <DealsBox key={item.id} item={item} isFromDeals={false} />
                        ))
                    }
                </View>
            </ScrollView> */}



        </ScrollView>
    )
}
export default Detail
 