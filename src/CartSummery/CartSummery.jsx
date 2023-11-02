
const CartSummery = ({ cartItems }) => {
  console.log('cartItems',cartItems);
  return (
    <div>
      <p className="text-black">
        <span className="text-2xl"> Price :</span>
        {cartItems.map(
          (cartItem) => `${cartItem.price}
        `
        )}
      </p>
    </div>
  );
};

export default CartSummery;