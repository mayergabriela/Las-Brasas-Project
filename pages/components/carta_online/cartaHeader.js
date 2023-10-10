import CartaCard from "./cartaCardImage";
import bebidas from "public/images/carta-online/minihamburguesa-con-tomatitos 1 (5).png";
import menuInfantil from "public/images/carta-online/minihamburguesa-con-tomatitos 1.png";
import acompañamiento from "public/images/carta-online/minihamburguesa-con-tomatitos 1 (2).png";
import postres from "public/images/carta-online/minihamburguesa-con-tomatitos 1 (3).png";
import cafeteria from "public/images/carta-online/minihamburguesa-con-tomatitos 1 (4).png";
import menuPrincipal from "public/images/carta-online/minihamburguesa-con-tomatitos 1 (1).png";

export default function CartaHeader({ imageLocal, title, description }) {
  return (
    <section>
      <div className="flex flex-wrap justify-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        <h1>
          <span className="border-b-2 border-yellow-500 inline-block">
            CARTA
          </span> ONLINE
        </h1>
      </div>
      <article className="grid grid-cols-3 grid-rows-2 gap-5">
        <div className="col-span-1 row-span-2 max-w-sm rounded overflow-hidden shadow-lg">
          <CartaCard imageLocal={menuPrincipal} title={"menu principal"} />
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {(description = "wizky")}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {(description = "vinos")}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {(description = "artezanal")}
          </span>
        </div>
        <div className="col-span-1 row-span-2 max-w-sm rounded overflow-hidden shadow-lg">
          <CartaCard imageLocal={menuInfantil} title={"menu infantil"} />
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {(description = "mini hamburguesas")}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {(description = "pizzas")}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {(description = "fritas")}
          </span>
        </div>
        <div className="col-span-1 row-span-2 max-w-sm rounded overflow-hidden shadow-lg">
          <CartaCard imageLocal={acompañamiento} title={"acompañamiento"} />
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {(description = "snack")}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {(description = "salsas")}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {(description = "verduras")}
          </span>
        </div>
        <div className="col-span-1 row-span-2 max-w-sm rounded overflow-hidden shadow-lg">
          <CartaCard imageLocal={bebidas} title={"bebidas"} />
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {(description = "wizky")}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {(description = "vinos")}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {(description = "artezanal")}
          </span>
        </div>
        <div className="col-span-1 row-span-2 max-w-sm rounded overflow-hidden shadow-lg">
          <CartaCard imageLocal={cafeteria} title={"cafeteria"} />
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {(description = "te'")}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {(description = "mate")}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {(description = "tostado")}
          </span>
        </div>
        <div className="col-span-1 row-span-2 max-w-sm rounded overflow-hidden shadow-lg">
          <CartaCard imageLocal={postres} title={"postres"} />
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {(description = "tortas")}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {(description = "cakes")}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {(description = "artezanal")}
          </span>
        </div>
      </article>
    </section>
  );
}
