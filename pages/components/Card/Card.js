"use client";
/***** REACT FEATURES  *****/
import { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
/***** COMPONENTS  *****/
import { CardTemplate } from "./CardTemplate";
/***** API FEATURES  *****/

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
  //console.log(product);
  const [loading, setLoading] = useState(false);
  useEffect(() =>{
    setLoading(true)
    setTimeout(() =>{
      setLoading(false)

    },5000)

  },[])
  {
    /* USE EFFECT */
  }

  /*****PETICION  *****/
  useEffect(() => {
    try {
      fetch(`${API}/db`)
        .then((response) => response.json())
        .then((data) => {
          //console.log(data.image);
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
      {
        loading?
        <BeatLoader
        color={'#EBAA10'}
        loading={loading}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      :
      <div>
        <h2
          className="p-2 my-20 text-4xl font-bold text-center text-yellow-500"
          id="Menu_principal"
        >
          Menu Principal
        </h2>
        <div className="container flex items-center justify-center mx-auto ">
          {/* GRID */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Display CARD MENU PRINCIPAL */}
            {product.menu_principal &&
              product.menu_principal.map((principal) => (
                <CardTemplate key={principal.id} product={principal} />
              ))}
          </div>
        </div>

      <h2 className="p-2 my-20 text-4xl font-bold text-center text-yellow-500" id="Menu_infantil">
        Menu Infantil
      </h2>
      <div className="container flex items-center justify-center mx-auto ">
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
      <h2 className="p-2 my-20 text-4xl font-bold text-center text-yellow-500" id="Acompañamiento">
        Acompañamientos
      </h2>
      <div className="container flex items-center justify-center mx-auto ">
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
      <h2 className="p-2 my-20 text-4xl font-bold text-center text-yellow-500" id="Bebidas">
        Bebidas
      </h2>
      <div className="container flex items-center justify-center mx-auto ">
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
      <h2 className="p-2 my-20 text-4xl font-bold text-center text-yellow-500" id="Cafeteria">
        Cafetería
      </h2>
      <div className="container flex items-center justify-center mx-auto ">
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
      <h2 className="p-2 my-20 text-4xl font-bold text-center text-yellow-500" id="Postres">
        Postres
      </h2>
      <div className="container flex items-center justify-center mx-auto ">
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
      }
    </div>
  );
}

export default Card;
