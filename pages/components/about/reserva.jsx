import Image from "next/image";
import reserva from "public/images/aboutImage/Reservas.png";

export default function Reserva() {
  return (
    <article className="w-screen mx-auto bg-cover bg-no-repeat bg-center bg-fixed ">
      <Image src={reserva} layout="responsive" alt="reserva"/>
    </article>
  );
}
