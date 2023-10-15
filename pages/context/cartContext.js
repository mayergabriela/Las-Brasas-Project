import { createContext, useReducer } from "react";
import { useCartReducer } from "../hooks/useCartReducer";

// 1. crear contexto
export const CartContext = createContext();

// // declaramos el estado inicial
// const initialState = [];

// // declaramos el reducer
// const reducer = (state, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case "ADD_TO_CART": {
//       const { id } = payload;
//       const productInCartIndex = state.findIndex((item) => item.id === id);
//       if (productInCartIndex >= 0) {
//         // usamos structuredClone porque hace una copia profunda
//         const newState = structuredClone(state);
//         newState[productInCartIndex].quantity += 1;
//         return newState;
//       }
//       return [
//         ...state,
//         {
//           ...payload, //product
//           quantity: 1,
//         },
//       ];
//     }
//     case "REMOVE_FROM_CART": {
//       const { id } = payload;
//       return state.filter((item) => item.id !== id);
//     }
//     case "CLEAR_CART": {
//       return initialState;
//     }
//   }
//   return state;
// };

// function useCartReducer() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const addToCart = (product) =>
//     dispatch({
//       type: "ADD_TO_CART",
//       payload: product,
//     });
//   const removeFromCart = (productId) =>
//     dispatch({
//       type: "REMOVE_FROM_CART",
//       payload: productId,
//     });
//   const clearCart = () =>
//     dispatch({
//       type: "CLEAR_CART",
//     });

//   return { state, addToCart, removeFromCart, clearCart };
// }

export function CartProvider({ children }) {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer();
  return (
    <CartContext.Provider
      value={{ cart: state, addToCart, clearCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
