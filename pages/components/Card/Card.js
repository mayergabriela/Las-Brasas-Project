"use client";
import { useState, useEffect } from "react";
import CardButton from "./CardButton";
import CardButtonAdd from "./CardButtonAdd";
import Postre from "../Products/Postre";
import Acompaniamiento from "../Products/Acompaniamiento";
import Cafeteria from "../Products/Cafeteria";
import Principal from "../Products/Principal";
import Infantil from "../Products/Infantil";
import Cervezas from "../Products/Cervezas";
import Vinos from "../Products/Vinos";
import Bebidas from "../Products/Bebidas";


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
  const [product, setProduct] = useState(initial);
  console.log(product.cafeteria.image);
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
    <div className="container flex flex-wrap justify-center gap-2">
      {product.menu_principal &&
        product.menu_principal.map((principal) => (
          <Principal key={principal.id} principal={principal} />
        ))}
      {product.menu_infantil &&
        product.menu_infantil.map((infantil) => (
          <Infantil key={infantil.id} infantil={infantil} />
        ))}
      {product.postre &&
        product.postre.map((postre) => (
          <Postre key={postre.id} postre={postre} />
        ))}
      {product.acompaniamiento &&
        product.acompaniamiento.map((acompaniamiento) => (
          <Acompaniamiento key={acompaniamiento.id} acompaniamiento={acompaniamiento} />
        ))}
      {product.cafeteria &&
        product.cafeteria.map((cafeteria) => (
          <Cafeteria key={cafeteria.id} cafeteria={cafeteria} />
        ))}
      {product.bebidas &&
        product.bebidas.map((bebida) => (
          <Bebidas key={bebida.id} bebida={bebida} />
        ))}
      {product.cervezas &&
        product.cervezas.map((cerveza) => (
          <Cervezas key={cerveza.id} cerveza={cerveza} />
        ))}
      {product.vinos &&
        product.vinos.map((vino) => (
          <Vinos key={vino.id} vino={vino} />
        ))}
    </div>
  );
}

export default Card;
