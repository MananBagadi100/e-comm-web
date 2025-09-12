import { createContext, useEffect, useState } from "react";
import Products from "../pages/Products";
export const ProductContext = createContext()
export const ProductProvider = () => {
    const [minRating , setMinRating] = useState(null)   //for rating filter
    const [minScaleValue , setMinScaleValue] = useState(0)  //minimum value of price slider
    const [maxScaleValue , setMaxScaleValue] = useState(10)    //max value of price slider
    const [selectedRange, setSelectedRange] = useState([minScaleValue,maxScaleValue]) //default min value selected 
    useEffect(() => {
        setSelectedRange([minScaleValue,maxScaleValue])
    },[minScaleValue,maxScaleValue])
    //calculates min and max price of given products
    function calculateMinMax (products) {   
        const prices = products.map((item) => {
            return item.price
        })
        const minPrice = Math.min(...prices);
        const maxPrice = Math.max(...prices);
        //for debugging
        console.log("this is the min price of the products", minPrice);
        console.log("this is the max price of the products", maxPrice);
        setMinScaleValue(minPrice);
        setMaxScaleValue(maxPrice);
    }
    
        
    return (
        <ProductContext.Provider value={{minRating , setMinRating , minScaleValue , maxScaleValue , calculateMinMax , setSelectedRange , selectedRange}}>
            <Products />
        </ProductContext.Provider>
    )
}
