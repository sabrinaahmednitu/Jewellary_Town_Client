/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useState } from 'react';
import './CartDetail.css';

const CartDetail = ({ cartItem, cartItems, setCartItems }) => {
  const { _id, jewellaryName, price, email, image } = cartItem;

  const [quantity, setQuantity] = useState(0);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    setQuantity(quantity - 1);
  };

  const handleDelete = (id) => {
    const proceed = window.confirm('are you sure ?');
    if (proceed) {
      const url = `http://localhost:5000/cartItem/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = cartItems.filter((cartItem) => cartItem._id !== id);
          setCartItems(remaining);
        });
    }
  };
  return (
    <>
      <div className="items-info  border">
        <div className="product-img">
          <img src={image} alt="" />
        </div>

        <div className="cartItemTex">
          <h2>{jewellaryName}</h2>
          <p> Price : ${price}</p>
        </div>

        <div className="quantity">
          <div className="Q-text">
            <button onClick={handleDecrease}>-</button>
            <div>1</div>
            <button onClick={handleIncrease}>+</button>
          </div>
        </div>

        <div className="totalPrice">
          <h2>SubTotal:</h2>
        </div>

        <div className="remove-item">
          <button className="remove-item btn" onClick={() => handleDelete(_id)}>
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDetail;
