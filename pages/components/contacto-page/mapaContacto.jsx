/***** REACT COMPONENTS  *****/
import Image from "next/image";
/***** LIBRARIES IMPORTED  *****/
import wasap from "public/icons/🦆 icon _What's App_.svg";
import email from "public/icons/🦆 icon _Envelope_.svg";
import location from "public/icons/location_icon.svg";

export default function MapaContacto() {
  return (
    <section className="grid mb-10 place-content-center">
      <article className="relative grid place-content-center bottom-7">
        <div className="flex h-[40px] w-[400px]  gap-5">
          <Image
            src={location}
            alt="location"
            className="rounded-full shadow-md shadow-gray-600 bg-[#EBAA10]  p-2"
          />
          <p className="grid text-gray-50 text-md place-content-center ">
            Rodríguez Peña 684, CABA
          </p>
        </div>
        <div className="flex h-[40px] w-[400px] p-1 gap-5">
          <Image
            src={wasap}
            alt="wasap"
            className="rounded-full shadow-md shadow-gray-600 bg-[#EBAA10]  p-2"
          />
          r
          <p className="grid content-center text-gray-50 text-md">
            +54116509428
          </p>
        </div>
        <div className="flex h-[40px] w-[400px] p-1 gap-5">
          <Image
            src={email}
            alt="email"
            className="rounded-full shadow-md shadow-gray-600 bg-[#EBAA10] grid place-content-center  p-2"
          />
          <p className="grid text-gray-50 text-ellipsis text-md place-content-center">
            info@lasbrasascook.com
          </p>
        </div>
      </article>

      <article className="grid place-content-center">
        <iframe
          height={300}
          width={450}
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=La%20Plata,%20city,%20Argentina+(cook)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </article>

      <article className="relative grid place-items-center top-7">
        <div>
          <p className="text-center text-gray-50 text-md ">Horarios</p>
          <p className="text-gray-50 text-ellipsis text-md ">
            Martes a Domingos
          </p>
          <p className="text-center text-gray-50 text-ellipsis text-md ">
            12:00hs - 16:00hs
          </p>
          <p className="mb-12 text-center text-gray-50 text-ellipsis text-md">
            20:00hs - 00:30hs
          </p>
        </div>
      </article>
    </section>
  );
}
