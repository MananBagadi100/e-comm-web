import { useEffect , useState , useContext, useRef} from "react";
import '../styles/ProductStyles.css'
import { getAvailableProducts } from "../services/GetService";
import { cartContext } from "../context/CartContext";   //name of portal
import { Link, NavLink } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { ProductContext } from "../context/ProductContext";
import RenderProducts from "../components/RenderProducts";

const Products = () => {
    //this state array contains all the product categories which have been checked filter checkboxes
    const [filterProductsArray , setFilterProductsArray] = useState([]) 
    const [productInfo,setProductInfo] = useState({products:[]})
    const productValue = useContext(ProductContext)
    //new code HERE !
    const [selectedMinPrice , setSelectedMinPrice] = useState(["0"])    //lower value of price filter
    const [selectedMaxPrice , setSelectedMaxPrice] = useState(["1"])    //higher value of price filter
    const [defaultPriceRangeValue , setDefaultPriceRangeValue] = useState(["0","1"])
    const [rangeError , setRangeError] = useState('')
    function calculateMinMaxAllProducts(products) {
        const productPrices = products.map((item) => item.price)
            const minDefaultPrice = Math.min(...productPrices)
            const maxDefaultPrice = Math.max(...productPrices)
            setSelectedMinPrice(minDefaultPrice)
            setSelectedMaxPrice(maxDefaultPrice)
            return ([selectedMinPrice,selectedMaxPrice])
    }
    // function handlePriceFilter () {

        // console.log("I am inside the go onclick function starting")
        // if(selectedMinPrice==='' || selectedMaxPrice==='') {   //user left empty values on both or either of them
        //     //we will assign the stored default values of min and max for all products
        //     setSelectedMinPrice(defaultPriceRangeValue[0])  
        //     setSelectedMaxPrice(defaultPriceRangeValue[1])
        //     setRangeError('Please fill both values for filtering')
        // }
        // else if(Number(selectedMinPrice) >= Number(selectedMaxPrice)) {  //lower value is given higher than upper value
        //     setRangeError('From value must always be smaller than To value')
        // }
        // if(Number(selectedMinPrice) <= Number(selectedMaxPrice)) {   //ideal case
        //     setRangeError('')
        // }
        // console.log("DEBUG I am in go onclick function")

    
    function updateMin (value) {
        const newMin = value
        setSelectedMinPrice(value)
    }
    function updateMax (value) {
        const newMax = value
        setSelectedMaxPrice(value)
    }
    function handleChange() {
        if(selectedMinPrice < selectedMaxPrice) {
            setRangeError('')
        }
        else if(selectedMinPrice >= selectedMaxPrice) {
            setRangeError('Min value must be smaller than Max value')
        }
        else if(selectedMinPrice==='' || selectedMaxPrice==='') {
            setRangeError('Please fill both the values')
        }
    }
    useEffect(() => {
    // run every time either box changes
    if (selectedMinPrice === '' || selectedMaxPrice === '') {
        setRangeError('Please fill both values');
    } 
    else if (+selectedMinPrice >= +selectedMaxPrice) {
        setRangeError('Min value must be smaller than Max');
    } 
    else {
        setRangeError('');                // perfect ➜ no warning
    }
    }, [selectedMinPrice, selectedMaxPrice])

    //this the Min Rating for rating filter in sidebar
    console.log("The min rating currently is ",productValue.minRating)
    useEffect(() => {
        getAvailableProducts()
            .then(response => {
                setProductInfo({products:response.data.products})
            })
    },[])
    useEffect(() => {
        if(productInfo.products.length!==0) {
            const temp = calculateMinMaxAllProducts(productInfo.products)
            console.log("the value of temp is ",temp)
            setDefaultPriceRangeValue(temp) //store default values in a state
            console.log("Data received from productInfo")
        }
        else {
            console.log("Data still not received from productInfo")
        }
    },[productInfo.products])

    
    return (
        <div id="full-products-page">
            <div id="product-filters">
                <Sidebar filterProductsArray={filterProductsArray} setFilterProductsArray={setFilterProductsArray} 
                    updateMin={updateMin} 
                    updateMax={updateMax} 
                    // handlePriceFilter={handlePriceFilter}
                    selectedMinPrice={selectedMinPrice}
                    selectedMaxPrice={selectedMaxPrice}
                    rangeError={rangeError}
                    handleChange={handleChange}
                />
            </div>
            <div id="product-details-part">
                <h3 className="product-headings">Available Products</h3>
                <div>
                    <div className="product-filters-btn">
                        <NavLink to="out-of-stock" className="tab-btn">
                        Out of Stock
                        </NavLink>
                    </div>
                    <RenderProducts productInfo={productInfo} filterProductsArray={filterProductsArray} 
                        selectedMinPrice={selectedMinPrice} 
                        selectedMaxPrice={selectedMaxPrice}
                        rangeError={rangeError}
                    />
                </div>
            </div>
        </div>
    )
}
export default Products
