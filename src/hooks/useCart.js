import { useState } from "react";
import apiClient from "../Services/api-client";
import authApiClient from "../Services/auth-api-client";


const useCart = () => {
    const [authToken, setAuthTOken] = useState(() => JSON.parse(localStorage.getItem("authTokens")).access)
    const [cart,setCart] = useState(null)
    const [cartId, setCartId] = useState(() => localStorage.getItem("cartId"))

    const createorGetCart = async () => {
        try{
            console.log(authToken)
            const response = await authApiClient.post("/carts/", )

            if(!cartId) {
                localStorage.setItem("cartId",response.data.id)
                setCartId(response.data.id)
            }
            setCart(response.data)

        }catch(error){
            console.log(error)
        }
    }

    //add items to the cart
    const addCartItems = async(product_id, quantity) =>{
        if(!cartId) await createorGetCart()
        try{
            const response = await authApiClient.post(
                `/carts/${cartId}/items/`,
                {product_id, quantity},
            )
            return response.data
        }catch(error){
            console.log("Error adding items ", error)
        }
    }
    return{cart, createorGetCart, addCartItems}
};

export default useCart;