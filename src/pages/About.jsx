import UserDetails from "../components/UserDetails"
import { Outlet } from "react-router-dom"
const About= () => {

    return (
        <div>
            <div>call user id 500</div>
            <div>call user id 600</div>
            <div>call user id 700</div>
            <div><Outlet /></div>
        </div>
    )
}
export default About