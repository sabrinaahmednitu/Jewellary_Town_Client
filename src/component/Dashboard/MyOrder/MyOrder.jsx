/* eslint-disable react/jsx-key */
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Hooks/AuthProvider';

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/booking?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  });
  return (
    <div>
      <h2>orders :{orders.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Index</th>
              <th>Email</th>
              <th>jewellary Name</th>
              <th>price</th>
              <th>phone</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{order.email}</td>
                <td>{order.jewellaryName}</td>
                <td>{order.price}</td>
                <td>{order.phone}</td>
              </tr>
            ))}
          </tbody>

            <tr>
              <th>Index</th>
              <th>Email</th>
              <th>jewellary Name</th>
              <th>price</th>
              <th>phone</th>
            </tr>
         
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
