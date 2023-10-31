/***** REACT COMPONENTS  *****/
import React from "react";
/***** COMPONENTS  *****/
import Card from "../components/Take-away/Card";
import { ThemeContext } from "../context/ThemeContextProvider";
import { useContext } from "react";

const CartaTakeAway = () => {
  const data = useContext(ThemeContext);

  const [theme] = data;
  return (
    <section className={`min-h-screen ${theme}`}>
      <div className="flex flex-wrap justify-center px-4 py-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded shadow mt-28 hover:bg-gray-100">
        <h1>CARTA TAKE AWAY</h1>
      </div>
      <Card />
    </section>
  );
};

export default CartaTakeAway;
