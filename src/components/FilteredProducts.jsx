import { Link } from "react-router-dom"
import { cartContext } from "../context/CartContext"
import { useContext } from "react"
import '../styles/AllProductsStyles.css'
import { ProductContext } from "../context/ProductContext"
const FilteredProducts = ({categoryProducts}) => {
    const cartHandler = useContext(cartContext)
    const productValue = useContext(ProductContext)
    console.log("the category products is ",categoryProducts)
    //visibleProducts just contains all the products based on the condition
    const visibleProducts = categoryProducts.map((item) => (
        item.data.products.filter((prod) => (
            productValue.minRating === null || prod.rating >= productValue.minRating
        ))
    ))
    return (
        <div>
            <div className="product-grid">
                {   
                    visibleProducts.map((category) => (    
                        category.map((prod) =>(
                            <Link key={prod.id} to={`/products/${prod.id}`} className="product-card-wrapper">
                                <div key={prod.id} className="product-card">
                                    <img src={prod.images[0]} alt="Image not given" />
                                    <div className="">ID : {prod.id}</div>
                                    <div className="product-id">Title: {prod.title}</div>
                                    <div className="product-title">Price : {prod.price}</div>
                                    <div className="product-rating">Rating : {prod.rating}</div>
                                    <div className="product-brand">Brand : {prod.brand}</div>
                                    <button 
                                        className="cart-btn" 
                                            onClick={(e)=>{
                                                e.preventDefault()
                                                e.stopPropagation()
                                                cartHandler.addToCart(prod)
                                            }}>Add to cart
                                    </button>
                                </div>
                            </Link>
                        ))
                    ))
                }
            </div>
        </div>
    )
}
export default FilteredProducts
{/* <div className="product-grid">
                {    
                    
                        
                        <Link key={item.slug} to={`/products/${item.id}`} className="product-card-wrapper">
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
                    
                }  
           </div>  */}