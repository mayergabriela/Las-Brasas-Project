import { initialState } from "./initialState";

// declaramos el reducer
export const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case "ADD_TO_CART": {
        const { id } = payload;
        const productInCartIndex = state.findIndex((item) => item.id === id);
        if (productInCartIndex >= 0) {
          // usamos structuredClone porque hace una copia profunda
          const newState = structuredClone(state);
          newState[productInCartIndex].quantity += 1;
          return newState;
        }

        // en caso de que el producto no exista lo agregamos y le agregamos la propiedad de cantidad
        return [
          ...state,
          {
            ...payload, //product
            quantity: 1,
          },
        ];
      }
      case "REMOVE_FROM_CART": {
        const { id } = payload;
        return state.filter((item) => item.id !== id);
      }
      case "CLEAR_CART": {
        return initialState;
      }
    }
    return state;
  };