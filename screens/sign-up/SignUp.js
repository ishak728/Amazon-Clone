import { View, Text, Alert } from "react-native"
import AccountInfoBox from "../../component/accountInfoBox/AccountInfoBox"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { createUser, signIn, verifyToken } from "../../services/UserService"


const SignUp = () => {
    const navigation = useNavigation()

    const [isCreateAccount, setIsCreateAccount] = useState(true)
    const [isShowPassword, setIsShowPassword] = useState(true)
    const [isKeepSignedIn, setIsKeepSignedIn] = useState(true)
    const [fullName, setFullName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setpassword] = useState(null)
    const [emailSignIn, setEmailSignIn] = useState(null)
    const [passwordSignIn, setpasswordSignIn] = useState(null)


    useEffect(() => {
     
            verify()
    

    }, [ ])

    const verify = async () => {
        const token = await AsyncStorage.getItem("token", token)

        try {
            if (token) {
                const data = await verifyToken(token)
             
                if (data) {
                    navigation.navigate("MyTab") 
                }
            }
        } catch (error) {
            console.log(error.response.status)

        }
    }


    const handleContinue = async () => {

        if (isCreateAccount) {
            //new account will be created
            //check if fullname,email,and password is not null

            if (fullName && email && password.length >= 8) {
                try {
                    const data = await createUser(fullName, email, password)
                   
                    setIsCreateAccount(true)
                    Alert.alert("Thanks")
                } catch (error) {
                    console.log("!!!", error)
                }


                //navigation.navigate("VerifyEmail")
            }




        } else {
            //sign in

            if (emailSignIn && passwordSignIn.length >= 8) {
                try {
                    const data = await signIn( emailSignIn, passwordSignIn)
                    AsyncStorage.setItem("token", data.token)
                    verify()


                    //navigate to home screen
                } catch (error) {
                    console.log("!!!", error)
                }
                //navigation.navigate("VerifyEmail")
            }


        }

        // setFullName("")
        // setEmail("")
        // setpassword("")
        // setEmailSignIn("")
        // setpasswordSignIn("")

    }








    return (
        <View style={{ flex: 1, padding: 15, backgroundColor: "#f6f6f6" }}>




            <Text>Welcome</Text>
            {isCreateAccount ? (
                <View style={{ borderWidth: 1, borderColor: "#dddddd" }}  >

                    <View style={{ backgroundColor: "#ffffff", padding: 15, borderBottomWidth: 1, borderBottomColor: "#dddddd" }}>
                        <TouchableOpacity onPress={() => { setIsCreateAccount(!isCreateAccount) }}>
                            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
                                <FontAwesome name="dot-circle-o" size={24} color="orange" style={{ marginRight: 10, }} />
                                <Text>Create account New to Amazon?</Text>
                            </View>
                        </TouchableOpacity>

                        <AccountInfoBox title="First and last name" state={fullName} setState={setFullName} />
                        <AccountInfoBox title="Mobile number or email" state={email} setState={setEmail} />
                        <AccountInfoBox title="Create a password" state={password} setState={setpassword} isShowPassword={isShowPassword} />

                        <TouchableOpacity style={{ marginBottom: 10 }} onPress={() => { setIsShowPassword(!isShowPassword) }}>

                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                {isShowPassword ? (
                                    <FontAwesome6 name="square-check" size={24} color="orange" />

                                ) : (<FontAwesome name="square-o" size={24} color="gray" />)}
                                <Text style={{ marginLeft: 10 }}>Show password</Text>
                            </View>

                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => handleContinue()} style={{ backgroundColor: "#ffd815", height: 50, justifyContent: "center", alignItems: "center", borderRadius: 10, marginBottom: 30 }}>
                            <Text>Continue</Text>
                        </TouchableOpacity>

                        <Text style={{ marginBottom: 20 }} >
                            By creating an account, you agree to Amazon's{' '}
                            <TouchableOpacity  ><Text style={{ color: '#0066c0', textDecorationLine: 'underline' }}>Conditions of Use</Text></TouchableOpacity> {' '}
                            and{' '}
                            <TouchableOpacity><Text style={{ color: '#0066c0', textDecorationLine: 'underline' }}>Privacy Notice</Text></TouchableOpacity>
                        </Text>



                    </View>
                    <TouchableOpacity style={{ backgroundColor: "#f3f3f3", padding: 15 }} onPress={() => { setIsCreateAccount(!isCreateAccount) }}>
                        <View style={{ flexDirection: "row", alignItems: "center", }}>
                            <FontAwesome name="circle-o" size={24} color="gray" />
                            <Text style={{ marginLeft: 10 }}>Sign in Already a customer?</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            ) :
                (

                    <View style={{ borderWidth: 1, borderColor: "#dddddd" }}>
                        <TouchableOpacity style={{ backgroundColor: "#f3f3f3", padding: 15, borderWidth: 1, borderColor: "#dddddd" }} onPress={() => { setIsCreateAccount(!isCreateAccount) }}>
                            <View style={{ flexDirection: "row", alignItems: "center", }}>
                                <FontAwesome name="circle-o" size={24} color="gray" />
                                <Text style={{ marginLeft: 10 }}>Create account New to Amazon?</Text>
                            </View>
                        </TouchableOpacity>


                        <View style={{ backgroundColor: "#ffffff", padding: 15 }}>



                            <TouchableOpacity onPress={() => { setIsCreateAccount(!isCreateAccount) }}>
                                <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
                                    <FontAwesome name="dot-circle-o" size={24} color="orange" style={{ marginRight: 10, }} />
                                    <Text>Sign in Already a customer?</Text>
                                </View>
                            </TouchableOpacity>

                            <AccountInfoBox title="Email or phone number" state={emailSignIn} setState={setEmailSignIn} />
                            <AccountInfoBox title="Amazon password" state={passwordSignIn} setState={setpasswordSignIn} isShowPassword={isShowPassword} />

                            {/* {isShowPassword && (
                                <View style={{ marginBottom: 10 }}>
                                    <Text>Password: {passwordSignIn}</Text>  
                                </View>
                            )} */}

                            <TouchableOpacity style={{ marginBottom: 10 }} onPress={() => { setIsShowPassword(!isShowPassword) }}>

                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    {isShowPassword ? (
                                        <FontAwesome6 name="square-check" size={24} color="orange" />

                                    ) : (<FontAwesome name="square-o" size={24} color="gray" />)}
                                    <Text style={{ marginLeft: 10 }}>Show password</Text>
                                </View>

                            </TouchableOpacity>

                            <TouchableOpacity style={{ marginBottom: 10 }} onPress={() => { setIsKeepSignedIn(!isKeepSignedIn) }}>

                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    {isKeepSignedIn ? (
                                        <FontAwesome6 name="square-check" size={24} color="orange" />

                                    ) : (<FontAwesome name="square-o" size={24} color="gray" />)}
                                    <Text style={{ marginLeft: 10 }}>Keep me signed in.</Text>
                                </View>

                            </TouchableOpacity>


                            <TouchableOpacity onPress={() => handleContinue()} style={{ backgroundColor: "#ffd815", height: 50, justifyContent: "center", alignItems: "center", borderRadius: 10, marginBottom: 30 }}>
                                <Text>Continue</Text>
                            </TouchableOpacity>

                            <Text style={{ marginBottom: 20 }} >
                                By creating an account, you agree to Amazon's{' '}
                                <TouchableOpacity  ><Text style={{ color: '#0066c0', textDecorationLine: 'underline' }}>Conditions of Use</Text></TouchableOpacity> {' '}
                                and{' '}
                                <TouchableOpacity><Text style={{ color: '#0066c0', textDecorationLine: 'underline' }}>Privacy Notice</Text></TouchableOpacity>
                            </Text>



                        </View>
                    </View>
                )

            }

        </View>
    )
}

export default SignUp