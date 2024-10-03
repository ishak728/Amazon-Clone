import { NavigationContainer } from "@react-navigation/native";
import { View, Text, } from "react-native";
import MainStack from "../../navigation/HomeStackNavigator";
 

const Main = () => {
     

    return (
       <View style={{flex:1}}>
        <NavigationContainer independent={true}>
            <MainStack>
            </MainStack>
        </NavigationContainer>
       </View>
    );
};

 

export default Main;
