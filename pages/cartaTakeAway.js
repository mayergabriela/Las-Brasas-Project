/***** REACT COMPONENTS  *****/
import React from "react";
/***** COMPONENTS  *****/
import Card from "./components/Card/Card";
import Loader from "./components/Take away/Loader";
import { FilterMenuButton } from "./components/Take away/FilterMenuButton";
import PopUpModal from "./components/Modal/PopUpModal";

const CartaTakeAway = () => {
  return (
    <section>
      <div className="flex flex-wrap justify-center px-4 py-2 mt-20 font-semibold text-gray-800 bg-white border border-gray-400 rounded shadow hover:bg-gray-100">
        <h1>CARTA TAKE AWAY</h1>
      </div>
      {/* <Filter Menu /> */}
      <FilterMenuButton />
      <div className="flex justify-center">
        <Loader />
        <PopUpModal />
      </div>
      {/* Cards Display Section */}
      <Card />
      {/* El loader se muestra solo cuando se esta cargando la data */}
    </section>
  );
};

export default CartaTakeAway;
