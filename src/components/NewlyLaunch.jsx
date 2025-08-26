import { useEffect , useState} from "react";
import '../styles/NewlyLaunchStyles.css'
import { getNewlyLaunchedProducts } from "../services/GetService";

const NewlyLaunched = () => {
    const [productInfo,setProductInfo] = useState({products:[]})
    useEffect(() => {
        getNewlyLaunchedProducts()
            .then(response => {
                setProductInfo({products:response.data.products

                })
            })
    },[])
    console.log('this is newly launched products',productInfo)
    return (
        <div>
            <h3>Newly Launched Products</h3>
            <div className="product-grid">
                {
                    productInfo && productInfo.products.map((item)=> (
                        <div key={item.id} className="product-card">
                            <img src={item.images[0]} alt="Image not given" />
                            <div>ID : {item.id}</div>
                            <div>Title: {item.title}</div>
                            <div>Price : {item.price}</div>
                            <div>Rating : {item.rating}</div>
                            <div>Brand : {item.brand}</div>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}    
export default NewlyLaunched
