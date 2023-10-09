import MapaContacto from "./mapaContacto";
import FormularioContacto from "./formularioContact";

export default function ContactoComponent() {
  return (
    <section className='bg-[url("/images/contact-banner.jpg")] w-full h-screen mx-auto bg-cover bg-no-repeat bg-center bg-fixed relative'>
      <div className="absolute grid inset-0 bg-black/60">
        <div>
          <FormularioContacto />
        </div>
        <div>
          <MapaContacto />
        </div>
      </div>
    </section>
  );
}
