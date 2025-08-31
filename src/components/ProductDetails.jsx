import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const ProductDetails = () => {
    const res=0
    const params=useParams()
    const product_id=params.product_id
    const answer=axios.get(`https://dummyjson.com/products/${product_id}`)
        .then(res => (res+1))
    
    return (
        console.log(answer)
    )
}
export default ProductDetails