import React from "react";
import Bannertakeaway from "./components/Take away/Bannertakeaway";
import Card from "./components/Card/Card";
import Loader from "./components/Take away/Loader";

const CartaTakeAway = () => {
  return (
    <section>
      {/* <Bannertakeaway /> */}
      <Card />
      {/* El loader se muestra solo cuando se esta cargando la data */}
      <Loader />
    </section>
  );
};

export default CartaTakeAway;
