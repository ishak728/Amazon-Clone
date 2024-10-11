import axios from 'axios';
import BASE_URL from "../constants/Constants"

export const createOrder = async (userId,products,totalPrice,shippingAddress) => {
    try {
        const response=await axios.post(`${BASE_URL}/order/create`,{
            userId,products,totalPrice,shippingAddress
        })
       
        return response.data
    } catch (error) {
        throw error
    }
}



export const getOrders = async (userId) => {
    try {
        const response=await axios.get(`${BASE_URL}/order/get-orders/${userId}`)
       
        return response.data
    } catch (error) {
        throw error
    }
}