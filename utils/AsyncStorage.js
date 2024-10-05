import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";

export const getUserId = async () => {
    try {
        const token = await AsyncStorage.getItem("token")


        if (token) {

            const decodedToken = jwtDecode(token);

        

            return decodedToken.userId

        }

    } catch (error) {
        console.log("errororor::", error)

    }

}

