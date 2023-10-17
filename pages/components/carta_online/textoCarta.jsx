export default function TextoCarta({ textoTitle, texto, monyMony }) {
  return (
    <section>
      <div className="p-1">
        <h2 className="p-1 text-center font-roboto text-2xl font-medium leading-7 tracking-normal">
          {textoTitle}
        </h2>
        <div className="relative top-5">
          <p className="p-1 text-center text-2x2 font-medium leading-7 tracking-normal">
            {texto}
          </p>
        </div>
        <div className="relative top-3 p-2">
          <span className="p-3 decoration-neutral-950 grid place-content-center text-ellipsis font-medium leading-7">
            {monyMony}
          </span>
        </div>
      </div>
    </section>
  );
}
