
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Hooks/AuthProvider";

const Cart = () => {
     const [cartItems, setCartItems] = useState([]);
     const { user } = useContext(AuthContext);
     useEffect(() => {
       fetch(`http://localhost:5000/booking?email=${user.email}`)
         .then((res) => res.json())
         .then((data) => setCartItems(data));
     });
    return (
      <>
     
          <div className="container flex">
          
              <h1>{cartItems.length}</h1>
           
          </div>
       
      </>
    );
};

export default Cart;