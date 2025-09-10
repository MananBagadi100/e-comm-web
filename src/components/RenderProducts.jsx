import '../styles/RenderProductsStyles.css'
import { useContext, useEffect, useState } from "react";
import { getAllTheCategoryItems } from '../services/GetService';
import AllProducts from './AllProducts';
import FilteredProducts from './FilteredProducts';
//this file just brings all the different components here for rendering , nothing else !
const RenderProducts = ({productInfo , filterProductsArray}) => {
    const [categoryProducts , setCategoryProducts] = useState([])
    console.log("productInfo is : ",productInfo)
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
            <AllProducts productInfo={productInfo} />
        )
    }
    else {
        return (
            <FilteredProducts categoryProducts={categoryProducts}/>
        )
    }
}
export default RenderProducts