import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"
import { useForm } from 'react-hook-form'
import '../styles/ContactUsStyles.css'
import { Link } from "react-router-dom"
const ContactUs= () => {
    const {loginState} = useContext(LoginContext)
    const {
        register,
        handleSubmit,
        watch,
        clearErrors,
        setError,   //for custom errors from server
        formState: { errors,isSubmitting,},
    } = useForm({ criteriaMode : 'all'})
    const onSubmit = (data) => {
        console.log(data)
    }
    if(loginState) {
        return (
            <div className="contact-full-container">
                <div className="contact-content-area">
                    <div className="contact-dialog-box">
                        <div className="contact-dialog-box-title">
                            Contact Us
                        </div>
                        <div className="contact-dialog-box-details-area">
                            <form className="contact-us-form" onSubmit={handleSubmit(onSubmit)}>
                                <div className="contact-form-issue-dropdown">
                                    <label >Select your issue :</label>
                                    <select {...register("issueType")}>
                                        <option value="">Select Issue</option>
                                        <option value="productIssue">Product Issue</option>
                                        <option value="delivaryIssue">Delivary Issue</option>
                                        <option value="accountLoginIssue">Account Login Problems</option>
                                        <option value="others">Others</option>
                                    </select>
                                </div>
                                <div className="contact-form-issue-describe">
                                    <textarea 
                                        {...register("issueMessage")}
                                        placeholder="Explain your issue ..."
                                    />
                                </div>
                                <div className="contact-form-submit-btn-wrapper">
                                    <input 
                                        type="submit" 
                                        value="Submit"
                                        className="contact-form-submit-btn"
                                    />
                                </div>    
                            </form>
                        </div>
                    </div>
                </div>  
            </div>
        )
    }
    else {
        return (
            <div className="contact-full-container">
                <div className="contact-logIn-message-wrapper">
                    <div className="contact-logIn-message">Please Login First to send messages !</div>
                    <Link to="/login" className="contact-logIn-redirect-btn">Proceed to Login</Link>
                </div>
            </div>
        )
    }
}
export default ContactUs