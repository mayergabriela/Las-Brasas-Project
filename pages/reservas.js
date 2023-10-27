import React from "react";
import Reserva from "../components/reservaComponent/reserva";
import { ThemeContext } from "../context/ThemeContextProvider";
import { useContext } from "react";
const reservas = () => {
  const data = useContext(ThemeContext);

  const [theme] = data;

  return (
    <section className={theme}>
      <div className="flex flex-wrap justify-center px-4 py-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded shadow mt-32 hover:bg-gray-100">
        <h1>RESERVAS</h1>
        <Reserva/>
      </div>
    </section>
  );
};

export default reservas;
