import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";


const useAuth = () => {
    const [user,setUser] = useState(null)
    const [errorMsg, setErrorMsg] = useState("")


    const getToken = () => {
        const token = localStorage.getItem("authTokens")
        return token ? JSON.parse(token) : null;
    }

    const [authTokens, setAuthTokens] = useState(getToken())

    useEffect (() => {
        if(authTokens)fetchUserProfile()
    },[authTokens])

    const handleAPIError = (error,defaiultMessage= "Something went wrong! Try Again") => {
        if(error.response && error.response.data){
                const errrorMessage = Object.values(error.response.data).flat().join("\n")
                setErrorMsg(errrorMessage)
                return {success: false, message: errrorMessage}
            }
            setErrorMsg(defaiultMessage)
            return {success: false, message: defaiultMessage}
    }
    // fetch user profile 
    const fetchUserProfile = async() => {
        try{
            const response = await apiClient.get("/auth/users/me", {
                headers: {Authorization: `JWT ${authTokens?.access}`},
            })
            setUser(response.data)
        }catch(error){
            console.log("Error fetching user", error)
        }
    }

    // update user profile 
    const updateUserProfile = async(data) => {
        setErrorMsg("")
        try{
            await apiClient.put("/auth/users/me/", data,{
                headers: {Authorization: `JWT ${authTokens?.access}`},
            })
        }catch(error){
            return handleAPIError(error)
        }
    }

    // change password 

    const changePassword = async(data)=>{
        setErrorMsg("")
        try{
            await apiClient.post("/auth/users/set_password/", data, {
                headers: {Authorization: `JWT ${authTokens?.access}`},
            })
        }catch(error){
            return handleAPIError(error)
        }
    }
    // login user 
    const loginUser = async (userData) => {
        setErrorMsg("")
        try {
            const response = await apiClient.post("/auth/jwt/create/", userData);

            setAuthTokens(response.data);
            localStorage.setItem("authTokens", JSON.stringify(response.data));
            
            // after login fetch user 

            await fetchUserProfile()
        } catch (error) {
            setErrorMsg("Login failed:", error.response.data?.detail);
        }
    };

    //register
    const registerUser = async(userData) => {
        setErrorMsg("")
        try{
             await apiClient.post("/auth/users/", userData)
             return { success: true, message: "Registration successful!. Check your email to activate your account." };
        }catch(error){
            return handleAPIError(error, "Registration Failed! Try Again")
        }
    }

    //logout user

    const logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem("authTokens")
    }
    return {user,errorMsg,loginUser, registerUser, logoutUser, updateUserProfile, changePassword}
    
}

export default useAuth