import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",marginBottom:10,width:"100%"
    },
    title: {
        marginBottom: 5, fontSize: 15, fontWeight: "bold"
    },
    box: {
        borderColor: "#949494", borderWidth: 1,
        height: 50,  padding: 5,
        
    },
    box2: {
        borderColor: "#949494", borderWidth: 1,
        height: 50,  padding: 5,borderBottomWidth:0
        
    }
})

export default styles
