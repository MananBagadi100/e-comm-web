import '../styles/LoginStyle.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Login= () => {
    const handleNameChange =(e) => {
        setUserName(e.target.value)
    }
    const handlePasswordChange= (e) => {
        setPassword(e.target.value)
    }
    const handleBtnClick= () => {
        navigate('/',{ state : {userName}})
    }
    const [userName,setUserName] =useState('')
    const [password,setPassword] =useState('')
    const navigate=useNavigate()
    const location=useLocation()
    return (
        <div className='login-container'>
            <div>
                <label>Name : </label>
                <input type='text' 
                value={userName} onChange={handleNameChange}
                placeholder='Enter your name'>
                </input>
            </div>
            <div>
                <label>Password : </label>
                <input type='password'
                value={password} onChange={handlePasswordChange}
                placeholder='Enter your password'>
                </input>
            </div>
            <button type='submit' onClick={handleBtnClick}>Submit</button>
            
        </div>
    )
}
export default Login