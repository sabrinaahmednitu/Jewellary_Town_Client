
const CartSummery = ({
  cartItems
}) => {
  console.log(cartItems);
  const totalPrice = cartItems.reduce(
    (total, cartItems) => total + cartItems.price,
    0
  );
  return (
    <div>
      <p className="text-black">
        {cartItems.map((Item) => (
          <p>Price : {Item.price}</p>
        ))}
        {/* <span> Price : {cartItems[0].price}</span> */}
        <h1 className="text-2xl">TotalPrice : {totalPrice}</h1>
      </p>
    </div>
  );
};

export default CartSummery;