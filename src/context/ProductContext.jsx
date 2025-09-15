import { createContext, useEffect, useState } from "react";
import Products from "../pages/Products";
export const ProductContext = createContext()
export const ProductProvider = ({children}) => {
    const [minRating , setMinRating] = useState(null)   //for rating filter     
    return (
        <ProductContext.Provider value={{minRating , setMinRating }}>
            {children}
        </ProductContext.Provider>
    )
}
