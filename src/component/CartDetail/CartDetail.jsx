

const CartDetail = () => {
    return (
      <>
        <section>
          <div className="container mx-auto">
            <h1>{cartItems.length}</h1>
            {cartItems.map((cartItem) => (
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
            ))}
          </div>
        </section>
      </>
    );
};

export default CartDetail;