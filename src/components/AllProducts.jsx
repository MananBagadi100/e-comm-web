import { useContext } from 'react'
import '../styles/AllProductsStyles.css'
import { cartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext'
const AllProducts = ({productInfo}) => {
    const cartHandler=useContext(cartContext)
    const {minRating , calculateMinMax , selectedRange , minScaleValue , maxScaleValue} = useContext(ProductContext)
    //const productValue = useContext(ProductContext)
    const visibleProducts = productInfo.products.filter ((item) => (
        minRating === null || item.rating >= minRating
    ))
    //function will re calculate min max after every RenderProducts
    console.log("DEBUG visible products is ",visibleProducts)
    calculateMinMax(visibleProducts)
    const visibleProductsFinal = selectedRange[0] === minScaleValue && selectedRange[1] === maxScaleValue
        ? visibleProducts
        : visibleProducts.filter(item =>
            item.price >= selectedRange[0] && item.price <= selectedRange[1]
        )

    return (
        <div className="product-grid">
            {    
                visibleProductsFinal && visibleProductsFinal.map((item) => (
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

export default AllProducts