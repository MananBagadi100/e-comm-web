import '../styles/RenderProductsStyle.css'
const RenderProducts = () => {
    return(
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
    )
}
export default RenderProducts