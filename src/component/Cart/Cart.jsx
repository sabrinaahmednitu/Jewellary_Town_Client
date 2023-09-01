
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Hooks/AuthProvider";
import CartDetail from "../CartDetail/CartDetail";
import './Cart.css';
const Cart = () => {
     const [cartItems, setCartItems] = useState([]);
     const { user } = useContext(AuthContext);
     useEffect(() => {
       fetch(`http://localhost:5000/booking?email=${user.email}`)
         .then((res) => res.json())
         .then((data) => setCartItems(data));
     });
  
 
  return (
    <div className="cart-main  container mx-auto mt-12 mb-12">
      <div className="cart-left">
        <h1 className="text-2xl font-bold text-black">Cart</h1>
        <hr className="mb-5 border-black" />
        {cartItems.map((cartItem) => (
          <CartDetail
            key={cartItem._id}
            cartItem={cartItem}
            cartItems={cartItems}
            setCartItems={setCartItems}
          ></CartDetail>
        ))}
      </div>
      <div className="cart-right">
        <h1 className="text-2xl font-bold text-black">Order Summery</h1>
        <hr className="mb-5 border-black" />
      </div>
    </div>
  );
};

export default Cart;