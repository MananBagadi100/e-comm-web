import { useContext, useState } from "react"
import { cartContext } from "../context/CartContext"
import '../styles/CheckoutStyles.css'

const Checkout = () => {
    const cartValue = useContext(cartContext)
    const [address , setAddress ] = useState('')
    const calculateSubTotal = (prod) => {
        return ((prod.price * prod.quantity).toFixed(2))
    }
    return (
        <div className="full-page-container">
                <div className="all-info-container">
                    <div>Hey this is checkout page</div>
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
                                <button id="info-box-btn">Place Order</button>
                            </div>
                            
                        </div>
                    </div>

                    
                </div>   
            </div>
    )
}
export default Checkout