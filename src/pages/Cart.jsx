import { Suspense, useEffect, useState } from "react";
import useCartContext from "../hooks/useCartContext";
import CartItemList from "../Components/Cart/CartItemList";
import CartSummary from "../Components/Cart/CartSummary";

const Cart = () => {
  const {
    cart,
    loading,
    createorGetCart,
    updateCartItemQuantity,
    deleteCartItem,
  } = useCartContext();
  const [localCart, setLocalCart] = useState(cart);

  useEffect(() => {
    if (!cart && !loading) createorGetCart();
  }, [cart, loading, createorGetCart]);

  useEffect(() => {
    setLocalCart(cart);
  }, [cart]);

  const handleUpdateQuantity = async (itemId, newQuantity) => {
    const prevLocalCartCopy = localCart; //store a copy of local cart
    setLocalCart((prevLocalCart) => ({
      ...prevLocalCart,
      items: prevLocalCart.items.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      ),
      totalPrice: prevLocalCart.items.reduce((sum, item) => sum + item.total_price, 0)
    }));
    try {
      await updateCartItemQuantity(itemId, newQuantity);
    } catch (error) {
      console.log(error);
      setLocalCart(prevLocalCartCopy); //rollback to previous state if API fails
    }
  };

  const handleRemoveItem = async (itemId) => {
    setLocalCart((prevLocalCart) => ({
      ...prevLocalCart,
      items: prevLocalCart.items.filter((item) => item.id != itemId),
    }));
    try {
      await deleteCartItem(itemId);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <p>loading...</p>;
  if (!localCart) return <p>No Cart Found</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Suspense fallback={<p>loading...</p>}>
            <CartItemList
              items={localCart.items}
              handleUpdateQuantity={handleUpdateQuantity}
              handleRemoveItem={handleRemoveItem}
            />
          </Suspense>
        </div>
        <div>
          <CartSummary totalPrice={localCart.total_price} itemCount={localCart.items.length}/>
        </div>
      </div>
    </div>
  );
};

export default Cart;
