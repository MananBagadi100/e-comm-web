import { Link } from 'react-router-dom';
import { cartContext } from '../context/CartContext';
import '../styles/RenderProductsStyles.css'
import { useContext, useEffect, useState } from "react";
import { getAllTheCategoryItems } from '../services/GetService';
import AllProducts from './AllProducts';
import FilteredProducts from './FilteredProducts';
//this file just does the rendering of products , nothing else !
const RenderProducts = ({productInfo , filterProductsArray}) => {
    const [categoryProducts , setCategoryProducts] = useState([])
    useEffect(() => {
        if(filterProductsArray.length===0) {
            setCategoryProducts([])
            return
        }
        //gets all the products for each product category in filterProductsArray
        Promise.all(
            filterProductsArray.map(item => 
                getAllTheCategoryItems(item.url)
            )
        )
        //then after promise resolves sets the array of responses to the cartegoryProducts state
        .then(setCategoryProducts)  
        .catch(error => console.log("fetch failed ", error))
    },[filterProductsArray])

    if(filterProductsArray.length === 0) {  //then categoryProducts are empty
        return (
            <AllProducts productInfo={productInfo} />
        )
    }
    else {
        return (
            <FilteredProducts categoryProducts={categoryProducts}/>
        )
    }
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
export default RenderProducts