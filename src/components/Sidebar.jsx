import '../styles/SidebarStyles.css'
import { getProductCategories } from '../services/GetService'
import { useEffect, useState } from 'react'
const Sidebar = ({filterProductsArray , setFilterProductsArray}) => {
    const [ categories , setCategories] = useState([])
    function handleChange (categoryObject) {
        const exists = filterProductsArray.find((item) => (item.slug === categoryObject.slug))
        if(exists) {    //checkbox is  already checked
            setFilterProductsArray((prev) => {
                return prev.filter((item) => item.slug !== categoryObject.slug)
            })
        }
        else {  //checkox is being checked now
            setFilterProductsArray((prev) => {
                return [...prev, {
                    slug : categoryObject.slug,
                    name : categoryObject.name,
                    url : categoryObject.url
                }]
            })
        }
        console.log("the checked box name is ",categoryObject.name )
        console.log("the checked box slug is ",categoryObject.slug )
        console.log("the checked box url is ",categoryObject.url )
    }
    useEffect (() => {
        const fetchData = async () => {
            const response = await getProductCategories()
            const finalResponse = await response.data
            setCategories(finalResponse)
            console.log(finalResponse)
        }
        fetchData()
    },[])
    return (
        <div id="main-content-area">
            <div id='sidebar-title'>Filter by : </div>
                <div id='category-filter'>
                    <div id='category-title'>Category</div>
                    <div id='category-types'>
                        {
                        categories.map((eachCategory) => (
                            <div key={eachCategory.slug} className='product-category-types'>
                                <form>
                                    <label>
                                        <input
                                            type='checkbox'
                                            name={eachCategory.slug}
                                            onChange={() =>{handleChange(eachCategory)}}
                                        />{eachCategory.name}
                                    </label>
                                </form>
                            </div>
                        ))
                        }
                    </div>
                </div>
                    
            <div>hey how are you </div>
        </div>
    )
}
export default Sidebar