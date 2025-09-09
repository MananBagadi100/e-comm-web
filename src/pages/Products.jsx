import { useEffect , useState , useContext} from "react";
import '../styles/ProductStyles.css'
import { getAvailableProducts } from "../services/GetService";
import { cartContext } from "../context/CartContext";   //name of portal
import { Link, NavLink } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Products = () => {
    const [productInfo,setProductInfo] = useState({products:[]})
    useEffect(() => {
        getAvailableProducts()
            .then(response => {
                setProductInfo({products:response.data.products})
            })
    },[])
    //portal open
    const cartHandler=useContext(cartContext)

    return (
        <div id="full-products-page">
            <div id="product-filters">
                <Sidebar />
            </div>
            <div id="product-details-part">
                <h3 className="product-headings">Available Products</h3>
                <div>
                    <div className="product-filters-btn">
                        <NavLink to="out-of-stock" className="tab-btn">
                        Out of Stock
                        </NavLink>
                    </div>
                    <div className="product-grid">
                        {    
                            productInfo && productInfo.products.map((item) => (
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
                </div>
            </div>
        </div>
    )
}    
export default Products
