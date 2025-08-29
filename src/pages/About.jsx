import UserDetails from "../components/UserDetails"
import { Outlet } from "react-router-dom"
import { useContext } from "react"
import { counterContext } from "../context/context_pro"
const About= () => {
    const value=useContext(counterContext)
    return (
        <div>
            <div>call user id 500</div>
            <div>call user id 600</div>
            <div>call user id 700</div>
            <div><Outlet /></div>
            <button onClick={()=> (value.setCounter(value.counter+1))}>
                Hey ({value.counter})
            </button>
        </div>
    )
}
export default About