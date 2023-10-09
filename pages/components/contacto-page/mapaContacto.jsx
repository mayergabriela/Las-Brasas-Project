import wasap from "public/icons/🦆 icon _What's App_.svg";
import email from "public/icons/🦆 icon _Envelope_.svg";
import location from "public/icons/location_icon.svg";
import Image from "next/image";

export default function MapaContacto() {
  return (
    <section className="grid grid-cols-3 grid-rows-3 gap-0 grid-rows-1fr">

      <article>
        <div class=" col-span-3 row-1">
          <Image src={location} alt="location" />
          <p className="text-gray-50 text-xl">location</p>
        </div>

        <div>
          <Image src={wasap} alt="wasap" />
          <p className="text-gray-50 text-xl">wasap</p>
        </div>

        <div>
          <Image src={email} alt="email" />
          <p className="text-gray-50 text-xl">email</p>
        </div>
      </article>

      <article className="col-span-3 row-2">
        <iframe
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=La%20Plata,%20city,%20Argentina+(cook)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
        </iframe>
      </article>

      <article className="col-span-3 row-3">
        <p>horarios</p>
        <p>martes a domingos</p>
        <p>12:00hs - 16:00hs</p>
        <p>20:00hs - 00:30hs</p>
      </article>
    </section>
  );
}
