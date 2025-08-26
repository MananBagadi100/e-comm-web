import { NavLink,Outlet } from "react-router-dom"
import '../styles/ProductStyling.css'

const Products= () => {
    
        
    return (
        <div>
            <div>
                <h2>This is Products Page</h2>
                <div className="product-filters">
                    <NavLink to="newly-launched" className={({ isActive }) => `tab-btn ${isActive ? 'active' : ''}`}>
                    Newly Launched
                    </NavLink>

                    <NavLink to="out-of-stock" className={({ isActive }) => `tab-btn ${isActive ? 'active' : ''}`}>
                    Out of Stock
                    </NavLink>
                </div>
            </div>
            <Outlet />
        </div>
    )
}
export default Products