import { useState } from "react";
import apiClient from "../Services/api-client";


const useCart = () => {
    const [authToken, setAuthTOken] = useState(() => JSON.parse(localStorage.getItem("authTokens")).access)
    const [cart,setCart] = useState(null)
    const [cartId, setCartId] = useState(() => localStorage.getItem("cartId"))

    const createorGetCart = async () => {
        try{
            console.log(authToken)
            const response = await apiClient.post("/carts/",{}, {headers: {Authorization: `JWT ${authToken}`}})

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
            const response = await apiClient.post(
                `/carts/${cartId}/items/`,
                {product_id, quantity},
                {
                    headers: {Authorization: `JWT ${authToken}`},
                }

            )
            return response.data
        }catch(error){
            console.log("Error adding items ", error)
        }
    }
    return{cart, createorGetCart, addCartItems}
};

export default useCart;