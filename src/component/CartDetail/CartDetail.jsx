/* eslint-disable react/prop-types */
/* eslint-disable no-undef */


const CartDetail = ({ cartItem }) => {
  const { jewellaryName, price, email ,image } = cartItem;
  return (
    <>
      <section>
        <div className="cart-main">
          <div className=" cart-left flex justify-content-center align-items-center gap-[30px]border ">
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
            >
              X
            </button>
          </div>

          <div className="cart-right flex justify-content-center align-items-center gap-[30px]">

          </div>
          
        </div>
      </section>
    </>
  );
};

export default CartDetail;