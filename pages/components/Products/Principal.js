import CardButton from "../Card/CardButton";
import CardButtonAdd from "../Card/CardButtonAdd";
import Image from "next/image";

function Principal({ principal }) {
  return (
    <div className="flex items-center justify-center my-28 md: w-80 h-auto">
    <div className="flex flex-col p-5 h-100">
      <div className="overflow-hidden rounded-xl">
        <Image
          className="object-contain center"
          src={ principal.image }
          alt={ principal.name }
          width={200}
          height={200}
        />
      </div>
      <h5 className="mt-3 text-2xl font-medium md:text-3xl">
        {principal.name}
      </h5>
      <p className="mt-3 text-lg text- text-slate-500">
        {`$ ${principal.price}`}
      </p>
      <CardButton />
      <CardButtonAdd />
    </div>
  </div>
  )
}

export default Principal
