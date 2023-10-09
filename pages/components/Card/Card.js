"use client";
/***** REACT FEATURES  *****/
import { useState, useEffect } from "react";
/***** COMPONENTS  *****/
import { CardTemplate } from "./CardTemplate";
import CardButton from "./CardButton";
import CardButtonAdd from "./CardButtonAdd";
/***** API FEATURES  *****/
import Postre from "../Products/Postre";
import Acompaniamiento from "../Products/Acompaniamiento";
import Cafeteria from "../Products/Cafeteria";
import Principal from "../Products/Principal";
import Infantil from "../Products/Infantil";
import Cervezas from "../Products/Cervezas";
import Vinos from "../Products/Vinos";
import Bebidas from "../Products/Bebidas";

/* End Point */
const API = "https://brasas-cook-numen.onrender.com";

const initial = {
  acompaniamiento: [],
  postre: [],
  cafeteria: [],
  bebidas: [],
  cervezas: [],
  vinos: [],
  menu_infantil: [],
  menu_principal: [],
};

function Card() {
  {
    /* USE STATE */
  }
  const [product, setProduct] = useState(initial);
  console.log(product.cafeteria);
  {
    /* USE EFFECT */
  }

  /*****PETICION  *****/
  useEffect(() => {
    try {
      fetch(`${API}/db`)
        .then((response) => response.json())
        .then((data) => {
          //console.log(data);
          setProduct(data);
        });
    } catch (error) {
      (error) => {
        console.error("Error al cargar los datos:", error);
      };
    }
  }, []);

  return (
    <div>
      <h2 className="p-2 text-4xl font-bold text-center text-yellow-500">
        Menu Principal
      </h2>
      <div className="flex items-center justify-center mx-auto mcontainer ">
        {/* GRID */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Display CARD MENU PRINCIPAL */}
          {product.menu_principal &&
            product.menu_principal.map((principal) => (
              <CardTemplate key={principal.id} product={principal} />
            ))}
        </div>
      </div>
      <h2 className="p-2 mt-8 text-4xl font-bold text-center text-yellow-500">
        Menu Infantil
      </h2>
      <div className="flex items-center justify-center mx-auto mcontainer ">
        {/* GRID */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Display CARD */}
          {product.menu_infantil &&
            product.menu_infantil.map((principal) => (
              <CardTemplate key={principal.id} product={principal} />
            ))}
        </div>
      </div>
      {/* Display CARD Acompañamientos */}
      <h2 className="p-2 mt-8 text-4xl font-bold text-center text-yellow-500">
        Acompañamientos
      </h2>
      <div className="flex items-center justify-center mx-auto mcontainer ">
        {/* GRID */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Display CARD */}
          {product.acompaniamiento &&
            product.acompaniamiento.map((principal) => (
              <CardTemplate key={principal.id} product={principal} />
            ))}
        </div>
      </div>
      {/* BEBIDAS */}
      <h2 className="p-2 mt-8 text-4xl font-bold text-center text-yellow-500">
        Bebidas
      </h2>
      <div className="flex items-center justify-center mx-auto mcontainer ">
        {/* GRID */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Display CARD */}
          {product.bebidas &&
            product.bebidas.map((principal) => (
              <CardTemplate key={principal.id} product={principal} />
            ))}
        </div>
      </div>
      {/* CAFETERIA */}
      <h2 className="p-2 mt-8 text-4xl font-bold text-center text-yellow-500">
        Bebidas
      </h2>
      <div className="flex items-center justify-center mx-auto mcontainer ">
        {/* GRID */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Display CARD */}
          {product.cafeteria &&
            product.cafeteria.map((principal) => (
              <CardTemplate key={principal.id} product={principal} />
            ))}
        </div>
      </div>
      {/* CAFETERIA */}
      <h2 className="p-2 mt-8 text-4xl font-bold text-center text-yellow-500">
        Postres
      </h2>
      <div className="flex items-center justify-center mx-auto mcontainer ">
        {/* GRID */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Display CARD */}
          {product.postre &&
            product.postre.map((principal) => (
              <CardTemplate key={principal.id} product={principal} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
