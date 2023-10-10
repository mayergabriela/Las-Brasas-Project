import MapaContacto from "./mapaContacto";
import FormularioContacto from "./formularioContact";

export default function ContactoComponent() {
  return (
    <section className='bg-[url("/images/contact-banner.jpg")] w-full lg:h-screen mx-auto bg-cover bg-no-repeat bg-center bg-fixed flex items-center relative'>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="max-w-[1240px] w-full h-full z-10 m-auto px-2 py-16">
        <div className="my-14 mx-auto">
          <h1 className="text-white text-center font-medium text-2xl md:text-3xl lg:text-4xl uppercase">
            Dejanos tu consulta
          </h1>
        </div>
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="col-span-3 lg:col-span-2 w-full h-full p-6">
            <div className="lg:p-6 h-full">
              <MapaContacto />
            </div>
          </div>

          <div className="col-span-3 w-full h-auto lg:p-4 ">
            <div className="p-6 ">
              <FormularioContacto />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
