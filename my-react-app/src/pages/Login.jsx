import '../styles/LoginStyle.css'
import { useContext, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { LoginContext } from '../context/LoginContext'
import { useForm } from 'react-hook-form'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';
//storeLoginState is a global function to change the login state 
const Login= () => {
    const [userName,setUserName] =useState('')
    const [password,setPassword] =useState('')
    const value = useContext(LoginContext)
    const location = useLocation()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        watch,
        setError,   //for custom errors from server
        formState: { errors,isSubmitting,},
    } = useForm()
    const handleNameChange =(e) => {
        setUserName(e.target.value)
    }
    const handlePasswordChange= (e) => {
        setPassword(e.target.value)
    }
    const handleSubmitBtnClick= () => {
        // if(!userName.trim() || !password.trim()){
        //     alert("Please enter both your username and password")
        //     return
        // }
        // else {      //user has logged in
        //     value.storeLoginState(true)
        //     const urlParams = new URLSearchParams(location.search)
        //     console.log(urlParams)
        //     const redirectTo = urlParams.get('redirect') || '/'
        //     navigate(redirectTo,{replace: true})
        value.storeLoginState(true)
        const urlParams = new URLSearchParams(location.search)
        console.log(urlParams)
        // const redirectTo = urlParams.get('redirect') || '/'
        // navigate(redirectTo,{replace: true})
    }
    
    const onSubmit = async(data) => {
        console.log('The name is ',data)
    }
    if(value.loginState === false ) {
        return (
            <div className='login-container-wrapper'>
                <div className='login-container'>
                    <div className='login-heading-container'>Login</div>
                    <form className='login-details-container' onSubmit={handleSubmit(onSubmit)}>
                        <div className='login-input-container-wrapper'>
                            <div className="login-input-container">
                                <div className='login-field-input-icons'>
                                    <AccountCircleIcon sx={{fontSize:36}}/>
                                </div>
                                <input type='text'
                                    className='login-input-fields' 
                                    // value={userName} 
                                    // onChange={handleNameChange}
                                    {...register("username",
                                        {required:true,minLength:{value:5,message:"Min length should be 5"},
                                        maxLength:{value:35,message:"Max length should not exceed 35"}})}
                                    placeholder='Enter your name'>
                                </input>
                            </div>
                            {errors.username && <div>{errors.username.message}</div>}
                        </div>
                        <div className='login-input-container-wrapper'>
                            <div className="login-input-container">
                                <div className='login-field-input-icons'>
                                    <KeyIcon sx={{fontSize:36}}/>
                                </div>
                                <input type='password'
                                    className='login-input-fields' 
                                    // value={userName} 
                                    // onChange={handleNameChange}
                                    {...register("password",
                                        {required:true,minLength:{value:5,message:"Password min length should be 5"},
                                        maxLength:{value:35,message:"Password max length should not exceed 35"}})}
                                    placeholder='Enter your password'>
                                </input>
                            </div>
                            {errors.username && <div>{errors.username.message}</div>}
                        </div>
                        <div className="login-submit-btn-wrapper">
                            <button className='submit-btn' type='submit'>Submit</button>
                        </div>
                        <p className='registration-link'>New User? <a href='/register'>Register Now !</a></p>
                    </form>
                    
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