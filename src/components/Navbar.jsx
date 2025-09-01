import '../styles/NavbarStyles.css'
import { NavLink } from 'react-router-dom'
import { useState,useContext } from 'react'
const Navbar = ()=> {
    const navItems = [
        {path: '/' , label:'Home'},
        {path: '/products' , label: 'Products'},
        {path: '/about-us' , label: 'About-us'},
        {path: '/contact-us' , label: 'Contact Us'},
        {path: '/cart' , label:'Cart'},
        // {path: '/login' , label: 'Login'},
        ]
        const [themeBtnTxt , setThemeBtnTxt] = useState('☀️')
        const [theme , setTheme] = useState('light')
        const toggleTheme = () => {
            if (theme == 'light') {
                document.body.classList.add('dark-theme')
                setTheme('dark')
                setThemeBtnTxt('🌙')
            }
            else {
                document.body.classList.remove('dark-theme')
                setTheme('light')
                setThemeBtnTxt('☀️')
            }

    }
  
    return (
        <nav className='navbar'>
            <ul className='nav-list'>
                {navItems.map((items)=>(
                    <li key={items.path} className='nav-item'>
                        <NavLink to={items.path}>{items.label}</NavLink>
                    </li>
                ))}
            </ul>
            <ul className='nav-btn-list'>
                <li key='/login' className='nav-btn-item'>
                    <NavLink to='/login'>Login</NavLink>
                </li>
                <li>
                    <button className='nav-toggle-theme-btn' onClick={toggleTheme}>{themeBtnTxt}</button>
                </li>
            </ul>
            
        </nav>
    )
}
export default Navbar