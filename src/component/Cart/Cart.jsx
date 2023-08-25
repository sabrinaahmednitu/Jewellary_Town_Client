
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
      <h1>{cartItems.length}</h1>
      {cartItems.map((cartItem) => (
        <>
          <div key={cartItem._id}>
            <div className="flex justify-content-center align-items-center gap-[30px] w-[50%] border ">
              <img
                src={cartItem.image}
                className="w-[125px] h-[125px] object-cover"
                alt=""
              />
              <div className="cartItemText">
                <h3>{cartItem.jewellaryName}</h3>
                <h2> Price {cartItem.price}</h2>
                <h6> {cartItem.email}</h6>
              </div>
            </div>

            <button
              className="btn"
              style={{
                outline: '0',
                border: '0',
                color: 'white',
              }}
            >
              X
            </button>
          </div>
        </>
      ))}
    </div>
  );
};

export default Cart;