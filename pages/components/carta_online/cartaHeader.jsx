import Image from "next/image";
import Link from "next/link";

import menuInfantil from "public/images/carta-online/minihamburguesa-con-tomatitos 1.png";
import acompañamiento from "public/images/carta-online/minihamburguesa-con-tomatitos 1 (2).png";
import postres from "public/images/carta-online/minihamburguesa-con-tomatitos 1 (3).png";
import cafeteria from "public/images/carta-online/minihamburguesa-con-tomatitos 1 (4).png";
import bebidas from "public/images/carta-online/minihamburguesa-con-tomatitos 1 (5).png";
import menuPrincipal from "public/images/carta-online/minihamburguesa-con-tomatitos 1 (1).png";

export default function CartaHeader() {
  return (
    <section>
      <h1>CARTA ONLINE</h1>
      <article className=" grid grid-cols-3 grid-rows-2 gap-0">
        <div className="col-span-1 row-span-2">
          <Image src={menuInfantil} alt="HOLA" />
        </div>

        <div className="col-span-1 row-span-1">
          <Image src={menuPrincipal} alt="HOLA" />
        </div>

        <div className="col-span-1 row-span-1">
          <Image src={acompañamiento} alt="HOLA" />
        </div>

        <div className="col-span-1 row-span-1">
          <Image src={postres} alt="HOLA" />
        </div>

        <div className="col-span-1 row-span-1">
          <Image src={cafeteria} alt="HOLA" />
        </div>

        <div className="col-span-1 row-span-1">
          <Image src={bebidas} alt="bebidas" />
          <div className="font-bold text-xl">bebidas</div>

          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #artezanal
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #wizky
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #vinos
          </span>
        </div>
      </article>
    </section>
  );
}
