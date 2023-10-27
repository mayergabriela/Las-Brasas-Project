/** REACT  COMPONENTS  **/
import Image from "next/image";
/**LIBRARY IMPORTED  **/
import { AiOutlineWhatsApp } from "react-icons/ai";
import { ThemeContext } from "../../context/ThemeContextProvider";
import { useContext } from "react";

/** IMAGES IMPORTED  **/

const TakeawayBanner = () => {
  const data = useContext(ThemeContext);

  const [theme] = data;
  return (
    <div className={`max-w-[1980px] mx-auto p-4 ${theme}`}>
      {" "}
      <div className="max-h-[750px] relative">
        {" "}
        <div className="absolute w-full h-full mx-auto p-2 text-white max-h-[750px] bg-black/70 flex flex-col justify-center items-center">
          {" "}
          <h1 className="mt-10 text-2xl font-semibold text-center uppercase lg:text-5xl md:text-4xl lg:py-10 lg:m-4 md:m-2">
            Carta Take Away
          </h1>{" "}
          <h2 className="my-2 mb-1 text-sm font-semibold tracking-wider lg:my-6 lg:text-3xl md:text-2xl md:mb-2 md:mt-4">
            Hacé tu pedido
          </h2>{" "}
          <div className="flex items-center justify-center w-full my-1 sm:w-[80%] lg:p-2 lg:my-2 md:p-1 mt-0">
            {" "}
            <div className="rounded-full shadow-md shadow-gray-600 bg-[#EBAA10] md:m-6 lg:m-4 p-2 opacity-90 hover:opacity-50 ">
              <AiOutlineWhatsApp fill="white" size={20} />{" "}
            </div>{" "}
            <p className="p-2 text-xs tracking-wider md:text-xl lg:text-2xl lg:px-2 lg:mx-0">
              +54 1154253329
            </p>{" "}
          </div>{" "}
          <h4 className="text-sm font-semibold tracking-wider lg:text-3xl md:text-2xl lg:my-8">
            Medios de pago:
          </h4>{" "}
          <p className="mb-5 text-xs font-medium tracking-wider lg:mt-1 lg:text-xl md:text-md">
            Efectivo, Tarjetas Todas y Mercado Pago
          </p>{" "}
        </div>{" "}
        <Image
          src="/images/take-away-banner.png"
          width={1200}
          height={600}
          alt="Banner Take Away"
          className="object-cover w-full max-h-[750px]"
        />{" "}
      </div>{" "}
    </div>
  );
};

export default TakeawayBanner;
