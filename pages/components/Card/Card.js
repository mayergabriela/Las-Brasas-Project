import React from "react";
import CardButton from "./CardButton";
import CardButtonAdd from "./CardButtonAdd";

const Card = () => {
  return (
    <div className="container flex items-center justify-center min-h-screen mx-auto">
      {/* GRID */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* CARD */}
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
  );
};

export default Card;
