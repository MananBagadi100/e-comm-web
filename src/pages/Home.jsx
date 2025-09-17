import { Link, useLocation, useNavigate } from "react-router-dom"
import '../styles/HomeStyles.css'
import { useEffect, useState } from "react"
import { getFeaturedProducts } from "../services/GetService"
import heroImage from "../assets/heroImage.png"
import SunglassesCat from '../assets/Sunglasses_demo.jpg'
import LaptopCat from '../assets/Laptop_demo.jpg'
import PerfumeCat from '../assets/Dior_demo.jpg'
import F1 from '../assets/F1.png'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ProfileImg1 from '../assets/ProfileImg1.png'
import ProfileImg2 from '../assets/ProfileImg2.jpg'
import ProfileImg3 from '../assets/ProfileImg3.jpg'


const Home= () => { 
    const [featuredProducts , setFeaturedProducts] = useState([])
    useEffect(() => {
        Promise.all(
            getFeaturedProducts(1,2,3)   //id's of the featured products 
        )
        .then(setFeaturedProducts)
        .catch(error => console.log("The error is ",error)) 
    },[])
    console.log("the featuredProducts state is : ", featuredProducts)
    if(featuredProducts.length !== 0) {
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
                        <div className="home-top-category-card">
                            <img className="home-category-image" src={PerfumeCat} alt="Image not Found"/>
                            <div className="home-category-txt">Explore Perfumes</div>
                        </div>
                        <div className="home-top-category-card">
                            <img className="home-category-image" src={F1} alt="Image not Found"/>
                            <div className="home-category-txt">Try Sunglasses</div>
                        </div>
                        <div className="home-top-category-card">
                            <img className="home-category-image" src={LaptopCat} alt="Image not Found"/>
                            <div className="home-category-txt">Shop Laptops</div>
                        </div>
                    </div>
                    //------------------------------------------
                    <div id="home-featured-product-main-title">
                        Featured Products
                    </div>
                    <div id="home-featured-options">
                        <div className="home-featured-product-card">
                            <img src={featuredProducts[0].data.images[0]} alt="Image not found" className="home-featured-image" />
                            <div className="home-featured-product-details" >
                                <div className="home-featured-product-title">{featuredProducts[0].data.title}</div>
                                <div className="home-featured-product-price">$ {featuredProducts[0].data.price}</div>
                                <div className="home-featured-product-rating">{featuredProducts[0].data.rating} ⭐️</div>
                            </div>
                        </div>
                        <div className="home-featured-product-card">
                            <img src={featuredProducts[1].data.images[0]} alt="Image not found" className="home-featured-image" />
                            <div className="home-featured-product-details" >
                                <div className="home-featured-product-title">{featuredProducts[1].data.title}</div>
                                <div className="home-featured-product-price">$ {featuredProducts[1].data.price}</div>
                                <div className="home-featured-product-rating">{featuredProducts[1].data.rating} ⭐️</div>
                            </div>
                        </div>
                        <div className="home-featured-product-card">
                            <img src={featuredProducts[2].data.images[0]} alt="Image not found" className="home-featured-image" />
                            <div className="home-featured-product-details" >
                                <div className="home-featured-product-title">{featuredProducts[2].data.title}</div>
                                <div className="home-featured-product-price">$ {featuredProducts[2].data.price}</div>
                                <div className="home-featured-product-rating">{featuredProducts[2].data.rating} ⭐️</div>
                            </div>
                        </div>
                    </div>
                    <div id="home-customer-testimonials-main-title">
                        Customer Testimonials
                    </div>
                    <div id="home-customer-testimonials-options">
                        <div className="home-customer-testimonials-wrapper">
                            <div className="home-customer-testimonials-heading">
                                <img src={ProfileImg1} alt='Not found' className="home-customer-profile-pic"/>
                                <div className="home-customer-testimonial-name">Abhishek Banerjee</div>
                            </div>
                            <div className="home-customer-testimonials-review">
                                Lightning-fast site, clean navigation, and checkout took under a minute. Loved the live order tracking.
                            </div>
                        </div>
                        <div className="home-customer-testimonials-wrapper">
                            <div className="home-customer-testimonials-heading">
                                <img src={ProfileImg2} alt='Not found' className="home-customer-profile-pic"/>
                                <div className="home-customer-testimonial-name">Aarav Mehta</div>
                            </div>
                            <div className="home-customer-testimonials-review">
                                Great filters and search—found what I needed in two clicks. UPI payment was smooth and instant.
                            </div>
                        </div>
                        <div className="home-customer-testimonials-wrapper">
                            <div className="home-customer-testimonials-heading">
                                <img src={ProfileImg3} alt='Not found' className="home-customer-profile-pic"/>
                                <div className="home-customer-testimonial-name">Sara D'Souza</div>
                            </div>
                            <div className="home-customer-testimonials-review">
                                Mobile experience is superb. Clear return policy, proactive updates, and support replied in 5 minutes.
                            </div>
                        </div>
                    </div>
                    <div id="home-contact-section">
                        <div id="contact-section-wrapper">Any Questions ? Contact us at 
                            <Link> example@gmail.com</Link>
                        </div>
                    </div>
                </div>
                
            </div>
            
        )
    }
    else {  //till the products load
        return (
            <div>
                <div>Loading ..</div>
                <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',   // center horizontally
                    alignItems: 'center',       // center vertically
                    height: '100vh'             // full viewport height
                }}>
                <CircularProgress 
                    size="50px"
                    sx={{color: 'var(--loading-animation-color)'}}    
                />
            </Box>
            </div>
        )
    }
}
export default Home
