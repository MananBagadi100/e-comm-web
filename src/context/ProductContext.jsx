import { createContext, useState } from "react";
import Products from "../pages/Products";
export const ProductContext = createContext()
export const ProductProvider = () => {
    const [minRating , setMinRating] = useState(null)
    return (
        <ProductContext.Provider value={{minRating , setMinRating}}>
            <Products />
        </ProductContext.Provider>
    )
}
