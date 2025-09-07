import { useContext } from "react"
import '../styles/CartStyle.css'
import { cartContext } from "../context/CartContext"    //portal name
import { Link, useNavigate } from "react-router-dom"
import { LoginContext } from "../context/LoginContext"
const Cart = () => {
    const navigate = useNavigate()
    const value=useContext(cartContext)
    const loginValue = useContext(LoginContext)
    console.log(value)
    const handleCheckout = () => {
        loginValue.loginState ? navigate('/checkout') : navigate('/login?redirect=/cart')
    }
    return (
        <div className="cart-page-container">
            <h2 className="cart-title">This is the cart page !</h2>
            <div className="cart-main-content">
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
                                <div className="product-removal-btn">
                                    <button onClick={() =>{value.deleteFromCart(cartItem.id)}}>Remove 🗑️</button>
                                </div>
                            </div>
                        )) 
                    }
                </div>
                <div className="cart-total-wrapper">
                    <div id="cart-total">Total : {value.calculateTotal(value.cart)}</div>
                </div>
                <div className="checkout-wrapper">
                    <button id="checkout-btn" onClick={handleCheckout}>Checkout</button>
                </div>
                

            </div>
             
        </div>
    )
}
export default Cart