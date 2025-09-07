import { Suspense, useEffect, useState } from 'react';
import useCartContext from '../hooks/useCartContext';
import CartItemList from '../Components/Cart/CartItemList';

const Cart = () => {
    const {cart,loading, createorGetCart, updateCartItemQuantity} = useCartContext()
    const [localCart, setLocalCart] =useState(cart)

    useEffect(() => {
        if(!cart && !loading) createorGetCart()
    },[cart, loading, createorGetCart])

    useEffect(() =>{
        setLocalCart(cart)
    },[cart])

    const handleUpdateQuantity = async(itemId, newQuantity) => {
        setLocalCart((prevLocalCart)=>(
            {...prevLocalCart, items: prevLocalCart.items.map(
                item => item.id === itemId ? {...item, quantity: newQuantity} : item
            )}
        ))
        try{
            await updateCartItemQuantity(itemId, newQuantity)
        }catch(error){
            console.log(error)
        }
    }

    if(loading) return <p>loading...</p>
    if(!localCart) return <p>No Cart Found</p>
    return (
        <div className='flex justify-between'>
            <div>
                <Suspense fallback = {<p>loading...</p>}>
                    <CartItemList items={localCart.items} handleUpdateQuantity = {handleUpdateQuantity}/>
                </Suspense>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Cart;