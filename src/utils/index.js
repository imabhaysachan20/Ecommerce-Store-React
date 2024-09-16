import axios from "axios"

const produUrl = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
    baseURL:produUrl
})


export const formatPrice = (price)=>{
    const dollarAmount = new Intl.NumberFormat('en-IN',{
        currency:"INR"
    }).format((price/100).toFixed(2))
    return dollarAmount
}