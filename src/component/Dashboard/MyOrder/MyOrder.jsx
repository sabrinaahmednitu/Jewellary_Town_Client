import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Hooks/AuthProvider";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
    const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/booking?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  })
  return ( 
  <div>
      <h2>orders :{ orders.length}</h2>
   </div>
  );
};

export default MyOrder;
