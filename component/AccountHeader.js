import { useNavigation } from "@react-navigation/native"
import { View,TouchableOpacity ,Text, Alert} from "react-native"

const AccountHeader = ({headerTitle="Amazon.com"}) => {
    const navigation=useNavigation()

    const cancel=()=>{
        //we will navigate to back
        //navigation.pop(2);  //navigation.pop(2) will go back two screens in the stack:

        if (navigation.canGoBack()) {
            navigation.goBack();
        } 
   

         
    }



    return (
        <View style={{ height: 100, backgroundColor: "#90dedb", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            <TouchableOpacity style={{ position: "absolute", bottom: 10, left: 5 }}
            onPress={()=>{cancel()}}
            >
                <Text style={{ fontSize: 20 }}>
                    cancel
                </Text>
            </TouchableOpacity>

            <Text style={{ position: "absolute", bottom: 15, fontSize: 30, fontWeight: "600" }}>{headerTitle}</Text>


        </View>
    )
}

export default AccountHeader