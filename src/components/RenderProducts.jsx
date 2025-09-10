import { Link } from 'react-router-dom';
import { cartContext } from '../context/CartContext';
import '../styles/RenderProductsStyles.css'
import { useContext, useEffect, useState } from "react";
import { getAllTheCategoryItems } from '../services/GetService';
//this file just does the rendering of products
const RenderProducts = ({productInfo , filterProductsArray}) => {
    const [categoryProducts , setCategoryProducts] = useState([])
    const cartHandler=useContext(cartContext)
    function storeResponsesInState (value) {
        setCategoryProducts((p) => {
            return [...p,value]
        })
    }
        if(filterProductsArray.length === 0) {
            useEffect(()=>{},[])
            return(
                <div className="product-grid">
                    {    
                        productInfo && productInfo.products.map((item) => (
                            <Link key={item.id} to={`/products/${item.id}`} className="product-card-wrapper">
                                <div key={item.id} className="product-card">
                                    <img src={item.images[0]} alt="Image not given" />
                                    <div className="">ID : {item.id}</div>
                                    <div className="product-id">Title: {item.title}</div>
                                    <div className="product-title">Price : {item.price}</div>
                                    <div className="product-rating">Rating : {item.rating}</div>
                                    <div className="product-brand">Brand : {item.brand}</div>
                                    <button 
                                        className="cart-btn" 
                                            onClick={(e)=>{
                                                e.preventDefault()
                                                e.stopPropagation()
                                                cartHandler.addToCart(item)
                                            }}>Add to cart
                                    </button>
                                </div>
                            </Link>
                        ))
                    }  
                </div> 
            )
        }
    else {
        useEffect(() => {
            const fetchProducts = async () => {
                filterProductsArray.map((item) => {
                    const response = getAllTheCategoryItems(item.url).then(
                        setCategoryProducts((prev) => {
                        return [...prev,response.data]
                    })
                    )

                        
                })
            }
            fetchProducts()
        },[])
        console.log("debug ",categoryProducts)
        return (
            <div>
                <div className="product-grid">
                {    
                    
                        
                        // <Link key={item.slug} to={`/products/${item.id}`} className="product-card-wrapper">
                        //     <div key={item.id} className="product-card">
                        //         <img src={item.images[0]} alt="Image not given" />
                        //         <div className="">ID : {item.id}</div>
                        //         <div className="product-id">Title: {item.title}</div>
                        //         <div className="product-title">Price : {item.price}</div>
                        //         <div className="product-rating">Rating : {item.rating}</div>
                        //         <div className="product-brand">Brand : {item.brand}</div>
                        //         <button 
                        //             className="cart-btn" 
                        //                 onClick={(e)=>{
                        //                     e.preventDefault()
                        //                     e.stopPropagation()
                        //                     cartHandler.addToCart(item)
                        //                 }}>Add to cart
                        //         </button>
                        //     </div>
                        // </Link>
                    
                }  
            </div> 
        </div>
        )
    }
}
export default RenderProducts