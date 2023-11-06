import { useContext } from "react";
import { CartContext } from "../Cart/Cart";

const CartSummery = () => {
  const {clearCart, cartItems} = useContext(CartContext);

  console.log(cartItems);
  const totalPrice = cartItems.reduce(
    (total, cartItems) => total + cartItems.price,
    0
  );

  
  return (
    <>
      <div>
        <p className="text-black">
          {cartItems.map((Item) => (
            <p>Price : {Item.price}</p>
          ))}
          {/* <span> Price : {cartItems[0].price}</span> */}
          <h1 className="text-2xl">TotalPrice : {totalPrice}</h1>
        </p>
      </div>
      <div className="flex gap-5 mt-5">
        <button className="btn" >Checkout</button>
        <button className="btn clear-cart" onClick={clearCart} >Clear Cart</button>
      </div>
    </>
  );
};

export default CartSummery;