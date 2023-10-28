/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useState, useEffect } from "react";
import CardButton from "./CardButtonComprar";
import CardButtonAdd from "./CardButtonAdd";
import BeatLoader from "react-spinners/BeatLoader";

const ONE_SECOND = 1000


function Card() {
  const [data, setData] = useState([]); // Estado para almacenar los datos de la API
  const [categoryFilter, setCategoryFilter] = useState("vinos");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    try {
      fetch(`https://fake-api-bay.vercel.app/${categoryFilter}`)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        });
    } catch (error) {
      (error) => {
        console.error("Error al cargar los datos:", error);
      };
    }
  }, [categoryFilter]);

  // Actualiza el estado con la categoría seleccionada
  const handleCategoryClick = (category) => {
    setCategoryFilter(category);
  };

  useEffect(() =>{
    setLoading(true)
    setTimeout(() =>{
      setLoading(false)

    },ONE_SECOND)

  },[])

  return (
    <>
      <section className="grid place-items-center">
        <div className="">
          <h2 className="p-2 text-4xl font-bold text-center text-yellow-500">
            Filtrar menu
          </h2>
        </div>
        <article className="flex flex-wrap gap-4 m-10 ">
          <button
            className="p-2 mt-4 rounded-lg font-semibold text-center text-yellow-500 bg-black uppercase shadow-md cursor-pointer hover:bg-yellow-500 hover:text-black focus:scale-95"
            onClick={() => handleCategoryClick("vinos")}
          >
            Vinos
          </button>
          <button
            className="p-2 mt-4 rounded-lg font-semibold text-center text-yellow-500 bg-black uppercase shadow-md cursor-pointer hover:bg-yellow-500 hover:text-black focus:scale-95"
            onClick={() => handleCategoryClick("bebidas")}
          >
            Bebidas
          </button>
          <button
            className="p-2 mt-4 rounded-lg font-semibold text-center text-yellow-500 bg-black uppercase shadow-md cursor-pointer hover:bg-yellow-500 hover:text-black focus:scale-95"
            onClick={() => handleCategoryClick("cervezas")}
          >
            Cafetería
          </button>
          <button
            className="p-2 mt-4 rounded-lg font-semibold text-center text-yellow-500 bg-black uppercase shadow-md cursor-pointer hover:bg-yellow-500 hover:text-black focus:scale-95"
            onClick={() => handleCategoryClick("menuInfantil")}
          >
            menu Infantil
          </button>
          <button
            className="p-2 mt-4 rounded-lg font-semibold text-center text-yellow-500 bg-black uppercase shadow-md cursor-pointer hover:bg-yellow-500 hover:text-black focus:scale-95"
            onClick={() => handleCategoryClick("menuPrincipal")}
          >
            Menu Principal
          </button>
          <button
            className="p-2 mt-4 rounded-lg font-semibold text-center text-yellow-500 bg-black uppercase shadow-md cursor-pointer hover:bg-yellow-500 hover:text-black focus:scale-95"
            onClick={() => handleCategoryClick("acompaniamiento")}
          >
            Acompañamiento
          </button>
        </article>
      </section>

      {loading ? (
        <BeatLoader
          color={"#EBAA10"}
          loading={loading}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <section className="grid place-content-center">
          <article className="flex justify-center flex-wrap gap-9 p-1">
            {data.map((product) => (
              <div
                className="flex container flex-col justify-between items-center w-[300px] rounded-lg bg-slate-50 shadow-lg"
                key={product.id}
              >
                <div className="grid place-content-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    height={200}
                    width={200}
                    layout="responsive"
                    className="rounded-lg"
                  />
                </div>
                <div className="grid place-items-center">
                  <p className="font-bold text-xl mb-2 p-2">{product.name}</p>
                  <p className="p-1 text-black">{product.description}</p>
                </div>
                <div className=" relative left-24 rounded-lg bg-slate-200">
                  <p className="px-6 pt-4 pb-2 text-slate-950">
                    ${product.price}
                  </p>
                </div>
                <div className="flex">
                  <CardButton />
                  <CardButtonAdd data={product} />
                </div>
              </div>
            ))}
          </article>
        </section>
      )}
    </>
  );
}

export default Card;
