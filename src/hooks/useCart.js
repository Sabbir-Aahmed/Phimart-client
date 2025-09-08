import { useCallback, useEffect, useState } from "react";
import authApiClient from "../Services/auth-api-client";


const useCart = () => {
    const [authToken, setAuthTOken] = useState(() => JSON.parse(localStorage.getItem("authTokens")).access)
    const [cart,setCart] = useState(null)
    const [cartId, setCartId] = useState(() => localStorage.getItem("cartId"))
    const [loading, setLoading] = useState(false)

    const createorGetCart = useCallback(async () => {
        setLoading(true)
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
        }finally{
            setLoading(false)
        }
    },[authToken, cartId]
    )

    //add items to the cart
    const addCartItems = useCallback(async(product_id, quantity) =>{
        setLoading(true)
        if(!cartId) await createorGetCart()
        try{
            const response = await authApiClient.post(
                `/carts/${cartId}/items/`,
                {product_id, quantity},
            )
            return response.data
        }catch(error){
            console.log("Error adding items ", error)
        }finally{
            setLoading(false)
        }
    },[cartId, createorGetCart]
    )

    //update cart quantity
    const updateCartItemQuantity = useCallback(async(itemId , quantity) => {

        try{
            await authApiClient.patch(`/carts/${cartId}/items/${itemId}/`, {quantity},)
            
        }catch  (error){
            console.log(error)
        }
    },
    [cartId]
    )

    //delete cart items
    const deleteCartItem = useCallback(
        async(itemId)=>{
            try{
                await authApiClient.delete(`/carts/${cartId}/items/${itemId}/`)
                
            }catch(error){
                console.log(error)
            }
        },[cartId]
    )

    useEffect(() => {
        const intitializeCart = async () => {
            setLoading(true)
            await createorGetCart()
            setLoading(false)
        }
        intitializeCart()
    }, [createorGetCart])

    return{cart,loading, createorGetCart, addCartItems, updateCartItemQuantity, deleteCartItem}
};

export default useCart;