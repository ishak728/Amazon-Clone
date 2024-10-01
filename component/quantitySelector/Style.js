
import { StyleSheet,Dimensions } from "react-native"
const { width, height } = Dimensions.get("window")
const styles=StyleSheet.create({
    container:{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: 'rgba(0, 0, 0, 0.5)' },
    subContainer:{ backgroundColor: "#ffffff", marginTop: height * 0.15, marginBottom: height * 0.1 },
    titleBox:{ flexDirection: "row", marginBottom: 10, backgroundColor: "#f1f2f2", padding: 15 },
    quantityBox:{ borderBottomWidth: 1, borderBottomColor: "#d5d9d9" },
    selectedQuantityBox:{borderWidth:2,borderColor:"#006e86",backgroundColor:"#edfcff"},
    quantityValue:{ padding: 15, width: 180, fontSize: 15 },
})
export default styles