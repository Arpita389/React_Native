export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const CartReduce = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingProductIndex = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (existingProductIndex >= 0) {
        const updatedCart = state.map((product, index) =>
          index === existingProductIndex
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
        return updatedCart;
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    case REMOVE_FROM_CART:
      return state.filter((product) => product.id !== action.payload.id);
    default:
      return state;
  }
};
