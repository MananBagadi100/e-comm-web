import '../styles/NavbarStyles.css'
import { NavLink } from 'react-router-dom'
import { useState,useContext, useEffect } from 'react'
import { LoginContext } from '../context/LoginContext'
const Navbar = ()=> {
    const [menuOpen , setMenuOpen] =useState(false) //this is for dropdown menu state for mobile devices
    const toggleMenu = () => {setMenuOpen(!menuOpen)}   //function to open and close menu in mobile devices
    // <nav className='navbar'>
    //     {/* Hamburger icon only for mobile */}
    //     <button className="nav-hamburger" onClick={toggleMenu}>☰</button>

    //     <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
    //         {/* ...nav items */}
    //     </ul>
    //     <ul className='nav-btn-list'>
    //         {/* ...login/theme */}
    //     </ul>
    // </nav>
    const navItems = [
        {path: '/' , label:'Home'},
        {path: '/products' , label: 'Products'},
        {path: '/about-us' , label: 'About-us'},
        {path: '/contact-us' , label: 'Contact Us'},
        {path: '/cart' , label:'Cart'},
        // {path: '/login' , label: 'Login'},
        ]
        const [loginBTnValue , setLoginBtnValue] = useState("Login")
        const [themeBtnTxt , setThemeBtnTxt] = useState('☀️')
        const [theme , setTheme] = useState('light')
        const value = useContext(LoginContext)
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
    //set the login button value
    useEffect (()=> {
        value.loginState === true ? setLoginBtnValue("Logged IN !") : setLoginBtnValue("login")
    },[value.loginState])
    
    return (
        <nav className='navbar'>
            <button
                className='nav-hamburger'
                onClick={toggleMenu}
                aria-label='Toggle Navigation menu'
            >
                ⏹️
            </button>
            <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
                {navItems.map((items)=>(
                    <li key={items.path} className='nav-item'>
                        <NavLink to={items.path} onClick={() => setMenuOpen(false)}>
                            {items.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <ul className={`nav-btn-list ${menuOpen ? 'open' : ''}`}>
                <li key='/login' className='nav-btn-item'>
                    <NavLink to='/login' onClick={() => setMenuOpen(false)}>
                        {loginBTnValue}
                    </NavLink>
                </li>
                <li className='nav-btn-item-2'>
                    <button className='nav-toggle-theme-btn' onClick={toggleTheme}>{themeBtnTxt}</button>
                </li>
            </ul>
            
        </nav>
    )
}
export default Navbar