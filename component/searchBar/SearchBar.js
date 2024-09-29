import { useNavigation, useRoute } from "@react-navigation/native"
import { View, TouchableOpacity, Text, Alert, ScrollView, TextInput, Keyboard } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import styles from "./Style";
import { useEffect, useState } from "react";
//import {  } from "react-native-gesture-handler";


const SearchBar = () => {

    const [state, setState] = useState("")
    const [showArrow, setShowArrow] = useState(false)

    const navigation = useNavigation()
    const route = useRoute();


    const goBack = () => {
        Keyboard.dismiss()
        if (navigation.canGoBack()) {
            navigation.goBack();
        }
    }

    const search=()=>{
        Alert.alert("search")
    }

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



    // Get current state
    const currentState = navigation.getState();
    const currentRouteName = currentState.routes[currentState.index].name;
    console.log("current route name", currentRouteName)

    useEffect(() => {
        if (currentRouteName === "Detail") {
            setShowArrow(true);
        }
    }, [currentRouteName]);



    // // Check if the current route is a BottomTabNavigator
    // let activeTabName = '';

    // if (currentRouteName === 'MyTab') {
    //     // Access the tab navigator's state
    //     const tabState = currentState.routes[currentState.index].state;
    //     if (tabState) {
    //         activeTabName = tabState.routes[tabState.index].name; // Get the active tab name

    //         showArrow = activeTabName === 'Profile' || activeTabName === 'Cart' || activeTabName === 'Menu';
    //     }
    // }


    return (


        <View style={{ height: 150, backgroundColor: "#90dedb", }}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ height: 100 }}>
                    <View style={styles.container}>
                        {showArrow &&
                            <TouchableOpacity style={{ flex: 1, marginLeft: 5 }} onPress={() => goBack()}>
                                <Ionicons name="arrow-back-sharp" size={25} color="black" />
                            </TouchableOpacity>
                        }

                        <View style={styles.searchBar}>

                            <Ionicons style={{ flex: 1, }} name="search-sharp" size={24} color="gray" />

                            <TextInput
                                style={{ flex: 5, }}
                                value={state}
                                onChangeText={(text) => setState(text)}
                                placeholder="Search Amaxon.com"
                                onFocus={() => setShowArrow(true)}
                                onSubmitEditing={search}  
                                returnKeyType="search"
                            >


                            </TextInput>
                            <Ionicons style={{ flex: 1, }} name="scan" size={24} color="gray" />
                            <MaterialIcons style={{ flex: 1, }} name="keyboard-voice" size={24} color="gray" />

                        </View>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ position: "absolute", bottom: 1 }} >

                        <TouchableOpacity>
                            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                <Ionicons style={{ marginHorizontal: 4, }} name="location-outline" size={24} color="black" />
                                <Text style={{ fontWeight: "bold" }}>11102</Text>
                                <Ionicons name="chevron-down" size={15} color="black" />
                            </View>
                        </TouchableOpacity>
                        {
                            list.map((item) => {
                                return (

                                    //when user clicked i will show BottomSheet with the items
                                    <TouchableOpacity key={item.id} style={{ marginHorizontal: 15 }}>
                                        <Text style={{ fontSize: 15 }}>
                                            {item.name}
                                        </Text>

                                    </TouchableOpacity>
                                )
                            })

                        }

                    </ScrollView>
                </View>


            </SafeAreaView>
        </View>
    )
}



export default SearchBar