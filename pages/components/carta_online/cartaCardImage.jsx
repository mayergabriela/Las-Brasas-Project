/***** REACT COMPONENTS  *****/
import Image from "next/image";
import Image from "next/image";

export default function CartaCard({ imageLocal, title, description }) {
  // blurdataurl{variable} para imagenes que no sean locales
  return (
    <div>
      <div className="grid place-content-center">
        <Image
          src={imageLocal}
          alt="bebidas"
          blurDataURL="bebida"
          placeholder="blur"
        />
      </div>
      <div className="p-2 mb-2 text-xl font-bold">{title}</div>

      <div className="px-6 pt-4 pb-2">
        <span>{description}</span>
      </div>
    </div>
  );
}
