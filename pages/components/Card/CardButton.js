import React from "react";

const CardButton = () => {
  return (
    <>
      <button className="mt-4 font-semibold text-center text-white duration-300 ease-out rounded-lg focus:scale-95 footerButton hover:bg-green-700">
        Comprar Ahora
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

export default CardButton;
