import { View ,Text,TouchableOpacity} from "react-native"
import styles from "./Style"
 
 

const ProfileButton=({text,handle})=>{
    return(
        <TouchableOpacity style={styles.button} onPress={()=>handle()} >
            <Text>{text}</Text>
        </TouchableOpacity>
    )
}
export default ProfileButton

