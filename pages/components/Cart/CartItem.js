import { useCart } from "@/pages/hooks/useCart";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdOutlineAddBox } from "react-icons/md";
import Image from "next/image";
import { ThemeContext } from "@/pages/context/ThemeContextProvider";
import { useContext } from "react";

const CartItem = () => {
  const { cart, clearCart, removeFromCart, addToCart } = useCart();
  // Verificar si el carrito está vacío
  const isCartEmpty = cart.length === 0;

  const data = useContext(ThemeContext);
  const [theme] = data;

  return (
    <div className="container mx-auto">
      {isCartEmpty ? (
        <div className="flex flex-col items-center justify-center w-full h-screen">
          <p className="w-1/2 text-5xl text-center text-gray-300 bg-black/75">
            No hay productos en el carrito
          </p>
        </div>
      ) : (
        <div className="h-screen">
          <table className="w-full my-8 text-sm text-center text-gray-500 dark:text-gray-400">
            <thead
              className={`text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ${theme}`}
            >
              <tr>
                <th></th>
                <th scope="col" className="px-6 py-3">
                  Producto
                </th>
                <th scope="col" className="px-6 py-3">
                  Nombre
                </th>
                <th scope="col" className="px-6 py-3">
                  Cantidad
                </th>
                <th scope="col" className="px-6 py-3">
                  Precio
                </th>
              </tr>
            </thead>
            {cart.map((product) => (
              <tbody key={product.id}>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th className={theme}>
                    <button onClick={() => removeFromCart(product)}>
                      <AiFillCloseCircle fill="red" size={25} />
                    </button>
                  </th>
                  <th
                    scope="row"
                    className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ${theme}`}
                  >
                    <Image
                      src={product.image}
                      width={200}
                      height={120}
                      alt={product.name}
                      className="mx-auto"
                    />
                  </th>
                  <td className={`px-6 py-4 ${theme}`}>{product.name}</td>
                  <td className={`px-6 py-4 ${theme}`}>
                    <td className="flex justify-center gap-2 px-6 py-4">
                      <p>{product.quantity} </p>
                      <button onClick={() => addToCart(product)}>
                        <MdOutlineAddBox fill="green" size={20} />
                      </button>
                    </td>
                  </td>
                  <td className={`px-6 py-4 ${theme}`}>
                    $ {product.quantity * product.price}
                  </td>
                </tr>
              </tbody>
            ))}
            <tfoot>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <button
                    className="h-10 mt-4 font-semibold text-center text-white duration-300 ease-out rounded-lg w-28 opacity-70"
                    style={{ backgroundColor: "red" }}
                    onClick={() => clearCart()}
                  >
                    Vaciar Carrito
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </div>
  );
};

export default CartItem;
