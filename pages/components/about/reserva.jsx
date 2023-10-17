/** REACT COMPONENTS  **/
import React, { useState } from "react";
import Image from "next/image";
import { FaCalendar , FaUsers } from 'react-icons/fa'
import Datetime from 'react-datetime'
import "react-datetime/css/react-datetime.css"
/** IMAGES IMPORTED  **/


function reserva() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="w-full mx-auto p-4 lg:py-[25px]">
      {" "}
      <div className="h-screen relative">
        {" "}
        <div className="absolute w-full mx-auto text-white h-screen bg-black/70 flex flex-col justify-center items-center">
          {" "}
          <h1 className="text-3xl font-semibold text-center uppercase lg:text-5xl md:text-4xl top-1 md:py-2 lg:pb-14 md:pb-12 pb-8">
              Hacé tu reserva
          </h1>
          {" "}
          <div className="flex flex-col items-center w-full my-4 sm:w-[80%] m-1 lg:p-3 lg:my-6">
            {" "}

            <form>
                <div className='flex flex-col lg:flex-row gap-y-10 lg:gap-x-[30px] items-center justify-between mb-8'>
                    {/*datetimePicker */}
                    <div>
                        <div className='flex items-center gap-x-[10px] mx-8 font-semibold text-white text-base mb-3'>
                          <FaCalendar fill="#EBAA10"/>
                          <div>Seleccionar Fecha y Horario</div>
                        </div>
                        <Datetime 
                          className='input appearance-none shadow border-2 rounded-lg w-60 py-2 mx-8 border-gray-300 text-sm text-gray-500 text-center bg-white relative'
                          input={true}
                          selected={startDate} 
                          onChange={(date)=> setStartDate(date)}
                        /> 
                    </div>
                    {/*person number */}
                    <div>
                        <div className='flex items-center gap-x-[10px] font-semibold text-white text-base mb-3'>
                          <FaUsers fill="#EBAA10"/>
                          <div>Cantidad de personas</div>
                        </div>
                        <input className='input border-2 rounded-lg p-2 flex border-gray-300 text-sm text-gray-500 text-center' type='number' placeholder='1' />
                    </div>
                </div>
                <div className="max-w-[316px] mx-auto flex justify-center">
                  <button className=" text-white uppercase bg-[#EBAA10] hover:bg-[#2c2c2c] hover:text-[#EBAA10] font-bold w-full lg:w-auto mt-4 rounded-full text-md md:text-xl lg:px-20 md:px-16 px-14 py-2">Reservar</button>
                </div>
            </form>
          </div>{" "}
        </div>{" "}
        <Image
          className="w-full h-screen object-cover"
          src="/images/contact-banner.jpg"
          width={1200}
          height={800}
          alt="Banner"
        />{" "}
      </div>{" "}
    </div>
  );
};

export default reserva
