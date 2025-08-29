import { useContext } from "react"
import { counterContext } from "../context/context_pro"
const ContactUs= () => {
    const value=useContext(counterContext)
    return (
        <div>
            <div>This is Contact us page</div>
            <button onClick={()=> value.setCounter(value.counter+1)}>
                Hey ({value.counter})
            </button>
        </div>
        
    )
}
export default ContactUs