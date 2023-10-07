import Image from "next/image";
import reserva from "public/images/aboutImage/Reservas.png";

export default function Reserva() {
  return (
    <article className="grid place-content-center">
      <Image src={reserva} alt="reserva"/>
    </article>
  );
}
