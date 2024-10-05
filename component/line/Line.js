import { Dimensions, View } from "react-native"


const Line=()=>{

    const {width}=Dimensions.get("window")

    return(
        <View style={{height:3,backgroundColor: '#e3e6e6',marginVertical:10,width:width}}/>
    )
}
export default Line