/***** REACT COMPONENTS  *****/
import Link from "next/link";
import { useState } from "react";
/***** LIBRARIES IMPORTED *****/
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";

import { ThemeContext } from "@/pages/context/ThemeContextProvider";
import { useContext } from "react";

/***** IMAGE IMPORTED  *****/
import Image from "next/image";
import { useCart } from "@/pages/hooks/useCart";

function Navbar() {
  const [nav, setNav] = useState(false);

  const { cart } = useCart();

  const data = useContext(ThemeContext);

  const [theme, toggleTheme] = data;

  // Calcular la cantidad total de productos en el carrito
  const totalQuantity = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed bg-black/75 top-0 w-full h-20 z-[100]">
      <div className="container flex items-center justify-between w-full h-full px-2 py-4 mx-auto 2xl:px-16">
        <Link href={"/"} className="opacity-90 hover:opacity-50">
          <Image
            src="/images/logo.png"
            width={60}
            height={60}
            alt="Logo Las Brasas Cook"
          />
        </Link>
        <div>
          <ul className="hidden gap-10 tracking-wider text-white lg:flex opacity">
            <Link href={"/reservas"}>
              <li className="opacity-90 hover:opacity-50">RESERVAS</li>
            </Link>
            <Link href={"/cartaOnline"}>
              <li className="opacity-90 hover:opacity-50">CARTA ONLINE</li>
            </Link>
            <Link href={"/cartaTakeAway"}>
              <li className="opacity-90 hover:opacity-50">CARTA TAKE AWAY</li>
            </Link>
            <Link href={"/contact"}>
              <li className="opacity-90 hover:opacity-50">CONTACTO</li>
            </Link>
          </ul>
        </div>
        <div className="items-center justify-between hidden gap-3 px-4 py-1 md:flex opacity-90">
          <div className="flex items-center justify-between w-full gap-6 px-6 my-4">
            <button
              className="rounded-full shadow-md shadow-gray-600 bg-[#EBAA10] p-2 cursor-pointer  hover:opacity-50 hover:scale-105 ease-in duration-300"
              onClick={toggleTheme}
            >
              {theme === "light" ? (
                <BsFillMoonFill />
              ) : (
                <BsSunFill fill="black" />
              )}
            </button>

            <Link href={"/cart"}>
              <div className="relative rounded-full shadow-md shadow-gray-600 bg-[#EBAA10] p-2 cursor-pointer hover:opacity-50 hover:scale-105 ease-in duration-300">
                <FaShoppingCart fill="white" />
                {totalQuantity > 0 && (
                  <div className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-2 -right-3">
                    {totalQuantity}
                  </div>
                )}
              </div>
            </Link>
          </div>
        </div>
        <div onClick={handleNav} className="md:hidden">
          <AiOutlineMenu fill="white" size={25} />
        </div>
      </div>

      {/* Responsive Menu */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-black p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex items-center justify-between w-full">
              <Image
                src="/images/logo.png"
                width={60}
                height={60}
                alt="Logo Las Brasas Cook"
              />
              <div
                onClick={handleNav}
                className="rounded-full shadow-md shadow-gray-600 bg-[#EBAA10] p-2 cursor-pointer"
              >
                <AiOutlineClose fill="white" size={25} />
              </div>
            </div>
          </div>
          <div className="flex flex-col py-8 ">
            <ul className="py-4 uppercase">
              <Link href={"/reservas"}>
                <li className="py-4 text-white text-mg opacity-90 hover:opacity-50">
                  RESERVAS
                </li>
              </Link>
              <Link href={"/cartaOnline"}>
                <li className="py-4 text-white text-mg opacity-90 hover:opacity-50">
                  CARTA ONLINE
                </li>
              </Link>
              <Link href={"/cartaTakeAway"}>
                <li className="py-4 text-white text-mg opacity-90 hover:opacity-50">
                  CARTA TAKE AWAY
                </li>
              </Link>
              <Link href={"/contact"}>
                <li className="py-4 text-white text-mg opacity-90 hover:opacity-50">
                  CONTACTO
                </li>
              </Link>
            </ul>
            <div className="mt-20 p-30">
              <div className="flex items-center justify-between my-6 w-full sm:w-[80%]">
                <div className="rounded-full shadow-md shadow-gray-600 bg-[#EBAA10] p-2 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineSearch fill="white" />
                </div>
                <div className="rounded-full shadow-md shadow-gray-600 bg-[#EBAA10] p-2 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BiSolidUser fill="white" />
                </div>
                <div className="rounded-full shadow-md shadow-gray-600 bg-[#EBAA10] p-2 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaShoppingCart fill="white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
