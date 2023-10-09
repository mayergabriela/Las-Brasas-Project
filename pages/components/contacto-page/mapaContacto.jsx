import wasap from "public/icons/🦆 icon _What's App_.svg";
import email from "public/icons/🦆 icon _Envelope_.svg";
import location from "public/icons/location_icon.svg";
import Image from "next/image";

export default function MapaContacto() {
  return (
    <section className="grid grid-cols-3 place-content-cente grid-rows-3 gap- grid-rows-1fr">
      <article className="col-span-3 row-1 p-3">
        <div className="flex gap-5 relative bottom-8 mr-12 w-[270px] ">
          <Image src={location} alt="location" />
          <p className="text-gray-50 text-md relative flex-row left-9 grid place-content-center ">
            Rodríguez Peña 684, CABA
          </p>
        </div>
        <div className="flex gap-5  relative bottom-2 ">
          <Image src={wasap} alt="wasap" className="rounded-full shadow-md shadow-gray-600 bg-[#EBAA10]  p-2" />
          <p className="text-gray-50 text-md relative left-10 grid place-content-center ">
            +54116509428
          </p>
        </div>
        <div className="flex gap-5  relative top-4  ">
          <Image src={email} alt="email" className="rounded-full shadow-md shadow-gray-600 bg-[#EBAA10]  p-2" />
          <p className="text-gray-50 text-ellipsis text-md relative left-9 grid place-content-center">
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

      <article className="col-span-3 row-3 p-5 grid place-content-center ">
        <div className="relative right-11">
          <p className="text-gray-50 text-center text-md ">Horarios</p>
          <p className="text-gray-50 text-ellipsis text-md ">
            Martes a Domingos
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
