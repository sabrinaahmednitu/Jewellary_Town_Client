
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
    <div className="container mx-auto">
      <h1 className="text-2xl">Cart</h1>
      <hr className="mb-5 w-[50%] border-black" />
      <div>
        {cartItems.map((cartItem) => (
          <CartDetail
            key={cartItem._id}
            cartItem={cartItem}
            cartItems={cartItems}
            setCartItems={setCartItems}
          ></CartDetail>
        ))}
      </div>
    </div>
  );
};

export default Cart;