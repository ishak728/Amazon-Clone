import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window")

const styles = StyleSheet.create({
    container: {
        
        

    },
    subContainer: {
        flexDirection: "row",
       
        

    },
    image: {
       height:100,
        marginRight:10,
        flex:1

    },
    infoContainer:{
 
       
        flex:2,
        justifyContent:"center",
        alignItems:"center"
        
    }
})

export default styles