
const CartSummery = ({ cartItems }) => {
  return (
    <div>
      <p className="text-black">
        <span className="text-2xl"> Price :</span>
        {cartItems.map(
          (cartItem) => `${cartItem.price}
        ${cartItem.length}
        `
        )}
      </p>
    </div>
  );
};

export default CartSummery;