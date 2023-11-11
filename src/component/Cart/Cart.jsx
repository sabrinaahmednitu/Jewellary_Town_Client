import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { AuthContext } from '../../Hooks/AuthProvider';
import './Cart.css';
import ContextCart from './ContextCart';
import reducer from './reducer';

export const CartContext = createContext();
const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalItem: 0,
};
const Cart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //  const [cartItems, setCartItems] = useState([]);

  // ---------------fetch cart item ----------------  //
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/booking?email=${user?.email}`)
      .then((res) => res.json())
      // .then((data) => setCartItems(data));
      .then((data) => {
        dispatch({ type: 'SET_CART_ITEMS', payload: data });
        // 'payload' হলো ডেটার বহনকারী,
        // এখানে, 'payload' মাধ্যমে নতুন ডেটা প্রেরণ করা হয়
        //এবং এই ডেটা নতুন 'cartItems' প্রোপার্টিতে সেট করার জন্য ব্যবহৃত হয়।
        // অতএব, 'payload' মাধ্যমে নতুন ডেটা স্টেটে পাঠানো হয় এবং সেটা স্টেটের নির্দিষ্ট অংশে যেতে সাহায্য করে, যাতে নতুন ডেটা অতএব স্টেট পরিবর্তন করতে পারে।
      });
  }, [user]);

  // ---------------Delete item----------------  //
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
          // Update cartItems in the state
          dispatch({ type: 'DELETE_CART_ITEM', payload: id });
          // const remaining = cartItems.filter((cartItem) => cartItem._id !== id);
          // setCartItems(remaining);
        });
    }
  };

  // ---------------clear cart----------------  //
  const clearCart = () => {
    return dispatch({ type: 'DELETE_CART' });
  };

  // ---------------handleIncrease----------------  //
  // const handleIncrease = (_id) => {
  //   return dispatch({
  //     type: 'INCREMENT',
  //     payload: _id,
  //   });
  // };

  // ---------------handleIncrease----------------  //
  const handleIncrease = (_id) => {
    const updatedCart = state.cartItems.map((cartItem) => {
      if (cartItem._id === _id) {
        // Increase the quantity by 1
        const updatedQuantity = cartItem.quantity + 1;

        // Calculate the new total price based on the updated quantity
        const updatedTotalPrice = updatedQuantity * cartItem.price;

        // Update the cart item with the new quantity and total price
        return {
          ...cartItem,
          quantity: updatedQuantity,
          totalPrice: updatedTotalPrice,
        };
      }
      return cartItem;
    });

    // Update the cart state with the updated cart items
    dispatch({
      type: 'INCREMENT',
      payload: updatedCart,
    });
  };

  // ---------------handleDecrease----------------  //
  // const handleDecrease = (_id) => {
  //   return dispatch({ type: 'DECREMENT', payload: _id });
  // };

  // ---------------handleDecrease----------------  //
  const handleDecrease = (_id) => {
    const updatedCart = state.cartItems.map((cartItem) => {
      if (cartItem._id === _id) {
        // Decrease the quantity by 1, but ensure it doesn't go below 1
        // const updatedQuantity = Math.max(cartItem.quantity - 1, 1);
        if (cartItem.quantity > 1) {
          const updatedQuantity = cartItem.quantity - 1;

          // Calculate the new total price by subtracting the item's price
          const updatedTotalPrice = cartItem.price * updatedQuantity;

          // Update the cart item with the new quantity and total price
          return {
            ...cartItem,
            quantity: updatedQuantity,
            totalPrice: updatedTotalPrice,
          };
        } else {
          // If the quantity is already 1, return the original cartItem
          return cartItem;
        }
      }
      return cartItem;
    });

    // Update the cart state with the updated cart items
    dispatch({
      type: 'DECREMENT',
      payload: updatedCart,
    });
  };

  // ---------------Total price----------------  //
  // useEffect(() => {
  //   dispatch({ type: 'GET_TOTAL' });
  //   // console.log('something changed');
  // }, [state.cartItems]);
  // //cartItems e kichu change hole e ta dekhabe tai dependency state.cartItems


  const calculateTotal = (cartItems) => {
    return cartItems.reduce(
      (total, cartItem) => total + cartItem.totalPrice,
      0
    );
  };

  const total = calculateTotal(state.cartItems);


  return (
    <CartContext.Provider
      value={{
        ...state,
        handleDelete,
        clearCart,
        handleIncrease,
        handleDecrease,
        total,

      }}
    >
      <ContextCart></ContextCart>
    </CartContext.Provider>
  );
};

export default Cart;
