import React from "react";

export const FilterMenuButton = () => {
  return (
    <div>
      {" "}
      {/* Filter Menu Section */}
      <div className="max-w-[1640px] m-auto px-3 py-1">
        <h2 className="p-2 text-4xl font-bold text-center text-yellow-500">
          Filtrar menu
        </h2>
      </div>
      {/*Filter Row */}
      <div className="flex flex-wrap gap-4 m-10 ">
        <button className="p-2 mt-4 font-semibold text-center text-white duration-300 ease-out rounded-lg p focus:scale-95">
          Todos
        </button>
        <button className="p-2 mt-4 font-semibold text-center text-white duration-300 ease-out rounded-lg p focus:scale-95">
          Menu Infantil
        </button>
        <button className="p-2 mt-4 font-semibold text-center text-white duration-300 ease-out rounded-lg p focus:scale-95">
          Acompañamiento
        </button>
        <button className="p-2 mt-4 font-semibold text-center text-white duration-300 ease-out rounded-lg p focus:scale-95">
          Bebidas
        </button>
        <button className="p-2 mt-4 font-semibold text-center text-white duration-300 ease-out rounded-lg p focus:scale-95">
          Cafeteria
        </button>
        <button className="p-2 mt-4 font-semibold text-center text-white duration-300 ease-out rounded-lg p focus:scale-95">
          Postres
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
      </div>
    </div>
  );
};
