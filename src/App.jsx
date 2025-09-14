import './styles/App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Login from './pages/Login'
import {ProductProvider} from './context/ProductContext.jsx'
import OutofStock from './components/OutofStock'
import Navbar from './components/Navbar'
import UserDetails from './components/UserDetails'
import Admin from './components/Admin'
import Cart from './components/Cart'
import ProductDetails from './components/ProductDetails.jsx'
import Checkout from './components/Checkout.jsx'
import Fallback from './pages/Fallback.jsx'

function App() {
  
	
	
  return (
    <div className='all-pages-container'>
        <BrowserRouter>
        <Navbar />
        <main className='page-contents'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<ProductProvider />} />
                <Route path='/products/:product_id' element={<ProductDetails />} />
                <Route path='/products/out-of-stock' element={<OutofStock />} />
                <Route path='/about-us' element={<About />} />
                <Route path='/contact-us' element={<ContactUs />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/login' element={<Login />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='*' element={<Fallback />} />  
            </Routes>
        </main>
        </BrowserRouter>
    </div>
  )
}
export default App
