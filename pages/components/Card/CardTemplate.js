/***** REACT COMPONENTS  *****/
import React from "react";
/***** COMPONENTS  *****/
import CardButton from "./CardButton";
import CardButtonAdd from "./CardButtonAdd";

export const CardTemplate = ({ product }) => {
  return (
    <div className="card ">
      <div className="flex flex-col p-5">
        <div className="rounded-xl">
          <img src={product.image} alt={product.name}></img>
        </div>
        <h5 className="mt-3 text-2xl font-medium md:text-3xl">
          {product.name}
        </h5>
        <p className="mt-3 text-lg text- text-slate-500">{product.price}</p>
        {product.description}
        <CardButton />
        <CardButtonAdd />
      </div>
    </div>
  );
};

export default CardTemplate;
