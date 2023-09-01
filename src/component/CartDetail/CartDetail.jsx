/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import './CartDetail.css';

const CartDetail = ({ cartItem, cartItems, setCartItems }) => {
  const { _id, jewellaryName, price, email, image } = cartItem;

 


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
          <div className="border gap-[30px] flex justify-content-center align-items-center gap-[30px]border ">
            <img
              src={image}
              className="w-[125px] h-[125px] object-cover"
              alt=""
            />
            <div className="cartItemText pt-5">
              <h3>{jewellaryName}</h3>
              <h2> Price : ${price}</h2>
              <h6> {email}</h6>
            </div>
            <button
              className="btn"
              style={{
                outline: '0',
                border: '0',
                color: 'white',
                marginTop: '50px',
              }}
              onClick={() => handleDelete(_id)}
            >
              X
            </button>
        </div>
       
    </>
  );
};

export default CartDetail;