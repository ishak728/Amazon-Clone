import { View, Text } from "react-native"
 
 
import styles from "./Style"
import ProfileButton from "../../component/profileButton/ProfileButton"
import { useNavigation } from "@react-navigation/native"

const Profile = () => {
  const navigation=useNavigation()

  const yourOrders=()=>{
    navigation.navigate("Orders")
  }
  const buyAgain=()=>{
    
  }
  const yourAccount=()=>{
    
  }
  const yourList=()=>{
    
  }


  return (
    <View style={styles.container}>
      <View style={{ }}>

        <View style={styles.buttonContainer}>
          <ProfileButton handle={yourOrders} text="Your Orders"  />
          <ProfileButton handle={buyAgain} text="Buy Again"/>
        </View>

        <View style={styles.buttonContainer}>
          <ProfileButton handle={yourAccount}text="Your Account"/>
          <ProfileButton handle={yourList}text="Your List"/>
        </View>

      </View>

    </View>
  )
}

export default Profile    