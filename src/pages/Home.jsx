import { useLocation } from "react-router-dom"
const Home= () => { 
    const location= useLocation()
    let {userName} = location.state || {}
    if({userName}==null) {
        return (<div>Welcome to our page Guest !</div>)
    }
    else {
        return (
        <div>Welcome to our home page {userName} !</div>
    )
    }
}
export default Home