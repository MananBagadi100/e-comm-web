import { useParams } from "react-router-dom";
import { getProductDetails } from "../services/GetService";
import { useEffect, useState } from "react";
import '../styles/ProDetailsStyles.css'
const ProductDetails = () => {
    const [ product_details ,setProductDetails]= useState(null)
    const params = useParams()
    const prod_id = params.product_id
    useEffect (() => {
        getProductDetails(prod_id)
            .then( (res) => { if(product_details) setProductDetails(res.data) })
        return () => {ignore = true}
    },[prod_id])        //see here then 
    console.log(product_details)
    return (
        <div className="full-product-details-page">
            <div className="product-content-left">
                <h2 className="product-title">{product_details.title}</h2>
                <div className="product-image">
                    <img src={product_details.images[0]} alt="Image not found" />
                </div> 
            </div>
            <div className="product-content-right">
                <div className="product-content-details">
                    <div id="prod_id">Id : {product_details.id}</div>
                    <div id="prod_title">{product_details.title}</div>
                    <div id="prod_category">Category :{product_details.category}</div>
                    <div id="prod_price">${product_details.price}</div>
                    <div id="prod_price_contd">Inclusive of all taxes</div>
                    <div id="prod_rating">Rating :{product_details.rating}</div>
                    <div id="prod_warranty">Warranty Information :{product_details.warrantyInformation}</div>
                    <div id="prod_shipInfo">Shipping Information :{product_details.shippingInformation}</div>
                    <div id="prod_status">Availability Status{product_details.availabilityStatus}</div>
                    <div id="prod_desc">Description :{product_details.description}</div>
                    
                </div>
                
            </div>
        </div>
        
    )
}
export default ProductDetails