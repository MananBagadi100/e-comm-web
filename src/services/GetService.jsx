import axios from "axios";
const client = axios.create({
    baseURL:'https://dummyjson.com/products'
    })
export const getAvailableProducts = () => {
    return client.get('')
}
export const getOutOfStockProducts = () => {
    return client.get('?limit=10&skip=30')
}
