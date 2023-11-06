
import { createContext, useContext, useEffect, useState} from "react";
import { AuthContext } from "../../Hooks/AuthProvider";
import './Cart.css';
import ContextCart from "./ContextCart";


export const CartContext = createContext();

const Cart = () => {
 const [cartItems, setCartItems] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/booking?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setCartItems(data));
  }, []);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      <ContextCart></ContextCart>
    </CartContext.Provider>
  );
}

export default Cart;