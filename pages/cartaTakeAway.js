import React from "react";
import Bannertakeaway from "./components/Take away/Bannertakeaway";
import Card from "./components/Card/Card";
import Loader from "./components/Take away/Loader";

const CartaTakeAway = () => {
  return (
    <section>
      <Bannertakeaway />
      <Card />
      <Loader />
    </section>
  );
};

export default CartaTakeAway;
