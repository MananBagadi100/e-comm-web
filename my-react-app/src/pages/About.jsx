import { counterContext } from "../context/context_pro"
import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"
const About= () => {
    const [firstName , setFirstName] = useState('')
      const {
        register,
        handleSubmit,
        watch,
        setError,   //for custom errors from server
        formState: { errors,isSubmitting,},
    } = useForm()
    // const handleSubmit = async(e) => {
    //     e.preventDefault()
    //     const serverAnswer = await axios.post('http://localhost:3000/frontendDemo',{ msg : "hey server how are you from react.js"})
    //     console.log("Response received from server : ",serverAnswer)
    // }
    const delay = (d) => {
        return new Promise((resolve , reject) => {
            setTimeout(() => {
                resolve()
            },d*1000)
        })
    }
    const onSubmit = async(data) => {
        // await delay(1)
        console.log(data)
        const answer = await axios.post('http://localhost:3000/',data)
        console.log('The server response is ',answer.data)
            // if(data.username !== "subh")
            //     setError("myform",{message:"Your form is not in good order because username is wrong"})
    }
    return (
        <div>
            {isSubmitting && <div>Loading ...</div>}
            <div>call user id 500</div>
            <div>call user id 600</div>
            <div>call user id 700</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>first name</label>
                <input
                    {...register("username",{required:true,minLength:{value:3,message:"Min length is 3"},maxLength:15})}
                    type="text"
                    placeholder="Enter your first name"
                />
                {errors.username && <div>{errors.username.message}</div>}<br />
                <label>password</label>
                <input
                    {...register("password")}
                    type="password"
                    placeholder="Enter your first name"
                />
                <br />
                <button type="submit" value="Submit" disabled={isSubmitting}>Submit info</button>
                {errors.myform &&  <div>{errors.myform.message}</div>}
            </form>
        </div>
    )
}
export default About