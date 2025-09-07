import { useEffect } from 'react';
import useCartContext from '../hooks/useCartContext';

const Cart = () => {
    const {cart,createorGetCart} = useCartContext()

    useEffect(() => {
        createorGetCart()
    },[])
    return (
        <div>
            {JSON.stringify(cart)}
        </div>
    );
};

export default Cart;