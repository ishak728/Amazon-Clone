
import { StyleSheet,Dimensions } from "react-native"
const { width } = Dimensions.get('window');

const styles=StyleSheet.create({
    DealsContainer:{flexDirection:"row",width:width,flexWrap:"wrap",justifyContent:"center",marginBottom:10 },
    RelatedContainer:{flexDirection:"row",width:width,flexWrap:"wrap",justifyContent:"center",marginBottom:10 },
})
export default styles