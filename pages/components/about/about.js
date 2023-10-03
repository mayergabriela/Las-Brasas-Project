//images
import Image from "next/image";
import imageAbout2 from "@/public/images/aboutImage/img 2.png";
import imageAbout1 from "@/public/images/aboutImage/img 1.png";
import imageAbout3 from "@/public/images/aboutImage/img 3.png";
// subcomponentes
import AboutDueño from "./aboutDueño";
import Reserva from "./reserva";

export default function About() {
  return (
    <>
      <section>
        <div>
          <h2 className="font-roboto text-2xl md:text-5xl font-normal leading-14 tracking-normal text-center p-[1rem]">
            <u className="border-b-2 border-yellow-500 inline-block">ACERCA </u>
            DE NOSOTROS
          </h2>
        </div>
        <div >
          <p className=" text-center font-nunito text-base font-normal">
            Las Brasas Cook es un restaurante Argentino pensado para disfrutar
            una excelente comida en familia. El ambiente ameno, la amabilidad
            del personal y la iluminación generan una atmosfera amigable y
            relajante. El restaurante presenta un diseño industrial, con
            terminaciones en madera y ladrillos a la vista que invita al
            comensal a sentarse y disfrutar de un hermoso momento.
          </p>
        </div>
      </section>
      <section>
        <Image src={imageAbout2}
        layout="responsive"
         alt="Picture restorant"
         width={200}
         height={200}
         
         />
        <Image src={imageAbout1}
        layout="responsive"
         alt="lugar"
         width={200}
         height={200}
         
         />
        <Image src={imageAbout3}
        layout="responsive"
         alt="Picture kitchen"
         width={200}
         height={200}
         
         />
      </section>
      <AboutDueño></AboutDueño>
      <Reserva></Reserva>
    </>
  );
}
