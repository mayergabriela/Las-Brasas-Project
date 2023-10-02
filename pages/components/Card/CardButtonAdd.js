import React from "react";

const CardButtonAdd = () => {
  return (
    <>
      <button className="mt-4 font-semibold text-center text-white duration-300 ease-out rounded-lg hover:bg-green-700 opacity-40 footerButton ">
        Agregar al carrito
      </button>

      <style jsx>{`
        button {
          background-color: var(--first-color);
          text-transform: uppercase;
          box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default CardButtonAdd;
