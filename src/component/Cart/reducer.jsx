const reducer = (state, action) => {
  switch (action.type) {
    // ---------------update cart item----------------  //
    case 'SET_CART_ITEMS':
      return {
        ...state,
        cartItems: action.payload, //its for new data when the state changed
        // cartItems: action.payload সেটমেন্টটি অপরিবর্তনীয় ডেটা স্টেট আপডেট করার জন্য ব্যবহৃত হয়
      };

    // ---------------Delete item----------------  //
    case 'DELETE_CART_ITEM':
      const updatedCartItems = state.cartItems.filter(
        (cartItem) => cartItem._id !== action.payload
      );
      return {
        ...state,
        cartItems: updatedCartItems,
      };

    // ---------------Delete item----------------  //
    case 'DELETE_CART':
      return {
        ...state,
        cartItems: [],
      };

    // ---------------handleIncrease INCREMENT----------------  //

    case 'INCREMENT':
      return {
        ...state,
        cartItems: action.payload,
      };

    // ---------------handleDecrease DECREMENT----------------  //

    case 'DECREMENT':
      return {
        ...state,
        cartItems: action.payload,
      };
  }

  return state;
};

export default reducer;
