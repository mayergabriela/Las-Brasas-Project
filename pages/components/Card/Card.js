"use client";
/***** REACT FEATURES  *****/
import { useState, useEffect } from "react";
/***** COMPONENTS  *****/
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
      {/* INICIO  CODIGO CARD GABY */}
      <div className="container flex items-center justify-center min-h-screen mx-auto">
        {/* GRID */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Display CARD */}
          <div className="card ">
            <div className="flex flex-col p-5">
              <div className="overflow-hidden rounded-xl">
                <img src="" alt="A menu Picture "></img>
              </div>
              <h5 className="mt-3 text-2xl font-medium md:text-3xl">
                Nombre del producto
              </h5>
              <p className="mt-3 text-lg text- text-slate-500">
                $ Precio Producto
              </p>
              <CardButton />
              <CardButtonAdd />
            </div>
          </div>
        </div>
      </div>
      {/* FIN CODIGO CARD GABY */}

      {/* INICIO CODIGO EDUARDO DE MOSTRAR DATOS  ALA API */}
      <h1 className="text-5xl italic text-center text-bold mt-28 ">
        Menú Principal
      </h1>
      <hr />
      <div className="className=" card>
        <div className="container flex flex-wrap justify-center gap-2">
          {product.menu_principal &&
            product.menu_principal.map((principal) => (
              <Principal key={principal.id} principal={principal} />
            ))}
        </div>
      </div>
      <h1 className="text-5xl italic text-center text-bold">Menú Infantil</h1>
      <hr />
      <div className="container flex flex-wrap justify-center gap-2">
        {product.menu_infantil &&
          product.menu_infantil.map((infantil) => (
            <Infantil key={infantil.id} infantil={infantil} />
          ))}
      </div>
      <h1 className="text-5xl italic text-center text-bold">Postre</h1>
      <hr />
      <div className="container flex flex-wrap justify-center gap-2">
        {product.postre &&
          product.postre.map((postre) => (
            <Postre key={postre.id} postre={postre} />
          ))}
      </div>
      <h1 className="text-5xl italic text-center text-bold">Acompañamiento</h1>
      <hr />
      <div className="container flex flex-wrap justify-center gap-2">
        {product.acompaniamiento &&
          product.acompaniamiento.map((acompaniamiento) => (
            <Acompaniamiento
              key={acompaniamiento.id}
              acompaniamiento={acompaniamiento}
            />
          ))}
      </div>
      <h1 className="text-5xl italic text-center text-bold">Cafeteria</h1>
      <hr />
      <div className="container flex flex-wrap justify-center gap-2">
        {product.cafeteria &&
          product.cafeteria.map((cafeteria) => (
            <Cafeteria key={cafeteria.id} cafeteria={cafeteria} />
          ))}
      </div>
      <h1 className="text-5xl italic text-center text-bold">Bebidas</h1>
      <hr />
      <div className="container flex flex-wrap justify-center gap-2">
        {product.bebidas &&
          product.bebidas.map((bebida) => (
            <Bebidas key={bebida.id} bebida={bebida} />
          ))}
      </div>
      <h1 className="text-5xl italic text-center text-bold">Cervezas</h1>
      <hr />
      <div className="container flex flex-wrap justify-center gap-2">
        {product.cervezas &&
          product.cervezas.map((cerveza) => (
            <Cervezas key={cerveza.id} cerveza={cerveza} />
          ))}
      </div>
      <h1 className="text-5xl italic text-center text-bold">Vinos</h1>
      <hr />
      <div className="container flex flex-wrap justify-center gap-2">
        {product.vinos &&
          product.vinos.map((vino) => <Vinos key={vino.id} vino={vino} />)}
      </div>
    </div>
  );
}

export default Card;
