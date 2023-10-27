/***** REACT COMPONENTS  *****/
import Link from "next/link";

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
        <Link href={"#Menu_principal"}>
          <button className="p-2 mt-4 font-semibold text-center text-white duration-300 ease-out rounded-lg p focus:scale-95">
            Todos
          </button>
        </Link>
        <Link href={"#Menu_infantil"}>
          <button className="p-2 mt-4 font-semibold text-center text-white duration-300 ease-out rounded-lg p focus:scale-95">
            Menu Infantil
          </button>
        </Link>
        <Link href={"#Acompañamiento"}>
          <button className="p-2 mt-4 font-semibold text-center text-white duration-300 ease-out rounded-lg p focus:scale-95">
            Acompañamiento
          </button>
        </Link>
        <Link href={"#Bebidas"}>
          <button className="p-2 mt-4 font-semibold text-center text-white duration-300 ease-out rounded-lg p focus:scale-95">
            Bebidas
          </button>
        </Link>
        <Link href={"#Cafeteria"}>
          <button className="p-2 mt-4 font-semibold text-center text-white duration-300 ease-out rounded-lg p focus:scale-95">
            Cafeteria
          </button>
        </Link>
        <Link href={"#Postres"}>
          <button className="p-2 mt-4 font-semibold text-center text-white duration-300 ease-out rounded-lg p focus:scale-95">
            Postres
          </button>
        </Link>

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

export default FilterMenuButton;
