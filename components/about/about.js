/***** IMAGES IMPORTED  *****/
import Image from "next/image";
import imageAbout2 from "/public/images/aboutImage/img 2.png";
import imageAbout1 from "/public/images/aboutImage/img 1.png";
import imageAbout3 from "/public/images/aboutImage/img 3.png";
/*****  COMPONENTS  *****/
import AboutDueño from "./aboutDueño";

export default function About() {
  return (
    <div>
      <div className="flex flex-wrap justify-center px-4 py-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded shadow mt-32 hover:bg-gray-100">
        <h1>ACERCA DE </h1>
      </div>
      <section className="flex-row-reverse justify-center gap-6 md:flex ">
        <article className="md:grid place-content-start">
          <div className="grid my-5 place-items-center md:px-3">
            <h2 className="font-roboto text-3xl lg:text-5xl md:text-4xl font-normal leading-14 tracking-normal text-center p-[1rem]">
              <span className="inline-block border-b-2 border-yellow-500">
                ACER
              </span>
              CA DE NOSOTROS
            </h2>
          </div>

          <div className="g:w-[800px] w-[500px]">
            <p className="p-2 text-xl font-normal text-justify lg:text-2xl">
              Las Brasas Cook es un restaurante Argentino pensado para disfrutar
              una excelente comida en familia. El ambiente ameno, la amabilidad
              del personal y la iluminación generan una atmosfera amigable y
              relajante.
            </p>
            <p className="p-2 text-xl font-normal text-justify lg:text-2xl">
              El restaurante presenta un diseño industrial, con terminaciones en
              madera y ladrillos a la vista que invita al comensal a sentarse y
              disfrutar de un hermoso momento.
            </p>
          </div>
        </article>

        <article className="grid-cols-3 grid-rows-2 gap-2 md:grid place-items-start">
          <div className="row-span-1 sm:col-span-3 my-7">
            <Image
              src={imageAbout2}
              layout="responsive"
              alt="Picture restorant"
            />
          </div>
          <div className="row-span-1 sm:col-span-1">
            <Image src={imageAbout1} layout="responsive" alt="lugar" />
          </div>
          <div className="row-span-1 sm:col-span-2">
            <Image
              src={imageAbout3}
              layout="responsive"
              alt="Picture kitchen"
            />
          </div>
        </article>
      </section>
      <AboutDueño></AboutDueño>
    </div>
  );
}
