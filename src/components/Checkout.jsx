import { useContext } from "react"
import { cartContext } from "../context/CartContext"
import '../styles/CheckoutStyles.css'

const Checkout = () => {
    const cartValue = useContext(cartContext)
    const calculateSubTotal = (prod) => {
        return ((prod.price * prod.quantity).toFixed(2))
    }
    return (
        <div className="full-page-container">
            <div className="all-info-container">
                <div>Hey this is checkout page</div>
                <div>Order details</div>
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
            </div>
        </div>
    )
}
export default Checkout