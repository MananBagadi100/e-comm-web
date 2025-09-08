import { useContext, useState } from "react"
import { cartContext } from "../context/CartContext"
import '../styles/CheckoutStyles.css'
import { useNavigate } from "react-router-dom"
import tick_mark from '../assets/Tick_mark.png'

const Checkout = () => {
    const [orderStatus , setOrderStatus] = useState(false)
    const cartValue = useContext(cartContext)
    const [address , setAddress ] = useState('')
    const navigate = useNavigate()
    const calculateSubTotal = (prod) => {
        return ((prod.price * prod.quantity).toFixed(2))
    }
    const navigateToHome = () => {
        setTimeout(() => {
            navigate('/')
        }, 5000)
    }
    if(orderStatus) {
        return (
            <div id="order-placed-wrapper">
                <div id="order-placed-1">Order placed !</div><br />
                <div id="order-placed-2">Thank You </div>
                <img  id="order-placed-image" src={tick_mark} alt="Image not found"/>
                <div>{navigateToHome()}</div>
            </div>
        )
    }
    else {
        return (
            <div className="full-page-container">
                    <div className="all-info-container">
                        <h3>Order details</h3>
                        <div className="item-list">
                            {
                                cartValue.cart.map((prod) => (
                                    <div className="eachProductCard" key={prod.id}>
                                        <img id="prod-image" src={prod.image} alt="Image not found" />
                                        <div id="prod-details">
                                            <div id="prod-title">{prod.title}</div>
                                            <div id="prod-price">Price: {prod.price}</div>
                                        <div id="prod-quantity">Quantity : {prod.quantity}</div>
                                        </div>
                                        <div id="prod-subTotal-wrapper">
                                            <div id="prod-subTotal">SubTotal : {calculateSubTotal(prod)}</div>
                                        </div>
                                    </div>

                                ))
                            }
                        </div>
                        <div id="cart-total-wrapper">
                            <div id="cart-total">Total : {cartValue.calculateTotal(cartValue.cart)}</div>
                        </div>
                        <div id="info-box-wrapper">
                            <div id="info-box">
                                <div id="info-box-content-area">
                                    <div id="info-box-title-area">Title</div>
                                    <div id="info-box-details-area">
                                        <form id="info-box-form">
                                            <p>Enter your address : </p>
                                            <label>
                                                <textarea
                                                    value={address}
                                                    placeholder="Enter your address"
                                                    required
                                                    onChange={(e) => {
                                                        setAddress(e.target.value)
                                                    }}
                                                />
                                            </label><br />
                                            <label>Enter your payment option :<br />
                                                <input
                                                    type="radio"
                                                    name="paymentMethod"
                                                    value="cash"
                                                /> Cash
                                            </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="paymentMethod"
                                                    value="Credit/Debit Card"
                                                /> Credit/Debit Card
                                            </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="paymentMethod"
                                                    value="Netbanking"
                                                /> Netbanking
                                            </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="paymentMethod"
                                                    value="UPI"
                                                /> UPI
                                            </label>
                                        </form>
                                    </div>
                                    <button id="info-box-btn" onClick={()=> {setOrderStatus(true)}}>Place Order</button>
                                </div>
                                
                            </div>
                        </div>

                        
                    </div>   
                </div>
        )
    }
}
export default Checkout