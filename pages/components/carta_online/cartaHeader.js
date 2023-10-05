import Image from "next/image";
import Link from "next/link";
import CartaCard from "./cartaCard";
import bebidas from "public/images/carta-online/minihamburguesa-con-tomatitos 1 (5).png";
import menuInfantil from "public/images/carta-online/minihamburguesa-con-tomatitos 1.png";
import acompañamiento from "public/images/carta-online/minihamburguesa-con-tomatitos 1 (2).png";
import postres from "public/images/carta-online/minihamburguesa-con-tomatitos 1 (3).png";
import cafeteria from "public/images/carta-online/minihamburguesa-con-tomatitos 1 (4).png";

import menuPrincipal from "public/images/carta-online/minihamburguesa-con-tomatitos 1 (1).png";

export default function CartaHeader({imageLocal}) {
  return (
    <section>
      <div className="grid place-content-center">
      <h1>CARTA ONLINE</h1>
      </div>
      <article className=" grid grid-cols-3 grid-rows-2 gap-0">
        {/* <div className="col-span-1 row-span-2">
          <Image src={menuInfantil} width={300} height={300} alt="HOLA" />
        </div>

        <div className="col-span-1 row-span-1">
          <Image src={menuPrincipal} width={300} height={300} alt="HOLA" />
        </div>

        <div className="col-span-1 row-span-1">
          <Image src={acompañamiento} width={300} height={300} alt="HOLA" />
        </div>

        <div className="col-span-1 row-span-1">
          <Image src={postres} width={300} height={300} alt="HOLA" />
        </div>

        <div className="col-span-1 row-span-1">
          <Image src={cafeteria} width={300} height={300} alt="HOLA" />
        </div> */}
        <CartaCard imageLocal={bebidas}/>
        <CartaCard/>
        <CartaCard/>
        <CartaCard/>
        <CartaCard/>
        <CartaCard/>
      </article>
    </section>
  );
}
