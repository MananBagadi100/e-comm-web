import { Link, useLocation, useNavigate } from "react-router-dom"
import '../styles/HomeStyles.css'
import heroImage from "../assets/heroImage.png"
import SunglassesCat from '../assets/Sunglasses_demo.jpg'
import LaptopCat from '../assets/Laptop_demo.jpg'
import PerfumeCat from '../assets/Dior_demo.jpg'
import F1 from '../assets/F1.png'
const Home= () => { 
    const navigate = useNavigate()
        return (
            <div id="home-full-container">
                <div id="home-content-area">
                    <Link to='/products/98'>
                        <div id="hero-image-wrapper">
                            <img src={heroImage} id="hero-image" alt="Image Not Found"/>
                        </div>
                    </Link>
                    <div id="home-top-categories-title">
                        Top Categories
                    </div>
                    <div id="home-top-categories-options">
                        <div id="home-top-category-1">
                            <img className="home-category-image" src={PerfumeCat} alt="Image not Found"/>
                            <div className="home-category-txt">Explore Perfumes</div>
                        </div>
                        <div id="home-top-category-2">
                            <img className="home-category-image" src={F1} alt="Image not Found"/>
                            <div className="home-category-txt">Try Sunglasses</div>
                        </div>
                        <div id="home-top-category-3">
                            <img className="home-category-image" src={LaptopCat} alt="Image not Found"/>
                            <div className="home-category-txt">Shop Laptops</div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        )
}
export default Home
