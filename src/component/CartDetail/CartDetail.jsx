/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useState } from 'react';
import './CartDetail.css';

const CartDetail = ({
  cartItem,
  cartItems,
  setCartItems
}) => {
  const { _id, jewellaryName, price, image } = cartItem;

  // const [quantity, setQuantity] = useState(1);

  // const handleIncrease = () => {
  //   setQuantity(quantity + 1);
  //   console.log(quantity + 1);
  // };

  // const handleDecrease = () => {
  //   if (quantity > 1) {
  //     setQuantity(quantity - 1);
  //   }

  // };

  // const subTotal = quantity * (price-900);

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
    <div>
      <div className="items-info">
        <div className="product-img">
          <img src={image} alt="" />
        </div>

        <div className="cartItemTex">
          <h2>{jewellaryName}</h2>
          <p> Price : ${price - 900}</p>
        </div>

        <div className="quantity">
          <div className="Q-text">
            <button >-</button>
            <div></div>
            <button >+</button>
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
    </div>
  );
};

export default CartDetail;
