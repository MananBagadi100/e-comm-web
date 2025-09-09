import { useParams } from "react-router-dom";
import { getProductDetails } from "../services/GetService";
import { useContext, useEffect, useState } from "react";
import '../styles/ProDetailsStyles.css'
import { cartContext } from "../context/CartContext";
const ProductDetails = () => {
    const value=useContext(cartContext)
    const [ product_quantity, setProductQuantity ] = useState(1)
    const [ product_details ,setProductDetails]= useState(null)
    const params = useParams()
    const prod_id = params.product_id
    useEffect (() => {
        const fetchData = async() => {
            try {
                const res = await getProductDetails(prod_id)
                setProductDetails(res.data)
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchData()     //calling the function
    },[prod_id])
    console.log("DEBUG :",product_details)
    return (
        <div className="full-product-details-page">
            {
                !product_details ? (<p>Loading ...</p>) :
            (
            <>
                <div className="product-breadcrum">
                    <div className="breadcrum-inner">Home &gt; Products &gt; {product_details.tags[0]} </div>
                </div>
                <div className="product-wrapper">
                    <div className="product-image">
                        <img src={product_details.images[0]} alt="Image not found" />
                    </div> 
                    <div className="product-content-wrapper">
                        <div className="product-content-details">
                            <div id="prod_id">Id : {product_details.id}</div>
                            <div id="prod_title">{product_details.title}</div>
                            <div id="prod_category">Category : {product_details.category}</div>
                            <div id="prod_price">Price : ${product_details.price}</div>
                            <div id="prod_price_contd">Inclusive of all taxes</div>
                            <div id="prod_rating">
                                Ratings : 
                                <span> {product_details.rating} ⭐️</span>
                            </div>
                            <div id="prod_warranty">
                                Warranty Information : 
                                <span> {product_details.warrantyInformation}</span>
                            </div>
                            <div id="prod_shipInfo">Shipping Information : {product_details.shippingInformation}</div>
                            <div id="prod_status">Availability Status : {product_details.availabilityStatus}</div>
                            <div id="prod_desc">Description : {product_details.description}</div>
                            <div id="prod_returnPolicy"> {product_details.returnPolicy}</div>
                            <div className="product-page-btn">
                                <div className="quantity-selector">
                                    <button className="quantity-btn" onClick={() => {setProductQuantity(qty => Math.max(1,qty-1))}}>-</button>
                                        {product_quantity}
                                    <button className="quantity-btn" onClick={() => {setProductQuantity(qty => qty+1)}}>+</button>
                                </div>
                                <button className="order-btn" onClick={() => {value.addManyProductsToCart( product_details ,product_quantity)}}>add to cart</button>
                                <button className="order-btn">buy now</button>
                            </div>       
                        </div>
                    </div>
                </div>
                <div className="extraInfo">
                    <div id="review-heading">Reviews </div>
                    <div className="all-reviews">
                        {
                            product_details.reviews.map((eachReview) => (
                                <div key={eachReview.comment} className="review">
                                    <div className="reviewer">{eachReview.reviewerName}</div>
                                    <div className="rating">Rating : {eachReview.rating} ⭐️</div>
                                    <div className="comment">{eachReview.comment}</div>
                                    <div className="date">{new Date(eachReview.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</div>
                                    
                                </div>
                            ))
                        }
                    </div>
                </div>
            </>
            )}
        </div>

        
    )
}
export default ProductDetails