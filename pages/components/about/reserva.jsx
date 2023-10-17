/** REACT COMPONENTS  **/
import Image from "next/image";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { ThemeContext } from "@/pages/context/ThemeContextProvider";
import { useContext } from "react";

const Reserva = () => {
  const data = useContext(ThemeContext);

  const [theme] = data;

  return (
    <div className={`max-w-[1980px] mx-auto p-4 ${theme}`}>
      {" "}
      <div className="max-h-[550px] relative">
        {" "}
        <div className="absolute w-full h-full mx-auto p-2 text-white max-h-[550px] bg-black/70 flex flex-col justify-center items-center">
          {" "}
          <h1 className="text-2xl font-semibold text-center uppercase lg:text-5xl md:text-4xl top-5 lg:py-4 md:py-3">
            Hacé tu reserva
          </h1>{" "}
          <div className="flex flex-col items-center w-full my-4 sm:w-[80%] m-1 lg:p-3 lg:my-6">
            {" "}
            <div className="flex items-center justify-center w-full my-4 sm:w-[80%] lg:p-2 lg:my-4 ">
              {" "}
              <div className="rounded-full shadow-md shadow-gray-600 bg-[#EBAA10] sm:m-4 lg:m-4 p-2 ">
                <IoLocationSharp fill="white" size={20} />{" "}
              </div>{" "}
              <p className="p-2 text-xs tracking-wider md:text-xl lg:text-2xl lg:px-2 lg:m-2">
                Rodríguez Peña 684, CABA
              </p>{" "}
            </div>{" "}
            <div className="flex items-center justify-center w-full my-4 sm:w-[80%] lg:p-2 lg:my-4 md:bottom-1 ">
              {" "}
              <div className="rounded-full shadow-md shadow-gray-600 bg-[#EBAA10] sm:m-4 lg:m-4 p-2">
                <AiOutlineWhatsApp fill="white" size={20} />{" "}
              </div>{" "}
              <p className="p-2 text-xs md:text-xl lg:text-2xl lg:px-2 lg:mx-0">
                +54 1154253329
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <Image
          className="w-full max-h-[550px] object-cover"
          src="/images/contact-banner.jpg"
          width={1200}
          height={600}
          alt="Banner"
        />{" "}
      </div>{" "}
    </div>
  );
};

export default Reserva;
