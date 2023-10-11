/***** REACT COMPONENTS  *****/
import Image from "next/image";
/***** LIBRARIES IMPORTED  *****/
import wasap from "public/icons/🦆 icon _What's App_.svg";
import email from "public/icons/🦆 icon _Envelope_.svg";
import location from "public/icons/location_icon.svg";

export default function MapaContacto() {
  return (
    <section className="grid grid-cols-3 grid-rows-3 place-content-cente gap- grid-rows-1fr">
      <article className="col-span-3 row-1">
        <div className="flex gap-4 relative bottom-7 w-[270px] ">
          <Image src={location} alt="location" />
          <p className="relative grid flex-row text-gray-50 text-md left-9 place-content-center ">
            Rodríguez Peña 684, CABA
          </p>
        </div>
        <div className="relative flex gap-5 bottom-2 ">
          <Image src={wasap} alt="wasap" />
          <p className="relative grid text-gray-50 text-md left-10 place-content-center ">
            +54116509428
          </p>
        </div>
        <div className="relative flex gap-5 top-5 ">
          <Image src={email} alt="email" />
          <p className="relative grid text-gray-50 text-ellipsis text-md left-9 place-content-center">
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
          <p className="text-center text-gray-50 text-md ">horarios</p>
          <p className="text-gray-50 text-ellipsis text-md ">
            martes a domingos
          </p>
          <p className="text-gray-50 text-ellipsis text-md ">
            12:00hs - 16:00hs
          </p>
          <p className="text-gray-50 text-ellipsis text-md ">
            20:00hs - 00:30hs
          </p>
        </div>
      </article>
    </section>
  );
}
