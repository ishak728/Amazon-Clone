import React, { useEffect, useState } from 'react';
import { Alert, Modal, Text, Pressable, View, Dimensions, TouchableOpacity } from 'react-native';
import Line from '../line/Line';
import { ScrollView } from 'react-native-gesture-handler';
import styles from "./Style"
import { Ionicons } from '@expo/vector-icons';

const QuantitySelector = ({ state, setState, isFromAddress = false, isCountry = false }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const { width, height } = Dimensions.get("window")

    let quantities = Array(30).fill(null);
    quantities = quantities.map((num, i) => i + 1);




    const states = [
        "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
        "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana",
        "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts",
        "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska",
        "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina",
        "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island",
        "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
        "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
    ];



    const countries = [
        "United States", "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia",
        "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium",
        "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
        "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad",
        "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt",
        "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France",
        "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel",
        "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
        "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
        "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius",
        "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru",
        "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia",
        "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal",
        "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia",
        "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland",
        "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia",
        "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
        "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ];


    if (isFromAddress) {
        if (isCountry) {
            quantities = countries
        } else {
            quantities = states
        }

    }






    return (
        <View style={{}}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <View style={{ backgroundColor: "#f1f2f2", padding: 10, borderRadius: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 20 }} >
                    <Text>{isFromAddress ? (state === null ? "select" : state) : `Quantity:${state}`}</Text>
                    <Ionicons name="chevron-down" size={15} color="black" />
                </View>
            </TouchableOpacity>

            <Modal
                animationType='none'
                visible={modalVisible}
                transparent={true}
            >
                <View style={styles.container}>
                    <View style={styles.subContainer} >
                        <View style={styles.titleBox}>
                            <Text style={{ marginRight: isFromAddress ? 180 : 80, fontSize: 15, fontWeight: "bold" }}> {isFromAddress ? "" : "Quantity:"}</Text>
                            <Pressable onPress={() => setModalVisible(false)}>
                                <Text style={{ fontSize: 15, fontWeight: "bold" }}>X</Text>
                            </Pressable>
                        </View>

                        <ScrollView   >
                            {
                                quantities.map((num) => {
                                    return (
                                        <Pressable key={num} onPress={() => {
                                            setState(num)
                                            setModalVisible(false)
                                        }}>
                                            <View style={num === state ? styles.selectedQuantityBox : styles.quantityBox}>
                                                <Text style={styles.quantityValue}>{num}</Text>

                                            </View>
                                        </Pressable>

                                    )
                                })
                            }
                        </ScrollView>

                    </View>
                </View>

            </Modal>
        </View>
    )

};


export default QuantitySelector;