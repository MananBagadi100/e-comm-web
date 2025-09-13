import '../styles/RenderProductsStyles.css'
import { useContext, useEffect, useRef, useState } from "react";
import { getAllTheCategoryItems } from '../services/GetService';
import AllProducts from './AllProducts';
import FilteredProducts from './FilteredProducts';
//this file just brings all the different components here for rendering , nothing else !
const RenderProducts = ({productInfo , filterProductsArray , selectedMinPrice , selectedMaxPrice , rangeError}) => {
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
        //then after promise resolves it sets the array of responses to the cartegoryProducts 
        .then(setCategoryProducts)  
        .catch(error => console.log("fetch failed ", error))
    },[filterProductsArray])
    if(filterProductsArray.length === 0) {  //then categoryProducts are empty
        return (
            <AllProducts productInfo={productInfo} 
                selectedMinPrice={selectedMinPrice} selectedMaxPrice={selectedMaxPrice}
                rangeError={rangeError}
            />
        )
    }
    else {
        return (
            <FilteredProducts categoryProducts={categoryProducts}  
                selectedMinPrice={selectedMinPrice} selectedMaxPrice={selectedMaxPrice}
                rangeError={rangeError}
            />
        )
    }
}
export default RenderProducts
//If filterProductsArray changes-> categoryProducts changes->Child re renders 