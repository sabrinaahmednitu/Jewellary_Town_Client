/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useContext, useState } from 'react';
import { CartContext } from '../Cart/Cart';
import './CartDetail.css';

const CartDetail = ({cartItem }) => {
  const { _id, jewellaryName, price, image } = cartItem;

  const { handleDelete } =useContext(CartContext)
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
