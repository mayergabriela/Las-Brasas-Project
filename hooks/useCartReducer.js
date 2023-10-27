import { initialState } from "../reducer/initialState";
import { reducer } from "../reducer/reducer";
import { useReducer } from "react";

export function useCartReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    const addToCart = (product) =>
      dispatch({
        type: "ADD_TO_CART",
        payload: product,
      });
    const removeFromCart = (productId) =>
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: productId,
      });
    const clearCart = () =>
      dispatch({
        type: "CLEAR_CART",
      });
  
    return { state, addToCart, removeFromCart, clearCart };
  }