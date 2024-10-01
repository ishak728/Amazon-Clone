import React, { useEffect, useState } from 'react';
import { Alert, Modal, Text, Pressable, View, Dimensions } from 'react-native';
import Line from '../line/Line';
import { ScrollView } from 'react-native-gesture-handler';
import styles from "./Style"
import { Ionicons } from '@expo/vector-icons';

const QuantitySelector = ({ selectedQuantity, setSelectedQuantity }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const { width, height } = Dimensions.get("window")

    let quantities = Array(30).fill(null);
    quantities = quantities.map((num, i) => i + 1);



    useEffect(() => {
        console.log("...", selectedQuantity)
    }, [selectedQuantity])

    return (
        <View style={{}}>
            <View style={{ backgroundColor: "#f1f2f2", padding: 10, borderRadius: 10, flexDirection: "row",  justifyContent: "space-between", alignItems: "center",paddingVertical:20 }} >
                <Pressable onPress={() => setModalVisible(true)}>
                    <Text>Quantity: {selectedQuantity}</Text>

                </Pressable>
                <Ionicons name="chevron-down" size={15} color="black" />
            </View>
            <Modal
                animationType='none'
                visible={modalVisible}
                transparent={true}
            >
                <View style={styles.container}>
                    <View style={styles.subContainer} >
                        <View style={styles.titleBox}>
                            <Text style={{ marginRight: 80, fontSize: 15, fontWeight: "bold" }}> Quantity:</Text>
                            <Pressable onPress={() => setModalVisible(false)}>
                                <Text style={{ fontSize: 15, fontWeight: "bold" }}>X</Text>
                            </Pressable>
                        </View>

                        <ScrollView   >
                            {
                                quantities.map((num) => {
                                    return (
                                        <Pressable key={num} onPress={() => {
                                            setSelectedQuantity(num)
                                            setModalVisible(false)
                                        }}>
                                            <View style={num === selectedQuantity ? styles.selectedQuantityBox : styles.quantityBox}>
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