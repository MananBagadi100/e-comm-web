import { useEffect , useState , useContext} from "react";
import '../styles/ProductStyles.css'
import { getAvailableProducts } from "../services/GetService";
import { cartContext } from "../context/CartContext";   //name of portal
import { Link, NavLink } from "react-router-dom";

const AvailableProducts = () => {
    const [productInfo,setProductInfo] = useState({products:[]})
    useEffect(() => {
        getAvailableProducts()
            .then(response => {
                setProductInfo({products:response.data.products})
            })
    },[])
    const handleProductOnClick = () => {
        console.log('hello')      
    }
    function handleAddToCart (item) {
        console.log('hiiiii ') 
    }
    //portal open
    const cartHandler=useContext(cartContext)

    return (
        <div>
            <h3 className="product-headings">Available Products</h3>
            <div>
                <div className="product-filters-btn">
                    <NavLink to="out-of-stock" className="tab-btn">
                    Out of Stock
                    </NavLink>
                </div>
                <div className="product-grid">
                    <Link to='/:product_id' className="product-card-wrapper">
                    {    
                        productInfo && productInfo.products.map((item) => (
                            <div key={item.id} className="product-card" onClick={() => (console.log("hi"))}>
                                <img src={item.images[0]} alt="Image not given" />
                                <div>ID : {item.id}</div>
                                <div>Title: {item.title}</div>
                                <div>Price : {item.price}</div>
                                <div>Rating : {item.rating}</div>
                                <div>Brand : {item.brand}</div>
                                <button className="cart-btn" onClick={()=>{cartHandler.addToCart(item)} }>Add to cart</button>
                            </div>
                        ))
                    }
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}    
export default AvailableProducts
