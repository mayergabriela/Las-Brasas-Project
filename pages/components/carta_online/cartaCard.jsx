import Image from "next/image"
export default function CartaCard ({imageLocal}) {
  // blurdataurl{variable} para imagenes que no sean locales
    return (
        <div className="col-span-1 row-span-1">
        <Image src={imageLocal} alt="bebidas" blurDataURL="bebida"  placeholder="blur"  />
        <div className="font-bold text-xl">bebidas</div>

        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #artezanal
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #wizky
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #vinos
        </span>
      </div>
    )
}