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
                <div id="order-placed-heading">Order placed !</div><br />
                <div id="order-placed-subHeading">Thank You </div>
                <img  id="order-placed-image" src={tick_mark} alt="Image not found"/>
                <div>{navigateToHome()}</div>
            </div>
        )
    }
    else {
        return (
            <div className="full-page-container">
                    <div className="all-info-container">
                        <div className="checkout-main-heading">Order Summary</div>
                        <div className="checkout-item-list">
                            {
                                cartValue.cart.map((prod) => (
                                    <div className="checkout-eachProductCard" key={prod.id}>
                                        <div className="checkout-product-info">
                                            <div id="checkout-product-image-wrapper">
                                                <img id="checkout-product-image" src={prod.image} alt="Image not found" />
                                            </div>
                                            <div id="checkout-product-details">
                                                <div id="checkout-product-title">{prod.title}</div>
                                                <div id="checkout-product-price">Price: {prod.price}</div>
                                                <div id="checkout-product-quantity">Quantity : {prod.quantity}</div>
                                            </div>
                                        </div>
                                        <div id="checkout-product-subTotal">SubTotal : {calculateSubTotal(prod)}</div>
                                    </div>

                                ))
                            }
                        </div>
                        <div id="checkout-total-wrapper">
                            <div id="checkout-total">Total : {cartValue.calculateTotal(cartValue.cart)}</div>
                        </div>
                        <div id="info-box-wrapper">
                            <div id="info-box">
                                <div id="info-box-content-area">
                                    <div id="info-box-title-area">Other Details</div>
                                    <div id="info-box-details-area">
                                        <form id="info-box-form">
                                            <div id="info-box-address-label-wrapper">
                                                <label id="info-box-address-label">Enter your Address :</label>
                                                <textarea
                                                    value={address}
                                                    placeholder="Enter your address"
                                                    required
                                                    onChange={(e) => {
                                                        setAddress(e.target.value)
                                                    }}
                                                />
                                            </div>
                                            <br />
                                            <label>Enter your payment option :<br />
                                                <input
                                                    type="radio"
                                                    name="paymentMethod"
                                                    value="cash"
                                                /> Cash
                                            </label><br />
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="paymentMethod"
                                                    value="Credit/Debit Card"
                                                /> Credit/Debit Card
                                            </label><br />
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="paymentMethod"
                                                    value="Netbanking"
                                                /> Netbanking
                                            </label><br />
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="paymentMethod"
                                                    value="UPI"
                                                /> UPI
                                            </label><br />
                                        </form>
                                        <div id="info-box-place-order-btn-wrapper">
                                            <button id="info-box-place-order-btn" onClick={()=> {setOrderStatus(true)}}>Place Order</button>
                                        </div>

                                    </div>
                                    
                                        
                                </div>
                                
                            </div>
                        </div>

                        
                    </div>   
                </div>
        )
    }
}
export default Checkout