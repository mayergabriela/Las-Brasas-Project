import React from "react";
import Card from "./components/Card/Card";
import Loader from "./components/TakeAway/Loader";
import { FilterMenuButton } from "./components/TakeAway/FilterMenuButton";
import TakeawayBanner from "./components/TakeAway/TakeawayBanner";

export default function CartaTakeAway () {
  return (
    <section>
      {/* Banner Section */}
      <TakeawayBanner />
      {/* <Filter Menu /> */}
      <FilterMenuButton />
      {/* Cards Display Section */}
      <Card />

      {/* El loader se muestra solo cuando se esta cargando la data */}
      <Loader />
    </section>
  );
};

