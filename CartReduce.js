export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";

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
    case INCREASE_QUANTITY:
      return state.map((product) =>
        product.id === action.payload.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
    case DECREASE_QUANTITY:
      return state.map((product) =>
        product.id === action.payload.id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
    default:
      return state;
  }
};
