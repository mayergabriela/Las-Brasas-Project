//creamos un hook para leer el contexto
 import { useContext } from "react";
 import { CartContext } from "../context/cartContext";

 export function useCart() {
   const cartContext = useContext(CartContext);
   if (cartContext === undefined) {
     throw new Error("useCart debe estar dentro del proveedor CartProvider");
   }
   return cartContext;
 }
