import { Dimensions, StyleSheet } from "react-native";



const styles = StyleSheet.create({
   container: {
      backgroundColor: "#ffffff",
      padding: 10

   },
   subContainer: {
      flexDirection: "row",
      alignItems: "center",
      borderTopWidth: 1,
      borderTopColor: "#d5d9d9",
      borderBottomWidth: 1,
      borderBottomColor: "#d5d9d9",





   },
   search: {

      height: 40,
      flex: 9,
      flexDirection: "row",
      alignItems: "center",
      borderRightWidth: 1,
      borderRightColor: "#d5d9d9",
     



   },
   filter: {
      flexDirection: "row",
      flex: 3,
      alignItems: "center",

      justifyContent: "space-between"

   },
   filterText: {
      margin: 5
   }

})

export default styles