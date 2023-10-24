import CartaCard from "./cartaCardImage";
import bebidas from "public/images/carta-online/minihamburguesa-con-tomatitos 1 (5).png";
import menuInfantil from "public/images/carta-online/minihamburguesa-con-tomatitos 1.png";
import acompañamiento from "public/images/carta-online/minihamburguesa-con-tomatitos 1 (2).png";
import postres from "public/images/carta-online/minihamburguesa-con-tomatitos 1 (3).png";
import cafeteria from "public/images/carta-online/minihamburguesa-con-tomatitos 1 (4).png";
import menuPrincipal from "public/images/carta-online/minihamburguesa-con-tomatitos 1 (1).png";

export default function CartaHeader({ description }) {
  return (
    <section className="grid place-content-center">
      <div className="flex flex-wrap justify-center px-4 py-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded shadow mt-32 hover:bg-gray-100">
        <h1>CARTA ONLINE</h1>
      </div>
      <article className="grid grid-cols-3 grid-rows-2 gap-5">
        <div className="max-w-sm col-span-1 row-span-2 overflow-hidden rounded shadow-lg">
          <CartaCard imageLocal={menuPrincipal} title={"Menu Principal"} />
          <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-black bg-yellow-500 rounded-full">
            {(description = "Carnes")}
          </span>
          <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-black bg-yellow-500 rounded-full">
            {(description = "Vinos")}
          </span>
          <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-black bg-yellow-500 rounded-full">
            {(description = "Cocina a las Brasas")}
          </span>
        </div>
        <div className="max-w-sm col-span-1 row-span-2 overflow-hidden rounded shadow-lg">
          <CartaCard imageLocal={menuInfantil} title={"Menu Infantil"} />
          <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-black bg-yellow-500 rounded-full">
            {(description = "Mini hamburguesas")}
          </span>
          <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-black bg-yellow-500 rounded-full">
            {(description = "Pizzas")}
          </span>
          <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-black bg-yellow-500 rounded-full">
            {(description = "Milanesas")}
          </span>
        </div>
        <div className="max-w-sm col-span-1 row-span-2 overflow-hidden rounded shadow-lg">
          <CartaCard imageLocal={acompañamiento} title={"Acompañamiento"} />
          <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-black bg-yellow-500 rounded-full">
            {(description = "Vegetales")}
          </span>
          <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-black bg-yellow-500 rounded-full">
            {(description = "Salsas")}
          </span>
          <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-black bg-yellow-500 rounded-full">
            {(description = "Ensaladas")}
          </span>
        </div>
        <div className="max-w-sm col-span-1 row-span-2 overflow-hidden rounded shadow-lg">
          <CartaCard imageLocal={bebidas} title={"Bebidas"} />
          <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-black bg-yellow-500 rounded-full">
            {(description = "Wizky")}
          </span>
          <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-black bg-yellow-500 rounded-full">
            {(description = "Vinos")}
          </span>
          <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-black bg-yellow-500 rounded-full">
            {(description = "Gaseosas")}
          </span>
        </div>
        <div className="max-w-sm col-span-1 row-span-2 overflow-hidden rounded shadow-lg">
          <CartaCard imageLocal={cafeteria} title={"Cafeteria"} />
          <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-black bg-yellow-500 rounded-full">
            {(description = "Variedades de te'")}
          </span>
          <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-black bg-yellow-500 rounded-full">
            {(description = "Cafe")}
          </span>
          <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-black bg-yellow-500 rounded-full">
            {(description = "Expresso")}
          </span>
        </div>
        <div className="max-w-sm col-span-1 row-span-2 overflow-hidden rounded shadow-lg">
          <CartaCard imageLocal={postres} title={"Postres"} />
          <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-black bg-yellow-500 rounded-full">
            {(description = "Tortas")}
          </span>
          <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-black bg-yellow-500 rounded-full">
            {(description = "Helados")}
          </span>
          <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-black bg-yellow-500 rounded-full">
            {(description = "Artesanal")}
          </span>
        </div>
      </article>
    </section>
  );
}
