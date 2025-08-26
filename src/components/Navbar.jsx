import '../styles/NavbarStyles.css'
import { NavLink } from 'react-router-dom'
const Navbar = ()=> {
    const navItems = [
        {path: '/' , label:'Home'},
        {path: '/products' , label: 'Products'},
        {path: '/about-us' , label: 'About-us'},
        {path: '/contact-us' , label: 'Contact Us'},
        {path: '/cart' , label:'Cart'},
        {path: '/login' , label: 'Login'},
        
    ]
    return (
        <nav className='navbar'>
            <ul className='nav-list'>
                {navItems.map((items)=>(
                    <li key={items.path} className='nav-item'>
                        <NavLink to={items.path}>{items.label}</NavLink>
                    </li>
                ))}
            </ul>
            <button className='toggle-theme'>Toggle Theme</button>
        </nav>
    )
}
export default Navbar