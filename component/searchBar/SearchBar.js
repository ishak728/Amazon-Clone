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

   



    // Get current state
    const currentState = navigation.getState();
    const currentRouteName = currentState.routes[currentState.index].name;
   

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


        <View style={{ height: 120, backgroundColor: "#90dedb", }}>
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
                    
                </View>


            </SafeAreaView>
        </View>
    )
}



export default SearchBar