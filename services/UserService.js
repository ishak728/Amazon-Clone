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
        console.log(error)
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

export const addAddress=async(userId,address)=>{
    try {
        const response=await axios.post("http://192.168.1.144:3000/user/add-address",{
            userId,
            address

        })
       
        return response.data
        
    } catch (error) {
        throw error
    }
}

export const getAddress=async(userId)=>{
   
    try {
        const response=await axios.get(`http://192.168.1.144:3000/user/get-addresses/${userId}`)

        
        return response.data
        
    } catch (error) {
        throw error
    }
}