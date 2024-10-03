import axios from 'axios';




export const createUser=async(fullName,email,password)=>{
    try {
        const response=await axios.post('http://192.168.1.144:3000/user/create',{
            fullName,email,password
        })
        return response.data
        
    } catch (error) {
        console.log(error)
        throw error
    }
}


export const signIn=async( email,password)=>{
    try {
        const response=await axios.post('http://192.168.1.144:3000/user/signin',{
             email,password
        })
         
        return response.data
        
    } catch (error) {
        console.log("?",error)
        throw error
    }
}


export const verifyToken=async(token)=>{
    try {
        const response=await axios.get(`http://192.168.1.144:3000/user/verify-token/${token}`)
        return response.data
    } catch (error) {
        
        console.log(error)
        throw error
    }

}