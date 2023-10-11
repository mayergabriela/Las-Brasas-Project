/***** COMPONENTS  *****/
import CardButton from "../Card/CardButton";
import CardButtonAdd from "../Card/CardButtonAdd";

function Vinos({ vino }) {
  return (
    <div className="flex items-center justify-center h-auto my-28 md: w-80">
      <div className="flex flex-col p-5 h-100">
        <div className="overflow-hidden rounded-xl">
          <img
            className="object-contain center"
            src={vino.image}
            alt={vino.name}
          ></img>
        </div>
        <h5 className="mt-3 text-2xl font-medium md:text-3xl">{vino.name}</h5>
        <p className="mt-3 text-lg text- text-slate-500">{`$ ${vino.price}`}</p>
        <CardButton />
        <CardButtonAdd />
      </div>
    </div>
  );
}

export default Vinos;
