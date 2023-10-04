
import Image from "next/image";
import imageAbout2 from "/public/images/aboutImage/img 2.png";
import imageAbout1 from "/public/images/aboutImage/img 1.png";
import imageAbout3 from "/public/images/aboutImage/img 3.png";
// subcomponentes
import AboutDueño from "./aboutDueño";
import Reserva from "./reserva";

export default function About() {
  return (
    <>
      <section className="md:flex flex-row-reverse gap-6 justify-center">

        <article className="md:grid place-content-start">
          <div className="grid place-items-center my-5">
            <h2 className="font-roboto text-2xl md:text-5xl font-normal leading-14 tracking-normal text-center p-[1rem]">
              <span className="border-b-2 border-yellow-500 inline-block">
                ACER
              </span>
              CA DE NOSOTROS
            </h2>
          </div>

          <div className="container sm:w-[500px]">
            <p className="p-2 text-center font-nunito text-base font-normal">
              Las Brasas Cook es un restaurante Argentino pensado para disfrutar
              una excelente comida en familia. El ambiente ameno, la amabilidad
              del personal y la iluminación generan una atmosfera amigable y
              relajante. El restaurante presenta un diseño industrial, con
              terminaciones en madera y ladrillos a la vista que invita al
              comensal a sentarse y disfrutar de un hermoso momento.
            </p>
          </div>
        </article>

        <article className="md:grid grid-cols-3 grid-rows-2 gap-2 place-items-start">
          <div className=" sm:col-span-3 row-span-1 my-7">
            <Image
              src={imageAbout2}
              layout="responsive"
              alt="Picture restorant"
            />
          </div>
          <div className="sm:col-span-1 row-span-1">
            <Image src={imageAbout1} layout="responsive" alt="lugar" />
          </div>
          <div className="sm:col-span-2 row-span-1">
            <Image
              src={imageAbout3}
              layout="responsive"
              alt="Picture kitchen"
            />
          </div>
        </article>
      </section>
      <AboutDueño></AboutDueño>
      <Reserva></Reserva>
    </>
  );
}
