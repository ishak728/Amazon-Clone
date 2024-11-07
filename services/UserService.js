import axios from 'axios';
import BASE_URL from "../constants/Constants"




export const createUser=async(fullName,email,password)=>{
    try {
        const response=await axios.post(`${BASE_URL}/user/create`,{
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
        const response=await axios.post(`${BASE_URL}/user/signin`,{
             email,password
        })
         
        return response.data
        
    } catch (error) {
        console.log(error,)
        throw error 
    }
}


export const verifyToken=async(token)=>{
    try {
        const response=await axios.get(`${BASE_URL}/user/verify-token/${token}`)
        return response.data
    } catch (error) {
        
        console.log(error)
        throw error
    }

}

export const addAddress=async(userId,address)=>{
    try {
        const response=await axios.post(`${BASE_URL}/user/add-address`,{
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
        const response=await axios.get(`${BASE_URL}/user/get-addresses/${userId}`)

        
        return response.data
        
    } catch (error) {
        throw error
    }
}