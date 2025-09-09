import '../styles/SidebarStyles.css'
import { getProductCategories } from '../services/GetService'
import { useEffect, useState } from 'react'
const Sidebar = () => {
    const [ categories , setCategories] = useState([])
    function handleChange (obj) {
        console.log("the checked box name is ",obj.name )
        console.log("the checked box slug is ",obj.slug )
        console.log("the checked box url is ",obj.url )
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