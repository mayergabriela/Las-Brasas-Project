import { useCart } from "../../hooks/useCart";

const CardButtonAdd = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <>
      <button
        className="p-2 mt-4 font-semibold text-center text-white duration-300 ease-out rounded-lg footerButton"
        onClick={() => addToCart(product)}
      >
        Agregar al carrito
      </button>

      <style jsx>{`
        button {
          background-color: var(--first-color);
          text-transform: uppercase;
          box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
          cursor: pointer;
        }
        button:hover {
          background-color: #2c2c2c;
          color: var(--first-color);
        }
      `}</style>
    </>
  );
};

export default CardButtonAdd;
