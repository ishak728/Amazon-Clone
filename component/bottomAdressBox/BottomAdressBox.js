import { View, Text, TouchableOpacity } from "react-native"

const BottomAdressBox = () => {
    return (
        <TouchableOpacity onPress={() => { }} style={{ borderWidth: 2, padding: 5, borderColor: "#a2a6ab", marginRight: 10, width: 140, height: 140 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#111111" }}>ishak erdogan</Text>
            <Text style={{ fontSize: 13, fontWeight: "bold", color: "#5a5a5a" }}>full adress...</Text>

        </TouchableOpacity>
    )
}

export default BottomAdressBox