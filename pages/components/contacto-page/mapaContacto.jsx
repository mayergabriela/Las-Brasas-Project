/***** REACT COMPONENTS  *****/
import Image from "next/image";
/***** LIBRARIES IMPORTED  *****/
import { AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";

export default function MapaContacto() {
  return (
    <section className="grid grid-cols-3 grid-rows-3 place-content-center gap- grid-rows-1fr my-5">
      <article className="col-span-3 p-3 row-1">
        <div className="flex gap-5 relative bottom-8 mr-12 w-[270px] ">
          <div className="rounded-full shadow-md shadow-gray-600 bg-[#EBAA10]  p-3">
            <IoLocationSharp fill="white" size={25} />
          </div>
          <p className="relative grid flex-row text-gray-50 text-md lg:left-9 md:left-6 left-3 place-content-center ">
            Rodríguez Peña 684, CABA
          </p>
        </div>
        <div className="relative flex gap-5 bottom-2">
          <div className="rounded-full shadow-md shadow-gray-600 bg-[#EBAA10]  p-3">
            <AiOutlineWhatsApp fill="white" size={25} />
          </div>
          <p className="relative grid text-gray-50 text-md lg:left-9 md:left-6 left-3 place-content-center ">
            +54116509428
          </p>
        </div>
        <div className="relative flex gap-5 top-4 ">
          <div className="rounded-full shadow-md shadow-gray-600 bg-[#EBAA10]  p-3">
            <AiOutlineMail fill="white" size={25} />
          </div>
          <p className="relative grid text-gray-50 text-ellipsis text-md lg:left-9 md:left-6 left-3 place-content-center">
            info@lasbrasascook.com
          </p>
        </div>
      </article>

      <article className="col-span-3 row-2">
        <iframe
          height={200}
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=La%20Plata,%20city,%20Argentina+(cook)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </article>

      <article className="grid col-span-3 p-5 row-3 place-content-center ">
        <div className="relative right-11">
          <p className="text-center text-gray-50 text-xl py-1 ">Horarios</p>
          <p className="text-gray-50 text-center text-md ">
            Martes a Domingos
          </p>
          <p className="text-gray-50 text-center text-md ">
            12:00hs - 16:00hs
          </p>
          <p className="text-gray-50 text-center text-md ">
            20:00hs - 00:30hs
          </p>
        </div>
      </article>
    </section>
  );
}
