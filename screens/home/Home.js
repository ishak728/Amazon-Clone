import { View, Text, Dimensions, StyleSheet, Alert, Image, Pressable } from "react-native";
import { ScrollView, TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import DealsBox from "../../component/dealsBox/DealsBox";
import styles from "./Style";
import Line from "../../component/line/Line";
import Modal from 'react-native-modal';
import { useState, useEffect ,useContext,useCallback} from "react";
import Fontisto from '@expo/vector-icons/Fontisto';
import Entypo from '@expo/vector-icons/Entypo';
import BottomAdressBox from "../../component/bottomAdressBox/BottomAdressBox";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation,useFocusEffect } from "@react-navigation/native";
import { getUserId } from "../../utils/AsyncStorage";
import { getAddress } from "../../services/UserService";
import { AddressContext } from "../../contextApi/AddressContext";


const Home = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const { width } = Dimensions.get('window');
    const navigation = useNavigation()
     const {address, setAddress}=useContext(AddressContext)

    const images = [
        "https://assets.aboutamazon.com/cd/6f/7e46d14a42989d7e41b5795d5c09/aa-aug2024-pbdd-month-announcement-standard-hero-v6-2000x1125.jpg",
        "https://www.travelandleisure.com/thmb/HPMzKb9bZtxk8p3sXRW2IQTdjbs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/amazon-october-prime-day-announcement-tout-tl-52fc5980347641eb896abee8ac99a427.jpg",
        "https://pbs.twimg.com/media/F7D09l2WcAAfI2X?format=png&name=900x900",
        "https://cdn.arstechnica.net/wp-content/uploads/2023/10/Ars-Technica-Prime-Day-Header-Main-2-Pink-800x450.png",

    ];

    const deals = [
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
            size: "6 GB RAM 128GB Storage",
        },
    ];
    const offers = [
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

    const list = [
        {
            id: "0",
            image: "https://m.media-amazon.com/images/I/41EcYoIZhIL._AC_SY400_.jpg",
            name: "Home",
        },
        {
            id: "1",
            image:
                "https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/blockbuster.jpg",
            name: "Deals",
        },
        {
            id: "3",
            image:
                "https://images-eu.ssl-images-amazon.com/images/I/31dXEvtxidL._AC_SX368_.jpg",
            name: "Electronics",
        },
        {
            id: "4",
            image:
                "https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/All_Icons_Template_1_icons_01.jpg",
            name: "Mobiles",
        },
        {
            id: "5",
            image:
                "https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/music.jpg",
            name: "Music",
        },
        {
            id: "6",
            image: "https://m.media-amazon.com/images/I/51dZ19miAbL._AC_SY350_.jpg",
            name: "Fashion",
        },
    ];


    const [addresses, setAddresses] = useState([])
    const [loading, setLoading] = useState(true)



    const get = async () => {

        const userId = await getUserId()
        const addresses = await getAddress(userId)
        setAddresses(addresses)

    }

    useFocusEffect(
        useCallback(() => {
            console.log('Ekran odaklandı!');
            get()
        }, [])
    )

    useEffect(() => {

        if (addresses) {
            setLoading(false)
        }
    }, [addresses])


    const handlePress = () => {
        Alert.alert("Pressed");
    };

    return (
        <ScrollView style={{ marginBottom: 60 }} >

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ justifyContent: "space-between", backgroundColor: "#90dedb", padding: 15 }}  >

                <TouchableOpacity onPress={() => { setModalVisible(!isModalVisible) }} style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <Ionicons style={{ marginHorizontal: 4, }} name="location-outline" size={24} color="black" />
                    <Text style={{ fontWeight: "bold" }}>{address.postalCode}</Text>
                    <Ionicons name="chevron-down" size={15} color="black" />

                </TouchableOpacity>
                {
                    list.map((item) => {
                        return (


                            <TouchableOpacity key={item.id} style={{ marginHorizontal: 15, }}>
                                <Text style={{ fontSize: 15 }}>
                                    {item.name}
                                </Text>

                            </TouchableOpacity>
                        )
                    })

                }

            </ScrollView>

            <View >
                <SwiperFlatList
                    // autoplay  
                    autoplayDelay={4}
                    autoplayLoop
                    index={2}
                    showPagination//shows circle
                    data={images}
                    renderItem={({ item }) => (
                        <TouchableWithoutFeedback onPress={handlePress}>
                            <Image
                                source={{ uri: item }}
                                style={{ width: width, height: 300 }}
                                resizeMode="stretch
                                "
                            />
                        </TouchableWithoutFeedback>
                    )}
                />
            </View>

            <Text style={{ fontSize: 20, fontWeight: "bold", margin: 10 }}>Deals For You</Text>
            <View style={styles.DealsContainer}>
                {
                    deals.map((item) => (
                        <DealsBox key={item.id} item={item} />
                    ))
                }
            </View>
            <Line />


            <Text style={{ fontSize: 20, fontWeight: "bold", margin: 10 }}>Related to items you've saved</Text>
            <View style={styles.RelatedContainer}>
                {
                    offers.map((item) => (
                        <DealsBox key={item.id} item={item} isFromDeals={false} />
                    ))
                }
            </View>
            <Line />


            <Modal
                isVisible={isModalVisible}
                onBackdropPress={() => { setModalVisible(false) }}
                style={{ justifyContent: "flex-end", margin: 0 }}
            >
                <View style={{ backgroundColor: '#ffffff', minHeight: 250, padding: 20 }}>
                    <View >
                        <Text style={{ fontSize: 25, fontWeight: "bold", marginBottom: 10 }}>Chose your location </Text>
                        <Text style={{ fontSize: 16, color: "#575757", marginBottom: 10 }}>Delivery options and delivery speeds may vary for different locations </Text>
                    </View>


                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ marginBottom: 10 }}>

                        {addresses.map((item) => {
                            return (
                                <BottomAdressBox key={item._id} item={item} />
                            )
                        })}


                        <TouchableOpacity onPress={() => { navigation.navigate("Addresses"); setModalVisible(!isModalVisible) }}
                            style={{ borderWidth: 2, borderColor: "#a2a6ab", justifyContent: "center", alignItems: "center", padding: 5, width: 140, height: 140 }}>

                            <Text style={{ fontSize: 16, fontWeight: "bold", color: '#1b74c6' }}>Manage adress book</Text>


                        </TouchableOpacity>

                    </ScrollView>


                    <TouchableOpacity style={{ flexDirection: "row", marginBottom: 10, alignItems: "center" }}>
                        <Entypo name="location-pin" size={24} color="black" style={{ marginRight: 10, color: '#1b74c6' }} />
                        <Text style={{ color: '#1b74c6' }}>Enter a US zip code </Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                        <Fontisto name="world-o" size={24} color="black" style={{ marginRight: 10, color: '#1b74c6' }} />
                        <Text style={{ color: '#1b74c6' }} >Ship outside the US </Text>

                    </TouchableOpacity>


                </View>

            </Modal>
        </ScrollView>
    );
};



export default Home;
