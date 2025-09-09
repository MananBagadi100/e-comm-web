import axios from "axios";
const client = axios.create({
    baseURL:'https://dummyjson.com/products'
    })
export const getAvailableProducts = () => {         //gets the products
    return client.get('?limit=194')
}
export const getOutOfStockProducts = () => {
    return client.get('?limit=10&skip=30')
}
export const getProductDetails = (prod_id) => {
    return client.get(`/${prod_id}`)
}
export const getProductCategories = () => {
    return client.get('/categories')
}