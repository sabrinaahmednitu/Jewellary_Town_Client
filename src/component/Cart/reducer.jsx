

const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_CART_ITEMS':
        return {
          ...state,
          cartItems: action.payload, //its for new data when the state changed
          // cartItems: action.payload সেটমেন্টটি অপরিবর্তনীয় ডেটা স্টেট আপডেট করার জন্য ব্যবহৃত হয়
        };
      case 'DELETE_CART_ITEM':
        const updatedCartItems = state.cartItems.filter(
          (cartItem) => cartItem._id !== action.payload
        );
        return {
          ...state,
          cartItems: updatedCartItems,
        };
    }


    return state;
};

export default reducer;