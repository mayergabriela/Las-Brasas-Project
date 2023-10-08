"use client";
import { useState, useEffect } from "react";
import CardButton from "./CardButton";
import CardButtonAdd from "./CardButtonAdd";
//import Image from "next/image";

const API = "https://brasas-cook-numen.onrender.com";

function Card() {
  const [product, setProduct] = useState({ postre: [] });
  console.log(product);
  useEffect(() => {
    try {
      fetch(`${API}/db`)
        .then((response) => response.json())
        .then((data) => {
          //console.log(data.acompaniamiento);
          setProduct(data);
        });
    } catch (error) {
      (error) => {
        console.error("Error al cargar los datos:", error);
      };
    }
  }, []);

  return (
    <>
      {product.postre &&
        product.postre.map((postre) => (
          <div
            className="container flex items-center justify-center min-h-screen mx-auto"
            key={postre.id}
          >
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="card ">
                <div className="flex flex-col p-5">
                  <div className="overflow-hidden rounded-xl">
                    <img className= "object-contain center" src={postre.image} alt={postre.name}></img>
                  </div>
                  <h5 className="mt-3 text-2xl font-medium md:text-3xl">
                    {postre.name}
                  </h5>
                  <p className="mt-3 text-lg text- text-slate-500">
                    {`$ ${postre.price}`}
                  </p>
                  <CardButton />
                  <CardButtonAdd />
                </div>

              </div>
              
            </div>
          </div>
        ))}
    </>
    
  );
}

export default Card;
