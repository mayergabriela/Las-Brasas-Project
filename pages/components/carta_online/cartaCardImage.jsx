import Image from "next/image";

export default function CartaCard({ imageLocal, title, description }) {
  // blurdataurl{variable} para imagenes que no sean locales
  return (
    <div>
      <div className="grid place-content-center">
      <Image
        src={imageLocal}
        alt="categorias"
        blurDataURL="blur"
        placeholder="blur"
      />
      </div>
      <div className="font-bold text-xl mb-2 p-2">{title}</div>
      
      <div className="px-6 pt-4 pb-2">
      <span>{description}</span>
      </div>
    </div>
  );
}
