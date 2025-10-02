import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"
import '../styles/ContactUsStyles.css'
import { Link } from "react-router-dom"
const ContactUs= () => {
    const {loginState} = useContext(LoginContext)
    if(loginState) {
        return (
            <div className="contact-us-full-container">
                <div id="contact-us-dialog-box">
                    <div id="contact-us-dialog-box-title">Contact Us</div>
                    <div id="contact-us-dialog-box-content-area">
                        <div id="contact-us-issue-dropdown-wrapper">
                            <div id="contact-us-issue-dropdown-label">Select Issue : </div>
                            <div id="contact-us-issue-dropdown-menu">
                                <select value="">
                                    <option value="">Select Issue</option>
                                    <option value="productIssue">Product Issue</option>
                                    <option value="delivaryIssue">Delivary Issue</option>
                                    <option value="accountLoginIssue">Account Login Problems</option>
                                    <option value="others">Others</option>
                                </select>
                            </div>
                        </div>
                        <div id="contact-us-message-area-wrapper">
                            <div id="contact-us-message-label">Message : </div>
                            <div id="contact-us-message-area">
                                <textarea 
                                    placeholder="Describe your issue ..."
                                />
                            </div>
                        </div>
                        <button id="contact-us-submit-btn" type="submit">Submit</button>
                    </div>
                </div>
            </div>
        )

    }
    else {
        return (
            <div className="contact-us-full-container">
                <div id="contact-us-message-wrapper">
                    <div id="contact-us-message">Please Login First to send messages !</div>
                    <Link to="/login" id="contact-us-login-redirect-btn">Proceed to Login</Link>
                </div>
            </div>
        )
    }
}
export default ContactUs