import { useCart } from "../../hooks/useCart";

const CardButtonAdd = ({ data }) => {
  const { addToCart } = useCart();

  return (
    <>
      <button
        className="p-2 mt-4 rounded-lg font-semibold text-center text-yellow-500 bg-black uppercase shadow-md cursor-pointer hover:bg-yellow-500 hover:text-black focus:scale-95"
        onClick={() => addToCart(data)}
      >
        Agregar al carrito
      </button>
    </>
  );
};

export default CardButtonAdd;
