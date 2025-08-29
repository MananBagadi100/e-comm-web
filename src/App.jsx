import { useState , useEffect} from 'react'
import './styles/App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Login from './pages/Login'
import NewlyLaunched from './components/NewlyLaunch'
import OutofStock from './components/OutofStock'
import Navbar from './components/Navbar'
import UserDetails from './components/UserDetails'
import Admin from './components/Admin'
import Cart from './components/Cart'

function App() {
  
	
	
  return (
    <div className='all-pages-container'>
        <BrowserRouter>
        <Navbar />
        <main className='page-contents'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products />}>
                    <Route path='newly-launched' index element={<NewlyLaunched />} />
                    <Route path='out-of-stock' element={<OutofStock />} />
                    <Route index element={<NewlyLaunched />} />
                </Route>
                <Route path='/about-us' element={<About />} />
                <Route path='/about-us/:userId' element={<UserDetails />} />
                <Route path='/about-us/admin/:name' element={<Admin />} />
                <Route path='/contact-us' element={<ContactUs />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </main>
        </BrowserRouter>
    </div>
  )
}
export default App
