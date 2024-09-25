import { View, Text, Button } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import AccountInfoBox from "../../component/accountInfoBox/AccountInfoBox"
import { useState } from "react"
import styles from "./Style"

const VerifyEmail = ({ email = "eaxample email" }) => {
    const [otp, setOtp] = useState(null)

    const handleVerify = () => {

    }
    const resendOtp = () => {

    }

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={styles.text} >Verify email adress</Text>
                <Text style={styles.subText}>To verify your email , we've sent a One Time Password (OTP) to {email}{' '}
                    <TouchableOpacity>
                        <Text style={{ color: "#0066c0", textDecorationLine: 'underline' }}>Change</Text>
                    </TouchableOpacity>
                </Text>

                <View style={{ width:"100%"  }}>
                    <AccountInfoBox title={"Enter OTP"} state={otp} setState={setOtp} />

                    <TouchableOpacity onPress={() => handleVerify()} style={styles.verifyButton}>
                        <Text style={{}}>Verify</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => resendOtp()} style={{justifyContent:"center",alignItems:"center", marginBottom:10}}>
                        <Text style={{ color: "#0066c0" }}>Resend OTP</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}
export default VerifyEmail