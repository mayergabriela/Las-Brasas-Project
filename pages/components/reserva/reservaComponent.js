/** REACT COMPONENTS  **/
import { useState,useContext  } from "react";
import Image from "next/image";
import { AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { FaCalendar, FaUsers } from "react-icons/fa";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { ThemeContext } from "@/pages/context/ThemeContextProvider";

const Reserva = () => {
  const [startDate, setStartDate] = useState(new Date());
  const data = useContext(ThemeContext);
  const [theme] = data;

  return (
    <div className={`max-w-[1980px] mx-auto p-4 ${theme}`}>
      {" "}
      <div className="relative h-screen">
        {" "}
        <div className="absolute flex flex-col items-center justify-center w-full h-screen mx-auto text-white bg-black/70">
          {" "}
          <h1 className="pb-8 text-3xl font-semibold text-center uppercase lg:text-5xl md:text-4xl top-1 md:py-2 lg:pb-14 md:pb-12">
            Hacé tu reserva
          </h1>{" "}
          <div className="flex flex-col items-center w-full my-4 sm:w-[80%] m-1 lg:p-3 lg:my-6">
            {" "}
            <div className="flex flex-col lg:flex-row gap-y-2 lg:gap-x-[30px] items-center justify-between mb-8 pb-8 lg:mb-14">
              <div className="flex items-center justify-center w-full my-4 lg:mx-14 sm:w-[80%] lg:p-2 lg:my-4 ">
                {" "}
                <div className="rounded-full shadow-md shadow-gray-600 bg-[#EBAA10] sm:m-4 lg:m-4 p-2">
                  <IoLocationSharp fill="white" size={20} />{" "}
                </div>{" "}
                <p className="p-2 text-xl whitespace-nowrap lg:text-2xl lg:px-2 lg:mx-0">
                  Rodríguez Peña 684, CABA
                </p>{" "}
              </div>{" "}
              <div className="flex items-center justify-center w-full lg:mx-14 my-4 sm:w-[80%] lg:p-2 lg:my-4 md:bottom-1 ">
                {" "}
                <div className="rounded-full shadow-md shadow-gray-600 bg-[#EBAA10] sm:m-4 lg:m-4 p-2">
                  <AiOutlineWhatsApp fill="white" size={20} />{" "}
                </div>{" "}
                <p className="p-2 text-xl lg:text-2xl lg:px-2 lg:mx-0">
                  +54 1154253329
                </p>{" "}
              </div>{" "}
              <div className="flex items-center justify-center w-full my-4 sm:w-[80%] lg:p-2 lg:my-4 md:bottom-1 ">
                {" "}
                <div className="rounded-full shadow-md shadow-gray-600 bg-[#EBAA10] sm:m-4 lg:m-4 p-2">
                  <AiOutlineMail fill="white" size={20} />{" "}
                </div>{" "}
                <p className="p-2 text-xl lg:text-2xl lg:px-2 lg:mx-0">
                  info@lasbrasascook.com
                </p>{" "}
              </div>{" "}
            </div>
            <form>
              <div className="flex flex-col lg:flex-row gap-y-10 lg:gap-x-[30px] items-center justify-between mb-8">
                {/*datetimePicker */}
                <div>
                  <div className="flex items-center gap-x-[10px] mx-8 font-semibold text-white text-base mb-3">
                    <FaCalendar fill="#EBAA10" />
                    <div>Seleccionar Fecha y Horario</div>
                  </div>
                  <Datetime
                    className="w-60 py-2 mx-8 text-sm text-center text-gray-500 bg-white border-2 border-gray-300 rounded-lg shadow appearance-none input"
                    input={true}
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat={true}
                    initialValue={new Date()}
                  />
                </div>
                {/*person number */}
                <div>
                  <div className="flex items-center gap-x-[10px] font-semibold text-white text-base mb-3">
                    <FaUsers fill="#EBAA10" />
                    <div>Cantidad de personas</div>
                  </div>
                  <input
                    className="flex p-2 text-sm text-center text-gray-500 border-2 border-gray-300 rounded-lg input"
                    type="number"
                    placeholder="1"
                  />
                </div>
              </div>
              <div className="max-w-[316px] mx-auto flex justify-center">
                <button className=" text-white uppercase bg-[#EBAA10] hover:bg-[#2c2c2c] hover:text-[#EBAA10] font-bold w-full lg:w-auto mt-4 rounded-full text-md md:text-xl lg:px-20 md:px-16 px-14 py-2">
                  Reservar
                </button>
              </div>
            </form>
          </div>{" "}
        </div>{" "}
        <Image
          className="object-cover w-full h-screen"
          src="/images/contact-banner.jpg"
          width={1200}
          height={800}
          alt="Banner"
        />{" "}
      </div>{" "}
    </div>
  );
};

export default Reserva;
