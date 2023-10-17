import TextoCarta from "./textoCarta";

export default function CartaPrincipal() {
  return (
    <>
      <div className="grid place-content-center p-9">
        <h1 className="text-center p-9 font-roboto text-3xl font-medium leading-3 whitespace-nowrap">
          <span className=" border-b-2  border-yellow-500">MENU</span> PRINCIPAL COMPLETO
        </h1>
      </div>
      <section className="grid grid-cols-2 grid-rows-1 gap-7 sm:flex-col">
        <TextoCarta
          texto={"Salchicha parrillera Tradicional Criolla"}
          textoTitle={"SALCHICHA PARRILLERA"}
          monyMony={"-$2200-"}
        />
        <TextoCarta
          texto={"Asado de tira de 700g para dos personas."}
          textoTitle={"ASADO BANDERITA PREMIUM"}
          monyMony={"-$2840-"}
        />
        <TextoCarta
          texto={
            "Sándwich de chorizo asado, lechuga, tomate en pan tipo campo, chimichurri a parte y con guarnición a elección."
          }
          textoTitle={"SÁNDWICH DE CHORIZO"}
          monyMony={"-$2050-"}
        />
        <TextoCarta
          texto={"Colita de lomo 400g con guarnición a eleción."}
          textoTitle={"LOMO"}
          monyMony={"-$3540-"}
        />
        <TextoCarta
          texto={"Chorizo Tradicional Criollo."}
          textoTitle={"CHORIZO"}
          monyMony={"-$2840-"}
        />
        <TextoCarta
          texto={"Pechuga de Pollo deshuesada grillé con guarniciín a elección."}
          textoTitle={"POLLO"}
          monyMony={"-$2840-"}
        />
        <TextoCarta
          texto={"Chorizo bombón Tradicional Criollo."}
          textoTitle={"CHORIZO BOMBÓN TRADICIONAL"}
          monyMony={"-$1400-"}
        />
        <TextoCarta
          texto={"Brochette de lomo con panceta, cebolla y morrón con guarnición a elección."}
          textoTitle={"BROCHETTE DE LOMO"}
          monyMony={"-$3780-"}
        />
        <TextoCarta
          texto={"Asado de tira de 700g para dos personas."}
          textoTitle={"SÁNDWICH DE LOMITO"}
          monyMony={"-$2840-"}
        />
        <TextoCarta
          texto={"Asado de tira de 700g para dos personas."}
          textoTitle={"BROCHETTE DE POLLO"}
          monyMony={"-$2840-"}
        />
        <TextoCarta
          texto={"Asado de tira de 700g para dos personas."}
          textoTitle={"MORCILLA"}
          monyMony={"-$2840-"}
        />
        <TextoCarta
          texto={"Asado de tira de 700g para dos personas."}
          textoTitle={"BROCHETTE MIXTA"}
          monyMony={"-$2840-"}
        />
        <TextoCarta
          texto={"Asado de tira de 700g para dos personas."}
          textoTitle={"MORCILLA BOMBÓM"}
          monyMony={"-$2840-"}
        />
        <TextoCarta
          texto={"Asado de tira de 700g para dos personas."}
          textoTitle={"MOLLEJAS DE CORAZÓN"}
          monyMony={"-$2840-"}
        />
        <TextoCarta
          texto={"Asado de tira de 700g para dos personas."}
          textoTitle={"BIFE DE CHORIZO"}
          monyMony={"-$2840-"}
        />
        <TextoCarta
          texto={"Asado de tira de 700g para dos personas."}
          textoTitle={"DEGUSTACIÓN DE CARNES"}
          monyMony={"-$2840-"}
        />
        <TextoCarta
          texto={"Asado de tira de 700g para dos personas."}
          textoTitle={"PARRILLADA PARA 6 PERSONAS"}
          monyMony={"-$2840-"}
        />
        <TextoCarta
          texto={"Asado de tira de 700g para dos personas."}
          textoTitle={"VACÍO"}
          monyMony={"-$2840-"}
        />
        <TextoCarta
          texto={"Asado de tira de 700g para dos personas."}
          textoTitle={"PARRILLADA DE VEGETALES"}
          monyMony={"-$2840-"}
        />
        <TextoCarta
          texto={"Asado de tira de 700g para dos personas."}
          textoTitle={"CHINCHULINES DE TERNERA"}
          monyMony={"-$2840-"}
        />
      </section>
    </>
  );
}
