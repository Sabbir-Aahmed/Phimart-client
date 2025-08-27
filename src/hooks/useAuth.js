import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";

const useAuth = () => {
    const [user,setUser] = useState(null)

    const getToken = () => {
        const token = localStorage.getItem("authTokens")
        return token ? JSON.parse(token) : null;
    }

    const [authTokens, setAuthTokens] = useState(getToken())

    useEffect (() => {
        if(authTokens)fetchUserProfile()
    },[authTokens])
    // fetch user profile 
    const fetchUserProfile = async() => {
        try{
            const response = await apiClient.get("/auth/users/me", {
                headers: {Authorization: `JWT ${authTokens?.access}`},
            })
            setUser(response.data)
        }catch(err){
            console.log("Error fetching user", err)
        }
    }
    // login user 
    const loginUser = async (userData) => {
        try {
            const response = await apiClient.post("/auth/jwt/create/", userData);

            setAuthTokens(response.data);
            localStorage.setItem("authTokens", JSON.stringify(response.data));

        } catch (err) {
            console.log("Login failed:", err.data?.response);
        }
    };
    return {user,loginUser}
}

export default useAuth