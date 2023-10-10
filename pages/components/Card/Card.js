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
  console.log(product.cafeteria);
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
      <h1 className="text-bold text-5xl text-center italic mt-28 ">
        Menú Principal
      </h1>
      <hr />
      <div className="container flex flex-wrap justify-center gap-2">
        {product.menu_principal &&
          product.menu_principal.map((principal) => (
            <Principal key={principal.id} principal={principal} />
          ))}
      </div>
      <h1 className="text-bold text-5xl text-center italic">Menú Infantil</h1>
      <hr />
      <div className="container flex flex-wrap justify-center gap-2">
        {product.menu_infantil &&
          product.menu_infantil.map((infantil) => (
            <Infantil key={infantil.id} infantil={infantil} />
          ))}
      </div>
      <h1 className="text-bold text-5xl text-center italic">Postre</h1>
      <hr />
      <div className="container flex flex-wrap justify-center gap-2">
        {product.postre &&
          product.postre.map((postre) => (
            <Postre key={postre.id} postre={postre} />
          ))}
      </div>
      <h1 className="text-bold text-5xl text-center italic">Acompañamiento</h1>
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
      <h1 className="text-bold text-5xl text-center italic">Cafeteria</h1>
      <hr />
      <div className="container flex flex-wrap justify-center gap-2">
        {product.cafeteria &&
          product.cafeteria.map((cafeteria) => (
            <Cafeteria key={cafeteria.id} cafeteria={cafeteria} />
          ))}
      </div>
      <h1 className="text-bold text-5xl text-center italic">Bebidas</h1>
      <hr />
      <div className="container flex flex-wrap justify-center gap-2">
        {product.bebidas &&
          product.bebidas.map((bebida) => (
            <Bebidas key={bebida.id} bebida={bebida} />
          ))}
      </div>
      <h1 className="text-bold text-5xl text-center italic">Cervezas</h1>
      <hr />
      <div className="container flex flex-wrap justify-center gap-2">
        {product.cervezas &&
          product.cervezas.map((cerveza) => (
            <Cervezas key={cerveza.id} cerveza={cerveza} />
          ))}
      </div>
      <h1 className="text-bold text-5xl text-center italic">Vinos</h1>
      <hr />
      <div className="container flex flex-wrap justify-center gap-2">
        {product.vinos &&
          product.vinos.map((vino) => <Vinos key={vino.id} vino={vino} />)}
      </div>
    </div>
  );
}

export default Card;
