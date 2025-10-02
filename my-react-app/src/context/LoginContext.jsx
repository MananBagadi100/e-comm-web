import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext()
export const LoginProvider = (props) => {
    const [ loginState , setLoginState] = useState(false)
    useEffect (() => {
        const saved=JSON.parse(localStorage.getItem("loginState")   || "false")
        setLoginState(saved)
    },[])
    const storeLoginState = (stateBoolean) => {
        setLoginState(stateBoolean)
        localStorage.setItem("loginState",JSON.stringify(stateBoolean))
    }
    return (
        <LoginContext.Provider value={{loginState,storeLoginState}}>
            {props.children}
        </LoginContext.Provider>
    )
}