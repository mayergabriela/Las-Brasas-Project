import CartItem from "./components/Cart/CartItem";
import { FaShoppingCart } from "react-icons/fa";
import { ThemeContext } from "@/pages/context/ThemeContextProvider";
import { useContext } from "react";

const Cart = () => {
  const data = useContext(ThemeContext);

  const [theme] = data;
  return (
    <section className={`h-screen w-full ${theme}`}>
      <div className="flex flex-wrap justify-center gap-2 px-4 py-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded shadow mt-28 hover:bg-gray-100">
        <h1>CARRITO</h1>
        <FaShoppingCart fill="black" />
      </div>

      <div>
        <CartItem />
      </div>
    </section>
  );
};

export default Cart;
