
import { View, Text, TextInput } from "react-native"
import styles from "./Style"

const AccountInfoBox = ({ title,state,setState }) => {
    return (
        <View style={styles.container}  >
            <Text style={styles.title}>{title}</Text>
            <TextInput
                style={styles.box}
                value={state}
                onChangeText={(value)=>setState(value)}
                
            />
        </View>
    )
}
export default AccountInfoBox