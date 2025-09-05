import '../styles/LoginStyle.css'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from '../context/LoginContext'

const Login= () => {
    const value = useContext(LoginContext)
    const handleNameChange =(e) => {
        setUserName(e.target.value)
    }
    const handlePasswordChange= (e) => {
        setPassword(e.target.value)
    }
    const handleSubmitBtnClick= () => {
        if(!userName.trim() || !password.trim()){
            alert("Please enter both your username and password")
            return
        }
        else {
            value.storeLoginState(true)
        }
        navigate('/',{ state : {userName}})
    }
    const [userName,setUserName] =useState('')
    const [password,setPassword] =useState('')
    const navigate=useNavigate()
    if(value.loginState === false ) {
        return (
            <div className='login-container-wrapper'>
                <div className='login-container'>
                    <div className='heading-container'>Login</div>
                    <div className='details-container'>
                        <div className='name-container'>
                            <label>Name : </label>
                            <input type='text' 
                            value={userName} onChange={handleNameChange}
                            placeholder='Enter your name'>
                            </input>
                        </div>
                        <div className='password-container'>
                            <label>Password : </label>
                            <input type='password'
                            value={password} onChange={handlePasswordChange}
                            placeholder='Enter your password'>
                            </input>
                        </div>
                        <button className='submit-btn' type='submit' onClick={handleSubmitBtnClick}>Submit</button>
                        <p className='registration-link'>New User? <a href='/register'>Register Now !</a></p>
                    </div>
                    
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <div>Hey you are already logged in !</div>
                <button id='logoutBtn' onClick={()=> {value.storeLoginState(false)}}>Logout</button>
            </div>
        )
    }
}
export default Login