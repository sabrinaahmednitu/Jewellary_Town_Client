import { useContext } from "react";
import { CartContext } from "../Cart/Cart";

const CartSummery = () => {
  const {clearCart, total } = useContext(CartContext);


  return (
    <>
      <div>
        <p className="text-black">
          <h1 className="text-2xl">TotalPrice : {total}</h1>
        </p>
      </div>
      <div className="flex gap-5 mt-5">
        <button className="btn">Checkout</button>
        <button className="btn clear-cart" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
    </>
  );
};

export default CartSummery;