/***** REACT COMPONENTS  *****/
import MapaContacto from "./mapaContacto";
import FormularioContacto from "./formularioContact";

export default function ContactoComponent() {
  return (
    <section className='bg-[url("/images/contact-banner.jpg")] w-full lg:h-screen mx-auto bg-cover bg-no-repeat bg-center bg-fixed flex items-center relative'>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="max-w-[1240px] w-full h-full z-10 m-auto px-2 py-16">
        <div className="mx-auto my-14">
          <h1 className="text-2xl font-medium text-center text-white uppercase md:text-3xl lg:text-4xl">
            Dejanos tu consulta
          </h1>
        </div>
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="w-full h-full col-span-3 p-6 lg:col-span-2">
            <div className="h-full lg:p-6">
              <MapaContacto />
            </div>
          </div>

          <div className="w-full h-auto col-span-3 lg:p-4 ">
            <div className="p-6 ">
              <FormularioContacto />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
