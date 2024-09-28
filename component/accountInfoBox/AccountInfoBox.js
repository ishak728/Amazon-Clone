
import { View, Text, TextInput } from "react-native"
import styles from "./Style"

const AccountInfoBox = ({ title, state, setState, isShowPassword = true }) => {
    return (
        <View style={styles.container}  >
            <Text style={styles.title}>{title}</Text>


            <View>
                <TextInput
                    style={  styles.box }
                    value={state}
                    onChangeText={(value) => setState(value)}
                    secureTextEntry={!isShowPassword}


                />
 


            </View>



        </View>
    )
}
export default AccountInfoBox