import { Suspense, useEffect } from 'react';
import useCartContext from '../hooks/useCartContext';
import CartItemList from '../Components/Cart/CartItemList';

const Cart = () => {
    const {cart,loading, createorGetCart, updateCartItemQuantity} = useCartContext()

    useEffect(() => {
        if(!cart && !loading) createorGetCart()
    },[cart, loading, createorGetCart])

    const handleUpdateQuantity = async(itemId, newQuantity) => {
        try{
            await updateCartItemQuantity(itemId, newQuantity)
        }catch(error){
            console.log(error)
        }
    }

    if(loading) return <p>loading...</p>
    if(!cart) return <p>No Cart Found</p>
    return (
        <div className='flex justify-between'>
            <div>
                <Suspense fallback = {<p>loading...</p>}>
                    <CartItemList items={cart.items} handleUpdateQuantity = {handleUpdateQuantity}/>
                </Suspense>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Cart;