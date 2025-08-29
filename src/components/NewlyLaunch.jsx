import { useEffect , useState } from "react";
import '../styles/NewlyLaunchStyles.css'
import { getNewlyLaunchedProducts } from "../services/GetService";
import Cart from "./Cart";

const NewlyLaunched = () => {
    const [productInfo,setProductInfo] = useState({products:[]})
    useEffect(() => {
        getNewlyLaunchedProducts()
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

    console.log('this is newly launched products',productInfo)

    return (
        <div>
            <h3 className="product-headings">Newly Launched Products</h3>
            <div className="product-grid">
                {
                    productInfo && productInfo.products.map((item)=> (
                        <div key={item.id} className="product-card" onClick={handleProductOnClick}>
                            <img src={item.images[0]} alt="Image not given" />
                            <div>ID : {item.id}</div>
                            <div>Title: {item.title}</div>
                            <div>Price : {item.price}</div>
                            <div>Rating : {item.rating}</div>
                            <div>Brand : {item.brand}</div>
                            <button className="cart-btn" onClick={handleAddToCart(item)}>Add to cart</button>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}    
export default NewlyLaunched
