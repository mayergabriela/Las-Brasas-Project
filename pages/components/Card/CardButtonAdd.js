import React from "react";

const CardButtonAdd = () => {
  return (
    <>
      <button className="mt-4 font-semibold text-center text-white duration-300 ease-out rounded-lg opacity-70 footerButton ">
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
