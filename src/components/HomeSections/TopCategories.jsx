import '../../styles/HomeStyles/TopCategoriesStyles.css'
import LaptopCat from '../../assets/Laptop_demo.jpg'
import PerfumeCat from '../../assets/Dior_demo.jpg'
import F1 from '../../assets/F1.png'
const TopCategories = () => {
    return (
        <div className="home-top-categories-main-div">
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
        </div>
    )
}
export default TopCategories