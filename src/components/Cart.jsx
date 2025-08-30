import { useContext } from "react"
import '../styles/CartStyle.css'
// import '../styles/aaa.css'
import { cartContext } from "../context/CartContext"    //portal name
const Cart = () => {
    const value=useContext(cartContext)
    console.log(value)
    return(
        <div className="cart-page-container">
            <h2 className="cart-title">This is the cart page !</h2>
            <div className="cart-items-list">
                {
                    value.cart.map((cartItem) => (
                        <div key={cartItem.id} className="cart-card">
                            <img className="cart-image" src={cartItem.image} alt="Image not found" />
                            <div className="cart-info">
                                <span className="cart-id">ID : {cartItem.id}</span>
                                <span className="cart-title">{cartItem.title}</span>
                                <span className="cart-price">Price : {cartItem.price}</span>
                                <span className="cart-qty">
                                    Quantity : 
                                    <button className="qty-btn" onClick={()=> {value.removeFromCart(cartItem.id)}}>-</button> 
                                        {cartItem.quantity} 
                                    <button className="qty-btn" onClick={()=> {value.addToCart(cartItem)}}>+</button>
                                </span>
                            </div>
                            <div>
                                <button>remove</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Cart